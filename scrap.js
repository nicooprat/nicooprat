import { writeFile } from 'fs/promises'
import { launch } from 'puppeteer'

const getEvents = async (page) => {
  try {
    await page.waitForSelector('[data-testid="your-events-card"]')

    const events = await page.$$eval(
      '[data-testid="your-events-card"]',
      (els) => {
        return els.map((el) => {
          return {
            title: el.querySelector('p').innerText,
            group: el
              .querySelector('p')
              .nextElementSibling.innerText.split('\n')[1],
            time: el.querySelector('time').getAttribute('datetime'),
            thumb: el.querySelector('picture img').getAttribute('src'),
            link: el.querySelector('a').getAttribute('href'),
          }
        })
      },
    )

    return events
  } catch {
    return []
  }
}

const scrapMeetup = async (page) => {
  await page.goto('https://www.meetup.com/fr-FR/your-events/?pe=1')

  try {
    await page.waitForSelector('#onetrust-accept-btn-handler', {
      timeout: 10_000,
    })
    await page.click('#onetrust-accept-btn-handler')
  } catch (e) {
    // nevermind
  }

  await page.waitForSelector('#login-link')
  await page.click('#login-link')

  await page.waitForSelector('#email')
  await page.type('#email', process.env.MEETUP_LOGIN)
  await page.type('#current-password', process.env.MEETUP_PASSWORD)

  await page.waitForTimeout(1000) // Don't know why
  await page.waitForSelector('[data-testid="submit"]')
  await page.click('[data-testid="submit"]')

  const passedEvents = await getEvents(page)

  await page.goto('https://www.meetup.com/fr-FR/your-events/?rse=1')

  const futureEvents = await getEvents(page)

  await writeFile(
    './storage/meetup.json',
    JSON.stringify({ events: [...futureEvents, ...passedEvents] }),
  )
}

const scrapMedium = async (page) => {
  await page.goto('https://medium.com/nicooprat/')

  const articles = await page.$$eval(
    'div[data-post-id]',
    (els) => {
      return els.map((el) => {
        return {
          link: el.querySelector('a[data-post-id]').getAttribute('href'),
          thumb: el.querySelector('.u-backgroundSizeCover')?.style.backgroundImage.slice(4, -1).replace(/"/g, ""),
          title: el.querySelector('h3').innerText,
          excerpt: el.querySelector('h3').nextElementSibling.innerText,
          date: el.querySelector('[datetime]').getAttribute('datetime')
        }
      })
    },
  )

  await writeFile(
    './storage/medium.json',
    JSON.stringify({ articles }),
  )
}

const scrapGithub = async (page) => {
  await page.goto('https://github.com/nicooprat?utf8=%E2%9C%93&tab=repositories&q=&type=source&language=')

  const repos = await page.$$eval(
    '#user-repositories-list li',
    (els) => {
      return els.map((el) => {
        return {
          title: el.querySelector('[itemprop="name codeRepository"]')?.innerText.trim(),
          link: `https://github.com${el.querySelector('[itemprop="name codeRepository"]').getAttribute('href')}`,
          description: el.querySelector('[itemprop="description"]')?.innerText.trim(),
          lang: el.querySelector('[itemprop="programmingLanguage"]')?.innerText.trim(),
          updated: el.querySelector('relative-time')?.getAttribute('datetime')
        }
      })
    },
  )

  await writeFile(
    './storage/github.json',
    JSON.stringify({ repos }),
  )
}

const scrapTwitter = async (page) => {
  await page.goto('https://mobile.twitter.com/nicooprat')

  // Trigger more tweets to load
  await page.setViewport({
    width: 800,
    height: 6000,
  })

  await page.waitForSelector('[aria-label*="Nico Prat"] article')

  const tweets = await page.$$eval(
    '[aria-label*="Nico Prat"] article',
    (els) => {
      return els.map((el) => {
        const thumbs = el.querySelectorAll('img[alt="Image"], [data-testid="tweetPhoto"] img');
        const video = el.querySelector('video')
        const link = el.querySelector('a[href*="/status/"]');

        return {
          thumbs: thumbs.length && [...thumbs].map(e => e.getAttribute('src')) || video && [video.getAttribute('poster')],
          id: link?.getAttribute('href').split('/').reverse()[0],
          link: link && `https://twitter.com${link.getAttribute('href')}`,
          content: el.querySelector('[lang][dir="auto"]').innerText.trim(),
          date: el.querySelector('[datetime]').getAttribute('datetime'),
        }
      })
    },
  )

  await writeFile(
    './storage/twitter.json',
    JSON.stringify({ tweets }),
  )
}

;(async () => {
  const browser = await launch()
  const page = await browser.newPage()

  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36')

  await page.setViewport({
    width: 800,
    height: 600,
  })

  await scrapMeetup(page)

  await scrapMedium(page)

  await scrapGithub(page)

  await scrapTwitter(page)

  browser.close()
})()

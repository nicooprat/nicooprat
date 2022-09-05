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

;(async () => {
  const browser = await launch()
  const page = await browser.newPage()

  page.setViewport({
    width: 800,
    height: 600,
  })

  await page.goto('https://www.meetup.com/fr-FR/your-events/?pe=1')

  await page.waitForSelector('#onetrust-accept-btn-handler')
  await page.click('#onetrust-accept-btn-handler')

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

  console.log([...futureEvents, ...passedEvents])

  browser.close()
})()

const handler = async function(event, context) {
  console.log("Received event:", event)

  await fetch('https://api.netlify.com/build_hooks/62d72302d788632771285f9d', {
    method: 'POST',
  });

  console.log("Webhook fetched");

  return {
    statusCode: 200,
  };
};

module.exports.handler = handler;


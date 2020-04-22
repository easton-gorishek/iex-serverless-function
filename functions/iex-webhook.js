exports.handler = async (event, context) => {
  const { text } = JSON.parse(event.body)
  console.log("text", text)

  return {
    statusCode: 200,
    body: text,
  }
}

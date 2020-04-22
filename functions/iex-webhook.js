exports.handler = async (event, context) => {
  console.log({ httpMethod: event.httpMethod })
  console.log({ body: event.body })

  return {
    statusCode: 200,
    body: event.body,
  }
}

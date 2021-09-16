const randomwords = require('random-words');


// const handler = async (event) => {
//   try {
//     // const subject = event.queryStringParameters.name || 'World'
//     const rand = randomwords;
//     return {
//       statusCode: 200,
//       // body: JSON.stringify({ message: `Hello ${subject}` }),
//       body: JSON.stringify(rand),
//       // // more keys you can return:
//       // headers: { "headerName": "headerValue", ... },
//       // isBase64Encoded: true,
//     }
//   } catch (error) {
//     return { statusCode: 500, body: error.toString() }
//   }
// }

const getWord = async (event) => {
  try {
      return Promise.resolve(randomwords().toLowerCase());
  } catch (error) {
    return Promise.reject(error);
    // return { statusCode: 500, body: error.toString() }
  }
}

exports.handler = async (event) => {
  try {
  const word = await getWord(event);
  return {
    statusCode: 200,// word
    body: word,

  }
} catch (error) {
  return { statusCode: 500, body: error.toString() }
}
}

// module.exports = { handler }

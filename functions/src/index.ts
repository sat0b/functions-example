import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

// /sumQuery?left=10&right=20 => {"sum": 30}
export const sumQuery = functions.https.onRequest((request, response) => {
  const sum = parseInt(request.query.left as string) + parseInt(request.query.right as string);
  response.send({"sum": sum});
});

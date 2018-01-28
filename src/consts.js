module.exports = {
  serverPort: 8080,
  firebaseAuth: {
      databaseURL: "https://startupweekendlongueuil.firebaseio.com",
      serviceAccount: "./startupWeekendLongueuil-f73acaeb37bc.json",
      databaseAuthVariableOverride: {
          uid: "postApi"
      }
  }
}

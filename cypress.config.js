const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ivusgp',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "chromeWebSecurity": false
});


import { defineConfig } from 'cypress'
import browserify from "@cypress/browserify-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { preprendTransformerToOptions } from "@badeball/cypress-cucumber-preprocessor/browserify";

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        browserify({
          ...preprendTransformerToOptions(config, browserify.defaultOptions),
          typescript: require.resolve("typescript"),
        }),
      );


      return config;

    },
    // baseUrl: 'http://localhost:3000', // change as needed
    // specPattern: 'cypress/e2e/**/*.ts'
    specPattern: '**/*.feature'
  }
})

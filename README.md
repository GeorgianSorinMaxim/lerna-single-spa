# `single-spa` inside `lerna` monorepo experiment

## Run:

- Install the dependencies
   - `$ yarn`
- Run the individual micro-apps
   - `$ yarn watch:portal`
- Then start the `root` application
   - `$ yarn portal`
- Brwose to http://localhost:9000.


## Build commands

- `$ yarn watch:portal`: builds each app as `umd (webpack output)` module with `single-spa` as middleware to be consumed by the `single-spa` root app, any changes to the ap are automatically detected.

- `$ yarn build:portal`: builds a release bundle (outputs all contents to a folder) of the app as `umd (webpack output)` module that you can then serve from the production server.

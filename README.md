# Orchestrator

A serverless Monorepo framework based on [Lerna](https://github.com/lerna/lerna) and [Serverless](https://www.serverless.com)

The project aims to be a monorepo framework that combines the power of Lerna and Serverless
into a framework that can work both as a local development server and as a package versioning & dependency management tool


⚠️⚠️⚠️ This repo is still a work in progress and is not considered production ready yet ⚠️⚠️⚠️

# TODO
- [X] Add documentation for features and cli commands
- [ ] Enhance package versioning using something like [cz-commit](https://github.com/commitizen/cz-cli)
- [ ] Add support for typescript packages
- [ ] Add support for scoped serverless command arguments
- [ ] Publishing packages yet to be tested

One rule to conquer them all

️⚠️ Only type commands in the root of the monorepo ⚠️

It goes without saying that there is no need for running commands manually on a per package basis as it'll only add headaches.
all needed commands for package creation & management should be done from the root of the monorepo (top-level directory) 

## Creating new packages (library/function)
`npm run new`

creates new packages using yeoman generator.

## Adding package requirements
It is possible To add requirements to a package using `npm run add`

ex: npm run add @orchestrator/mylib @orchestrator/myfunc
ex: npm run add requests @orchestrator/myfunc

## Bootstrap packages
`npm run bootstrap`

Bootstrap the packages in the current repo.
Installs all of their dependencies and links any cross-dependencies.

## Run local dev server for a given function
`npm run function @orchestrator/my-function`

This starts a local dev server for any serverless function residing in the functions directory

## Creating a deployable package of a function
`npm run package @orchestrator/my-function`

Creates a publishable tarball in case of libraries (npm pack) and deployable tarball in case of functions in addition to cloudformation templates (serverless package) 

## Deploy functions
`npm run deploy  @orchestrator/my-function`

Deploys a serverless function based on the serverless config file in the function directory

## Clean project
`npm run clean`

Removes the `node_modules` directory from all packages.

# Release
`npm run release`

Runs [lerna publish](https://github.com/lerna/lerna/tree/master/commands/publish)

# Build
`npm run build`

Builds code in both functions & libraries

# Tests
`npm run test @orchestrator/my-package`

Runs tests on given package. if no package is given, it'll run across all functions & libraries

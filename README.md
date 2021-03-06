# GenPDMS
Web based client server app to calculate with and convert units.

## Build Status

Mono | .NET |
---- | ---- |
[![Mono CI Build Status](https://img.shields.io/travis/halcwb/GenPDMS/master.svg)](https://travis-ci.org/halcwb/GenPDMS) | [![.NET Build Status](https://img.shields.io/appveyor/ci/halcwb/GenPDMS/master.svg)](https://ci.appveyor.com/project/halcwb/GenPDMS)

This app aims to build both on mono and .net and to be deployable to Heroku and Azure

A demo can be found at: http://GenPDMS.azurewebsites.net.

## Background

## Build

To build the app use `.\build.sh build` or `build.cmd build`. Except for
`node.js` there are no other dependencies. Build targets can be listed by
`.\build.sh -lt`. The windows equivalent is `build.cmd`.

### Node.js
The client build requires that `node.js` is installed. The current release
is tested for version 6.2.2. It probably runs well on older releases. To
install node `./scripts/node_install.sh 6.2.2` can be used. To uninstall an older
version first, `./scripts/node_remove.sh` can be use. On windows, the 'normal'
node installer can be used, but it is recommended to install node by using
[nvm-windows](https://github.com/coreybutler/nvm-windows).

## Running local

Using `./build.sh copyclient`, in the `bin/GenPDMS` folder a runnable server client setup is created. On mono it can
be started with `mono bin/GenPDMS/GenPDMS` (can add a PORT). The app will run on http://localhost:3000 (3000 being the
default PORT if none is specified). On windows the `mono` prefix can of course be ommitted.

To run this application locally you can also use heroku. First install the [heroku toolbelt](https://toolbelt.heroku.com/) then add a `PATH` variable to the local fsi.exe and run
`heroku local -f Procfile.local`. (deployment is not working yet as mentionned above).

This app is also deployable to [Azure](https://GenPDMS.azurewebsites.net/). Currently by using quick and dirty manual ftp the build to the website root.

## Development

#### To develop the server side

To run tests `./build.sh nunit3`, or `build.cmd nunit3`.

#### To develop the client side

* `./scripts/run.sh` to start the server,
* `cd client` go to dir to start client scripts
* `./jake.sh karma` to start karma (open web browser with http://localhost:9876)
* `./watch.sh` to start watching files
* open web browser with http://localhost:300, this opens the app

Start development. Each time the client side code changes all tests are automatically run. The app window will be
automatically refreshed.

## Libray design
This repository uses an explicit opt-in `.gignore` strategy, meaning that all files are excluded unless specifically included via the `.gitignore` file.

## Collaborate
There is (always) a list of things [to do](https://github.com/halcwb/GenPDMS/blob/master/ToDo.md).

To facilitate collaboration commits will be made readable by prepending
commit messages with:

- feat: new feature
- fix: fix a bug or problem
- docs: document
- refactor: refactoring
- perf: improve performance
- test: add test
- chore: do a chore (build, libs, etc..)

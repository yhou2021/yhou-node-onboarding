This guide is for the developer of this template project to

#  Template Setup

How this template project was made.

### Bootstrap a Node JS Project

```
  mkdir infoseci-node-template
  git init
  npm init
```

### Define workspace

A workspace in NPM is similar to a Solution of .NET framework in Visual Studio. In a .NET solution, there could be mutliple dependent/independent
projects. Each project has its own unique dependency requirement, and some projects may be part of the dependencies of other projects within the
same solution. If project A is used by project B as dependency, project A will be compiled into project B's `node_modules/` as a dependency.

We use NPM Workspace to organize sub-projects of a project. In the root `package.json`, define the workspace by adding this entry:

```
  "workspace": {
    "projects/*"
  }
```

This means that all sub-packages of this project are stored under folder `projects/`, and each sub-package contains its own package definition `package.json`.

For details of NPM Workspace, see [here](https://docs.npmjs.com/cli/v8/using-npm/workspaces)

### Root Project Setup

#### Create a `tsconfig.base.json`

A `tsconfig.base.json` shall be created to serve as the base level of TypeScript configuration.

#### Install Code Style Formatter/Linters

We use Prettier for code style formatting. The configuration of Prettier in this project is simply a recommendation, and shall be adjusted
based on team agreement.

### Define sub-projects

Create these folders under `projects/`:

- `server/`: `$ npm init -w ./projects/server -y`
- `app/`: `$ npm init -w ./projects/app -y`

Sub-package `server/` contains the code for backend, and `app/` contains the front-end code.

#### Back-end setup

##### Install back-end packages

Run these installation commands within the sub-package's root directory.

Install these packages to `dependencies`

- `express@latest`

Install these packages to `devDependencies`

- `typescript@latest`
- `@types/node@latest`
- `ts-node@latest`
- `@types/express@latest`

Notice that when these packages are installed, no `package-lock.json` is created at subpackage level.

##### Create a `tsconfig.json`

Since we are using TypeScript, it is necessary to create a `tsconfig.json` file to hint that the project should be compiled with a TypeScipt compiler, and additional configurations for the compilation process.

We will create a default `tsconfig.json` and update its properties individually.

#### Front-end Setup

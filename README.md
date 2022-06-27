# Infosec Nodejs Template Project

Template repository for starting a new Node project at Infosec.

## Development Environment

- Node JS (v16 or later). Must be within the most recent supported LTS version of Node.
- NPM (v8 or later).
- Docker Desktop (v4 or later). Recommend staying on the latest stable release.

## Project Language

This project is configured to use TypeScript as the default programming language.

## Get Started

- Install required software (Docker, Homebrew, Node, Git, your preferred text editor/IDE...)
- In Github, click "Use this template" to create your own repository from this template.
- Clone the repository you created
- Change directory to the repository
- Install NPM dependencies: `$ npm install`
- Start the Docker container (database):
```
$ cd docker/
$ docker-compose up
```
- Run the entire solution from project root: `$ npm run dev`

## Migrations
To make a database migration, update `schema.prisma` file in `server/prisma/`. Schema is defined using Prisma Schema.

To make a migration, go to `$PROJECT_ROOT` and run `$ npm run dbmigrate`. This will start an interacive session with Prisma CLI. You will need to provide
a name to identify the migration. Once the migration file is generated, add the migration file as well as the migration lock file to Git.

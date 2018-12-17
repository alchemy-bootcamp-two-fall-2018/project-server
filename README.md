# project-server

Demo project server repo

## Setup

1. `cd` into `server` repo
1. `> npm init`
    * Follow prompts
1. `> npm i express morgan jsonwebtoken bcryptjs nodemon dotenv pg`
1. `> npm i eslint -D`
1. `> code .`
1. Copy in boilerplate files:
    * `server.js`
    * `.eslintrc`
    * `.gitignore`
        ```
        node_modules
        .env
        ```
    * `.travis.yml`
1. `> mkdir lib scripts`
1. Copy in template boilerplate for:
    * `scripts/create-tables.js`
    * `scripts/drop-tables.js`
    * (optional: `scripts/seed-date.js`)
1. Add npm scripts:
    ```json
      "scripts": {
        "create-tables": "node scripts/create-tables.js",
        "drop-tables": "node scripts/drop-tables.js",
        "load-seed-data": "node scripts/load-seed-data.js",
        "recreate-tables": "npm run drop-tables && npm run create-tables",
        "db-load-all": "npm run recreate-tables && npm run load-seed-data",
        "lint": "eslint .",
        "pretest": "npm run lint",
        "test": "exit 0",
        "start": "nodemon server.js"
    },
    ```
1. Add `app.js` template with auth route
1. Add boilerplate:
    * `db-client.js`
    * `jwt`
1. Add auth route template: 
    * `> mkdir lib/routes`
    * Copy template `auth.js` into `routes`
    * (adjust user profile columns as needed to `auth.js`)
1. Create `.env` and `.env.example`
    * `DATABASE_URL`
    * `PORT`
    * `APP_SECRET`
    * api keys, etc
1. Add `require('dotenv').config();` to any file that is a entry point:
    * `server.js`
    * db script files
1. Replace values in code with `process.env.KEY_NAME`
1. Create database in postgres
    * (local only - deployed will have db already)
1. Set db name in `db-client`
1. Add temporary "hello world":
    * route at `/` in `app.js`
    * Run server (`npm start`) and see that it works
1. Test DB connection
    * load seed data
    * do SQL query in "hello world"
    * Test in browser that it works at `localhost:3000`
1. Add `public` dir
    * `> mkdir public`
    * add middleware in `app.js`:
        * `app.use(express.static('public'));`
    * Test that it works
        * add `index.html`
        * inspect `localhost:3000`
1. Remove "hello world" test route(s)

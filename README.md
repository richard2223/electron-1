
**Build node modules**

`npm install`

**Run**

First serve the web

`npm start`

Run desktop application 

`npm run electron:serve`

this executes `main.ts` which is the entrypoint to the app. `main.ts` loads `http://localhost:4200`

`main-process/` has electron specific script (auto imported by `main.ts`)
these are all scripts for file reading, db access etc.

`ngx-electron ` is used for the communication between Angular and Electron Main Process services

https://github.com/ThorstenHans/ngx-electron
 
 
 



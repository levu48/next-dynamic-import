### Testing NextJS 3.0 dynamic import feature for the 3rd-party custom component loading

```
npm run dev
```

Do the following to test a 3rd loading:
- add a component module in directory '/components'
- modify '/pages/index.js' to use the new component
- npm start
- check http://localhost:3000 for the expected output

The web server when restarted (npm start) will automatically rebuild a new table of components based on what are currently in the directory '/components'.
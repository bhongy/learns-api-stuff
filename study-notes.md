# List of Resources

---

## [Intro to Node/Express by Eric Elliott](https://medium.com/javascript-scene/introduction-to-node-express-90c431f9e6fd)

### Tips on:
- using env variables
- setting `NODE_PATH` to avoid long `../..` require
- memory management for temporary user data (single threaded)
- debugging with Chrome
- handling Uncaught Exceptions
  > You must shut down the process when there is an uncaught exception, because by definition, if you don’t know what went wrong with the app, your app is in an unknown, undefined state, and just about anything could be going wrong.

---

- using `process.nextTick` is more performant than `setTimeout(fn, 0)` because `nextTick` doesn't need to access i/o
- `node --trace_gc <file.js>` will output garbage collection activities to the console.
- `Buffer.slice` creates a new reference that points to the part of the original buffer so `Buffer.write` to the sliced buffer will also mutate the original.
- `curl ... | json_pp` to pretty format JSON response

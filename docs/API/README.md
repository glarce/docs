:::warning
This part of the docs is a work in progress
:::

# API Basics
## Language
Glarce in node for two reasons, we (the developers) already know it and Vue is written in it so there is a lot of compatibility between them.

## Structure
### Inclusion
We wrote Glarce so that it could be included as a package and be imported as such.

#### Installation
```bash
npm install glarce/Glarce
```

#### Import
```js
const Glarce = require('glarce')
```

### Instance
It is object oriented so creating an instance is easy!

```js
const app = new Glarce()
```

### Config
The way config is added is unusual. To configure an option you need to use the `Glarce.add` function. The first parameter is the setting you want to change / feature you want to activate, and the second option is the config for that.  

```js
app.add('server', {
  secure: true
})
```

### Adding an AR code
To add an AR code you need to call the `Glarce.get` function. The first parameter is the id of the code. The second parameter is a function, where the first parameter is `res` and the second parameter is `req`. As of right now there is data in `req` and the value of `res` varies based on the type you chose.

```js
app.get(5, (res, req) => {
  res.type('video')

  res.loadVids(['videoWebM', 'videoMP4'])

  res.send()
})
```

#### Generating codes
The only tool that we could find to generate codes was [this one](http://au.gmented.com/app/marker/marker.php).

### Building
Run `Glarce.start` to start the build process. Any `Glarce.get` and `Glarce.set` commands after this will be ignored.

```js
app.start()
```

# Types
More information about the different types can be read [here](./types.html).

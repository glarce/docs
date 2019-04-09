:::warning
This part of the docs is a work in progress
:::

# Basics
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
const Glarce = require('Glarce')
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
To add an AR code 

# Getting started
## Requirements
### Node
The only thing you will need to use this program is [node.js](https://nodejs.org/), the programming language that this is . Grab it from the provided link and install it for your platform.

### IDE
While it is not necessary, if you want this process to be less painful, you are going to want an IDE. If you need something lightweight and you are on windows, use [notepad++](https://notepad-plus-plus.org/). However, if your going to be programming a lot on this project or another one, we recommend [Visual Studio Code](https://code.visualstudio.com/) or [Atom](https://atom.io/).  

## Installation
Go to the folder that you want to install it in and open terminal / cmd / powershell. Run the following commands in it:

```bash
npm init # Follow the instructions in the prompt to set up.
npm install glarce/Glarce # Install Glarce
cd node_modules/Glarce && npm install && cd ../.. # Install Glarce's dependancies
```
## Writing the app

First things first create a file called something like `app.js` (it has to have the `.js` extension). Add the following code to the to the top of the file:

```js
const Glarce = require('Glarce') // Import Glarce
const app = new Glarce() // Create a new app
```
This creates the app and set it to the variable `app`.

### Video
This creates a server that can be used as a production web server. Next create a folder named `media` and create another folder called `video` in it.

The following is a template that you will need to fill out to get video basics working.

```js
app.get(id, (res, req) => {
  res.type('video')

  res.loadVids(['videoWebM', 'videoMP4'])

  res.send()
})
```
#### id
The barcode id. Generate the barcode using [this tool](http://au.gmented.com/app/marker/marker.php).

#### type
The media type, for videos it has to be `video`.

#### loadVids
Loads the vids, must be an array. The path is from the inside of the media folder, like `video/video1.mp4` We strongly recommend having both `webm` and `mp4` formats for cross browser compatibility.


### A-Frame
Before you start writing raw a-frame code, you should probably learn how to use a-frame. The only thing that Glarce does is that it helps to handle marker ids and keeping your code more organised.

```js
app.get(id, (res, req) => {
  res.type('aframe')

  res.js(() => {
    console.log('Hello world')
  })
  res.assets('<!-- Assets here -->')
  res.aframe('<a-box position="0 0 0" rotation="0 0 0" color="#4CC3D9"></a-box>')

  res.send()
})
```

#### id
The barcode id. Generate the barcode using [this tool](http://au.gmented.com/app/marker/marker.php).

#### type
The media type, for videos it has to be `aframe`.

#### js / javascript
Loads javascript into the page.

#### assets
Loads HTML into the `a-assets` tag.

#### aframe
Loads HTML into the appropriate tag for the id.

### Final line
```js
app.start()
```

This line starts the app. Any code after this line will be ignored.

### End result
You should end up with a file that looks something like this.
```js
const Glarce = require('Glarce') // Import Glarce
const app = new Glarce() // Create a new app

app.set('server', {
  secure: true
})

app.get(4, (res, req) => {
  res.type('video')

  res.loadVids(['videoWebM', 'videoMP4'])

  res.send()
})

app.get(5, (res, req) => {
  res.type('aframe')

  res.js(() => {
    console.log('Hello world')
  })
  res.assets('<!-- Assets here -->')
  res.aframe('<a-box position="0 0 0" rotation="0 0 0" color="#4CC3D9"></a-box>')

  res.send()
})

app.start()
```

## Starting
### Dev
:::danger
DO NOT USE THE DEV SERVER IN PRODUCTION.
The files in the dev server are not optimised and the certificate is not secure or added to a certificate authority
:::
If you just want to start a dev server to test stuff run:
```bash
node [insert file name here]
```

### Production
Before you are putting this into production you are going to want to read our production guide (that I am yet to write).

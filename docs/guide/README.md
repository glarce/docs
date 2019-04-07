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
npm i glarce/Glarce # Install Glarce
cd node_modules/Glarce && npm i && cd ../.. # Install Glarce's dependancies
```
## Writing the app

First things first create a file called something like `app.js` (it has to have the `.js` extension). Add the following code to the to the top of the file:

```js
const Glarce = require('Glarce') // Import Glarce
const app = new Glarce() // Create a new app
```
This creates the app and set it to the variable `app`. Next add:

```js
app.set('server', {})
```
### Video
This creates a server that can be used as a production web server. Next create a folder named `media` and create another folder called `video` in it.

The following is a template that you will need to fill out to get video basics working.

```js
app.get(id, (res, req) => {
  res.type('video')

  res.loadVids(['videoWebM', ''])

  res.send()
})
```
#### id
The barcode id

#### type
The media type, for videos it has to be `video`.

#### loadVids
Loads the vids, must be an array. The path is from the inside of the media folder, like `video/video1.mp4` We strongly recommend having both `webm` and `mp4` formats for cross browser compatibility.

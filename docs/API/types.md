# Types
## Video
The video types displays a plane with a video over the code that is scanned.

```js
app.get(5, res => {
  res.type('video')

  res.interactivity({
      5 : {
        type: 'alert',
        title: 'Pause',
        text: 'Continue watching...',
        button: 'yes'
      },
      10 : {
        type: 'question',
        title: 'Jump',
        text: 'Do you want to jump to 15 seconds',
        buttons: [
          {
            text: 'ok',
            jumpTo: 15
          },
          {
            text: 'no'
          }
        ]
      },
      15: {
        type: 'end'
      },
      20 : {
        type: 'end'    
      }    
    })

  res.loadVids(['videoWebM', 'videoMP4'])

  res.send()
})
```

### Adding media
To add media to this tag you need to call `res.loadVids`. To include videos, you add their path relative to `./media/` to an array of strings.

You will need your videos to be in both the mp4 and webm formats, for optimal cross-browser compatibility. You can convert to them using [vlc](https://www.videolan.org/vlc/) (we will try and create a better solution in the future).

### Interactivity
We believe that interactivity is very important of any augmented reality. The interactivity fo videos is going to be rather simple. The time that is is executed is specified first then the object containing the information. Do not specify a float as a second as javascript may behave funny. The following types of interactivity are below.

#### Alert
This pauses the video and displays some text, can be used to check if a user has done something and continue once they have done it.

| Property        | Usage           |
| ------------- | ------------- |
| type      | What type of interactivity is used, must be `alert` for alerts |
| title | The title of the alert |
| text | The alert content |
| button | The text on the close button |

#### Question
Ask the user a question and jump to a point in the video based on the answer.

| Property        | Usage           |
| ------------- | ------------- |
| type      | What type of interactivity is used, must be `question` for questions |
| title | The title |
| text | The content |
| button | An array of button objects |

**Button properties**
| Property        | Usage           |
| ------------- | ------------- |
| text      | The text in the button |
| jumpTo | The second to jump to |

#### End
Ends the video at a certain point
| Property        | Usage           |
| ------------- | ------------- |
| type      | What type of interactivity is used, must be `end` for ends |

## Aframe
Displays a custom aframe component. 

```js
app.get(4, res => {
  res.type('aframe')

  // JS that is run after the page has loaded
  res.js(() => {
    console.log('Hello world')
  })

  // The aframe html code
  res.aframe(`
    <a-box color="red" width="3"></a-box>
  `)

  // The assets html
  res.assets(`
    <img src="yourSrcHere" id="yourIdHere" />
  `)

  res.send()
})
```

### `js` or `javascript`
Loads any of the javascript that you pass into it on the barcode being mounted. Takes in a JavaScript function.

### `aframe`
This string is loaded in as html into the barcode. 

### `assets`
Loads the string of html into the `a-assets` tag. 

image-reader
============

Allow you to control and switch an image source to play as a MovieClip.

Installation
============

```
npm install -S image-reader
```

How to use
==========

```javascript
var ImageReader = require('image-reader');

var reader;

// preload all your images, then

reader = new ImageReader({
	image: [
		'/media/img1.jpg',
		'/media/img2.jpg',
		'/media/img3.jpg',
		'/media/img4.jpg',
		'/media/img5.jpg'
	]
});

anim();

function anim() {
	
	requestAnimationFrame(anim);

	reader.update();
}
```

Documentation
=============

### Constructor

```javascript
new ImageReader(image[, options]);
```

#### image `Array[String]`
The image urls that are going to be switched. Preloading them will avoid flickering.

---

### Options

#### autoplay `Boolean` `true`
Start playing immediately when instanciated

#### el `Image` `null` 
The targeting image element. If not provided, one will be created and must be inserted, accessible through `el` property.

#### fps `Number` `30`
FPS of the animation

#### from `Number` `0`
Starting url, indexed from the array you pass at constructor.

#### loop `Boolean` `false`
Loop when it reaches `to` value

#### onComplete `Function` `null`
Called when the animation complete. Does not work if repeat is set.

#### onRepeat `Function` `null`
Called at each repeat

#### onRepeatComplete `Function` `null`
Called when the animation has played all repeat

#### repeat `Number` `0`
How many time the animation should repeat

#### retina `Boolean` `false`
If true, the created image (if no one was provided) would be styled with `width` and `height` divided by 2

#### reverse `Boolean` `false`
If `true`, animation will be played in reverse side 

#### to `Number` `null`
Frame to stop the animation, indexed from the array you pass at constructor.

---

### Methods

#### update([force])
Update the current image src according to `fps`. This method has to ba called by your own in a raf.
- **force** `Boolean` `false` : If `force` is set to `true`, FPS will be ignore and current src will be updated

#### play()
Start playing from last known position

#### pause()
Pause at current position

#### stop()
Stop playing and set current position to `from` value

#### reverse([side])
Switch playing side, optionaly forcing it
- **side** `Boolean` `null` : Switch playing side. If side is set to `true`, normal side will be forced; `false` will force reverse.

#### goFromTo([from, to])
`from` or `to` can be omitted.
- **from** `Number` : Set starting frame and go to it
- **to** `Number` : Set ending frame

#### goToAndStop(frame)
- **frame** `Number` : Move cursor to `frame` and stop playing

#### destroy()
Stop playing and remove image element from the DOM

---

### Properties

###### Getter

#### el `Canvas`
Return the targeting image element. If no `el` was given to the constructor, you will have to add this to your page.


###### Setters

#### fps `Number`
FPS of the animation

#### loop `Boolean`
Loop when it reaches `to` value

#### repeat `Number`
How many time the animation should repeat

#### onComplete `Function`
Called when the animation complete. Does not work if repeat is set.

#### onRepeat `Function`
Called at each repeat

#### onRepeatComplete `Function`
Called when the animation has played all repeat

---

Browser compatibility
---------------------

If relies on `performance.now()`. You could need a polyfill for IE9
- `perfnow` polyfill installation with `npm install -S perfnow`

Contribute
----------

First you should install [EditorConfig](http://editorconfig.org/) package in your code editor. Then,

```
cd .git/hooks
ln -s ../../hooks/pre-commit

npm install
```

Then 2 commands are available :
- `npm run watch` watch and build js files
- `npm run build` clean, build and uglify js files

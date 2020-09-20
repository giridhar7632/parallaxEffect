# Parallax Effect

**using vanilla javaScript**
<br/>
<br/>
One of the most popular effects of the modern web is the parallax effect. There are many java libraries available out there for creating the parallax effect. But we are going to use vanilla javascript to get it into action. Trust me! it's that simple. Then get started and follow along!
You have to just have some beginner-intermediate knowledge about HTML, CSS and some javaScript.

## Getting Started

### Parallax

Parallax movement is when things move at different speeds relative to each other. This effect can be used to create an illusion of depth. This effect actually seen while scrolling a webpage. So it is called Parallax scrolling.
The technique is popular in many places including video games, where it’s usually seen in the layered backgrounds.

> **Note:** Parallax scrolling does not always work on mobile devices smartphones. However, you can use media queries to turn off the effect on mobile devices.

We can see how the parallax effect works in this example [here](https://parallax-effect.giridharhackclu.repl.co/)
<br>
You can see different elements are moving different speeds while scrolling.
<br>
### Creating the Parallax Effect
Practically a parallax is composed of more than one layer in parallel, moving along on scroll at different speeds, giving us the feel that they're at different distances.
Let's start working.<br>
Fork this repl and explore ! [repl](https://repl.it/@Giridharhackclu/parallax-starter#index.html).
<br>
It contains five elements with classes `layer-1 faster`, `layer-2 slower`, `layer-3 no-effect`, `layer-4 right` and `layer-5 left` added with some basic styles. I created the elements in circular shape. Go ahead and use your creativity and customise the styles.<br>

Let's add parallax effect.
This is very simple. The thing we have to do here is just select the layer and change it's speed while scrolling. That's it!<br>
Go to [script.js](https://repl.it/@Giridharhackclu/parallax-starter#script.js) and add a the following function.<br>

```javascript
const parallax = (layer, distance, speed) => {
  const item = document.querySelector(layer)

  item.style.transform = `translateY(${distance*speed}px)`
}
```
This function has three arguments `layer` - the layer you want to add parallax, `distance` - how much we scroll and `speed` - the required speed change. We are going to add parallax for multiple layers. That's why we created a function for recalling it for different layers.<br>

And then we are going to get the element using `querySelector`. You can use any javascript DOM selector as your wish. Finally we will be translating the `Y` of the element using CSS `transform: translateY( );` for changing the speed of the layer. The positive value translates downwards and negative value translates upwards. Discover more about `translateY( )` [here](https://developer.mozilla.org/en-US/docs/web/css/transform-function/translateY).<br>

### Event Listener
Now we are going to call this function while scrolling. So add an event listener `scroll` and the function given as argument gets executed.<br>

```javascript
document.addEventListener('scroll', () => {
  
})
```
> **scrollY:** The read-only scrollY property of the Window interface returns the number of pixels that the document is currently **scrolled vertically**. This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number. You can get the number of pixels the document is **scrolled horizontally** from the **scrollX** property. - [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY).

The `parallax` function is called inside. Here, for this project we are going to select the layers with classes `layer-1` and `layer-3` from the document. Then the `distance` argument in `parallax` function is how much we scroll i.e., `window.scrollY` and the speed value can be customised. The `speed` argument decides whether the layer moves faster or slower.
Add the following code<br>
```javascript
parallax('.layer-1', -window.scrollY, 0.5)
parallax('.layer-3', window.scrollY, 0.3)
```

For faster speeds the `speed` will be positive and for slower speeds it should be negative.
In the above code, we are adding faster speed(0.5) to `layer-1` and slower to `layer-2`. So finally look at the output and scroll. You can see that `layer-1` will move faster(0.5 times the normal speed), `layer-3` will move slower i.e., downwards and the one with `no-effect` or `layer-2` will move with normal speed.<br>
Your final page will look something [like this](https://parallax-effect.giridharhackclu.repl.co/).<br>
Try changing the speed to `1` and observe what happens to each layer and think why it happens. You can check the answer [here](#speed-1).<br>
That's it! You can add any number of layers for the document and call the `parallax` function. This is the *parallax effect*.
This is the main basic about Parallax effect. You can modify the function `parallax` and get the result you want.<br> 
Now Let's try different parallax.
### Horizontal Parallax
Now let's change the javascript for horizontal parallax or you can again fork this repl! [here](https://repl.it/@Giridharhackclu/parallax-starter#index.html) <br>
In horizontal parallax, the elements in the page move horizontally as you scroll. 
Replace the `translateY` with `translateX` which causes jorizontal motion.<br> 

```javascript
const hrparallax = (layer, distance, speed) => {
  const item = document.querySelector(layer)

  item.style.transform = `translateX(${distance*speed}px)`
}
```
The positive value translates rightwards and negative value translates leftwards. Discover more about `translateX( )` [here](https://developer.mozilla.org/en-US/docs/web/css/transform-function/translateX).

### Inspiration
* **Multilayer Parallax** : [Firewatch](http://www.firewatchgame.com/)- they created really awesome hero page using multilayer parallax.

### speed-1 
In vertical parallax, when the speed is `1` both upwards and downwards, that means the layer gets translated with speed of scrolling. <br>
The faster layer moves with double the speed of normal scrolling-speed. While, the slower layer will be fixed. Because while you are scrolling upwards it gets translated downwards with the same speed. So it appears as fixed in its position.
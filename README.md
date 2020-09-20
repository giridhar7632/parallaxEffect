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
Let's start working
Explore the [repl](https://repl.it/@Giridharhackclu/parallax-starter#index.html).
<br>
It contains three elements with classes `layer-1 faster`, `layer-2 no-effect` and `layer-3 slower` resplectively added with some basic styles. I created the elements in circular shape. Go ahead and use your creativity and style the elements as you want.
<br>
Let's add parallax effect.
This is very very simple. The thing we have to do here is just select the layer and change it speed while scrolling. That's it!<br>
Go to [script.js](https://repl.it/@Giridharhackclu/parallax-starter#script.js) and add a the following function.
<br>
```javascript
const parallax = (layer, distance, speed) => {
  const item = document.querySelector(layer)

  item.style.transform = `translateY(${distance*speed}px)`
}
```
<br>
This function has three arguments `layer` -the layer you want to add parallax, `distance` -how much we scroll and `speed` -the required speed change. We are going to add parallax for multiple layers. That's why we created a function for recalling it for different layers.<br>
And then we are going to get the element using `querySelector`. You can use any javascript DOM selector as your wish. Finally we will be translating the `Y` of the element using CSS `transform: translateY( );` for delaying the speed of the layer. 
<br>
Now we are going to call this function while scrolling. So add an event listener `scroll` and the function given as argument gets executed  
<br>
```javascript
document.addEventListener('scroll', () => {
  parallax('.layer-1', -window.scrollY, 0.5)
  parallax('.layer-3', window.scrollY, 0.3)
})
```
<br>
> **scrollY:** The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically. This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number. You can get the number of pixels the document is scrolled horizontally from the scrollX property.

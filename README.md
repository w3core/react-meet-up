# Dive deep into React!
The React Meet Up is a public event to dive deeply in modern and accurate approaches in React development.
All topics are technical and are focused on professional development and solving of issues in real-world React applications.
We will start from basics, so it is also great opportunity to start with us!
All you need to be ready for the React Meet Up is light knowledge in JavaScript and middle knowledge in CSS3/HTML5.
Bring good mood with you!

## Chapter 3: Redux store with ImmutableJS

### Step 4: Default store state and Redux DevTools

It could be handy to define the store's default state and Redux allows us to implement that - we need to pass it as a second argument to the `createStore()` method.

Alongside, it also could be handy to have some debug tool to look at our state changes. [Redux DevTool](https://github.com/zalmoxisus/redux-devtools-extension) extension is exactly there to help us. Since you've installed it you need to add it's middleware to our store passing it as a third argument to the `createStore()` method.

And that's it - you may open your browser DevTool, switch to "Redux" tab and browse your store and navigate through the lifetime of your app!

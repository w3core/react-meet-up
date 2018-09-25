# Dive deep into React!
The React Meet Up is a public event to dive deeply in modern and accurate approaches in React development.
All topics are technical and are focused on professional development and solving of issues in real-world React applications.
We will start from basics, so it is also great opportunity to start with us!
All you need to be ready for the React Meet Up is light knowledge in JavaScript and middle knowledge in CSS3/HTML5.
Bring good mood with you!

## Chapter 3: Redux store with ImmutableJS

### Step 2: Component and Store

Let's setup our store and show counter value inside `Counter` component, which we'll create as well.
For now our store will only consist of `counterReducer` mapped as `counter`.

The next step is to "wire" our store to pass down data to `Counter` component. We need to user `react-redux`'s `connect()` method and supply it with our "strategy" on store mapping. Since counter value is stored with the exact same name let's map it into the Home page as a `value` variable, and pass it down to the `Counter` component.

And thats it - we can see our `Counter` component with default value of 0 and "+"/"-" buttons below, but can those buttons change its value? You'll get to it in the next step.

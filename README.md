# Dive deep into React!
The React Meet Up is a public event to dive deeply in modern and accurate approaches in React development.
All topics are technical and are focused on professional development and solving of issues in real-world React applications.
We will start from basics, so it is also great opportunity to start with us!
All you need to be ready for the React Meet Up is light knowledge in JavaScript and middle knowledge in CSS3/HTML5.
Bring good mood with you!

## Chapter 3: Redux store with ImmutableJS

### Step 6: Adding and toggling todo state

So, obviously, we need to introduce a property which would be responsible for todo state (active/completed). I think `completed` boolean prop will do just fine.

Besides that - we need to create an action which would pass todo's uid to the reducer and create a specific handler for this action for the reducer.

Since our todo item features begin to grow it is reasonable to introduce separate `<Todo/>` component which would be responsible for showing todo item text, status, and toggling status as well.

# Dive deep into React!
The React Meet Up is a public event to dive deeply in modern and accurate approaches in React development.
All topics are technical and are focused on professional development and solving of issues in real-world React applications.
We will start from basics, so it is also great opportunity to start with us!
All you need to be ready for the React Meet Up is light knowledge in JavaScript and middle knowledge in CSS3/HTML5.
Bring good mood with you!

## Chapter 3: Redux store with ImmutableJS

### Step 5: Simple todo list

Let's start to interate on something more interesting than a counter. Over a few next steps, we'll create a decent todo-list application.
At this step, we'll create `todos()` reducer with a default state of an empty array.

Our todo at this step would be an object with `text` key which describes, ehm, the text of an item and `uid` generated at the time of creation of todo to help us distinguish and iterate over them.

We'll start with a single action called `todoAdd()` which takes only on one argument which would be the text of our todo.

Finally, we'll create two simple components to iterate and show our "todo" items and text input which would give us ability to create new items

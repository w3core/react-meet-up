# Dive deep into React!
The React Meet Up is a public event to dive deeply in modern and accurate approaches in React development.
All topics are technical and are focused on professional development and solving of issues in real-world React applications.
We will start from basics, so it is also great opportunity to start with us!
All you need to be ready for the React Meet Up is light knowledge in JavaScript and middle knowledge in CSS3/HTML5.
Bring good mood with you!

## Chapter 3: Redux store with ImmutableJS

### Step 12: Middlewares.

Yet, our app is capable of many nice things, it feels so frustrated when we hit reload button and our todos are gone :c. Lets fix that!

Well, the most obvious thinh to help us - `LocalStorage`. We can have some part of it store our app state, which would be updated when we want it.
And, obviously, our local storage middleware would be responsible for updating it.

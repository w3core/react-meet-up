# Dive deep into React!
The React Meet Up is a public event to dive deeply in modern and accurate approaches in React development.
All topics are technical and are focused on professional development and solving of issues in real-world React applications.
We will start from basics, so it is also great opportunity to start with us!
All you need to be ready for the React Meet Up is light knowledge in JavaScript and middle knowledge in CSS3/HTML5.
Bring good mood with you!

## Chapter 3: Redux store with ImmutableJS

### Step 10: Showing remaining todo items, and clearing completed ones

It would be nice to indicate how many items are not yet completed. We can utilize the same approach as in Step 9 - create a method which would pass down the number of items to our `<Information/>` component.

Also, let's create a todo action which would allow us to remove items with completed status. To determine whether we need to show button to clear completed todo items we would also need to create a method which would tell us if there are any completed todo items at all.

Having that done our todo-app feels way more UX friendly. That's good, isn't it?

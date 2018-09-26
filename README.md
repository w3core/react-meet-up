# Dive deep into React!
The React Meet Up is a public event to dive deeply in modern and accurate approaches in React development.
All topics are technical and are focused on professional development and solving of issues in real-world React applications.
We will start from basics, so it is also great opportunity to start with us!
All you need to be ready for the React Meet Up is light knowledge in JavaScript and middle knowledge in CSS3/HTML5.
Bring good mood with you!

## Chapter 3: Redux store with ImmutableJS

### Step 8: Visibility filter

Let's make a feature which'll allow user to browse all,completed, or active todo items. We'll call visibility filter.

Althought we need to create new reducer and action creator to change our visibility filter, we need as well "filter" our todo items based on visibility filter value.

To achvive this we can introduce new method which would take current filter value and our array of todo items and return us only those todo items which meet our current filter value.

As soon as we have this implemented - our visibility filter feature is comlpeted!

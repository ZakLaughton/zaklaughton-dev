---
title: 'Get data from your URL into your React app with React Router'
excerpt: 'A plain, dead-simple example of how to use React Router URL parameters to pass data from the URL into your React components.'
publishDate: 'Sep 26 2019'
tags:
  - React
  - React Router
---

In trying to learn React Router URL parameters, I had a hard time finding clean, no-frills examples. Now that I have a better understanding, I'm putting a plain, dead-simple example here to help others.

## The end product

I am going to show you how to create a site that takes 3 parameters from the URL, and passes them into a React component to display on the screen.

![webpage screenshot](https://cdn-images-1.medium.com/max/1600/1*fXoG7_xt6xmvM7JLz305PA.png)

## Prerequisites

- Basic understanding of building with React
- A react project with react-router-dom installed (Create React App is a great tool to spin up a React application)

## The code

This is the full index.js file, and pretty much everything you need to set up the site (see the full repository [here](https://github.com/ZakLaughton/dead-simple-routing-example)):

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
const AppRouter = () => (
  <BrowserRouter>
    <Route path='/:parameter1/:parameter2/:parameter3' render={(props) => <App {...props} />} />
  </BrowserRouter>
);
const App = (props) => {
  const { parameter1, parameter2, parameter3 } = props.match.params;
  return (
    <div>
      First: {parameter1} <br />
      Second: {parameter2} <br />
      Third: {parameter3} <br />
    </div>
  );
};
ReactDOM.render(<AppRouter />, document.getElementById("root"));
```

## What's going on here?

We're basically wrapping the entire application in a <BrowserRouter>component, calling a <Route> component for a given URL, and passing the parameters from the URL into <App>as props. Lets dig into each piece…

### \<BrowserRouter>

```javascript
const AppRouter = () => <BrowserRouter>...</BrowserRouter>;
```

In order to use `<Route>`, it must have `<BrowserRouter>` (or one of the other router types) somewhere as a parent. React router uses this [higher order component](https://reactjs.org/docs/higher-order-components.html) to help do its routing magic in the background. There's no component configuration required here – all you need to do is be sure everything is wrapped in <BrowserRouter> open/close tags.

[\<BrowserRouter\> documentation](https://reacttraining.com/react-router/web/api/BrowserRouter)

### \<Route>

```javascript
<Route path='/:parameter1/:parameter2/:parameter3' render={(props) => <App {...props} />} />
```

Here's where the meat of the work is being done. `<Route>` is a component that decides what component to show based on the URL.

- `path='/:parameter1/:parameter2/:parameter3'` tells React Router to use this `<Route>` component whenever the URL has a path with 3 items separated by slashes after the base URL (for example, tvshows.com/series/season/episode). The parameters, such as `:parameter1`, are variables to assign that part of the URL to and pass into the rendered component.
- `render={props => <App {...props} />}` renders the `<App>` component with the props passed in from the route, which will include the parameters set in the path in the line above

[\<Route\> documentation](https://reacttraining.com/react-router/web/api/Route)

### \<App>

```javascript
const App = (props) => {
  const { parameter1, parameter2, parameter3 } = props.match.params;
  return (
    <div>
      First: {parameter1} <br />
      Second: {parameter2} <br />
      Third: {parameter3} <br />
    </div>
  );
};
```

Since `<Route>` is rendering this `<App>` component, it's also passing in the props it needs. `<Route>` passes several props by default, but the one part of the props we're concerned about here is match.params. **Whenever you use `<Route>` to render a component, you can always find the URL parameters in `props.match.params`**.

The `<App>` component uses object destructuring to assign local variables for all the parameters passed in props.match.params, then uses these variables to display the data from the URL. That's it!

## Wrapping up

Once you get the hang of using URL parameters, you can do some pretty powerful things with rendering the application based on the exact URL the user is visiting. It's even a handy way to [lift up state](https://reactjs.org/docs/lifting-state-up.html) in certain cases where you have multiple lower-level components sharing the same state that's also reflected in the URL.

Questions? Comments? Concerns? Let me know! Comment below or tweet me [@ZakLaughton](https://twitter.com/ZakLaughton).

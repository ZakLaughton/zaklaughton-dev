---
title: 'The only 3 steps you need to mock an API call in Jest'
excerpt: "Can't figure out how to mock an API call in Jest? Start here. Three steps, no magic, no mystery."
publishDate: 'Feb 2 2020'
updatedDate: 'May 30 2021'
isFeatured: true
tags:
  - Testing
  - Jest
  - React
---

I recently found myself working in a Javascript codebase where I needed to implement new Jest tests. I knew very little at the time about writing tests, so I looked to Jest docs and existing patterns in the codebase to figure out best practices and how to do it. It was fairly straightforward, and I even found myself enjoying testing. But I could not for the life of me reliably mock an API call.

![Dog with caption "I have no idea what I'm doing"](https://dev-to-uploads.s3.amazonaws.com/i/ks0sfsk19qw32d6wiy8j.jpg)

The docs were clear and the existing code had good patterns, but there were just so many ways to mock things. Many tests used  `jest.mock()`. Some tests used  `jest.spyOn()`. There were also many other tests that used  `jest.genMockFromModule()`. Sometimes the mocks were inline, and sometimes they were in variables. Sometimes they were implemented from other mysterious files in magical `__mocks__` folders.

Whenever I encountered these methods, I'd try to understand them. But usually, I got just confident enough to shoot myself in the foot. I had no idea what I was doing.

## The issue

The issue was that I was trying to learn how to run before I even knew how to walk. Jest has many powerful ways to mock functions and optimize those mocks. But all these methods are useless if you don't know how to make a simple mock in the first place. While the Jest documentation provides a lot of great insight and techniques, **I couldn't figure out where to start**.

In this article, I hope to give you the absolute basics to mock an API call so you can benefit from my 2020 hindsight (heh). If you're going crazy like I was because you can't figure out how to _just make a simple damn mock_, Start here…

_(NOTE: I wrote the code below in Node.js, but the mocking concepts also apply to frontend Javascript and ES6 modules)_

## The unmocked code

We're going to be testing this `getFirstAlbumTitle()` function. It fetches an array of albums from an API and returns the title of the first album:

```javascript
// index.js
const axios = require("axios");

async function getFirstAlbumTitle() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/albums");
  return response.data[0].title;
}

module.exports = getFirstAlbumTitle;
```

...and here's our initial mock-less test for this function. This verifies the function actually returns the title of the first album in the list:

```javascript
// index.test.js
const getFirstAlbumTitle = require("./index");

it("returns the title of the first album", async () => {
  const title = await getFirstAlbumTitle(); // Run the function
  expect(title).toEqual("quidem molestiae enim"); // Make an assertion on the result
});
```

The test above does its job, but the test actually makes a network request to an API when it runs. Real API calls are prone to failure, even if the function is working as intended. For example, this test will fail if the API changes the order of the list, if the API is down, or if the dev machine loses connection to the internet. Not to mention, making these requests in a large number of tests can bring your test runs to a slow crawl.

But how can we change this? The API request is being made with Axios as a part of `getFirstAlbumTitle()`. How in the world are we supposed to reach _inside_ the function and change the behavior?

## Mock it in 3 steps

Alright, here it is. This is the big secret that would have saved me mountains of time as I was wrestling with learning mocks. To mock an API call in a function, you just need to do these 3 steps:

1. **Import the module you want to mock _into your test file._**
1. **`jest.mock()` the module.**
1. **Use `.mockResolvedValue(<mocked response>)` to mock the response.**

That's it!

Here's what our test looks like after doing this:

```javascript
// index.test.js
const getFirstAlbumTitle = require("./index");
const axios = require("axios");

jest.mock("axios");

it("returns the title of the first album", async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: "My First Album",
      },
      {
        userId: 1,
        id: 2,
        title: "Album: The Sequel",
      },
    ],
  });

  const title = await getFirstAlbumTitle();
  expect(title).toEqual("My First Album");
});
```

## What's going on here?

Let's break this down. The most important part to understand here is the import and `jest.mock()`:

```javascript
const axios = require("axios");

jest.mock("axios");
```

After importing a module and running `jest.mock(<module-name>)`, you have complete control over all functions from that module. _You control these functions even if they're called inside another imported function_.

When you run `jest.mock('axios')`, Jest replaces every function in the axios module with empty "mock" functions. These mock functions essentially do nothing and return `undefined`:

```javascript
const axios = require("axios");
jest.mock("axios");

// Does nothing, then returns undefined:
axios.get("https://www.google.com");

// Does nothing, then returns undefined:
axios.post("https://jsonplaceholder.typicode.com/albums", {
  id: 3,
  title: "Album with a Vengeance",
});
```

So now that you've eliminated the default behavior, you can replace it with your own...

```javascript
axios.get.mockResolvedValue({
  data: [
    {
      userId: 1,
      id: 1,
      title: "My First Album",
    },
    {
      userId: 1,
      id: 2,
      title: "Album: The Sequel",
    },
  ],
});
```

That's right...the mocked replacement functions come with cool superpower methods to control their behavior! The most important one for this example is `.mockResolvedValue()`. This sets the default value to return whenever the method is called. Simply put: you can make `axios.get()` return whatever you want! And **it doesn't matter whether it's called directly in your test file or as a part of a function imported into your test** – Jest will mock the function no matter where it's called!

Use this newfound power to give your functions exactly what they should expect from the API calls. Stop worrying about what the network requests return, and just focus on what YOUR code does once it gets the response!

_If you want to play around with the examples, feel free to use this demo repository:_
[zaklaughton/simple-api-mocking-with-jest](https://github.com/ZakLaughton/simple-api-mocking-with-jest)

## Wrapping up

There you have it! This is the very basics of what you need to mock functions from another module: **import the module, `jest.mock()` the module, then insert your own return values with `.mockResolvedValue()`!**

I recommend starting here, using _only_ these techniques as you start building out your first mocks for your network calls. Once you have a foundational understanding of what's going on here, you can slowly start adding the other robust mocking features included in Jest.

_See also: [Mocking Modules](https://jestjs.io/docs/en/mock-functions#mocking-modules) (Jest documentation)._

## Where to go from here

Alright, you've learned the basics of mocking and successfully implemented the strategies above in several tests. You can import and mock resolved values for all your API calls like an old pro. What's next?

While the methods described above will cover most simple use cases, Jest has a lot of mocking functionality and methods to do some really powerful things. You can incrementally add some of the concepts below to super-charge your mocks:

1. Check out the other mock function methods listed in the Jest docs: [Mock Functions](https://jestjs.io/docs/en/mock-function-api). You can use methods such as `mockReturnedValue()` to mock synchronous returns and `mockResolvedValueOnce()` to only return a value the first time it's called.
2. Want to see how many times a mocked function is called, what it was called with, and what it returned? Check out the `mock.calls` and `mock.results` properties (also in the [Mock Functions documentation](https://jestjs.io/docs/en/mock-function-api))
3. Do you have your own custom functions that make network requests? You can mock your own modules too after they're imported into the test file: `jest.mock('./path/to/js/module/file')`! Careful here though that you're only mocking what's necessary. Your tests should make sure your functions do what's expected with a given mock input, and it can be easy to end up writing tests that instead just confirm you passed in mocked data.
4. Want a function to act as it was originally written, but still want to see how many times it was called? Check out [jest.spyOn()](https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname).
5. Find yourself mocking the same function over and over in multiple tests? Give it default mock responses in `__mocks__` folders using [Manual Mocks](https://jestjs.io/docs/en/manual-mocks)!

I hope this saves others some of the wasted time and frustration I went through! If anything doesn't make sense here, please leave a comment and I'd be happy to try to answer any questions. Also, let me know if there's anything else that helped you have an "Aha!" moment while learning to mock!

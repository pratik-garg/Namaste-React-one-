Chapter 01 - Inception

Q: What is Emmet?
A: Emmet is the essential toolkit for web-developers. It allows you to type shortcuts that are then expanded into full pieces of code for writing HTML and CSS, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.Do practice it.

Uses
1.Faster HTML & CSS authoring
2.Works inside JSX (with config)
3.Supports custom snippets
4.Great for front-end devs and prototyping.

Q: Difference between a Library and Framework?
A: React (Library):

Collection of Tools: React is a JavaScript library for building user interfaces, especially for single-page applications.

Your Control: With React, you decide how to structure your application. You call the functions and methods provided by React to create components, manage state, and handle events.

Example: Using React is like having a set of tools (like hammers and nails) to build parts of your house (user interface) as you see fit. You are free to design the structure and layout.

Next.js (Framework):

Structure and Tools: Next.js is a framework built on top of React that provides a structured way to develop web applications. It includes additional features like server-side rendering, static site generation, and routing out of the box.

Framework's Control: With Next.js, the framework provides a defined structure for your application. It handles routing and rendering, and you plug your React components into this structure. The framework controls the flow and dictates certain conventions you need to follow.

Example: Using Next.js is like having a pre-designed house plan (framework) where the main structure is already determined (routing, rendering). You still build the rooms and decorate (using React components), but within the guidelines set by Next.js.

React gives you the flexibility to design your application as you wish, while Next.js offers a structured approach with additional features to streamline development.

Q: What is CDN? Why do we use it?
A: A content delivery network (CDN) refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content. The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.

Q: Benefits of a CDN
Benefit	Explanation
🚀 Faster Load Time	Content is delivered from a nearby server → less latency.
🧭 Global Reach	Users worldwide get the same speed.
🧱 Reduces Server Load	Your main server handles fewer requests.
🛡️ Security (DDoS Protection)	CDN absorbs malicious traffic before it reaches your origin.
💾 Caching	Static files (images, CSS, JS) are stored and reused efficiently.
♻️ Reliability	If one node fails, others take over.

Q: Why is React known as React?
A: React is named React because of its ability to react to changes in data. React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces. The name React was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner. React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.

Q: What is crossorigin in script tag?
A: The crossorigin attribute sets the mode of the request to an HTTP CORS Request. The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.


Q: What is an "Origin"?
An origin simply means your website’s address, made of:
Origin = Protocol + Domain + Port
For example:
https://mywebsite.com
http://localhost:3000
https://shop.amazon.in
Each of these is a different origin.

The Browser’s Strict Rule (Same-Origin Policy)
Browsers follow a rule called the Same-Origin Policy.
It says:
A website can only talk to the same origin it came from.


Q: CORS = Cross-Origin Resource Sharing
It’s like asking for permission from another website before taking its data.
Analogy:
Imagine you’re a student from School A.
You want to borrow a book from School B’s library.
You can’t just walk in — you need permission from School B.
👉 That “permission” in the web world is CORS.

Q: What Does crossorigin="anonymous" Mean?
It tells the browser:
“Download this file, but don’t send cookies, tokens, or user info along with it.”
This is the safe default for CDNs.
🧾 crossorigin="use-credentials" (rare)
This means:
“Download this file with login info / cookies.”
Used only when you trust the other server and it explicitly allows such access.


<script crossorigin="anonymous|use-credentials">


Q: What is difference between React and ReactDOM?
A: React is a JavaScript library for building User Interfaces whereas ReactDOM is also JavaScript library that allows React to interact with the DOM. The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().

Q: What is difference between react.development.js and react.production.js files via CDN?
A: Development is the stage of an application before it's made public while production is the term used for the same application when it's made public. Development build is several times (maybe 3-5x) slower than the production build.


🧩 Why Two Versions?
Think of it like this:
🧑‍💻 Development version = “Teacher mode”
React tells you everything — warnings, tips, deprecated APIs, etc. It helps you debug and learn.
🌐 Production version = “Performer mode”
React removes all unnecessary logs and safety checks to load faster and perform better for end users.


🚀 What Happens in Create React App (CRA) or Vite?
When you build your React app using a bundler (like Vite, Next.js, or CRA):
It automatically uses the development version during local development (npm start).
And switches to production version when you run npm run build.
So you don’t have to manually handle CDNs.


why each child should have its own unique key in react ?
React uses something called the Virtual DOM — a lightweight copy of the real DOM.
When something changes (like state or props), React doesn’t re-render everything blindly.

Instead, it:
Compares the new virtual DOM with the old virtual DOM.
Figures out which parts actually changed.
Updates only those changed parts in the real browser DOM.
This comparison process is called “Reconciliation”.

🎯Why unique keys are important
Let’s say you have:
<li key="1">Apple</li>
<li key="2">Banana</li>
<li key="3">Cherry</li>

If you remove “Banana”:
React compares old vs new.
It sees that "2" is gone → removes only that element.
"1" and "3" stay the same — no unnecessary re-rendering. ✅
But if keys are not unique or missing, React can get confused:
It might reuse the wrong element.
Input fields may lose focus.
Animations may break.
Performance may drop.


Q: What is async and defer?
A: Async - The async attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed as soon as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.


<script src="demo_async.js" async></script>
Defer - The defer attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed after the page has finished parsing(when browser finished DOM construction). The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM.


<script src="demo_defer.js" defer></script>
Unless you're supporting ancient legacy systems, always add type="module" to all your script tags:

<script type="module" src="main.js"></script> and place the tag inside <head>

<script defer nomodule> can be used as a legacy fallback.
As the name suggests, it allows you to import modules, which makes it easier to organize your code. Enable strict mode by default. This makes your code run faster, and reports more runtime errors instead of silently ignoring them. Execute your code only after the DOM has initialized, which makes DOM manipulation easier. Thanks to this, you won't need to listen to load/readystatechange/DOMContentLoaded events. Prevent top level variables from implicitly polluting the global namespace. Allow you to use top-level await in supported engines. Load and parse your code asynchronously, which improves load performance.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App !!</h1>
    </div>
  );
}

const ReactElement = {
  type: "a",
  props: {
    href: "https://www.youtube.com/",
    target: "_blank",
  },
  children: "Click me to Visit youTube",
};

const username = "chair aur hashir";

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

/**
 * This is react element
 */
const reactElement = React.createElement(
  "a",
  { href: "https://youtube.com", target: "_blank" },
  username,
  "click me to visit youTube"
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);

/**
 * This function stores the user in database.
 * - this is bullet
 * - second
 * @param {string} name - Name of the user
 * @param {string} email - Email of the user. Email must be lowercase.
 * @returns
 * {User} The newly created user object.
 * @throws Throws a DuplicateError if a user already exists with same email.
 */
function createUser(name, email) {}

try {
  createUser();
} catch (err) {
  console.log(err);
}

/**
 * Virtual DOM is there even now but react uses  fibre(algo) to update the DOM
 * - react uses reconciliation algo to differ on tree with another to determine which parts need to change.
 * - Reconciliation is the algo behind what's popularly understood as the virtual DOM.
 * - Diff of lists is performed using keys. Keys should be "stable, unique and predictable".
 *
 * Fiber react architecture:
 * - pause work and come back to it later.
 * - assign priority to different types of work.
 * - reuse previously completed work.
 * - abort work if it's no longer needed
 * - read for further details: https://github.com/acdlite/react-fiber-architecture
 */

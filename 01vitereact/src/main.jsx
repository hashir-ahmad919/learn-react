import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){

  return(
    <div>
      <h1>Custom App !!</h1>
    </div>
  );
}

const ReactElement = {
  type: "a",
  props: {
      href: "https://www.youtube.com/",
      target: "_blank"
  },
  children: "Click me to Visit youTube"
}

const username = "chair aur hashir"

const anotherElement =  (
  <a href='https://google.com' target= '_blank'>Visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href: "https://youtube.com", target: "_blank"},
  username,
  "click me to visit youTube"
)


ReactDOM.createRoot(document.getElementById('root')).render(
reactElement)

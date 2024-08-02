function customRender(reactEelment, mainContainer){

    /*
    const domElement = document.createElement(reactEelment.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    mainContainer.appendChild(domElement)
    */

    const domElement = document.createElement(reactEelment.type)
    domElement.innerHTML = reactEelment.children
    for (const prop in reactEelment.props) {
        if (prop === "children") continue;
        domElement.setAttribute(prop, reactEelment.props[prop ])
    }
    mainContainer.appendChild(domElement)
}

const reactElement = {
    type: "a",
    props: {
        href: "https://www.youtube.com/",
        target: "_blank"
    },
    children: "Click me to Visit youTube"
}

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer)
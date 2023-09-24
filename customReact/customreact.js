function customReander(renderElement, container){
    /*
    const domElement = document.createElement(renderElement.type)
    domElement.innerHTML = renderElement.children
    domElement.setAttribute("href", renderElement.props.href)
    domElement.setAttribute("target", renderElement.props.target)
    
    container.appendChild(domElement)
    */

    const domElement = document.createElement(renderElement.type)
    domElement.innerHTML = renderElement.children
    for (const prop in renderElement.props) {
       if(prop === "children") continue;
       domElement.setAttribute(prop, renderElement.props[prop])
    }

    container.appendChild(domElement)
}


const renderElement = {
    type : "a",
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "Click me to visit to google"
}

const mainContainer = document.querySelector("#root")

customReander(renderElement, mainContainer)
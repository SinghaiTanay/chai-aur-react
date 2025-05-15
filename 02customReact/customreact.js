const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainConatiner = document.querySelector('#root')

function customRender(reactElement, mainConatiner) {
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    
    mainConatiner.appendChild(domElement)
    */
   
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const key in reactElement.props) {
       domElement.setAttribute(key, reactElement.props[key])
       mainConatiner.appendChild(domElement)
    }
}

customRender(reactElement, mainConatiner)
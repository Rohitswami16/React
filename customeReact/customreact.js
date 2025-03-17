function customRender(reactElement, conatainer) {

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // conatainer.appendChild(domElement)


    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if (prop === 'children') continue
        document.setAttribute(prop, reactElement.props[prop])
    }

    conatainer.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'
    },
    children: "click me to visit google"
}

const mainContainer = document.getElementById('root')


customRender(reactElement, mainContainer)
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Chai from './Chai.jsx'

function MyApp(){
  let username = "Tanay"
    return (
        <div>
            <h1>Custom App | chai {username}</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <>
    <br />
    <a href="https://youtube.com" target='_blank'>Visit google</a>
  </>
    
)



const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Ravi</h1>
    //     </div>
    // )
    return React.createElement(
        'div', 
        {id: 'hello', className: 'DummyClass'},  
        React.createElement('h1', null ,"Hello Ravi")
    )
}

export default Hello
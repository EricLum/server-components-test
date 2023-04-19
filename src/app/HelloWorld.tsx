import React from 'react'
import Button from './ClientButton';
// In this example, you can see that in HelloWorld, "debugger" doesnt' do anything because its rendered on server and sent as html. When you click on the client button with the 'use client' declaration at the top, it works on client side, and debugger works.

const HelloWorld = () => {
    return <div>
        hello
        <div>
            <Button />
        </div>
    </div>
}

export default HelloWorld;
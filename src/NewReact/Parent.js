import React, { useState } from 'react'
import useValue from './useValue';

function Parent() {
    const [fname, fbind, freset]=useValue("")
    const [lname, lbind, lreset]=useValue("")
    const formhandler=(e)=>{
        alert(`Welcome ${fname} ${lname}`)
        freset();
        lreset();
        e.preventDefault();
    }
    return (
        <div>
            <h1>Parent Component</h1>
            <form onSubmit={formhandler}>
                <div>
                <label>First Name: </label>
                <input {...fbind} type="text"></input>
                </div>
                <div>
                <label>Last Name: </label>
                <input {...lbind} type="text"></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default Parent
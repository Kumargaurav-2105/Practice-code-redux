import React, { useState } from 'react'
import ComponentD from './ComponentD'
import { UserContext, setUserContext } from './createcntxt'
function ComponentC() {
    const [count, setcount] = useState(0)
    const Increment = () => {
        setcount(count + 1)
    }
    return (
        <div>
            <UserContext.Provider value={count}>
                <setUserContext.Provider value={Increment}>
                    <ComponentD />
                </setUserContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentC
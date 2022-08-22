import React, { useContext } from 'react'
import {UserContext, setUserContext} from './createcntxt'
function ComponentE() {
    const user=useContext(UserContext)
    const setUser=useContext(setUserContext)
  return (
    <div>
        <button onClick={setUser}>Count: {user}</button>
    </div>
  )
}

export default ComponentE
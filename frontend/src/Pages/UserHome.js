import React from 'react'
import Navbar from '../Components/Navbar'
import { useParams} from "react-router-dom";

// After login come here, axios post create password using middleware,
// do the post request passing accesstoken in headers. 

// we have id in the url call get passwords to show users passwords.


function UserHome() {
  return (
    <div>
    <Navbar/>
        <div>
            UserHome
        </div>
    </div>
  )
}

export default UserHome
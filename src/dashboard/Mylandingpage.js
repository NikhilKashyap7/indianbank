import React from 'react';
import Mynavbar from '../dashboard/myfiles/Mynavbar';
import Myhomepage from './Myhomepage';
import Footer from './myfiles/Myfooter';
import Mypopuppage from './myfiles/Mypopuppage';
function Mylandingpage() {
    return (
            <><div>
            <Mynavbar />
            <Myhomepage />
            <Footer/>
            <Mypopuppage/>
        </div>
        </>
           
)
} 
 
export default Mylandingpage;
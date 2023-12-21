import React from "react";
import Sidebar from './Sidebar'

// function Header(){
//     return (
//         <>
//         <header>
//             <h1>This is Header</h1>
//         </header>
//         <Sidebar name="DevilHost" Age={9393}/>
//         <></>
//         </>
//     );
// }

const Header = () => {
    return(
        <>
                 <header>
                     <h1>This is Header</h1>
                 </header>
                 <Sidebar name="DevilHost" Age={9393}/>
                 <></>
                 </>
    )
}

export default Header;
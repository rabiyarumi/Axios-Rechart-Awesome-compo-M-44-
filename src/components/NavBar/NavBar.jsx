import { useState } from "react";
import NavList from "../NavList/NavList";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";


const NavBar = () => {

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile', name: 'Profile' }
      ];

      const [menuOpen, setMenuOpen] = useState(false)
      

    return (
        <nav className=' container mx-auto p-10'>
            <div 
            onClick={() => setMenuOpen(!menuOpen)}
           
            className="text-2xl lg:hidden btn">

            {
                menuOpen === true ? <FaXmark /> : <HiMenuAlt1  />
            }

            </div>
            
            <ul className={`lg:flex gap-6 duration-1000  absolute lg:static   py-2 px-4   ${menuOpen ? "top-22" : "-top-60"} `}>
                {
                    routes.map(route => <NavList key={route.id} route={route}></NavList>)
                }
            </ul>
            
        </nav>
    );
};

export default NavBar;


/*types to toggole a menu bar
1. conditinal class
<ul className={`lg:flex gap-6 absolute  ${menuOpen ? "" : "hidden"}`}>

2.make the position lift up
<ul className={`lg:flex gap-6 absolute  duration-1000  ${menuOpen ? "top-22" : "-top-60"}`}>

*/

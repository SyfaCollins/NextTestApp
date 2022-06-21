import Link from "next/link";

function Navbar() {
    return ( 
        <div>
            <nav className="navBar">
                <ul>
                   
                    <li> <Link  href="/" ><a>home</a></Link></li>
                    <li> <Link  href="/projects" ><a>projects</a></Link></li>
                    <li> <Link  href="/experience" ><a>experience</a></Link></li>
                    <li> <Link  href="/events" ><a>event</a></Link></li>
              


                </ul>

                <button className="joinBtn">
                    <Link href="/joinComm" ><a>Join Community</a></Link>
                </button>
                <button className="loginBtn">
                    <Link href="/login" ><a>Login</a></Link>
                </button>
            </nav> 
        </div>
     );
}

export default Navbar;
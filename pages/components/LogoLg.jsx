
import Image from "next/image";

function LogoLg() {
    return ( 
        <div className="navLogo">
            <Image 
            src="/osca-logo.png" 
            height={100} 
            width={100} />
             <span>OSCA {'{'} <span className="kampala">Kampala</span>{" }"}</span>
        </div>
     );
}

export default LogoLg;
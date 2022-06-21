
import Image from "next/image";

function LogoSm() {
    return ( 
        <div className="footerLogo">
            <Image 
            src="/osca-logo.png" 
            height={60} 
            width={60}
            className={'img'} />
             <div className="logoWords">Open Source Community Africa {'{'} <span className="kampalaSm">Kampala</span>{" }"}</div>
        </div>
     );
}

export default LogoSm;

import LogoSm from "./components/LogoSm";


function joincomm() {
    return ( 
        <>
        <section className="form-section" >
            <form action="">
                <LogoSm />
                <h2>Join a Large Growing Community in Town</h2>

                <div className="form firstForm">
                    <p>This content is private (for you only)</p>
                   <p>Name:             <input type="text" /><input type="text" /></p>
                   <p>Email:            <input type="email" /></p> 
                   <p>Password:         <input type="password" /> </p> 
                   <p>Retype Password:  <input type="password" /> </p> 
                   <p>title:</p> 
                   <ul>
                       <li><input type="radio"  name="gender"/> Mr.</li>
                       <li><input type="radio"  name="gender"/> Mrs.</li>
                       <li><input type="radio"  name="gender"/> Other</li>

                   </ul>
                   

                </div>

                <div className="form secondForm">

                    <p>This content is Public (will display on your profile)*</p>
                    <p>Username: <input type="text" /></p>
                    <label>title:</label>
                    <select name="react" id="">
                        <option value="Font-end Dev">Font-end Dev</option>
                        <option value="Back-end">Back-end</option>
                        <option value="Full-Stack">Full-Stack</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Senior">Senior</option>Font-end Dev
                    </select>
                </div>

                <input type="button" value="login" />
            </form>
        </section>
        </>
     );
}

export default joincomm;
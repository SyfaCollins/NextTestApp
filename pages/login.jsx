import styles from '../styles/login.module.css'
function login() {
    return ( 
        <>
            <section className={styles.loginContent}>

                <div className={styles.login}>
                <form action="" method="POST" className={styles.loginForm}>
                    <h4 className={styles.loginTitle}>Login here</h4>
                    <label htmlFor="">Email or username:
                    {/* <br /> */}
                    </label><input type="text" />
                    {/* <br /> */}
                    <label htmlFor="">Password:
                    {/* <br /> */}
                    </label><input type="text" />
                    {/* <br /> */}
                     <input type="button" value="login"  className={styles.button}/>
                </form>
                <div className="img">
                    <h3>IMG</h3>
                </div>
                </div>
                <div className={styles.options}>
                    <p>Forgot password?</p>
                    <p>Create Account!</p>

                </div>
            </section>
        </>
     );
}

export default login;
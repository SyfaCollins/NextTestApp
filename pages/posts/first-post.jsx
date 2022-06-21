import Link from "next/link";

function FirstPost() {
    return ( 

        <div>
            <h1>First Post</h1>
           
            <Link href="second-post">this is a second post</Link>            
           <br />
            <Link href="/">Home</Link>            
        </div>
    )
}

export default FirstPost;
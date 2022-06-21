import Link from "next/link";


function secondPost() {
    return ( 
       <div>
           <div>
            <h1>Second Post</h1>
            <Link  href="first-post">
                this is a second post  
                </Link>       
        </div>
       </div>
     );
}

export default secondPost;
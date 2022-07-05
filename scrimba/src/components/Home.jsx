import React from "react";//this is for using react jsx

function Home() {
    const page = (<>
        <h1>Fun fact about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
       
    </>);
    return (
        page
    );
}
export default Home;
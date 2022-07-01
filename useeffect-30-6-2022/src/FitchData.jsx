import { useEffect } from "react";
import { useState } from "react";

export default function FitchData() {
    const [name, setName] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
            .then(data => setName(data));
        console.log("hi");
    },[]);
    
    return (
        <div className="FitchData">
            <ul>
                {name.map((n) => <li key={n.name}>{n.name}</li>)}

            </ul>
        </div>
    )
}
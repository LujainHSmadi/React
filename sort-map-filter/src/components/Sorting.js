
function Sorting() {
    
    let coll = ['Z', 'A' ,'Q' ,'B' ,'C', 'Y', 'S', 'W'];
    return (
        <div>
            {/* <p>{coll.join(' ')}</p> */}
            <p className="container">{coll.sort().join(' ')}</p>

        </div>
    );
}
export default Sorting;
// function Sorting() {
    
//     let coll = [ 20 , 10, 90 , -10, -20];
//     return (
//         <div>
//             {/* <p>{coll.join(' ')}</p> */}
//             <p>{coll.sort().join(' ')}</p>

//         </div>
//     );
// }
// export default Sorting;
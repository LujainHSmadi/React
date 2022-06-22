
function Sorting() {
    
    let coll = [ 20 , 10, 90 , -10, -20];
    return (
        <div>
            {/* <p>{coll.join(' ')}</p> */}
            <p>{coll.sort().join(' ')}</p>

        </div>
    );
}
export default Sorting;
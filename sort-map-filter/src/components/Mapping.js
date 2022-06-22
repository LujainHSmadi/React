// function Mapping() {
//     var arr1 = [1, 2, 3, 4, 5];

//     let newArr = arr1.map((element) => element * 2);
//     return (<p>{newArr.join(' ')}</p>);


// }
// export default Mapping;

const Users = () => {
    const Fruits = [
        { id: 1, name: "Apple", color: "Yellow" },
        { id: 2, name: "Strawberry", color: "Red" },
        { id: 3, name: "Kiwi", color: "Green" }
    ];


    return (

        <table className="table container">
            <thead className="thead-dark">
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">color</th>
            </thead>
            {
                Fruits.map((fruit) => (

                    <tr>
                        <td>{fruit.id}</td>
                        <td>{fruit.name}</td>
                        <td>{fruit.color}</td>
                    </tr>

                ))
            }
        </table >
    );
};
export default Users;
function Mapping() {
    var arr1 = [1, 2, 3, 4, 5];

    let newArr = arr1.map((element) => element * 2);
    return (<p>{newArr.join(' ')}</p>);


}
export default Mapping;

// const Users = () => {
//     const data = [
//         { id: 1, name: "John Doe" },
//         { id: 2, name: "Victor Wayne" },
//         { id: 3, name: "Jane Doe" },
//     ];

//     return (
//         <div >

//             {
//                 data.map((user) => (
//                 <div>{user.name}</div>
//                 ))
//             }

//         </div>
//     );
// };
// export default Users;
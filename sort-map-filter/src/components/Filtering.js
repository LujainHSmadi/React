function Filtering() {
    var students = ["Lujain ", "Amal ", "Omar ", "Haya ", "Layan ","Mohammad", "Khozama"];
    let filterStudents = students.filter((el) => { return el.startsWith("L"); });
    return (<p>{filterStudents}</p>);
}

export default Filtering;
function Filtering() {
    var students = ["Lujain ", "Amal ", "Omar ", "Haya ", "Layan "];
    let filterStudents = students.filter((el) => { return el.startsWith("L"); });
    return (<p>{filterStudents}</p>);
}

export default Filtering;
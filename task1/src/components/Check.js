// import '../css/Style.css';

function Check() {
    return (
        <div className="container" id="st" >
            
            <table>
                <tr >
                    <td >
            <img src="https://picsum.photos/65"></img>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                <label class="form-check-label" for="flexCheckIndeterminate">
                    Indeterminate checkbox
                    </label>
                </td>
                </tr>
                <tr>
                <td>
            <img src="https://picsum.photos/66"></img>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                <label class="form-check-label" for="flexCheckIndeterminate">
                    Indeterminate checkbox
                    </label>
                    </td>
                </tr>
                <tr>
                <td>
            <img src="https://picsum.photos/67"></img>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                <label class="form-check-label" for="flexCheckIndeterminate">
                    Indeterminate checkbox
                    </label>
                    </td>
                </tr>
            </table>
            
        </div>
    );
}
export default Check;
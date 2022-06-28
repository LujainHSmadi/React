import { Component } from 'react';
import axios from 'axios';
class Search extends Component{
    state = {
        person:[]
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            const person = res.data;
            this.setState({ person });
        });
    }
    render( ) {
        return (<div>
            {
                this.state?.filter.map(() => {
                    
                })
                    
                
            })
        </div >);
    }
    
}
export default Search;
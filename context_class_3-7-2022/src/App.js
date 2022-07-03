import React from "react";
import UserDetails from './UserDetails';
import { UserContext} from "./UserContext";
// we are going to pass usercontext to child component
class App extends React.Component {
  state = {
    user3: 'Alaa',
    user : { name: 'Omar', age: 3 },
    user2 : { major: 'CS', gender: 'male' },
  }


  updateUserData = () => {
    // console.log('Hi');
   this.setState({user3:"Hala"});
   
}

  
  render() {
    return (
      <UserContext.Provider value={{ state: this.state,   updateUserData: this.updateUserData  }}>
        {/* <UserContext2.Provider value={user2}> */}
           <div>React Context Sample</div>

        <UserDetails />
        {/* </UserContext2.Provider> */}
        
       
      </UserContext.Provider>
    );
  }
}

export default App;

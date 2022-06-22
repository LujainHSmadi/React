// import React from "react";
// // import ReactDOM from 'react-dom/client';
// function Cards(props)  {
    
   
//         return (
//             <div className="card" style={{width:'300px'}} >
//                 <img className="card-img-top" src={props.image} alt="Card image cap" width={50} />
//                 <div className="card-body">
//                     <h5 className="card-title">{props.title}</h5>
//                     <p className="card-text">{props.text}</p>
//                     <a href="#" className="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>
//         );
    

// }
// export default Cards;





import React from "react";
// import ReactDOM from 'react-dom/client';
class Cards extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src={this.props.image} alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text">{this.props.text}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        );
    }

}
export default Cards;
// const cards = ReactDOM.createRoot(document.getElementById('root'));
// cards.render(<Cards image="https://picsum.photos/200/300.webp" />);


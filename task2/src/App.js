
// import './App.css';
import Cards from './Cards'
import Nav from './Nav';
function App(props) {
  return (
    <>
    <Nav/>
      <div className='grid'>
      <Cards image="https://picsum.photos/200/301.webp" title="Lujain Smadi" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
      <Cards image="https://picsum.photos/200/300.webp" title="Mohammad Smadi" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
      <Cards image="https://picsum.photos/200/302.webp" title="Montaser Smadi" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
      <Cards image="https://picsum.photos/200/303.webp" title="Omar Smadi" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
      </div>

      </>
  );
}

export default App;

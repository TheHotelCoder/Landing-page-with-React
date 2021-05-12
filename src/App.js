


import Card from './cardone';
import Footer from './footer';
import JumboTron from './jumbotron';
import NavBar from './Navbar';


function App() {
  return (
    <div className="App">
     <NavBar/>
    <JumboTron/>
    <Card title="First Card" srcUrl='https://unsplash.com/photos/0IsBu45B3T8/download?force=true&w=1920'/>
    <Card title="Second Card" srcUrl="https://unsplash.com/photos/SavQfLRm4Do/download?force=true&w=1920" />
    <Card title="Third Card" srcUrl="https://unsplash.com/photos/fY1ECB1RCd0/download?force=true&w=640" />
    <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1 className='text-5xl'> Quiz app </h1>
        <p className='text-lg max-w-xl text-left mt-10'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
          unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </header>
    </div>
  );
}

export default App;

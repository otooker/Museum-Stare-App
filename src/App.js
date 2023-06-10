import YourImage from './YourImage';
import './App.css';
import ArtWorkChoice from './ArtWork';

function App() {
  return (
    <div className="App">
      <h1>Let Me Gif What I Want</h1>  
      <p>Whether or not you can skip a day of school/work/whatever to . . . . please recreate your own profound stare into the artistic ether. You may follow in Cameron's footsteps and get lost in dots, or browse other paintings from the Art Instituate of Chicago.</p>
      <YourImage />
      <ArtWorkChoice />

      <p>Images courtesy of <a href="www.artic.edu">The Art Institute of Chicago®</a></p>
    </div>
  );
}

export default App;

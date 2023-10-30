import MoviesList from './components/MoviesList';


function App() {
  const moviesArray = ["Fast and Furious", "Harry Potter", "Lord of the Rings"];
  return (
    <div className="App">
      <MoviesList movies = {moviesArray} />
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

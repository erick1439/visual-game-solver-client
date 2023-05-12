import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home.js';
import SudokuPage from './components/Sudoku/SudokuPage/SudokuPage.js';
import SortingPage from './components/Sorting/SortingPage/SortingPage.js';
// import WordSearchPage from './components/WordSearch/WordSearchPage/WordSearchPage.js';
import PahtFinderPage from './components/PathFinder/PathFinderPage/PathFinderPage.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/sudoku" element={<SudokuPage />} />
          <Route path="/maze" element={<PahtFinderPage/>} />
          <Route path="/sortList" element={<SortingPage/>}/>
          {/* <Route path="/word-search" element={<WordSearchPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
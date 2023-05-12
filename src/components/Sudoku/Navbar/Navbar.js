import './Navbar.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Navbar = ({solveSudoku, newSudokuTable}) => {
    return (
      <nav className="mainNabvar">
        <Link to={"/"}> <img alt="Back button" src="./back.png" heigth="50" width="50"/> </Link>
        <div className="ulContainer">
          <ul>
            <Button onClick={newSudokuTable} className="option">New Table</Button>
            <Button onClick={solveSudoku} className="option">Solve Puzzle</Button>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;
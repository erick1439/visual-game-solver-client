import './Navbar.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Navbar = ({solveWordSearch, checkSudokuTable, newWordSearchTable}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}> <img alt="Back button" src="./back.png" heigth="50" width="50"/> </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <Button onClick={newWordSearchTable} className="option">New Table</Button>
                <Button onClick={solveWordSearch} className="option">Solve Puzzle</Button>
              </ul>
            </div>
          </div>
        </nav>
    );
}

export default Navbar;
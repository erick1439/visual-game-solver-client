import './Navbar.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Navbar = ({newList, sortList}) => {
    return (
        <nav className="mainNabvar">
          <Link to={"/"}> <img alt="Back button" src="./back.png" heigth="50" width="50"/> </Link>
          <div className='ulContainer'>
            <ul>
              <Button onClick={newList} className="option">New List</Button>
              <Button onClick={sortList} className="option">Sort List</Button>
            </ul>
          </div>
        </nav>
    );
}

export default Navbar;
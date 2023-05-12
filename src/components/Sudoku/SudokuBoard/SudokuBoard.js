import './SudokuBoard.css';
import SudokuBox from '../SudokuBox/SudokuBox.js';

const SudokuBoard = ({data}) => {
    return(
        <div className="board">
            <div className="board_frame-container">
                <div className="board_frame board_frame-top board_frame-left"></div>
                <div className="board_frame board_frame-top board_frame-left"></div>
                <div className="board_frame board_frame-top board_frame-left board_frame-right"></div>
                <div className="board_frame board_frame-top board_frame-left"></div>
                <div className="board_frame board_frame-top board_frame-left"></div>
                <div className="board_frame board_frame-top board_frame-left board_frame-right"></div>
                <div className="board_frame board_frame-top board_frame-bottom board_frame-left"></div>
                <div className="board_frame board_frame-top board_frame-bottom board_frame-left"></div>
                <div className="board_frame board_frame-top board_frame-bottom board_frame-left board_frame-right"></div>
            </div>
            <SudokuBox values={data[0]} rowIndex={0}/>
            <SudokuBox values={data[1]} rowIndex={1}/>
            <SudokuBox values={data[2]} rowIndex={2}/>
            <SudokuBox values={data[3]} rowIndex={3}/>
            <SudokuBox values={data[4]} rowIndex={4}/>
            <SudokuBox values={data[5]} rowIndex={5}/>
            <SudokuBox values={data[6]} rowIndex={6}/>
            <SudokuBox values={data[7]} rowIndex={7}/>
            <SudokuBox values={data[8]} rowIndex={8}/>
        </div>
    );
}

export default SudokuBoard;
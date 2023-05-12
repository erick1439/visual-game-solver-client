import './WordSearchBoard.css';
import WordSearchBox from '../WordSearchBox/WordSearchBox.js';

const WordSearchBoard = ({data}) =>{
    return (
        <div className="wordBoard">
            <WordSearchBox values={data[0]}/>
            <WordSearchBox values={data[1]}/>
            <WordSearchBox values={data[2]}/>
            <WordSearchBox values={data[3]}/>
            <WordSearchBox values={data[4]}/>
            <WordSearchBox values={data[5]}/>
            <WordSearchBox values={data[6]}/>
            <WordSearchBox values={data[7]}/>
            <WordSearchBox values={data[8]}/>
            <WordSearchBox values={data[9]}/>
            <WordSearchBox values={data[10]}/>
            <WordSearchBox values={data[11]}/>
            <WordSearchBox values={data[12]}/>
            <WordSearchBox values={data[13]}/>
            <WordSearchBox values={data[14]}/>
        </div>
    );
}

export default WordSearchBoard;
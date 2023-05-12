import './PathFinderBoard.css';
import PathFinderBox from '../PathFinderBox/PathFinderBox.js';

const PahtFinderBoard = ({data}) => {

    let tagList = [];

    for (let i = 0; i < data.length; i++)
        tagList.push(<PathFinderBox key={i} values={data[i]}/>)


    return (
        <div className="pathFinderBoard">{tagList}</div>
    );
}

export default PahtFinderBoard;
import './WordSearchBox.css';

const WordSearchBox = ({values}) => {
  let frame = [];

  for (let i = 0; i < 15; i++)
    frame.push(<div key={i}>{values[i]}</div>);
  
  return(
    <div className="wordBoard_miniBoard">
      {frame}
    </div>
  )
}

export default WordSearchBox;
import './PathFinderBox.css';

const PathFinderBox = ({values}) => {
  let frame = [];

  for (let i = 0; i < 15; i++) {
    if (values[i] === '#')
      frame.push(<div className="wall" key={i}>.</div>);
    
    else
      frame.push(<div key={i}>{values[i]}</div>);
  }
  
  return(
    <div className="wordBoard_miniBoard">
      {frame}
    </div>
  )
}

export default PathFinderBox;
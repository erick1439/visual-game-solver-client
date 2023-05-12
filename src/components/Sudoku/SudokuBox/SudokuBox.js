import './SudokuBox.css';

const SudokuBox = ({values, rowIndex}) => {
  let frame = []; 

  for (let i = 0; i < 9; i++) {

    let divId = "sudokuBox" + rowIndex + "," + i;

    if (values[i] === ".")
      frame.push(<input id={divId} type="number" key={i} className="board_miniBoard-input"/>);

    else
      frame.push(<div id={divId} key={i} className="board_miniBoard-number">{values[i]}</div>);
  }

  return (
      <div className="board_miniBoard">
          {frame}
      </div>
  );
}

export default SudokuBox;
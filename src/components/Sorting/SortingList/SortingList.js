import './SortingList.css';

const SortingList = ({data}) => {
    return(
        <div className='listContainer'>
            {
                data.map((val, index) => {
                    let numberContainer = "numberContainer" + index;
                    return(<div id={numberContainer} key={index} className='element'  style={{paddingTop: `${val * 8}px`}}>{val}</div>);

                })
            }
        </div>
    );
}

export default SortingList;
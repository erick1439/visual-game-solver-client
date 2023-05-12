
const WordsList = ({words}) => {
    return(
        <div>
            {
                words.map((word, index) => <div key={index}>{word}</div>)
                
            }
        </div>   
    );
}

export default WordsList;
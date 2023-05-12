import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar.js';
import SortingList from '../SortingList/SortingList.js';

const SortingPage = () => {

    const solvingHistory = [];
    const pointers = [];
    const [array, setArray] = useState([]);

    const newList = async () => {
        
        const temp = new Array(30);

        for (let i = 0; i < temp.length; i++)
            temp[i] = Math.floor(Math.random() * 50) + 1;
        
        setArray(temp);
    }

    const sortList = async () => {

        let index = 0;
        const temp = [...array];
        sortHelper(temp);

        for (const frame of solvingHistory) {
            let pointerA = document.getElementById("numberContainer" + pointers[index][0]);
            let pointerB = document.getElementById("numberContainer" + pointers[index][1]);
            let orignalColor = window.getComputedStyle(pointerB).backgroundColor;

            pointerA.style.backgroundColor = 'blue';
            pointerB.style.backgroundColor = 'blue';
            setArray(frame);
            await new Promise((resolve) => setTimeout(resolve, 100));  

            pointerA.style.backgroundColor = '#90EE90';
            pointerB.style.backgroundColor = orignalColor;

            if (index === solvingHistory.length - 1)
                pointerB.style.backgroundColor = '#90EE90';

            index++;
        }
    }

    const sortHelper = (temp) => {

        for (let i = 0; i < temp.length; i++) {
            for (let j = i + 1; j < temp.length; j++) {
                if (temp[j] < temp[i]) {

                    let val = temp[j];
                    temp[j] = temp[i];
                    temp[i] = val;

                    pointers.push([i, j])
                    solvingHistory.push([...temp]);
                }
            }
        }
    }

    useEffect(() => newList(), []);

    return(
        <div>
            <Navbar newList={() => {window.location.reload();}} sortList={sortList}/>
            <div style={{ margin: "500px 0%"}}>
                <SortingList data={array}/>
            </div>
        </div>
    );
}

export default SortingPage;
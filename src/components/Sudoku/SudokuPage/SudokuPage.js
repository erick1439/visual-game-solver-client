import { useState, useEffect } from 'react';
import SudokuBoard from '../SudokuBoard/SudokuBoard.js';
import Navbar from '../Navbar/Navbar.js';

const SudokuPage = () => {

    const solvingHistory = [];
    const pointers = [];
    const [state, setState] = useState([
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','','']
    ]);

    const newSudokuTable = async () => {

        let grid = [...state];

        const response = await fetch('https://jf9yh3ioxg.execute-api.us-east-1.amazonaws.com/prod/getSudoku');
        const data = await response.json();

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (data[i][j] === 0)
                    grid[i][j] = '.';

                else
                    grid[i][j] = data[i][j].toString();    
            }
        }
              
        setState(grid);
    }

    const solveSudoku = async () => {  
        let index = 0;      
        let temp = [...state];

        solveSudokuHelper(temp);

        for (const grid of solvingHistory) {
            let box = document.getElementById('sudokuBox' + pointers[index][0] + "," + pointers[index][1]);

            box.style.color = 'red';
            setState(grid);

            await new Promise((resolve) => setTimeout(resolve, 200));

            box.style.color = 'black';
            index++;
        }
    }

    const solveSudokuHelper = (temp) => {

        for (let i = 0; i < temp.length; i++) {
            
            for (let j = 0; j < temp.length; j++) {

                if (temp[i][j] === '.') {

                    for (let c = '1'; c <= '9'; c++) {

                        temp[i][j] = c;
                        solvingHistory.push(temp.map((arr) => arr.slice()));
                        pointers.push([i, j]);
                        temp[i][j] = '.';

                        if (isValid(temp, i, j, c)) {

                            temp[i][j] = c;
                            solvingHistory.push(temp.map((arr) => arr.slice()));
                            pointers.push([i, j]);

                            if (solveSudokuHelper(temp))
                                return true;

                            else {
                                temp[i][j] = '.';
                                solvingHistory.push(temp.map((arr) => arr.slice()));
                                pointers.push([i, j]);
                            }
                        }
                    }

                    return false;
                }
            }
        }

        return true;
    }

    const isValid = (temp, row, col, c) => {

        for (let i = 0; i < 9; i++) {

            if (temp[i][col] != '.' && temp[i][col] == c)
                return false; //check row

            if (temp[row][i] != '.' && temp[row][i] == c)
                return false; //check column

            if (temp[3 * (Math.floor(row / 3)) + Math.floor(i / 3)][3 * (Math.floor(col / 3)) + i % 3] != '.' && temp[3 * (Math.floor(row / 3)) + Math.floor(i / 3)][3 * (Math.floor(col / 3)) + i % 3] == c)
                return false; //check 3*3 block
        }

        return true;
    }

    useEffect(async () => newSudokuTable(), []);

    return(
        <div>
            <Navbar solveSudoku={solveSudoku} newSudokuTable={() => {window.location.reload();}} />
            <div style={{ margin: "40px 450px 50px 450px", display: "flex" }}>
                <SudokuBoard data={state}/>
            </div>
        </div>
    );
}

export default SudokuPage;
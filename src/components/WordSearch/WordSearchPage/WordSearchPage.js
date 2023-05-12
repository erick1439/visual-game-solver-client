import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar.js';
import WordsList from '../WordsList/WordsList.js';
import WordSearchBoard from '../WordSearchBoard/WordSearchBoard.js'

const WordSearchPage = () => {

    const result = new Array();
    const [words, setWords] = useState([]);
    const [state, setState] = useState([
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
    ]);

    const solveWordSearch = () => {

        // let temp = [...state];

        // let visited = new Array(15);

        // for (let i = 0; i < visited.length; i++)
        //     visited[i] = new Array(15);

        // for (let i = 0; i < visited.length; i++) 
        //     for (let j = 0; j < visited.length; j++)
        //         visited[i][j] = false;
    
        // for (let i = 0; i < temp.length; i++) 
        //     for (let j = 0; j < temp.length; j++)
        //         if (temp[i][j] === words[0].charAt(0))
        //             backtracking(temp, i, j, words[0], new Array());
        //             backtracking(temp, i, j, words[0], 0, visited);
                
    
        // console.log(coordinates);
    }

    const backtracking = (temp, row, col, word, coordinates) => {

        let wordLen = word.length;

        // down
        if (row + wordLen < temp.length) {

            let flag = true;

            for (let i = row; i < wordLen; i++) {
                if (word.charAt(i) === temp[i][col]) {

                    let coordinate = new Array();
                    coordinate.push(i);
                    coordinate.push(col);

                    coordinates.push(coordinate);
                }

                else 
                    flag = false;
            }

            if (flag) 
                result.push(coordinates);
        }

        // up
        if (row - wordLen >= 0) {

            let flag = true;

            for (let i = row - 1; i >= 0; i--) {
                if (word.charAt(i) === temp[i][col]) {

                    let coordinate = new Array();
                    coordinate.push(i);
                    coordinate.push(col);

                    coordinates.push(coordinate);
                }

                else
                    flag = false;
            }

            if (flag) 
                result.push(coordinates);
        }

        // right 
        if (col + wordLen < temp[0].length) {

            let flag = true;

            for (let i = col; i < temp[0].length; i++) {
                if (word.charAt(i) === temp[row][i]) {

                    let coordinate = new Array();
                    coordinate.push(row);
                    coordinate.push(i);

                    coordinates.push(coordinate);
                }

                else    
                    flag = false;
            }

            if (flag) 
                result.push(coordinates);
        }

        // left 
        if (col - wordLen >= 0) {

            let flag = true;

            for (let i = wordLen - 1; i >= 0; i--) {
                if (word.charAt(i) === temp[row][i]) {

                    let coordinate = new Array();
                    coordinate.push(row);
                    coordinate.push(i);

                    coordinates.push(coordinate);
                }

                else
                    flag = false;
            }

            if (flag) 
                result.push(coordinates);
        }

        // up right 
        if (row - wordLen >= 0 && col + wordLen < temp[0].length) {

            // for (let i = row, j = col; i >= 0; i--)

        }

        // up left 
        if (row - wordLen >= 0 && col - wordLen >= 0) {

        }

        // down right 
        if (row + wordLen < temp.length && col + wordLen < temp[0].length) {

        }

        // down left
        if (row + wordLen < temp.length && col - wordLen >= 0) {

        }

    }

    // const backtracking = (temp, i, j, word, index, visited) => {

    //     if (index === word.length) {

    //         for (let k = 0; k < visited.length; k++) {

    //             for (let l = 0; l < visited[0].length; l++) { 

    //                 if (visited[k][l] === true) {

    //                     let coordinate = new Array();
                        
    //                     coordinate.push(k);
    //                     coordinate.push(l);

    //                     coordinates.push(coordinate);
    //                 }
    //             }
    //         }

    //         return true;
    //     }
        
    //     if (i < 0 || i >= temp.length || j < 0 || j >= temp[0].length || visited[i][j] === true || temp[i][j] !== word.charAt(index))
    //         return false;

    //     visited[i][j] = true;

    //     if (backtracking(temp, i + 1, j, word, index + 1, visited) ||
    //     backtracking(temp, i, j + 1, word, index + 1, visited) ||
    //     backtracking(temp, i - 1, j, word, index + 1, visited) ||
    //     backtracking(temp, i, j - 1, word, index + 1, visited) ||
    //     backtracking(temp, i + 1, j + 1, word, index + 1, visited) ||
    //     backtracking(temp, i + 1 , j - 1, word, index + 1, visited) ||
    //     backtracking(temp, i - 1, j + 1, word, index + 1, visited) ||
    //     backtracking(temp, i - 1 , j - 1, word, index + 1, visited)
    // )
    //     return true;

    //     visited[i][j] = false;

    //     return false;
    // }
    
    const newWordSearchTable = async () => {

        const response = await fetch('/getWordSeachBoard', {
            method: 'GET',
            headers: {
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8"
            }
        });

        const data = await response.json();

        let k = 0;
        const temp = [...state];

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp.length; j++) {
                temp[i][j] = data.grid[k++];
            }
        }

        setState(temp);
        setWords(data.words);
    }

    useEffect(() => { newWordSearchTable() }, [])

    return(
        <div>
            <Navbar newWordSearchTable={newWordSearchTable} solveWordSearch={solveWordSearch}/>
            <div style={{margin: "80px 450px 50px 450px", display: "flex" }}>
                <WordSearchBoard data={state}/>
            </div>
            <WordsList words={words}/>
        </div>
    );
}

export default WordSearchPage;
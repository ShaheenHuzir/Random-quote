
let generateVerseId = () => {

let versePerChapter = [0,33,22,35,27,23,35,27,36,18,32,31,28,25,35,33,22,28,24,29,30,31,29,35,34,28,28,27,28,27,33,31];
//total number of verser per chapter, where chapter number is the index of the array


// randomly generate a chapter number [1-31]

let chapterNo = Math.floor(Math.random() * (31 - 1 + 1)) + 1; 

//verseNo is randomly generated using the array from 
//maximum number of verses is selected from versePerChapter array using randomly generated chapter number as index  

let verseNo = Math.floor(Math.random() * (versePerChapter[chapterNo] - 1 + 1)) + 1;


let verseId = `PRO.${chapterNo}.${verseNo}`;

    return verseId;
}

export default generateVerseId;
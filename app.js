`use strict`;
//const fetch = require(`node-fetch`);

const testURL = `https://api.thecatapi.com/v1/images/search`;
const apiBeginning = `https://api.thecatapi.com/v1/`;
const apiKey = `d3973bf7-925c-4ccf-95bf-1abae86e162e`;
const apiImages = `images/`;
const apiSearch = `search?`;
const searchParameter = ``;
const combineUrl = (urlBeginning = `https://api.thecatapi.com/v1/`, ...theArgs) =>  urlBeginning + theArgs.toString().replace(/,/g, ``);

const test = combineUrl(apiBeginning, apiImages, apiSearch, searchParameter, `munchkin/`, `test/`, `not a coma/`);

const getCatData = async (url) => {
    const response = await fetch(url);
    const JSONdata = response.json();
    return JSONdata
}

const loggingTheCatOut = async () =>{
    const fetchedCat = await getCatData(testURL)
    console.log(fetchedCat[0].url);
}

const spawnACat = async (url = testURL) => {
    if (!document.body.contains(document.getElementById(`cat-image`))) {
        const img = document.createElement(`img`);
        const fetchedCat = await getCatData(url);
        img.src = fetchedCat[0].url;
        const imgPlaceHolder = document.getElementById(`catHolder`);
        imgPlaceHolder.appendChild(img);
        img.style.width = `100%`;
        img.style.height = `100%`;
        img.style.objectFit = `contain`;
        /* img.style.maxHeight = `90%`;
        img.style.maxWidth = `90%`; */
        img.setAttribute(`id`, `cat-image`);
    }  else {
        const foundImg = document.getElementById(`cat-image`);
        foundImg.remove();
        spawnACat();
    }
}

/* 
const catButton = document.getElementById(`cat_spawner`);
catButton.onclick = console.log(`clcicked`); */
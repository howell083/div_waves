let mxWidth = 300;
let hP = 0;
let sDiv = ``;
function produceDiv (str) {
    let string = str;
    

    return string;
};



//let hPS = "";

function nextDiv () {
    for(i = 0; i < mxWidth; i++) {
        hP = i;
        sDiv = `<div class ="divPart${hP}"></div>`;
        console.log(produceDiv(sDiv));
    };
};

nextDiv();








//console.log(produceDiv(sDiv));
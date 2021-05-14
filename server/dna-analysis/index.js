const isMutant = (dnaSequence) => {
    return horizontalCheck(dnaSequence);
};

// NOT NXN DONT USE ANYMORE - Horizontal TEST end match ["actgaaac", "actgaaac","actgaaac","actgaaac"]
// NOT NXN DONT USE ANYMORE - Instant break horizontal ["aaaactgaaac", "actgaaac","actgaaac","actgaaac"]
// iNOT NXN DONT USE ANYMORE - nstant vertical TEST end match ["actgaaac", "actgaaac","actgaaac","actgaaac"]
// Vertical TEST end match  4x4 matrix ["aaac", "aaac","aaac","tttc"]
// Vertical TEST instant match  4x4 matrix ["aaac", "aaac","aaac","attt"]
const horizontalCheck = (dnaSequence) => {
    const countTrigger = 3;
    let result = false;

    let horizontal = new NBCounter();
    let vertical = new NBCounter();

    for (var j = 0; j < dnaSequence.length; j++) { //loop on array

        horizontal.currentNB = dnaSequence[j][0]; // first Horizontal item
        vertical.currentNB = dnaSequence[0][j]; // first Vertical item

        for (var i = 1; i < dnaSequence[j].length; i++) { //loop in the string from 2nd char

            if(dnaSequence[j][i] === horizontal.currentNB){ //check if we have a match and if we do
                horizontal.count++; //start counting
                if(horizontal.count >= countTrigger){ // check if we have enough matches to call it a win
                    result = true; // call it a win
                    console.log("win horizontal", i, horizontal.currentNB, horizontal.count);
                    break; // break string loop
                }
            }else{ //if we don't have a match
                console.log("reset count horizontal", i, horizontal.currentNB, horizontal.count);
                horizontal.count = 0; // reset count
                horizontal.currentNB = dnaSequence[j][i]; // update nitrogen base we are looking for
            }

            if(dnaSequence[i][j] === vertical.currentNB){ //check if we have a match and if we do
                vertical.count++; //start counting
                if(vertical.count>=countTrigger){ // check if we have enough matches to call it a win
                    result = true; // call it a win
                    console.log("win vertical", i, vertical.currentNB, vertical.count);
                    break; // break string loop
                }
            }else{ //if we don't have a match
                console.log("reset count vertical", i, vertical.currentNB, vertical.count);
                vertical.count = 0; // reset count
                vertical.currentNB = dnaSequence[i][j]; // update nitrogen base we are looking for
            }

          }
          if (result) break; // if we already have a win break array's foreach

          console.log("fail ");
    };
    return result;
};

/**
 * Constructor to count NitrogenBases without creating multiple variables
 */
function NBCounter (){//NB - Stands for NitrogenBase
    this.count = 0;
    this.currentNB = null; 
  };

export default isMutant;
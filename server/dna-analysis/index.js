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

    let count = 0;
    let vCount = 0; //same horizontal logic
    let currentNitrogenBase = null;
    let currentVnitrogenBase = null; //same horizontal logic 

    for (var j = 0; j < dnaSequence.length; j++) { //loop on array

        currentNitrogenBase = dnaSequence[j][0]; // first Horizontal item
        currentVnitrogenBase = dnaSequence[0][j]; // first Vertical item

        for (var i = 1; i < dnaSequence[j].length; i++) { //loop in the string from 2nd char

            if(dnaSequence[j][i]===currentNitrogenBase){ //check if we have a match and if we do
                count++; //start counting
                if(count>=countTrigger){ // check if we have enough matches to call it a win
                    result = true; // call it a win
                    console.log("win horizontal", i, currentNitrogenBase, count);
                    break; // break string loop
                }
            }else{ //if we don't have a match
                console.log("reset count horizontal", i, currentNitrogenBase, count);
                count = 0; // reset count
                currentNitrogenBase = dnaSequence[j][i]; // update nitrogen base we are looking for
            }

            if(dnaSequence[i][j]===currentVnitrogenBase){ //check if we have a match and if we do
                vCount++; //start counting
                if(vCount>=countTrigger){ // check if we have enough matches to call it a win
                    result = true; // call it a win
                    console.log("win vertical", i, currentVnitrogenBase, vCount);
                    break; // break string loop
                }
            }else{ //if we don't have a match
                console.log("reset count vertical", i, currentVnitrogenBase, vCount);
                vCount = 0; // reset count
                currentVnitrogenBase = dnaSequence[i][j]; // update nitrogen base we are looking for
            }

          }
          if (result) break; // if we already have a win break array's foreach

          console.log("fail ");
    };
    return result;
};

export default isMutant;
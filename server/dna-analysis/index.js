const isMutant = (dnaSequence) => {
    return horizontalCheck(dnaSequence);
};

// Horizontal TEST end match ["actgaaac", "actgaaac","actgaaac","actgaaaa"]
// Instant break ["aaaactgaaac", "actgaaac","actgaaac","actgaaac"]
const horizontalCheck = (dnaSequence) => {
    const countTrigger = 3;
    let result = false;
    let count = 0;
    let currentNitrogenBase = null;

    for (var j = 0; j < dnaSequence.length; j++) { //loop on array
        var row = dnaSequence[j];
        currentNitrogenBase = row[0]; // get first item
        for (var i = 1; i < row.length; i++) { //loop in the string from 2nd char
            if(row[i]===currentNitrogenBase){ //check if we have a match and if we do
                count++; //start counting
                if(count>=countTrigger){ // check if we have enough matches to call it a win
                    result = true; // call it a win
                    console.log("win ", row, i, currentNitrogenBase, count);
                    break; // break string loop
                }
            }else{ //if we don't have a match
                console.log("reset count ", row, i, currentNitrogenBase, count);
                count = 0; // reset count
                currentNitrogenBase = row[i]; // update nitrogen base we are looking for
            }
          }
          if (result) break; // if we already have a win break array's foreach

          console.log("fail ", row, i, currentNitrogenBase, count);
    };
    return result;
};

export default isMutant;
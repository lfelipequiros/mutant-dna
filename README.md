# mutant-dna
Hey ! Wanted to say thanks for the nice challenge and this repo is to walk you guys around the "solution".
This repo is still missing work, so I'll include a section of missing work.

## Running the proyect

Running client
> cd client
> yarn start

Running server
> cd server
> npm start

## Testing the result

I used 2 sets of data (with a valid structure) to test the HORIZONTAL result.

To check all the lines
> Horizontal TEST end match ["actgaaac", "actgaaac","actgaaac","actgaaaa"]

To check an instant break
> Instant break ["aaaactgaaac", "actgaaac","actgaaac","actgaaac"]
 

# walkthrough the process 

## Step 1

I've included CRA so we can have a local server, and hopefully a UI where we can run the tests.

## Step 2

Decided to move to a MERN stack to be able to POST a new mutant and GET the records keeping in mind all the 3 lvls we want to solve (analyze dna, have an endpoint, and creating a DB), I've included other handy libs to make life easier, and I'll try to do more commits so we can see the process and making of :)
> reference https://www.mongodb.com/mern-stack

## Step 3

Created a function to check horizontal strings for the desired pattern, but realize that if the matrix will be NxN like the exercise says, we can. use it to check vertically as well, since it will be the exact same ammount of iterations (that's next step)

## Step 4 Check Verticals

Using the same Indexes used to check horizontals and duplicated variables, we can check horizontals at the same time that we do verticals, also, created a small constructor function to handle counts.

# Missing Work

## Check Diagonals

Keeping in mind all the diagonals are NOT to provide a full lenght mutant pattern, create an iteration to check the pattern with the same structure from verticals and horizontals but different increment.

## Possible improvements

Both in scenarios can be improving by ommiting some indexes, beware of that and use the lenght of the mutant pattern (4) Nitrogen Bases to make that offset looking for optimization

## Unit testing

2 Kinds of unit testing are required over here.

### Black box testing
Inside cliente and server, modules communicate in a clear interface with expected results reggardless of it's implementation, so black box test is a perfect approach to test this kind of code, leaving room for inner-module refactoring and enhacement without modifying the overall structure.

### White box testing
Communication between client and server is required in this proyect, the white box testing is a really good approach in this scenario since it points out the exact moment of the communication without seeing the overall behavior, and helps us trigger the request to a service and ensuring it's expected structure.

> Reference https://martinfowler.com/articles/practical-test-pyramid.html



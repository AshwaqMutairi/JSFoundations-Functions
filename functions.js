/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */


function greet(name) {
  // Your code here
  console.log(`Hello ${name}`)
}
greet("Aziz")


/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  if(n%2 == 0)
  {
    console.log(`false`)
    return false
  }
  else
  {
    console.log(`true`)
    return true
  }
}

isOdd(7)

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */

function oddsSmallerThan(n) {
  // Your code here

    // let x = 0;
    // //even
    // while (n > 1)
    // {
    //    if(n%2 === 0)
    //    {
    //      n = n-1
    //      x = x + 1
    //    }
    //    else
    //    {
    //      n = n - 2;
    //      x = x + 1;
    //    }

    // }

    // return x

    return parseInt(n/2)
}

oddsSmallerThan(7)


/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if(isOdd(n))
  {
    return n * n
  }
  else
  {
    return n * 2
  }
}
squareOrDouble(16);

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };

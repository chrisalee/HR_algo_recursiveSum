/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

const superDigit = (n, k) => {
  // base case length === 1
  if(n.length === 1) {
    return Number(n)
  }
  
  return superDigit(n.split("").reduce((acc, num) => {
        acc= Number(num * k)+acc;
        return acc
    }, 0).toString() , 1)
    
}

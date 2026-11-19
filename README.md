# Welcome to My Levenshtein Web
***

## Task
/* What is the problem? */


Implement the `my_levenshtein` function in JavaScript inside `ex00/my_levenshtein.js` 
to compare two equal-length strings character by character and return the number 
of differing positions, or `-1` when their lengths do not match

/*where is the challenge? */
The main challenge was understanding the Levenshtein difference 
concept and ensuring edge cases like empty strings and unequal 
lengths are handled properly.


## Description
/* How have you solved the problem? */

To solve the problem, I researched how character-by-character string comparison works 
and implemented a function in `ex00/my_levenshtein.js`. First, the function checks if 
`param_1.length !== param_2.length` and returns `-1` immediately if they differ. Otherwise, 
it loops through both strings index by index and increments a counter every time two characters 
do not match.

## Installation
/* How to install your project? npm install? make? make re? */

Clone the project repository from Qwasar Git (`git@git.us.qwasar.io:my-levenshtein-web_220684_gjrgs2/my-levenshtein-web.git`)
and ensure Node.js is installed in your development environment to run and test `ex00/my_levenshtein.js`.


## Usage
/* How does it work? */
Include or import `ex00/my_levenshtein.js` and call `my_levenshtein(str1, str2)` with two strings 
(for example, `my_levenshtein("ACCAGGG", "ACTATGG")` returns `2`, while `my_levenshtein("GGACGGATTCTG", "AGG")` 
returns `-1`)[cite: 1]

### The Core Team


<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>

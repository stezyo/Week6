//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dogString, dogNames){
    for(let i = 0; i < dogNames.length; i++){
        let j = dogNames[i]
        if (dogString.search(j) > 0){
            console.log (`Matched dog_name: ${j}`)
        }
        else {
            console.log(`No Matches: ${j}`)
        }
    }

}
findWords(dog_string, dog_names)

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i+= 2){
        arr.splice(i, 1, "even index")
    }
    console.log(arr)
}

replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"])
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

/* 
Find Even Numbers
-----------------
Create a function that, given a list as a parameter, finds the even numbers inside the list. The function should then return a list.
Example:
Input: [2, 7, 10, 11, 12]
Output: [2, 10, 12]

def evenFinder(List):
    new = [number for number in List if number % 2 == 0]
    # for number in List:
    #     if number % 2 == 0:
    #         new.append(number)
    return new
List = [2, 7, 11, 10, 12]
print(evenFinder(List))

*/

function findEven(arr){
    let nu = []
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            nu.push(i)
        }
    }
    console.log(nu)
}
findEven([2, 7, 11, 10, 12])

/*
Create a function that given a string as a parameter of upper/lower case letters and empty space characters (" "), return the length of the last word. Meaning, the word that appears far most to the right if we loop through the words.
Example Input: "Hello World"
Example Output: 5

def last_word(string):
    split = string.split(" ")
    lastitem = split[-1]
    print(len(lastitem))
lastWord = "Hello World"
last_word(lastWord)


*/

function last_word(string){
    split = string.split(" ")
    console.log(split.pop().length)
}

str = "Hello World"
last_word(str)
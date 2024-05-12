// Assign a function expression to a variable, with one parameter that outputs the provided argument to the console.
const funtion1 = function(str: string) {
    console.log(str);
};

//calling the function function1 with the argument "Hello, Aleeze".
funtion1("Hello, Aleeze"); // Output :Hello, Aleeze

// Create the same function as a normal function declaration
function function2(str: string) {
    console.log(str)
}

// Call the normal function declaration with an argument
function2("Hello again!"); // Output :Hello again!

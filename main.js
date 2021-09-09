// Functions and methods

/** What are functions? */
    // a set of statements that performs a task or calculates a value

/** Function Declaration */
    console.log("****** Function Declaration ******");
    // function declaration
    function greet() {
        // code block
        console.log('Hello there');
    }
    greet(); // Invoking the function


    // Function expression
    // It will not work or it will display undefined if you invoke the function first before the expression. - uses most of the time.
    const greetings = function() {
        // code block
        console.log('Hi!');
    }
    greetings();
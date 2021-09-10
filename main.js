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


/** Arguments and Parameters */
    console.log("****** Arguments and Parameters ******");
    // parameters -> function(param1, param2)
    // arguments -> function_name(args1, args2)

    const my__greeting = function(name, time) {
        console.log(`Hello, ${time} ${name}`);
    }
    my__greeting('Paul', 'Good day');


/** returning values */
    console.log("****** Returning Values ******");

    const calcArea = function(radius) {
        return 3.14 * 5**2;
    }
    const area = calcArea(5);
    console.log(area);


/** Arrow Functions */
    console.log("****** Arrow Functions ******");
    const display__names = ['Mark Zuckerberg ', ' Bill Gates'];
    const set__names = (year, technologies) => {
        return  `Year ${year} and technology ${technologies} by ${display__names}`;
    }
    const technology = set__names('2021', 'React.js');
    console.log(technology);

    // Single return
    const greet__you = () => 'hello, world';
    const greet__out = greet__you();
    console.log(greet__out);

    // Activity
    const bill = (products, tax) => {
        let total = 0;
        for(let i = 0; i < products.length; i++) {
            total += products[i] + products[i] * tax;
        }
        return total;
    }
    console.log(bill([10, 15, 30], .12));
    // the arguments of products[i] should be in index.

/** Functions vs Methods */
    console.log('****** Functions vs Methods ******');

    // functions -> block of code to do something that can be invoke and run
    const le__greet = () => 'hello';
    const le__greet2 = le__greet();
    console.log(le__greet2);

    // methods -> can be invoke using dot notation
    // value.methodName()

    const naming = 'paul';

    const result__name = naming.toUpperCase();
    console.log(result__name);

/** foreach methods and callbacks */
// A normal functions that pass to another function to invoke an arguments
    console.log('****** Methods and callbacks ******');
    // callbacks & foreach
    let bday__boy = ['Hey, its your birthday!', 'Cook some food'];
    // function
    const mawi = (purpose, index) => {
        console.log(`${index} Well ${purpose}`);
    }
    // callback function
    bday__boy.forEach(mawi);


/** Callback function in actions */
//
    console.log('*** Callback function in actions ***');
    // get id from index
    const ul = document.querySelector('#cb_action');
    const sf_char = ["Ryu", "Ken", "Chun-li", "Bison", "Blanca"];

    // html template to callback function
    let html = '';
    sf_char.forEach(person => {
        // create html template
        html += `<li style="color: #111;"> ${person} </li>`
    });

    // display to html
    ul.innerHTML = html;
    console.log(html);
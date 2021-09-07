/* Basics of JavaScript */
// 1. Adding the the JavaScript to the HTML -> Look into HTML file.
// 2. The browser console
    /**
     * Run the index.html to your best browser.
     * Inspect code (F12), (rt click -> inspect element) - console tab
    */
// 3. Variables, Constants & Comments
    /**
     * var - globally define
     * let - specific, can be defined
     * const - rare-locked
     */

    // scope -> Globally & Locally
    var globally__def = 'This is a string.';

    let specific__def = 'let var. Also a string.';
    // You can redefine the let container.
    specific__def = 'let var. redefined.';

    // use to create in IDs, names, etc.
    const rare__def = 001;

    console.log(globally__def, specific__def, rare__def);

/** Data Types at Glance */
    // Number
    var set_num = [1, 2, 15, 30, 100, 3.14];

    // String
    var set_str = ["Hello", 'Name', '1234'];

    // Boolean
    var is_true_false = [11];
    console.log(!is_true_false);
    console.log(is_true_false > 5);

    // Null & undefined
    var is__null = [];
    var is__undefined;
    console.log(is__null + ' ' + is__undefined);

    // Object
    // Consist of Property and a property value
    var is__obj = {
        name: "Paul",
        age: 26,
        eyeColor: 'Black'
    };
    console.log(is__obj);

    // String
    let email = 'cristianpaul_c@yahoo.com';

    // Concatenation
    let firstName = 'Cristian';
    let lastName = 'Castaneda';
    let fullName = firstName + ' ' + lastName;
    console.log(fullName);

    // Getting characters
    console.log(fullName[5]);
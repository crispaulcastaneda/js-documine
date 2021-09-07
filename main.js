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

    // String Length
    console.log(fullName.length);

    // String Methods
    console.log(fullName.toLocaleUpperCase());
    console.log(fullName.toLocaleLowerCase());
    console.log(fullName.indexOf('r'));

    /** Common String Methods */
    // lastIndexOf()
    let samp__email = 'sample@email.com';
    console.log(samp__email.lastIndexOf('e')); // 7

    // slice()
    console.log(samp__email.slice(2, 5)); // slice(start, stop)

    // substr()
    console.log(samp__email.substr(1, 5));

    // replace()
    console.log(samp__email.replace('s', 't')); // replace('the letter', 'to be change');


/** Numbers */
    // Written along the code.
    let samp__radius = 10;
    let samp__pi = 3.14;

    console.log(samp__radius, samp__pi);

    // MATH OPERATOR -> BIDMAS
    // Bracket, Indices, Division, Multi, Add, Sub
    let bidmas__res = 5 * (3 + 10) / 4;
    console.log(bidmas__res);

    // Increment
    let name__liked = 'Paul';
    let like__times = 10;

    console.log(name__liked + ' ' + 'has ' + like__times + ' ' + 'likes in social media');

    // Template Strings
    const the__author = 'Paul Castaneda';
    const the__artwork = 'Programming';
    const likes = 450;

    console.log(`A book that Mr. ${the__author} made in ${the__artwork} has reached the likes from ${likes} in the first release.`);

    // Template String to browser
    let root__html = `
        <h1> ${the__artwork} </h1>
        <h2> ${the__author} </h2>
        <p> reached the ${likes} in the first release. </p>
    `

    const htm__post = document.getElementById('template__string');
    htm__post.innerHTML = root__html;

/** ARRAYS */

    // order list of values. Called index.
    let parts__person = ["hands", "eyes", "nose", "lips"];
    console.log(parts__person);
    parts__person[2] = 'ears';

    let random__stuffs = ["Teddy Bear", "Laptop", 1234, 3.14, true];
    console.log(random__stuffs);

    // Array Methods
    let global__arr = ["Cars", "Fans", "Boxes"];
    console.log(global__arr);

    // var.join();
    console.log(global__arr.join("Bottle"));

    //indexOf();
    console.log(global__arr.indexOf("Cars")); // if unidentified -1 means nothing.

    // concat() - does not change the existing arrays but returns a new array, containing the values of the joined array.
    let global__arr2 = ["Cats", "AC", "Plastics"];
    console.log(global__arr2.concat(global__arr));

    // push() - push new item to the selective array. It alter the original method, called destructive value.
    console.log(global__arr2.push("Drawer")); // 4

    // pop() - removes the last element.
    console.log(global__arr2.pop());

    // shift() - removes the 0th item in array.
    console.log(global__arr2.shift());

/** NULL & UNDEFINED */

    // Null -> no value at all
    // Undefined -> no value assign

    let brand__samp;
    console.log(brand__samp + 3, `The advertising from ${brand__samp} is awesome`);

    // if brand__samp no value -> NaN `The advertising from undefined is awesome`
    // with value -> 3 `The advertising from undefined is awesome`


/** BOOLEANS & COMPARISON */
    // BOOLEANS
    console.log(true, false, 'true', 'false');

    let sunglasses = ['Rayban', 'Vans'];
    console.log(sunglasses.includes('Rayban'));
    console.log(sunglasses.includes('Water'));

    // COMPARISON
    let my__age = 26;
    let my__name = 'Cristian';

    // Age
    console.log(my__age == 25);
    console.log(my__age != 24);
    console.log(my__age > 26);
    console.log(my__age < 25);

    // Name
    console.log(my__name == 'Cristian');
    console.log(my__name != 'Cristian');
    console.log(my__name > 'Cristian');
/** Objects and literals */
// Objects have properties & things they can do (methods)

// e.g blog
// properties : 1. title, 2. content, 3. author
// methods : 1. publish, 2. unpublish, 3. delete.

/** Creating an Object Literal */
    console.log('***** Creating on Object Literal *****');
    let person = {
        name: 'Cristian Paul Castaneda',
        age: 25,
        hobbies: ['Coding', 'Listening to music', 'Sleeping']
    };
    console.log(person);

    // using dot(.) notation
    // best use
    console.log(person.name);

    // override data to specific object.
    person.age = 26;
    console.log(person.age);

    // Creating a key to change value of a property.
    const work = 'hobbies';
    console.log(person[work]);

    // Checking the typeof
    console.log(typeof person);


/** Adding Methods */
    console.log('*** Adding Methods ***');

    let form__data = {
        name: 'Harley Quinn',
        age: 10000,
        gender: 'female',
        login: function() {
            console.log(form__data.name + ' has logged in. ');
        },
        logout: function() {
            console.log( form__data.name + ' has logged out.');
        }
    }
    // methods like dot(.) notation.
    console.log(form__data.name.toUpperCase());
    console.log(form__data.logout());


/** 'this' Keyword */
// refers to the owner of the method.
    console.log("*** 'this' keyword *** ");

    let congtv = {
        name: 'Lincoln Velasquez',
        age: 30,
        gender: 'Male',
        work: 'V-logger',
        vlogs: ['Secpreteary', 'Junnieboy Prank'],
            // arrow functions will not work in this object.
        login() {
            console.log( congtv.name + ' has logged in.')
        },
        logout() {
            console.log( congtv.name + ' has logged out.')
        },
        work_vlogs() {
            // console.log(this.vlogs);
            console.log(congtv.name + ' has uploaded with the following vlogs: ');
            // callback function
            this.vlogs.forEach(vlog => {
                console.log(vlog);
            });
        },
    };
    congtv.work_vlogs();

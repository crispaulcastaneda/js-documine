/** Control Flow */
    // Use conditional statements for checking conditions.
    // for loops
    console.log("***************** for loop *******************");
    // for (initialization variable; condition (t/f); final expression)
    for (let i = 0; i < 5; i++) {
        console.log('In loop ' + i);
    }

    const arr__names = ['Mario', 'Luigi', 'Yoshi'];
    for(let cnt__names = 0; cnt__names < arr__names.length; cnt__names++) {
        // console.log(arr__names[1]);
        let html = `<div>${arr__names[cnt__names]}</div>`
        console.log(html);
    }

    // while loop
    console.log("***************** While loop *******************");
    const wh__names = ['Paul', 'Oli', 'Harley'];
    let i = 0;

    // while(i < 5) {
    //     console.log('in loop ' + i);
    //     i++;
    // }
    while(i < wh__names.length) {
        console.log(wh__names[i]);
        i++;
    }

    console.log("***************** do while loop *******************");

    // do while loops
    let a = 0;

    do {
        console.log('val of a is ' + a);
        a++;
    } while(a < 5);

    console.log("***************** if statement *******************");
    const my__age = 26;
    if (my__age > 20) {
        console.log('This is true');
    }

    // const my__pass = prompt('Enter your password');
    // if (my__pass.length >= 8) {
    //     console.log('You may enter');
    // }

    console.log("************** if/else statement ****************");
    const admin__email = prompt('Enter email: ');
    const user__password = prompt('Enter password: ');

    const def__email = 'test@email.com';

    if (admin__email === def__email && user__password.length >= 8) {
        console.log('You may login');
    } else {
        console.log("Sorry, no account found");
    }
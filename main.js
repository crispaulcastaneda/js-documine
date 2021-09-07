/** Control Flow */
    // Use conditional statements for checking conditions.
    // for loops

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
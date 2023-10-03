"use strict";

const x = 1;
{
    console.log(x); // ReferenceError
    const x = 2;
    console.log(x);
}
console.log(x);
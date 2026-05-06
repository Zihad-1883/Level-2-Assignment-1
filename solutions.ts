// Problem 1:

function filterEvenNumbers (input : number[]) : number[] {
    return input.filter(e => e % 2 === 0)
}



// Problem 2:

function reverseString (input : string) : string{
    let arr : string[] = []
    let reversedInput : string = ''
    for( let i of input){
        arr.unshift(i)
    }
    arr.forEach(e => {
        reversedInput = reversedInput.concat(e)
    })
    return reversedInput    
}



// Problem 3:

type StringOrNumber = string | number;

function checkType (input : StringOrNumber) {
    if(typeof input === 'string'){
        return '"String";'
    }
    else if(typeof input === 'number'){
        return '"Number";'
    }
}



// Problem 4:

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}



// Problem 5:

interface Book{
    title : string;
    author : string;
    publishedYear : number;
}

function toggleReadStatus (obj : Book) : Book & {isRead : boolean} {
    const {title , author , publishedYear} = obj
    const updatedObj = {
        title,
        author,
        publishedYear,
        isRead : true
    }
    return updatedObj;
}



// Problem 6:


class Person {
    name : string;
    age : number;

    constructor(name : string , age : number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    grade : string

    constructor(name : string , age : number , grade : string) {
        super(name , age)
        this.grade = grade
    }

    getDetails () {
        return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}";`
    }
}



// Problem 7:


function getIntersection (arr1 : number[] , arr2 : number[]) : number[] {
    let commonArray : number[] = [];
    arr1.forEach(e => {
        if(arr2.includes(e)){
            commonArray.push(e)
        }
    })
    return commonArray;
}


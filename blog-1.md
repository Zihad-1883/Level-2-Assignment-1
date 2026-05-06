# 1 . Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

## In Typescript , when we use 'any' or 'unknown' as type to a variable , it means that the variable could be of any data types available .

## For the type 'any' , Typescript compiler stops checking for types and accepts anything or any types . It will accept any methods we use and will not give us error signals until runtime . 

```typescript
let userName : any = 'zihad' // typescript will not give any error here
console.log(userName.toFixed());     // we can use any kind of methods here 
console.log(userName.length);
```

## We will get error after running the code . The default Typescript error showing behaviour stops with 'any' type.

## if we use 'unknown' type , like the type 'any' , Typescript compiler also stops checking for types and accepts anything or any types as we give . But 'unknown' is a better choice then 'any' because unlike 'any' , 'unknown' forces us to verify the type before using it , and will show error when using various methods of different types . 

```typescript
let userName : unknown = 'Zihad';
console.log(userName.toUpperCase());  // Typescript will show us error here as it is not sure of the type
```

## So we need to cofirm the type : 

```typescript
let userName : unknown = 'Zihad'; 
if(typeof userName === 'string'){
    console.log(userName.toUpperCase());
}
```

## So 'unknown' is the better choice for handling unpredictable data as it forces us to clarify the data type before adding any kind of functionality.

## Type narrowing : It clarifies a variable from a wider type (union / intersection) to a specific type of data . It is done inside a conditional block . If there is multiple types available , and we want pursue with a particular type we can use type narrowing . We use it by typeof , instanceof etc . By using typeof : 

```typescript
type StringOrNumber = string | number;

function checkType (input : StringOrNumber) {
    if(typeof input === 'string'){
        return '"String"'
    }
    else if(typeof input === 'number'){
        return '"Number"'
    }
}
```


## if we give a string as input , the function will return "String" and if we give a number as input , the function will return "Number" . Type narrowing gives us more control over our code .
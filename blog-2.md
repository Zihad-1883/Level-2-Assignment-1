# 2. How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

## If we have a master interface user as : 

```typescript
interface User {
    name : string;
    userId : number;
    password : string;
    role : string;
}
```

## For different use cases , we have to create more interface from this , which makes the code unnecessarily long : 

```typescript
interface UserPublicProfile {
    name : string;
    userId : number;
    role : string
}
```

```typescript
interface userPrivateProfile {
    password : string
}
```

## If there is one change in the original User , then we will have to change in the other ones manually which is hard to do and make the code repetitive . To avoid repetition , we use the utilities 'Pick' and 'Omit' . Using 'Pick' , we can choose types to form a new interface from the original . 

```typescript
interface User {
    name : string;
    userId : number;
    password : string;
    role : string;
}

type UserPublicProfile = Pick<User , 'name' | 'userId' | 'role'>; // creates type with the keys name , userId and role from the interface 'User' . 
type userPrivateProfile = Pick<User , 'password'>; // creates type with the key password from the interface 'User' .
```


## Using Omit , we can create a new type by deleting some specific keys form the original type .

```typescript
interface User {
    name : string;
    userId : number;
    password : string;
    role : string;
}

type UserPublicProfile = Omit<User , 'password'>; // creates type without the key password from the interface 'User'
type userPrivateProfile = Omit<User , 'name' | 'userId' | 'role'>; // creates type with the keys name , userId and role from the interface 'User'
```

## 'Pick' picks specific keys from the original existing interface and 'Omit' deletes specific keys from the original existing interface. Without these the code becomes messy and repetitive . Thus 'Pick' and 'Omit' keeps out code DRY (Don't Repeat Yourself) .
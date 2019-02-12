const data = [
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      "age": 39,
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      "age": 38,
      "eyeColor": "blue",
      "name": "Cortez",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b5e3168cc79132b631c666a",
      "index": 2,
      "age": 2,
      "eyeColor": "blue",
      "name": "Suzette",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e31682093adcc6cd0dde5",
      "index": 3,
      "age": 19,
      "eyeColor": "green",
      "name": "George",
      "favoriteFruit": "banana"
    }
  ];

// Task 1
const findTypes = (...args) => {
    const array = [];    
    for(let i = 0; i<args.length; i++) {
        array.push(typeof(args[i]));
    }
    return array;
}
findTypes(null, 5, "hello");

// Task 2
const executeforEach = (someArray, someFunction) => {
    for(let i = 0; i<someArray.length; i++) {
        someFunction(someArray[i]);
    }
}
executeforEach([1,2,3], function(el) { 
    console.log(el);
});

// Task 3
const mapArray = (someArray, someFunction) => {
    const array = [];
    executeforEach(someArray, function(el) {
        array.push(someFunction(el));
    })
    return array;
}
mapArray([2, 5, 8], function(el) {
     return el + 3;
});

// Task 4
const filterArray = (someArray, someFunction) => {
    const array = [];
    executeforEach(someArray, function(el) {
        const flag = someFunction(el);
        if (flag) {
            array.push(el);
        }
    })
    return array;
}
filterArray([2, 5, 8], function(el) { 
    return el > 3;
});

//Task 5
const getAmountOfAdultPeople = (data) => {
    const peopleAges = mapArray(data, function(el) {
        return el.age;
   })
   const adultPeople = filterArray(peopleAges, function(el) {     
     return el > 18;
    });

    return adultPeople.length;
}
getAmountOfAdultPeople(data);

//Task 6
const getGreenAdultBananaLovers = (data) => {
    const bananaLovers = filterArray(data, function(el) {   
        if (el.age > 18 && el.favoriteFruit === 'banana' && el.eyeColor === 'green') {
            return el;
        } 
    });
    const names = mapArray(bananaLovers, function(el) {
        return el.name;
   })
    return names;
}
getGreenAdultBananaLovers(data);

//Task 7
const keys = (object) => {
    let keys = [];
    for (let key in object) {
        keys.push(key);
    }
    return keys;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});

//Task 8
const values = (object) => {
    let valueArray = [];
    for (let value in object) {
        valueArray.push(object[value]);
    }
    return valueArray;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});

//Task 9
const showFormattedDate = (fulldate) => {
    const monthsArray = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const day = fulldate.getDate();
    const month = monthsArray[fulldate.getMonth()];
    const year = fulldate.getFullYear();
    return `Date: ${day} of ${month}, ${year}`;
}

showFormattedDate(new Date('2019-01-27T01:10:00'));

//Task 10
const isEvenYear = (fulldate) => {
    const year = fulldate.getFullYear();
    return !(year % 2);
}

isEvenYear(new Date('2019-01-27T01:10:00'))

//Task 11
const isEvenMonth = (fulldate) => {
    const month = fulldate.getMonth();
    return !((month + 1) % 2);
}

isEvenMonth(new Date('2019-02-27T01:10:00'))
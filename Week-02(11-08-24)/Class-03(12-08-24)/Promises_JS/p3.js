const map=new Map();
map.set('name','mehul');
map.set('age',22);

//Javascript has bunch of inbuilt classes and can bring in 
// a lot of functionality like this map object that we created
//using inbuilt Map class ... same as objects....

// .set is used to set the value in the map --> the first
//argument is the key and the 2nd one is the value 
//associated to that key ...

//Similarly .get is used to fetch the value from the map
//using key ..
console.log(map.get('name'));
console.log(map.get("age"));
var foo = {
    name : 'foo',
    age : 30,
    major : 'computer science'
};
var prop;
for (prop in foo) {
    console.log(prop, foo[prop])    
}

var a = 100;
var objA = { value: 100 };
function changeArg(num, obj) {
    num = 200;
    obj.value = 200;

    console.log(num);
    console.log(obj);
}

changeArg(a, objA);
console.log(a);
console.log(objA);

var foo = {
    name : 'foo',
    age: 300
};

console.log(foo.toString());
console.dir(foo);
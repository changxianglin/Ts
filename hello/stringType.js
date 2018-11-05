var myname = 'zhang san';
// myname = 23 show error
var alias = 'haha';
// alias = 21 show error
var man = true;
function test(name) {
    return 123;
}
// test(25) show error
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var zhangsan = new Person();
zhangsan.name = 'xiaozhang';
zhangsan.age = 21;
function Test(a, b, c) {
    if (b === void 0) { b = "hehe"; }
    if (c === void 0) { c = "hah"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
// Test('x')  can show b and c in console
// can select parameter use ?
function Test(a, b, c) {
    if (b === void 0) { b = "hehe"; }
    if (c === void 0) { c = "hah"; }
    console.log(a);
    console.log(b);
    console.log(c);
}

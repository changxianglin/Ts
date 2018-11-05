var myname: string = 'zhang san'

// myname = 23 show error

var alias = 'haha'

// alias = 21 show error

var man: boolean = true

function test(name: string): Number {
    return 123
}

// test(25) show error


class Person {
    name: string
    age: Number
}

var zhangsan: Person = new Person()

zhangsan.name = 'xiaozhang'
zhangsan.age = 21


function Test(a: string, b: string = "hehe", c: string = "hah") {
    console.log(a)
    console.log(b)
    console.log(c)
}

// Test('x')  can show b and c in console


// can select parameter use ?

function Test(a: string, b?: string = "hehe", c: string = "hah") {
    console.log(a)
    console.log(b)
    console.log(c)
}


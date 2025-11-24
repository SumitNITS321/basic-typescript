"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = [1, 32, 4, { student: 'Ram' }, [1, 32, 3], 'l'];
let b = [1, 1, 323, 2,];
let arr = ['dfgkih', 2];
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "admin";
    userRoles["GUEST"] = "guest";
    userRoles["SUPER_ADMIN"] = "super";
    userRoles["STATUSFAIL"] = "404 not found";
    userRoles["PASS"] = "200";
})(userRoles || (userRoles = {}));
userRoles.ADMIN;
let x;
let y;
let z; //ts ka dimag kharab
y = 123;
y = 'main hu don';
if (typeof y === "string")
    y.toUpperCase();
function abcd() {
    return 12;
}
function xyz() {
}
let p;
let q; //union
//Primitive:number,string,boolean
//Reference:(){}[]Array,tuple,object,enum
let s; //ts inferring type itself:inference
let t; //type annotations
function getdata(obj) {
    obj.email = 'john.doe@company.com';
    console.log(obj.email);
}
getdata({ name: 'harsh', id: 12, email: 'john@' });
let v;
let w;
function pqrs(q) {
    q;
}
;
//unlike interfaces, types of same name do not merge
//Constructor
class HumanMaker {
    name;
    isSmart;
    profession;
    age = 0;
    constructor(name, isSmart, profession) {
        this.name = name;
        this.isSmart = isSmart;
        this.profession = profession;
        if (!profession) {
            this.profession = 'unemployed';
        }
    }
}
let h1 = new HumanMaker('Harsh', true, '');
console.log(h1);
//classes ke andar wale functions:methods
//class ke andar banne wale kisi bhi variable ko agar aap access kar rhe ho class ke andar kahi aur to apko this ke sath access karna hoga
class Abcd {
    name = "Harsh";
    getname() {
        console.log(this.name);
        this.changename();
    }
    changename() {
        this.name = "Sumit";
        console.log(this.name);
    }
}
;
const obj = new Abcd(); // create an instance
obj.getname();
class IndianMaker extends HumanMaker {
    state;
    constructor(state) {
        super("Ranjit", true, '');
        this.state = state;
    }
}
let i1 = new IndianMaker('UP');
console.log(i1);
class sigmaboy {
    name;
    constructor(name) {
        this.name = name;
        name = 'sumit';
    }
} //name ki value kabhi change nahi hogi
//getter and setter
class namer {
    _name;
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let n1 = new namer('sumit');
class Tea {
    static up = 'ginger';
    static delhi = 'black';
    static mp = 'green';
}
;
console.log(Tea.delhi); //accessing w/o creating an instance-->using static
//Abstract classes: for which we need not create an instance but can use later via inheritance in other classes
function heroes(...arr) {
    console.log(arr);
}
;
heroes('ironman', 'captainamerica', 'krrish');
var arr1 = [1, 2, 3, 4];
var arr2 = [...arr]; //spread operator,copy
//Generics
function fun(a, b) { }
fun(2, "HalwaPudi");
//# sourceMappingURL=app.js.map
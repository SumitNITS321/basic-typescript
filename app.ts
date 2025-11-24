 let a=[1,32,4,{student:'Ram'},[1,32,3],'l']
 let b:number[]  = [1,1,323,2,]
 let arr:[string,number] = ['dfgkih',2]
 enum userRoles {
    ADMIN = 'admin',
    GUEST = 'guest',
    SUPER_ADMIN = 'super',
    STATUSFAIL = '404 not found',
    PASS = '200'
 }
 userRoles.ADMIN
 let x:number
 let y:unknown
 let z:any//ts ka dimag kharab
 y=123
 y='main hu don'
 if(typeof y==="string") y.toUpperCase()
function abcd():number{
    return 12
}
function xyz():void{

}
let p: null
let q: string|null//union
//Primitive:number,string,boolean
//Reference:(){}[]Array,tuple,object,enum
let s:12//ts inferring type itself:inference
let t: number|boolean|string//type annotations
//Interfaces
interface User{
    name:String
    email:string
    id:number
    gender?:string//CharacterData
}
function getdata(obj:User){
    obj.email = 'john.doe@company.com'
    console.log(obj.email)
}
getdata({name:'harsh',id:12,email:'john@'})

interface Admin extends User{
    admin:string
}
//interfaces with same names are merged
//Type aliases
type sankhya = number;
let v:sankhya;
type value = string|number|null;
let w:value;
type user = {name:string,email:string}
type admin = user & {
    getdetails(user:string):void
}

function pqrs(q: admin){
    q
};
//unlike interfaces, types of same name do not merge
//Constructor
class HumanMaker {
    age = 0;
    constructor(public name: string, public isSmart: boolean,public profession: string) {
        if (!profession) {
            this.profession = 'unemployed';
        }
    }
}
let h1 = new HumanMaker('Harsh',true,'')
console.log(h1)
//classes ke andar wale functions:methods
//class ke andar banne wale kisi bhi variable ko agar aap access kar rhe ho class ke andar kahi aur to apko this ke sath access karna hoga
class Abcd{
    name="Harsh"
    getname(){
        console.log(this.name)
        this.changename()
    }
    changename(){
        this.name = "Sumit"
        console.log(this.name)
    }
};
const obj = new Abcd();  // create an instance
obj.getname();
class IndianMaker extends HumanMaker{
    constructor(public state: string){
        super("Ranjit",true,'')
    }
}
let i1 = new IndianMaker('UP')
console.log(i1)
class sigmaboy{
    constructor(public readonly name:string){
        name = 'sumit'
    }
}//name ki value kabhi change nahi hogi
//getter and setter
class namer{
    constructor(public _name:string){}
    get name(){//will work as attribute
            return this._name
        }
    set name(value:string){
        this._name = value
    }
}
let n1 = new namer('sumit')
class Tea{
    static up = 'ginger'
    static delhi = 'black'
    static mp = 'green'
}; console.log(Tea.delhi)//accessing w/o creating an instance-->using static
//Abstract classes: for which we need not create an instance but can use later via inheritance in other classes
function heroes(...arr:string[]){//rest operator
    console.log(arr)
}; heroes('ironman','captainamerica','krrish')
var arr1 = [1,2,3,4]
var arr2 = [...arr]//spread operator,copy
//Generics
function fun<L>(a:L,b:string){}
fun<number>(2,"HalwaPudi")
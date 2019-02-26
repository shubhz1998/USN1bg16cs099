//decision making parameters

var age=18;
if(age<18){
    console.log("minor");
 } else if(age >18){
        console.log("major");
    }

    //con?true:false
    age>=18?console.log("major"):console.log("minor");
    

    //function
    function sachin(firstName,Lastname){
        console.log(firstName+''+Lastname)
    }
    sachin('deepti','agarwal');

    //array
    var names=["sachin's",'ankita','suhani']
    console.log(name[2]);
    console.log(names.length);
    names.push("shrihaan");
    //names.unshift("rajesh");
    //names.pop();
    console.log(names);
    

var tips=[];
var total1 =[];
function tipls(rest_bill)
{
    if(rest_bill > 50 )
    {
        tip = (25/100) * rest_bill;
        tips.push(tip);
        total=tip + rest_bill;
        total1.push(total);
    }
   

    else if(rest_bill > 50 && rest_bill< 200 )
    {
        tip = (15/100) * rest_bill;
        tips.push(tip);
        total=tip + rest_bill;
        total1.push(total);
    }

    else
    {
        tip = (10/100) * rest_bill;
        tips.push(tip);
        total=tip + rest_bill;
        total1.push(total);
    }
    console.log(tips);
    console.log(total1);

}

tipls(48);
tipls(124);
tipls(268);

var myDetails={
    firstName:'sachin',
    lastname:'srivatsa',
    dob:1980,
    family:['sachin','ankita'],
    calcage:function(birthyear){
        return 2019-birthyear;
    }
};
console.log(myDetails.firstName);
var z='dob';
console.log(myDetails[z]);
myDetails.dob=1981;
console.log(myDetails);

var shiva=new Object();
shiva.firstName='deepti';
console.log(shiva);

console.log('sachin is'+myDetails.calcage(1980)+' years old');



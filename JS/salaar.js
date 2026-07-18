const vegetables = ["Carrot", "Broccoli", "Spinach", "Potato", "Tomato"];
//vegetables.forEach(function(vegetable) {
function something(m,callback){
    console.log(m + "Something Something");
    callback();
}
function character()
{
    console.log("casting:maali,shreya")
}
//something("movie:",character);
//promise
let promise=new Promise((resolve,reject)=>{
    resolve("success");
}
);
//promise.then(result => console.log(result));
async function sum()
{
    return 5+2;

}
//sum().then(console.log);
let std={
    name:"pooja",
    age:25
};
let json =JSON.stringify(std);
console.log(json);
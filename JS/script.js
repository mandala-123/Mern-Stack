/*const register=()=>{
    console.log(5*5);

};
register();
document.getElementById("title").innerHTML="<h1>Registration</h1>";

*/

// const register=() =>{
//     console.log(5*5)
// };
// register();
// document.getElementById("title").innerHTML="<h1>Registration</h1>"
const show=()=>{
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const phone=document.getElementById("phone").value
    let gender="";
    const genders=document.getElementsByName("Gender");
    for (let i=0;i<genders.length;i++){
        if (genders[i].checked){
            gender=genders[i].value;
            break;
        }
    } 
    let Qualification=[];
    const qualify=document.getElementsByClassName("Qualification");
    for (let i=0;i<qualify.length;i++){
        if(qualify[i].checked){
            Qualification.push(qualify[i].value);
        }
    }
    const dob=document.getElementById("data").value;
    let Image = document.getElementById("image").files[0];
    let imageURL = "";

    if (Image) {
    imageURL = URL.createObjectURL(Image);
    document.getElementById("result").innerHTML=
    `
    <h2>Students Details</h2>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Password:</b>${password}</p>
    <p><b>Phone no</b>${phone}</p>
    <p><b>Gender:</b>${gender}</p>
    <p><b>Qualification:</b>${Qualification.join(", ")}</p>
    <p><b>DOB:</b>${dob}</p>
    <p><b>Image:</b></p>
    <img src="${imageURL}" width="150" height="150" alt="Student Image">
    `;
    }
};
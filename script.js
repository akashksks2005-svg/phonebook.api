
  const url="http://localhost:3000/contacts";

async function DisplayDetails() {
     
    

   

     var response = await fetch(url)


     var data = await response.json();

        var row ="";
      
      data.forEach((contact) => {


          row += ` <tr>
          <td>${contact.name}</td>  

          <td> ${contact.phone}</td>  
           
          <td> ${contact.email} </td>  
           <td> <button class="edit" onclick="EditData('${contact.id}','${contact.name}','${contact.phone}','${contact.email}')"> EDIT </button>
           <button class="delete" onclick="DeleteData('${contact.id}')"> DELETE </button> </td> 
          
          </tr>`;

          
        
   
     });


  document.getElementById("result").innerHTML=row;

  console.log(data)
  
       
}

DisplayDetails()


async function SaveData(){

var id = document.getElementById("contactid").value
var name = document.getElementById("contactname").value
var phone = document.getElementById("phoneNumber").value
var email = document.getElementById("emailid").value


if(name == ""|| phone.length<4||!email.includes("@")){

 alert("enter the details");
  return
}

var contact={
  id,
name,
phone,
email,

}
if(id==""){

await fetch(url,{


method:"POST",
headers:{
"Content-Type":"application/json"

},
body:JSON.stringify(contact)

});

}else{


  
await fetch(url+"/"+id,{


method:"PUT",
headers:{
"Content-Type":"application/json"

},
body:JSON.stringify(contact)

})


}


Clear();
DisplayDetails();
}

async function EditData(id,name,phone,email) {
  document.getElementById('contactid').value=id;
  document.getElementById('contactname').value=name;
    document.getElementById('phoneNumber').value=phone;
      document.getElementById('emailid').value=email;
   
}

async function DeleteData(id) {

  await fetch(url+"/"+id,{

method:"DELETE"
});
   DisplayDetails();
}


async function Clear() {
  document.getElementById('contactid').value="";
  document.getElementById('contactname').value="";
    document.getElementById('phoneNumber').value="";
      document.getElementById('emailid').value="";
   
}
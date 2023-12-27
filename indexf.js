function sendMail(){
    var name=document.getElementById("name").value;
    var roll=document.getElementById("id").value;
    var message=document.getElementById("feedback").value;
     
    
    console.log(message);  
    var params ={name,roll,message};

const serviceID = "service_zhxr3tf";
const templateId = "template_cpb5din"
emailjs.send(serviceID,templateId,params)
.then(
    res=>{
        name= "";
        email= "";
        console.log(res);
        alert("your messsage has beeen sent");


     })
     .catch((err)=> console.log(err));
    } 
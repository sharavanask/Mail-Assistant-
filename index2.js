function sendMail(){
    var name=document.getElementById("sname").value;
    var rname=document.getElementById("rname").value;
    var smail=document.getElementById("sender").value;
    var email=document.getElementById("email").value;
    var ldate=document.getElementById("ldate").value;
    var adate=document.getElementById("adate").value;
    var ndays=document.getElementById("ndays").value;
    var message;
    var message =`Respected Sir,\n I am writing to formally request a sick leave due to my unsusual Health Condition. Unfortunately, my current health condition makes it impossible for me to perform my duties effectively and may pose a risk to both my health and the well-being of my colleagues.

    I have been advised by my healthcare provider to take some time off work to recover and undergo necessary medical treatment. Therefore, I kindly request a sick leave starting from ${ldate} and i will ensure my presence on ${adate}. I believe that ${ndays} days should be sufficient for me to regain my health and return to work in a fully productive state.
    
    During my absence, I am committed to ensuring a smooth transition of my responsibilities. I will also be reachable via email or phone in case of any urgent matters that require my attention.
    
    I understand the importance of maintaining workflow and the impact of my absence on the team. Rest assured that I will do my best to minimize any disruption and complete any pending tasks before my sick leave begins. I am confident in the team's ability to handle things effectively during my absence.
    
    Attached to this letter, please find the medical certificate from my healthcare provider outlining the nature of my illness and the recommended duration of my leave. I believe this will provide the necessary documentation for my sick leave request.
    
    I kindly request your understanding and approval of my sick leave request. I assure you that I will keep you updated on my progress and notify you immediately if there are any changes to my expected return date. My primary goal is to return to work as soon as I am fit to resume my duties.
    
    Thank you for your understanding and consideration of my situation. I look forward to your positive response. \n
    Yours Sincerely,\n
    ${name}`
    
    console.log(message);  
    var params ={name, email, message,smail,ndays,ldate,adate};

const serviceID = "service_thgbobg";
const templateId = "template_xso9qic"
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







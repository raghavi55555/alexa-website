var user_input=document.getElementById("input")

output("p","bot","Welcome to continent info bot .Cutely called alexa .<br> Say Hi to start the conversation.....");



user_input.addEventListener("click",function loadDoc() {
  var xhttp = new XMLHttpRequest();
  try{
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     
    
    let data= JSON.parse(this.responseText);
    var msg=document.getElementById("inp").value;
   // document.getElementById("inp").value="";
   
    
    output("p","user",msg);
    
     if(msg.includes("Hi") || msg.includes("hi"))
    {
      output("p","bot",time_Of_The_Day()+","+Greeting()+"<br>"+data["menu"]);
    }
     else if(msg.length==1)
    {
    
//info for what input the user must give based on the input given by the user, the bot performs that
      if(data[msg])
      output("p","bot",data[msg]);
      else
      output("p","bot","Plz select from [1-3]");

    }
    else if(msg.includes("expression")){
    evaluator(msg.split(":")[1]);
    output("p","bot",data["menu"]);
    }
    else{
  /*  let county_name=msg.toLowerCase().split(" ");
 var country="";*/
    
  msg=msg.charAt(0).toUpperCase()+msg.slice(1);
  
    


//console.log(data);
//console.log(msg);
//console.log(data[msg]);
    if(data[msg])
    output("p","bot",data[msg]);
    else
    output("p","bot","Sorry I didnt get that");

  }
    }
 

 }

  xhttp.open("GET", "file.json", true);
  xhttp.send();
  }
  catch(e){
   
    output("p","bot","Sorry I didnt get that");
  }
}


);



//This function creates and add elements to main page
function output(tag,className,text){


let main= document.getElementById("main")
if(className=="bot"){

main.innerHTML+=`<img class="bot_image" 
 src="http://pngimg.com/uploads/robot/robot_PNG94.png">`;
}
if(className=="user")
main.innerHTML+=`<img  class="user_image" src="https://ak6.picdn.net/shutterstock/videos/820936/thumb/1.jpg?i10c=img.resize(height:160)">`;




 main.innerHTML+=`<${tag} class=${className}>${text}</${tag}>`
}





function Greeting(){
    //a list of responses from bot
    res=["Nice to see you.I can help you do some calulations and you can know information about a countries and continents",
    "Its wonderful to see to you.Iam a chat bot named alexa ,I have 2 special features.I can help you do some calulations and you can know information about the continents"];
    //to select a response at random and to return that
    
    return res[Math.floor((Math.random() * res.length) + 1)-1];
}

//greets the person based on the time of the day
function time_Of_The_Day(){

  let now = new Date();
    let current_time=now.getHours();
    let time_Greeting="Good Morning"
    if (current_time>21)
        time_Greeting="Good Night"
    else if(current_time>16)
        time_Greeting="Good Evening"
    else if(current_time>=12)
        time_Greeting="Good AfterNoon"
    
    return time_Greeting;
}

  
function evaluator(expression){

    
    try{
        output("p","bot","Result of the expression:"+eval(expression)); 
    }
    catch(e){
       output("p","bot","Enter a valid expression"); 
    }
        
}


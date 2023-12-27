function sendMail(){
    var name=document.getElementById("sname").value;
    var rname=document.getElementById("rname").value;
    var smail=document.getElementById("sender").value;
    var email=document.getElementById("email").value;
    var rnum=document.getElementById("rno").value;
    var message;
    console.log("rnum",rnum);
    if(rnum==0){
     message = `Hey ${rname}! \n \n \n  Happy Birthday! 🎉 On this special day, may the sun shine a little brighter for you and the world be filled with more laughter. Your presence is a gift to all of us, and today, we celebrate you. Here's to the incredible person you are and the wonderful journey that lies ahead. May your dreams continue to unfold, and may you find endless reasons to smile. Cherish every moment, for life's greatest treasures are the memories we create. Have a fantastic day surrounded by love, and may the year ahead be brimming with happiness, success, and all you desire. Cheers!`
    }
    else if(rnum==1){
     message=`Hey ${rname}! \n \n \nHappy birthday!🎉 Wishing you a day filled with joy, laughter, and unforgettable moments. May this year bring you closer to your dreams and shower you with success and happiness. Cherish the memories you create today and let them be a guiding light for the year ahead. May you be surrounded by love, surrounded by friends and family who appreciate you just as much as you deserve. Here's to another year of growth, love, and adventure. Blow out the candles and make a wish  may it lead you to even greater achievements and endless smiles. Have a fantastic day!`
    }
    else if(rnum==2){
     message=`Hey ${rname} !\n \n \nHappy Birthday! 🎉 On your special day, I wish you a tapestry of wonderful moments woven together with love, laughter, and fulfillment. May your journey ahead be adorned with success, good health, and countless blessings. Celebrate not just the passing of another year, but the accumulation of wisdom and experiences that shape you. May your heart be warmed by the company of cherished ones, and may your dreams continue to take flight. Embrace this new chapter with open arms, and let your radiant spirit light up the lives of those around you. Here's to a year brimming with joy and endless possibilities!`
    }
    else if(rnum==3){
     message=`Hey ${rname}! \n \n \nHappy Birthday! 🎉 May this day be as radiant as your smile and as extraordinary as your presence. Here's to another year of embracing life's adventures, creating beautiful memories, and achieving all that your heart desires. May you continue to inspire us all with your kindness, courage, and determination. Cherish the moments that unfold today and carry their magic into the future. Surround yourself with love, laughter, and everything that brings you happiness. As you blow out the candles, may your wishes take flight and lead you to even greater heights. Cheers to you and the incredible journey ahead!`
    }
    else if(rnum==4){
     message=`Hey ${rname}!\n \n \nWishing you a very Happy Birthday! On this special day, we extend our warmest congratulations and heartfelt appreciation. Your dedication and contributions have been instrumental in our shared successes, and we look forward to the continued growth and accomplishments you'll bring in the coming year. May your birthday be marked with joy, surrounded by the respect and admiration of your colleagues and peers. As you celebrate another year, may it be a reminder of your achievements and a stepping stone to new horizons. Here's to your well-deserved day of recognition and a prosperous journey ahead`
    } 
    else if(rnum==5){
     message=`Hey ${rname}! \n \n \nHappy Birthday! 🎉 Another year of awesome adventures and unforgettable moments has passed, and now it is time to celebrate you! Your friendship adds so much brightness to our lives, and I'm grateful for all the laughs and memories we've shared. May your day be as fantastic as you are, filled with happiness, surprises, and all your favorite things. Here's to another year of chasing dreams, creating stories, and embracing the journey ahead. Keep shining your unique light, and know that you are loved and appreciated more than you can imagine. Cheers to you, and to the endless possibilities ahead!`
    }
    else if(rnum==6){
         message=`Hey ${rname}!\n \n \nHappy Birthday! 🎉 On this special day, I wish you a year ahead filled with laughter, love, and incredible moments. May your dreams and aspirations continue to unfold, and may you find joy in every step of your journey. Celebrate the beautiful person you are, surrounded by family and friends who cherish you. As you blow out the candles, know that each one represents a wish for your happiness. Embrace the new chapter with open arms, and may the coming year bring you endless opportunities for growth and fulfillment. Here's to you and the wonderful adventure ahead!`
    }
    else if(rnum==7){
         message=`Hey ${rname}!\n\n\nHappy Birthday, my fabulous friend! 🎉 🥳 Another year, another reason to celebrate the amazing person you are. From the countless laughs we've shared to the unforgettable adventures, you've added so much sparkle to my life. May your day be as bright and fantastic as your spirit, filled with all the things that make you smile. Here's to more crazy escapades, heart-to-heart chats, and endless memories. Keep shining your unique light and spreading positivity wherever you go. Cheers to another year of friendship, love, and incredible experiences. Let's make this year the best one yet! 🎂🎈🎁`
    }
    else if(rnum==8){
         message=`Hey ${rname}!Happy Birthday! 🎉 Warmest congratulations on this special day. Your dedication and contributions have been pivotal in shaping our successes, and we extend our heartfelt appreciation. May your birthday be a reflection of your achievements and a reminder of the value you bring. As you mark another year, we look forward to the continued growth and accomplishments you will undoubtedly bring. Here's to celebrating you, your commitment, and your journey. May the year ahead be filled with new opportunities, and may you continue to inspire us all. Wishing you a joyful day and a prosperous path forward.`
    }
    else if(rnum==9){
         message=`Hey ${rname}!Happy Birthday! 🎉 On your special day, I send you the warmest wishes for a year filled with happiness, health, and success. May your journey ahead be adorned with exciting adventures and fulfilling moments. Celebrate not just the passing of time, but the growth and wisdom that each year brings. May your heart be full of gratitude for the blessings you've received and anticipation for those yet to come. Surround yourself with love, laughter, and cherished ones. Blow out the candles with hope in your heart and a smile on your face, knowing that your best days are still ahead. Enjoy!`
    }
    console.log(message);  
    var params ={name, email, message,smail};

const serviceID = "service_sp97ala";
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
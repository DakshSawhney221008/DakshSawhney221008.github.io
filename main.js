function myfunction(){
    alert('welcome to my website, it has all the information about corona virus, read the website to know more about the corona virus.');
}
function factsfunction(){
    alert('This is my website, I made this quiz to check how much you know about Corona Virus, You will be graded with 5 marks, 1 mark per question. All the best!!!')
}
function printfunction(){
    function getscore(answer){
       var radiob = document.getElementsByName(answer);
       for(let i=0; i<4; i=i+1) {
           if (radiob[i].checked){
               return Number(radiob[i].value);
           }
       }
    }
    var username=document.getElementById('username').value;
    if(username==""){
      alert('Please fill in your name');
      return false;
    }
    if (document.getElementById('q1a1').checked==false && document.getElementById('q1a2').checked==false && document.getElementById('q1a3').checked==false && document.getElementById('q1a4').checked==false){
      alert(username+' question 1 is not answered'); 
      return false;
    } 
    if (document.getElementById('q2a1').checked==false && document.getElementById('q2a2').checked==false && document.getElementById('q2a3').checked==false && document.getElementById('q2a4').checked==false){
        alert( username+' question 2 is not answered'); 
        return false;
      } 
      if (document.getElementById('q3a1').checked==false && document.getElementById('q3a2').checked==false && document.getElementById('q3a3').checked==false && document.getElementById('q3a4').checked==false){
        alert( username+' question 3 is not answered'); 
        return false;
      }
      if (document.getElementById('q4a1').checked==false && document.getElementById('q4a2').checked==false && document.getElementById('q4a3').checked==false && document.getElementById('q4a4').checked==false){
        alert( username+' question 4 is not answered'); 
        return false;
      }  
      if (document.getElementById('q5a1').checked==false && document.getElementById('q5a2').checked==false && document.getElementById('q5a3').checked==false && document.getElementById('q5a4').checked==false){
        alert ( username+' question 5 is not answered'); 
        return false;
      } 
     
    var score= getscore('answer1')+ getscore('answer2')+ getscore('answer3')+getscore('answer4')+ getscore('answer5');
    if (score== 5) {
      document.getElementById('scoreheading').innerHTML= username+" Your score is "+score + " congratulations you got full marks";
      document.getElementById('scoreheading').style.color="#adebad";
    }
    if (score== 4) {
      document.getElementById('scoreheading').innerHTML= username+" Your score is "+score + " You missed by just a mark good job";
      document.getElementById('scoreheading').style.color="#b3b3ff";
    }
    if (score== 3) {
      document.getElementById('scoreheading').innerHTML= username+" Your score is "+score + " Just passed we know you can do better";
      document.getElementById('scoreheading').style.color="#ffb3b3";
    }
    if (score== 2) {
      document.getElementById('scoreheading').innerHTML= username+" Your score is "+score + " So close! hope you do better feel free to take it again";
      document.getElementById('scoreheading').style.color="#ffb3ff";
    }
    if (score== 1) {
      document.getElementById('scoreheading').innerHTML= username+" Your score is "+score + " so close yet so far away! sorry better luck next time";
      document.getElementById('scoreheading').style.color="#ffffff";
    }
    if (score== 0) {
      document.getElementById('scoreheading').innerHTML= username+" Your score is "+score + " you got none correct better luck next time";
      document.getElementById('scoreheading').style.color="#000000";
    }
}

 

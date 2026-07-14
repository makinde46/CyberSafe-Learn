const quiz=[

{
question:"What is phishing?",
answers:[
"Fake attempt to steal information",
"A computer game",
"A backup system",
"An antivirus"
],
correct:0
},

{
question:"Which password is strongest?",
answers:[
"123456",
"password",
"John123",
"T8@kL#91$z"
],
correct:3
},

{
question:"What should you check before clicking a link?",
answers:[
"Sender address",
"Computer speed",
"Screen size",
"Battery level"
],
correct:0
},

{
question:"Malware is...",
answers:[
"A security tool",
"Malicious software",
"A browser",
"A password"
],
correct:1
},

{
question:"Two-factor authentication provides...",
answers:[
"Extra protection",
"More viruses",
"More advertisements",
"Faster downloads"
],
correct:0
}

];


let current=0;

let score=0;

let username="";


const question=document.getElementById("question");

const answers=document.getElementById("answers");

const nextBtn=document.getElementById("nextBtn");

const scoreText=document.getElementById("score");


document.getElementById("startQuiz").onclick=function(){


username=document.getElementById("studentName").value;


if(username===""){

alert("Please enter your name");

return;

}


document.getElementById("quiz-container").style.display="block";


this.style.display="none";


loadQuestion();


};



function loadQuestion(){


let q=quiz[current];


question.innerHTML=q.question;


answers.innerHTML="";


q.answers.forEach((answer,index)=>{


let button=document.createElement("button");


button.innerHTML=answer;


button.className="answer";


button.onclick=function(){


if(index===q.correct){

score++;

}


nextBtn.style.display="block";


};


answers.appendChild(button);


});


}



nextBtn.onclick=function(){


current++;


nextBtn.style.display="none";


if(current<quiz.length){

loadQuestion();

}

else{


let percentage=(score/quiz.length)*100;


scoreText.innerHTML=
"Score: "+percentage+"%";


if(percentage>=80){

showCertificate(percentage);

}

else{

scoreText.innerHTML+="<br>Try again to receive your certificate.";

}


}

};



function showCertificate(mark){


let cert=document.getElementById("certificate");


cert.style.display="block";


cert.innerHTML=`

<h1>🏆 Certificate of Completion</h1>


<p>This certifies that</p>


<h2>${username}</h2>


<p>
has successfully completed the
</p>


<h3>
CyberSafe Learn Training Program
</h3>


<p>
Final Score: ${mark}%
</p>


<a 
class="download"
onclick="window.print()">

Download Certificate

</a>

`;

}
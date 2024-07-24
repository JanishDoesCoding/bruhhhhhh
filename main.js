function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    figure=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/NEfpAarpT/model.json",modelReady);
}

function modelReady(){
figure.classify(gotResults);
}

function gotResults(error,results){
if (error) {
 console.error(error);    
}
else{
    console.log(results);
    randomr=Math.floor(Math.random()*255)+1;
    randomg=Math.floor(Math.random()*255)+1;
    randomb=Math.floor(Math.random()*255)+1;
    document.getElementById("what").innerHTML="I can Hear "+results[0].label;
    document.getElementById("accuracy").innerHTML="Accuracy "+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("what").style.color="rgb("+randomr+","+randomg+","+randomb+")";
    document.getElementById("accuracy").style.color="rgb("+randomr+","+randomg+","+randomb+")";
  img= document.getElementById("uno");
  pic= document.getElementById("dos");
  arrow= document.getElementById("tres");
  note= document.getElementById("quatro");
}
if (results[0].label=="Clap") {
    img.src="aliens-01.gif";
    pic.src="aliens-02.png";
    arrow.src="aliens-03.png";
    note.src="aliens-04.png";
}
else if(results[0].label=="Bell"){
    img.src="aliens-01.png";
    pic.src="aliens-02.gif";
    arrow.src="aliens-03.png";
    note.src="aliens-04.png";
}
else if(results[0].label=="Lego"){
    img.src="aliens-01.png";
    pic.src="aliens-02.png";
    arrow.src="aliens-03.gif";
    note.src="aliens-04.png";
}
else{
    img.src="aliens-01.png";
    pic.src="aliens-02.png";
    arrow.src="aliens-03.png";
    note.src="aliens-04.gif";
}
}
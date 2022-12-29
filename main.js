var SpeechRecognition = window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        console.log("taking selfie");
        speak();
    }

}

   
function speak(){
    synth=window.speechSynthesis;
    speak_data="Taking your selfies in 5 seconds";
    utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    
    setTimeout(function(){
        take_snapshot();
        save();
    },2000);
    
    setTimeout(function(){
        take_snapshot();
        save();
    },3000);
    
    setTimeout(function() {
        take_snapshot();
        save();
    },5000);
    Webcam.attach(camera);
}



function save(){
link=document.getElementById("link");
image=document.getElementById("selfie_img").src;
link.href=image;
link.click();
}
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        if(img_id==selfie1){
        document.getElementById("result1").innerHTML="<img id='selfe1' src='"+data_uri+"'>";
        }
        if(img_id==selfie2){
            document.getElementById("result2").innerHTML="<img id='selfe1' src='"+data_uri+"'>";
            }
            if(img_id==selfie3){
                document.getElementById("result3").innerHTML="<img id='selfe1' src='"+data_uri+"'>";
                }
    });
}

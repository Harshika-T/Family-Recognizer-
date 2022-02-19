Webcam.attach("#camera");
camera=document.getElementById("camera");

Webcam.set({
    height:300,
    width:350,
    png_quality:90,
    image_format:"png",
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result")
    }
    )
}
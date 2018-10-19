var moment = require('moment');
var firebase  = require("firebase");
var config = {
    apiKey: "AIzaSyAeGLqa4zBW7GQeLES5_Yyyo1zjSfxqbGc",
    authDomain: "plants-guardian.firebaseapp.com",
    databaseURL: "https://plants-guardian.firebaseio.com",
    projectId: "plants-guardian",
    storageBucket: "plants-guardian.appspot.com",
    messagingSenderId: "554702469991"
  };
var firebaseDatabase;
var databaseRef;

firebase.initializeApp(config);
firebase.auth().signInWithEmailAndPassword("chinadecheng@gmail.com", "123456")
        .catch(function(error) {
                console.log("FIREBASE AUTH ERROR:");
                console.log(error.code);
                console.log(error.message);
        }).then(function(){
        console.log("Firebase Connected");
        firebaseDatabase = firebase.database();
        databaseRef = firebaseDatabase.ref("raspio");
        //setInterval(function() { captureColourAndThomo() }, 5000);
        
		
		});


const PiCamera = require('pi-camera');
const myCamera = new PiCamera(
	{	mode: 'photo',
		output: `/home/pi/Documents/FIT5140-Assignment3/Plants.jpg`,
		width:1024,
		height:768,
		nopreview:true,
	}
);

myCamera.snap().then(
					(result) =>{ 
						console.log("picture was saved")}
					).catch((error) => {
						console.log("Error happened!")
							})
							
							var time = getFormattedTime();
var filepath = `/home/pi/Documents/FIT5140-Assignment3/Plants_${time}.jpg`
const myCamera = new PiCamera(
	{	mode: 'photo',
		output: filepath,
		width:1024,
		height:768,
		nopreview:true,
	}
);

myCamera.snap().then(
					(result) =>{ 
						console.log("picture was saved");
						uploadImage();}
					).catch((error) => {
						console.log("Error happened!"+error)
							})
							

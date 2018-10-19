//FIT5140 Assignment 3, send moisture sensor value to firebase
//Config firebase setting
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
        setInterval(function() { getMoisture() }, 10000);
		});

var ads1x15 = require('node-ads1x15');  
var chip = 1; //0 for ads1015, 1 for ads1115  

//Simple usage (default ADS address on pi 2b or 3):
var adc = new ads1x15(chip); 

var channel = 0; //channel 0, 1, 2, or 3...  
var samplesPerSecond = '250'; // see index.js for allowed values for your chip  
var progGainAmp = '4096'; // see index.js for allowed values for your chip  

//somewhere to store our reading   
var reading  = 0;   

function getMoisture(){
	if(!adc.busy)  
	{  
		
	  adc.readADCSingleEnded(channel, progGainAmp, samplesPerSecond, function(err, data) {   
			if(err)  
			{  
			  //logging / troubleshooting code goes here...  
			  throw err;  
			}  
			// if you made it here, then the data object contains your reading!  
			reading = data;  
			console.log(reading);
			if(reading != null)
			{
				var newNode = databaseRef.push();
				newNode.set({
					"Date & Time": moment().format(),
					"Moisture": reading
				});		
			}else
				console.log("Waiting sensor to get data")
		 }
	   );  
		 
	} 
}



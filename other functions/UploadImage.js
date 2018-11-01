
const fs = require('fs')
var firebase = require("firebase");
var FileAPI = require("file-api")
require("firebase/auth");
require("firebase/database");
require("firebase/storage");
var config = {
    apiKey: "AIzaSyAeGLqa4zBW7GQeLES5_Yyyo1zjSfxqbGc",
    authDomain: "plants-guardian.firebaseapp.com",
    databaseURL: "https://plants-guardian.firebaseio.com",
    projectId: "plants-guardian",
    storageBucket: "plants-guardian.appspot.com",
    messagingSenderId: "554702469991"
  };

firebase.initializeApp(config);
firebase.auth().signInWithEmailAndPassword("chinadecheng@gmail.com", "123456")
        .catch(function(error) {
                console.log("FIREBASE AUTH ERROR:");
                console.log(error.code);
                console.log(error.message);
        }).then(function(){
        console.log("Firebase Connected");
		})
        
        
//var reader = new FileReader();
//reader.onloaden d = function(evt){
//	var blob = new Blob([evt.target.result],{type:"image/jpeg"});
//	}


var storageRef = firebase.storage().ref();
var imagesRef = storageRef.child('Plants.jpg');

//var file = new File("/home/pi/Documents/FIT5140-Assignment3/Plants.jpg");
var image = fs.readFileSync("/home/pi/Documents/FIT5140-Assignment3/Plants.jpg")


imagesRef.put(image).then(function(snapshot){
	console.log('Upload a image!')
	})
console.log("Finish");

//const {Storage} = require("@google-cloud/storage");
//const storage = new Storage();
//var bucket = storage.bucket('PlantsPicture');

//bucket.upload("/home/pi/Documents/FIT5140-Assignment3/Plants.jpg",function(err,file,apiResponse){
	//console.log("Upload success!")
	//})


//var bucket = gcs.bucket('plants-guardian.appspot.com');
//var destination = 'PlantsPicture/test.jpg';

//bucket.upload(myFile, { public: true, destination: destination }, function(err, file) {
//    if (err) {
//        console.log(err);
//    }
//});

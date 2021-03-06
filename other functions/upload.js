//This file is to activate the camera, take a photo and upload that photo to firebase

const PiCamera = require('pi-camera');

function getFormattedTime(){
		var today = new Date();
		var m = today.getMonth() + 1;
		var d = today.getDate();
		var h = today.getHours();
		var mi = today.getMinutes();
		var s = today.getSeconds();
		return h+"."+mi+"_"+d+"-"+m
}
	
function takePhoto(){
	var time = getFormattedTime();
	var filepath = `/home/pi/Documents/PlantsImage/Plants_${time}.jpg`
	const myCamera = new PiCamera(
		{	mode: 'photo',
			output: filepath,
			width:1920,
			height:1080,
			nopreview:true,
		}
	);
	
	myCamera.snap().then(
					(result) =>{ 
						console.log("picture was saved");
						uploadImage(filepath);
						
						}
					).catch((error) => {
						console.log("Error happened!"+error)
							})
	
}

function uploadImage(filepath){
	var fs = require('fs');
	const {Storage} = require('@google-cloud/storage');

	const storage = new Storage();
	// Should change bucket permission to public 
	const bucketName = 'plants-guardian.appspot.com';
	const filename = filepath;

	storage.bucket(bucketName).upload(filename,{
				gzip : true,
				metadata:{
						cacheControl: 'public, max-age=31536000',
					}
			})
		
	console.log(`${filename} uploaded to ${bucketName}.`)
}

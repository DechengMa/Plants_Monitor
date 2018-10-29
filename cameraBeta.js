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
						console.log("picture was saved")}
					).catch((error) => {
						console.log("Error happened!"+error)
							})
	
	}
takePhoto();

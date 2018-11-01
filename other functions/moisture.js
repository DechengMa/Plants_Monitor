var ads1x15 = require('node-ads1x15');  
var chip = 1; //0 for ads1015, 1 for ads1115  

//Simple usage (default ADS address on pi 2b or 3):
var adc = new ads1x15(chip); 

var channel = 0; //channel 0, 1, 2, or 3...  
var samplesPerSecond = '250'; // see index.js for allowed values for your chip  
//var progGainAmp = '4096';  //see index.js for allowed values for your chip  

var progGainAmp = '4096'; 

//somewhere to store our reading   
var reading  = 0;   

function getMoisture(){
	if(!adc.busy)  
	{  	
	  adc.readADCSingleEnded(channel, progGainAmp, samplesPerSecond, function(err, data) {   
			if(err)  
			{  
			  //logging / troubleshooting code goes here...  
			  console.log(err)
			  throw err;  
			}  
			// if you made it here, then the data object contains your reading!  
			reading = data;  
			console.log(reading);
			
		 }
	   );  
		 
	} 
}

 setInterval(function() { getMoisture() 
						}, 1000);
		

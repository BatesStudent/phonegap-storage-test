var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

// here is ready listener
document.addEventListener("deviceready", onDeviceReady, false);
	// here is resume listener
	document.addEventListener("resume", onResume, false);
        // here is pause listener
	document.addEventListener("pause", onPause, false);
		
	
function updateDisplay() {
	document.getElementById("launched").innerHTML = "Application launched: " + launched_count;
	document.getElementById("resumed").innerHTML = "Application paused: " + paused_count;
	document.getElementById("paused").innerHTML = "Application resumed: " + resumed_count;
}


// device APIs are available
//
    function onDeviceReady() {

	
	launched_count++;
	updateDisplay();
	    
	console.log("device ready");
        storeItem("feeling", "tired");
        storeItem("hair", "brown");
        storeItem("beard", "messy");
        storeItem("weather", "weird");
        storeItem("date", "16th oct 2017");
        
        document.getElementById("storage1").innerHTML = "Feeling: " + getItem("feeling");
    }


    function onPause() {
	/*
	paused_count++;
	updateDisplay();
	    
	console.log("pause");*/
    }
	

    function onResume() {
		/*
	resumed_count++;
	updateDisplay();
	    
	console.log("resume");*/
    }

    function storeItem(key, item){
        window.localStorage.setItem( key, value );
    }

    function getItem(key){
        return window.localStorage.getItem( key );
    }
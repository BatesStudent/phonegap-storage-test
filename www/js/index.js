// here is ready listener
document.addEventListener("deviceready", onDeviceReady, false);
	// here is resume listener
	document.addEventListener("resume", onResume, false);
        // here is pause listener
	document.addEventListener("pause", onPause, false);
		

// device APIs are available
//
    function onDeviceReady() {
	    
	console.log("device ready");
        var person= {
		"firstName": "Homer",
  		"lastName": "Simpson",
 		"address": {
    			"streetAddress": "742 Evergreen Terrace",
    			"city": "Springfield",
    			"state": "?"
		}
	}

        storeItem("person", JSON.stringify(person));
        storeItem("hair", "brown");
        storeItem("beard", "messy");
        storeItem("weather", "weird");
        storeItem("date", "16th oct 2017");
        
        document.getElementById("storage1").innerHTML = "First name: " + JSON.parse(getItem("person")).firstName;
        document.getElementById("storage2").innerHTML = "Storage items: " + window.localStorage.length;
    }


    function onPause() {
        
    }
	

    function onResume() {
		
    }

    function storeItem(key, item){
        window.localStorage.setItem( key, item );
    }

    function getItem(key){
        return window.localStorage.getItem( key );
    }
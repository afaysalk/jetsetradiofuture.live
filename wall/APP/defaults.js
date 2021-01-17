////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



preferredInterfaceColor = "light";



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Defaults
allRuntimeFunctionsList = new Array();

	
 
function defineAllRequiredFunctions(){

	//1) Cycle through all the runtime function to make everything work
	for(x=0;x<allRuntimeFunctionsList.length;x++){
	allRuntimeFunctionsList[x]();
	}
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////        ALL SIZE & POSITIONS FUNCTION       ///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Defaults
magnification = 0;
allSizeAndPositionFunctionsList = new Array();



function allSizeAndPosition(){

	//1) Set the window scrollTo back to the zero position
	window.scrollTo(0, 0);


	//2) Determine the stageHeight & stageWidth
	stageHeight = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;
	stageWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;


	//3) Calculate the magnification to be used and do not let it exceed 1
	if(stageWidth>stageHeight){
	magnification = stageWidth/680;
	} else if(stageHeight>stageWidth){
	magnification = stageHeight/680;
	}

	if(magnification > 1){
	magnification = 1;
	}


	//4) Now launch all the size and positions contained within the allSizeAndPositionFunctionsList array (these items only exist once they are loaded and added)
	for(var i=0; i<allSizeAndPositionFunctionsList.length; i++){
	allSizeAndPositionFunctionsList[i]();
	}	
}



//----------------------------------------------------------------------------------------------------------------------------------------------------------------//



//Create a listener to launch the allSizeAndPosition function everytime the user resizes (or when the orientation changes for iOS)
window.addEventListener("resize", function(){
allSizeAndPosition();
});

window.addEventListener('orientationchange', function(){
allSizeAndPosition();
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function queryValue(variable){

	//1) Get URL query - anything after a '?' mark
	var query = window.location.search.substring(1);
	console.log("Complete Query: "+query);


	//2) Split the query if there is more than one variable - split by the '&' symbol 
	var individualVariable = query.split("&");
	console.log("Variables: "+individualVariable);


	//3) Search through each individual variable looking for the variable
	for (var i=0; i < individualVariable.length; i++){

		//A) Split the indivudualVariable up at the '=' sign so the value can be determined
		var variableAndValue = individualVariable[i].split("=");

		
		//B) If the variable [0] matches what you are looking for return the value [1]
		if(variableAndValue[0] == variable){
		return variableAndValue[1];
		}
	}


	//4) Otherwise return false
	return(false);
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Disable Zooming
window.addEventListener('touchmove', function(event){
event.preventDefault();
}, false);



//---------------------------------------------------------------------------------------------------------------------------------------------------//



//If persisted then force a reload of the page because it is in the page cache
window.onpageshow = function(evt){
	if(evt.persisted){
	document.body.style.display = "none";
	location.reload();
	}
}



//---------------------------------------------------------------------------------------------------------------------------------------------------------//



//Defaults
mouseX = 0;
mouseY = 0;



function retrieveMousePositions(event){	

	//A) Multi-touch is available so you must use this implementation (determine if multi touch-events are available these are stored in an array within the event)
	if (event.touches != null) {
	var touch = event.touches[0];
	mouseX = touch.pageX;
	mouseY = touch.pageY;


	//B) Multi-touch is not available so simply find the coordinates of the event
	} else {
	mouseX = event.pageX;
	mouseY = event.pageY;
	}
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

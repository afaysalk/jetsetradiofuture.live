function titleScreenSizeAndPosition()
	{
	var e="titleScreenDiv",t=0;
	document.getElementById(e).style.width=stageWidth+"px",document.getElementById(e).style.height=stageHeight+"px",document.getElementById(e).style.left="0px",document.getElementById(e).style.top="0px";
	e="titleScreenOverlay",t=1900/1800;
	document.getElementById(e).style.width=stageWidth-Math.round(80*magnification)-Math.round(80*magnification)+"px",document.getElementById(e).style.height=Math.round(parseInt(document.getElementById(e).style.width)/t)+"px",document.getElementById(e).style.top=Math.round(stageHeight/2)-Math.round(parseInt(document.getElementById(e).style.height)/2)+"px",document.getElementById(e).style.left=Math.round(stageWidth/2)-Math.round(parseInt(document.getElementById(e).style.width)/2)+"px",parseInt(document.getElementById(e).style.height)>.75*stageHeight&&(document.getElementById(e).style.height=.75*stageHeight+"px",document.getElementById(e).style.width=Math.round(parseInt(document.getElementById(e).style.height)*t)+"px",document.getElementById(e).style.top=Math.round(stageHeight/2)-Math.round(parseInt(document.getElementById(e).style.height)/2)+"px",document.getElementById(e).style.left=Math.round(stageWidth/2)-Math.round(parseInt(document.getElementById(e).style.width)/2)+"px"),800<parseInt(document.getElementById(e).style.width)&&(document.getElementById(e).style.width="800px",document.getElementById(e).style.height=Math.round(parseInt(document.getElementById(e).style.width)/t)+"px",document.getElementById(e).style.top=Math.round(stageHeight/2)-Math.round(parseInt(document.getElementById(e).style.height)/2)+"px",document.getElementById(e).style.left=Math.round(stageWidth/2)-Math.round(parseInt(document.getElementById(e).style.width)/2)+"px");
	e="titleScreen",t=1920/1080;
	document.getElementById(e).style.height=parseInt(document.getElementById("titleScreenDiv").style.height)+"px",document.getElementById(e).style.width=Math.round(parseInt(document.getElementById("titleScreen").style.height)*t)+"px",document.getElementById(e).style.left=Math.round(parseInt(document.getElementById("titleScreenDiv").style.width)/2)-Math.round(parseInt(document.getElementById("titleScreen").style.width)/2)+"px",document.getElementById(e).style.top="0px",parseInt(document.getElementById("titleScreen").style.width)<parseInt(document.getElementById("titleScreenDiv").style.width)&&(document.getElementById(e).style.width=parseInt(document.getElementById("titleScreenDiv").style.width)+"px",document.getElementById(e).style.height=Math.round(parseInt(document.getElementById("titleScreen").style.width)/t)+"px",document.getElementById(e).style.left="0px",document.getElementById(e).style.top=Math.round(parseInt(document.getElementById("titleScreenDiv").style.height)/2)-Math.round(parseInt(document.getElementById("titleScreen").style.height)/2)+"px");
	e="playButton",t=.375;
	document.getElementById(e).style.height=Math.round(.09*stageHeight)+"px",document.getElementById(e).style.width=Math.round(parseInt(document.getElementById(e).style.height)/t)+"px",document.getElementById(e).style.left=Math.round(stageWidth/2)-Math.round(parseInt(document.getElementById("playButton").style.width)/2)+"px",document.getElementById(e).style.top=stageHeight-parseInt(document.getElementById(e).style.height)+"px",100<parseInt(document.getElementById(e).style.height)&&(document.getElementById(e).style.height="100px",document.getElementById(e).style.width=Math.round(parseInt(document.getElementById(e).style.height)/t)+"px",document.getElementById(e).style.left=Math.round(stageWidth/2)-Math.round(parseInt(document.getElementById("playButton").style.width)/2)+"px",document.getElementById(e).style.top=stageHeight-parseInt(document.getElementById(e).style.height)+"px")
}
function startRadio()
	{
	updateTicker(),playAudioPlayer(),document.getElementById("titleScreen").style.pointerEvents="none",document.getElementById("playButton").style.visibility="hidden",document.getElementById("titleScreenDiv").style.transition="opacity 1s ease-out",document.getElementById("titleScreenDiv").style.MozTransition="opacity 1s ease-out",document.getElementById("titleScreenDiv").style.WebkitTransition="opacity 1s ease-out",document.getElementById("titleScreenDiv").style.opacity=0,setTimeout(function()
		{
		document.getElementById("titleScreenDiv").style.visibility="hidden"
	}
	,1100)
}
function definePlayButton()
	{
	var e="titleScreenDiv";
	document.getElementById(e).ontouchstart=function(e)
		{
		startRadio(),e.preventDefault()
	}
	,document.getElementById(e).onmousedown=function(e)
		{
		startRadio()
	}
}
function titleScreenRuntime()
	{
	allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length]=titleScreenSizeAndPosition,allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length-1](),definePlayButton()
}
systemDate=new Date,monthArray=new Array,monthArray[0]="January",monthArray[1]="February",monthArray[2]="March",monthArray[3]="April",monthArray[4]="May",monthArray[5]="June",monthArray[6]="July",monthArray[7]="August",monthArray[8]="September",monthArray[9]="October",monthArray[10]="November",monthArray[11]="December",systemDay=systemDate.getDate(),systemMonth=monthArray[systemDate.getMonth()],systemYear=systemDate.getFullYear(),"January"==systemMonth&&25==systemDay&&(document.getElementById("titleScreen").src="titlescreen/images/titleScreen_BIRTHDAY.jpg",document.getElementById("titleScreenOverlay").src="titlescreen/images/titleScreenOverlay_BIRTHDAY.png"),"June"!=systemMonth&&"July"!=systemMonth&&"August"!=systemMonth||(document.getElementById("titleScreen").src="titlescreen/images/titleScreen_SUMMER.jpg",document.getElementById("titleScreenOverlay").src="titlescreen/images/titleScreenOverlay_SUMMER.png"),"October"==systemMonth&&(document.getElementById("titleScreen").src="titlescreen/images/titleScreen_HALLOWEEN.jpg",document.getElementById("titleScreenOverlay").src="titlescreen/images/titleScreenOverlay_HALLOWEEN.png"),"December"==systemMonth&&systemDay<27&&(document.getElementById("titleScreen").src="titlescreen/images/titleScreen_CHRISTMAS.jpg",document.getElementById("titleScreenOverlay").src="titlescreen/images/titleScreenOverlay_CHRISTMAS.png"),allRuntimeFunctionsList[allRuntimeFunctionsList.length]=titleScreenRuntime;

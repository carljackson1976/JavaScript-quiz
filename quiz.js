//links these variables to HTML for button, and input fields
 var character= document.getElementById("character");
 var height=document.getElementById("height");
 var button= document.getElementById("button");

//handles button click, or enter press release to make tree
 button.addEventListener("click", function(){
	tree(treeObject);
 });
 height.addEventListener("keyup", function(){
	treeObject.height = parseInt(height.value)+1 ;
	if(event.code==="Enter"){
		tree(treeObject);
	}
 });
 character.addEventListener("keyup", function(){
	treeObject.character = character.value.charAt(0);
	if(event.code==="Enter"){
		tree(treeObject);
	}
 });

//object that holds the height and character that gets passed into tree function
 var treeObject = {
	height: "",
	character: ""
 };


 function tree(treeObj){
	//alerts user if no values are input
	if(treeObj.height === "" || treeObj.character === ""){
		alert("please enter both a height and character and then hit enter or push button");
	}
	//for loops (increments for tree formation)
	else{
	var print = "";
		for(var i=0; i<treeObj.height; i++){
			
			for(var x=i; x<=treeObj.height; x++){
			print += " ";}

			for(var y=0; y<i*2-1; y++){
			print += treeObj.character;}
	    //'new line' to properly display user input values in a tree-shaped form while printing to console
		print += "\n";}
	console.log(print);}	
 }	

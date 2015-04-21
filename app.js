
$(document).ready(function(){
	

	var i = 0;

	function thingFadeOut(element){
		element.fadeIn("slow", function(){
		thingFadeIn(element);
		});
	}
	function thingFadeIn(element){
		element.fadeOut("slow", function(){
		thingFadeOut(element);
		});
	}

	function fadeCycle(element){
		thingFadeIn(element);
		thingFadeOut(element);
		
	}

	$("#ourList").on("click", ".removeButton", function(){
		fadeCycle($(this).parent())
	});


//makes sure everything else is loaded before launching jQuery

	//$("#someId").append("<p id='someOtherId'>Here is some text</p>");
	//$("#someId").append("<p id='someOtherId'>Here is some MORE text</p>");
	//$("#someId").prepend("<p id='someOtherId'>But do this text first</p>");

	//.append() - adds the element as the last child of the indexed element
	//.after() - adds the element after the indexed element
	//.prepend() - adds the element as the first child of the indexed element
	//.before() - adds the element before the indexed element

	//.on() - 
	$("#btn").on("click", function(){
		i++;
		$("#ourList").append("<li>Some text " + i + "<button class='removeButton'>Remove</button></li>");
		$("#ourList").children().first().next().text("CHANGED!");
	});
	
		
});

	//function someFunction(){
		//does stuff
	//}
//call back function 
	//$("#someElement").fadeOut("slow", someFunction){

	//});

//});

//.first() - specifies first child
//.last() - specifies last child
//.next() - specifies the next child ie. .first().next() would be the second child
//.prev() - specifies the previous child ie. .last().prev() would be the second to last child


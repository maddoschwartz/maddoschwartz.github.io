/*
 * Madeleine schwartz
 * personal website
 * new.js
*/

var contentBlocks = ["about", "content-edu", "content-mit", "content-tufts",
					 "content-icpr", "content-congress", "content-civic", 
					 "content-daily"];

function displayContent(desiredContent) {
	var i;
	for (i = 0; i < contentBlocks.length; i++) {
		document.getElementById(contentBlocks[i]).style.display='none';
	}
	document.getElementById(desiredContent).style.display='block';
}
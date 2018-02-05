/*
Your code to build the resume will go here.
 */

// Format Data, Build a Resume Header
var formattedName = HTMLheaderName.replace('%data%', 'Taylor Weiss');
var formattedRole = HTMLheaderRole.replace('%data%', 'Software Engineer');
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

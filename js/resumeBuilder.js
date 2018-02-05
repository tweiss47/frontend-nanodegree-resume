/*
Your code to build the resume will go here.
 */

// bio object contains data about me
var bio = {
    name: 'Bob Dobbs',
    role: 'Software Engineer',
    email: 'taylor.weiss@contoso.net',
    mobile: '206-555-4707',
    pictureUrl: 'images/fry.jpg',
    welcomeMessage: 'This is an online resume project demonstrating basic front end development skills.',
    skills: ['C/C++', 'Java', 'C#', 'Azure', 'Systems Engineering', 'Web Front-End']
};

// Format Data, Build a Resume Header
var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedEmail = HTMLemail.replace('%data%', bio.email);
var formattedMobile = HTMLmobile.replace('%data%', bio.mobile);
var formattedBioPic = HTMLbioPic.replace('%data%', bio.pictureUrl);
var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

// Setup the header
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#header').append(formattedBioPic);
$('#header').append(formattedWelcome);

// Add contact elements
$('#topContacts').append(formattedEmail);
$('#topContacts').append(formattedMobile);

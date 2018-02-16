/*
bio contains name, role, welcomeMessage, and biopic strings, contacts object
and skills array of skill strings. The contacts object should contain a
mobile number, email address, github username, twitter handle and location.
The twitter property is optiona
*/
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

$('#header').append(HTMLskillsStart);
bio.skills.forEach(function(skill) {
    $('#skills').append(
        HTMLskills.replace('%data%', skill)
    );
});

/*
work contains an array of jobs. Each object in the jobs array should contain
an employer, title, location, dates worked and description strings.
*/
var work = {
    jobs: [
        {
            position: 'Principal Engineering Manager',
            employer: 'Microsoft',
            years: '1998 - current',
            city: 'Seattle, Washington',
            description: 'Do Work!'
        },
        {
            position: 'Software Engineer',
            employer: 'FileNET',
            years: '1995 - 1998',
            city: 'Seattle, Washington',
            description: 'Do Work!'
        }
    ]
};

work.jobs.forEach( function(job) {
    $('#workExperience').append(HTMLworkStart);
    $('.work-entry:last').append(
        HTMLworkEmployer.replace('%data%', job.employer) +
        HTMLworkTitle.replace('%data%', job.position) +
        HTMLworkDates.replace('%data%', job.years) + 
        HTMLworkLocation.replace('%data%', job.city) +
        HTMLworkDescription.replace('%data%', job.description)
    );
});

/*
education contains an array of schools. Each object in the schools array
contains name, location, degree dates and url strings, and amajors array of
major strings.

education also contains an onlineCourses array. Each object in the
onlineCourses array should contain a title, school, dates and url strings.
*/

var education = {
    schools: [
        {
            name: 'Pomona College',
            degree: 'Bachelor of Arts',
            major: 'Mathematics',
            years: '1986 - 1990',
            city: 'Clarement, California'
        },
        {
            name: 'Radford High School',
            degree: 'High School Diploma',
            major: 'General Education',
            years: '1982 - 1986',
            city: 'Honolulu, Hawaii'
        }
    ],
    onlineCourses: [
        {
            title: 'Front End Web Development Nanodegree',
            school: 'Udacity',
            dates: '2017 - 2018',
            url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        }
    ]
};

$('#education').append(HTMLschoolStart);
var pomona =
    HTMLschoolName.replace('%data%', education.schools[0].name) +
    HTMLschoolDegree.replace('%data%', education.schools[0].degree) +
    HTMLschoolDates.replace('%data%', education.schools[0].years) +
    HTMLschoolLocation.replace('%data%', education.schools[0].city) + 
    HTMLschoolMajor.replace('%data%', education.schools[0].major);
$('.education-entry').append(pomona);

/*
projects contains an array of projects. Each object in the projects array
should contain title, dates and description strings, and an images array with
URL strings for project images.
*/
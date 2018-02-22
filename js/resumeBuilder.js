// FEND Online Resume Project
//
// Define objects containing resume data. Utilize the helper.js code to
// dynamically insert the data into index.html template.

// Biography object containing contact information and skills
var bio = {
    name: 'Taylor Weiss',
    role: 'Software Engineer',
    contacts: {
        mobile: '206-555-4707',
        email: 'taylor.weiss@contoso.net',
        github: 'tweiss47',
        location: 'Seattle, Washington'
    },
    welcomeMessage: 'This is an online resume project demonstrating basic front-end development skills.',
    skills: ['C/C++', 'Java', 'C#', 'Azure', 'Systems Engineering', 'Web Front-End'],
    biopic: 'images/fry.jpg',
    display: function() {
        // Built the name header
        var header = $('#header');
        header.prepend(HTMLheaderRole.replace('%data%', bio.role));
        header.prepend(HTMLheaderName.replace('%data%', bio.name));
        header.append(HTMLbioPic.replace('%data%', bio.biopic));
        header.append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
        
        // Add contacts to the header and footer
        var formattedContacts = 
            HTMLmobile.replace('%data%', bio.contacts.mobile) +
            HTMLemail.replace('%data%', bio.contacts.email) +
            HTMLgithub.replace('%data%', bio.contacts.github) +
            HTMLlocation.replace('%data%', bio.contacts.location);

        $('#topContacts, #footerContacts').append(formattedContacts);

        // Add skills 
        header.append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            $('#skills').append(
                HTMLskills.replace('%data%', skill)
            );
        });
    }
};
bio.display();

// Work object containing employment history
var work = {
    jobs: [
        {
            employer: 'Microsoft',
            title: 'Software Engineer',
            location: 'Redmond, Washington',
            dates: '1998 - current',
            description: 'Do Work!'
        },
        {
            employer: 'FileNET',
            title: 'Software Engineer',
            location: 'Bellevue, Washington',
            dates: '1995 - 1998',
            description: 'Do Work!'
        }
    ],
    display: function() {
        work.jobs.forEach( function(job) {
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(
                HTMLworkEmployer.replace('%data%', job.employer) +
                HTMLworkTitle.replace('%data%', job.title) +
                HTMLworkDates.replace('%data%', job.dates) + 
                HTMLworkLocation.replace('%data%', job.location) +
                HTMLworkDescription.replace('%data%', job.description)
            );
        });
    }
};
work.display();

// Education object with formal and online eduction programs and degrees
var education = {
    schools: [
        {
            name: 'Pomona College',
            location: 'Claremont, California',
            degree: 'Bachelor of Arts',
            majors: ['Mathematics'],
            dates: '1986 - 1990',
            url: 'https://www.pomona.edu/'
        },
        {
            name: 'Radford High School',
            location: 'Honolulu, Hawaii',
            degree: 'High School Diploma',
            majors: ['General Education'],
            dates: '1982 - 1986'
        }
    ],
    onlineCourses: [
        {
            title: 'Front End Web Development Nanodegree',
            school: 'Udacity',
            dates: '2017 - 2018',
            url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        }
    ],
    display: function() {
        var eduSection = $('#education');
        education.schools.forEach(function(school) {
            eduSection.append(HTMLschoolStart);
            var formattedSchool = 
                HTMLschoolName.replace('%data%', school.name) +
                HTMLschoolDegree.replace('%data%', school.degree) +
                HTMLschoolDates.replace('%data%', school.dates) +
                HTMLschoolLocation.replace('%data%', school.location) +
                HTMLschoolMajor.replace('%data%', school.majors.join(', '));
            $('.education-entry:last').append(formattedSchool);
        });

        if (education.onlineCourses.length > 0) {
            eduSection.append(HTMLonlineClasses); 
            education.onlineCourses.forEach(function(course) {
                eduSection.append(HTMLschoolStart);
                var formattedCourse = 
                    HTMLonlineTitle.replace('%data%', course.title) +
                    HTMLonlineSchool.replace('%data%', course.school) +
                    HTMLonlineDates.replace('%data%', course.dates) +
                    HTMLonlineURL.replace('%data%', course.url);
                $('.education-entry:last').append(formattedCourse);
            });
        }
    }
};
education.display();

// Projects object containing a collection of interesting coding projects
var projects = {
    projects: [
        {
            title: 'Online Resume',
            dates: 'February 2018',
            desription: 'Udacity FEND course project. Using basic javascript skills to populate a resume template.',
            images: [
                'images/197x148.gif'
            ] 
        },
        {
            title: 'Animal Trading Cards',
            dates: '2017',
            desription: 'Udacity FEND course project. Using basic HTML skills to mark up a design for trading cards.',
            images: [
            ] 
        },
        {
            title: 'Portfolio Site',
            dates: '2018',
            desription: 'Udacity FEND course project. Using more advanced HTML and CSS skills create a responsive web design.',
            images: [
            ] 
        }
    ],
    display: function() {
        this.projects.forEach(function(project){
            $('#projects').append(HTMLprojectStart);
            var formattedProject = 
                HTMLprojectTitle.replace('%data%', project.title) + 
                HTMLprojectDates.replace('%data%', project.dates) +
                HTMLprojectDescription.replace('%data%', project.desription);
            project.images.forEach(function(imageUrl) {
                formattedProject += HTMLprojectImage.replace('%data%', imageUrl);
            });
            $('.project-entry:last').append(formattedProject);
        });
    }
};
projects.display();

// Attach the map functionality implemented in helper.js
var displayMap = function() {
    $('#mapDiv').append(googleMap);
};
displayMap();

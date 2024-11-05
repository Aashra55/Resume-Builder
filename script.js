var result = document.getElementById('result');
var form = document.getElementById('form');
var hidden = document.getElementById('hidden');
var Button = document.getElementById('submit');
var shareLink = (document.getElementById('share-link'));
var download = (document.getElementById('download'));
var shareContainer = (document.getElementById('share'));
// Form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var Name = document.getElementById('name').value;
    var fName = document.getElementById('f-name').value;
    var religion = document.getElementById('religion').value;
    var dob = document.getElementById('dob').value;
    var maritalStatus = document.getElementById('status').value;
    var nationality = document.getElementById('nationality').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var about = document.getElementById('about').value;
    var skillsArray = skills.split(/,\s*/);
    var experienceArray = experience.split(/,\s*/);
    var educationArray = education.split(/,\s*/);
    var resumeHtml = "\n<h1>Resume</h1>\n<h4 contenteditable=\"true\">".concat(Name, "</h4>\n<div class=\"display\">\n<div class=\"section\">\n<h2>Personal Information</h2>\n<h3 class=\"resume-name\">Name: <p contenteditable=\"true\">").concat(Name, "</p></h3>\n<h3 class=\"resume-name\">Father's Name: <p contenteditable=\"true\">").concat(fName, "</p></h3>\n<h3 class=\"resume-name\">Religion: <p contenteditable=\"true\">").concat(religion, "</p></h3>\n<h3 class=\"resume-name\">Date of Birth: <p contenteditable=\"true\">").concat(dob, "</p></h3>\n<h3 class=\"resume-name\">Marital Status: <p contenteditable=\"true\">").concat(maritalStatus, "</p></h3>\n<h3 class=\"resume-name\">Nationality: <p contenteditable=\"true\">").concat(nationality, "</p></h3>\n<h3 class=\"resume-name\">Email: <p contenteditable=\"true\">").concat(email, "</p></h3>\n<h3 class=\"resume-name\">Contact: <p contenteditable=\"true\">").concat(contact, "</p></h3><br/>\n<h2>About Me</h2>\n<p contenteditable=\"true\">").concat(about, "</p><br>\n</div>\n<div class=\"section\">\n<h2>Education</h2>\n<ul contenteditable=\"true\">").concat(educationArray.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(''), "</ul><br>\n<h2>Work Eperience</h2>\n<ul contenteditable=\"true\">").concat(experienceArray.map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(''), "</ul><br>\n<h2>Skills</h2>\n<ul contenteditable=\"true\">").concat(skillsArray.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul><br>\n</div>\n</div>");
    // resume display
    if (result) {
        result.innerHTML = resumeHtml;
    }
    ;
    //save form data in local storage
    var resumeData = {
        Name: Name,
        fName: fName,
        religion: religion,
        dob: dob,
        maritalStatus: maritalStatus,
        nationality: nationality,
        email: email,
        contact: contact,
        about: about,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(Name, JSON.stringify(resumeData));
    //making URL
    var shareURL = "".concat(window.location.href, "?username=").concat(encodeURIComponent(Name));
    shareContainer.style.display = 'block';
    shareLink.href = shareURL;
    shareLink.textContent = shareURL;
});
//PDF Download
download.addEventListener('click', function () {
    window.print();
});

var result = document.getElementById('result');
var form = document.getElementById('form');
var hidden = document.getElementById('hidden');
var Button = document.getElementById('submit');
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
    var resumeHtml = "\n<h1>Resume</h1>\n<h4>".concat(Name, "</h4>\n<div class=\"display\">\n<div class=\"section\">\n<h2>Personal Information</h2>\n<h3 class=\"resume-name\">Name: <p>").concat(Name, "</p></h3>\n<h3 class=\"resume-name\">Father's Name: <p>").concat(fName, "</p></h3>\n<h3 class=\"resume-name\">Religion: <p>").concat(religion, "</p></h3>\n<h3 class=\"resume-name\">Date of Birth: <p>").concat(dob, "</p></h3>\n<h3 class=\"resume-name\">Marital Status: <p>").concat(maritalStatus, "</p></h3>\n<h3 class=\"resume-name\">Nationality: <p>").concat(nationality, "</p></h3>\n<h3 class=\"resume-name\">Email: <p>").concat(email, "</p></h3>\n<h3 class=\"resume-name\">Contact: <p>").concat(contact, "</p></h3><br/>\n<h2>About Me</h2>\n<p>").concat(about, "</p><br>\n</div>\n<div class=\"section\">\n<h2>Education</h2>\n<ul>").concat(educationArray.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(''), "</ul><br>\n<h2>Work Eperience</h2>\n<ul>").concat(experienceArray.map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(''), "</ul><br>\n<h2>Skills</h2>\n<ul>").concat(skillsArray.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul><br>\n</div>\n</div>");
    // resume display
    if (result) {
        result.innerHTML = resumeHtml;
    }
    ;
});

document.addEventListener('DOMContentLoaded', function () {
    //get data from local storage
    var resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");
    var resumeContent = document.getElementById('resumeContent'); //get the result element
    if (resumeContent) {
        if (resumeData.Name) {
            resumeContent.innerHTML =
                "\n           <h1>Resume</h1>\n           <h4 contenteditable=\"true\">".concat(resumeData.Name, "</h4>\n           <div class=\"display\" id=\"sec\">\n           <div class=\"section\">\n           <h2>Personal Information</h2>\n           <h3 class=\"resume-name\">Name: <p contenteditable=\"true\">").concat(resumeData.Name, "</p></h3>\n           <h3 class=\"resume-name\">Father's Name: <p contenteditable=\"true\">").concat(resumeData.fName, "</p></h3>\n           <h3 class=\"resume-name\">Religion: <p contenteditable=\"true\">").concat(resumeData.religion, "</p></h3>\n           <h3 class=\"resume-name\">Date of Birth: <p contenteditable=\"true\">").concat(resumeData.dob, "</p></h3>\n           <h3 class=\"resume-name\">Marital Status: <p contenteditable=\"true\">").concat(resumeData.maritalStatus, "</p></h3>\n           <h3 class=\"resume-name\">Nationality: <p contenteditable=\"true\">").concat(resumeData.nationality, "</p></h3>\n           <h3 class=\"resume-name\">Email: <p contenteditable=\"true\">").concat(resumeData.email, "</p></h3>\n           <h3 class=\"resume-name\">Contact: <p contenteditable=\"true\">").concat(resumeData.contact, "</p></h3><br/>\n           <h2>About Me</h2>\n           <p contenteditable=\"true\" class=\"my-about\">").concat(resumeData.about, "</p><br>\n           </div>\n           <div class=\"section\">\n           <h2>Education</h2>\n           <ul contenteditable=\"true\">").concat(resumeData.educationArray.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(''), "</ul><br>\n           <h2>Work Eperience</h2>\n           <ul contenteditable=\"true\">").concat(resumeData.experienceArray.map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(''), "</ul><br>\n           <h2>Skills</h2>\n           <ul contenteditable=\"true\">").concat(resumeData.skillsArray.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul><br>\n           </div>\n           </div>\n           ");
        }
        else {
            resumeContent.innerHTML = "<p>No resume data found. Please fill out the form and generate a resume.</p>";
        }
    }
    var shareContainer = document.getElementById('share');
    var shareLink = document.getElementById('share-link');
    //making URL
    var shareURL = "".concat(window.location.href, "?username=").concat(encodeURIComponent(resumeData.Name));
    shareContainer.style.display = 'block';
    shareLink.href = shareURL;
    shareLink.textContent = shareURL;
});
var download = document.getElementById('download');
//PDF Download
download.addEventListener('click', function () {
    window.print();
});

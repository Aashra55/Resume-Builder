document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form');
    var preview = document.getElementById('preview');
    //collecting input from resume input form
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
        //collecting data for local storage
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
            educationArray: educationArray,
            experienceArray: experienceArray,
            skillsArray: skillsArray
        };
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
        alert("Resume data saved. Click Preview to view your resume.");
        //to navigate to the preview page
        preview.addEventListener('click', function () {
            window.location.href = 'result.html';
        });
    });
});

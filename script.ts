let result = document.getElementById('result')as HTMLDivElement;
let form = document.getElementById('form')as HTMLFormElement;
let hidden = document.getElementById('hidden')as HTMLDivElement;
let Button = document.getElementById('submit')as HTMLButtonElement;

form.addEventListener('submit',(e)=>{
e.preventDefault();

let Name = (document.getElementById('name')as HTMLInputElement).value;
let fName = (document.getElementById('f-name')as HTMLInputElement).value;
let religion = (document.getElementById('religion')as HTMLInputElement).value;
let dob = (document.getElementById('dob')as HTMLInputElement).value;
let maritalStatus = (document.getElementById('status')as HTMLInputElement).value;
let nationality = (document.getElementById('nationality')as HTMLInputElement).value;
let email = (document.getElementById('email')as HTMLInputElement).value;
let contact = (document.getElementById('contact')as HTMLInputElement).value;
let education = (document.getElementById('education')as HTMLInputElement).value;
let experience = (document.getElementById('experience')as HTMLInputElement).value;
let skills = (document.getElementById('skills')as HTMLInputElement).value;
let about = (document.getElementById('about')as HTMLInputElement).value;
let skillsArray = skills.split(/,\s*/);
let experienceArray = experience.split(/,\s*/);
let educationArray = education.split(/,\s*/);

const resumeHtml = `
<h1>Resume</h1>
<h4>${Name}</h4>
<div class="display">
<div class="section">
<h2>Personal Information</h2>
<h3 class="resume-name">Name: <p>${Name}</p></h3>
<h3 class="resume-name">Father's Name: <p>${fName}</p></h3>
<h3 class="resume-name">Religion: <p>${religion}</p></h3>
<h3 class="resume-name">Date of Birth: <p>${dob}</p></h3>
<h3 class="resume-name">Marital Status: <p>${maritalStatus}</p></h3>
<h3 class="resume-name">Nationality: <p>${nationality}</p></h3>
<h3 class="resume-name">Email: <p>${email}</p></h3>
<h3 class="resume-name">Contact: <p>${contact}</p></h3><br/>
<h2>About Me</h2>
<p>${about}</p><br>
</div>
<div class="section">
<h2>Education</h2>
<ul>${educationArray.map((edu)=>`<li>${edu}</li>`).join('')}</ul><br>
<h2>Work Eperience</h2>
<ul>${experienceArray.map((exp)=>`<li>${exp}</li>`).join('')}</ul><br>
<h2>Skills</h2>
<ul>${skillsArray.map(skill => `<li>${skill}</li>`).join('')}</ul><br>
</div>
</div>`

// resume display
if(result){
    result.innerHTML = resumeHtml
};

})


let result = document.getElementById('result')as HTMLDivElement;
let form = document.getElementById('form')as HTMLFormElement;
let hidden = document.getElementById('hidden')as HTMLDivElement;
let Button = document.getElementById('submit')as HTMLButtonElement;
let shareLink = (document.getElementById('share-link'))as HTMLAnchorElement;
let download = (document.getElementById('download'))as HTMLButtonElement;
let shareContainer = (document.getElementById('share'))as HTMLDivElement;
// Form submission
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
<h4 contenteditable="true">${Name}</h4>
<div class="display">
<div class="section">
<h2>Personal Information</h2>
<h3 class="resume-name">Name: <p contenteditable="true">${Name}</p></h3>
<h3 class="resume-name">Father's Name: <p contenteditable="true">${fName}</p></h3>
<h3 class="resume-name">Religion: <p contenteditable="true">${religion}</p></h3>
<h3 class="resume-name">Date of Birth: <p contenteditable="true">${dob}</p></h3>
<h3 class="resume-name">Marital Status: <p contenteditable="true">${maritalStatus}</p></h3>
<h3 class="resume-name">Nationality: <p contenteditable="true">${nationality}</p></h3>
<h3 class="resume-name">Email: <p contenteditable="true">${email}</p></h3>
<h3 class="resume-name">Contact: <p contenteditable="true">${contact}</p></h3><br/>
<h2>About Me</h2>
<p contenteditable="true">${about}</p><br>
</div>
<div class="section">
<h2>Education</h2>
<ul contenteditable="true">${educationArray.map((edu)=>`<li>${edu}</li>`).join('')}</ul><br>
<h2>Work Eperience</h2>
<ul contenteditable="true">${experienceArray.map((exp)=>`<li>${exp}</li>`).join('')}</ul><br>
<h2>Skills</h2>
<ul contenteditable="true">${skillsArray.map(skill => `<li>${skill}</li>`).join('')}</ul><br>
</div>
</div>`

// resume display
if(result){
    result.innerHTML = resumeHtml
};

//save form data in local storage
let resumeData={
    Name,
    fName,
    religion,
    dob,
    maritalStatus,
    nationality,
    email,
    contact,
    about,
    education,
    experience,
    skills
}
localStorage.setItem(Name, JSON.stringify(resumeData));

//making URL
const shareURL = `${window.location.href}?username=${encodeURIComponent(Name)}`;
shareContainer.style.display = 'block';
shareLink.href = shareURL;
shareLink.textContent = shareURL;
})

//PDF Download
download.addEventListener('click',()=>{
    window.print();
})


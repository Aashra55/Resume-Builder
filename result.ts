document.addEventListener('DOMContentLoaded',()=>{

    //get data from local storage
    const resumeData = JSON.parse(localStorage.getItem("resumeData")||"{}");
    const resumeContent = document.getElementById('resumeContent'); //get the result element

    if(resumeContent){
        if(resumeData.Name){
            resumeContent.innerHTML = 
            `
           <h1>Resume</h1>
           <h4 contenteditable="true">${resumeData.Name}</h4>
           <div class="display" id="sec">
           <div class="section">
           <h2>Personal Information</h2>
           <h3 class="resume-name">Name: <p contenteditable="true">${resumeData.Name}</p></h3>
           <h3 class="resume-name">Father's Name: <p contenteditable="true">${resumeData.fName}</p></h3>
           <h3 class="resume-name">Religion: <p contenteditable="true">${resumeData.religion}</p></h3>
           <h3 class="resume-name">Date of Birth: <p contenteditable="true">${resumeData.dob}</p></h3>
           <h3 class="resume-name">Marital Status: <p contenteditable="true">${resumeData.maritalStatus}</p></h3>
           <h3 class="resume-name">Nationality: <p contenteditable="true">${resumeData.nationality}</p></h3>
           <h3 class="resume-name">Email: <p contenteditable="true">${resumeData.email}</p></h3>
           <h3 class="resume-name">Contact: <p contenteditable="true">${resumeData.contact}</p></h3><br/>
           <h2>About Me</h2>
           <p contenteditable="true" class="my-about">${resumeData.about}</p><br>
           </div>
           <div class="section">
           <h2>Education</h2>
           <ul contenteditable="true">${resumeData.educationArray.map((edu)=>`<li>${edu}</li>`).join('')}</ul><br>
           <h2>Work Eperience</h2>
           <ul contenteditable="true">${resumeData.experienceArray.map((exp)=>`<li>${exp}</li>`).join('')}</ul><br>
           <h2>Skills</h2>
           <ul contenteditable="true">${resumeData.skillsArray.map(skill => `<li>${skill}</li>`).join('')}</ul><br>
           </div>
           </div>
           `
        }else{
            resumeContent.innerHTML = "<p>No resume data found. Please fill out the form and generate a resume.</p>";
        }
    }

let shareContainer = document.getElementById('share')as HTMLDivElement;
let shareLink = document.getElementById('share-link')as HTMLAnchorElement; 

//making URL
const shareURL = `${window.location.href}?username=${encodeURIComponent(resumeData.Name)}`;
shareContainer.style.display = 'block';
shareLink.href = shareURL;
shareLink.textContent = shareURL;
});

let download = document.getElementById('download')as HTMLButtonElement; 
//PDF Download
download.addEventListener('click',()=>{
    window.print();

});

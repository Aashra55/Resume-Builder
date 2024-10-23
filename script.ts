let skillsOpen = document.getElementById('skills-open');
let experienceOpen = document.getElementById('experience-open');
let educationOpen = document.getElementById('education-open');
let personalOpen = document.getElementById('personal-open');

let skillsClose = document.getElementById('skills-close');
let experienceClose = document.getElementById('experience-close');
let educationcClose = document.getElementById('education-close');
let personalClose = document.getElementById('personal-close');

let skillToggle = document.getElementById('skill-toggle');
let experienceToggle = document.getElementById('experience-toggle');
let educationToggle = document.getElementById('education-toggle');
let personalToggle = document.getElementById('personal-toggle');

skillsOpen?.addEventListener('click',(e)=>{
    skillToggle?.classList.add('skill-shift');
    skillsClose?.classList.remove('close');
    skillsOpen?.classList.add('open')
});
experienceOpen?.addEventListener('click',(e)=>{
    experienceToggle?.classList.add('experience-shift');
    experienceClose?.classList.remove('close')
    experienceOpen?.classList.add('open')
});
educationOpen?.addEventListener('click',(e)=>{
    educationToggle?.classList.add('education-shift');
    educationcClose?.classList.remove('close');
    educationOpen?.classList.add('open')
});
personalOpen?.addEventListener('click',(e)=>{
    personalToggle?.classList.add('personal-shift');
    personalClose?.classList.remove('close');
    personalOpen?.classList.add('open')
});

personalClose?.addEventListener('click',(e)=>{
    personalToggle?.classList.remove('personal-shift');
    personalClose?.classList.add('close');
    personalOpen?.classList.remove('open')
});
educationcClose?.addEventListener('click',(e)=>{
    educationToggle?.classList.remove('education-shift');
    educationcClose?.classList.add('close');
    educationOpen?.classList.remove('open')
});
experienceClose?.addEventListener('click',(e)=>{
    experienceToggle?.classList.remove('experience-shift');
    experienceClose?.classList.add('close');
    experienceOpen?.classList.remove('open')
});
skillsClose?.addEventListener('click',(e)=>{
    skillToggle?.classList.remove('skill-shift');
    skillsClose?.classList.add('close')
    skillsOpen?.classList.remove('open')
});

var skillsOpen = document.getElementById('skills-open');
var experienceOpen = document.getElementById('experience-open');
var educationOpen = document.getElementById('education-open');
var personalOpen = document.getElementById('personal-open');
var skillsClose = document.getElementById('skills-close');
var experienceClose = document.getElementById('experience-close');
var educationcClose = document.getElementById('education-close');
var personalClose = document.getElementById('personal-close');
var skillToggle = document.getElementById('skill-toggle');
var experienceToggle = document.getElementById('experience-toggle');
var educationToggle = document.getElementById('education-toggle');
var personalToggle = document.getElementById('personal-toggle');
skillsOpen === null || skillsOpen === void 0 ? void 0 : skillsOpen.addEventListener('click', function (e) {
    skillToggle === null || skillToggle === void 0 ? void 0 : skillToggle.classList.add('skill-shift');
    skillsClose === null || skillsClose === void 0 ? void 0 : skillsClose.classList.remove('close');
    skillsOpen === null || skillsOpen === void 0 ? void 0 : skillsOpen.classList.add('open');
});
experienceOpen === null || experienceOpen === void 0 ? void 0 : experienceOpen.addEventListener('click', function (e) {
    experienceToggle === null || experienceToggle === void 0 ? void 0 : experienceToggle.classList.add('experience-shift');
    experienceClose === null || experienceClose === void 0 ? void 0 : experienceClose.classList.remove('close');
    experienceOpen === null || experienceOpen === void 0 ? void 0 : experienceOpen.classList.add('open');
});
educationOpen === null || educationOpen === void 0 ? void 0 : educationOpen.addEventListener('click', function (e) {
    educationToggle === null || educationToggle === void 0 ? void 0 : educationToggle.classList.add('education-shift');
    educationcClose === null || educationcClose === void 0 ? void 0 : educationcClose.classList.remove('close');
    educationOpen === null || educationOpen === void 0 ? void 0 : educationOpen.classList.add('open');
});
personalOpen === null || personalOpen === void 0 ? void 0 : personalOpen.addEventListener('click', function (e) {
    personalToggle === null || personalToggle === void 0 ? void 0 : personalToggle.classList.add('personal-shift');
    personalClose === null || personalClose === void 0 ? void 0 : personalClose.classList.remove('close');
    personalOpen === null || personalOpen === void 0 ? void 0 : personalOpen.classList.add('open');
});
personalClose === null || personalClose === void 0 ? void 0 : personalClose.addEventListener('click', function (e) {
    personalToggle === null || personalToggle === void 0 ? void 0 : personalToggle.classList.remove('personal-shift');
    personalClose === null || personalClose === void 0 ? void 0 : personalClose.classList.add('close');
    personalOpen === null || personalOpen === void 0 ? void 0 : personalOpen.classList.remove('open');
});
educationcClose === null || educationcClose === void 0 ? void 0 : educationcClose.addEventListener('click', function (e) {
    educationToggle === null || educationToggle === void 0 ? void 0 : educationToggle.classList.remove('education-shift');
    educationcClose === null || educationcClose === void 0 ? void 0 : educationcClose.classList.add('close');
    educationOpen === null || educationOpen === void 0 ? void 0 : educationOpen.classList.remove('open');
});
experienceClose === null || experienceClose === void 0 ? void 0 : experienceClose.addEventListener('click', function (e) {
    experienceToggle === null || experienceToggle === void 0 ? void 0 : experienceToggle.classList.remove('experience-shift');
    experienceClose === null || experienceClose === void 0 ? void 0 : experienceClose.classList.add('close');
    experienceOpen === null || experienceOpen === void 0 ? void 0 : experienceOpen.classList.remove('open');
});
skillsClose === null || skillsClose === void 0 ? void 0 : skillsClose.addEventListener('click', function (e) {
    skillToggle === null || skillToggle === void 0 ? void 0 : skillToggle.classList.remove('skill-shift');
    skillsClose === null || skillsClose === void 0 ? void 0 : skillsClose.classList.add('close');
    skillsOpen === null || skillsOpen === void 0 ? void 0 : skillsOpen.classList.remove('open');
});

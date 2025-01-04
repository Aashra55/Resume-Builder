document.addEventListener('DOMContentLoaded',()=>{
    const form  = document.getElementById('form')as HTMLFormElement;
    const preview = document.getElementById('preview')as HTMLButtonElement;

    //collecting input from resume input form
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

        //collecting data for local storage
        const resumeData={
            Name,
            fName,
            religion,
            dob,
            maritalStatus,
            nationality,
            email,
            contact,
            about,
            educationArray,
            experienceArray,
            skillsArray
        }

        localStorage.setItem('resumeData',JSON.stringify(resumeData));
        alert("Resume data saved. Click Preview to view your resume.")

        //to navigate to the preview page
        preview.addEventListener('click',()=>{
            window.location.href = 'result.html';
        })
    })
});


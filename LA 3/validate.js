function validateForm(event){
    event.preventDefault();
    const name= document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if(!age || !phone || !email || !name)
    {
        alert("Please enter all fields!");
        return false;
    }
    if(phone.length != 10)
    {
        alert("Enter valid phone number!");
        return false;
    }
    if(!email.endsWith("snuchennai.edu.in"))
    {
        alert("Please enter college email.");
        return false;
    }
    const confirmed = confirm("Are you sure you want to submit the form?");
    
    if(confirmed)
    {
        const captcha = prompt("Enter this - 1023AB: ");
        if(captcha != "1023AB")
        {
            alert("Failed captcha!");
            return false;
        }
        alert("Form submitted successfully!");
    }
    else
    {
        alert("Form submission failed!");
    }

}
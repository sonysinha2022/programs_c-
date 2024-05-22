var submitButton = document.getElementById('submitBtn');
submitButton.disabled = true; // Submit Button will be disabled by default
var fullname;
var email;
var fullNamevalidationflag = false;
var emailvalidationflag = false;
var panvalidationflag = false;
var loanamountvalidationflag = false;
function OnSubmit() {
    var errors = 0;
    const fullname = document.getElementById('fullname').value;
    if (fullname.length == 0) {
        alert('Full name cannot be empty');
        document.getElementById('submitBtn').disabled = true;
        errors++;
    }
    email = document.getElementById('email').value;
    if (email.length == 0) {
        alert('Email cannot be empty');
        document.getElementById('submitBtn').disabled = true;
        errors++;
    }
    const pan = document.getElementById('pan').value;
    if (pan.length == 0) {
        alert('PAN Number cannot be empty');
        document.getElementById('submitBtn').disabled = true;
        errors++;
    }
    // Check if All validations have passed, Allow submission and navigation to next page on sucessful validation
    if (errors == 0) {
        alert('Form Submitted Suceessfuly.Please click Ok to continue for OTP validation');
        //Storing Fullname and Email in local storage to fetch details on next page
        localStorage.setItem("fullName", fullname);
        localStorage.setItem("email", email);
        window.location.href = 'confirm.html';
    }
}
function onValidateFullName() {
    fullname = document.getElementById('fullname').value;
    // FullName validation
    if (fullname.length > 0) {
        const patternName = /^[A-Za-z\s]+$/;
        if (!patternName.test(fullname)) {
            fullNamevalidationflag = false;
            alert('Full Name can only contain alphabets and spaces');
        }
        else { fullNamevalidationflag = true; }
        const patternFullName = fullname.split(/\s+/);
        if (patternFullName.length < 2 || patternFullName.some(part => part.length < 4)) {
            fullNamevalidationflag = false;
            alert('Full name should have at least two words and each word should be at least four characters');
        }
        else { fullNamevalidationflag = true; }
    }
    else {
        alert('Full name cannot be Empty');
    }
    // Enable the Submit Button only if all validations have passed
    if (fullNamevalidationflag && emailvalidationflag && panvalidationflag && loanamountvalidationflag) {
        document.getElementById('submitBtn').disabled = false;
    }
}
function onValidateEmail() {
    email = document.getElementById('email').value;
    const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patternEmail.test(email)) {
        alert('Please Enter Valid Email Id, as OTP would be shared on same Email Id');
        emailvalidationflag = false;
    } else { emailvalidationflag = true; }
    // Enable the Submit Button only if all validations have passed
    if (fullNamevalidationflag && emailvalidationflag && panvalidationflag && loanamountvalidationflag) {
        document.getElementById('submitBtn').disabled = false;
    }
}
function onValidatePan() {
    const pan = document.getElementById('pan').value;
    const patternPAN = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!patternPAN.test(pan)) {
        alert('Please Enter PAN Number in the format "ABCDE1234F" only');
        panvalidationflag = false;
    } else { panvalidationflag = true; }
    // Enable the Submit Button only if all validations have passed
    if (fullNamevalidationflag && emailvalidationflag && panvalidationflag && loanamountvalidationflag) {
        document.getElementById('submitBtn').disabled = false;
    }
}
function onValidateLoanAmount() {
    const loanAmount = document.getElementById('loanAmount').value;
    const patternLoanAmount = /^[0-9]{1,9}$/;
    if (!patternLoanAmount.test(loanAmount)) {
        alert('Loan Amount should be numeric and up to "999999999" only');
        loanamountvalidationflag = false;
    } else { loanamountvalidationflag = true; }
    // Enable the Submit Button only if all validations have passed
    if (fullNamevalidationflag && emailvalidationflag && panvalidationflag && loanamountvalidationflag) {
        document.getElementById('submitBtn').disabled = false;
    }
}
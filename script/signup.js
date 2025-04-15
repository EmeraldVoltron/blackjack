document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupForm").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const fullName = document.getElementById("fullName").value.trim();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const age = parseInt(document.getElementById("age").value, 10);
      const legalChecked = document.getElementById("legalCheckbox").checked;
      const termsChecked = document.getElementById("termsCheckbox").checked;
  
      console.log(`Full Name: ${fullName}`);
      console.log(`Username: ${username}`);
      console.log(`Password: ${password}`);
      console.log(`Confirm Password: ${confirmPassword}`);
      console.log(`Age: ${isNaN(age) ? '' : age}`);
  
      // Checkbox logging
      if (legalChecked) {
        console.log("The user has checked the legal checkbox");
      } else {
        console.log("The user has not checked the legal checkbox");
      }
  
      if (termsChecked) {
        console.log("The user has checked the terms checkbox");
      } else {
        console.log("The user has not checked the terms checkbox");
      }
  
      // Eligibility check
      const fieldsFilled = fullName && username && password && confirmPassword && !isNaN(age);
      const passwordsMatch = password === confirmPassword;
      const ageEligible = age >= 13;
      const allChecked = legalChecked && termsChecked;
  
      if (fieldsFilled && passwordsMatch && ageEligible && allChecked) {
        console.log("The user is eligible");
      } else {
        console.log("The user is ineligible");
      }
    });
  });
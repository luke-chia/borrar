function validateEmail(email) {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    if (emailPattern.test(email)) {
        return true; // Email is valid
    } else {
        return false; // Email is invalid
    }
}

// function to validate cellphone number

function validateCellphone(cellphone) {
    // Regular expression pattern for cellphone validation
    const cellphonePattern = /^[0-9]{10}$/;

    // Check if the cellphone matches the pattern
    if (cellphonePattern.test(cellphone)) {
        return true; // Cellphone is valid
    } else {
        return false; // Cellphone is invalid
    }
}
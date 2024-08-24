document.getElementById('donorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch form values
    const name = document.getElementById('name').value;
    const bloodGroup = document.getElementById('bloodGroup').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const bio = document.getElementById('bio').value;

    // Display the submitted donor information
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayBloodGroup').textContent = bloodGroup;
    document.getElementById('displayContact').textContent = contact;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayBio').textContent = bio;

    // Show the donor information div
    document.getElementById('donorInfo').classList.remove('hidden');

    // Clear the form fields after submission
    document.getElementById('donorForm').reset();
});

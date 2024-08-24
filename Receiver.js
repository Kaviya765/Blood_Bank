document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const searchForm = document.getElementById('searchForm');
    const results = document.getElementById('results');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Add your signup logic here
            alert('Signup successful! Redirecting to login page.');
            window.location.href = 'login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Add your login validation logic here
            alert('Login successful! Redirecting to home page.');
            window.location.href = 'home.html';
        });
    }

    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Mock search logic
            const bloodGroup = document.getElementById('bloodGroup').value;
            results.innerHTML = ''; // Clear previous results

            // Mock results
            const donors = [
                { name: 'Periasamy', bloodGroup: 'A+',contact:'9876543210'},
                { name: 'Dhana', bloodGroup: 'B+',contact:'9876543210' },
                { name: 'Archana', bloodGroup: 'AB+',contact:'9876543210'},
                { name: 'Kaviya', bloodGroup: 'O+',contact:'9876543210'},
            ];

            // Filter donors by blood group
            const filteredDonors = donors.filter(donor => donor.bloodGroup === bloodGroup);

            if (filteredDonors.length > 0) {
                filteredDonors.forEach(donor => {
                    const li = document.createElement('li');
                    li.textContent = `${donor.name} - ${donor.bloodGroup}- ${donor.contact}`;
                    results.appendChild(li);
                });
            } else {
                const li = document.createElement('li');
                li.textContent = 'No donors found';
                results.appendChild(li);
            }
        });
    }
});

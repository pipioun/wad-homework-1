const profileButton = document.getElementById('profileButton');
const profileDropdown = document.getElementById('profileDropdown');

profileButton.addEventListener('click', function () {
    profileDropdown.hidden = !profileDropdown.hidden;

    profileButton.setAttribute(
        'aria-expanded',
        String(!profileDropdown.hidden)
    );
});
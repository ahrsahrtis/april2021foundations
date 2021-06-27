(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_OFn7a6WfLJOFwAuUtw6eV');
})();

window.onload = function() {
    document.getElementById('email').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'email', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}


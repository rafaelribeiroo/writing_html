Vue.component('contactForm', {
	template: '#tpl_contact_form',
	data: function() {
		return {
			contactFullName: '',
			contactEmail: '',
			contactMessage: '',
			contactFormActive: false
		}
	},
	methods: {
		openContactForm: function() {
			this.contactFormActive = true;
		},
		closeContactForm: function() {
			this.contactFormActive = false;
		},
		toggleContactForm: function() {
			if (this.contactFormActive === false) {
				this.openContactForm();
			} else {
				this.closeContactForm();
			}
		},
		sendMyMessage: function() {
			var message = '';
			
			if (this.contactFullName != '') {
				message += 'Hello ' + this.contactFullName + '!\n\n';
			}
			
			if (this.contactEmail == '') {
				alert('"E-mail Address" is required');
				
				return false;
			}
			
			if (this.contactMessage == '') {
				alert('"Message for the developer" is required');
				
				return false;
			}
			
			message += 'Your E-mail address you told me is: ' + this.contactEmail + '!\n\n';
			message += 'Your message for me is: "' + this.contactMessage + '"!\n';
			message += 'Thank you for your wonderful message, I am going to treasure it!\n\n';
			message += 'Thank you for you time checking this pen! I hope you like it!';
			
			alert(message);
			
			// Clear the form after sending
			this.contactFullName = '';
			this.contactEmail    = '';
			this.contactMessage  = '';
			
			this.closeContactForm();
		}
	}
});

// ---------- Usage of the component
var app = new Vue({
	el: '#app',
});
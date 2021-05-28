jQuery(function($) {
	//contact.html
	var formContactForm = $('#contactform');
	if (formContactForm.length){
		formContactForm.validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true,
				}
			},
			messages: {
				name: {
					required: "Please enter your name",
					minlength: "Your name must consist of at least 2 characters"
				},
				email: {
					required: "Please enter your email"
				},
				message: {
					required: "Please enter your message"
				}
			},
			submitHandler: function(form) {
				$(form).ajaxSubmit({
					type:"POST",
					data: $(form).serialize(),
					url:"external/form/contact-form.php",
					success: function() {
						  $('#success').fadeIn();
				formContactForm.each(function(){this.reset();});
					},
					error: function() {
						formContactForm.fadeTo( "slow", 1, function() {
							$('#error').fadeIn();
						});
					}
				});
			}
		});
	};
	//newsletterform
	var formNewsletterform01 = $('#newsletterform-01');
	if (formNewsletterform01.length){
		formNewsletterform01.validate({
			rules: {
				email: {
					required: true,
					email: true
				}
			},
			submitHandler: function(form) {
				$(form).ajaxSubmit({
					type:"POST",
					data: $(form).serialize(),
					url:"external/form/newsletter-form.php",
					success: function() {
						  $('#success').fadeIn();
				formNewsletterform01.each(function(){this.reset();});
					},
					error: function() {
						formNewsletterform01.fadeTo( "slow", 1, function() {
							$('#error').fadeIn();
						});
					}
				});
			}
		});
	};
	//jsFormPrivateEvent
	var formjsFormPrivateEvent = $('#jsFormPrivateEvent');
	if (formjsFormPrivateEvent.length){
		formjsFormPrivateEvent.validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true,
				}
			},
			messages: {
				name: {
					required: "Please enter your name",
					minlength: "Your name must consist of at least 2 characters"
				},
				email: {
					required: "Please enter your email"
				},
				message: {
					required: "Please enter your message"
				}
			},
			submitHandler: function(form) {
				$(form).ajaxSubmit({
					type:"POST",
					data: $(form).serialize(),
					url:"external/form/modal-private-event-form.php",
					success: function(){
						$('#success').fadeIn();
						formjsFormPrivateEvent.each(function(){this.reset();});
					},
					error: function() {
						formjsFormPrivateEvent.fadeTo( "slow", 1, function(){
							$('#error').fadeIn();
						});
					}
				});
			}
		});
	};
	//jsFormVipTable
	var formjsFormVipTable = $('#jsFormVipTable');
	if (formjsFormVipTable.length){
		formjsFormVipTable.validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true,
				}
			},
			messages: {
				name: {
					required: "Please enter your name",
					minlength: "Your name must consist of at least 2 characters"
				},
				email: {
					required: "Please enter your email"
				},
				message: {
					required: "Please enter your message"
				}
			},
			submitHandler: function(form) {
				$(form).ajaxSubmit({
					type:"POST",
					data: $(form).serialize(),
					url:"external/form/modal-vip-table-form.php",
					success: function(){
						$('#success').fadeIn();
						formjsFormVipTable.each(function(){this.reset();});
					},
					error: function() {
						formjsFormVipTable.fadeTo( "slow", 1, function(){
							$('#error').fadeIn();
						});
					}
				});
			}
		});
	};
	//jsFormChat
	var formjsFormChat = $('#jsFormChat');
	if (formjsFormChat.length){
		$('#jsFormChat').validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true,
				}
			},
			messages: {
				name: {
					required: "Please enter your name",
					minlength: "Your name must consist of at least 2 characters"
				},
				email: {
					required: "Please enter your email"
				},
				message: {
					required: "Please enter your message"
				}
			},
			submitHandler: function(form) {
				$(form).ajaxSubmit({
					type:"POST",
					data: $(form).serialize(),
					url:"external/form/modal-chat-form.php",
					success: function(){
						$('#success').fadeIn();
						formjsFormChat.each(function(){this.reset();});
					},
					error: function() {
						formjsFormChat.fadeTo( "slow", 1, function(){
							$('#error').fadeIn();
						});
					}
				});
			}
		});
	};
});
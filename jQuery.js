// Wait for the DOM to load
$(document).ready(function() {

    // Create a function that will fire when the submit <button> is clicked
    $('#submit').click(function(event) {
		event.preventDefault();

      // Create variables for each form input
      let name = $('#name').val();
      let email = $('#email').val();
      let phone = $('#phone').val();

      // Create an array named required to store variables
      let required = [name, email, phone];

      //Utilize a for loop to iterate of the entire required array
	  
      for (let i = 0; i < required.length; i++) {

    	// Check if the current field is empty
        if (required[i] === '') {

        // If empty, populate the message with an error message
          $('#message').text('Please Fill Out Required Fields');

        // Add the warning class to the message and its label
          $('#message').addClass('warning');
          $('label').eq(i).addClass('warning');

        } else {

        // If the field is not empty, remove the warning class from its label
          $('label').eq(i).removeClass('warning');
        }
      }

      // Check if any fields still have the warning class
      if ($('.warning').length === 0) {

        // If no fields have the warning class, remove the form from the DOM
        $('.form-container').remove();

        // Replace the heading with a success message
        $('#pre-form').html('<h2>Thanks for your feedback!</h2>');
      }
    });
  });
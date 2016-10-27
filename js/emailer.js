$(document).ready(function(){

  // Initialize Parse with your Parse application & javascript keys
  Parse.initialize("2NYZ1D7vtoZ3hGMt5EZFOa8jAkdMWSzwMFMaB1OU", "fyHJ84ectAdt2pX5f09xhZdq4CtaHuf2Xa0kI4bT");

  // Setup the form to watch for the submit event
  $('#myForm').submit(function(e){
    e.preventDefault();

    // Grab the elements from the form to make up
    // an object containing name, email and message
    var data = { 
      name: document.getElementById('name').value, 
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    }
    
    // Run our Parse Cloud Code and 
    // pass our 'data' object to it
    Parse.Cloud.run("sendEmail", data, {
      success: function(object) {
        $('#response').html('<div class="alert alert-info" role="alert"><p class="text-center"><b>moltíssimes gràcies!</b> ens posarem en contacte amb tu tant aviat com sigui possible!</p></div>').addClass('success').fadeIn('fast');
      },

      error: function(object, error) {
        console.log(error);
        $('#response').html('<div class="alert alert-danger" role="alert"><p class="text-center"><b>Uh, ooh!</b> Disculpa, alguna cosa no ha anat bé, siusplau torna a enviar el formulari o contacta amb info(arrobar)xef.cat.</p></div>').addClass('error').fadeIn('fast');
      }
    });
  });

});
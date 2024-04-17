function sendMessage(event) {
  event.preventDefault(); // Prevent form submission
  
  // Collect form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var username = document.getElementById('subject').value;
  var message = document.querySelector('textarea[name="message"]').value;
  
  // Telegram bot information
  var botToken = '5228779518:AAEmEY8_dHJ4LXOefuPpWzXnEWHSnSrwA_0';
  var chatId = '-1002143952930';
  
  // Prepare message text
  var text = 'Name: ' + name + '\nEmail: ' + email + '\n';
  text += (username.trim() !== '') ? 'Username: @' + username + '\n' : '';
  text += 'Message: ' + message;
    
  // Send message via AJAX
  $.post('https://api.telegram.org/bot' + botToken + '/sendMessage', { chat_id: chatId, text: text })
    .done(function(response) {
      // On success
      $('.sent-message').fadeIn().html('Your message has been sent. He Will Contact You Soon! Thank you! 🙂');
      $('.error-message').fadeOut();
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      // On failure
      $('.error-message').fadeIn().html('Error sending message: ' + errorThrown);
      $('.sent-message').fadeOut();
    })
    .always(function() {
      // Hide loading indicator
      $('.loading').fadeOut();
    });
}


function sendMessage(e) {
  // Get the sheet where the new row was added
  var sheet = e.range.getSheet();
  
  // Get the row number where the new data was added
  var row = e.range.getRow();
  
  // Get the values from the new row
  var values = sheet.getRange(row, 1, 1, sheet.getLastColumn()).getValues()[0];
  
  // Set up the Slack webhook URL and message
  var webhookUrl = "https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK/URL";
  
  // Define the message as an array of strings (each string represents a line)
  var message = [
    "This is the first line of your message.",
    "This is the second line.",
    "You can add as many lines as you want.",
    "Just keep adding strings to the array."
  ];

  // Create the payload for the Slack message
  var payload = {
    "text": message.join('\n') // Join the array with line breaks
  };

  // Configure the options for the HTTP request to Slack
  var options = {
    "method": "POST",
    "contentType": "application/json",
    "payload": JSON.stringify(payload)
  };

  // Send the message to Slack using the webhook
  var response = UrlFetchApp.fetch(webhookUrl, options);

  // Log the response from Slack (for debugging)
  Logger.log(response.getContentText());
}

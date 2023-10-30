function sendMessage() {
  // Get the sheet where the new row was added
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Find the last row with data
  var row = sheet.getLastRow();
  
  // Get the values from the new row
  var values = sheet.getRange(row, 1, 1, sheet.getLastColumn()).getValues()[0];
  
  // Set up the Slack webhook URL and timestamp
  var webhookUrl = "https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK/URL";
  var timestamp = values[0];
  var formattedDate = Utilities.formatDate(new Date(timestamp), 'Asia/Seoul', 'yyyy-MM-dd');

  // Define the message
  var message = "*[신규 입사자 알림]*\n\n" +
                "-----------------------------\n\n" +
                "- 제출 일자: " + formattedDate + "\n" +
                "- 이름: " + values[1] + "\n" + // Assuming the name is in the second column
                // Add more data as needed
                "...\n";

  // Create the payload for the Slack message
  var payload = {
    "text": message
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

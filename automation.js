function onFormSubmit(e) {
    // Get the sheet where the new row was added
    var sheet = e.range.getSheet();
    
    // Get the row number where the new data was added
    var row = e.range.getRow();
    
    // Get the values from the new row
    var values = sheet.getRange(row, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    // Set up the Slack webhook URL and message
    var webhookUrl = "https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK/URL";
    var message = "New row added:\n" + values.join("\n");
    
    // Send the message to Slack using the webhook
    var payload = {
      "text": message
    };
    var options = {
      "method": "POST",
      "payload": JSON.stringify(payload)
    };
    UrlFetchApp.fetch(webhookUrl, options);
  }
  
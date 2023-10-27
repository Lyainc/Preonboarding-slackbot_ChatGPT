function onFormSubmit(e) {
    // Get the sheet where the new row was added
    var sheet = e.range.getSheet();
    
    // Get the row number where the new data was added
    var row = e.range.getRow();
    
    // Get the values from the new row
    var values = sheet.getRange(row, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    // Do something with the values
    // For example, log the values to the console
    console.log(values);
  }
  
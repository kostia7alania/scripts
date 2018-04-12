 
request.open("GET", "https://content-sheets.googleapis.com/v4/spreadsheets/15yCRZ-3pQRuefdZ0LF2hXpKYROmigTS-nACUCryJVgU/values/Лист1!A3:A40?key=AIzaSyBv2oT1ZhH_Zi6dBvRhlijje3QZ7pPtDwk", false);

function doGet(e) {
    row = 1;
    var inputCol1 = ContentService.createTextOutput(JSON.stringify(e.parameter.col1)).getContent();
    var inputCol2 = ContentService.createTextOutput(JSON.stringify(e.parameter.col2)).getContent();
    sheet.getRange(row, 1).setValue(inputCol1);
    sheet.getRange(row, 2).setValue(inputCol1);
}

alert('черновик дж С')
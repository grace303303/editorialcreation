//create table
let tableobj = new Map();

function createtable() {
    tableobj = new Map();
    let lines = $("#dealtable-textarea").val().split("\n");
    // Remove header row.
    if(lines.length > 0) {
            lines.shift();
    }
    // Put rows into tableobj.
    counter = 0
    for (let i = 0; i < lines.length; i++) {
        if (i<3 || (i+1)%4!=0) {
        let item = lines[i].split('\t');
        tableobj.set(counter, item);
        counter++;
        }
    }
    // Check tableobj has no missing data.
    for (const entry of tableobj.entries()) {
        if (entry[1].length < 2) {
            alert("Please make make sure you have copied every table detail from the jira table.");
            return;
        }
    }

    //Create table    
    $("#thetable").addClass("show-block");
    
    
    let table_cols = tableobj.get(0).length;
    let counter2 = 1;
    let allrows=`<tr><th>Merchant</th>`;
    while (counter2 < table_cols) {
        if (counter2 != table_cols - 1) {
        allrows = allrows + `<th>Col${counter2}&nbsp;&nbsp;<input type="checkbox" name="findlink" value="${counter2}"></th>`
        } else {
        allrows = allrows + `<th>Col${counter2}&nbsp;&nbsp;<input type="checkbox" name="findlink" value="${counter2}"></th></tr>` 
        }
        counter2++;
        
    };

    for (let i = 0; i < tableobj.size; i++) {
        let counter3 = 0;
        while (counter3 < table_cols) {
        if (counter3 == 0) {
          allrows = allrows + `<tr id="store${i+1}"><td>Store${i+1}: ${tableobj.get(i)[0]}</td>`
        } else if (counter3 != table_cols - 1) {
        allrows = allrows + `<td>${tableobj.get(i)[counter3]}</td>`
        } else {
        allrows = allrows + `<td>${tableobj.get(i)[counter3]}</td></tr>` 
        }
        counter3++;
    }
    };
    $("#tablebody").html(allrows);

}

function get_linkcol() {
    let linkcol;
    let counter = 0;
    let checkboxes = $( "input[name='findlink']" );
    for (checkbox of checkboxes) {
        if (checkbox.checked == true) {
        linkcol = checkbox.value;
        counter++;
        }
    }
    
    if (!linkcol || counter > 1) {
        alert("Please make sure you check the link column and there's only one column checked!");
        return;
    }
    return parseInt(linkcol);
}

function createcodes() {
    let link_col = get_linkcol();
    if (link_col==undefined) {
        return;
    }
    let dynamic_code = '';
    let row = 1;
    for (let i = 0; i < tableobj.size; i++) {
        link = tableobj.get(i)[link_col].replace("http://","https://");
        link = link.replace("ebates.com","rakuten.com");
        alt = tableobj.get(i)[0];
        if (i%3 == 0) {
            dynamic_code = dynamic_code + `\n\t\t\t\t\t\t<!--row ${row}-->\n\t\t\t\t\t\t<tr><td style="line-height:0px;"><a href="${link}&eeid=\${eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=\${utmCampaign}&utm_content=\${utmDate}&ebtoken=\${Recipient.JWT_TOKEN}"><img alt="${alt}" border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/${imagefolder}/${i+2}.${imagetype}" width="520" style="border: 0; display: block;" /></a></td></tr>`
            row++;
        } else if ((i-1)%3==0){
            dynamic_code = dynamic_code +`\n\t\t\t\t\t\t<!--row ${row}-->\n\t\t\t\t\t\t<tr><td><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; padding:0; margin:0px;">` +`<tr><td style="line-height:0px;"><a href="${link}&eeid=\${eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=\${utmCampaign}&utm_content=\${utmDate}&ebtoken=\${Recipient.JWT_TOKEN}"><img alt="${alt}" border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/${imagefolder}/${i+2}.${imagetype}" width="260" style="border: 0; display: block;" /></a></td>`
        } else {
            dynamic_code = dynamic_code + `<td style="line-height:0px;"><a href="${link}&eeid=\${eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=\${utmCampaign}&utm_content=\${utmDate}&ebtoken=\${Recipient.JWT_TOKEN}"><img alt="${alt}" border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/${imagefolder}/${i+2}.${imagetype}" width="260" style="border: 0; display: block;" /></a></td></tr></table></td></tr>`
            row++;     
        }
        
        
    }
    
    let allcodes = get_header() + dynamic_code + get_footer();
    allcodes = allcodes.replace(/</g, "&lt;");
    allcodes = allcodes.replace(/>/g, "&gt;");
    
    $("#insertedcode").html(allcodes);
    $("#thecode").addClass("show-block");
};
    
//create codes in the clipboard
let clipboard = new ClipboardJS('.copybtn');

    clipboard.on('success', function(e) {
        alert('Code has been successfully copied to your clipboard!');
    });

    clipboard.on('error', function(e) {
        alert('Copy failed. Please try again.');
    });

    



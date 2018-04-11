//jQuery Table Builder for Pricing

var priceDataContainer = document.querySelector('.table-container');
var requestURL = 'https://hodgson-ken.github.io/assignments/TMS/data/service-pricing.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    var priceData = request.response;
    loadPrices(priceData);
}

function loadPrices(jsonObj) {
    var services = jsonObj['services'];

    for (var i = 0; i < services.length && services; i++) {
       
        //Create elements for structure
        var myTable = document.createElement('table');
            myTable.className = "services-table";
        var myHead = document.createElement('thead');
        var myHeadRow = document.createElement('tr');
        var myHeader = document.createElement('th');
            myHeader.setAttribute('colspan', "2");
            myHeader.textContent = services[i].type;
        var myBody = document.createElement('tbody');
        
        //Loop through tasks and prices
        var taskPrices = services[i].prices;
        for (var j = 0; j < taskPrices.length; j++) {
            var newRow = document.createElement('tr');
            var newColA = document.createElement('td');
            var newColB = document.createElement('td');
            myBody.appendChild(newRow);
            newRow.appendChild(newColA);
            newColA.textContent = taskPrices[j].task;
            newRow.appendChild(newColB);
            newColB.textContent = taskPrices[j].price;
        } 

        //Append and build structure
        priceDataContainer.appendChild(myTable);
        myTable.appendChild(myHead);
        myHead.appendChild(myHeadRow);
        myHeadRow.appendChild(myHeader);
        myTable.appendChild(myBody);
       // myBody.appendChild(myBodyRow);
       // myBodyRow.appendChild(myCell);

    }
}

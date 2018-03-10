var townDataContainer = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    var townData = request.response;
    loadTowns(townData);
}

function loadTowns(jsonObj) {
    var locations = jsonObj['towns'];

    for (var i = 0; i < locations.length && locations; i++) {
        if (locations[i].name == 'Franklin' || locations[i].name == 'Greenville' || locations[i].name == 'Springfield') {
            var myArticle = document.createElement('article');
                myArticle.className = locations[i].name;
            var myH3 = document.createElement('h3');            
            var myImgDiv = document.createElement('div');
                myImgDiv.className = 'child';
            var myImg = document.createElement('img');
                myImg.setAttribute('src', 'images/' + locations[i].name + '-city-small.jpg');
                myImg.setAttribute('alt', 'Local image of the city of ' + locations[i].name);
            var myParaDiv = document.createElement('div');
                myParaDiv.className = 'child';
            var myPara1 = document.createElement('p');
                myPara1.className = 'motto';
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myPara5 = document.createElement('p');
            var myList = document.createElement('ul');

            myH3.textContent = locations[i].name;
            myPara1.textContent = 'Motto: ' + locations[i].motto;
            myPara2.textContent = 'Year Founded: ' + locations[i].yearFounded;
            myPara3.textContent = 'Current Population: ' + locations[i].currentPopulation;
            myPara4.textContent = 'Average Rainfall: ' + locations[i].averageRainfall;
            myPara5.textContent = 'Events:';

            var townEvents = locations[i].events;
            for (var j = 0; j < townEvents.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = townEvents[j];
                myList.appendChild(listItem);
            }

            myArticle.appendChild(myH3);
            myArticle.appendChild(myImgDiv);
            myImgDiv.appendChild(myImg);
            myArticle.appendChild(myParaDiv);
            myParaDiv.appendChild(myPara1);
            myParaDiv.appendChild(myPara2);
            myParaDiv.appendChild(myPara3);
            myParaDiv.appendChild(myPara4);
            myParaDiv.appendChild(myPara5);
            myParaDiv.appendChild(myList);

            townDataContainer.appendChild(myArticle);
        }
    }
}

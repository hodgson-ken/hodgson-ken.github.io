//get high (h), low temp (l), then get average temp (t)
var h = parseInt(document.getElementById("high").innerHTML);
var l = parseInt(document.getElementById("low").innerHTML);
var t = (h + l) / 2;

//get wind speed (s)
var s = parseInt(document.getElementById("wind").innerHTML);

//calculate wind chill using given formula
var f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16)); 

//update id (chill) in page with value of (f)
document.getElementById("chill").innerHTML = f.toFixed(2);
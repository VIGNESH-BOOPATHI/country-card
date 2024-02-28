// var res = fetch("https://restcountries.com/v3.1/all").then((data)=>data.json())
// .then((data1)=>bar(data1));
// // console.log(res); 

// function bar(data1){
// console.log(data1);
// for(var i=0;i<data1.length;i++){
// var res = data1[i].latlng;
// foo(...res);
// }
// }
// //here we are using open
// function foo(lat,lon){
// var final_res=fetch('https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ebed7dac813eb97c2c2171adc839a350')
// .then((data2)=>data2.json()).then((data3)=>console.log(data3.main.temp))
// }

var res = fetch("https://restcountries.com/v3.1/all")
    .then((data) => data.json())
    .then((data1) => bar(data1));

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

function bar(data1) {
    console.log(data1);
    for (var i = 0; i < data1.length; i++) {
        var country = data1[i].name.common;
        var capital = data1[i].capital?.[0] || "NUN"; // Using logical OR to handle undefined or empty capital
        var col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${country}</h5>
                <h5 class="card-text">Capital: ${capital}</h5>
            </div>
        </div>`;
        row.append(col);
        container.append(row);
        document.body.append(container);
    }
  
}



//here we are using open weather map
function foo(lat,lon){
var final_res = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ebed7dac813eb97c2c2171adc839a350`)
.then((data2)=>data2.json()).then((data3)=>console.log(data3.main.temp))
}
var eggs = 10;
var money = 0;
var eggvalue = 0.5;
var eggs2 = 10;
var eggspersec = 0;
var chickens = 0;
var chickenMultiplier = 1;
var hatcheries = 0;
var hatcheryMultiplier = 1;
var factories = 0;
var factoryMultiplier = 1;

var eggs = JSON.parse(localStorage.eggs)
document.getElementById('eggs').innerHTML = eggs;
var money = JSON.parse(localStorage.money)
document.getElementById('money').innerHTML = money;
var chickens = JSON.parse(localStorage.chickens)
document.getElementById('chickens').innerHTML = chickens;
var hatcheries = JSON.parse(localStorage.hatcheries)
document.getElementById('hatcheries').innerHTML = hatcheries;
var factories = JSON.parse(localStorage.factories)
document.getElementById('factories').innerHTML = factories;




function getEggs(number){
    eggs = eggs + number;
	
    document.getElementById("eggs").innerHTML = eggs;
	 
};

function getChickens(number){
    chickens = chickens + number;
    document.getElementById("chickens").innerHTML = chickens;
};

function getHatcheries(number){
    hatcheries = hatcheries + number;
    document.getElementById("hatcheries").innerHTML = hatcheries;
};


function sell(){
    if(eggs >= 1){                                   //checks that the player can afford the cursor
        money = money + (eggs * eggvalue);                                   //increases number of cursors
    	eggs = eggs - eggs;                          //removes the eggs spent
        document.getElementById('eggs').innerHTML = eggs;  //updates the number of cursors for the user
        document.getElementById('money').innerHTML = money;  //updates the number of eggs for the user
		 
    };
    
};



function buyChicken(){
    var chickenCost = Math.floor(5 * Math.pow(1.1,chickens));     //works out the cost of this cursor
    if(money >= chickenCost){                                   //checks that the player can afford the cursor
        chickens = chickens + 1;                                   //increases number of cursors
    	money = money - chickenCost;                          //removes the eggs spent
        document.getElementById('chickens').innerHTML = chickens;  //updates the number of cursors for the user
        document.getElementById('money').innerHTML = money;  //updates the number of eggs for the user
		 
    };
    var nextCost = Math.floor(5 * Math.pow(1.1,chickens));       //works out the cost of the next cursor
    document.getElementById('chickenCost').innerHTML = nextCost;  //updates the cursor cost for the user
};


function buyHatchery(){
    var hatcheryCost = Math.floor(500 * Math.pow(1.1,hatcheries));     //works out the cost of this cursor
    if(money >= hatcheryCost){                                   //checks that the player can afford the cursor
        hatcheries = hatcheries + 1;                                   //increases number of cursors
    	money = money - hatcheryCost;                          //removes the eggs spent
        document.getElementById('hatcheries').innerHTML = hatcheries;  //updates the number of cursors for the user
        document.getElementById('money').innerHTML = money;  //updates the number of eggs for the user
    };
    var nextCost = Math.floor(500 * Math.pow(1.1,hatcheries));       //works out the cost of the next cursor
    document.getElementById('hatcheryCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

function buyFactory(){
    var factoryCost = Math.floor(50000 * Math.pow(1.1,factories));     //works out the cost of this cursor
    if(money >= factoryCost){                                   //checks that the player can afford the cursor
        factories = factories + 1;                                   //increases number of cursors
    	money = money - factoryCost;                          //removes the eggs spent
        document.getElementById('factories').innerHTML = factories;  //updates the number of cursors for the user
        document.getElementById('money').innerHTML = money;  //updates the number of eggs for the user
    };
    var nextCost = Math.floor(50000 * Math.pow(1.1,factories));       //works out the cost of the next cursor
    document.getElementById('factoryCost').innerHTML = nextCost;  //updates the cursor cost for the user
};



window.setInterval(function(){
	
	var eggs2=eggs
	document.getElementById('eggs2').innerHTML = eggs2;
	var eggspersec=chickens * chickenMultiplier
	document.getElementById('eggspersec').innerHTML = eggspersec;
	achievementGet();
		
	
	
	
		
}, 1);



window.setInterval(function(){
	localStorage.eggs = eggs
	localStorage.money = money
	localStorage.chickens = chickens
	localStorage.hatcheries = hatcheries
	localStorage.factories = factories
	
	
	
	
		
}, 60);	





function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

window.setInterval(function(){
	
	getEggs(chickens * chickenMultiplier);
	getChickens(hatcheries * hatcheryMultiplier);
	getHatcheries(factories * factoryMultiplier);
	
}, 1000);





function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showImage() {
    var x = document.getElementById("Sell-1");
    x.style.opacity = 1;
}


function achievementGet() {
	if (money >= 1) {
		showImage();
	} else {
	}
}

function fnum(number) {
  if (number < 1000) return number.toFixed(2);
  units = [ "", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc", "UDc", "DDc", "TDc", "QaD", "QiD", "SxD", "SpD", "OcD", "NoD", "Vi" ];
  e1 = Math.floor(number.toExponential().substr(number.toExponential().indexOf("e") + 2) / 3);
  e2 = Math.floor(number.toExponential().substr(number.toExponential().indexOf("e") + 2) % 3);
  number /= Math.pow(10, e1 * 3);
  number = (Math.floor(number * 100) / 100).toFixed(2);
  switch(77 % ((e2 * 2) + 3)) {
    case 0: return number.substr(0, number.indexOf(".")) + units[e1];
    case 2: return number + units[e1];
  }
}


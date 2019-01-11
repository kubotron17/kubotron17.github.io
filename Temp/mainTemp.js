var numMoney = 15;


var numGlobalProfitMulti = 1;
var numGlobalIntervalMulti = 1;


var numFactoryAmount = 0;
var factoryPrice = 15;
var numFactoryUpgradePrice = 25;
var numFactoryBaseUpgradePrice = 25;

var numProfitPerFactory = 1;
var numFactoryTickProfit = 0;

var numFactoryInterval = 1000;
var isFactoryRunning = false;
var FactoryTimer;

var upFactoryProfitUpgradeAmount = 0;
var factoryProfitUpgradePrice = 150;
var upFactoryProfitUpgradePrice = 500;
var upFactoryProfitBaseUpgradePrice = 500;

var progressBarFactoryTimer;
var progressBarFactory;



var numMoneyPS = 0;


var textTimer = setInterval(updateText, 500);
var StatsTimer = setInterval(updateStats, 1000);
function updateText()
{
    document.getElementById("disMoney").innerHTML = "$" + numberformat.formatShort(numMoney);

    
}
function updateStats()
{
    numMoneyPS = numFactoryTickProfit + (numPowerplantTickProfit / 4);
    document.getElementById("Stats").innerHTML = "Money/s = $" + numMoneyPS + "<br>Factory Money/s = $" + numFactoryTickProfit + "<br>Powerplant Money/s = $" + (numPowerplantTickProfit / 4);
}


function buyFactory()
{
    if (numFactoryAmount === 0 && numMoney >= factoryPrice) {
        numMoney -= factoryPrice;
        updateText();
        numFactoryAmount++;

        numFactoryTickProfit = (numFactoryAmount * numProfitPerFactory) * numGlobalProfitMulti;

        document.getElementById("buyFactory").value = "Buy Factory  $" + numberformat.formatShort(numFactoryUpgradePrice);
        FactoryTimer = setInterval(tickFactory, numFactoryInterval);

        progressBarFactory = 1;
        document.getElementById("progressBarFactory").innerHTML = "1.0";
        progressBarFactoryTimer = setInterval(tickProgressBarFactory, 200);
    }
    else if (numFactoryAmount >= 1 && numMoney >= numFactoryUpgradePrice) {
        numMoney -= numFactoryUpgradePrice;
        updateText();
        numFactoryAmount++;

        numFactoryTickProfit = (numFactoryAmount * numProfitPerFactory) * numGlobalProfitMulti;

        numFactoryUpgradePrice = numFactoryBaseUpgradePrice * 1.16 ** numFactoryAmount;

        document.getElementById("buyFactory").value = "Buy Factory  $" + numberformat.formatShort(numFactoryUpgradePrice);
    }
}
function tickFactory()
{
    numMoney += numFactoryTickProfit;

    progressBarFactory = 1;
    document.getElementById("progressBarFactory").innerHTML = "1.0";

    updateText();
}
function tickProgressBarFactory()
{
    progressBarFactory -= 0.2;
    document.getElementById("progressBarFactory").innerHTML = progressBarFactory.toFixed(1);
}
function upgradeFactoryProfit()
{
    if (upFactoryProfitUpgradeAmount === 0 && numMoney >= factoryProfitUpgradePrice) {
        numMoney -= factoryProfitUpgradePrice;
        updateText();
        upFactoryProfitUpgradeAmount++;

        numProfitPerFactory *= 2;
        numFactoryTickProfit = (numFactoryAmount * numProfitPerFactory) * numGlobalProfitMulti;

        document.getElementById("upgradeFactoryProfit").value = "Factory Profit x2  $" + numberformat.formatShort(upFactoryProfitUpgradePrice);
    }
    else if (upFactoryProfitUpgradeAmount >= 1 && numMoney >= upFactoryProfitUpgradePrice) {
        numMoney -= upFactoryProfitUpgradePrice;
        updateText();
        upFactoryProfitUpgradeAmount++;

        numProfitPerFactory *= 2;
        numFactoryTickProfit = (numFactoryAmount * numProfitPerFactory) * numGlobalProfitMulti;

        upFactoryProfitUpgradePrice *= 6;

        document.getElementById("upgradeFactoryProfit").value = "Factory Profit x2  $" + numberformat.formatShort(upFactoryProfitUpgradePrice);
    }
}


var numPowerplantAmount = 0;
var powerPlantPrice = 250;
var numPowerplantUpgradePrice = 350;
var numPowerplantBaseUpgradePrice = 350;

var numProfitPerPowerplant = 10;
var numPowerplantTickProfit = 0;

var numPowerplantInterval = 4000;
var isPowerplantRunning = false;
var PowerplantTimer;

var upPowerplantProfitUpgradeAmount = 0;
var powerPlantProfitUpgradePrice = 1500;
var upPowerplantProfitUpgradePrice = 5000;
var upPowerplantProfitBaseUpgradePrice = 5000;

function buyPowerplant()
{
    if (numPowerplantAmount === 0 && numMoney >= powerPlantPrice) {
        numMoney -= powerPlantPrice;
        updateText();
        numPowerplantAmount++;

        numPowerplantTickProfit = (numPowerplantAmount * numProfitPerPowerplant) * numGlobalProfitMulti;

        document.getElementById("buyPowerplant").value = "Buy Powerplant  $" + numberformat.formatShort(numPowerplantUpgradePrice);
        PowerplantTimer = setInterval(tickPowerplant, numPowerplantInterval);
    }
    else if (numPowerplantAmount >= 1 && numMoney >= numPowerplantUpgradePrice) {
        numMoney -= numPowerplantUpgradePrice;
        updateText();
        numPowerplantAmount++;

        numPowerplantTickProfit = (numPowerplantAmount * numProfitPerPowerplant) * numGlobalProfitMulti;

        numPowerplantUpgradePrice = numPowerplantBaseUpgradePrice * 1.09 ** numPowerplantAmount;

        document.getElementById("buyPowerplant").value = "Buy Powerplant  $" + numberformat.formatShort(numPowerplantUpgradePrice);
    }
}
function tickPowerplant()
{
    numMoney += numPowerplantTickProfit;
    updateText();
}
function upgradePowerplantProfit()
{
    if (upPowerplantProfitUpgradeAmount === 0 && numMoney >= powerPlantProfitUpgradePrice) {
        numMoney -= powerPlantProfitUpgradePrice;
        updateText();
        upPowerplantProfitUpgradeAmount++;

        numProfitPerPowerplant *= 2;
        numPowerplantTickProfit = (numPowerplantAmount * numProfitPerPowerplant) * numGlobalProfitMulti;

        document.getElementById("upgradePowerplantProfit").value = "Powerplant Profit x2  $" + numberformat.formatShort(upPowerplantProfitUpgradePrice);
    }
    else if (upPowerplantProfitUpgradeAmount >= 1 && numMoney >= upPowerplantProfitUpgradePrice) {
        numMoney -= upPowerplantProfitUpgradePrice;
        updateText();
        upPowerplantProfitUpgradeAmount++;

        numProfitPerPowerplant *= 2;
        numPowerplantTickProfit = (numPowerplantAmount * numProfitPerPowerplant) * numGlobalProfitMulti;

        upPowerplantProfitUpgradePrice *= 6;

        document.getElementById("upgradePowerplantProfit").value = "Powerplant Profit x2  $" + numberformat.formatShort(upPowerplantProfitUpgradePrice);
    }
}




var buttonsRow1;
function pageStart()
{
    document.getElementById("buyFactory").value = "Buy Factory  $" + numberformat.formatShort(factoryPrice);
    document.getElementById("upgradeFactoryProfit").value = "Factory Profit x2  $" + numberformat.formatShort(factoryProfitUpgradePrice);


    var timenow = new Date();
    //document.title = "Page Loaded " + timenow.getHours() + ":" + timenow.getMinutes() + ":" + timenow.getSeconds();
    buttonsRow1 = document.getElementsByClassName("button");
    var firstLocationLeft = 5;
    $.each(buttonsRow1, function ()
    {
        this.style.left = firstLocationLeft + "px";
        firstLocationLeft = firstLocationLeft + 55 + this.offsetWidth;
        //this.style.left = firstLocationLeft + "px";
        console.debug(firstLocationLeft);
    });
    buttonsRow2 = document.getElementsByClassName("button2");
    var firstLocationLeft2 = 5;
    $.each(buttonsRow2, function ()
    {
        this.style.top = "160px";
        this.style.left = firstLocationLeft2 + "px";
        firstLocationLeft2 = firstLocationLeft2 + 5 + this.offsetWidth;
        console.debug(firstLocationLeft2);
    });
}
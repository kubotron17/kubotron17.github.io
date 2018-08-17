var numMoney = 50;

var numGenMoney = 1;
var amountUpgradeGenMoney = 1;
var priceUpgradeGenMoney = 20;
var bPriceUpgradeGenMoney = 20;

var boughtFactory = false;
var numFactoryLvl = 0;
var priceFactory = 50;
var priceUpgradeFactory = 75;
var bPriceUpgradeFactory = 75;

var intervalFactory = 1000;
var timerFactory;
var runningFactory = false;
var timerProgressBarFactory;
var progressBarFactory;


var statsTimer = setInterval(updateStats, 2000);
function updateStats(){
    //numMoney += 6;
    document.getElementById("Stat").innerHTML = "Money/click =" + numGenMoney + "<br>Money/second =" + numFactoryLvl;
    //document.getElementById("disMoney").innerHTML = "$" + numberformat.formatShort(numMoney);
}

function updateDis()
{
    var timeAtStart = Date.now();
    document.getElementById("disMoney").innerHTML = "$" + numberformat.formatShort(numMoney);

    document.getElementById("genMoneyClick").value = "Gen $" + numberformat.formatShort(numGenMoney);
    document.getElementById("upgradeGenMoneyClick").value = "+$" + numberformat.formatShort(amountUpgradeGenMoney) + " Gen Click  ||  " + "$" + numberformat.formatShort(priceUpgradeGenMoney);

    var timeAtEnd = Date.now();
    console.debug("StartTime: " + timeAtStart + "ms  EndTime: " + timeAtEnd + "ms   Difference: " + (timeAtEnd - timeAtStart) + "ms");
}
function genMoney()
{
    numMoney += numGenMoney;
    document.getElementById("disMoney").innerHTML = "$" + numberformat.formatShort(numMoney);
}
function upgradeGenMoney()
{
    if (numMoney >= priceUpgradeGenMoney) {
        numMoney -= priceUpgradeGenMoney;
        numGenMoney += amountUpgradeGenMoney;

        priceUpgradeGenMoney *= 1.25;

        document.getElementById("upgradeGenMoneyClick").value = "+$" + numberformat.formatShort(amountUpgradeGenMoney) + " Gen Click  ||  " + "$" + numberformat.formatShort(priceUpgradeGenMoney);
        document.getElementById("genMoneyClick").title = "Gen $" + numberformat.formatShort(numGenMoney);
        updateDis();
    }
}

function buyFactory()
{
    if (boughtFactory === false && numMoney >= priceFactory) {
        numMoney -= priceFactory;
        numFactoryLvl++;
        boughtFactory = true;

        document.getElementById("buyFactoryClick").value = "Buy Factory  $" + numberformat.formatShort(priceUpgradeFactory);
        document.getElementById("buyFactoryClick").title = "+$" + numberformat.formatShort(numFactoryLvl) + "/s";

        startFactory();
        updateDis();
    }
    else if (boughtFactory === true && numMoney >= priceUpgradeFactory) {
        numMoney -= priceUpgradeFactory;
        numFactoryLvl++;
        priceUpgradeFactory = bPriceUpgradeFactory * 1.08 ** numFactoryLvl;
        document.getElementById("buyFactoryClick").value = "Buy Factory  $" + numberformat.formatShort(priceUpgradeFactory);
        document.getElementById("buyFactoryClick").title = "+$" + numberformat.formatShort(numFactoryLvl) + "/s";
        updateDis();
    }
}

function startFactory()
{
    if (runningFactory === false) {
        runningFactory = true;
        timerFactory = setInterval(tickFactory, intervalFactory);

        progressBarFactory = 1;
        document.getElementById("progressBarFactory").innerHTML = "1.0";
        timerProgressBarFactory = setInterval(tickProgressBarFactory, 200);
    }
}

function tickFactory()
{
    numMoney += numFactoryLvl;
    progressBarFactory = 1;
    document.getElementById("progressBarFactory").innerHTML = "1.0";
    updateDis();
}

function tickProgressBarFactory()
{
    progressBarFactory -= 0.2;
    document.getElementById("progressBarFactory").innerHTML = progressBarFactory.toFixed(1);
}

var numCheatMoney = 0;
function moneyCheat()
{
    numCheatMoney += 500;
    numMoney += numCheatMoney;
    // updateDis();
    updateThisDis(0, "disMoney", "inner", "$" + numberformat.formatShort(numMoney));
}

var autoClickerRunning = false;
var timerAutoClicker;

function autoClicker()
{
    if (autoClickerRunning === false) {
        timerAutoClicker = setInterval(genMoney, 350);
        autoClickerRunning = true;
        document.getElementById("autoClickerButton").value = "Stop";
    }
    else if (autoClickerRunning === true) {
        clearInterval(timerAutoClicker);
        autoClickerRunning = false;
        document.getElementById("autoClickerButton").value = "Start";
    }
}
function updateThisDis(eMon, eId, eWhat, eString)
{
    if (eMon === 1) {
        document.getElementById("disMoney").innerHTML = "$" + numberformat.formatShort(numMoney);
    }
    else if (eWhat === "inner") {
        document.getElementById(eId).innerHTML = eString;
    }
    else if (eWhat === "value") {
        document.getElementById(eId).value = eString;
    }
    else if (eWhat === "title") {
        document.getElementById(eId).title = eString;
    }
}
var buttonsRow1;
function pageStart()
{
    var timenow = new Date();
    document.title = "Page Loaded " + timenow.getHours() + ":" + timenow.getMinutes() + ":" + timenow.getSeconds();
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
    //buttonsRow1.forEach(function (button, index)
    //{
    //    button.style.left = firstLocationLeft + "px";
    //    firstLocationLeft += 40;
    //}
    //);
    document.getElementById("upgradeGenMoneyClick").value = "+$" + numberformat.formatShort(amountUpgradeGenMoney) + " Gen Click  ||  " + "$" + numberformat.formatShort(priceUpgradeGenMoney);
    document.getElementById("disMoney").innerHTML = "$" + numberformat.formatShort(numMoney);
    console.debug(numMoney);
    document.title = "IdleGame";
}
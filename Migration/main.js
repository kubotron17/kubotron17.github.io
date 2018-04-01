var Money = 10;

var ClickAmount = 1;
var UpgradeClickCost = 25;

var GenAmount = 0;
var GenTickAmount = 1;
var GenTickInterval = 4000;
var GenPrice = 59;
var GenStart = false;
var GenRunning = false;

var GenProfitUpgradePrice = 250;
var GenProfitUpgradeAmount = 1;

var DisTimer = setInterval(UpdateDis, 100);
var ManifestTimer = setInterval(UpdateManifest, 250);
var GenCheckTimer = setInterval(GenCheck, 250);

function Click(){
    Money += ClickAmount;
}

function UpgradeClick(){
    if(Money >= UpgradeClickCost){
        Money -= UpgradeClickCost;
        UpgradeClickCost *= 1.20;
        UpgradeClickCost = UpgradeClickCost.toFixed(2);
        ClickAmount ++;
        document.getElementById("UpgradeClick").value = "+1 Click   $" + UpgradeClickCost;
    }
}

function UpdateDis(){
    document.getElementById("DisMoney").innerHTML = "$" + round(Money, 2) + "   GenTick: " + GenTickAmount + " GenProfitUpg: " + GenProfitUpgradeAmount;
}

function UpdateManifest(){
    document.getElementById("Manifest").innerHTML = "You Own: <br>Clicks: " + ClickAmount + "<br>Generators: " + GenAmount + "<br><br><br>You Generate:<br>$" + ClickAmount + "/Click<br>$" + round(((GenAmount * GenTickAmount) / (GenTickInterval / 1000)), 2) + "/Sec";
    document.getElementById("GenInfo").innerHTML = "Generators: " + GenAmount + "<br>GenTick: $" + GenTickAmount + "<br>Gentime: " + (GenTickInterval / 1000) + "<br>$" + round(((GenAmount * GenTickAmount) / (GenTickInterval / 1000)), 2) + "/Sec";
}

function BuyGen(){
    if(Money >= GenPrice){
        Money -= GenPrice;
        GenAmount ++;
        GenPrice = ((GenPrice * 1.1 ** GenAmount) /1.3 );
        GenPrice = round(GenPrice, 2);
        if(GenRunning == false){
         GenStart = true;   
        }
        document.getElementById("Gen").value = "+1 Gen   $" + round(GenPrice, 2);
    }
    else{
        console.log("You need additional  $" + (GenPrice - Money) +" to buy this");
    }
}

function UpgradeGenProfit(){
    if(Money >= GenProfitUpgradePrice){
        Money -= GenProfitUpgradePrice;
        GenProfitUpgradePrice *= 1.3;
        GenProfitUpgradePrice = round(GenProfitUpgradePrice, 2);
        GenTickAmount += GenProfitUpgradeAmount;
        if(GenTickAmount < 8 ){
            GenProfitUpgradeAmount = 1;
        }
        else if(GenTickAmount < 32){
            GenProfitUpgradeAmount = 2;
        }
        else if(GenTickAmount < 256){
            GenProfitUpgradeAmount = 4;
        }
        else{
            GenProfitUpgradeAmount = 8;
        }
        document.getElementById("UpgradeGenProfit").value = "+$" + GenProfitUpgradeAmount + " Gen Profit   $" + GenProfitUpgradePrice;
    }
}

function GenCheck(){
    if(GenStart == true){
        StartGen();
        GenStart = false;
        GenRunning = true;
    }
}

function StartGen(){
    var GenTimer = setInterval(GenTick, GenTickInterval);
}

function GenTick(){
    Money += GenAmount * GenTickAmount;
}

function Clickx5(){
    Click();
    Click();
    Click();
    Click();
    Click();
}

function round(value, decimals) {
    return Number(Math.round(value +'e'+ decimals) +'e-'+ decimals).toFixed(decimals);
}

function Start(){
    document.getElementById("Gen").value = "+1 Gen   $" + GenPrice;
    document.getElementById("UpgradeClick").value = "+1 Click   $" + UpgradeClickCost;
    document.getElementById("UpgradeGenProfit").value = "+$" + round(GenProfitUpgradeAmount, 2) + " Gen Profit   $" + GenProfitUpgradePrice;
    var GenPrice = 59;
}
var mainGenCount = 0;
var mainGenTick = 1;

var mainGenBasePrice = 4;
var mainGenPrice = 4;

var mainGenInterval = 1000;

var mainGenRunning = false;

var mainGenTickMulti = 1;

var mainGenProfitLvl = 1;
var mainGenBaseProfitPrice = 20;
var mainGenProfitPrice = 20;

var mainGenSpeedLvl = 1;
var mainGenBaseSpeedPrice = 25;
var mainGenSpeedPrice = 25;

var mainGenTimer = setInterval(MainGenTick, mainGenInterval);

function BuyMainGen(){
    if(money >= mainGenPrice){
        if(mainGenRunning == true){
            money -= mainGenPrice;
            mainGenCount ++;
            mainGenPrice = round(mainGenBasePrice * 1.15 ** mainGenCount, 1);
            document.getElementById("MainGen").value = mainGenCount + "  MainGen  $" + mainGenPrice;
        }
        else if(mainGenRunning == false){
            money -= mainGenPrice;
            mainGenCount ++;
            mainGenPrice = round(mainGenBasePrice * 1.15 ** mainGenCount, 1);
            document.getElementById("MainGen").value = mainGenCount + "  MainGen  $" + mainGenPrice;
            StartMainGen();
            mainGenRunning = true;
        }
    }   
}

function StartMainGen(){
    mainGenTimer = setInterval(MainGenTick, mainGenInterval);
}

function MainGenTick(){
    enemyCurrentHp -= (mainGenCount * (mainGenTick * mainGenTickMulti));
    EnemyDeathCheck();
}

function USpeedMainGen(){
    if(mainGenSpeedPrice <= money){
        money -= mainGenSpeedPrice;
        mainGenSpeedLvl ++;
        mainGenSpeedPrice = round(mainGenBaseSpeedPrice * 2 ** mainGenSpeedLvl, 1); 
        document.getElementById("MainGenSpeed").value = "MainGenSpeed x2  $" + mainGenSpeedPrice;
        mainGenInterval /= 2;
        clearInterval(mainGenTimer);
        StartMainGen();
    }
}

function UProfitMainGen(){
    if(mainGenProfitPrice <= money){
        money -= mainGenProfitPrice;
        mainGenProfitLvl += 3;
        mainGenProfitPrice = round(mainGenBaseProfitPrice * 4 ** mainGenProfitLvl,1);
        document.getElementById("MainGenProfit").value = "MainGenProfit x3  $" + mainGenProfitPrice;
        mainGenTickMulti *= 3;
    }
}
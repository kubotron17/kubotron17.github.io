var money = 4;

var enemyCount = 1;

var enemyMaxBaseHp = 10;
var enemyMaxHp = 10;
var enemyCurrentHp = 10;

var enemyBaseReward = 1;
var enemyReward = 1;

var DisUpdateTimer = setInterval(DisUpdate, 250);

function DisUpdate(){
    document.getElementById("DisMoney").innerHTML = "$" + round(money, 1);
    document.getElementById("DisEnemyHP").innerHTML = enemyCount + "  " + round(enemyCurrentHp, 1) + "/" + round(enemyMaxHp, 1) + "HP";
    document.getElementById("Stat1").innerHTML = mainGenCount * (mainGenTick * mainGenTickMulti) + "$  Per Tick";
}


function EnemyDeathCheck(){
    if(enemyCurrentHp <= 0){
        enemyCount ++;
        EnemyRewardIncrease();
        money += enemyReward;
        NewEnemy();
    }
}

function NewEnemy(){
    //enemyMaxHp = round((enemyMaxBaseHp * 1.2 ** enemyCount) * ((Math.random()*35 + 85) / 100), 1);
    enemyMaxHp = round(enemyMaxBaseHp * 1.08 ** enemyCount, 1);
    enemyCurrentHp = enemyMaxHp;
    //console.log(((Math.random()*35 + 85) / 100));
}
function EnemyRewardIncrease(){
    if(enemyCount % 10 == 0){
        enemyReward = enemyBaseReward * 1.5 ** (enemyCount / 10); 
        console.log(enemyReward + " EnemyReward");
    }
}

function Start(){
    clearInterval(mainGenTimer);
}

function round(value, decimals) {
    return Number(Math.round(value +'e'+ decimals) +'e-'+ decimals).toFixed(decimals);
}
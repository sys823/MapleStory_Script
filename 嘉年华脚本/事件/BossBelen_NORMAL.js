/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：贝伦 普通模式
 *  @Author Kent 
 */
//自定义复活次数
var reviveCount = 3;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("BossBelen_NORMAL");
    var map = eim.setInstanceMap(105200410);
    map.resetFully();
    eim.getMapFactoryMap(105200410).killAllMonsters(false);
    /*var mob = em.getMonster(8930100);
     map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-209, 443));*/
    eim.startEventTimer(15 * 60 * 1000); //15分钟
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 105200410) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 105200000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function monsterValue(eim, mobId) {
	switch (mobId) {
        case 8930100:
            
            break;
    }
    return 1;
}

function allMonstersDead(eim) {
    var map = eim.getMapInstance(0);
			var players = map.getCharacters().iterator();
		    while (players.hasNext()) {
			   var player = players.next();
			   player.setPQLog("贝伦");
		    }
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = eim.getMapInstance(0);
        player.eventRevive();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(105200000);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}
function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}
function pickUpItem(eim, player, itemID) {
}
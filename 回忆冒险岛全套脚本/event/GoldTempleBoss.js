function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("GoldTempleBoss");
    var map = eim.setInstanceMap(252030100);
    map.resetFully();
    eim.getMapFactory().getMap(252030100).killAllMonsters(false);
    var mob = em.getMonster(8800200);
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 50);
    modified.setOMp(mob.getMobMaxMp() * 9000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(984, 513));
    eim.startEventTimer(1000 * 60 * 60); // 30 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}
function monsterDrop(eim, player, mob) {}
function changedMap(eim, player, mapid) {
    if (mapid != 252030100) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function allMonstersDead(eim) {
    //em.broadcastServerMsg(5120027, "麦格纳斯已被消灭，请在1分钟内点击NPC获得奖励。" ,true);
    //eim.startEventTimer(1000 * 60); //10 min
    //eim.getMapInstance(0).spawnNpc(9390123, new java.awt.Point(599, -1386));
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
}

function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}
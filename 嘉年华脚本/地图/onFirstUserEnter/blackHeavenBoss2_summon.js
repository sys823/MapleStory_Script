function start() {
    var eim = ms.getEventInstance();
    var em = ms.getEventManager("BossSiwu_NORMAL");
    if (eim != null && ms.getMap().getMobsSize() <= 0) {
        var mon = em.getMonster(8950101);
        mon.changeLevelmod(220, 500);
        mon.getChangedStats().setOHp(200000000000);
        mon.setHp(200000000000);
        mon.setReduceDamageType(3);
        eim.registerMonster(mon);
        ms.getMap().spawnMonsterOnGroundBelow(mon, new java.awt.Point(-2, -16));
    }
    ms.dispose();
}
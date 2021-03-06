/*  创新型副本  
 *  组队任务副本
 *  功能：玩家进行答题、保护MOB、跳跳、消灭BOSS
 *  作者：AND 358122354
 */
var reviveCount = 1;//自定义复活次数
function init() {
    em.setProperty("state", "0");
	em.setProperty("Next", "0");
    em.setProperty("leader", "false");
}

function setup(eim, leaderid) {
    em.setProperty("state","1");
    em.setProperty("leader", "true");
	var eim = em.newInstance("Shower");
    var map = eim.setInstanceMap(911006100);//跳跃吧，金币SHOWER
	em.setProperty("opendati","0");//0为暂时不开启答题
    eim.setInstanceMap(911006100).resetFully();
    eim.setInstanceMap(922000000).resetFully();//玩具工厂<第4地区>
    eim.setInstanceMap(931050431).resetFully();//闪光的时间神殿
	eim.getMapInstance(911006100).spawnNpc(2142900, new java.awt.Point(-609, -22));
	eim.getMapInstance(922000000).spawnNpc(2142900, new java.awt.Point(5111, 161));
	eim.getMapInstance(931050431).spawnNpc(2142900, new java.awt.Point(-848,-571));
    eim.startEventTimer(1000*60*30); //30分钟
	em.schedule("Start1", 1000 * 50,eim);//1分钟后触发事件
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
	map.startMapEffect("游戏将在1分钟后开始！请爬到绳子上方，大家快点保护长老！", 5120026);
}
function register(eim) {
	var map = em.getMapFactoryMap(911006100);
	var players = map.getCharacters().iterator();
    while (players.hasNext()) {
		var player = players.next();
		eim.registerPlayer(player);
    }
}
function Start1(eim){//召唤怪物
	var XYList = Array(//Array(-634,-22),
						//Array(-541,-22),
						//Array(-451,-22),
						Array(-359,-22),
						//Array(-272,-22),
						//Array(-178,-22),
						//Array(-89,-22),
						//Array(-1,-22),
						//Array(93,-22),
						//Array(183,-22),
						//Array(268,-22),
						Array(359,-22)
						//Array(454,-22),
						//Array(547,-22),
						//Array(637,-22)
						);
	for (var i = 0;i<XYList.length ;i++ ){
		var mob = em.getMonster(8240004);
		var stats = mob.getStats();
		mob.getStats().setChange(true);
		mob.changeLevel(250);
		stats.setHp(99999999999);
		stats.setMp(mob.getMobMaxMp());
		stats.setPhysicalAttack(10000000);
		stats.setMagicAttack(10000000);
		var ostats = em.newMonsterStats();
		ostats.setOHp(99999999999);
		ostats.setOMp(mob.getMobMaxMp());
		mob.disableDrops();
		mob.setOverrideStats(ostats);
		eim.registerMonster(mob);
		var mapForMob = eim.getMapInstance(911006100);
		mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(XYList[i][0],XYList[i][1]));//待定9
	}
	em.setProperty("Round","0");//循环物品出货
	var map = eim.getMapInstance(0);
	map.startMapEffect("啊！怪物召唤出来好怕怕，碰一下就死了。", 5120026);
	em.schedule("Start2", 1000 * 5,eim);//5s后触发事件
	em.schedule("Start3", (1000 * 60*3)+5000,eim);//3分钟后触发事件检测是否到达指定任务
}
function Start2(eim){//召唤物品
	var map = eim.getMapInstance(0);
	var XYItemList = Array(Array(-634,-22),
						Array(-541,-22),
						Array(-451,-22),
						Array(-359,-22),
						Array(-272,-22),
						Array(-178,-22),
						Array(-89,-22),
						Array(-1,-22),
						Array(93,-22),
						Array(183,-22),
						Array(268,-22),
						Array(359,-22),
						Array(454,-22),
						Array(547,-22),
						Array(637,-22));
	var A = Math.floor(Math.random()*XYItemList.length);
	if(parseInt(em.getProperty("Round"))==0){
		em.schedule("Start2", 1000 * 1,eim);//15s后触发事件
		em.setProperty("Round",(parseInt(em.getProperty("Round"))+1)+"");
		em.setProperty("opendati","1");//1为标记可以开始答题
		em.setProperty("dati","0");
		map.startMapEffect("所有队员点NPC答题！限时3分钟，勋章将在26分05秒开始消失,抓紧哦！", 5120026);
	}else if(parseInt(em.getProperty("Round"))<=10&&parseInt(em.getProperty("opendati"))==1){
		em.setProperty("Round",(parseInt(em.getProperty("Round"))+1)+"");
		em.getMapFactoryMap(911006100).spawnAutoDrop(4031994, new java.awt.Point(XYItemList[A][0],XYItemList[A][1]));//4031994为蘑菇金牌
		em.schedule("Start2", 1000 * 3,eim);//3s后触发事件
	}else if(parseInt(em.getProperty("Round"))<=15&&parseInt(em.getProperty("opendati"))==1){
		em.setProperty("Round",(parseInt(em.getProperty("Round"))+1)+"");
		em.getMapFactoryMap(911006100).spawnAutoDrop(4031994, new java.awt.Point(XYItemList[A][0],XYItemList[A][1]));//4031994为蘑菇金牌
		em.schedule("Start2", 1000 * 10,eim);//10s后触发事件
	}else if(parseInt(em.getProperty("Round"))<=20&&parseInt(em.getProperty("opendati"))==1){
		em.setProperty("Round",(parseInt(em.getProperty("Round"))+1)+"");
		em.getMapFactoryMap(911006100).spawnAutoDrop(4031994, new java.awt.Point(XYItemList[A][0],XYItemList[A][1]));//4031994为蘑菇金牌
		em.schedule("Start2", 1000 * 15,eim);//15s后触发事件
	}
}
function Start3(eim){//执行答题模块检测
	var map = eim.getMapInstance(0);
	var Count = 80;//设置需要答题数
	if(parseInt(em.getProperty("dati"))>=Count &&parseInt(em.getProperty("opendati"))!=2){//判断是否答题达到50题
		em.setProperty("opendati","2");//2为标记答题结束
		em.schedule("Start4", 1000 * 3,eim);//执行开启宝藏乱飞
		map.startMapEffect("过关成功!", 5120026);
		eim.getMapFactoryMap(911006100).killAllMonsters(true);
	}else if(parseInt(em.getProperty("dati"))<Count){
		map.startMapEffect("闯关失败!", 5120026);
		em.setProperty("opendati","0");
		scheduledTimeout(eim);
	}
}
function Start4(eim){
	var finalitem = Array();
	var ItemList = Array(
		Array(4031997,1000),
		Array(4031997,1000),
		Array(4031997,1000));//这里设置乱飞的物品
	var chance = Math.floor((Math.random()*999)+1);
	for (var a = 0;a<ItemList.length ;a++ ){
		if(chance<=ItemList[a][1]){
			finalitem.push(ItemList[a]);
		}
	}
	var map = eim.getMapInstance(0);
	map.startMapEffect("我擦勒！宝藏开始乱飞了！赶紧拣待会还要保护长老呢！", 5120026);
	for (var i = 0;i<6 ;i++ ){
		var X = Math.floor((Math.random()*1200)-600);//整图随机
		var Y = -(Math.floor((Math.random()*504)+22));
		em.getMapFactoryMap(911006100).spawnAutoDrop(finalitem[Math.floor(Math.random()*finalitem.length)][0], new java.awt.Point(X,Y));
	}
	em.schedule("Start5", 1000 * 10,eim);
}
function Start5(eim){//先召唤要保护的怪物
		var mobid =9402011;//胆怯的长老斯坦
		var mob = em.getMonster(mobid);
		mob.getStats().setChange(true);
		mob.changeLevel(200);
		mob.getChangedStats().setOHp(2000);
		mob.setHp(2000);
		mob.disableDrops();
		eim.registerMonster(mob);
		var mapForMob = eim.getMapInstance(911006100);
		mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-103,-22));//待定9
		var mobid =9402011;//胆怯的长老斯坦
		var mob8 = em.getMonster(mobid);
		mob8.getStats().setChange(true);
		mob8.changeLevel(200);
		mob8.getChangedStats().setOHp(2000);
		mob8.setHp(2000);
		mob8.disableDrops();
		eim.registerMonster(mob8);
		var mapForMob8 = eim.getMapInstance(911006100);
		mapForMob8.spawnMonsterOnGroundBelow(mob8, new java.awt.Point(103,-22));//待定9
		var map = eim.getMapInstance(0);
		map.startMapEffect("20秒后怪物来袭，请保护好长老呀！", 5120026);
		em.schedule("Start6", 1000 * 20,eim);
}

function Start6(eim){//第1波
	var map = eim.getMapInstance(0);
	for(var i = 0;i<3;i++){//两侧各5只
		var mob = em.getMonster(9300384);
		mob.getStats().setChange(true);
		mob.changeLevel(200);
		mob.getChangedStats().setOHp(2000);
		mob.setHp(2000);
		eim.registerMonster(mob);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-572,-22));
	}
	for(var i = 0;i<3;i++){//两侧各5只
		var mob1 = em.getMonster(9300384);
		mob1.getStats().setChange(true);
		mob1.changeLevel(200);
		mob1.getChangedStats().setOHp(2000);
		mob1.setHp(2000);
		eim.registerMonster(mob1);
		map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(572,-22));
	}
		map.startMapEffect("5秒后怪物来袭，注意不明飞行物", 5120026);
		em.schedule("Start7", 1000 * 5,eim);
}

function Start7(eim){//第2波
	var map = eim.getMapInstance(0);
	for(var i = 0;i<5;i++){//两侧各5只
		var mob = em.getMonster(9500186);//怪物名称：蓝色魔法书
		mob.getStats().setChange(true);
		mob.changeLevel(200);
		mob.getChangedStats().setOHp(2000);
		mob.setHp(2000);
		eim.registerMonster(mob);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-572,-22));
	}
	for(var i = 0;i<5;i++){//两侧各5只
		var mob1 = em.getMonster(9500186);//怪物名称：蓝色魔法书
		mob1.getStats().setChange(true);
		mob1.changeLevel(200);
		mob1.getChangedStats().setOHp(2000);
		mob1.setHp(2000);
		eim.registerMonster(mob1);
		map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(572,-22));
	}
		map.startMapEffect("5秒后怪物来袭，注意不明飞行物", 5120026);
		em.schedule("Start8", 1000 * 5,eim);

}
function Start8(eim){//第3波
	var map = eim.getMapInstance(0);
	for(var i = 0;i<5;i++){//两侧各5只
		var mob = em.getMonster(9500186);//怪物名称：蓝色魔法书
		mob.getStats().setChange(true);
		mob.changeLevel(200);
		mob.getChangedStats().setOHp(2000);
		mob.setHp(2000);
		eim.registerMonster(mob);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-572,-22));
	}
	for(var i = 0;i<5;i++){//两侧各5只
		var mob1 = em.getMonster(9500186);//怪物名称：蓝色魔法书
		mob1.getStats().setChange(true);
		mob1.changeLevel(200);
		mob1.getChangedStats().setOHp(2000);
		mob1.setHp(2000);
		eim.registerMonster(mob1);
		map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(572,-22));
	}
	for(var i = 0;i<5;i++){//两侧各5只
		var mob2 = em.getMonster(9500186);//怪物名称：蓝色魔法书
		mob2.getStats().setChange(true);
		mob2.changeLevel(200);
		mob2.getChangedStats().setOHp(2000);
		mob2.setHp(2000);
		eim.registerMonster(mob2);
		map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(-1,-353));
	}
		map.startMapEffect("5秒后怪物来袭，注意上方不明飞行物", 5120026);
		em.schedule("Start9", 1000 * 5,eim);
}
function Start9(eim){//第4波
	var map = eim.getMapInstance(0);
	for(var i = 0;i<3;i++){//两侧各5只
		var mob = em.getMonster(9300384);//怪物名称：红水灵
		mob.getStats().setChange(true);
		mob.changeLevel(200);
		mob.getChangedStats().setOHp(2000);
		mob.setHp(2000);
		eim.registerMonster(mob);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-572,-22));
	}
	for(var i = 0;i<3;i++){//两侧各5只
		var mob1 = em.getMonster(9300384);//怪物名称：红水灵
		mob1.getStats().setChange(true);
		mob1.changeLevel(200);
		mob1.getChangedStats().setOHp(2000);
		mob1.setHp(2000);
		eim.registerMonster(mob1);
		map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(572,-22));
	}
	for(var i = 0;i<5;i++){//两侧上方各5只
		var mob2 = em.getMonster(9500186);//怪物名称：蓝色魔法书
		mob2.getStats().setChange(true);
		mob2.changeLevel(200);
		mob2.getChangedStats().setOHp(2000);
		mob2.setHp(2000);
		eim.registerMonster(mob2);
		map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(-359,-317));
	}
	for(var i = 0;i<5;i++){//两侧上方各5只
		var mob3 = em.getMonster(9500186);//怪物名称：蓝色魔法书
		mob3.getStats().setChange(true);
		mob3.changeLevel(200);
		mob3.getChangedStats().setOHp(2000);
		mob3.setHp(2000);
		eim.registerMonster(mob3);
		map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(359,-317));
	}
		map.startMapEffect("10秒后怪物来袭，最后一战", 5120026);
		em.schedule("Start10", 1000 * 10,eim);
}
function Start10(eim){//第5波
	var map = eim.getMapInstance(0);
	for(var i = 0;i<1;i++){//两侧BOSS
		var mob = em.getMonster(9450019);//怪物名称：翁罗将军
		mob.getStats().setChange(true);
		mob.changeLevel(200);
		mob.getChangedStats().setOHp(2000000000);
		mob.setHp(2000000000);
		eim.registerMonster(mob);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-572,-22));
	}
	for(var i = 0;i<1;i++){//两侧BOSS
		var mob1 = em.getMonster(9450019);//怪物名称：翁罗将军
		mob1.getStats().setChange(true);
		mob1.changeLevel(2000000000);
		mob1.getChangedStats().setOHp(2000000000);
		mob1.setHp(2000000000);
		eim.registerMonster(mob1);
		map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(572,-22));
	}
	for(var i = 0;i<1;i++){//两侧上方各5只
		var mob2 = em.getMonster(9450011);//怪物名称：翁罗将军的召唤兽
		mob2.getStats().setChange(true);
		mob2.changeLevel(200);
		mob2.getChangedStats().setOHp(200);
		mob2.setHp(200);
		eim.registerMonster(mob2);
		map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(-359,-317));
	}
	for(var i = 0;i<1;i++){//两侧上方各5只
		var mob3 = em.getMonster(9450011);//怪物名称：翁罗将军的召唤兽
		mob3.getStats().setChange(true);
		mob3.changeLevel(200);
		mob3.getChangedStats().setOHp(200);
		mob3.setHp(200);
		eim.registerMonster(mob3);
		map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(359,-317));
	}
	em.setProperty("Next", "1");//Next为1来让NPC判定能否通过保护长老任务
		map.startMapEffect("最后时刻来了！赶紧防下它！然后再找长老对话！", 5120026);
}//由于被保护的长老死后自动传送角色出去，所以不用判断
function Start11(eim){//上面完成后用NPC来执行这块
	var finalitem = Array();
	var ItemList = Array(
		Array(4031997,1000),
		Array(4031997,1000),
		Array(4031997,1000));//这里设置乱飞的物品
	var chance = Math.floor((Math.random()*1000)+1);
	for (var a = 0;a<ItemList.length ;a++ ){
		if(chance<ItemList[a][1]){
			finalitem.push(ItemList[a]);
		}
	}
	var map = eim.getMapInstance(0);
	map.startMapEffect("长老走的太快！这是长老落下的东西！拿完找长老", 5120026);
	var A = Math.floor((Math.random()*9)+1);
	for (var i = 0;i<A ;i++ ){
		var X = Math.floor((Math.random()*1200)-600);//整图随机
		var Y = -(Math.floor((Math.random()*504)+22));
		em.getMapFactoryMap(911006100).spawnAutoDrop(finalitem[Math.floor(Math.random()*finalitem.length)][0], new java.awt.Point(X,Y));
	}
	em.setProperty("Next", "2");//打开传送点，传到下一个图
	em.setProperty("JQCount","0");
}
function Start12(eim){//召唤BOSS
	var mobid =9400289;//9400289  怪物名称：欧碧拉(199,201)
    var mob8 = em.getMonster(mobid);
    var stats = mob8.getStats();
    stats.setHp(999999999999);
    stats.setMp(mob8.getMobMaxMp());
	stats.setPhysicalAttack(99999);
	stats.setMagicAttack(99999);
    var ostats = em.newMonsterStats();
    ostats.setOHp(999999999999);
    ostats.setOMp(mob8.getMobMaxMp());
    mob8.setOverrideStats(ostats);
    eim.registerMonster(mob8);
	var mapForMob8 = eim.getMapInstance(931050431);
	mapForMob8.spawnMonsterOnGroundBelow(mob8, new java.awt.Point(349,-571));//待定9
}

function changedMap(eim, player, mapid) {
    if (mapid != 911006100 && mapid != 922000000 && mapid != 931050431) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(100, 911006500)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
			em.setProperty("Next", "0");
        }
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 911006500);
    em.setProperty("state", "0");
	em.setProperty("Next", "0");
    em.setProperty("leader", "true");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(100, 911006500)) {
        em.setProperty("state", "0");
		em.setProperty("Next", "0");
        em.setProperty("leader", "true");
    }
}

function monsterValue(eim, mobId) {
    return 1;
}

function allMonstersDead(eim) {
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        player.eventRevive();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(911006500);
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
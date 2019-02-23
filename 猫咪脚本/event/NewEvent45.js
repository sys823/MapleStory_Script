var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 30;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
        var allPlayers = em.getChannelServer().getMapFactory().getMap(910000000).getCharacters();//取得当前地图上面的所有玩家
        allPlayers = allPlayers.iterator();
        while (allPlayers.hasNext()) {//循环每一个玩家
            var player = allPlayers.next();
	    player.modifyCSPoints(1, 5)
	    player.modifyCSPoints(2, 10)
            player.gainPlayerPoints(+30);
	player.dropMessage(5,"[泡点奖励]：当前泡点获得 [ 5 ] 点卷 获得 [ 10 ] 抵用卷 获得 [ 30 ] 绑定猫咪币。");
	player.dropMessage(-1,"[泡点奖励]：获得 [5] 点卷,[10] 抵用卷,[30] 绑定猫咪币。");
	//player.dropMessage(-1,"[五倍泡点奖励]：获得 [5] 点卷,[10] 抵用卷,[10] 绑定猫咪币。");
	//player.dropMessage(5,"[五倍泡点奖励]：8月17日-20日市场每30秒获得 [5] 点卷,[10] 抵用卷,[10] 绑定猫咪币。");
	    
        }
}

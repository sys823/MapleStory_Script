var status = 0;

var rws = 1024;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {

       if(cm.getChar().getAccountID()==1){
var selStr = "#b#L0#传送到市场#l #L2#查看怪物掉物#l\r\n#L1#快捷NPC服务#l#L5#管理雇佣商店#l\r\n#L3#转职向导#l\r\n#L7##rGM专用NPC#l \r\n#L55#测试任务函数#l\r\n\r\n我的NPC代号是 9000086  55";

       } else {
        var selStr = "#b#L0#传送到市场#l #L2#查看怪物掉物#l\r\n#L1#快捷NPC服务#l#L5#管理雇佣商店#l\r\n#L3#转职向导#l";

     } 
        var mids = "#r" + cm.getVipname() + "#k  #n您好! 欢迎您来到 #rMaplewing#k !\r\n请选择您需要的服务:\r\n";
        cm.sendSimple(mids + selStr);

        } else if (status == 1) { 
        switch (selection) {
        case 0:
            if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                cm.sendOk("您已经在市场了，还想做什么？");
            } else {
                cm.saveReturnLocation("FREE_MARKET");
                cm.warp(910000000, "st00");
            }
            cm.dispose();
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9900002);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9010000, 1);
            break;

        case 3:
            //cm.maxSkillsByJob();
            cm.dispose();
            cm.openNpc(9000086, 1002);
            break;
        case 4:
            if (cm.getPlayer().getLevel() < 10) {
                cm.warp(50000);
            } else {
		cm.sendOk("你的等级大于10,不能在新手地图练级.");
            }
            cm.dispose();
            break;
        case 5:
            cm.dispose();
	    cm.openNpc(9030000);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(1012117);
            break;

        case 55:
            while(rws <= 1030) {
            cm.forceStartQuest(rws);
            rws++;
         }
            cm.dispose();
            break;

        }
    }
}

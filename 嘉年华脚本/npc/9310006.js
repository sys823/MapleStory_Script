var status = 0;
function start() {
var em = cm.getEventManager("wugong");
    if (em == null) {
        cm.sendOk("请联系管理员开通此副本。");
        cm.dispose;
    } else {
        cm.sendNext("你好:请带来给我#v4021016##r#z4021016##k #bX300#k\r\n\r\n里面很危险，祖国人民的幸福就靠你来创造了，打败这变异蜈蚣妖怪吧。\r\n如果你没有#v4021016##r#z4021016##k我不能让你进去");
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
		if (cm.getParty()==null||cm.getParty()>=2 ) {
			cm.sendOk("请先自己开个组,而且只能自己一个人.完成后再来跟我说话");
			cm.dispose();
			return;
		}else if(!cm.haveItem(4021016,300)){
			cm.sendOk("请带来给我#v4021016##r#z4021016##k #bX300#k");
			cm.dispose();
			return;
		}else{
		var em = cm.getEventManager("wugong");
		var prop = em.getProperty("state");
        if  (prop.equals("0") || prop == null) {
            em.startInstance(cm.getPlayer().getParty(), cm.getMap(), 210);
			cm.gainItem(4021016,-300);
            cm.dispose();
            return;
        } else {
            cm.sendOk("里面已经有人开始战斗了。");

        }
	  }
    }
    cm.dispose();
}
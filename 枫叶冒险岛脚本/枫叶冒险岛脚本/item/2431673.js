function start() {
	if (im.getPlayer().getCSPoints(1) >= 10000 && im.getRMB() >= 3000) {
	if (im.getBossLogAcc("毛莫的口袋3000礼包")==-1) {
		im.sendOk("您已经开启过该礼包，无法重复开启");
		im.safeDispose();
		return;
	}
	im.gainItem(2431673, -1);
	
	im.setBossLogAcc("毛莫的口袋3000礼包", -2);
	//im.gainNX(1, -300000);
	//im.gainPlayerPoints(100000);
	im.gainItem(3994417, 1); //红色蜡笔
	im.gainItem(3994418, 1); //橙色蜡笔
	im.gainItem(3994419, 1); //黄色蜡笔
	im.gainItem(3994420, 1); //绿色蜡笔
	im.gainItem(3994421, 1); //青色蜡笔
	im.gainItem(3994422, 1); //蓝色蜡笔
	im.gainItem(2049750, 1); //S级潜能卷轴 80% 
	im.gainItem(2049402, 1); //特殊潜能附加卷轴
	im.gainItem(2048307, 1); //特殊附加潜能附加卷轴
	//im.gainItem(4001716, 1); // 10E
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1112164)).copy(); // 生成一个Equip类                    
	toDrop.setStr(30); //装备力量
	toDrop.setDex(30); //装备敏捷
	toDrop.setInt(30); //装备智力
	toDrop.setLuk(30); //装备运气
	toDrop.setMatk(30); //物理攻击
	toDrop.setWatk(30); //魔法攻击 
	toDrop.setAcc(30); //
	toDrop.setOwner("豪华点装");
	im.addFromDrop(im.getC(), toDrop, false);
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1112276)).copy(); // 生成一个Equip类                    
	toDrop.setStr(30); //装备力量
	toDrop.setDex(30); //装备敏捷
	toDrop.setInt(30); //装备智力
	toDrop.setLuk(30); //装备运气
	toDrop.setMatk(30); //物理攻击
	toDrop.setWatk(30); //魔法攻击 
	toDrop.setAcc(30); //
	toDrop.setOwner("豪华点装");
	im.addFromDrop(im.getC(), toDrop, false);
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1003719)).copy(); // 生成一个Equip类                    
	toDrop.setStr(30); //装备力量
	toDrop.setDex(30); //装备敏捷
	toDrop.setInt(30); //装备智力
	toDrop.setLuk(30); //装备运气
	toDrop.setMatk(50); //物理攻击
	toDrop.setWatk(50); //魔法攻击 
	toDrop.setSpeed(30); //移动速度
	toDrop.setJump(30); //跳跃
	toDrop.setAcc(30); //
	toDrop.setOwner("豪华神装");
	im.addFromDrop(im.getC(), toDrop, false);
	im.sendOk("成功获得 #r豪华礼包#k 一个。");
	im.channelMessage(0x18, "『毛莫的口袋』" + " : " + "玩家 " + im.getChar().getName() + " 从限时3000元豪华中获得 神装 以及 道具。");
	im.dispose(); 
    } else {
	im.sendOk("#b冲点小钱玩一下吧。您充值未达到3000元。#k\r\n\r\n#v3994417# #v3994418# #v3994419# #v3994420# #v3994421# #v3994422# #v2049750# #v2049402# #v2048307#\r\n#r#t1003719##v1003719# : 全属性30，攻击力魔攻50。\r\n#t1112276##v1112276# : 全属性30，攻击力魔攻30。\r\n#t1112164##v1112164# : 全属性30，攻击力魔攻30。");//\r\n\r\n- #e#d永久BUFF以及骑宠技能#k#n:\r\n#s80000077# #s80000077# #s80000077# #s80000081# #s80000082# #s80000083# #s80001198# #s80001241#");
	im.dispose();
	}
}
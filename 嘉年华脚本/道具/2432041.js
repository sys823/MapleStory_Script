status = -1;
var List = Array(10000000,30000000,88888888);
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            im.sendOk("不想使用吗？…我的肚子里有各类#b奇特座椅或卷轴、装备、新奇道具#k哦！");
            im.dispose();
        }
        status--;

    }
    if (status == 0) {
	var txt = "#d六一儿童节来啦!\r\n";
        txt += "魔方 卷轴  FFN 随即装备 等道具 [ #r还在等待吗#d ]\r\n\r\n#k";
		txt +="#L0#我要  88直充破攻（1000W）!#l\r\n";
		txt +="#L0#     288直充破攻（3000W）!#l\r\n";
		txt +="#L0#     688直充破攻（8888W）!#l\r\n";
        im.sendSimple(txt);
    } else if (status == 1) {
		var A;
		if (im.haveItem(4034899,3)){
			A = 2;
		}else if(im.haveItem(4034899,2)){
			A = 1;
		}else if(im.haveItem(4034899,1)){
			A = 0;
		}else{
			im.sendOk("#b突破失败.\r\n请检查一下你身上有没有必要的物品");
			im.dispose();
			return;
		}
		if (im.WeaponLimitBreak(List[A])) {			
			im.gainItem(2432041,-1);
			im.gainItem(4034899,-(A+1));
			im.sendOk("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r"+ List[A] +"#b.");
			im.worldSpouseMessage(0x20,"[六一突破] 玩家 "+ im.getChar().getName() +" 使用 六一节礼包 让武器伤害上限突破成功 本次追加 "+ List[A] +" 伤害值 。");
		}else{
			im.sendOk("#b突破失败.\r\n系统为检测到角色身上装备武器.");
		}
		im.dispose();
    }
}
﻿function start() {
         im.gainItem(2433989, -1);
         im.gainNX(2,10000);
         im.sendOk("恭喜您获得 #r10000#k 低用卷。");
	 im.worldSpouseMessage(0x15, "[抵用兑换提示]" + " : " + "玩家" + im.getChar().getName() + ",从每日在线领取[抵用券10000商品券]获得10000抵用卷。");
	 //im.worldSpouseMessage(0x20,"[怪物掉宝提示]：恭喜玩家 "+ im.getChar().getName() +" 从怪物身上掉落[抵用券1000商品券]获得1000抵用卷。");
         im.dispose(); 
}

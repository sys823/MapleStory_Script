/*
 *兑换
 */

var status = 0; 

function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else if (mode == 0) { 
        cm.dispose(); 
    } else { 
        if (mode == 1) 
            status++; 
        else 
            status--; 
        if (status == 0) { 
	    abb = 1;
	    cm.sendGetText("您好,欢迎使用点卷增加HP.每3点卷增加1点最大HP值。\r\n目前点卷：#r"+cm.getPlayer().getCSPoints(1)+" #k点\r\n#r注：请输入..最大HP不能超过50万...");
        } else if (status == 1) { 
			var getNumber = parseInt(cm.getText());
	if(getNumber < 1){
	    cm.playerMessage(1,"单次输入的数字不能小于1。且不能大于1万。");
	    cm.dispose();
		return;
	} else if(getNumber > 10000){
	    cm.playerMessage(1,"单次输入的数字不能小于1。且不能大于1万。");
	    cm.dispose();
		return;
	} else if (getNumber + cm.getChar().getStat().getMaxHp() > 500000) {
		var number = 500000 - cm.getChar().getStat().getMaxHp();
		cm.playerMessage(1,"最多输入 " + number +"哦");
		cm.dispose();
		return;
	} else {
	    cm.sendYesNo("您好,欢迎使用点卷增加血量.\r\n增加#r" + getNumber + "#k血量将会使用掉您#r" + getNumber * 3 + "#k点卷\r\n请确认后使用。"); 
	    } 
        } else if (status == 2) { 
		var getmaxhp = cm.getChar().getStat().getMaxHp();
	if (cm.getPlayer().getCSPoints(1) >= getNumber * 3) { 
		   cm.gainNX(-getNumber * 3);
		   cm.getChar().getStat().setMaxHp(getmaxhp+getNumber * 1,cm.getChar());
           //cm.worldSpouseMessage(0x20,"[增加HP上限] ：恭喜玩家 "+ cm.getChar().getName() +" 在随身NPC中用 "+ getNumber * 3 +" 点卷增加+ 了 "+ getNumber +" HP上限");
           cm.sendOk("成功增加了"+getNumber+"血量.换线或小退一下即可看到。");
           cm.dispose();
		   return;
        } else {
           cm.sendOk("您没有足够的点卷,请获取后使用.");
           cm.dispose();
		   return;
	 }
      } 
   }
}
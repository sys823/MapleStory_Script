var status = 0;
var typed=0;
var random1 = java.lang.Math.floor(Math.random() * 1000 + 1);
var random2 = java.lang.Math.floor(Math.random() * 3000 + 1);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) { 
			cm.sendSimple("亲爱的#r#h ##k您好，我是伤害上限突破系统:\r\n#r#L1#伤害上限突破简介#l\r\n\r\n#L3#[武器]伤害上限突破-模式(1) (#k目前状态：#r火爆内容#b)#l");
		} else if (status == 1) {
			if (selection == 1) {
			cm.sendOk("亲爱的#r#h ##k您好,我是伤害上限突破系统简介:\r\n  使用道具: 当前职业对应等级武器 \r\n  使用雪花币: 任何武器都可以伤害上限突破 \r\n\r\n\r\n\r\n#r注：每把武器最多追加1亿伤害,超过后不予计算.");
                    	cm.dispose();
			} else if (selection == 2) {
				if(cm.getBossLog("火种突破",1) <= 10000000){
				if(cm.haveItem(4033356, 5)){
					if (cm.changeLimitBreak(random1)) {
					for(var i = 0; i < random1; i++){
						cm.setBossLog("火种突破",1);
					}
						cm.gainItem(4033356,-5);
							cm.sendOk("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r"+ random1 +"#b.");
						cm.worldSpouseMessage(0x20,"[伤害突破] 玩家 "+ cm.getChar().getName() +" 使用 正义火种1 让武器伤害上限突破成功 本次追加 "+ random1 +" 伤害值 。");
					}else{
							cm.sendOk("#b突破失败.\r\n系统为检测到角色身上装备武器.");
					}
							cm.dispose();
					}else{
							cm.sendOk("#b突破失败.\r\n需要 5个 正义火种1 才可以突破.");
							cm.dispose();
					}
				}else{
						cm.sendOk("#b突破失败.\r\n武器最高额外突破1000万伤害.");
						cm.dispose();
				}
			} else if (selection == 3) {
				cm.sendYesNo("此次突破将消耗#r80#k个国庆币为武器伤害上限增加#r100万#k，#d建议前五百万使用突破之石进行突破#k，是否要继续进行武器破攻？");
			}
	   } else if (status==2) {
	   	if(cm.getBossLog("点卷突破1",1) <= 1000){
				if(cm.haveItem(4000463, 80)){
				if (cm.changeLimitBreak(1000000)) {
					cm.setBossLog("点卷突破1",1);
					cm.gainItem(4000463,-80);
					cm.sendOk("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r1000000#b.");
					cm.worldSpouseMessage(0x20,"[伤害突破] 玩家 "+ cm.getChar().getName() +" 使用 国庆币 让武器伤害上限突破成功 本次追加 1000000 伤害值。");
				}else{
						cm.sendOk("#b突破失败.\r\n系统为检测到角色身上装备武器.");
				}
						cm.dispose();
				}else{
						cm.sendOk("#b突破失败.\r\n需要 80个 国庆币 才可以突破.");
						cm.dispose();
				}
				}else{
						cm.sendOk("#b突破失败.\r\n武器最高额外突破1E伤害.");
						cm.dispose();
				}
	   }
      }
}
var status = 0;
var typed=0;
var ttcj = "";
var ttty = "";
var ttll = "";
var ttyc = "";
var zdhl = "";
var zdlz = "";
var zdhd = "";
var zdgj = "";
var gply = "";
var jxjc = "";
var random = java.lang.Math.floor(Math.random() * 4);
var random1 = java.lang.Math.floor(Math.random() * 6);
var ttt6 ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(cm.getEventCount("抽奖") == 0){
	        ttcj = "#r未完成任务#b";
	}else{
	        ttcj = "#k已完成任务#b";
	}
	if(cm.getEventCount("跳跃") == 0){
	        ttty = "#r已完成"+cm.getEventCount("跳跃")+"次任务#b";
	}else{
	        ttty = "#r已完成"+cm.getEventCount("跳跃")+"次任务#b";
	}
	if(cm.getEventCount("历练") == 0){
	        ttll = "#r未完成任务#b";
	}else{
	        ttll = "#k已完成任务#b";
	}
	if(cm.getEventCount("养成") == 0){
	        ttyc = "#r未完成任务#b";
	}else{
	        ttyc = "#k已完成任务#b";
	}
	if(cm.getEventCount("皇陵") < 1){
	        zdhl = "#r已完成"+cm.getEventCount("皇陵")+"次任务#b";
	}else{
	        zdhl = "#k已完成任务#b";
	}
	if(cm.getEventCount("罗朱") < 1){
	        zdlz = "#r已完成"+cm.getEventCount("罗朱")+"次任务#b";
	}else{
	        zdlz = "#k已完成任务#b";
	}
	if(cm.getEventCount("海盗") < 1){
	        zdhd = "#r已完成"+cm.getEventCount("海盗")+"次任务#b";
	}else{
	        zdhd = "#k已完成任务#b";
	}
	if(cm.getEventCount("鬼节") < 1){
	        zdgj = "#r已完成"+cm.getEventCount("鬼节")+"次任务#b";
	}else{
	        zdgj = "#k已完成任务#b";
	}
	if(cm.getEventCount("海怪") < 1){
	        hhhg = "#r已完成"+cm.getEventCount("海怪")+"次任务#b";
	}else{
	        hhhg = "#k已完成任务#b";
	}
	if(cm.getEventCount("极限") == 0){
	        jxjc = "#r未完成任务#b";
	}else{
	        jxjc = "#k已完成任务#b";
	}
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
			var selStr = "今天在线的时间为：#r"+cm.getOnlineTime()+"#k 分钟! 想选择什么样的任务！\r\n\r\n";
			//selStr +="#b#L999#[单人/组队]无限火力 #k#rnew      #k奖励:魔方#l\r\n\r\n";
			//selStr +="#b#baidu#[单人/组队]枫叶高校 #k#rnew      #k奖励:图腾#l\r\n\r\n";
			selStr +="#b#L988#幻想车站<2> #k#rnew 大海贼帽子 #l\r\n\r\n";
			selStr +="#b#L987#[组队]玩具组队 #k#rnew      #k奖励:#l\r\n\r\n";
		    selStr +="#b#L998#[单人]保护金猪 #k#rnew           #k奖励:魔方、闪炫、点卷#l\r\n\r\n";
			selStr +="#b#L800#[单人]大王蜈蚣 #k#rnew           #k奖励:道具、闪炫、币种#l\r\n\r\n";
			selStr +="#b#L995#[组队]魔方副本 #k#rnew           #k奖励:魔方#l\r\n\r\n";
		    selStr +="#b#L997#[家族个人赛]跑旗赛 #k#rnew       #k奖励:魔方#l\r\n\r\n";
		    selStr +="#b#L994#[新副本] 外星人访客！#k#rnew     #k奖励:外星人碎片装备#l\r\n\r\n";
		    selStr +="#b#L993#[新副本] 鬼魂公园！#k#rnew       #k奖励:经验#l\r\n\r\n";
			selStr +="#b#L990#[新副本] 宾果问答题！#k#rnew     #k奖励:积分、卷轴、魔方#l\r\n\r\n";
		    selStr +="#b#L992#[副本] 武陵道场！#k#rnew         #k奖励:经验 #l\r\n\r\n";
		    selStr +="#b#L991#[副本] 国服组队任务！#k#rnew     #k奖励:积分、卷轴、魔方#l\r\n\r\n";
			cm.sendSimple(selStr);
		} else if (status == 1) {
			if (selection == 1) {
			cm.sendOk("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎来到天天日常任务简介:\r\n  通过天天日常任务活动可以获得大量游戏道具,在这里让\r\n  你总是意想不到的意外,任务简单-困难模式有趣有乐.杀\r\n  戮 挑战 冒险 极品 这里的任务应有尽有,赶快行动起来吧!\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r\n#v3010070#椅子 #v2049134#卷轴 #v5062002#魔方  #v1332225#装备 #v1102453#点装\r\n\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：所有日常任务24点重置。\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：通过日常任务可以获得以上物品分类各种型号物品。");
                    	cm.dispose();
			} else if (selection == 2) {
			typed=3;
			cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎来到日常任务抽奖活动:\r\n  满足任务条件可以随机领取1-3个祖母绿抽奖箱.\r\n  双击打开您会得到意想不到的物品哦.\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#角色在线达到2小时 (#k在线时间： #r"+cm.getOnlineTime()+"#k)分钟\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#完成一次[组队]扫荡秦皇陵.\r\n#L2#我要抽奖#l");
			} else if (selection == 3) {
			typed=4;
                    	cm.dispose();
		    	cm.openNpc(9020000);
			} else if (selection == 4) {
			typed=5;
			cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎来到日常任务历练活动:\r\n  满足任务条件可以领取积分值.\r\n  随机 神奇魔方x6 高级神奇魔方x3 防爆卷轴x3 祝福卷x3\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#角色在线达到3小时 (#k在线时间： #r"+cm.getOnlineTime()+"#k)分钟\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#完成一次[组队]扫荡秦皇陵.\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#完成一次[组队]抢占海盗船.\r\n#L2#完成任务#l");
			} else if (selection == 5) {
			typed=6;
			cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎来到日常任务养成活动,满足\r\n  任务条件可以饲养小伙伴.\r\n  随机 饲养小伙伴成长值 5 - 10 点 \r\n  #r注：小伙伴的成长情况,请在市场地图中找(文教授)#k\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#角色在线达到4小时 (#k在线时间： #r"+cm.getOnlineTime()+"#k)分钟\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[收集物品]#i4001083# #t4001083# (#c4001083# / 1).\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[收集物品]#i4001084# #t4001084# (#c4001084# / 1).\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[收集物品]#i4000460# #t4000460# (#c4000460# / 1).\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[收集物品]#i4000461# #t4000461# (#c4000461# / 1).\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[收集物品]#i4000462# #t4000462# (#c4000462# / 1).\r\n#L2#完成任务#l");		} else if (selection == 6) {
			typed=7;
			if (cm.getEventCount("皇陵") < 1) {
			cm.dispose();
			cm.openNpc(9330231);
			}else{
		    	cm.sendOk("今天该帐号已经完成[组队]扫荡秦皇陵。");
		    	cm.dispose();
			}
			} else if (selection == 7) {
			typed=9;
			if (cm.getEventCount("海盗") < 1) {
                    	cm.dispose();
			cm.openNpc(2094000);
			}else{
		    	cm.sendOk("今天该帐号已经完成[组队]抢占海盗船。");
		    	cm.dispose();
			}
			} else if (selection == 9) {
			typed=10;
			if (cm.getEventCount("鬼节") < 1) {
                    	cm.dispose();
			cm.openNpc(2022003);
			}else{
		    	cm.sendOk("今天该帐号已经完成[组队]皇帝的复活。");
		    	cm.dispose();
			}
			} else if (selection == 10) {
			typed=11;
			cm.dispose();
			cm.openNpc(2040034);
			} else if (selection == 11) {
			cm.dispose();
			cm.openNpc(9020005);
			} else if (selection == 12) {
			typed=12;
			cm.sendOk("看你有木有节操");
                    	cm.dispose();
			} else if (selection == 999) {
				cm.dispose();
				cm.openNpc(9201116,"wuxianhuoli");
			} else if (selection == 998) {
				cm.dispose();
				cm.openNpc(9201116,"9300006_1");
			} else if (selection == 997) {
				cm.dispose();
				cm.openNpc(9000233);
			} else if (selection == 996) {
				cm.warp(744000000);
				cm.dispose();
			} else if (selection == 995) {
				cm.dispose();
				cm.openNpc(9201116,"JinBi");
			} else if (selection == 994) {
				cm.warp(861000000);
				cm.dispose();
			} else if (selection == 993) {
				cm.warp(956100000);
				cm.dispose();
			} else if (selection == 992) {
				cm.warp(925020000);
				cm.dispose();
			} else if (selection == 991) {
				cm.warp(910002000);
				cm.dispose();
			} else if (selection == 990) {
				cm.warp(910048000);
				cm.dispose();
			} else if (selection == 800) {
				cm.warp(910340700,0);
				cm.dispose();
			} else if (selection == 988) {
				cm.warp(223030100,0);
				cm.dispose();
				//cm.openNpc(1540100);
			} else if (selection == 987) {
				
				cm.warp(221023300,0);
				cm.dispose();
				//cm.openNpc(1500016);
			}
		} else if (status == 2) {
		if (typed == 3) {
		if (selection == 2) {
                if (cm.getEventCount("抽奖") == 0) {
		if(cm.getOnlineTime() >= 10 && cm.getEventCount("皇陵") > 0 && (cm.getSpace(1) > 1||cm.getSpace(2) > 1||cm.getSpace(3) > 1||cm.getSpace(4) > 1)){
		    var xzq = Math.floor(Math.random()*3+1);
			cm.gainItem(2430069, xzq);
		    cm.sendOk("获得 #v2430069# #t2430069# "+xzq+"个");
           	    cm.worldSpouseMessage(0x20,"[日常活动] 恭喜玩家 "+ cm.getChar().getName() +" 在天天爱抽奖活动中获得 祖母绿箱子 。");
		    cm.setEventCount("抽奖");
                    cm.dispose();
		}else{
		    cm.sendOk("请确认您在线时间达到10分钟。\r\n请确认您是否完成#b[组队]扫荡秦皇陵#k。\r\n请确认您背包所有栏目窗口中是否有一格以上的空间。");
                    cm.dispose();
		}
		}else{
		    cm.sendOk("今天该帐号已经完成[日常]天天爱抽奖。");
		    cm.dispose();
		}
		}
		}
		if (typed == 5) {
		if (selection == 2) {
                if (cm.getEventCount("历练") == 0) {
		if(cm.getOnlineTime() >= 20 && cm.getEventCount("皇陵") > 0 && cm.getEventCount("海盗") > 0 && (cm.getSpace(1) > 1||cm.getSpace(2) > 1||cm.getSpace(3) > 1||cm.getSpace(4) > 1)){
		if(random == 0){
		    cm.gainGachaponItem(5062000, 6, "天天爱历练", 3);
                    cm.sendOk("获得 #v5062000# #t5062000# 6个");
		} else if(random == 1){
		    cm.gainGachaponItem(5062002, 3, "天天爱历练", 3);
                    cm.sendOk("获得 #v5062002# #t5062002# 3个");
		} else if(random == 2){
		    cm.gainGachaponItem(5064000, 3, "天天爱历练", 3);
                    cm.sendOk("获得 #v5064000# #t5064000# 3个");
		} else {
		    cm.gainGachaponItem(2340000, 3, "天天爱历练", 3);
                    cm.sendOk("获得 #v2340000# #t2340000# 3个");
		}
		    cm.setEventCount("历练");
		    cm.gainPlayerEnergy(50);
		    cm.gainItem(4033136, 1);
           	    cm.worldSpouseMessage(0x20,"[日常活动] 恭喜玩家 "+ cm.getChar().getName() +" 在天天爱历练活动中获得 50 点活力值 春节剪纸 x1。");
                    cm.dispose();
		}else{
		    cm.sendOk("请确认您在线时间达到20分钟。\r\n请确认您是否收完成全部[组队]任务。\r\n请确认您背包所有栏目窗口中是否有一格以上的空间。");
                    cm.dispose();
		}
		}else{
		    cm.sendOk("今天该帐号已经完成[日常]天天爱历练。");
		    cm.dispose();
		}
		}
		}
		if (typed == 6) {
		if (selection == 2) {
                if (cm.getEventCount("养成") == 0) {
		if(cm.getOnlineTime() >= 30 && cm.haveItem(4001083,1) && cm.haveItem(4001084,1) && cm.haveItem(4000460,1) && cm.haveItem(4000461,1) && cm.haveItem(4000462,1)){
		if(random1 == 0){
		for(var i = 1; i <= 5; i++){
	   	    cm.setPQLog("宠物总计成长值",1);
		}
		cm.worldSpouseMessage(0x20,"[日常活动] 恭喜玩家 "+ cm.getChar().getName() +" 在天天爱养成活动中获得 5 点成长值 。");
		} else if(random1 == 1){
		for(var i = 1; i <= 6; i++){
	   	    cm.setPQLog("宠物总计成长值",1);
		}
		cm.worldSpouseMessage(0x20,"[日常活动] 恭喜玩家 "+ cm.getChar().getName() +" 在天天爱养成活动中获得 6 点成长值 。");
		} else if(random1 == 2){
		for(var i = 1; i <= 7; i++){
	   	    cm.setPQLog("宠物总计成长值",1);
		}
		cm.worldSpouseMessage(0x20,"[日常活动] 恭喜玩家 "+ cm.getChar().getName() +" 在天天爱养成活动中获得 7 点成长值 。");
		} else if(random1 == 3){
		for(var i = 1; i <= 8; i++){
	   	    cm.setPQLog("宠物总计成长值",1);
		}
		cm.worldSpouseMessage(0x20,"[日常活动] 恭喜玩家 "+ cm.getChar().getName() +" 在天天爱养成活动中获得 8 点成长值 。");
		} else if(random1 == 4){
		for(var i = 1; i <= 9; i++){
	   	    cm.setPQLog("宠物总计成长值",1);
		}
		cm.worldSpouseMessage(0x20,"[日常活动] 恭喜玩家 "+ cm.getChar().getName() +" 在天天爱养成活动中获得 9 点成长值 。");
		} else {
		for(var i = 1; i <= 10; i++){
	   	    cm.setPQLog("宠物总计成长值",1);
		}
		cm.worldSpouseMessage(0x20,"[日常活动] 恭喜玩家 "+ cm.getChar().getName() +" 在天天爱养成活动中获得 10 点成长值 。");
		}
		    cm.gainItem(4001083,-1);
		    cm.gainItem(4001084,-1);
		    cm.gainItem(4000460,-1);
		    cm.gainItem(4000461,-1);
		    cm.gainItem(4000462,-1);
		    cm.setEventCount("养成");
                    cm.dispose();
		}else{
		    cm.sendOk("请确认您在线时间达到30分钟。\r\n请确认您是否完成全部[收集物品]任务。");
                    cm.dispose();
		}
		}else{
		    cm.sendOk("今天该帐号已经完成[日常]天天爱养成。");
		    cm.dispose();
		}
		}
		}
	   }
      }
}

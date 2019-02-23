/*
	功能：每日任务 - 环任务20次
	备注：任务初始ID 100100，子任务依次加1，新任务分类的初始ID需间隔100，如100200
*/


var status = 0;
var text = "";
var questid = 100100;
var maxtimes = 20;
var playerid = 0;
var accepttimes = 0;
var questitemid = 0;
var questitemcs = 0;
var hitemid = 0;
var hitemcs = 0;
var questitems = Array(
	Array(4000000, -1, "蓝色蜗牛的壳."), // 蓝色蜗牛壳 - 蓝色蜗牛的壳.
	Array(4000269, -1, "听说有人在#r蓝飞龙#k身上见到过这种东西"),  //飞龙的腮
	Array(4000268, -1, "听说有人在#r红飞龙#k身上见到过这种东西"), // 飞龙的翅膀 - 红飞龙的红色翅膀
	Array(4000270, -1, "听说有人在#r黑飞龙#k身上见到过这种东西"), // 飞龙的指甲 - 附在黑飞龙翅膀两端的尖锐指甲
	Array(4000190, -1, "听说在#r上海郊外#k有人看到山羊出没"),// - 山羊角 - 山羊的角，不那么锋利，但有点危险。
	//Array(4000194, -1, "听说在#r上海郊外#k有人看到山羊出没"), // 黑羊毛 - 黑绵羊的毛，有点粗糙。
	Array(4000187, -1, "听说在#r上海郊外#k有很多农场，你到那儿或许会有所发现"), // 鸡爪 - 斗鸡的脚,可以交换玉米或糖葫芦
	Array(4000188, -1, "听说在#r上海郊外#k有很多农场，你到那儿或许会有所发现"), // 鸭蛋 - 大头鸭的蛋,可以交换玉米或糖葫芦
	Array(4000252, -1, "听说在#r上海郊外#k有很多农场，你到那儿或许会有所发现"), // 鸡肉 - 鸡毛都退掉的整理好的鸡肉
	Array(4001017, 1, "到#r杂货店#k里买一个给我吧"), // 火焰的眼 - 把被封印的扎昆树的种子人工制作的。用于扎昆祭坛祭物的材料。
	Array(4001242, 1, "去吧，去击败#r心疤狮王#k"), // 心疤狮王足 - 心疤狮王神奇的脚。
	Array(4000021, -1, "也许你可以想想#r火野猪#k什么的"), // 动物皮 - 是动物的外皮.
	Array(4000052, -1, "在#r冰封雪域#k有人看见过这种东西"), // 白狼之尾 - 白狼的尾，由白色软毛构成.
	Array(4000232, -1, "听说这是#r火焰半人马#k之力量的来源"), // 半人马的火花 - 火焰半人马之力量的来源。
	Array(4000233, -1, "听说这是#r寒冰半人马#k之力量的来源"), // 半人马的净水 - 寒冰半人马之力量的来源。
	Array(4000234, -1, "听说这是#r暗黑半人马#k之力量的来源"), // 半人马的骨头 - 暗黑半人马之力量的来源。
	Array(4000238, -1, "听说这是#r哈维#k身上掉下的尾羽毛"), // 哈维羽毛 - 哈维身上掉下的尾羽毛。外观很美，用于装饰品。
	Array(4000239, -1, "听说这是#r血腥哈维#k带着的王冠"), // 血腥哈维的王冠 - 血腥哈维带着的王冠。颜色显得十分的鲜艳。
	Array(4001241, 1, "击败#r暴力熊#k，或许你能获取到它的熊足"), // 暴力熊足 - 暴力熊神奇的脚。
	Array(4160000, 1, "或许你可以到#r宠物饲料商#k那儿去看看。"), // 宠物指令：小狗系列 // 记载着可对小狗使用的指令说明书。\n#c快速双击该道具，便可开启书本。#
	Array(4160001, 1, "或许你可以到#r宠物饲料商#k那儿去看看。"), // 宠物指令：小猫系列 // 记载着可对小猫使用的指令说明书。\n#c快速双击该道具，便可开启书本。#
	Array(4160002, 1, "或许你可以到#r宠物饲料商#k那儿去看看。"), // 宠物指令：兔子系列 // 记载着可对兔子使用的指令说明书。\n#c快速双击该道具，便可开启书本。#
	Array(4160003, 1, "或许你可以到#r宠物饲料商#k那儿去看看。"), // 宠物指令：小怪猫 // 记载着可对小怪猫使用的指令说明书。\n#c快速双击该道具，便可开启书本。#
	Array(4160004, 1, "或许你可以到#r宠物饲料商#k那儿去看看。"), // 宠物指令：雪犬 // 记载着可对雪犬使用的指令说明书。\n#c快速双击该道具，便可开启书本。#
	Array(4160005, 1, "或许你可以到#r宠物饲料商#k那儿去看看。"), // 宠物指令：黑小猪 // 记载着可对黑小猪使用的指令说明书。\n#c快速双击该道具，便可开启书本。#
	Array(4160006, 1, "或许你可以到#r宠物饲料商#k那儿去看看。"), // 宠物指令：熊猫 // 记载着可对熊猫使用的指令说明书。\n#c快速双击该道具，便可开启书本。#
	Array(4160007, 1, "或许你可以到#r宠物饲料商#k那儿去看看。"), // 宠物指令：恐龙 // 记载着可对恐龙使用的指令说明书。\n#c快速双击该道具，便可开启书本。#
	Array(4160008, 1, "或许你可以到#r宠物饲料商#k那儿去看看。"), // 宠物指令：云豹 // 记载着可对云豹使用的指令说明书。\n#c快速双击该道具，便可开启书本。#
	Array(4160009, 1, "或许你可以到#r宠物饲料商#k那儿去看看。"), // 宠物指令：圣诞鹿 // 记载着可对圣诞鹿使用的指令说明书。\n#c快速双击该道具，便可开启书本。#
	Array(4160010, 1, "或许你可以到#r宠物饲料商#k那儿去看看。"), // 宠物指令：猴子 // 记载着可对猴子使用的指令说明书。\n#c快速双击该道具，便可开启书本。#
	//Array(4160011, 1, "或许你可以到#r宠物饲料商#k那儿去看看。"), // 宠物能力值转移卷轴 // 记载着可转移宠物能力值的卷轴。\n#c快速双击该道具，便可知道详细内容。#
	Array(4160012, 1, "或许你可以到#r宠物饲料商#k那儿去看看。"), // 宠物指令：小白雪人 // 记载着可对小白雪人使用的指令说明书。\n#c快速双击该道具，便可开启书本。#
	Array(4160013, 1, "或许你可以到#r宠物饲料商#k那儿去看看。"), // 宠物指令：小白虎 // 记载着可对小白虎使用的指令说明书。\n#c快速双击该道具，便可开启书本。#
	Array(4160014, 1, "或许你可以到#r宠物饲料商#k那儿去看看。"), // 宠物指令：小企企 // 记载着可对小企企使用的指令说明书。\n#c快速双击该道具，便可开启书本。#
	Array(4160015, 1, "或许你可以到#r宠物饲料商#k那儿去看看。"), // 宠物指令：蝙蝠怪 // 记载着可对蝙蝠怪使用的指令说明书。\n#c快速双击该道具，便可开启书本。#
	Array(3010001, 1, "或许你可以到#r游戏商店#k看一看，那儿似乎有卖。"), // 蓝色木椅 - 只有在明珠港制作贩卖的蓝色木椅。坐在上面每10秒可恢复HP 35
	Array(2000000, -1, "各大药房均有销售。"), // 红色药水 - 红色药草研磨作成的药水.\n恢复HP约50.
	Array(2000001, -1, "各大药房均有销售。"), // 橙色药水 - 红色药草精炼而成的浓缩药水.\n恢复HP约150.
	Array(2000002, -1, "各大药房均有销售。"), // 白色药水 - 红色药草精炼而成的高级浓缩药水.\n恢复HP约300.
	Array(2000003, -1, "各大药房均有销售。"), // 蓝色药水 - 青色药草研磨作成的药水.\n恢复MP约100.
	//Array(2000004, -1, "各大药房均有销售。"), // 特殊药水 - 传说中的秘药。\n使HP、MP恢复约50%。但最大HP、MP超过99,999时，HP、MP恢复49,999。
	Array(2000005, -1, "各大药房均有销售。"), // 超级药水 - 传说中的秘药。\n使HP、MP全部恢复。但最大HP、MP超过99,999时，HP、MP恢复99,999。
	Array(2000006, -1, "各大药房均有销售。") // 活力神水 - 传说中的秘药.\n恢复MP约300.
	//Array(2000007, -1, "各大药房均有销售。"), // 红色药丸 - 用红色药水做的药丸。 HP恢复50。因为体积小，能带更多药
	//Array(2000008, -1, "各大药房均有销售。") // 橙色药丸 - 用橙色药水做的药丸。 HP恢复150。因为体积小，能带更多药
//	Array(-1,-1, "我想我需要买一些东西慰劳自己。"), //游戏币
//	Array(-2,-1,"我想我需要买一些东西慰劳自己。") //抵用卷
);

function start () {
	status = -1;
	action(1, 0, 0);
}


function action (mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1) {
			status++;
		} else {
			status--;
		}

		if (status == -1) {
			cm.dispose();
		} else if (status == 0) {
			playerid = cm.getPlayer().getId();
			accepttimes = cm.getPlayer().MissionGetFinish(playerid, questid);
			text = "\t\t\t\t#e日常任务 - 月枫的需求#n\r\n\r\n  您今日可再接取次数：#r" + (maxtimes-accepttimes) + "#k 次\r\n  完成每环任务会获得如下奖励：\r\n\t#r200点抵用券、大量游戏经验、15个征服币、50点卷、10万游戏币\r\n\t#k每#r5、10、15、20#k环为#b双倍奖励#k，并有几率获得#b祖母绿抽奖宝箱#k一个！\r\n#k";
			if (cm.getPlayer().MissionStatus(playerid, questid, 0, 4)) {  // 判断是否接取了任务
				if (cm.getPlayer().MissionStatus(playerid, questid, 0, 0)) { // 判断是否完成任务
					if (cm.getPlayer().MissionStatus(playerid, questid, maxtimes, 3)) { // 判断是否超过完成次数
						text += "您已经完成了今天的任务，请明天0点后再来吧~";
					} else {
						text += "#b#L0#接受任务#l#k\r\n";
						//cm.MissionReMake(playerid, questid, 1, 0, 0);
					}
				} else {
					hitemid = cm.getPlayer().MissionGetMobId(playerid, questid);
					hitemcs = cm.getPlayer().MissionGetMaxNum(playerid, questid, 0);
					text += "#e  当前第#r" + Math.max(1, (accepttimes+1)) + "#k环  收集 #r#z" + hitemid + "# " + hitemcs + "#k个#n\r\n\r\n\r\n";
					if (cm.haveItem(hitemid, hitemcs)) {	// 判断是否满足任务条件
						text += "#b#L1#完成任务#l\r\n";
					} else {
						text += "怎么了？还没找到我要的东西吗？\r\n\r\n";
					}
					text += "#r#L2#放弃任务 (无法获得任何奖励，且会消耗一次任务次数)#l\r\n";
				}
			} else {
				text += "#b#L3#接受任务#l\r\n";
			}
			cm.sendSimple(text);
		} else if (status == 1) {
			if (selection == 0) {			// 重新接受任务 初始化
				var questrandid = Math.floor(Math.random()*questitems.length);
				questitemid = questitems[questrandid][0];	// 任务道具ID
				if (questitems[questrandid][1] < 0) { 
					questitemcs = Math.floor(Math.random()*20) + 20 + Math.floor(Math.random()*cm.getReborns());	// 任务道具数量
				} else {
					questitemcs = questitems[questrandid][1];
				}
				text = "#e第#r" + (accepttimes + 1) + "#k环：#n\r\n\r\n请帮我找到#b"+questitemcs+"#k个#r#z" + questitemid + "##k\r\n"+questitems[questrandid][2]+"\r\n#k感激不尽，快去快回~";
				// 重新接受任务
				cm.getPlayer().MissionReMake(playerid, questid, 1, 0, 0);
				// 写入任务道具ID
				cm.getPlayer().MissionSetMobId(playerid, questid, questitemid);
				// 写入任务道具数量
				cm.getPlayer().MissionMaxNum(questid, questitemcs);
				cm.sendOk(text);
				cm.dispose();
			} else if (selection == 1) {	// 完成任务
				//accepttimes = cm.getPlayer().MissionGetFinish(playerid, questid);
				//完成任务
				cm.getPlayer().MissionFinish(playerid, questid);
				//经验值奖励
				var baseExp = 0.02;
				if (cm.getPlayer().getLevel() > 220 )
					baseExp = 0.01;
				else if (cm.getPlayer().getLevel() > 240) 
					baseExp = 0.001;
				var calcExp = Math.floor(cm.getPlayer().getExpNeededForLevel()*baseExp)+Math.floor(Math.random()*1000000+1000000);
				if (!((accepttimes+1)%5)) {
					calcExp*=2;
					var expNum = 1;
					var lastExp = 0;
					//如果经验超过21E
					if (calcExp>=2147483647) {
						//计算分成几次
						expNum = Math.floor((calcExp / 2147483647));
						//计算余数
						lastExp = Math.floor((calcExp % 2147483647));
						//根据计算次数多次给予经验
						for(var i = 0; i<expNum; i++) {
							cm.gainExp(2147483647);
						}
						//给予余数经验
						cm.gainExp(lastExp);
					} else {
						cm.gainExp(calcExp);
					}
					cm.gainMeso(200000);
					cm.gainItem(4310036, 30);
					if (cm.getEventCount("月枫的需求"+(accepttimes+1))<1){
						cm.gainNX(2, 400);
						cm.gainNX(1,100);
						cm.setEventCount("月枫的需求"+(accepttimes+1));
					}
					if (Math.round(Math.random()*1)) {
						cm.gainItem(2430069, 1);
						cm.channelMessage(0x18, "[月枫的需求]" + " : " + "真是好运，玩家【" + cm.getChar().getName() + "】获得了一个祖母绿抽奖箱。");
					}
				} else {
					var expNum = 1;
					var lastExp = 0;
					if (calcExp>=2147483647) {
						expNum = Math.floor((calcExp / 2147483647));
						lastExp = Math.floor((calcExp % 2147483647));
						for(var i = 0; i<expNum; i++) {
							cm.gainExp(2147483647);
						}
						cm.gainExp(lastExp);
					} else {
						cm.gainExp(calcExp);
					}
					
					cm.gainItem(4310036, 15);
					cm.gainMeso(100000);
					if (cm.getEventCount("月枫的需求"+(accepttimes+1))<1){
						cm.gainNX(2, 200);
						cm.gainNX(1,50);
						cm.setEventCount("月枫的需求"+(accepttimes+1));
					}
				}	
				cm.gainItem(hitemid, -hitemcs);
				cm.finishActivity(120110);
				text = "恭喜您完成了任务~~";
				cm.sendOk(text);
				cm.channelMessage(0x18, "[月枫的需求]" + " : " + "恭喜玩家【" + cm.getChar().getName() + "】,完成了【第"+(accepttimes+1)+"环】任务获得了丰厚的奖励。");
                //cm.playerMessage(-1, "获得经验"+calcExp);
				//cm.playerMessage(-1, "获得征服币15个");
				//cm.playerMessage(-1, "获得高级魔法1个");
				//cm.playerMessage(-1, "获得50点卷");
				cm.dispose();
			} else if (selection == 2) {	// 放弃任务
				cm.getPlayer().MissionFinish(playerid, questid);
				text = "任务已放弃……";
				cm.sendOk(text);
				cm.dispose();
			} else if (selection == 3) {	// 接受任务
				var questrandid = Math.floor(Math.random()*questitems.length);
				questitemid = questitems[questrandid][0];	// 任务道具ID
				if (questitems[questrandid][1] < 0) { 
					questitemcs = Math.floor(Math.random()*20) + 20 + Math.floor(Math.random()*cm.getReborns());	// 任务道具数量
				} else {
					questitemcs = questitems[questrandid][1];
				}
				text = "#e第#r" + (accepttimes + 1) + "#k环：#n\r\n\r\n请帮我找到#b"+questitemcs+"#k个#r#z" + questitemid + "##k\r\n"+questitems[questrandid][2]+"\r\n#k快去快回~";
				// 创建任务，写入任务道具ID
				cm.getPlayer().MissionMake(playerid, questid, 1, 0, 0, questitemid);
				// 写入任务道具数量
				cm.getPlayer().MissionMaxNum(questid, questitemcs);
				cm.sendOk(text);
				cm.dispose();
			}
		}
	}
}
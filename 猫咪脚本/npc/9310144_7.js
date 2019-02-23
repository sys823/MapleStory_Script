
var status = -1;
var text;
var sel;
var rmb;
var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

// 每个礼包所需的充值金额
var condition = new Array(1, 10, 30, 50, 100, 200, 300, 500, 800, 1000, 3000, 5000, 8000, 10000);
var reward = new Array(// 礼包编号、道具id、数量
					// 礼包1
					Array(1, 1113077, 1),
					Array(1, 3010118, 1),
					Array(1, 2340000, 1),
					Array(1, 2049116, 1),
					
					// 礼包2
					Array(2, 5062002, 10),
					Array(2, 5064000, 10),
					Array(2, 2340000, 5),
					Array(2, 2049116, 2),

					// 礼包3
					Array(3, 5062002, 30),
					Array(3, 5064000, 15),
					Array(3, 2340000, 10),
					Array(3, 2049116, 4),
					Array(3, 3010535, 1),

					// 礼包4
					Array(4, 5062002, 50),
					Array(4, 5064000, 20),
					Array(4, 2340000, 15),
					Array(4, 3010678, 1),
					Array(4, 2049116, 5),
					Array(4, 5073000, 8),
					Array(4, 5390004, 8),

					// 礼包5
					Array(5, 5062002, 70),
					Array(5, 5064000, 20),
					Array(5, 2340000, 20),
					Array(5, 2049116, 5),
					Array(5, 5073000, 10),
					Array(5, 5390004, 8),
					Array(5, 5390018, 10),

					// 礼包6
					Array(6, 5062002, 80),	
					Array(6, 5062500, 30),
					Array(6, 5064000, 30),
					Array(6, 2048307, 1),
					Array(6, 2340000, 25),
					Array(6, 2049116, 10),
					Array(6, 5390004, 15),	
					Array(6, 5390018, 20),
					Array(6, 4310036, 3000),

					// 礼包7
					Array(7, 2431996, 1),
					Array(7, 5062002, 100),
					Array(7, 5062500, 50),
					Array(7, 5064000, 35),
					Array(7, 2048307, 1),
					Array(7, 2340000, 35),
					Array(7, 2049116, 15),
					Array(7, 5390004, 100),
					Array(7, 5390018, 40),
					Array(7, 4310036, 3500),
					
					// 礼包8
					Array(8, 2431989, 1),
					Array(8, 2432069, 1),
					Array(8, 3994417, 1),
					Array(8, 1112915, 1),
					Array(8, 1112793, 1),
					Array(8, 5062002, 100),
					Array(8, 5062500, 100),
					Array(8, 5064000, 40),
					Array(8, 2048307, 1),
					Array(8, 2340000, 40),
					Array(8, 2049116, 20),
					
					// 礼包9
					Array(9, 2431996, 1),
					Array(9, 1112915, 1),
					Array(9, 1112793, 1),
					Array(9, 3994417, 1),
					Array(9, 3994418, 1),
					Array(9, 5062002, 100),
					Array(9, 5062500, 80),
					Array(9, 2048307, 1),
					Array(9, 2049750, 5),
					Array(9, 2340000, 50),
					Array(9, 5064000, 50),
					Array(9, 2049116, 30),
					Array(9, 4001715, 1),
					
					// 礼包10
					Array(10, 2431991, 1),
					Array(10, 2432069, 1),
					Array(10, 1112915, 1),
					Array(10, 1112793, 2),
					Array(10, 2049405, 1),
					Array(10, 3994417, 1),
					Array(10, 3994419, 1),
					Array(10, 5062002, 150),
					Array(10, 5062500, 100),
					Array(10, 5064000, 50),
					Array(10, 2340000, 50),
					Array(10, 2049116, 40),
					Array(10, 4001715, 2),
					Array(10, 3010696, 1),

                                        // 礼包11
					Array(11, 2431991, 2),
					Array(11, 2049405, 1),
					Array(11, 2046856, 2),
					Array(11, 2432069, 2),
					Array(11, 1112915, 1),
					Array(11, 1112793, 1),
					Array(11, 3994417, 2),
					Array(11, 3994418, 1),
					Array(11, 3994419, 1),
					Array(11, 3994420, 1),
					Array(11, 5062002, 200),
					Array(11, 5062500, 100),
					Array(11, 5064000, 50),
					Array(11, 2340000, 50),
					Array(11, 2049116, 40),
					Array(11, 4001715, 3),
					Array(11, 3010658, 1),

                                        // 礼包12
					Array(12, 2431991, 2),
					Array(12, 1182017, 1),
					Array(12, 2049405, 1),
					Array(12, 2432069, 2),
					Array(12, 2046856, 4),
					Array(12, 1112915, 1),
					Array(12, 1112793, 2),
					Array(12, 3994417, 2),
					Array(12, 3994418, 1),
					Array(12, 3994419, 1),
					Array(12, 3994420, 1),
					Array(12, 3994421, 1),
					Array(12, 3994422, 1),
					Array(12, 5062002, 300),
					Array(12, 5062500, 100),
					Array(12, 5064000, 80),
					Array(12, 2340000, 80),
					Array(12, 2049116, 80),
					Array(12, 4001715, 4),
					Array(12, 3010936, 1),
				              // 礼包13
					Array(13, 3994417, 2),
					Array(13, 3994418, 1),
					Array(13, 3994419, 1),
					Array(13, 3994420, 1),
					Array(13, 3994421, 1),
					Array(13, 3994422, 1),
					Array(13, 1112793, 2),
					Array(13, 2432069, 3),
					Array(13, 5062009, 400),
					Array(13, 2049122, 200),
					Array(13, 2431993, 2),
					Array(13, 3010838, 1),

                                        // 礼包14
					Array(14, 2431991, 4),
					Array(14, 2432069, 4),
					Array(14, 2046856, 10),
					Array(14, 1112915, 4),
					Array(14, 1112793, 4),
					Array(14, 3994417, 5),
					Array(14, 3994418, 4),
					Array(14, 3994419, 4),
					Array(14, 3994420, 4),
					Array(14, 3994421, 4),
					Array(14, 3994422, 4),
					Array(14, 5062002, 300),
					Array(14, 5062500, 100),
					Array(14, 5064000, 100),
					Array(14, 2340000, 100),
					Array(14, 2049116, 100),
					Array(14, 5390018, 100),
					Array(14, 4001715, 8),
					Array(14, 3010832, 1)
					);

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0)
	{
		cm.dispose();
		return;
	}
	if (mode == 1)
	{
		status++;
	} else {
		status--;
	}

	rmb = cm.getRMB();
	var curlevel = -1;

	if (status == 0) {
		text = "您累计充值金额为： #r" + rmb + "#k 元\r\n\r\n";
		for (var i = 1; i <= condition.length; i++) {
			text += "#b#L" + i + "#"+aaa+" 累计充值 #r" + condition[i-1] + " #b元奖励";
			if (cm.getBossLogAcc("累计充值礼包" + i) == -1) {
				text += "(已领取)";
				curlevel = curlevel == -1 ? i : curlevel;
			}
			text += "#l\r\n";
		}
		text += "#k";
		cm.sendSimple(text);
	} else if (status == 1) {
		sel = selection;
		text = "\t\t\t\t#e#r- 累计充值" + condition[selection - 1] + "元奖励 -#k#n\r\n\r\n";
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == selection) {
				text += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
			}
		}
		cm.sendYesNo(text);
	} else if (status == 2) {
		if (cm.getBossLogAcc("累计充值礼包" + sel) == -1) {
			cm.sendOk("这个礼包您已经领取过了");
			cm.dispose();
			return;
		}
		if (rmb < condition[sel-1]) {
			cm.sendOk("累计充值金额不足，无法领取。");
			cm.dispose();
			return;
		}
		var rewardlist = new Array();
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == sel) {
				rewardlist.push(new Array(reward[i][1], reward[i][2]));
			}
		}
		if (!cm.canHoldSlots(rewardlist.length)) {
			cm.sendOk("包裹空间不足，请确保包裹每个栏位有至少 " + rewardlist.length + " 格空间");
			cm.dispose();
			return;
		}
		for (var i = 0; i < rewardlist.length; i++) {
			cm.gainItem(rewardlist[i][0], rewardlist[i][1]);
		}
		cm.setBossLogAcc("累计充值礼包" + sel, -2);
		cm.playerMessage(1, "领取成功！");
		cm.channelMessage(0x18, "『累计充值奖励』" + " : " + "玩家 " + cm.getChar().getName() + " 领取了累计充值 " + condition[sel-1] + " 元奖励。");
		cm.dispose();
	}
}
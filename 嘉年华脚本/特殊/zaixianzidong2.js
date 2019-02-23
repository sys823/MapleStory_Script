
var status = -1;
var text;
var sel;
var time;
var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ca = java.util.Calendar.getInstance();
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒

// 每个礼包所需的在线时长
var condition = new Array(60, 120,360,720,1080,1200);
var reward = new Array(// 礼包编号、道具id、数量
					// 礼包30
					Array(1, 1000, 1),
					Array(1, 5000, 2),
					Array(2, 10000, 1),
					Array(2, 8000, 2),
					Array(3, 12000, 1),
					Array(3, 9000, 2),
					Array(4, 17000, 2),
					Array(4, 10000, 1),
					Array(5, 20000, 1),
					Array(5, 20000, 2),
					Array(6, 10, 3)

					);

function start() {
	if (cm.haveItem(4001443,1)){
		var A = 20;
	}else{
		var A = 0;
	}
	if (cm.haveItem(4001440,1)){
		//A = A+1200;
	}
	var time = cm.getOnlineTime()+A;
	if (cm.getDaysPQLog("自动领取",7)!=0){
	for (var i = 0;i<condition.length ;i++ ){
		if ((hour == 23 && (minute >= 50 && minute <= 59)) || (hour == 0 && (minute >= 0 && minute <= 10))){
			//cm.sendOk("#d服务器当前时间： #r" + hour +" 时 " + minute + " 分 " + second + " 秒#k\r\n\r\n#e#d提示#n#k：#r23 ： 50 #b至#r 00 ： 10 #b时无法领取在线奖励。#k");
			cm.dispose();
			return;
		}else if (cm.getEventCount("在线点卷礼包" + (condition.length)) > 0) {
				cm.playerMessage(5, "[自动领取提示]:今日在线奖励已经全部领取");
				cm.dispose();
				break;
		}else if (cm.getEventCount("在线点卷礼包" + (i+1)) > 0) {
			//cm.sendOk("这个礼包您已经领取过了");
			cm.dispose();
			continue;
		}else if (time < condition[i]) {
			//cm.sendOk("在线时间不足，无法领取。");
			cm.dispose();
			break;
		}else{
			var rewardlist = new Array();
			for (var a = 0; a < reward.length; a++) {
				if (reward[a][0] == (i+1)) {
				rewardlist.push(new Array(reward[a][1], reward[a][2]));
				}
			}
			if (!cm.canHoldSlots(rewardlist.length)){
				cm.playerMessage(5, "[自动领取提示]:当前背包空间不足,请每个栏至少保留"+rewardlist.length+"个格子");
				cm.dispose();
				break;
			}else{
				for (var b = 0; b < rewardlist.length; b++) {
					if (rewardlist[b][1]==3){
						cm.addHyPay(-rewardlist[b][0]);
					}else{
						cm.gainNX(rewardlist[b][1], rewardlist[b][0]);
					}
				}
				cm.setEventCount("在线点卷礼包" + (i+1));
				cm.playerMessage(5, "[自动领取提示]:今日在线奖励成功自动领取" + condition[i] + " 分钟奖励。");
				cm.worldSpouseMessage(0x20,"『在线时间奖励』" + " : " + "玩家 " + cm.getChar().getName() + " 自动领取了在线 " + condition[i] + " 分钟奖励。");
				cm.dispose();
				break;
			}
		}
	}
	}
	cm.dispose();
}


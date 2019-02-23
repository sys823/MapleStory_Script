var status = 0;
//////////////////////////////////////////////////
//礼包名称
var bosslogId = "20141227补偿礼包1";
//礼包开始领取时间
var startTime = "2014-12-27 20:30:00";
//礼包结束领取时间
var endTime = "2014-12-27 23:00:00";
//领取要求最小等级
var minLevel = 180;
//需要在线时间
var minOnlineTime = 240;
//////////////////////////////////////////////////
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
			var text = "你好，我是福利礼包管理员。\r\n";
			text+="#b#L1#领取补偿礼包#l\r\n";
			text+="#L2#领取节日礼物#l\r\n";
			text+="#L3#了解什么是节日礼物#l\r\n";
			cm.sendSimple(text);
		} else if (status == 1){
			if (selection == 1) {
				if (cm.getPlayer().getLevel() < minLevel) {
					cm.sendOk("您的等级小于#r"+minLevel+"#k级，无法领取礼包，请加油哦！");
					cm.dispose();
					return; 
				}
				if (cm.getPlayer().getTodayOnlineTime() < minOnlineTime) {
					cm.sendOk("在线时间小于#r"+minOnlineTime+"#k分钟，无法领取礼包，请加油哦！");
					cm.dispose();
					return; 
				}
				var currentTimestamp = java.lang.System.currentTimeMillis();
				var startTimestamp = java.sql.Timestamp.valueOf(startTime).getTime();
				var endTimestamp = java.sql.Timestamp.valueOf(endTime).getTime();
				//限制领取时段
				if (currentTimestamp < startTimestamp || currentTimestamp > endTimestamp) {
					cm.sendOk("领取时间为：#r"+startTime.substring(0, 16)+"#k至#r"+endTime.substring(0, 16)+"#k，当前时间还未到或已经超时");
					cm.dispose();
					return ;
				}
				
				if (cm.getBossLogAcc(bosslogId)!=-1) {
					//写入BOSSLOG
					cm.setBossLogAcc(bosslogId, -2);
					//定义礼包内容 ID,数量
					var itemList = Array(
						Array(5062000, 20),
						Array(5062002, 20),
						Array(5062500, 20),
						Array(2431741, 5)
					);
					var str = "您成功领取了补偿礼包，礼包内容如下：\r\n";
					for (var key in itemList) {
						str +="#b#v"+itemList[key][0]+"##t"+itemList[key][0]+"##kx#r"+itemList[key][1]+"#k\r\n";
						cm.gainItem(itemList[key][0], itemList[key][1]);
					}
					cm.sendOk(str);
					cm.dispose();
				} else {
					cm.sendOk("您已经领取过补偿礼包");
					cm.dispose();
				}
			} else if (selection == 2) {
				var giftBosslogId = '节日礼包20150101';
				if (cm.getBossLogAcc(giftBosslogId)!=-1) {
					
					if (cm.getPlayer().getLevel() < minLevel) {
						cm.sendOk("您的等级小于#r"+minLevel+"#k级，无法领取礼包，请加油哦！");
						cm.dispose();
						return; 
					}
					if (cm.getPlayer().getTodayOnlineTime() < minOnlineTime) {
						cm.sendOk("在线时间小于#r"+minOnlineTime+"#k分钟，无法领取礼包，请加油哦！");
						cm.dispose();
						return; 
					}
					//写入BOSSLOG
					cm.setBossLogAcc(giftBosslogId, -2);
					var itemList = Array(
						Array(5062000, 10),
						Array(5062002, 10),
						Array(5062500, 10),
						Array(2431741, 5)
					);
					var str = "您成功领取了节日礼包，礼包内容如下：\r\n";
					for (var key in itemList) {
						str +="#b#v"+itemList[key][0]+"##t"+itemList[key][0]+"##kx#r"+itemList[key][1]+"#k\r\n";
						cm.gainItem(itemList[key][0], itemList[key][1]);
					}
					cm.sendOk(str);
					cm.dispose();
				} else {
					cm.sendOk("您已经领过礼包了！");
					cm.dispose();
				}
			} else if (selection == 3) {
				cm.sendSimple("逢年过节我都会给大家带来一些好礼。每次节日礼物或者补偿奖励都可以到我这里来领取。");
				status=-1;
				//cm.dispose();
			}
		}
   }
}
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var status = -1;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {   
	if (mode == -1) {
		cm.dispose();
	}else {
        if (status >= 0 && mode == 0) {
		   cm.dispose();
		   return;                    
		}
		if (mode == 1) {
		   status++;
		}else {
		   status--;
		}
		if (status == 0) {
			weekday-=1;
			var text = "#r#h ##k，你好啊，每#r周五、周六、周日#k晚上的#b08:00至08:05#k可以参与挤牛奶活动，帮我挤牛奶，每挤一次即可获得#r2点#k点券~还有几率获得#b封印解除卷、魔方、防爆、祝福卷轴#k哦！";
			//text = "今晚9点至9点05分，4倍收益，抄点";
			if(hour == 20 && (minute >= 0 && minute <= 5) && (weekday == 6 || weekday == 5 || weekday == 0)){// || cm.getPlayer().getName() == "管理员哈士奇"){
				var random = Math.floor(Math.random()*4000);
				if (random == 1258)
				{
					cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 额外获得【封印解除卷】一张。", 5120012);
					cm.worldSpouseMessage(0x15, "[奶牛妈妈] : 恭喜 【" + cm.getChar().getName() + "】 在挤牛奶的时候额外获得【封印解除卷】一张.");
					cm.gainItem(2610001, 1);
				} else if (random >= 1000 && random <= 1050) {
					var itemList = Array(5062000,5062002,5062500,5062010,5064000,2340000);
					var itemIdx = Math.floor(Math.random()*itemList.length);
					cm.worldSpouseMessage(0x15, "[奶牛妈妈] : 恭喜 【" + cm.getChar().getName() + "】 在挤牛奶的时候额外获得【"+cm.getItemName(itemList[itemIdx])+"】一个.");
					cm.gainItem(itemList[itemIdx], 1);
				}
				cm.gainNX(2);
				cm.dispose();
			} else {
				cm.sendOk(text);
				cm.dispose();
			}
		}
	}
}

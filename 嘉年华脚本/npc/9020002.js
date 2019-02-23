﻿var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        var mapId = cm.getMapId();
        if (mapId == 910340000) {
            cm.warp(910340700, 0);
            cm.removeAll(4001007);
            cm.removeAll(4001008);
            cm.dispose();
        } else {
            var outText;
            if (mapId == 910340600) {
                outText = "你准备好离开这个地图吗？";
            } else {
                outText = "一旦你离开地图，你必须重新启动整个任务如果你想再试一次。你还想离开这里吗？";
            }
            if (status == 0) {
                cm.sendYesNo(outText);
            } else if (mode == 1) {
				if (mapId == 910340600) {
				if (cm.getEventCount("废弃")<10){
					cm.gainNX(1,1000);
				}
				if (cm.getEventCount("废弃")==50||cm.getEventCount("废弃")==100||cm.getEventCount("废弃")==150||cm.getEventCount("废弃")==200){
					cm.setEventCount("废弃");
		var A = Math.floor(Math.random() * 20)+15;
		var B = Math.floor(Math.random() * 20)+30;
		var C = Math.floor(Math.random() * 30)+30;
		cm.gainItem(5062500,A);
		cm.gainItem(4310036,B);
		cm.gainItem(2430781,1);
		cm.gainPlayerPoints(C);
		cm.worldSpouseMessage(0x20,"『废气组队』" + ":" + "玩家 " + cm.getChar().getName() + " 通关"+cm.getEventCount("废弃")+"次废气获得了" +A+ "个大师魔方、"+B+"个征服币、"+C+"点积分和每日箱子");
				}else{
		cm.setEventCount("废弃");
		var A = Math.floor(Math.random() * 5);
		var B = Math.floor(Math.random() * 10);
		var C = Math.floor(Math.random() * 30);
		cm.gainItem(5062500,A);
		cm.gainItem(4310036,B);
		cm.gainItem(2430781,1);
		cm.gainPlayerPoints(C);
		cm.worldSpouseMessage(0x20,"『废气组队』" + ":" + "玩家 " + cm.getChar().getName() + " 通关"+cm.getEventCount("废弃")+"次废气获得了" +A+ "个大师魔方、"+B+"个征服币、"+C+"点积分和每日箱子");
		}
				}
                cm.warp(910340000, "st00");
                cm.dispose();
            }
        }
    }
}

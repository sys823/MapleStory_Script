﻿status = -1;
var itemList = Array(
1132246,//最高级贝勒德刻印腰带 
1122267,//最高级贝勒德刻印吊坠
1032223,//最高级贝勒德耳环
1113075//最高级贝勒德戒指
);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
       if (mode == 0 && status == 0) {
			im.dispose();
			return;
		}
        status--;
    }
    if (status == 0) {
        var text = "";
		for(var i=0; i<itemList.length; i++) {
			text+="#L"+i+"##v"+itemList[i]+"##z"+itemList[i]+"##l\r\n";
		}
		im.sendSimple("请选择你要换取的装备：\r\n#r"+text);
    } else if(status == 1) {
		var itemid = itemList[selection];
		var itemnum = Math.floor(Math.random()*1+1);
		var item = im.gainGachaponItem(itemid, itemnum, "贝勒德箱子", 3);
		im.gainItem(2432304, -1);
		im.sendOk("恭喜您，获得了"+itemnum+"张#b#z"+itemid+"#");
		im.safeDispose();
	}
}
﻿status = -1;
var itemList = Array(
1542063,
1552063,
1262016,
1212063,
1222058,
1232057,
1242060,
1242061,
1302275,
1312153,
1412135,
1322203,
1332225,
1342082,
1362090,
1372177,
1382208,
1402196,
1422140,
1432167,
1442223,
1452205,
1462193,
1472214,
1482168,
1492179,
1522094,
1532098,
1252015
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
		im.sendSimple("请选择你要换取的150级武器箱子：\r\n#r"+text);
    } else if(status == 1) {
		var itemid = itemList[selection];
		var itemnum = Math.floor(Math.random()*1+1);
		var item = im.gainGachaponItem(itemid, itemnum, "150级武器自选箱子", 3);
		im.gainItem(2431509, -1);
		im.sendOk("恭喜您，获得了"+itemnum+"个#b#z"+itemid+"#");
		im.safeDispose();
	}
}
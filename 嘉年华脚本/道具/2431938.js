status = -1;
var itemList = Array(
// ------ 150装备 ------
Array(1542063,400,1,3),  //
Array(1552063,400,1,3),  //
Array(1212063,400,1,3),  //
Array(1222058,400,1,3),  //
Array(1242060,400,1,3),  //
Array(1242061,400,1,3),  //
Array(1302275,400,1,3),  //
Array(1312153,400,1,3),  //
Array(1412135,400,1,3),  //
Array(1322203,400,1,3),  //
Array(1332225,400,1,3),  //
Array(1342082,400,1,3),  //
Array(1362090,400,1,3),  //
Array(1372177,400,1,3),  //
Array(1382208,400,1,3),  //
Array(1402196,400,1,3),  //
Array(1422140,400,1,3),  //
Array(1432167,400,1,3),  //
Array(1442223,400,1,3),  //
Array(1452205,400,1,3),  //
Array(1462193,400,1,3),  //
Array(1472214,400,1,3),  //
Array(1482168,400,1,3),  //
Array(1492179,400,1,3),  //
Array(1522094,400,1,3),  //
Array(1532098,400,1,3),  //
Array(1252015,400,1,3),  //
Array(1262016,400,1,3)  //
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
		im.sendSimple("请选择你要换取的150级法弗纳箱子：\r\n#r"+text);
    } else if(status == 1) {
		var itemid = itemList[selection];
		var itemnum = Math.floor(Math.random()*1+1);
		var item = im.gainGachaponItem(itemid, itemnum, "150级法弗纳箱子", 3);
		//im.gainItem(2431938, -1);
		im.sendOk("恭喜您，获得了"+itemnum+"个#b#z"+itemid+"#");
		im.safeDispose();
	}
}
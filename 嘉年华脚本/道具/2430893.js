/* 全职业副手商店 */

status = -1;
var itemList = Array(
	Array(1099011, 1),
	Array(1099012, 1),
	Array(1353105, 1),
	Array(1342095, 1),
	Array(1352009, 1),
	Array(1352206, 1),
	Array(1352216, 1),
	Array(1352226, 1),
	Array(1352276, 1),
	Array(1352286, 1),
	Array(1352296, 1),
	Array(1352406, 1),
	Array(1352506, 1),
	Array(1352707, 1),
	Array(1352815, 1),
	Array(1352906, 1),
	Array(1352916, 1),
	Array(1352935, 1),
	Array(1352945, 1),
	Array(1352957, 1),
	Array(1352967, 1),
	Array(1352975, 1),
	Array(1353005, 1),
	Array(1352928, 1),
	Array(1352236, 1),
	Array(1352246, 1),
	Array(1352256, 1),
	Array(1352266, 1),
	Array(1352109, 1),
	Array(1352606, 1)
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
			text+="#L"+i+"##v"+itemList[i][0]+"##z"+itemList[i][0]+"##l\r\n";
		}
		im.sendSimple("请选择你要换取的极品副手：\r\n#r"+text);
    } else if(status == 1) {
		var itemid = itemList[selection][0];
		var itemnum = Math.floor(Math.random()*1+1);
		var item = im.gainGachaponItem(itemid, itemnum, "极品副手", 3);
		im.gainItem(2430893, -1);
		im.sendOk("恭喜您，获得了"+itemnum+"个#b#z"+itemid+"#");
		im.safeDispose();
	}
}
//
﻿var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
//Array(1022197, 980),
//Array(1132242, 500),
//Array(1003946, 500), 
//Array(1102612, 500),
//Array(1082540, 500),
//Array(1052647, 500),
//Array(1072853, 500),
//Array(3700161, 800),
Array(1162046, 200),
Array(1212084, 800),
Array(1222079, 800),
Array(1232079, 800),
Array(1242085, 800),
Array(1242086, 800),
Array(1302224, 800),
Array(1312115, 800),
Array(1322161, 800),
Array(1332192, 800), 
Array(1342070, 800), 
Array(1362104, 800), 
Array(1372137, 800), 
Array(1382167, 800),
Array(1402150, 800), 
Array(1412103, 800), 
Array(1422106, 800), 
Array(1432137, 800), 
Array(1442181, 800),
Array(1452168, 800),
Array(1472178, 800),
Array(1482139, 800),
Array(1492149, 800),
Array(1522108, 800),
Array(1532113, 800),
Array(1252063, 800),
Array(1462157, 800),
Array(1132246, 58000),
Array(1122267, 58000),
Array(1032223, 58000),
Array(1113075, 58000),
Array(1142002, 1500),
Array(1142005, 2500),
Array(1142006, 3500),
Array(1142008, 3500),
Array(1142716, 3500),
Array(1142717, 3500),
Array(1142716, 3500),
Array(1142669, 3500),
Array(1142656, 3500)
);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "#h0#,#e#r欢迎来到兔花花RED币兑换中心，您可以在这里兑换(请保留至少一格物品栏领取)#e#bRED币物品#n#k,请选择你想要兑换的物品\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# - #r"+itemlist[i][1]+"#b RED币  \r\n";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("请输入你请你输入想要兑换的数量\r\n\r\n#r1个需要" + itemlist[selects][1] + "个#bRED币#k", 1, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("你想兑换" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "RED币。");
        } else if (a == 3) {
            if (cm.haveItem(4310088,buynum * itemlist[selects][1])) {
                cm.gainItem(4310088, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("兑换成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的RED币。");
                cm.dispose();
            }
        }
    }//mode
}//f
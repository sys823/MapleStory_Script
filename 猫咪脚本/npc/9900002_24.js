/* 玩具商店 */

var status = -1;
var itemList = Array(
Array(1302017, 88000), 
Array(1302025, 88000), 
Array(1302026, 88000), 
Array(1302027, 88000), 
Array(1302029, 88000), 
Array(1302028, 88000), 
Array(1302210, 88000), 
Array(1442039, 168000), 
Array(1322051, 88000), 
Array(1302049, 88000), 
Array(1302220, 88000), 
Array(1322157, 88000), 
Array(1362064, 88000), 
Array(1372136, 88000), 
Array(1382166, 88000), 
Array(1452166, 88000), 
Array(1402014, 290000), 
Array(1302021, 66000), 
Array(1362063, 88000), 
Array(1302219, 88000), 
Array(1322156, 88000), 
Array(1302026, 52000), 
Array(1302150,96000), 
Array(1112100,120000), 
Array(1302104, 57000),
Array(1322102, 99000),
Array(1302160, 51000),
Array(1302161, 120000),
Array(1302162, 72000),
Array(1332030, 71000),
Array(1412056, 110000),
Array(1422036, 76000),
Array(1402110, 130000),
Array(1402049, 99000)
);
var selectedItem = -1;
var selectedCost = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的道具：";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1] / 5 + "#k点卷#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1] / 5;
            cm.sendYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 点卷？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selectedItem <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "点卷商店", 3, true);
            if (gachaponItem != -1) {
                cm.gainNX( - selectedCost);
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 点卷。");
        }
        cm.dispose();
    }
}
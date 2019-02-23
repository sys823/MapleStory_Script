﻿/* 积分商店 - 洗能力
Array(2702001,1,2000),
Array(2702001,10,20000),
 */

var status = -1;
var itemList = Array(
Array(4021014, 1, 2,4021013),
Array(4021015, 1, 2,4021014),
Array(4021016, 1, 2,4021015)
);
var selectedItem = -1;
var selequantity = -1;
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您要升级的材料：";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##kx(" + itemList[i][1] + ") 需要 #v"+itemList[i][3]+"##z"+itemList[i][3]+"##r" + itemList[i][2] + "#k个#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selequantity = item[1];
            selectedCost = item[2];
			selectedneed = item[3];
			cm.sendGetNumber("你选择的材料为#b#v" + selectedItem + "#  需要#r#z"+itemList[selection][3]+"##k来兑换.比例为 "+itemList[selection][2]+":1 \r\n\r\n请输入你要兑换的个数",1,1,cm.getItemQuantity(itemList[selection][3]));
            //cm.sendYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 积分？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selection <= 0 || selectedItem <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
        if (cm.getItemQuantity(selectedneed) >= (selection*selectedCost)) {
            if (cm.canHold(selectedItem, selection)) {
                //cm.gainPlayerPoints( - (selectedCost*selection));
                cm.gainItem(selectedItem, selection);
				cm.gainItem(selectedneed, -(selection*selectedCost));
				cm.gainMeso(-1000000);
                cm.worldMessage("『结晶材料』 " + cm.getName() + " 玩家在结晶材料处兑换了" + cm.getItemName(selectedItem) + " x " + selection+"扣除固定手续100W");
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selection + ") 。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有空间。");
            }	
	} else {
            cm.sendOk("请检查你是否有那么多材料来兑换");
        }
        status = -1;
    }
}
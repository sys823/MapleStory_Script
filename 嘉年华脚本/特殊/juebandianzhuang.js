﻿/*绝版点装*/
var status = 0;
var choice;
var itemxh=new Array("1702565 ","1702442 ","1002888 ",
"1002890 ",
"1002846 ",
"1003133 ",
"1002839 ",
"1050152 ",
"1051180 ",
"1050119 ",
"1051131 ",
"1003249 ",
"1003250 ",
"1003251 ",
"1003252 ",
"1003253 ",
"1003254 ",
"1003255 ",
"1003256 ",
"1062074 ",
"1102338 ",
"2432563",
"2432567 ",
"1003222 ",
"1003141 ",
"1042208 ",
"1042104  ",
"1042151 ",
"1042193 ",
"1042198 ",
"1052224 ",
"1052275 ",
"1003109", 
"1052296","1003147","1002501","1003009","1003013","1003077","1003192","1003193","1003194","1003220","1112100","1112209","1112118","1112119","1112120","1112228","1112229","1112230","1112916","1052200","1051219","1050209","1051255","1050215","1051262","1050210","1051256","1052458","1072662","1050242","1051292","1050248","1051304","1051294","1050299","1051359","1003965","1052661","1082549","1702461","1003639","1003640","1003641","1003642","1003941","1003942","1702366","1702377","1702007","1702051","1003542","1003543","1003545", "1003544","1000032","1001047","1000031","1001046","1000030","1001045","1002971","1052202","1002723","1003011","1102248","1003228","1002896","1003462","1003748","1002995","1052209","1702289","1003588","1003043","1042105","1052067","1002525","1012044","1702341","1702175","1702350","1102230","1102466","1422011","1043003","1092035","1402037","1302036","1302037","1072239","1332021","1112919","1302087","1402014","1322027","1402063","1412056","1332032","1332053","1302080","1012290","1012170","1442018","1302160","1302161","1302162","1112135","1112238","1003548","1102272","1050234","1051284","1002524","1051235","1003510","1042235","1062151","1003509","1052449","1112136","1052438","1112103","1050232","1051282","1003494","1112253","1112142","1112244","1112134","1112237","1051150","1051151","1051152","1051153","1002720","1702001","1702501");
var itemxhcost=new Array("1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1");

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("好吧，欢迎下次继续光临！.");
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;

        if (status == 0) {
            choices = "\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的绝版装备";
            for (var i = 0; i < itemxh.length; i++) {
                choices += "\r\n#L" + i + "##v" + itemxh[i] + "##z" + itemxh[i] + "#　#d需要#r" + itemxhcost[i] + "#d点卷#k#l";
            }
            cm.sendSimpleS("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#" + choices,2);
        } else if (status == 1) {
                cm.sendGetNumber("你选择的商品为#v" + itemxh[selection] + "#售价为：" + itemxhcost[selection] + "点卷/个\r\n请输入你购买的数量",1,1,cm.getPlayer().getCSPoints(1));
		choice = selection;
        } else if (status == 2) {
            fee = selection;
            money = fee*itemxhcost[choice];
            if (fee < 0) {
            cm.sendOk("不能输入0.或者你没有足够的点卷支付你要买的数量.!");
            cm.dispose();
            } else if (cm.getPlayer().getCSPoints(1) < money) {
            cm.sendOk("购买失败，你没有" + money + "点卷");
            cm.dispose();
            } else {
			cm.gainNX(-money);
            cm.gainItem(itemxh[choice], fee);
            cm.sendOk("恭喜，购买成功。");
            cm.dispose();
             }
        }
    }
}

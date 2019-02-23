var status = 0;
var eff = "#fUI/UIWindow/Quest/icon6/7#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请您选择您需要的功能:\r\n#b#L0#" + eff + "领取10-89级等级奖励#l\r\n#L1#" + eff + "领取90-149级等级奖励#l\r\n#L2#" + eff + "领取150-199级等级奖励#l\r\n#L3#" + eff + "领取200-249级等级奖励#l\r\n#L4#" + eff + "领取250级等级奖励#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                if (cm.getBossLog("10级奖励", 1) < 1 && (cm.getPlayer().getLevel() > 9 && cm.getPlayer().getLevel() < 290) && (cm.getSpace(5) > 1 && cm.getSpace(1) > 9)) {
                    cm.gainItem(1012057, 1, 10); //透明面具
                    cm.gainItem(1002186, 1, 10); //透明头盔
                    cm.gainItem(1102039, 1, 10); //
                    cm.gainItem(1082102, 1, 10); //
                    cm.gainItem(1092064, 1, 10); //
                    cm.gainItem(1072153, 1, 10); //
                    cm.gainItem(1702224, 1, 10); //
                    cm.gainItem(1022048, 1, 10); //
                    cm.gainItem(1032024, 1, 10);
                    cm.gainMeso(+200000);
                    cm.gainItem(5072000, 10);
                    cm.setBossLog("10级奖励", 1);
                    cm.sendOk("你成功领取奖励");
                    cm.worldMessage(cm.getChar().getName() + "玩家成功领取10-89等级奖励.");
                    cm.dispose();
                } else {
                    cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(装备栏9个空位以上,特殊栏1个空位以上).\r\n注:等级奖励只能领取一次.");
                    cm.dispose();
                }
                break;
            case 1:
                if (cm.getBossLog("50级奖励", 1) < 1 && (cm.getPlayer().getLevel() > 89 && cm.getPlayer().getLevel() < 2150) && cm.getSpace(5) > 2) {
                    cm.gainMeso(+1000000);
                    cm.gainItem(5040005, 10);
                    cm.setBossLog("50级奖励", 1);
                    cm.sendOk("你成功领取奖励");
                    cm.worldMessage(cm.getChar().getName() + "玩家成功领取90-149等级奖励.");
                    cm.dispose();
                } else {
                    cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(特殊栏3个空位以上).\r\n注:等级奖励只能领取一次.");
                    cm.dispose();
                }
                break;
            case 2:
                if (cm.getBossLog("100级奖励", 1) < 1 && (cm.getPlayer().getLevel() > 149 && cm.getPlayer().getLevel() < 2200) && cm.getSpace(5) > 1) {
                    cm.gainItem(5062000, 5, 7);
                    cm.setBossLog("100级奖励", 1);
                    cm.sendOk("你成功领取奖励");
                    cm.worldMessage(cm.getChar().getName() + "玩家成功领取150-199等级奖励.");
                    cm.dispose();
                } else {
                    cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(特殊栏2个空位以上).\r\n注:等级奖励只能领取一次.");
                    cm.dispose();
                }
                break;
            case 3:
                if (cm.getBossLog("150级奖励", 1) < 1 && (cm.getPlayer().getLevel() > 199 && cm.getPlayer().getLevel() < 2250) && (cm.getSpace(5) > 2 && cm.getSpace(3) > 1)) {
                    cm.gainItem(5062000, 10, 7);
                    cm.gainItem(5064000, 5, 7);
                    cm.gainItem(3010155, 1);
                    cm.setBossLog("150级奖励", 1);
                    cm.sendOk("你成功领取奖励");
                    cm.worldMessage(cm.getChar().getName() + "玩家成功领取200-249等级奖励.");
                    cm.dispose();
                } else {
                    cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(特殊栏3个空位以上,设置栏1个空位以上).\r\n注:等级奖励只能领取一次.");
                    cm.dispose();
                }
                break;
            case 4:
                if (cm.getBossLog("200级奖励", 1) < 1 && cm.getPlayer().getLevel() == 250 && cm.getSpace(5) > 2) {
                    cm.gainItem(5062002, 15, 7);
                    cm.gainItem(5064000, 5, 7);
                    cm.setBossLog("200级奖励", 1);
                    cm.sendOk("你成功领取奖励");
                    cm.worldMessage(cm.getChar().getName() + "玩家成功领取250等级奖励.");
                    cm.dispose();
                } else {
                    cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(特殊栏3个空位以上).#b\r\n注:等级奖励只能领取一次.");
                    cm.dispose();
                }
                break;
        }
    }
}

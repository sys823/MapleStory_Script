﻿var status = 0;
var choice;
var scrolls = Array(
Array("", 1012224, 0),
Array("", 1012225, 0),
Array("", 1012226, 0),
Array("", 1012227, 0),
Array("", 1012228, 0),
Array("", 1012229, 0),
Array("", 1012230, 0),
Array("", 1012231, 0),
Array("", 1012232, 0),
Array("", 1012233, 0),
Array("", 1012234, 0),
Array("", 1012235, 0),
Array("", 1012236, 0),
Array("", 1012237, 0),
Array("", 1012238, 0),
Array("", 1012239, 0),
Array("", 1012240, 0),
Array("", 1012241, 0),
Array("", 1012242, 0),
Array("", 1012243, 0),
Array("", 1012244, 0),
Array("", 1012245, 0),
Array("", 1012246, 0),
Array("", 1012247, 0),
Array("", 1012248, 0),
Array("", 1012249, 0),
Array("", 1012250, 0),
Array("", 1012251, 0),
Array("", 1012252, 0),
Array("", 1012254, 0),
Array("", 1012258, 0),
Array("", 1012259, 0),
Array("", 1012260, 0),
Array("", 1012265, 0),
Array("", 1012266, 0),
Array("", 1012267, 0),
Array("", 1012268, 0),
Array("", 1012269, 0),
Array("", 1012270, 0),
Array("", 1012276, 0),
Array("", 1012277, 0),
Array("", 1012278, 0),
Array("", 1012279, 0),
Array("", 1012280, 0),
Array("", 1012281, 0),
Array("", 1012282, 0),
Array("", 1012283, 0),
Array("", 1012284, 0),
Array("", 1012285, 0),
Array("", 1012286, 0),
Array("", 1012287, 0),
Array("", 1012288, 0),
Array("", 1012290, 0),
Array("", 1012291, 0),
Array("", 1012292, 0),
Array("", 1012293, 0),
Array("", 1012294, 0),
Array("", 1012295, 0),
Array("", 1012296, 0),
Array("", 1012297, 0),
Array("", 1012300, 0),
Array("", 1012301, 0),
Array("", 1012302, 0),
Array("", 1012303, 0),
Array("", 1012304, 0),
Array("", 1012305, 0),
Array("", 1012306, 0),
Array("", 1012307, 0),
Array("", 1012308, 0),
Array("", 1012309, 0),
Array("", 1012310, 0),
Array("", 1012311, 0),
Array("", 1012312, 0),
Array("", 1012313, 0),
Array("", 1012314, 0),
Array("", 1012316, 0),
Array("", 1012317, 0),
Array("", 1012318, 0),
Array("", 1012319, 0),
Array("", 1012321, 0),
Array("", 1012325, 0),
Array("", 1012326, 0),
Array("", 1012327, 0),
Array("", 1012328, 0),
Array("", 1012329, 0),
Array("", 1012330, 0),
Array("", 1012331, 0),
Array("", 1012332, 0),
Array("", 1012339, 0),
Array("", 1012340, 0),
Array("", 1012341, 0),
Array("", 1022021, 0),
Array("", 1022022, 0),
Array("", 1022047, 0),
Array("", 1022058, 0),
Array("", 1022060, 0),
Array("", 1022066, 0),
Array("", 1022073, 0),
Array("", 1022088, 0),
Array("", 1022089, 0),
Array("", 1022097, 0),
Array("", 1022114, 0),
Array("", 1022115, 0),
Array("", 1022117, 0),
Array("", 1022118, 0),
Array("", 1022119, 0),
Array("", 1022120, 0),
Array("", 1022123, 0),
Array("", 1022124, 0),
Array("", 1022125, 0),
Array("", 1022126, 0),
Array("", 1022129, 0),
Array("", 1022132, 0),
Array("", 1022134, 0),
Array("", 1022135, 0),
Array("", 1022136, 0),
Array("", 1022137, 0),
Array("", 1022138, 0),
Array("", 1022139, 0),
Array("", 1022141, 0),
Array("", 1022143, 0),
Array("", 1022144, 0),
Array("", 1022145, 0),
Array("", 1022146, 0),
Array("", 1022148, 0),
Array("", 1022149, 0),
Array("", 1022155, 0),
Array("", 1022156, 0),
Array("", 1022157, 0),
Array("", 1032000, 0),
Array("", 1032001, 0),
Array("", 1032002, 0),
Array("", 1032003, 0),
Array("", 1032004, 0),
Array("", 1032005, 0),
Array("", 1032006, 0),
Array("", 1032007, 0),
Array("", 1032008, 0),
Array("", 1032009, 0),
Array("", 1032010, 0),
Array("", 1032011, 0),
Array("", 1032012, 0),
Array("", 1032013, 0),
Array("", 1032014, 0),
Array("", 1032015, 0),
Array("", 1032016, 0),
Array("", 1032017, 0),
Array("", 1032018, 0),
Array("", 1032019, 0),
Array("", 1032020, 0),
Array("", 1032021, 0),
Array("", 1032022, 0),
Array("", 1032023, 0),
Array("", 1032025, 0),
Array("", 1032026, 0),
Array("", 1032027, 0),
Array("", 1032028, 0),
Array("", 1032030, 0),
Array("", 1032031, 0),
Array("", 1032032, 0),
Array("", 1032033, 0),
Array("", 1032035, 0),
Array("", 1032039, 0),
Array("", 1032040, 0),
Array("", 1032041, 0),
Array("", 1032042, 0),
Array("", 1032047, 0),
Array("", 1032055, 0),
Array("", 1032056, 0),
Array("", 1032057, 0),
Array("", 1032058, 0),
Array("", 1032059, 0),
Array("", 1032060, 0),
Array("", 1032061, 0),
Array("", 1032062, 0),
Array("", 1032075, 0),
Array("", 1032076, 0),
Array("", 1032077, 0),
Array("", 1032078, 0),
Array("", 1032079, 0),
Array("", 1032080, 0),
Array("", 1032081, 0),
Array("", 1032082, 0),
Array("", 1032083, 0),
Array("", 1032084, 0),
Array("", 1032085, 0),
Array("", 1032086, 0),
Array("", 1032087, 0),
Array("", 1032088, 0),
Array("", 1032089, 0),
Array("", 1032090, 0),
Array("", 1032091, 0),
Array("", 1032092, 0),
Array("", 1032093, 0),
Array("", 1032095, 0),
Array("", 1032096, 0),
Array("", 1032097, 0),
Array("", 1032098, 0),
Array("", 1032099, 0)
);

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
            choices = "\r\n兔兔币余额：#r" + cm.getHyPay(1) + "#k个 (#r买后不支持退货哟亲#k)";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i][1] + "##z" + scrolls[i][1] + "#　#d需要#r" + scrolls[i][2] + "#d兔兔币#k#l";
            }
            cm.sendSimpleS("欢迎来到配件1店,你想买我们商店的物品么?请选择吧：." + choices,2);
        } else if (status == 1) {
            cm.sendYesNo("你确定需要购买#v" + scrolls[selection][1] + "##t" + scrolls[selection][1] + "#?");
		choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][2];
            if (cm.getHyPay(1) < money) {
                cm.sendOk("抱歉，你没足够的兔兔币！");
                cm.dispose();
            } else {
                cm.addHyPay(money);
                cm.gainItem(scrolls[choice][1], 1);
                cm.sendOk("购买成功.");
                cm.dispose();
            }
        }
    }
}
﻿var status = 0;
var choice;
var scrolls = Array(
Array("", 1050081, 0),
Array("", 1050082, 0),
Array("", 1050083, 0),
Array("", 1050088, 0),
Array("", 1050089, 0),
Array("", 1050090, 0),
Array("", 1050091, 0),
Array("", 1050092, 0),
Array("", 1050093, 0),
Array("", 1050094, 0),
Array("", 1050095, 0),
Array("", 1050096, 0),
Array("", 1050097, 0),
Array("", 1050098, 0),
Array("", 1050099, 0),
Array("", 1050100, 0),
Array("", 1050102, 0),
Array("", 1050103, 0),
Array("", 1050104, 0),
Array("", 1050105, 0),
Array("", 1050106, 0),
Array("", 1050107, 0),
Array("", 1050108, 0),
Array("", 1050122, 0),
Array("", 1050127, 0),
Array("", 1050131, 0),
Array("", 1050132, 0),
Array("", 1050133, 0),
Array("", 1050134, 0),
Array("", 1050155, 0),
Array("", 1050162, 0),
Array("", 1050163, 0),
Array("", 1050164, 0),
Array("", 1050165, 0),
Array("", 1050166, 0),
Array("", 1050169, 0),
Array("", 1050173, 0),
Array("", 1050174, 0),
Array("", 1050175, 0),
Array("", 1050176, 0),
Array("", 1050191, 0),
Array("", 1050192, 0),
Array("", 1050194, 0),
Array("", 1050195, 0),
Array("", 1050196, 0),
Array("", 1050197, 0),
Array("", 1050198, 0),
Array("", 1050199, 0),
Array("", 1050200, 0),
Array("", 1050201, 0),
Array("", 1050202, 0),
Array("", 1050203, 0),
Array("", 1050204, 0),
Array("", 1050205, 0),
Array("", 1050206, 0),
Array("", 1050222, 0),
Array("", 1050233, 0),
Array("", 1050236, 0),
Array("", 1050237, 0),
Array("", 1050238, 0),
Array("", 1050239, 0),
Array("", 1050240, 0),
Array("", 1051000, 0),
Array("", 1051001, 0),
Array("", 1051003, 0),
Array("", 1051004, 0),
Array("", 1051005, 0),
Array("", 1051006, 0),
Array("", 1051007, 0),
Array("", 1051008, 0),
Array("", 1051009, 0),
Array("", 1051010, 0),
Array("", 1051011, 0),
Array("", 1051012, 0),
Array("", 1051013, 0),
Array("", 1051014, 0),
Array("", 1051015, 0),
Array("", 1051016, 0),
Array("", 1051017, 0),
Array("", 1051023, 0),
Array("", 1051024, 0),
Array("", 1051025, 0),
Array("", 1051026, 0),
Array("", 1051027, 0),
Array("", 1051030, 0),
Array("", 1051031, 0),
Array("", 1051032, 0),
Array("", 1051033, 0),
Array("", 1051034, 0),
Array("", 1051037, 0),
Array("", 1051038, 0),
Array("", 1051039, 0),
Array("", 1051041, 0),
Array("", 1051042, 0),
Array("", 1051043, 0),
Array("", 1051044, 0),
Array("", 1051045, 0),
Array("", 1051046, 0),
Array("", 1051047, 0),
Array("", 1051052, 0),
Array("", 1051053, 0),
Array("", 1051054, 0),
Array("", 1051055, 0),
Array("", 1051056, 0),
Array("", 1051057, 0),
Array("", 1051058, 0),
Array("", 1051062, 0),
Array("", 1051063, 0),
Array("", 1051064, 0),
Array("", 1051065, 0),
Array("", 1051066, 0),
Array("", 1051067, 0),
Array("", 1051068, 0),
Array("", 1051069, 0),
Array("", 1051077, 0),
Array("", 1051078, 0),
Array("", 1051079, 0),
Array("", 1051080, 0),
Array("", 1051082, 0),
Array("", 1051083, 0),
Array("", 1051084, 0),
Array("", 1051085, 0),
Array("", 1051090, 0),
Array("", 1051091, 0),
Array("", 1051092, 0),
Array("", 1051093, 0),
Array("", 1051094, 0),
Array("", 1051095, 0),
Array("", 1051096, 0),
Array("", 1051097, 0),
Array("", 1051098, 0),
Array("", 1051101, 0),
Array("", 1051102, 0),
Array("", 1051103, 0),
Array("", 1051104, 0),
Array("", 1051105, 0),
Array("", 1051106, 0),
Array("", 1051107, 0),
Array("", 1051130, 0),
Array("", 1051140, 0),
Array("", 1051150, 0),
Array("", 1051151, 0),
Array("", 1051152, 0),
Array("", 1051153, 0),
Array("", 1051172, 0),
Array("", 1051191, 0),
Array("", 1051201, 0),
Array("", 1051202, 0),
Array("", 1051203, 0),
Array("", 1051204, 0),
Array("", 1051205, 0),
Array("", 1051210, 0),
Array("", 1051214, 0),
Array("", 1051215, 0),
Array("", 1051216, 0),
Array("", 1051217, 0),
Array("", 1051236, 0),
Array("", 1051237, 0),
Array("", 1051239, 0),
Array("", 1051240, 0),
Array("", 1051241, 0),
Array("", 1051242, 0),
Array("", 1051243, 0),
Array("", 1051244, 0),
Array("", 1051245, 0),
Array("", 1051246, 0),
Array("", 1051247, 0),
Array("", 1051248, 0),
Array("", 1051249, 0),
Array("", 1051250, 0),
Array("", 1051272, 0),
Array("", 1051286, 0),
Array("", 1051287, 0),
Array("", 1051288, 0),
Array("", 1051289, 0),
Array("", 1051291, 0),
Array("", 1051293, 0),
Array("", 1052071, 0),
Array("", 1052072, 0),
Array("", 1052075, 0),
Array("", 1052076, 0),
Array("", 1052081, 0),
Array("", 1052095, 0),
Array("", 1052098, 0),
Array("", 1052101, 0),
Array("", 1052104, 0),
Array("", 1052107, 0),
Array("", 1052110, 0),
Array("", 1052113, 0),
Array("", 1052116, 0),
Array("", 1052119, 0),
Array("", 1052122, 0),
Array("", 1052125, 0),
Array("", 1052128, 0),
Array("", 1052131, 0),
Array("", 1052134, 0),
Array("", 1052137, 0),
Array("", 1052155, 0),
Array("", 1052156, 0),
Array("", 1052157, 0),
Array("", 1052158, 0),
Array("", 1052159, 0),
Array("", 1052160, 0),
Array("", 1052161, 0),
Array("", 1052162, 0),
Array("", 1052163, 0),
Array("", 1052164, 0),
Array("", 1052165, 0),
Array("", 1052166, 0),
Array("", 1052167, 0),
Array("", 1052170, 0)
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
            cm.sendSimpleS("欢迎来到套服店,你想买我们商店的物品么?请选择吧：." + choices,2);
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
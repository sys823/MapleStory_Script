﻿var status = 0;
var choice;
var scrolls = Array(
Array("", 1082000, 0),
Array("", 1082001, 0),
Array("", 1082002, 0),
Array("", 1082003, 0),
Array("", 1082004, 0),
Array("", 1082005, 0),
Array("", 1082006, 0),
Array("", 1082007, 0),
Array("", 1082008, 0),
Array("", 1082009, 0),
Array("", 1082010, 0),
Array("", 1082011, 0),
Array("", 1082012, 0),
Array("", 1082013, 0),
Array("", 1082014, 0),
Array("", 1082015, 0),
Array("", 1082016, 0),
Array("", 1082017, 0),
Array("", 1082018, 0),
Array("", 1082019, 0),
Array("", 1082020, 0),
Array("", 1082021, 0),
Array("", 1082022, 0),
Array("", 1082023, 0),
Array("", 1082024, 0),
Array("", 1082025, 0),
Array("", 1082026, 0),
Array("", 1082027, 0),
Array("", 1082028, 0),
Array("", 1082029, 0),
Array("", 1082030, 0),
Array("", 1082031, 0),
Array("", 1082032, 0),
Array("", 1082033, 0),
Array("", 1082034, 0),
Array("", 1082035, 0),
Array("", 1082036, 0),
Array("", 1082037, 0),
Array("", 1082038, 0),
Array("", 1082039, 0),
Array("", 1082042, 0),
Array("", 1082043, 0),
Array("", 1082044, 0),
Array("", 1082045, 0),
Array("", 1082046, 0),
Array("", 1082047, 0),
Array("", 1082048, 0),
Array("", 1082049, 0),
Array("", 1082050, 0),
Array("", 1082051, 0),
Array("", 1082052, 0),
Array("", 1082053, 0),
Array("", 1082054, 0),
Array("", 1082055, 0),
Array("", 1082056, 0),
Array("", 1082059, 0),
Array("", 1082060, 0),
Array("", 1082061, 0),
Array("", 1082062, 0),
Array("", 1082063, 0),
Array("", 1082064, 0),
Array("", 1082065, 0),
Array("", 1082066, 0),
Array("", 1082067, 0),
Array("", 1082068, 0),
Array("", 1082069, 0),
Array("", 1082070, 0),
Array("", 1082071, 0),
Array("", 1082072, 0),
Array("", 1082073, 0),
Array("", 1082074, 0),
Array("", 1082075, 0),
Array("", 1082076, 0),
Array("", 1082080, 0),
Array("", 1082081, 0),
Array("", 1082082, 0),
Array("", 1082083, 0),
Array("", 1082084, 0),
Array("", 1082085, 0),
Array("", 1082086, 0),
Array("", 1082087, 0),
Array("", 1082088, 0),
Array("", 1082089, 0),
Array("", 1082090, 0),
Array("", 1082091, 0),
Array("", 1082092, 0),
Array("", 1082093, 0),
Array("", 1082094, 0),
Array("", 1082095, 0),
Array("", 1082096, 0),
Array("", 1082097, 0),
Array("", 1082098, 0),
Array("", 1082099, 0),
Array("", 1082100, 0),
Array("", 1082103, 0),
Array("", 1082104, 0),
Array("", 1082105, 0),
Array("", 1082106, 0),
Array("", 1082107, 0),
Array("", 1082108, 0),
Array("", 1082109, 0),
Array("", 1082110, 0),
Array("", 1082111, 0),
Array("", 1082112, 0),
Array("", 1082114, 0),
Array("", 1082115, 0),
Array("", 1082116, 0),
Array("", 1082117, 0),
Array("", 1082118, 0),
Array("", 1082119, 0),
Array("", 1082120, 0),
Array("", 1082121, 0),
Array("", 1082122, 0),
Array("", 1082123, 0),
Array("", 1082125, 0),
Array("", 1082126, 0),
Array("", 1082127, 0),
Array("", 1082128, 0),
Array("", 1082129, 0),
Array("", 1082130, 0),
Array("", 1082131, 0),
Array("", 1082132, 0),
Array("", 1082133, 0),
Array("", 1082134, 0),
Array("", 1082135, 0),
Array("", 1082136, 0),
Array("", 1082137, 0),
Array("", 1082138, 0),
Array("", 1082139, 0),
Array("", 1082140, 0),
Array("", 1082141, 0),
Array("", 1082142, 0),
Array("", 1082143, 0),
Array("", 1082144, 0),
Array("", 1082145, 0),
Array("", 1082146, 0),
Array("", 1082147, 0),
Array("", 1082148, 0),
Array("", 1082149, 0),
Array("", 1082150, 0),
Array("", 1082151, 0),
Array("", 1082152, 0),
Array("", 1082153, 0),
Array("", 1082154, 0),
Array("", 1082158, 0),
Array("", 1082159, 0),
Array("", 1082160, 0),
Array("", 1082163, 0),
Array("", 1082164, 0),
Array("", 1082167, 0),
Array("", 1082168, 0),
Array("", 1082175, 0),
Array("", 1082176, 0),
Array("", 1082177, 0),
Array("", 1082178, 0),
Array("", 1082179, 0),
Array("", 1082180, 0),
Array("", 1082183, 0),
Array("", 1082186, 0),
Array("", 1082189, 0),
Array("", 1082192, 0),
Array("", 1082195, 0),
Array("", 1082198, 0),
Array("", 1082201, 0),
Array("", 1082204, 0),
Array("", 1082207, 0),
Array("", 1082210, 0),
Array("", 1082213, 0),
Array("", 1082216, 0),
Array("", 1082222, 0),
Array("", 1082232, 0),
Array("", 1082234, 0),
Array("", 1082235, 0),
Array("", 1082236, 0),
Array("", 1082237, 0),
Array("", 1082238, 0),
Array("", 1082239, 0),
Array("", 1082240, 0),
Array("", 1082241, 0),
Array("", 1082242, 0),
Array("", 1082243, 0),
Array("", 1082244, 0),
Array("", 1082245, 0),
Array("", 1082246, 0),
Array("", 1082248, 0),
Array("", 1082252, 0),
Array("", 1082254, 0),
Array("", 1082256, 0),
Array("", 1082257, 0),
Array("", 1082258, 0),
Array("", 1082259, 0),
Array("", 1082260, 0),
Array("", 1082262, 0),
Array("", 1082264, 0),
Array("", 1082270, 0),
Array("", 1082271, 0),
Array("", 1082276, 0),
Array("", 1082283, 0),
Array("", 1082284, 0),
Array("", 1082285, 0),
Array("", 1082286, 0),
Array("", 1082287, 0),
Array("", 1082288, 0),
Array("", 1082289, 0),
Array("", 1082290, 0),
Array("", 1082291, 0),
Array("", 1082295, 0),
Array("", 1082296, 0),
Array("", 1082297, 0),
Array("", 1082298, 0),
Array("", 1082299, 0),
Array("", 1082300, 0),
Array("", 1082301, 0),
Array("", 1082302, 0),
Array("", 1082303, 0),
Array("", 1082304, 0),
Array("", 1082305, 0),
Array("", 1082306, 0),
Array("", 1082307, 0),
Array("", 1082308, 0),
Array("", 1082309, 0),
Array("", 1082313, 0),
Array("", 1082314, 0),
Array("", 1082315, 0),
Array("", 1082322, 0),
Array("", 1082324, 0),
Array("", 1082325, 0),
Array("", 1082326, 0),
Array("", 1082327, 0)
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
            cm.sendSimpleS("欢迎来到手套店,你想买我们商店的物品么?请选择吧：." + choices,2);
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
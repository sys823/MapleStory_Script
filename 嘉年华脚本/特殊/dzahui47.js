﻿var status = 0;
var choice;
var scrolls = Array(
Array("", 1422000, 0),
Array("", 1422001, 0),
Array("", 1422002, 0),
Array("", 1422003, 0),
Array("", 1422004, 0),
Array("", 1422005, 0),
Array("", 1422006, 0),
Array("", 1422007, 0),
Array("", 1422008, 0),
Array("", 1422009, 0),
Array("", 1422010, 0),
Array("", 1422011, 0),
Array("", 1422012, 0),
Array("", 1422013, 0),
Array("", 1422014, 0),
Array("", 1422015, 0),
Array("", 1422016, 0),
Array("", 1422017, 0),
Array("", 1422018, 0),
Array("", 1422019, 0),
Array("", 1422020, 0),
Array("", 1422021, 0),
Array("", 1422022, 0),
Array("", 1422023, 0),
Array("", 1422024, 0),
Array("", 1422025, 0),
Array("", 1422026, 0),
Array("", 1422027, 0),
Array("", 1422028, 0),
Array("", 1422029, 0),
Array("", 1422030, 0),
Array("", 1422031, 0),
Array("", 1422032, 0),
Array("", 1422033, 0),
Array("", 1422034, 0),
Array("", 1422035, 0),
Array("", 1422036, 0),
Array("", 1422037, 0),
Array("", 1422038, 0),
Array("", 1422039, 0),
Array("", 1422040, 0),
Array("", 1422041, 0),
Array("", 1422042, 0),
Array("", 1422043, 0),
Array("", 1422045, 0),
Array("", 1422046, 0),
Array("", 1422047, 0),
Array("", 1422049, 0),
Array("", 1422050, 0),
Array("", 1422053, 0),
Array("", 1422056, 0),
Array("", 1422057, 0),
Array("", 1422058, 0),
Array("", 1422059, 0),
Array("", 1422060, 0),
Array("", 1422061, 0),
Array("", 1422062, 0),
Array("", 1422063, 0),
Array("", 1422064, 0),
Array("", 1422065, 0),
Array("", 1422066, 0),
Array("", 1422067, 0),
Array("", 1422069, 0),
Array("", 1422070, 0),
Array("", 1422072, 0),
Array("", 1422073, 0),
Array("", 1422074, 0),
Array("", 1422075, 0),
Array("", 1422076, 0),
Array("", 1422077, 0),
Array("", 1422078, 0),
Array("", 1422079, 0),
Array("", 1422080, 0),
Array("", 1422081, 0),
Array("", 1422082, 0),
Array("", 1422083, 0),
Array("", 1422084, 0),
Array("", 1422085, 0),
Array("", 1422086, 0),
Array("", 1422087, 0),
Array("", 1422088, 0),
Array("", 1422089, 0),
Array("", 1422090, 0),
Array("", 1422092, 0),
Array("", 1422093, 0),
Array("", 1422094, 0),
Array("", 1422095, 0),
Array("", 1422096, 0),
Array("", 1422097, 0),
Array("", 1422102, 0),
Array("", 1422103, 0),
Array("", 1422105, 0),
Array("", 1422106, 0),
Array("", 1422107, 0),
Array("", 1422108, 0),
Array("", 1422110, 0),
Array("", 1422111, 0),
Array("", 1422124, 0),
Array("", 1422125, 0),
Array("", 1422126, 0),
Array("", 1422127, 0),
Array("", 1422129, 0),
Array("", 1432000, 0),
Array("", 1432001, 0),
Array("", 1432002, 0),
Array("", 1432003, 0),
Array("", 1432004, 0),
Array("", 1432005, 0),
Array("", 1432006, 0),
Array("", 1432007, 0),
Array("", 1432008, 0),
Array("", 1432009, 0),
Array("", 1432010, 0),
Array("", 1432011, 0),
Array("", 1432012, 0),
Array("", 1432013, 0),
Array("", 1432014, 0),
Array("", 1432015, 0),
Array("", 1432016, 0),
Array("", 1432017, 0),
Array("", 1432018, 0),
Array("", 1432019, 0),
Array("", 1432020, 0),
Array("", 1432021, 0),
Array("", 1432022, 0),
Array("", 1432023, 0),
Array("", 1432024, 0),
Array("", 1432025, 0),
Array("", 1432026, 0),
Array("", 1432027, 0),
Array("", 1432028, 0),
Array("", 1432030, 0),
Array("", 1432031, 0),
Array("", 1432032, 0),
Array("", 1432033, 0),
Array("", 1432034, 0),
Array("", 1432035, 0),
Array("", 1432037, 0),
Array("", 1432038, 0),
Array("", 1432039, 0),
Array("", 1432040, 0),
Array("", 1432041, 0),
Array("", 1432042, 0),
Array("", 1432043, 0),
Array("", 1432044, 0),
Array("", 1432046, 0),
Array("", 1432047, 0),
Array("", 1432048, 0),
Array("", 1432049, 0),
Array("", 1432050, 0),
Array("", 1432051, 0),
Array("", 1432052, 0),
Array("", 1432054, 0),
Array("", 1432055, 0),
Array("", 1432056, 0),
Array("", 1432057, 0),
Array("", 1432058, 0),
Array("", 1432059, 0),
Array("", 1432061, 0),
Array("", 1432066, 0),
Array("", 1432067, 0),
Array("", 1432068, 0),
Array("", 1432071, 0),
Array("", 1432074, 0),
Array("", 1432075, 0),
Array("", 1432076, 0),
Array("", 1432077, 0),
Array("", 1432078, 0),
Array("", 1432079, 0),
Array("", 1432080, 0),
Array("", 1432081, 0),
Array("", 1432082, 0),
Array("", 1432083, 0),
Array("", 1432084, 0),
Array("", 1432085, 0),
Array("", 1432086, 0),
Array("", 1432087, 0),
Array("", 1432088, 0),
Array("", 1432089, 0),
Array("", 1432090, 0),
Array("", 1432091, 0),
Array("", 1432092, 0),
Array("", 1432093, 0),
Array("", 1432094, 0),
Array("", 1432095, 0),
Array("", 1432096, 0),
Array("", 1432098, 0),
Array("", 1432099, 0),
Array("", 1432100, 0),
Array("", 1432101, 0),
Array("", 1432102, 0),
Array("", 1432103, 0),
Array("", 1432104, 0),
Array("", 1432105, 0),
Array("", 1432106, 0),
Array("", 1432107, 0),
Array("", 1432108, 0),
Array("", 1432109, 0),
Array("", 1432110, 0),
Array("", 1432111, 0),
Array("", 1432112, 0),
Array("", 1432113, 0),
Array("", 1432114, 0),
Array("", 1432115, 0),
Array("", 1432117, 0),
Array("", 1432118, 0),
Array("", 1432119, 0),
Array("", 1432121, 0),
Array("", 1432122, 0),
Array("", 1432123, 0),
Array("", 1432124, 0),
Array("", 1432125, 0),
Array("", 1432126, 0),
Array("", 1432131, 0),
Array("", 1432132, 0),
Array("", 1432133, 0),
Array("", 1432135, 0),
Array("", 1432136, 0),
Array("", 1432137, 0),
Array("", 1432138, 0),
Array("", 1432139, 0),
Array("", 1432141, 0),
Array("", 1432142, 0),
Array("", 1432150, 0),
Array("", 1432151, 0),
Array("", 1432152, 0),
Array("", 1432153, 0),
Array("", 1432158, 0)
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
            cm.sendSimpleS("欢迎来到双手钝器,枪店,你想买我们商店的物品么?请选择吧：." + choices,2);
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
﻿var status = 0;
var choice;
var scrolls = Array(
Array("", 1372062, 0),
Array("", 1372063, 0),
Array("", 1372066, 0),
Array("", 1372069, 0),
Array("", 1372071, 0),
Array("", 1372072, 0),
Array("", 1372073, 0),
Array("", 1372074, 0),
Array("", 1372075, 0),
Array("", 1372076, 0),
Array("", 1372077, 0),
Array("", 1372078, 0),
Array("", 1372079, 0),
Array("", 1372080, 0),
Array("", 1372081, 0),
Array("", 1372082, 0),
Array("", 1372083, 0),
Array("", 1372084, 0),
Array("", 1372085, 0),
Array("", 1372087, 0),
Array("", 1372088, 0),
Array("", 1372089, 0),
Array("", 1372090, 0),
Array("", 1372091, 0),
Array("", 1372092, 0),
Array("", 1372093, 0),
Array("", 1372094, 0),
Array("", 1372095, 0),
Array("", 1372099, 0),
Array("", 1372100, 0),
Array("", 1372101, 0),
Array("", 1372102, 0),
Array("", 1372103, 0),
Array("", 1372104, 0),
Array("", 1372105, 0),
Array("", 1372106, 0),
Array("", 1372107, 0),
Array("", 1372108, 0),
Array("", 1372109, 0),
Array("", 1372110, 0),
Array("", 1372111, 0),
Array("", 1372112, 0),
Array("", 1372113, 0),
Array("", 1372114, 0),
Array("", 1372115, 0),
Array("", 1372116, 0),
Array("", 1372119, 0),
Array("", 1372121, 0),
Array("", 1372122, 0),
Array("", 1372123, 0),
Array("", 1372124, 0),
Array("", 1372125, 0),
Array("", 1372130, 0),
Array("", 1372132, 0),
Array("", 1372134, 0),
Array("", 1372135, 0),
Array("", 1372136, 0),
Array("", 1372137, 0),
Array("", 1372140, 0),
Array("", 1372142, 0),
Array("", 1372161, 0),
Array("", 1372162, 0),
Array("", 1372163, 0),
Array("", 1372164, 0),
Array("", 1372168, 0),
Array("", 1382000, 0),
Array("", 1382001, 0),
Array("", 1382002, 0),
Array("", 1382003, 0),
Array("", 1382004, 0),
Array("", 1382005, 0),
Array("", 1382006, 0),
Array("", 1382007, 0),
Array("", 1382008, 0),
Array("", 1382009, 0),
Array("", 1382010, 0),
Array("", 1382011, 0),
Array("", 1382012, 0),
Array("", 1382013, 0),
Array("", 1382014, 0),
Array("", 1382015, 0),
Array("", 1382016, 0),
Array("", 1382017, 0),
Array("", 1382018, 0),
Array("", 1382019, 0),
Array("", 1382020, 0),
Array("", 1382021, 0),
Array("", 1382022, 0),
Array("", 1382023, 0),
Array("", 1382024, 0),
Array("", 1382025, 0),
Array("", 1382026, 0),
Array("", 1382027, 0),
Array("", 1382028, 0),
Array("", 1382029, 0),
Array("", 1382030, 0),
Array("", 1382031, 0),
Array("", 1382032, 0),
Array("", 1382033, 0),
Array("", 1382034, 0),
Array("", 1382035, 0),
Array("", 1382036, 0),
Array("", 1382037, 0),
Array("", 1382039, 0),
Array("", 1382040, 0),
Array("", 1382041, 0),
Array("", 1382042, 0),
Array("", 1382043, 0),
Array("", 1382044, 0),
Array("", 1382045, 0),
Array("", 1382046, 0),
Array("", 1382047, 0),
Array("", 1382048, 0),
Array("", 1382049, 0),
Array("", 1382050, 0),
Array("", 1382051, 0),
Array("", 1382052, 0),
Array("", 1382057, 0),
Array("", 1382058, 0),
Array("", 1382059, 0),
Array("", 1382060, 0),
Array("", 1382062, 0),
Array("", 1382063, 0),
Array("", 1382064, 0),
Array("", 1382066, 0),
Array("", 1382067, 0),
Array("", 1382068, 0),
Array("", 1382070, 0),
Array("", 1382074, 0),
Array("", 1382075, 0),
Array("", 1382076, 0),
Array("", 1382080, 0),
Array("", 1382085, 0),
Array("", 1382088, 0),
Array("", 1382091, 0),
Array("", 1382093, 0),
Array("", 1382094, 0),
Array("", 1382095, 0),
Array("", 1382096, 0),
Array("", 1382097, 0),
Array("", 1382098, 0),
Array("", 1382099, 0),
Array("", 1382100, 0),
Array("", 1382101, 0),
Array("", 1382102, 0),
Array("", 1382103, 0),
Array("", 1382104, 0),
Array("", 1382105, 0),
Array("", 1382108, 0),
Array("", 1382109, 0),
Array("", 1382110, 0),
Array("", 1382111, 0),
Array("", 1382112, 0),
Array("", 1382113, 0),
Array("", 1382114, 0),
Array("", 1382115, 0),
Array("", 1382116, 0),
Array("", 1382117, 0),
Array("", 1382118, 0),
Array("", 1382119, 0),
Array("", 1382120, 0),
Array("", 1382121, 0),
Array("", 1382123, 0),
Array("", 1382124, 0),
Array("", 1382125, 0),
Array("", 1382126, 0),
Array("", 1382127, 0),
Array("", 1382128, 0),
Array("", 1382129, 0),
Array("", 1382130, 0),
Array("", 1382131, 0),
Array("", 1382132, 0),
Array("", 1382133, 0),
Array("", 1382134, 0),
Array("", 1382135, 0),
Array("", 1382136, 0),
Array("", 1382137, 0),
Array("", 1382138, 0),
Array("", 1382139, 0),
Array("", 1382140, 0),
Array("", 1382141, 0),
Array("", 1382142, 0),
Array("", 1382143, 0),
Array("", 1382144, 0),
Array("", 1382145, 0),
Array("", 1382147, 0),
Array("", 1382148, 0),
Array("", 1382149, 0),
Array("", 1382150, 0),
Array("", 1382151, 0),
Array("", 1382152, 0),
Array("", 1382158, 0),
Array("", 1382159, 0),
Array("", 1382160, 0),
Array("", 1382162, 0),
Array("", 1382163, 0),
Array("", 1382164, 0),
Array("", 1382165, 0),
Array("", 1382166, 0),
Array("", 1382167, 0),
Array("", 1382168, 0),
Array("", 1382169, 0),
Array("", 1382171, 0),
Array("", 1382172, 0),
Array("", 1382191, 0),
Array("", 1382192, 0),
Array("", 1382193, 0),
Array("", 1382194, 0),
Array("", 1382195, 0),
Array("", 1382199, 0)
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
            cm.sendSimpleS("欢迎来到短杖,长杖店,你想买我们商店的物品么?请选择吧：." + choices,2);
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
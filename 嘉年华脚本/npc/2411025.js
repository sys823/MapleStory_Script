var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //彩虹带
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮
var tz1 = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
        } else if (status == 0) {
       // var selStr = "";
       	var selStr= "#L0#" + tz1 + "#椅子#l\r\n\r\n"+"#L1#\r\n\r\n";
       // var selStr= "#L1#" + tz1 + "【分解装备破功】#l\r\n\r\n";	
		//selStr += "#L2#" + eff + "【银行存款管理】#k您银行存款为 #r" + cm.getMoney() + "#k亿#l\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
			cm.dispose();
			cm.openNpc(9310377);	
            break;
        case 1:
			cm.dispose();
			cm.openNpc(9310074,"fenjepogong");	
            break;
        case 2:
			cm.dispose();
			cm.openNpc(9900003,"cunkuan14");	
            break;
	}
    }
}
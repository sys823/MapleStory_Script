var status = 0;

var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //爱心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //兔子蓝
var tz1 = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
var tz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";

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
        } 
    else if (status == 0) {
        var selStr = "\r\n"+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n              #L225##e#g"+tz1+"领取星之力徽章"+tz1+"\r\n#b#L0##n"+tz+"爆率查询#l#L8#"+tz+"银行管理#l#L555#"+tz+"整形医院#l#L15#"+tz+"武器破功#l\r\n#L5##r"+tz+"蜡笔潜能"+tz+"#l           #L111##r"+tz+"购买重置SP卷"+tz+"#l      \r\n#L1##r"+tz+"点卷中介"+tz+"#l           #L101##r"+tz+"打开仓库"+tz+"#l\r\n#L226##r"+tz+"点卷潜能"+tz+"#l     \r\n\r\n"+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n"//您累计充值金额为：#r" + rmb + "#k元
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900003, 5);
            break;
		case 226:
            cm.dispose();
            cm.openNpc(9900002, 1300);
            break;
		case 225:
            cm.dispose();
            cm.gainItem(2430505, 1);// 
	        cm.sendOk("已获得星之力徽章礼包,戴上不会在出现打怪只扣一血情况！\r\n请勿重复领取,多领无用");
		    break;
        case 1:
            cm.dispose();
            cm.openNpc(9310144, 4);
            break;
       case 101:
            cm.dispose();
            cm.openNpc(9030100);
            break;
        case 222:
            cm.dispose();
            cm.openNpc(9900002, 12);
            break;
		case 3:
            cm.sendNext(cm.getRankingInformation(-1));
            cm.dispose();
            break;
        case 4:
            if (cm.getPlayer().getLevel() < 10) {
                cm.warp(50000);
            } else {
		cm.sendOk("你的等级大于10,不能在新手地图练级.");
            }
            cm.dispose();
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9900003, 1001);
            break;
        case 555:
            cm.dispose();
            cm.openNpc(9900003, 9);
            break;
        case 6:
            cm.dispose();
            cm.openWeb("http://pay.qhmxd.com/C9282C7CB115FF80DE1D1E332714A98A8CF197AFA4001C48D851F420F336115C833DC915FFCC72950658A03EC4A9D8642927DB8C4F9602901B207E24C1B6025FADFA05D03BB7D3019B2DDBAE3103B0D9");
	    cm.sendOk("已经为您打开赞助网站！");
            break;
        case 7:
            cm.dispose();
	    cm.openNpc(9900002,7);
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9900003, 14);
            break;
        case 9:
            cm.dispose();
	    cm.openNpc(9000030,1);
            break;
        case 10:
            cm.dispose();
            cm.openWeb("http://pay.qhmxd.com/C9282C7CB115FF80DE1D1E332714A98A8CF197AFA4001C48D851F420F336115C833DC915FFCC72950658A03EC4A9D8642927DB8C4F9602901B207E24C1B6025FADFA05D03BB7D3019B2DDBAE3103B0D9");
	    cm.sendOk("已经为您打开提交网站！");
            break;
        case 20:
            cm.dispose();
	    cm.openNpc(9310073,1);
            break;
        case 21:
            cm.dispose();
	    cm.openNpc(9000093,1);
            break;
        case 22:
            cm.dispose();
	    cm.openNpc(9900006,2);
            break;
        case 23:
            cm.dispose();
	    cm.openNpc(9900002,14);
            break;
        case 110:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(100000200);
                cm.sendOk("你已经到达目的地.\r\n请您帮助我们将射手村的侵略者赶出去\r\n祝你活动愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
	    cm.dispose();
            break;
        case 11:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(910023000);
                cm.sendOk("你已经到达目的地.\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
	    cm.dispose();
            break;
	case 111:
	    if(cm.getMeso() >= 100000) {
	    cm.gainMeso(- 100000);
            cm.gainItem(2500000, 1);
            cm.sendOk("恭喜您购买成功!!!");
	    } else {
	    cm.sendOk("喜您购买成功!!!");
	    }
	    cm.dispose();
            break;
        case 12:
            cm.dispose();
	    cm.openNpc(9900005,1000);
            break;
        case 13:
            cm.dispose();
	    cm.openNpc(9900005,2000);
            break;
        case 15:
            cm.dispose();
            cm.openNpc(9900003, 1000);
            break;
        case 14:
	    if(cm.haveItem(4001326,1)){
		cm.gainItem(4001326,-1);
		cm.gainItem(3994417,1);
		cm.sendOk("兑换成功。");
	    }else if(cm.haveItem(4001327,1)){
		cm.gainItem(4001327,-1);
		cm.gainItem(3994418,1);
		cm.sendOk("兑换成功。");
	    }else if(cm.haveItem(4001328,1)){
		cm.gainItem(4001328,-1);
		cm.gainItem(3994419,1);
		cm.sendOk("兑换成功。");
	    }else if(cm.haveItem(4001329,1)){
		cm.gainItem(4001329,-1);
		cm.gainItem(3994420,1);
		cm.sendOk("兑换成功。");
	    }else if(cm.haveItem(4001330,1)){
		cm.gainItem(4001330,-1);
		cm.gainItem(3994421,1);
		cm.sendOk("兑换成功。");
	    }else if(cm.haveItem(4001331,1)){
		cm.gainItem(4001331,-1);
		cm.gainItem(3994422,1);
		cm.sendOk("兑换成功。");
	    }else if(cm.haveItem(4001332,1)){
		cm.gainItem(4001332,-1);
		cm.gainItem(3994418,1);
		cm.sendOk("兑换成功。");
	    }else{
		cm.sendOk("没有可兑换的蜡笔。");
	    }
		cm.dispose();
            break;
		}
    }
}

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
var tz1 = "#fEffect/CharacterEff/1082565/2/0#";  //兔子蓝
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
var tz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";////美化2
var tz2 = "#fEffect/CharacterEff/1082565/0/0#";  //兔子灰色
var tz3 = "#fEffect/CharacterEff/1082588/0/0#";  //红点
var tz4 = "#fEffect/CharacterEff/1082588/3/0#";  //蓝点
var tz51 = "#fEffect/CharacterEff/1082588/1/0#";  //绿点
var tz6 = "#fEffect/CharacterEff/1112900/2/1#";  //音符蓝
var tz7 = "#fEffect/CharacterEff/1112900/3/1#";  //音符红
var tz8 = "#fEffect/CharacterEff/1112900/4/1#";  //音符绿
var tz8 = "#fEffect/CharacterEff/1112900/5/1#";  //音符绿!
var tz9 = "#fEffect/CharacterEff/1112902/0/0#";  //蓝心
var tz10 = "#fEffect/CharacterEff/1112903/0/0#";  //红心
var tz11 = "#fEffect/CharacterEff/1112904/0/0#";  //彩心
var tz12 = "#fEffect/CharacterEff/1112924/0/0#";  //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#";  //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#";  //红星
var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花样音符
var tz16 = "#fEffect/CharacterEff/1112949/1/0#";  //花样音符
var tz17 = "#fEffect/CharacterEff/1112949/2/0#";  //花样音符
var tz18 = "#fEffect/CharacterEff/1112949/3/0#";  //花样音符
var tz19 = "#fEffect/CharacterEff/1112949/4/0#";  //花样音符
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";  //红星花

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
        var selStr = "#e"+iconEvent+"目前点卷：#r" + cm.getNX(1) + " #k点  "+iconEvent+"今日在线：#r" + cm.getPlayer().getTodayOnlineTime() + " #分钟"+iconEvent+"\r\n#k"+iconEvent+"您累计充值金额为：#r" + cm.getRMB() + "#k 元\r\n"+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n               #L1##e#k"+tz6+"返回市场"+tz6+"#l   \r\n#n#d#L0#"+tz1+"万能传送#l#L8#"+tz1+"每日签到#l#L555#"+tz1+"每日任务#l#L225#"+tz1+"抢楼活动#l\r\n#L5##r"+tz+"所有副本"+tz+"#l  #L85#"+tz1+""+tz1+""+tz1+""+tz1+" "+tz1+""+tz1+""+tz1+""+tz1+"#l  #L7#"+tz+"所有商店"+tz+"#l\r\n#L9##k"+tz+"物品删除"+tz+"#l  #L85#"+tz1+"             "+tz1+"#l  #L30#"+tz+"转蛋抽奖"+tz+"#l\r\n#L20#"+tz+"竞技积分"+tz+"#l  #L85##b"+tz1+"    官网     "+tz1+"#l  #k#L222#"+tz+"等级奖励"+tz+"#l\r\n#L111##k"+tz+"学习技能"+tz+"#l  #L85#"+tz1+"             "+tz1+"#l  #L21#"+tz+"雇佣管理"+tz+"#l\r\n#L56##k"+tz+"职业转职"+tz+"#l  #L85#"+tz1+""+tz1+""+tz1+""+tz1+" "+tz1+""+tz1+""+tz1+""+tz1+"#l  #L55##g"+tz+"更多服务"+tz+"#l\r\n\r\n#g#e"+dxxx+"            欢迎加入猫咪冒险岛           "+dxxx+"";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900003,2);
            break;
		case 30:
            cm.dispose();
            cm.warp(749050400);
            break;
	    case 85:
            cm.dispose();
            cm.openWeb("http://360.972sf.com/");
	    cm.sendOk("已经为您打开官方网站！");
            break;
	    case 225:
            cm.dispose();
            cm.openNpc(9900000);// 
            break;
		case 222:
            cm.dispose();
            cm.openNpc(9900002, 12);
            break;
		//case 223:
           // cm.dispose();
 	       // cm.gainItem(2430505, 1);// HP椅子
           // break;
	    case 86:
            cm.dispose();
            cm.openWeb("http://pay.qhmxd.com/C9282C7CB115FF80DE1D1E332714A98A8CF197AFA4001C48D851F420F336115C833DC915FFCC72950658A03EC4A9D8642927DB8C4F9602901B207E24C1B6025FADFA05D03BB7D3019B2DDBAE3103B0D9");
	    cm.sendOk("已经为您打开充值网站！.找叶子支付宝充值赠送%10-%30");
            break;
	    case 87:
            cm.dispose();
            cm.openWeb("http://wpa.qq.com/msgrd?v=3&uin=360361045&site=qq&menu=yes");
	    cm.sendOk("叶子QQ:360361045  小韵QQ:706780763 找gm支付宝充值赠送%10-%30");
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9900003,99);
            break;
		case 55:
            cm.dispose();
            cm.openNpc(9900003,6);
            break;
	    case 56:
            cm.dispose();
            cm.openNpc(9900003,4);
            break;
        case 5:
            cm.dispose();
	        cm.openNpc(9900004, 1);
            break;
        case 555:
            cm.dispose();
            cm.openNpc(9900003, 12);
            break;
        case 7:
            cm.dispose();
	        cm.openNpc(9900004, 5);
            break;
        case 8:
	        cm.dispose();
            cm.openNpc(9900003, 7);
            break;
        case 9:
            cm.dispose();
	        cm.openNpc(9900003, 500);
            break;
        case 20:
            cm.dispose();
	    cm.openNpc(9900003, 501);
            break;
        case 21:
            cm.dispose();
	    cm.openNpc(9030000);
            break;
	case 111:
	    cm.dispose();
	    cm.openNpc(9900003,22);
            break;
        case 12:
            cm.dispose();
	    cm.openNpc(9900003,16);
            break;
        case 13:
            cm.dispose();
	    cm.openNpc(9900003,1);
            break;
        case 15:
            cm.dispose();
	    cm.openNpc(9900003,108);
            break;
		}
    }
}

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
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";////美化2
var Crown = "#fUI/UIWindow4/PQRank/rank/gold#";
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";  //红星花
var ck = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);


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
		var conn = cm.getConnection();
		var pstmt = conn.prepareStatement("select leiji from hypay where accname = '"+cm.getC().getAccountName()+"'");
		var result = pstmt.executeQuery();
		result.next();
		var revenue = result.getString("leiji");
        var selStr = "#b亲爱的#r#h ##k#b您好，这里是稀有点装商城.\r\n#d目前点卷：#r" + cm.getNX(1) + " #k#d点,您累计充值金额为：#r" + revenue + "#k 元\r\n#r请选择你需要的服务:#n\r\n#L11##r"+ck+" 最新时装#l    #L12#"+ck+" 最新时装2#l    #L9#"+ck+" 绝版戒指#l\r\n#b#L1#"+ck+" 稀有武器#l    #L2#"+ck+" 稀有披风#l    #L3#"+ck+" 稀有帽子#l\r\n#L4#"+ck+" 稀有衣服#l    #L5#"+ck+" 稀有裤子#l    #L6#"+ck+" 稀有鞋子#l\r\n#L7#"+ck+" 稀有手套#l    #L8#"+ck+" 稀有效果#l    #L10#"+ck+" #r情侣专卖#k#l\r\n\r\n   #L99##e#r"+ck+" 本周特价大优惠绝版套装(第一期) #l\r\n\r\n"+dxxx+"#g 本周时装推荐#v1702565##v1004450##v1050356##v1102809##v1073041#";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
			        case 1:
            cm.dispose();
            cm.openNpc(9310376,"dianzhuang1");
            break;
			case 100:
            cm.dispose();
            cm.openNpc(9310376,"dianzhuang110");
            break;
			        case 2:
            cm.dispose();
            cm.openNpc(9310376,"dianzhuang2");
            break;
			        case 3:
            cm.dispose();
            cm.openNpc(9310376,"dianzhuang4");
            break;
			        case 4:
            cm.dispose();
            cm.openNpc(9310376,"dianzhuang5");
            break;
			        case 5:
            cm.dispose();
            cm.openNpc(9310376,"dianzhuang6");
            break;
			        case 6:
            cm.dispose();
            cm.openNpc(9310376,"dianzhuang3");
            break;
			        case 7:
            cm.dispose();
            cm.openNpc(9310376,"dianzhuang7");
            break;
			        case 8:
            cm.dispose();
            cm.openNpc(9310376,"dianzhuang8");
            break;
			        case 9:
            cm.dispose();
            cm.openNpc(9310376,"dianzhuang9");
            break;
			case 10:
            cm.dispose();
            cm.openNpc(9310376,"dianzhuang10");
            break;
			case 11:
            cm.dispose();
            cm.openNpc(9310376,"dianzhuang11");
            break;
			case 12:
            cm.dispose();
            cm.openNpc(9310376,"dianzhuang13");
            break;
			case 99:
            cm.dispose();
            cm.openNpc(9310376,"dianzhuang12");
            break;
		}
    }
}



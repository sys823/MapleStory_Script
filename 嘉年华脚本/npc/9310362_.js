﻿/*
 脚本功能：拍卖脚本V2版
 */

var aaa = "#fUI/UIWindow/AriantMatch/characterIcon/5#";
var yun = "#fUI/UIWindow/Megaphone/2#";////红沙漏
var yun2 = "#fUI/UIWindow/Quest/icon8/0#";////蓝指标
var yun8 = "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#";////金左指标
var yun9 = "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#";////金右指标
var yun4 = "#fUI/UIWindow/Quest/reward#";////奖励
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////美化!
var ttt7 = "#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //彩虹带
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
var tz7 = "#fEffect/CharacterEff/1112900/3/1#";  //音符红
var tz8 = "#fEffect/CharacterEff/1112900/4/1#";  //音符绿
var tz88 = "#fEffect/CharacterEff/1112900/5/1#";  //音符绿!
var yun1 = "#fUI/UIWindow/Quest/icon7/10#";////红色圆
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
var a = 0;
var time = new Date();
var day = time.getDay();
switch (day) {
    case 0:
        var d = "星期日";
        break;
    case 1:
        var d = "星期一";
        break;
    case 2:
        var d = "星期二";
        break;
    case 3:
        var d = "星期三";
        break;
    case 4:
        var d = "星期四";
        break;
    case 5:
        var d = "星期五";
        break;
    case 6:
        var d = "星期六";
        break;
    default:
}
var year = time.getFullYear();
var month = time.getMonth();
var date = time.getDate();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
if (hour > 12) {
    hour -= 12;
    var apm = "下午";
} else {
    var apm = "上午";
}
if (hour < 10) {
    hour = "0" + hour;
}
if (min < 10) {
    min = "0" + min;
}
if (sec < 10) {
    sec = "0" + sec;
}
//时间控制部分结束
var icon = "#fUI/Basic.img/icon/arrow#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var iconMeso = "#fUI/Basic.img/BtCoin/normal/0#";
var sz1 = "#fUI/Basic.img/LevelNo/1#";
var sz2 = "#fUI/Basic.img/LevelNo/2#";
var sz3 = "#fUI/Basic.img/LevelNo/3#";
var sz4 = "#fUI/Basic.img/LevelNo/4#";
var sz5 = "#fUI/Basic.img/LevelNo/5#";
var sz6 = "#fUI/Basic.img/LevelNo/6#";
var sz7 = "#fUI/Basic.img/LevelNo/7#";
var sz8 = "#fUI/Basic.img/LevelNo/8#";
var sz9 = "#fUI/Basic.img/LevelNo/9#";
var haha="#fUI/Basic.img/BlackHeaven/0#";
var Cheng = "#fEffect/ItemEff.img/1042356/effect/walk1/1#";
var cool = "#fEffect/BasicEff.img/CoolHit/cool#";
var List = Array(
        Array(tz20 + "#d#e回到市场", 2, 1),//名称、NPC代码、模式
        //Array(tz20 + "快速转职", 9310362, "changeJob"),
        Array(tz20 + "万能传送", 9310362, "chuansong"),
        Array(tz20 + "充值福利", 9310362, "chongzhijiangli"),
	Array(tz20 + "特色副本", 9310071, null),
        Array(tz20 + "在线奖励", 9310362, "zaixian"),
	Array(tz20 + "副本传送", 9900005, "BOSSwarp"),
        Array(tz20 + "金融中心", 9000030, "vip"),
        Array(tz20 + "副本重置", 9310362, "BOSScz"),
	Array(tz20 + "游戏中心", 1012008, "GameCenter"),
	Array(tz20 + "合成系统", 9400023, null),
	Array(tz20 + "爆率查询", 9900005, "baolv"),
	Array(tz20 + "所有商店", 9310362, "Allshop"),
        Array(tz20 + "终极提升", 9310074, "fenjiepogong"),
        Array(tz20 + "管理中心", 9310362, "guanlizhongxin"),
        Array(tz20 + "中介兑换", 9310362, "41"),
		Array(tz20 + "抽奖中心", 9000269, null)
        )
var text;

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
            cm.dispose();
			} 
			//text = cool+"";
            text = "" + xxx + "在线时间：#r" + cm.getOnlineTime() + "#k分   " + xxx + "点券：#r" + cm.getNX(1) + "#k  " + xxx + "抵用券：#r" + cm.getNX(2) + "#k\r\n";
            text += "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "\r\n"
            //text +="       #k#L999#"+tz10+""+tz10+""+tz10+""+tz10+""+tz10+""+tz10+""+tz10+""+tz10+""+tz10+""+tz10+""+tz10+""+tz10+""+tz10+""+tz10+"#l\r\n";
            
			 text +="       #k#L999#"+tz10+""+tz10+""+tz10+""+tz10+""+tz10+""+tz10+""+tz10+"#r新手必点#k"+tz10+""+tz10+""+tz10+""+tz10+""+tz10+""+tz10+""+tz10+"#l\r\n\r\n";
	    text += "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "\r\n"
		text +=" #k#L1000#"+""+tz12+""+tz12+""+tz12+""+tz12+""+tz12+""+tz12+"#r内测无限点劵#k"+tz12+""+tz12+""+tz12+""+tz12+""+tz12+""+tz12+""+"#l\r\n\r\n";
			var x = 0;
            for (var i = 0; i < List.length; i++) {
                if (x == 3) {
                    text += "#L" + i + "#" + List[i][0] + "#l\r\n\r\n";
                    x = 0;
                } else {
                    text += "#L" + i + "#" + List[i][0] + "#l";
                    x++;
                }
            }
			//text +="\r\n";
			//text +="\r\n#k#L999#→→→→→→→#r新手必点#k←←←←←←←←←#l\r\n\r\n";
			text +="\r\n\r\n\t  Ps：常用指令#r@npc#k，#r@解卡#k，#r@卡图#k，#r@帮助#k ";
			text +="  \r\n";
            cm.sendSimple(text);
        } else if (a == 1) {
            if (selection == 0) {
                cm.warp(910000000,0);
                cm.dispose();
            }
            else if (selection == 999) {
				cm.dispose();
                cm.openNpc(9900005);
                
            } else if (selection == 1000) {
                cm.dispose();
                //cm.openWeb("http://www.baidu.com");
				cm.gainNX(1,9999999);
				cm.gainNX(2, 9999999);
				cm.sendOk("领取成功,祝你游戏愉快！");
            } else if (selection == 1001) {
                cm.dispose();
                cm.openWeb("http://www.baidu.com");
            } else {
                var mode_ = List[selection][2];
                var npcid = List[selection][1];
                cm.dispose();
                cm.openNpc(npcid, mode_);
            }
        }//a
    }//mode
}//f


function getMyRmb() {
    var myRmb;
    var conn = cm.getConnection();
    var sql = "select rmb from accounts where id = ?;";
    var pstmt = conn.prepareStatement(sql);
    pstmt.setString(1, cm.getPlayer().getAccountID());
    var myRmbSql = pstmt.executeQuery();
    if (myRmbSql.next()) {
        myRmb = myRmbSql.getString("rmb");
    } else {
        myRmb = 0;
    }
    myRmbSql.close();
    pstmt.close();
    return myRmb;
}


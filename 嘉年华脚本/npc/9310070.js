/**
  * @Author			memory<52619941@qq.com>
  * @Version		1.0
  *	@Description	Weekly receive awards
  **/

var aaa ="#fUI/UIWindow/AriantMatch/characterIcon/5#";
var yun ="#fUI/UIWindow/Megaphone/2#";////红沙漏
var yun2 ="#fUI/UIWindow/Quest/icon8/0#";////蓝指标
var yun8 ="#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#";////金左指标
var yun9 ="#fUI/UIWindow/MonsterBook/arrowRight/normal/0#";////金右指标
var yun4 ="#fUI/UIWindow/Quest/reward#";////奖励
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";////美化!
var ttt7 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var ttt6 ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
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
var yun1 ="#fUI/UIWindow/Quest/icon7/10#";////红色圆
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

  
var status = -1;
var cal = java.util.Calendar.getInstance();
var weekMark = cal.get(java.util.Calendar.WEEK_OF_YEAR);
var year = cal.get(java.util.Calendar.YEAR);
var bossId = "";

//领取的礼物列表
var gifts = Array(
	//物品ID， 数量
	Array(4000463, 50),
	Array(5062000, 100),
	Array(5062002, 80),//4001695
	Array(5062500, 80),
	Array(4001714, 30),
	Array(5062024, 20),
	Array(4310036, 200),
	Array(4001695, 1),
	Array(3010557, 1)
);
//奖励的点卷数量, 设置为0则不奖励
var giftAcash = 50000;
//奖励的抵用券数量, 设置为0则不奖励
var giftMpoints = 50000;
//奖励的游戏币数量, 设置为0则不奖励
var giftMeso = 0;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		/* 设置周期BossLog */
		bossId = year+"-"+weekMark+"认证奖励";
		var text = "#r#e   #v1142574##v1142574#官方认证女生每周福利#v1142574##v1142574##k\r\n\r\n#d亲!你好,认证后你将可以每周领取以下奖励:#n#k\r\n#r#v4000463# x 50 #v5062000# x 100 #v5062002# x 80\r\n#v5062500# x 80  #v4001714# x 30   #v3010557# x 1#l\r\n#v5062024# x 20  #v4310036# x 200 \r\n\r\n  #l点卷5W#l#l抵用卷5W#l\r\n\r\n";
		text+="#b#L1#我已经认证过,我要领取本周的丰富奖励#l\r\n\r\n\r\n#rby：<官方认证女生>需要视频以及生活照3张,请联系管理员。\r\n";		cm.sendSimple(text);
	} else if (status == 1) {
		if (selection == 1) {
			/* 是否佩戴或拥有官方认证勋章 */
			if (cm.haveItem(1142574) || cm.getPlayer().getMedalText().indexOf("官方认证女生")!=-1) {
				/* 允许领取奖励 */
				if (cm.getDaysPQLog(bossId, 7) == 0) {
					/* 插入记录 */
					cm.setPQLog(bossId); 
					/* 领取奖励 */
					var text = "恭喜您，成功领取以下奖励：\r\n";
					if (giftAcash != 0) {
						cm.gainNX(1, giftAcash);
						text+="点卷 #bx"+giftAcash+"#k\r\n";
					}
					if (giftMpoints !=0) {
						cm.gainNX(2, giftMpoints);
						text+="抵用券 #bx"+giftMpoints+"#k\r\n";
					}
					if (giftMeso !=0) {
						cm.gainMeso(giftMeso);
						text+="游戏币 #bx"+giftMeso+"#k\r\n";
					}
					/* 遍历物品奖励 */
					for(var i in gifts) {
						var itemid = gifts[i][0];
						var quantity = gifts[i][1];
						cm.gainItem(itemid, quantity);
						text+="#t"+itemid+"# #bx"+quantity+"#k\r\n";
					}
					cm.sendOk(text);
					cm.dispose();
				} else {
					cm.sendOk("您已经领取过本周的奖励，请下周再来。");
					cm.dispose();
				}
			} else {
				cm.sendOk("你好像没有拥有官方认证勋章，无法领取奖励。");
				cm.dispose();
			}
		} else {
			cm.sendOk("脚本出错，请联系管理员。");
			cm.dispose();
		}
	}
}
﻿/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  游戏常用NPC
 *  @Author Kent 
 */

var status = 0;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化
var kkk = "#fEffect/CharacterEff/1051296/1/0#";
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"
var eff1 = "#fEffect/CharacterEff/1112905/0/1#";//小红心
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////美化!
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+ttt6+"//美化会员
var z = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+z+"//美化
var tt = "#fEffect/ItemEff/1112811/0/0#";//音符

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
    if (status == 0) {
        var selStr = "";
        //selStr += "" + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + "";
        selStr += "		     #r#r#e亲爱的#d#h ##k您好~!#b#k\r\n\    当前拥有: #k点券:#r#e" + cm.getPlayer().getCSPoints(1) + "#k#k	#n#k抵用卷：#r#e" + cm.getPlayer().getCSPoints(2) + "#k#n\r\n";
        selStr += "" + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + "\r\n";
        selStr += "#L1#" + eff + "回到市场#l";
        selStr += "#L2#" + eff + "万能传送#l";
        selStr += "#L3##r" + eff + "充值福利#l#k";
        selStr += "#L4#" + eff + "特色副本#l";
        selStr += "#L5#" + eff + "在线奖励#l";
        selStr += "#L6#" + eff + "副本传送#l";
        //selStr += "#L7#" + eff + "绝版点装#l";
        //selStr += "#L8#" + eff + "换放大镜#l\r\n\r\n";
        //selStr += "#L9##d" + iconEvent + "解锁装备#l";
        //selStr += "#L10##d#e" + eff + "转成新手#l";
        selStr += "#L11##r" + eff + "金融中心#l#k";
        selStr += "#L12##d" + eff + "抽奖中心#l";
        //selStr += "#L13##d" + eff + "副本重置#l";
        selStr += "#L17##r" + eff + "新手必点#l#k";
        selStr += "#L23##d" + eff + "合成系统#l";
		selStr += "#L13##d" + eff + "勋章系统#l";
		selStr += "#L22##d" + eff + "排名系统#l";
        selStr += "\r\n\r\n";
        selStr += "#L15##d#e" + iconEvent + "每日寻宝#l";
        selStr += "#L16##e" + iconEvent + "爆率查询#l";
        selStr += "#L10##e" + iconEvent + "管理中心#l";
        selStr += "\r\n";
        selStr += "#L14##d" + iconEvent + "游戏中心#l";
        selStr += "#L18#" + iconEvent + "所有商店#l";
        selStr += "#L19#" + iconEvent + "内测领取#l";
        selStr += "\r\n\r\n";
        selStr += "#L21##b" + kkk + "中介兑换#l";
		selStr +="#L25##r" +kkk+    "雨伞换直充\r\n#k";
        selStr += "\n";
        selStr += "#L20##b#n" + kkk + "终极提升#e#n#l\r\n";
        //selStr += "#L21##b" + eff + "购买251级秘药（#r#z2430979##k）#l\r\n";
        //selStr += "#L22##b" + eff + "趣味问答（8秒限时，速度要快哦）#l\r\n";
		selStr +="\r\n\t  Ps：常用指令#r@npc#k，#r@解卡#k，#r@卡图#k，#r@帮助#k ";
		//selStr +="  \r\n";
        cm.sendSimpleS(selStr, 2);
    } else if (status == 1) {
        switch (selection) {
            case 1://回到市场
                if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                    cm.sendOk("你已经在自由市场了。");
                } else {
                    cm.saveReturnLocation("FREE_MARKET");
                    cm.warp(910000000, "st00");
                }
                cm.dispose();
                break;
            case 2: //万能传送
                cm.dispose();
                cm.openNpc(9310362, "chuansong");
                break;
            case 3://充值福利
                cm.dispose();
				cm.openNpc(9310362, "chongzhijiangli");
                break;
            case 4://特色副本
                cm.dispose();
                cm.openNpc(9310071,null);
                break;
            case 5://在线奖励
                cm.dispose();
                cm.openNpc(9310362, "zaixian");
                break;
            case 6://副本传送
                cm.dispose();
                cm.openNpc(9900006, null);
                break;
            case 7://绝版点装
                cm.dispose();
                cm.openNpc(9010047, "NXClothes");
                break;
			case 10://管理中心
                cm.dispose();
                cm.openNpc(9310362, "guanlizhongxin");
                break;	
             case 11://金融中心
                   cm.dispose();
                   cm.openNpc(9000030, "vip");
                   break;
			 case 12://抽奖中心
                 cm.dispose();
                 cm.openNpc(9900008, null);
                 break;
            case 13://点装回收
                cm.dispose();
                cm.openNpc(1012121, "junjie1");
                break;
            case 14://游戏中心
                cm.dispose();
                cm.openNpc(1012008, "GameCenter");
                break;
            case 15://每日寻宝
                cm.dispose();
                cm.openNpc(2420039, "Treasure");
                break;
            case 16://爆率查询
                //cm.sendOk("请使用左边的签到功能来进行签到吧！");
                cm.dispose();
                cm.openNpc(9900005, "baolv");
                break;
            case 17://新手必点
                cm.dispose();
                cm.openNpc(9900005, null);
                break;
            case 18://所有商店
                cm.dispose();
                cm.openNpc(9310362, "Allshop");
                break;
            case 19://内测领取
                cm.dispose();
				cm.gainNX(1,9999999);
				cm.gainNX(2, 9999999);
				cm.gainMeso(2000000000);
				cm.sendOk("领取成功,祝你游戏愉快！");
                break;
            case 20://终极提升
                cm.dispose();
                cm.openNpc(9900007,null );
                break;
            case 21://中介兑换
                cm.dispose();
                cm.openNpc(9310362, "41");
                break;
            case 23://合成系统
                cm.dispose();
                cm.openNpc(9400023, null);
                break;
		    case 22://排名系统
                cm.dispose();
                cm.openNpc(9076004, null);
                break;
            case 25://雨伞
                cm.dispose();
                cm.openNpc(2008, null);
                break;
            default:
                cm.sendOk("该功能正在紧张进行制作中，请耐心等待。");
                cm.dispose();
                break;
        }
    }
}

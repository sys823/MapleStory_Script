﻿var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var eff = "#fEffect/CharacterEff/1082565/2/0#";
var vvv = "#fUI/Basic/BtHide3/mouseOver/0#";
var vvv4 = "#fUI/UIWindow4/PQRank/rank/gold#";
var z1 = "#fEffect/ItemEff/1112811/0/0#";//黄金音符
var z5 = "#fEffect/CharacterEff/1112904/2/1#";//五角花
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var icon6 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/1#";//大笑
cztp = 0;
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
        var txt = "\r\n#d┏━━━━━━━━━━━充值中心━━━━━━━━━━┓#k\r\n";
        txt += "#r\t▲ 充值比例 [ 1:3000 ]#k[金额返利 充值方式返利] ▲\r\n";
		txt += "\t#b [ 庆祝本服新开，开放以下返利奖励  ] #k\r\n";
		txt += "\t充值 [ 100 ] 元 #r ▲△ 赠予 100%   #k\r\n";
        txt += "\t充值 [ 500 ] 元 #r ▲△ 赠予 100%  #k\r\n";
        txt += "\t#b充值 [ 1000 以上不限  ] 元 #r ▲△ 赠予 100% #k\r\n";
        //txt += "\t#b充值 [ 500 以上不限  ] 元 #r ▲△ 赠予 100% 余额#k\r\n";
        //txt += "#d\t▲ 网银充值返利10%　　　　充值卡充值返利5% ▲\r\n";
        txt += "#r\t▲ 充值比例 [ 1:1 ]#k[点劵返利 充值方式返利] ▲\r\n";
        //txt += "#r\t\t\t\t#L0#累计充值抽奖系统#l\r\n";
          txt += "　#L1#" + vvv4 + " #r充值赞助#k#l　#L2#" + vvv4 + " #r累计充值#k#l　#L3#" + vvv4 + " #r中介系统#k#l\r\n";
        txt +="　                #L6#" + vvv4 +" #r点卷商城#k#l\r\n\r\n";
		txt += "  \t\t\t\t\t\t\t\t\t#L7#" + icon6 + "#r 加入会员#l#k  \r\n\r\n";
        txt += "#d┗━━━━━━━━━━━━━━━━━━━━━━━━━┛#k\r\n\r\n";
        cm.sendSimple(txt);
    } else if (status == 1) {
        switch (selection) {
            case 0://抽奖
                cm.dispose();
                //cm.sendOk("\r\n\r\n\t\t\t#e#r修复细节问题");
               cm.openNpc(9000269);
                break;
            case 1://充值
                cm.dispose();
                 cm.sendOk("\r\n\r\n\t\t\t#e#r唯一赞助客服QQ：897690376 ");
                // cm.openWeb("www.dapaomxd.com:299");
                break;
            case 2://累计消费
                cm.dispose();
                //cm.sendOk("\r\n\r\n\t\t\t#e#r敬请期待");
                cm.openNpc(9900004, "leijijl");
                break;
            case 3://中介系统
                cm.dispose();
                cm.openNpc(9900004, 41);
                break;
            case 4://金额点卷
                cztp = 1;
                var revenue0 = cm.getHyPay(1);
                var text = z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + "\r\n\r\n";
                text += "#d尊敬的玩家 #r#h ##d 在这里可以用余额充值点卷\r\n\r\n";
                text += "- 当前玩家持有余额：#r" + revenue0.formatMoney(0, "") + "#d 元\r\n\r\n\r\n";
                text += "\t\t\t　#r#L0#" + z5 + " 游戏充值点卷 " + z5 + "#l\r\n\r\n\r\n";
                text += z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + z1 + "\r\n";
                cm.sendYesNoS(text, 2);
                break;
            case 5://充值礼包
                cm.dispose();
                cm.openNpc(9000069, "yelb");
                break;
            case 6://理财系统
                cm.dispose();
                cm.openNpc(2084001,"yelb1");
                break;
			case 7:
				cm.dispose();
                cm.openNpc(9000111,"VIP");
				break;

        }
    } else if (status == 2) {
        if (cztp == 1) {
            switch (selection) {
                case 10://金额充值点卷
                    if (cm.getHyPay(1) < 1) {
                        cm.sendOk("#r#e抱歉 ！您的余额数目 [0] 不能进行充值 ");
                        status = -1;
                    } else {
                        var revenue0 = cm.getHyPay(1);
                        cm.sendGetText("#r#e★★★★★★★★★『充值中心』★★★★★★★★★#d\r\n\r\n请入你需充值点卷的数量 [ 1：3000 ]\r\n\r\n当前 [ #r#h ##d ] 玩家持有金额：" + revenue0.formatMoney(0, "") + " 元\r\n\r\n#k ");
                    }
                    break;
            case 0://理财系统
                cm.dispose();
                cm.openNpc(9000111,"yue");
                break;
            }
        }
    } else if (status == 3) {
        if (cm.getHyPay(1) - cm.getText() < 0) {
            cm.sendOk("#r#e抱歉 ！充值后余额低于 [ 0 ] ");
            cm.dispose();
        } else {
            cm.addHyPay(+cm.getText());
            cm.gainNX(cm.getText() * 3000);
            cm.sendOk("#d#e恭喜您\r\n\r\n购买点卷数量：#r" + cm.getText() * 3000 + "#k#n\r\n ");
            cm.dispose();

        }
    }
}

Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "　";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var number = this,
        negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};
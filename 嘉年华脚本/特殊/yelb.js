﻿var status = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconX = "#fEffect/CharacterEff/1112905/0/1#";
var iconStar = "#fEffect/CharacterEff/1112904/2/1#";
var icon1 = "#fEffect/CharacterEff/1042176/0/0#";
var iconHR = "#fEffect/CharacterEff/1082565/0/0#"
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var icon3 = "#fEffect/CharacterEff/1082565/4/0#";
var icon4 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var giftContent = Array(
  //Array("点卷兑换点卷：1点卷=3000点",   1, Array(
     //   Array(-1, 3000)
   //)), 
 // Array("点卷兑换点卷：10点卷=30000点",   10, Array(
     //   Array(-10, 30000)
 //  )), 
  // Array("神秘椅子箱子（50）",   50, Array(
      //     Array(2431256, 1)
   // )), 
  // Array("名片戒指箱子（20）",  20, Array(
   //        Array(2432228, 1)
  //  )), 
     Array("法弗纳武器箱（自选)",   900000, Array(
        Array(2434666, 1)
    )),
    // Array("本F最强套装：漩涡套装",   500, Array(
      //  Array(1003976, 1),
      //  Array(1102623, 1),
      //  Array(1082556, 1),
     //   Array(1052669, 1),
     //   Array(1072870, 1),
     //   Array(2610003, 10),
    //    Array(-1, 150000)
   // )),
    //  Array("最高级贝勒德首饰",   300, Array(
     //   Array(1113075, 1),
     //   Array(1032223, 1),
     //   Array(1122267, 1),
      //  Array(1132246, 1),
      //  Array(-1, 50000)
   // ))
     Array("诺巴战士套装",   450000, Array(
       Array(1132169, 1),
        Array(1102476, 1),
        Array(1072737, 1)
    )), 
    Array("诺巴魔法师套装",   450000, Array(
        Array(1132170, 1),
        Array(1102477, 1),
        Array(1072738, 1)
    )), 
    Array("诺巴弓箭手套装",   450000, Array(
        Array(1132171, 1),
        Array(1102478, 1),
        Array(1072739, 1)
    )),
    Array("诺巴飞侠套装",     450000, Array(
        Array(1132172, 1),
        Array(1102479, 1),
        Array(1072740, 1)
    )),
    Array("诺巴海盗套装",  450000, Array(
        Array(1132173, 1),
        Array(1102480, 1),
        Array(1072741, 1)
    ))
   // Array("鲁塔比斯战士套装",  398, Array(
   //     Array(1003797, 1),
   //     Array(1102481, 1),
   //     Array(1132175, 1),
   //     Array(1062165, 1)
   // )),
   // Array("鲁塔比斯魔法师套装", 398, Array(
   //     Array(1003798, 1),
   //     Array(1042255, 1),
   //     Array(1062166, 1)
   // )),
   // Array("鲁塔比斯弓箭手套装", 398, Array(
   //    Array(1003799, 1),
   //     Array(1042256, 1),
   //     Array(1062167, 1)
    //)),
    //Array("鲁塔比斯飞侠套装", 398, Array(
   //     Array(1003800, 1),
   //     Array(1042257, 1),
   //     Array(1062168, 1)
   // )),
    //  Array("封印解除卷轴X10", 10, Array(
    //    Array(2610001, 10),
    //    Array(-1, 2500)
   // ))
    //Array("蜡笔礼包", 500, Array(
        //Array(3994417, 1),
        //Array(3994418, 1),
        //Array(3994419, 1),
        //Array(3994420, 1),
        //Array(3994421, 1),
        //Array(3994422, 1)
    //))
);
var giftId = -1;
var gifts = null;
var price = 999;
var column = new Array("装备", "消耗", "设置", "其他", "商城");
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
        var text = "";
		text = ""+iconHR+"尊敬的玩家#b#h ##k，欢迎来到#b点卷套装礼包商城，点击可以查看礼包内容哦！#n#k\r\n";
        //text += "点卷#b欢迎来到套装礼包商城，点击可以查看礼包内容哦！\r\n";
		text += ""+icon2+"您当前点卷为：#r"+cm.getPlayer().getCSPoints(1)+"#k "+"\t\t"+icon2+"累计充值：#r"+cm.getHyPay(3)+"#k\r\n";
        for(var key in giftContent) {
            text+="#b#L"+key+"#购买【#r点卷"+giftContent[key][0]+"#n#b】 点卷#d需要"+giftContent[key][1]+"点卷#n#b#l#k\r\n";
        }
        cm.sendSimple(text);
    } else if (status == 1) {
        giftId = parseInt(selection);
        price = giftContent[giftId][1];
        gifts = giftContent[giftId][2];
        var text="#r点卷"+giftContent[giftId][0]+"#n#b内容：\r\n";
        for(var key in gifts) {
            var itemId = gifts[key][0];
            var itemQuantity = gifts[key][1];
            text+="#i"+itemId+":##b" + (itemId == -1 ? "赠送点券" : "#z" + itemId + "#") + "#k #rx "+itemQuantity+"#k\r\n";
        }
        text+="\r\n#d是否花费点卷#r"+price+"#n#d点卷购买该礼包？#k";
        cm.sendYesNo(text);
    } else if (status == 2) {
        if (giftId!=-1 && gifts != null) {
            var needslot = new Array(0, 0, 0, 0, 0);
            for (var i in gifts) {
                var type = Math.floor(gifts[i][0] / 1000000);
                if (type == -1) {
                    continue;
                }
                needslot[type - 1] = needslot[type - 1] + 1;
            }
            for (var i = 0; i < 5; i++) {
                if (cm.getSpace(i + 1) < needslot[i]) {
                    cm.sendOk("您的" + column[i] + "栏位空间不足" + needslot[i] + "格，请清理后再来。");
                    cm.dispose();
                    return;
                }
            }
            if (cm.getPlayer().getCSPoints(1) < price) {
                cm.sendOk("您的点卷不足，请先充值后再购买。");
                cm.dispose();
                return ;
            }
            for(var key in gifts) {
                var itemId = gifts[key][0];
                var itemQuantity = gifts[key][1];
                if (itemId == -1) {
                    cm.gainNX(itemQuantity);
                } else {
                    cm.gainItem(itemId, itemQuantity);
                }
            }
            cm.gainNX(-price);
            cm.sendOk("恭喜您，购买成功！");
            cm.dispose();
        } else {
            cm.sendOk("购买错误！请联系管理员！");
            cm.dispose();
        }
    }
}
﻿
var SelText = Array(
					Array ("初阶指导",0,0,0),
					Array ("中阶指导",1,0,0),
					Array ("高阶指导",2,0,0)
					);
var SeleTexts;
function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
  if (a >= 2 && mode != 1){
                    cm.openNpc(9000111);
	}else{
    if (mode == -1) {
        cm.openNpc(9000111);
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1){
        cm.openNpc(9000111);
        }else
        if (a == 0) {
				var selStr = "非常感谢来到传奇冒险岛，这里成就高手#b";
				for (var i = 0; i < SelText.length; i++) {
					selStr += "\r\n#L" + i + "# "+ SelText[i][0] +"#l";
				}//for
				cm.sendSimple(selStr);
		}else if (a == 1){
			SeleTexts = selection;
			selection = SelText[SeleTexts][1];
			var Text = SelText[SeleTexts][0];
			var Texts = "指导员：\r\n#b小秘书（FAQ） >> "+ Text +"#k\r\n\r\n";
			a = -1;
			if (selection == 0){//为什么可以在自由市场升级？	
Texts += "#b角色出生：#k\r\n1.游戏中快捷功能请点击->拍卖\r\n2.点击拍卖->领取经验->可以直接达到角色10级\r\n#r------------------------------------------------------#k\r\n#b角色等级LV 8：#k\r\n1.点击拍卖->传送到自由->找左边的财神->可以转职为魔法师\r\n#r------------------------------------------------------#k\r\n#b角色等级LV 10：#k\r\n0.点击拍卖->万能NPC->自动领取新玩家奖励\r\n1.点击拍卖->万能NPC->等级奖励->可以领取对应等级奖励哦\r\n2.点击拍卖->万能NPC->万能传送->可以直接传送到任务地图\r\n3.点击拍卖->万能NPC->游戏商店->购买武器 药水 技能书\r\n4.点击拍卖->万能NPC->仓库管理->任何地方能方便存取物品\r\n5.点击拍卖->万能NPC->点卷商店->购买游戏中绝版点装 道具\r\n6.点击拍卖->万能NPC->点卷中介->能方便与玩家交易点卷\r\n7.点击拍卖->万能NPC->充值转盘->能抽到极品稀有装备道具\r\n8.点击拍卖->传送到自由->找左边的财神->可以进行任何转职\r\n9.点击拍卖->传送市场->找冒险岛管理员2->参与限时活动";
			}else if (selection == 1){//中阶指导
Texts += "#b角色等级 LV 10-30：#k\r\n1.万能传送->传送射手村->孢子山丘->升级至10-30级\r\n2.点击拍卖->万能NPC->快速转职->等级30可选择第二次转职\r\n3.点击拍卖->查看怪物掉落->查看怪物是否掉落你职业装备\r\n#r------------------------------------------------------#k\r\n#b角色等级 LV 30-60：#k\r\n1.万能传送->传送天空之城->云彩公园I->升级至30-50级\r\n2.万能传送->传送天空之城->云彩阶梯I->升级至30-60级\r\n3.点击拍卖->万能NPC->快速转职->等级60可选择第三次转职\r\n4.点击拍卖->查看怪物掉落->查看怪物是否掉落你职业装备\r\n#r------------------------------------------------------#k\r\n#b角色等级 LV 60-120：#k\r\n1.万能传送->练级传送->神秘通道3->升级至60-100级\r\n2.万能传送->练级传送->幽灵船2->升级至100-120级\r\n3.点击拍卖->查看怪物掉落->查看怪物是否掉落你职业装备\r\n4.点击拍卖->查看怪物掉落->查看怪物是否掉落你职业技能书\r\n5.点击拍卖->万能NPC->快速转职->等级100可选择第四次转职\r\n6.点击拍卖->万能NPC->等级送礼->领取90-149的等级奖励\r\n#r------------------------------------------------------#k\r\n#b角色等级 LV 120-150：#k\r\n1.万能传送->传送神木村->火焰死亡战场->升级至120-130级\r\n2.万能传送->传送神木村->隐藏的龙庙2->升级至130-150级\r\n3.点击拍卖->查看怪物掉落->查看怪物是否掉落你职业装备\r\n4.点击拍卖->查看怪物掉落->查看怪物是否掉落你职业技能书\r\n5.点击拍卖->万能NPC->等级送礼->领取150-199的等级奖励";
			}else if (selection == 2){//
Texts += "#b角色等级 LV 150-180：#k\r\n1.万能传送->练级传送->死龙巢穴->升级150-180级\r\n2.万能传送->练级传送->后悔之路5->升级至150-180级\r\n3.点击拍卖->查看怪物掉落->查看怪物是否掉落你职业装备\r\n4.点击拍卖->查看怪物掉落->查看怪物是否掉落你职业技能书\r\n#r------------------------------------------------------#k\r\n#b角色等级 LV 180-250：#k\r\n1.副本传送->挑战各大BOSS->升级180-250级\r\n2.副本传送->挑战各大BOSS->可获得丰富奖励\r\n3.市场泡点->角色挂机市场->可获得积分值 可兑换点卷 装备\r\n4.万能NPC->天天日常->完成各种日常活动 可兑换丰富奖励\r\n5.万能NPC->点卷商店->卷轴商店->潜能 强化 装备\r\n6.万能NPC->点卷商店->破功石头->突破武器攻击上限";
			}
			cm.sendNext(Texts);
        }//status
	}
}
}



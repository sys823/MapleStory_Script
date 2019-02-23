var status = 0;
var typed=0;
//中介币的物品ID
var zjbid = 4310014;
var zmtid = 4310036;
var zyhzid = 4033356;
var zmtNum = java.lang.Math.floor(Math.random() * 100001 + 100000);
var zyhzNum = java.lang.Math.floor(Math.random() * 70001 + 30000);
var zjbNum = java.lang.Math.floor(Math.random() * 1500001 + 1500000);
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) { 
			cm.sendSimple("你渴望得到更强大的力量吗？\r\n#r#L999#伤害上限突破简介#l\r\n\r\n#L1#[武器]雪花币突破 (#k目前状态：#r推荐内容#b)#l\r\n#L2#[武器]正义火种突破 (#k目前状态：#r火爆内容#b)#l\r\n#L3#[武器]征服者币突破 #l");
		} else if (status == 1) {
			if (selection == 999) {
				cm.sendOk("\t我能够为你的武器增加武器攻击伤害上限以提升您的潜在输出能力。使用不同的道具对武器伤害上限提升的效果不同。\r\n\t1.消耗100个#b#v4310014#雪花币#k突破，每次可以为武器提升150W~300W伤害。\r\n\t2.消耗3个#b#v4033356#正义火种1#k突破，每次可以为武器提升3W~10W的伤害。\r\n\t3.消耗5000个#b#v4310036#征服者币#k突破，每次可以为武器提升10W~20W的伤害。");
			} else {
				typed=selection;
				if (selection == 1) {
					cm.sendYesNo("是否花费100个#b雪花币#k对当前穿戴的武器进行伤害上限突破？#r#e雪花币不足的部分将会以国庆纪念币补足。#n#k");
				} else if (selection == 2) { 
					cm.sendYesNo("是否花费3个#b正义火种1#k对当前穿戴的武器进行伤害上限突破？");
				} else if (selection == 3) {
					cm.sendYesNo("是否花费5000个#b征服者币#k对当前穿戴的武器进行伤害上限突破？");
				}
			}
		} else if (status == 2) {
			if (selection = -1)
				selection = typed;
			if (selection == 3) {
				//字母突破
					if(cm.haveItem(zmtid, 5000)){
						if (cm.changeLimitBreak(zmtNum)) {
							
							cm.gainItem(zmtid,-5000);
								cm.sendOk("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r"+ zmtNum +"#b.");
							cm.worldSpouseMessage(0x20,"[伤害突破] 玩家 "+ cm.getChar().getName() +" 使用 征服者币 让武器伤害上限突破成功 本次追加 "+ zmtNum +" 伤害值 。");
						}else{
								cm.sendOk("#b突破失败.\r\n系统为检测到角色身上装备武器.");
						}
								cm.dispose();
						}else{
								cm.sendOk("#b突破失败.\r\n需要 5000个 征服者 才可以突破.");
								cm.dispose();
						}
			} else if (selection == 1) {
					var _q = getNeeds(100);
					if(canBuy(_q)){
						pay(_q);
						if (cm.changeLimitBreak(zjbNum)) {
							pay(_q);
							cm.sendOk("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r"+ zjbNum +"#b.");
							cm.worldSpouseMessage(0x20,"[伤害突破] 玩家 "+ cm.getChar().getName() +" 使用 雪花币 让武器伤害上限突破成功 本次追加 "+ zjbNum +" 伤害值 。");
						}else{
								cm.sendOk("#b突破失败.\r\n系统为检测到角色身上装备武器.");
						}
								cm.dispose();
						}else{
								cm.sendOk("#b突破失败.\r\n雪花币或国庆纪念币数量总和不足 100 个.");
								cm.dispose();
						}
			} else if (selection == 2) {
					if(cm.haveItem(4033356, 3)){
						if (cm.changeLimitBreak(zyhzNum)) {
							cm.gainItem(4033356,-3);
							cm.sendOk("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r"+ zyhzNum +"#b.");
							cm.worldSpouseMessage(0x20,"[伤害突破] 玩家 "+ cm.getChar().getName() +" 使用 正义火种1 让武器伤害上限突破成功 本次追加 "+ zyhzNum +" 伤害值 。");
						}else{
								cm.sendOk("#b突破失败.\r\n系统为检测到角色身上装备武器.");
						}
								cm.dispose();
						}else{
								cm.sendOk("#b突破失败.\r\n需要 3个 正义火种1 才可以突破.");
								cm.dispose();
						}
			}
		}
	}
}

function getNeeds(quantity) {
	var _xq = quantity;
	var _gq = 0;
	if (!cm.haveItem(4310014, quantity)) {
		_xq = cm.getItemQuantity(4310014);
		_gq = quantity-_xq;
	}
	return Array(_xq, _gq);
}
function pay(q) {
	if (q[0]>0)
		cm.gainItem(4310014, -q[0])
	if (q[1]>0)
		cm.gainItem(4000463, -q[1]);
}
function canBuy(q) {
	if (cm.haveItem(4000463, q[1]))
		return true;
	else
		return false;
}
function start() {
	var selStr = "- #e#d耽误您一分钟请务必认真看完。#k#n\r\n\r\n";
	selStr +="#e#r1).#n #d赞助本服一元即可在市场普通等级服务员处领取首充礼包,例如充值100元,即可领取1-100元充值奖励.(相当于白送,充值点卷还在).\r\n";
	selStr +="#e#r2).#n #b背包里赠送的基础礼物箱子,当您等级达到一定的时候会赠送您一些药水和抵用卷等等,另外您在打怪会获得1抵用卷.\r\n";
	selStr +="#e#r3).#n #b当足够买宠物的时候可以先去商城买个宠物,然后打开宠物栏勾选上捡取道具即可捡取道具.\r\n";
	selStr +="#e#r4).#n #b怪物都会掉落神秘之冰和RED币,神秘之冰也可以开出RED币和征服者币,此物品请收集到一定数量后可在拍卖处游戏商店里购买物品.\r\n";
	selStr +="#e#r5).#n #b本服技能手册可以通过怪物以及boss掉落,也可以通过世界怪物掉落的神秘能手册开出来.\r\n";
	selStr +="#e#r6).#n #b本服魔方不可以通过商城购买,但是免费获得渠道众多,例如组队任务,活跃度,副本,环任务等等,还可以通过抵用卷商城进行购买.\r\n";
	selStr +="#e#r7).#n #b市场泡点每30秒可以获得1点卷,10点抵用卷,以及5点绑定繁星币,上班族没时间玩可以挂在市场哦,这对于您的经济来源很有帮助.\r\n";
	selStr +="#e#r8).#n #b法弗纳150级武器系列可以通过市场普通服务员处自己制作,会提示材料个数,当您个数满足后,可以制作出对应武器.\r\n";
	selStr +="#e#r9).#n #b本服可以用抵用卷抽取120-140装备系列,请大家努力刷怪获取大量抵用卷吧,人品好一次即可获得哦,抽奖你们懂的.\r\n";
	selStr +="#e#r10).#n #b部分道具的出处,运动会币在米纳尔森林保卫战副本里出,火种在废弃都市组队任务里出.部分BOSS也可以掉落火种.\r\n";
	selStr +="#e#r11).#n #b拍卖里面的整形医院只有皇家发型,如果不喜欢皇家发型的可以去射手村理发店里.\r\n";
	selStr +="#e#r12).#n #b每日签到可以获得签到积分,还可测试人品,当积分达到分数可以在拍卖兑换道具.\r\n";
	im.sendOk(selStr);
         //im.sendOk("- #e#d本服玩家交流群：2335015#k#n\r\n\r\n#b1). #r新手玩家会赠送有起步资金，建议先去商城购买个宠物，然后按开E，选择宠物栏位，够选上宠物拣取道具。\r\n#b2). #r建议先了解市场NPC以及#b拍卖#r上面的功能，升级途中会掉落神秘之冰，神秘之冰会开出高级装备所需要的硬币以及魔方卷轴等等。拍卖上面有RED币商店，以及市场#b#p9900001##r处有征服者币商店，可以进行购买。\r\n#b3). #r怪物会有几率掉落抵用卷物品。有几率性掉落500/1000/1500/3000/4000等商品卷。双击使用后会获得大量抵用卷。\r\n#b4). #r本服市场挂机30秒将会获得1积分，积分可以在#b拍卖#r处在线兑换兑换点卷，魔方，120-140装备，卷轴等等。\r\n#b5). #r本服每天基本都有活动举行，活动奖品很丰富，活动会奖励点卷，魔方，高级卷轴，高级装备，稀有点装，椅子等等。\r\n#b6). #r本服150武器可以自己去打材料在市场#b#p9900001##r处制作。材料的出处，以及技能书等等都在群共享里。\r\n#b7). #r本服正在努力做到更好中，如果您有什么建议或者意见，请加我们的玩家交流群联系群主，最后感谢您的到来。");
	im.worldSpouseMessage(0x14,"『毛莫的信』：玩家 "+ im.getChar().getName() +" 对本服不了解查看了本服介绍说明书。");
        im.dispose(); 
}

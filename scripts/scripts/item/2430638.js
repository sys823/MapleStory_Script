status = -1;
var itemList = Array(
// ------ 椅子 ------
Array(3010013, 600, 1, 1), //悠长假期
Array(3010014, 600, 1, 1), //月亮弯
Array(3010021, 600, 1, 1), //暖暖桌
Array(3010025, 600, 1, 1), //枫叶纪念凳
Array(3010028, 600, 1, 1), //海盗的俘虏
Array(3010029, 600, 1, 1), //蓝环凳
Array(3010030, 600, 1, 1), //黑环凳
Array(3010031, 600, 1, 1), //红环凳
Array(3010032, 600, 1, 1), //黄环凳
Array(3010033, 600, 1, 1), //绿环凳
Array(3010144, 600, 1, 1), //七夕椅子
Array(3010163, 600, 1, 1), //满月椅
// ------ 卷轴 ------
Array(2046113, 700, 1, 1), //双手武器攻击卷轴60%
Array(2046013, 700, 1, 1), //单手武器魔力卷轴60%
Array(2046012, 700, 1, 1), //单手武器攻击力卷轴60%
Array(2040914, 700, 1, 1), //盾牌攻击卷轴60%
Array(2040919, 700, 1, 1), //盾牌魔力卷轴60%
Array(2049002, 600, 1, 1), //白医卷轴
Array(2340000, 600, 1, 1), //祝福卷轴
Array(2049100, 600, 1, 1), //混沌卷轴60%
Array(2049300, 600, 1, 1), //高级装备强化卷轴
Array(2049400, 600, 1, 1), //高级潜能附加卷轴
Array(2049309, 600, 1, 1), //2星装备强化卷轴
Array(2049401, 700, 1, 1), //潜能附加卷轴
Array(2049301, 700, 1, 1), //装备强化卷轴
Array(2290285, 700, 1, 1), //神秘能手册
// ------ 装备 ------
Array(1112427, 500, 1, 1), //冒险家的残酷之戒
Array(1112428, 500, 1, 1), //冒险家的爆击之戒
Array(1112429, 500, 1, 1), //冒险家的魔法之戒
Array(1032077, 500, 1, 1), //莱格斯的绿色耳环
Array(1032078, 500, 1, 1), //莱格斯的红色耳环
Array(1032079, 500, 1, 1), //莱格斯的蓝色耳环
Array(1112585, 500, 1, 1), //天使的祝福
Array(1202000, 500, 1, 1), //冰冻僵尸-图腾
Array(1202001, 500, 1, 1), //火焰僵尸-图腾
Array(1202002, 500, 1, 1), //中毒僵尸-图腾
Array(1202003, 500, 1, 1), //触电僵尸-图腾
Array(1202004, 400, 1, 1), //诅咒僵尸-图腾
Array(1132013, 500, 1, 1), //不灭的法老腰带
Array(1132091, 500, 1, 1), //十字旅团基本腰带
Array(1112907, 500, 1, 1), //小鱼戒指
Array(1102041, 500, 1, 1), //浪人披风(粉)
Array(1102042, 500, 1, 1), //浪人披风(紫)
Array(1012319, 500, 1, 1), //8周年点点红
Array(1152054, 500, 1, 1), //完成的护肩
Array(1032026, 500, 1, 1), //黄水晶耳环
// ------ 特殊 ------
Array(5062000, 400, 1, 1), //神奇魔方
Array(2430639, 100, 1, 1), //明日礼物箱子(银)
//Array(4031997, 700, 1, 1), //蘑菇金币
Array(5064000, 400, 1, 1), //防爆卷轴
Array(2022800, 700, 1, 1), //心跳停止糖
Array(4310015, 700, 1, 1), //斗神证物
Array(4021012, 700, 1, 1), //强烈灵魂的净水
Array(4021011, 700, 1, 1), //纯洁灵魂的火花
Array(5220040, 400, 1, 1), //冒险岛转蛋券
Array(5570000, 400, 1, 1), //金锤子
Array(5150040, 400, 1, 1), //皇家理发券
Array(2046967, 700, 1, 1), // 酷暑单手武器攻击力卷轴 - 在单手武器上增加攻击力属性，提高所有属性。
Array(2046971, 700, 1, 1), // 酷暑单手武器魔力卷轴 - 在单手武器上增加魔法攻击力属性，提高所有属性。
Array(2047803, 700, 1, 1), // 酷暑双手武器攻击力卷轴 - 在双手武器上增加攻击力属性，提高所有属性。
Array(2047917, 700, 1, 1), // 酷暑防具强化卷轴 - 在防具上增加力量/智力/敏捷/幸运属性。
Array(2046841, 700, 1, 1), // 酷暑饰品攻击力卷轴 - 在饰品上增加攻击力属性。
Array(2046842, 700, 1, 1), // 酷暑饰品魔力卷轴 - 在饰品上增加魔法攻击力属性。
// ------ 玩具 ------
Array(1442018, 300, 1, 1), //冻冻鱼
Array(1092022, 300, 1, 1), //调色板盾牌
Array(1322051, 300, 1, 1), //七夕
Array(1402044, 300, 1, 1), //南瓜灯笼
// ------ 任务物品 ------
//Array(3994067, 700, 1, 1), //字母I
Array(3994059, 500, 1, 1), //字母A
//Array(3994071, 500, 1, 1), //字母M
Array(3994066, 700, 1, 1), //字母H
Array(3994074, 300, 1, 1), //字母P
Array(3994083, 700, 1, 1), //字母Y
Array(4001220, 500, 1, 1), //褪色的特殊项链
Array(4001221, 500, 1, 1), //褪色的勇气碎块
Array(4001222, 500, 1, 1), //褪色的智慧碎块
Array(4001223, 500, 1, 1), //褪色的娜精准碎块
Array(4001224, 500, 1, 1), //褪色的敏捷碎块
Array(4001225, 500, 1, 1), //褪色的自由碎块
Array(4032177, 500, 1, 1), //褪色的冒险之心项坠
Array(4001226, 300, 1, 1), //褪色的勇气之心
Array(4001227, 300, 1, 1), //褪色的智慧之心
Array(4001228, 300, 1, 1), //褪色的精准之心
Array(4001229, 300, 1, 1), //褪色的敏捷之心
Array(4001230, 300, 1, 1), //褪色的自由之心
Array(2046913, 350, 1, 3), // 宿命正义单手武器攻击力卷轴 100% // 为单手武器增加攻击力属性。
Array(2046914, 350, 1, 3), // 宿命正义单手武器魔力卷轴 100% // 为单手武器增加魔法攻击力属性。
Array(2046173, 350, 1, 3), // 宿命正义双手武器攻击力卷轴 100% // 为双手武器增加攻击力属性。
Array(2046577, 350, 1, 3), // 宿命正义防具力量卷轴 100% // 为防具增加力量属性。
Array(2046578, 350, 1, 3), // 宿命正义防具智力卷轴 100% // 为防具增加智力属性。
Array(2046579, 350, 1, 3), // 宿命正义防具敏捷卷轴 100% // 为防具增加敏捷属性。
Array(2046580, 350, 1, 3), // 宿命正义防具运气卷轴 100% // 为防具增加运气属性。
Array(2046763, 350, 1, 3), // 宿命正义饰品力量卷轴 100% // 为饰品增加力量属性。
Array(2046764, 350, 1, 3), // 宿命正义饰品智力卷轴 100% // 为饰品增加智力属性。
Array(2046765, 350, 1, 3), // 宿命正义饰品敏捷卷轴 100% // 为饰品增加敏捷属性。
Array(2046766, 350, 1, 3) // 宿命正义饰品运气卷轴 100% // 为饰品增加运气属性。
);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            im.sendOk("不想使用吗？…我的肚子里有各类#b奇特座椅或卷轴、装备、新奇道具#k哦！");
            im.dispose();
        }
        status--;
    }
    if (status == 0) {
        var chance = Math.floor(Math.random() * 700);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = im.gainGachaponItem(itemId, quantity, "明日礼物箱子(铜)", notice);
            if (item != -1) {
            im.gainItem(2430638, -1);
                im.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                im.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            im.safeDispose();
        } else {
            im.sendOk("今天的运气可真差，什么都没有拿到。\r\n(获得了安慰奖：运动会币 x3。)");
            im.gainItem(4310030, 3);
            im.safeDispose();
        }
    }
}
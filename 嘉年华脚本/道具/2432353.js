﻿status = -1;
var itemList = Array(
// ------ 卷轴 ------
Array(2049100, 500, 1, 3), //混沌卷轴60%
Array(2049752, 50, 1, 3), //S级潜能卷轴 30%
Array(2049704, 40, 1, 3), //A级潜能附加卷轴 40%
Array(2049304, 500, 1, 3), //3星装备强化卷轴 80%
Array(2000005, 600, 10, 3), //超级药水
Array(5062000, 400, 1, 3),
Array(5062002, 300, 1, 3),
Array(5062500, 200, 1, 3),
Array(5062010, 100, 1, 3),
Array(5064000, 200, 1, 3),
Array(2450020, 300, 1, 3),
Array(4001713, 600, 1, 3), // 定居金10万金钱 // 为帮助反抗者角色定居而发行的纪念金币。卖给商店可以获得10万金钱。
Array(4001714, 100, 1, 3), // 定居金100万金钱 // 为帮助反抗者角色定居而发行的纪念金币。卖给商店可以获得100万金钱。
Array(4001715, 10, 1, 3), // 定居金1亿金钱 // 为帮助反抗者角色定居而发行的纪念金币。卖给商店可以获得1亿金钱。
Array(2510528, 50, 1, 3), // 狮心战斗头盔制作配方 // 使用配方，可以学习狮心战斗头盔的制作方法。
Array(2510529, 50, 1, 3), // 龙尾法师帽子制作配方 // 使用配方，可以学习龙尾法师帽子的制作方法。
Array(2510530, 50, 1, 3), // 鹰翼哨兵便帽制作配方 // 使用配方，可以学习鹰翼哨兵便帽的制作方法。
Array(2510531, 50, 1, 3), // 渡鸦之魂追踪者帽制作配方 // 使用配方，可以学习渡鸦之魂追踪者帽的制作方法。
Array(2510532, 50, 1, 3), // 鲨齿船长帽制作配方 // 使用配方，可以学习鲨齿船长帽的制作方法。
Array(2510533, 50, 1, 3), // 狮心战斗锁子甲制作配方 // 使用配方，可以学习狮心战斗锁子甲的制作方法。
Array(2510534, 50, 1, 3), // 龙尾法师长袍制作配方 // 使用配方，可以学习龙尾法师长袍的制作方法。
Array(2510535, 50, 1, 3), // 鹰翼哨兵服制作配方 // 使用配方，可以学习鹰翼哨兵服的制作方法。
Array(2510536, 50, 1, 3), // 渡鸦之魂追踪者盔甲制作配方 // 使用配方，可以学习渡鸦之魂追踪者盔甲的制作方法。
Array(2510537, 50, 1, 3), // 鲨齿船长外套制作配方 // 使用配方，可以学习鲨齿船长外套的制作方法。
Array(2510538, 50, 1, 3), // 狮心战斗鞋制作配方 // 使用配方，可以学习狮心战斗鞋的制作方法。
Array(2510539, 50, 1, 3), // 龙尾法师鞋制作配方 // 使用配方，可以学习龙尾法师鞋的制作方法。
Array(2510540, 50, 1, 3), // 鹰翼哨兵鞋制作配方 // 使用配方，可以学习鹰翼哨兵鞋的制作方法。
Array(2510541, 50, 1, 3), // 渡鸦之魂追踪者鞋制作配方 // 使用配方，可以学习渡鸦之魂追踪者鞋的制作方法。
Array(2510542, 50, 1, 3), // 鲨齿船长鞋制作配方 // 使用配方，可以学习鲨齿船长鞋的制作方法。
Array(2510543, 50, 1, 3), // 狮心战斗护腕制作配方 // 使用配方，可以学习狮心战斗护腕的制作方法。
Array(2510544, 50, 1, 3), // 龙尾法师手套制作配方 // 使用配方，可以学习龙尾法师手套的制作方法。
Array(2510545, 50, 1, 3), // 鹰翼哨兵手套制作配方 // 使用配方，可以学习鹰翼哨兵手套的制作方法。
Array(2510546, 50, 1, 3), // 渡鸦之魂追踪者手套制作配方 // 使用配方，可以学习渡鸦之魂追踪者手套的制作方法。
Array(2510547, 50, 1, 3), // 鲨齿船长手套制作配方 // 使用配方，可以学习鲨齿船长手套的制作方法。
Array(2510548, 50, 1, 3), // 狮心弯刀制作配方 // 使用配方，可以学习狮心弯刀的制作方法。
Array(2510549, 50, 1, 3), // 狮心勇士斧制作配方 // 使用配方，可以学习狮心勇士斧的制作方法。
Array(2510550, 50, 1, 3), // 狮心震雷钉制作配方 // 使用配方，可以学习狮心震雷钉的制作方法。
Array(2510551, 50, 1, 3), // 狮心战斗弯刀制作配方 // 使用配方，可以学习狮心战斗弯刀的制作方法。
Array(2510552, 50, 1, 3), // 狮心战斗斧制作配方 // 使用配方，可以学习狮心战斗斧的制作方法。
Array(2510553, 50, 1, 3), // 狮心巨锤制作配方 // 使用配方，可以学习狮心巨锤的制作方法。
Array(2510554, 50, 1, 3), // 狮心长枪制作配方 // 使用配方，可以学习狮心长枪的制作方法。
Array(2510555, 50, 1, 3), // 狮心矛制作配方 // 使用配方，可以学习狮心矛的制作方法。
Array(2510556, 50, 1, 3), // 龙尾精灵短杖制作配方 // 使用配方，可以学习龙尾精灵短杖的制作方法。
Array(2510557, 50, 1, 3), // 龙尾战斗长杖制作配方 // 使用配方，可以学习龙尾战斗长杖的制作方法。
Array(2510558, 50, 1, 3), // 鹰翼组合弓制作配方 // 使用配方，可以学习鹰翼组合弓的制作方法。
Array(2510559, 50, 1, 3), // 鹰翼重弩制作配方 // 使用配方，可以学习鹰翼重弩的制作方法。
Array(2510560, 50, 1, 3), // 龙翼巨弩枪制作配方 // 使用配方，可以学习龙翼巨弩枪的制作方法。
Array(2510561, 50, 1, 3), // 渡鸦之魂钢铁拳套制作配方 // 使用配方，可以学习渡鸦之魂钢铁拳套的制作方法。
Array(2510562, 50, 1, 3), // 渡鸦之魂短刀制作配方 // 使用配方，可以学习渡鸦之魂短刀的制作方法。
Array(2510563, 50, 1, 3), // 渡鸦之魂真红手杖制作配方 // 使用配方，可以学习渡鸦之魂真红手杖的制作方法。
Array(2510564, 50, 1, 3), // 精灵角暗影刀制作配方 // 使用配方，可以学习精灵角暗影刀的制作方法。
Array(2510565, 50, 1, 3), // 鲨齿巨鹰爪制作配方 // 使用配方，可以学习鲨齿巨鹰爪的制作方法。
Array(2510566, 50, 1, 3), // 鲨齿锐利手铳制作配方 // 使用配方，可以学习鲨齿锐利手铳的制作方法。
Array(2510567, 50, 1, 3), // 鲨齿火焰炮制作配方 // 使用配方，可以学习鲨齿火焰炮的制作方法。
//表情
Array(5160000, 100, 1, 3), // 呕吐 // 在键盘设定为快捷键后按下该键，角色的表情变成呕吐的样子。
Array(5160001, 100, 1, 3), // 汗 // 在键盘设定为快捷键后按下该键，角色的表情变成出汗的样子。
Array(5160002, 100, 1, 3), // 哟！ // 在键盘设定为快捷键后按下该键，角色的表情变成很高兴的样子。
Array(5160003, 100, 1, 3), // 接吻 // 在键盘设定为快捷键后按下该键，角色的表情变成接吻的样子。
Array(5160004, 100, 1, 3), // 眨眼 // 在键盘设定为快捷键后按下该键，角色的表情变成眨眼的样子。
Array(5160005, 100, 1, 3), // 疼 // 在键盘设定为快捷键后按下该键，角色的表情变成疼的样子。
Array(5160006, 100, 1, 3), // 闪耀 // 在键盘设定为快捷键后按下该键，角色会眨眼睛。
Array(5160007, 100, 1, 3), // 愤怒 // 怒火中烧的表情；可设定在键盘的热键上，在游戏中按下该热键，角色就会作出怒火燃烧的表情。
Array(5160008, 100, 1, 3), // 闪闪发亮 // 闪闪发亮的表情；可设定在键盘的热键上，在游戏中按下该热键，角色就会作出闪闪发亮的表情。
Array(5160009, 100, 1, 3), // 一见钟情 // 一见钟情的表情；可设定在键盘的热键上，在游戏中按下该热键，角色就会作出一见钟情的表情。
Array(5160010, 100, 1, 3), // 衰 // 衰的表情；可设定在键盘的热键上，在游戏中按下该热键，角色就会作出衰的表情。
Array(5160011, 100, 1, 3), // 思考 // 思考的表情；可设定在键盘的热键上，在游戏中按下该热键，角色就会作出思考的表情。
Array(5160012, 100, 1, 3), // 口水 // 口水的表情；可设定在键盘的热键上，在游戏中按下该热键，角色就会作出口水的表情。
Array(5160013, 100, 1, 3), // 好热呀 // 吐火的表情；可设定在键盘的热键上，在游戏中按下该热键，角色就会作出吐火的表情。
Array(5160014, 100, 1, 3), // 啊哦 // 嘲笑别人的表情；可设定在键盘的热键上，在游戏中按下该热键，角色就会作出嘲笑别人的表情。
Array(5160019, 100, 1, 3), // 有魅力的呕吐 // 双击道具,或者设置在键盘的快捷键上,按了后角色会做呕吐的表情.
Array(5160020, 100, 1, 3), // 有魅力的汗 // 双击道具,或者设置在键盘的快捷键上,按了后角色会做汗的表情. 
Array(5160021, 100, 1, 3), // 有魅力的哟! // 双击道具,或者设置在键盘的快捷键上,按了后角色会做哟!的表情. 
Array(5160022, 100, 1, 3), // 有魅力的接吻  // 双击道具,或者设置在键盘的快捷键上,按了后角色会做接吻的表情. 
Array(5160023, 100, 1, 3), // 有魅力的眨眼  // 双击道具,或者设置在键盘的快捷键上,按了后角色会做眨眼的表情. 
Array(5160024, 100, 1, 3), // 有魅力的疼 // 双击道具,或者设置在键盘的快捷键上,按了后角色会做疼的表情.
Array(5160025, 100, 1, 3), // 有魅力的闪耀  // 双击道具,或者设置在键盘的快捷键上,按了后角色会做闪耀的表情. 
Array(5160026, 100, 1, 3), // 有魅力的愤怒  // 双击道具,或者设置在键盘的快捷键上,按了后角色会做愤怒的表情. 
Array(5160027, 100, 1, 3), // 有魅力的闪闪发亮 // 双击道具,或者设置在键盘的快捷键上,按了后角色会做闪闪发亮的表情.
Array(5160028, 100, 1, 3), // 有魅力的一见钟情  // 双击道具,或者设置在键盘的快捷键上,按了后角色会做一见钟情的表情. 
Array(5160029, 100, 1, 3), // 有魅力的衰  // 双击道具,或者设置在键盘的快捷键上,按了后角色会做衰的表情.
Array(5160030, 100, 1, 3), // 有魅力的思考  // 双击道具,或者设置在键盘的快捷键上,按了后角色会做思考的表情.
Array(5160031, 100, 1, 3), // 有魅力的口水  // 双击道具,或者设置在键盘的快捷键上,按了后角色会做流口水的表情. 
Array(5160032, 100, 1, 3), // 有魅力的好热呀 // 双击道具,或者设置在键盘的快捷键上,按了后角色会做好热呀的表情. 
Array(5160033, 100, 1, 3), // 有魅力的啊哦  // 双击道具,或者设置在键盘的快捷键上,按了后角色会做啊哦的表情.
Array(5160015, 100, 1, 3), // 晕乎乎 // 双击图标或者设置在快捷键上按住将会出现晕乎乎的表情。
Array(5160016, 100, 1, 3), // 囧 // 双击图标或者设置在快捷键上按住将会出现囧的表情。
Array(5160017, 100, 1, 3), // 哼哼 // 双击图标或者设置在快捷键上按住将会出现阴险的表情。
//必成卷
Array(2040006, 200, 1, 3), //头盔防御
Array(2040007, 200, 1, 3), //头盔体力
Array(2040303, 200, 1, 3), //耳环智力
Array(2040403, 100, 1, 3), //上衣防御
Array(2040506, 200, 1, 3), //全身铠甲敏捷
Array(2040507, 300, 1, 3), //防御
Array(2040603, 300, 1, 3), //裤裙防御
Array(2040709, 200, 1, 3), //鞋子敏捷
Array(2040710, 200, 1, 3), //鞋子跳跃
Array(2040711, 300, 1, 3), //鞋子速度
Array(2040806, 200, 1, 3), //手套敏捷
Array(2040903, 200, 1, 3), //盾牌防御
Array(2041024, 200, 1, 3),  //披风魔防
Array(2041025, 200, 1, 3), //披风物防
Array(2043003, 100, 1, 3), //单手剑攻击
Array(2043103, 100, 1, 3), //斧
Array(2043203, 100, 1, 3),  //钝器
Array(2043303, 100, 1, 3), //短剑
Array(2043703, 100, 1, 3), //短杖
Array(2043803, 100, 1, 3), //长杖
Array(2044003, 100, 1, 3), //双手剑
Array(2044019, 100, 1, 3),  //双手剑魔力
Array(2044103, 100, 1, 3),// 斧头
Array(2044203, 100, 1, 3), //钝器
Array(2044303, 100, 1, 3),  //枪攻击
Array(2044403, 100, 1, 3),  //矛攻击
Array(2044503, 100, 1, 3), //弓攻击
Array(2044603, 100, 1, 3), //弩
Array(2044703, 100, 1, 3),  //全套
Array(2044815, 100, 1, 3), //指节
Array(2044908, 100, 1, 3)  //短枪
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
        var chance = Math.floor(Math.random() * 900);
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
			
            item = im.gainGachaponItem(itemId, quantity, "开心！转盘箱子", notice);
            if (item != -1) {
				im.gainItem(2432353, -1);
                im.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个");
            } else {
                im.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            im.safeDispose();
        } else {
			im.gainItem(2432353, -1);
            im.sendOk("今天的运气可真差，什么都没有拿到。");
            im.safeDispose();
        }
    }
}
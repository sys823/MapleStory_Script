﻿status = -1;
var itemList = Array(
Array(1132243, 800, 1, 3), // 低级贝勒德刻印腰带 - 雕刻着贝勒德的纹样的腰带。
Array(1122264, 800, 1, 3), // 低级贝勒德刻印吊坠 - 雕刻着贝勒德的纹样的吊坠。
Array(1032220, 800, 1, 3), // 低级贝勒德耳环 - 用贝勒德之核碎片制作而成的耳环。感觉有时会发出光芒。
Array(1113072, 800, 1, 3), // 低级贝勒德戒指 - 用从贝勒德身上获得的核的碎片制作而成的戒指。
Array(4310036, 800, 200, 3), //征服币
Array(5160000, 800, 1, 3), // 呕吐 // 在键盘设定为快捷键后按下该键，角色的表情变成呕吐的样子。
Array(5160001, 800, 1, 3), // 汗 // 在键盘设定为快捷键后按下该键，角色的表情变成出汗的样子。
Array(5160002, 800, 1, 3), // 哟！ // 在键盘设定为快捷键后按下该键，角色的表情变成很高兴的样子。
Array(5160003, 800, 1, 3), // 接吻 // 在键盘设定为快捷键后按下该键，角色的表情变成接吻的样子。
Array(5160004, 800, 1, 3), // 眨眼 // 在键盘设定为快捷键后按下该键，角色的表情变成眨眼的样子。
Array(5160005, 800, 1, 3), // 疼 // 在键盘设定为快捷键后按下该键，角色的表情变成疼的样子。
Array(5160006, 800, 1, 3), // 闪耀 // 在键盘设定为快捷键后按下该键，角色会眨眼睛。
Array(5160007, 800, 1, 3), // 愤怒 // 怒火中烧的表情；可设定在键盘的热键上，在游戏中按下该热键，角色就会作出怒火燃烧的表情。
Array(5160008, 800, 1, 3), // 闪闪发亮 // 闪闪发亮的表情；可设定在键盘的热键上，在游戏中按下该热键，角色就会作出闪闪发亮的表情。
Array(5160009, 800, 1, 3), // 一见钟情 // 一见钟情的表情；可设定在键盘的热键上，在游戏中按下该热键，角色就会作出一见钟情的表情。
Array(5160010, 800, 1, 3), // 衰 // 衰的表情；可设定在键盘的热键上，在游戏中按下该热键，角色就会作出衰的表情。
Array(5160011, 800, 1, 3), // 思考 // 思考的表情；可设定在键盘的热键上，在游戏中按下该热键，角色就会作出思考的表情。
Array(5160012, 800, 1, 3), // 口水 // 口水的表情；可设定在键盘的热键上，在游戏中按下该热键，角色就会作出口水的表情。
Array(5160013, 800, 1, 3), // 好热呀 // 吐火的表情；可设定在键盘的热键上，在游戏中按下该热键，角色就会作出吐火的表情。
Array(5160014, 800, 1, 3), // 啊哦 // 嘲笑别人的表情；可设定在键盘的热键上，在游戏中按下该热键，角色就会作出嘲笑别人的表情。
Array(5160019, 800, 1, 3), // 有魅力的呕吐 // 双击道具,或者设置在键盘的快捷键上,按了后角色会做呕吐的表情.
Array(5160020, 800, 1, 3), // 有魅力的汗 // 双击道具,或者设置在键盘的快捷键上,按了后角色会做汗的表情. 
Array(5160021, 800, 1, 3), // 有魅力的哟! // 双击道具,或者设置在键盘的快捷键上,按了后角色会做哟!的表情. 
Array(5160022, 800, 1, 3), // 有魅力的接吻  // 双击道具,或者设置在键盘的快捷键上,按了后角色会做接吻的表情. 
Array(5160023, 800, 1, 3), // 有魅力的眨眼  // 双击道具,或者设置在键盘的快捷键上,按了后角色会做眨眼的表情. 
Array(5160024, 800, 1, 3), // 有魅力的疼 // 双击道具,或者设置在键盘的快捷键上,按了后角色会做疼的表情.
Array(5160025, 800, 1, 3), // 有魅力的闪耀  // 双击道具,或者设置在键盘的快捷键上,按了后角色会做闪耀的表情. 
Array(5160026, 800, 1, 3), // 有魅力的愤怒  // 双击道具,或者设置在键盘的快捷键上,按了后角色会做愤怒的表情. 
Array(5160027, 800, 1, 3), // 有魅力的闪闪发亮 // 双击道具,或者设置在键盘的快捷键上,按了后角色会做闪闪发亮的表情.
Array(5160028, 800, 1, 3), // 有魅力的一见钟情  // 双击道具,或者设置在键盘的快捷键上,按了后角色会做一见钟情的表情. 
Array(5160029, 800, 1, 3), // 有魅力的衰  // 双击道具,或者设置在键盘的快捷键上,按了后角色会做衰的表情.
Array(5160030, 800, 1, 3), // 有魅力的思考  // 双击道具,或者设置在键盘的快捷键上,按了后角色会做思考的表情.
Array(5160031, 800, 1, 3), // 有魅力的口水  // 双击道具,或者设置在键盘的快捷键上,按了后角色会做流口水的表情. 
Array(5160032, 800, 1, 3), // 有魅力的好热呀 // 双击道具,或者设置在键盘的快捷键上,按了后角色会做好热呀的表情. 
Array(5160033, 800, 1, 3), // 有魅力的啊哦  // 双击道具,或者设置在键盘的快捷键上,按了后角色会做啊哦的表情.
Array(5160015, 800, 1, 3), // 晕乎乎 // 双击图标或者设置在快捷键上按住将会出现晕乎乎的表情。
Array(5160016, 800, 1, 3), // 囧 // 双击图标或者设置在快捷键上按住将会出现囧的表情。
Array(5160017, 800, 1, 3), // 哼哼 // 双击图标或者设置在快捷键上按住将会出现阴险的表情。
Array(2049100, 500, 1, 3), //混沌卷轴60%
Array(2049752, 200, 1, 3), //S级潜能卷轴 30%
Array(2049704, 500, 1, 3), //A级潜能附加卷轴 40%
Array(2049304, 300, 1, 3), //3星装备强化卷轴 80%
Array(2000005, 800, 100, 3) //超级药水
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
        var chance = Math.floor(Math.random() * 800);
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
            item = im.gainGachaponItem(itemId, quantity, "有用的箱子", notice);
            if (item != -1) {
		im.gainItem(2431098, -1);
                im.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                im.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            im.safeDispose();
        } else {
            im.sendOk("今天的运气可真差，什么都没有拿到。");
            im.safeDispose();
        }
    }
}
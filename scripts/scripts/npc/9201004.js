/*
	名字: 		文月禾
	地图: 		婚礼村
	描述: 		结婚介绍
*/

var mainmenu = "能找到用红线连着的姻缘，真是太难了。但愿你能找到你的姻缘。看你的样子，像是有问题要问我嘛，说说看吧。\r\n#b#L0#订婚戒指要怎么制作？#l\r\n#L1#怎样才能求婚？#l\r\n#L2#要怎么预约婚礼？#l\r\n#L3#要怎么送结婚礼物？#l\r\n#L4#要怎么获得司仪承诺？#l\r\n#L5#婚礼要怎么进行？#l\r\n#L6#要怎么拍结婚照？#l\r\n#L7#婚礼派对要怎么进行？#l\r\n#L8#可以离婚吗？#l#k";

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    } else if (status == 2 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendSimple(mainmenu);
    } else if (status == 1) {
        if (selection == 0) { //订婚戒指要怎么制作
            status = -1;
            cm.sendNext("想要向自己心爱的人求婚，就必须要有订婚戒指。 #b阿尔雷哥#k就是订婚戒指的专家。听说他只对#r10级以上#k的#r年轻人#k出售戒指。如果你有了心爱的人，首先要去找阿尔雷哥谈谈。");
        } else if (selection == 1) { //怎样才能求婚
            status = 2;
            cm.sendNext("双击阿尔雷哥给你的订婚戒指，就能输入求婚对象的名字。必须要记住的是，你一定要和求婚对象待在同一个地方。躲在角落求婚实在太逊了，不是吗。");
        } else if (selection == 2) { //要怎么预约婚礼
            status = 5;
            cm.sendSimple("想要预约婚礼，就要去找#r玛嘉莱修女#k。 #r与订婚对象组成2人组队#k，拿着现金商店出售的结婚券，去找玛嘉莱修女就能预约婚礼。需要我说明结婚券的详细内容吗？你想知道哪种门票的说明呢？\r\n\r\n#b#L0##t5251004##l\r\n#L1##t5251005##l\r\n#L2##t5251006##k#l");
        } else if (selection == 3) { //要怎么送结婚礼物
            status = 7;
            cm.sendNext("预约婚礼时做一个自己想要的结婚礼物列表，这样就能让参加婚礼的宾客按照列表上的物品，给新郎新娘送结婚礼物。");
        } else if (selection == 4) { //要怎么获得司仪承诺
            status = -1;
            cm.sendNext("预约婚礼之后，就要去找勒贝尔托神父获得司仪承诺。勒贝尔托神父只会给准新娘做出司仪承诺，所以必须要由新娘亲自去拜托。");
        } else if (selection == 5) { //婚礼要怎么进行
            status = -1;
            cm.sendNext("新娘拿着勒贝尔托神父的司仪承诺书，到圣堂前找拉兰丝修女，就可以进入结婚礼堂。勒贝尔托神父的司仪词就是婚礼的开始。新郎新娘还能邀请好友参加婚礼，所以记得在婚礼之前给好友们发送请柬。");
        } else if (selection == 6) { //要怎么拍结婚照
            status = -1;
            cm.sendNext("如果你参加的是甜美婚礼或豪华婚礼，就能在司仪词结束之后，去工作室拍结婚照。在#b限定的自由拍照时间#k内，安排好亲朋好友的站位，表情到位，拍照留下最校园的传奇吧。");
        } else if (selection == 7) { //婚礼派对要怎么进行
            status = -1;
            cm.sendNext("如果你参加的是豪华婚礼，就能在拍照时间结束之后，移动到婚礼派对地图。把那里的所有怪物都消灭干净，新郎新娘就能移动到结婚礼物箱子那里去。听说那里有好多装满礼物的箱子，那里面都会有什么礼物呢？我都忍不住想去看看了。");
        } else if (selection == 8) { //可以离婚吗
            status = -1;
            cm.sendNext("如果你有不得不离婚的事情，就去找 #b菲尔拉#k吧。向菲尔拉提交离婚申请，就会在#b4天#k的犹豫期后离婚。但我希望永远都不会发生这种事情。");
        }
    } else if (status == 2) {
        cm.sendNext("双击阿尔雷哥给你的订婚戒指，就能输入求婚对象的名字。必须要记住的是，你一定要和求婚对象待在同一个地方。躲在角落求婚实在太逊了，不是吗。");
    } else if (status == 3) {
        cm.sendNextPrev("对方接受求婚时，就会获得刻有对方名字的订婚戒指。这是双方约定结婚的信物。如果#b丢弃这个戒指，就会立刻解除婚约#k，一定要小心保管。");
    } else if (status == 4) {
        status = 0;
        cm.sendSimple(mainmenu);
    } else if (status == 5) {
        cm.sendSimple("想要预约婚礼，就要去找#r玛嘉莱修女#k。 #r与订婚对象组成2人组队#k，拿着现金商店出售的结婚券，去找玛嘉莱修女就能预约婚礼。需要我说明结婚券的详细内容吗？你想知道哪种门票的说明呢？\r\n\r\n#b#L0##t5251004##l\r\n#L1##t5251005##l\r\n#L2##t5251006##k#l");
    } else if (status == 6) {
        status = 4;
        if (selection == 0) {
            cm.sendNext("简朴婚礼适合那些洒脱、简朴的情侣。新郎、新娘可以#b各自邀请5名宾客#k。只要听完勒贝尔托神父的司仪词，就可以结束婚礼了。 婚礼结束后，可以获得#b1克拉的结婚戒指#k。");
        } else if (selection == 1) {
            cm.sendNext("甜美婚礼适合那些珍惜传奇的可爱情侣。新郎新娘可以 #b各自邀请15名宾客#k。听完勒贝尔托神父的司仪词，在摄影工作室拍完结婚照就可以了。婚礼结束后可以获得#b2克拉的结婚戒指#k。");
        } else if (selection == 2) {
            cm.sendNext("豪华婚礼适合那些喜欢豪华仪式的情侣。新郎新娘可以#b各自邀请30名宾客#k。听完勒贝尔托神父的司仪词，在摄影工作室拍完结婚照后，还能享受简单的婚礼派对。婚礼结束后，可以获得#b3克拉的结婚戒指#k。另外，豪华婚礼结束后，还能获得特殊礼物。");
        }
    } else if (status == 7) {
        status = 0;
        cm.sendSimple(mainmenu);
    } else if (status == 8) {
        cm.sendNextPrev("想要给新郎新娘送结婚礼物，就要去委托婚礼殿堂大厅的#r安琪莉可#k小姐。婚礼结束后，想要接受宾客送的结婚礼物，就要去找婚礼村的安琪莉可小姐。");
        cm.dispose();
    }
}

var facetype = [];
var faceCard = [5152053, 5152093, 5152094, 5152098];
var status = -1;
var beauty = -1;
var types = -1;
var ct = -1;
var isSecond = false;
var isAngel;
function start() {
    isAngel = cm.getBeginner() == 6001;
    if (isAngel) {
        cm.sendChoiceAngle();
        return;
    } else {
        action(1, 0, 0);
    }
}

function action(mode, type, selection) {

    if (mode == 0) {
        cm.sendOk("你还没做好心理准备吗？决定好了之后，请你再来和我说话。");
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            if (isAngel) {
                isSecond = selection != 0;
            }
            cm.sendSimple("你好，我是整形手术领域的艺术家#b#p9201148##k。我可以为你做脸部整形手术。怎么样？ 你想让自己的脸变得完美无瑕吗？\r\n#b#L0#换脸(使用皇家整容优惠劵)#l\r\n#b#L1#换脸(使用经典皇家整容优惠劵)#l\r\n#b#L2#换脸(RED皇家整容优惠劵)#l\r\n#b#L3#换脸(周年庆皇家整容劵)#l");
            break;
        case 1:
            beauty = selection;
            getFaceID(selection);
            var iNow = 0;
            var face = isSecond ? cm.getPlayer().getSecondFace() : cm.getPlayerStat("FACE");
            var faceTypeNow = [];
            for (var i = 0; i < facetype.length; i++) {
                if (facetype[i] != face - face % 1000 + face % 100) {
                    faceTypeNow[iNow++] = facetype[i] + face % 1000 - (face % 100);
                }
            }
            facetype = cm.getCanFace(faceTypeNow);
            cm.sendSimple("那么你想...\r\n#b#L0#自选脸型#l\r\n");
            break;
        case 2:
            if (facetype.length == 0) {
                cm.sendOk("该项正在整理中....");
                cm.dispose();
            } else if (selection == 0) {
                types = 1;
                cm.sendStyle("我可以改变你的脸型,让它比现在看起来漂亮. 你为什么不试着改变它下? ,我将会帮你改变你的脸型,那么选择一个你想要的新脸型吧!", facetype, faceCard[beauty],false);

            }
            break;
        case 3:
            if (types == 0) {
                status = 0;
                action(mode, type, beauty);
            } else {
                if (cm.haveItem(faceCard[beauty])){
                cm.setFace(facetype[selection]);
					cm.gainItem(faceCard[beauty],-1);
                    cm.sendOk("好了,让朋友们赞叹你的新脸型吧!");
                    cm.safeDispose();
					}else{
						cm.sendYesNo("您没有可使用的会员卡。是否想消耗980抵用券/点卷直接购买使用？");
					}
            }
            break;
        case 4:
            status = 2;
            if (cm.getChar().getCSPoints(1) >= 980) {
                ct = 1;
            }
            if (cm.getChar().getCSPoints(2) >= 980) {
                ct = 2;
            }
            if (ct != -1) {
                if (cm.gainNX(ct, -980)) {
                    cm.gainItem(faceCard[beauty], 1);
					cm.sendOk("购买成功！");
                    cm.dispose();
                } else {
                    cm.sendOk("你好像没有足够的点卷/抵用卷!");
                    cm.dispose();
                }

            } else {
                beauty = -1;
            }
            action(mode, type, selection);
            break;
        default:
            cm.dispose();
            break;
    }
}

function getFaceID(selection) {
    switch (selection) {
        case 0://5152053, 5152093, 5152094, 5152098
            if (cm.getPlayerStat("GENDER") == 0) {//皇家
                facetype = [
                    23086, //闪光少年
                    20003, //不屑
                    20004, //别惹我
                    20005, //好少年
                    20006, //性感嘴唇
                    20007, //乖萌
                    20008, //无所谓
                    20009, //讨厌
                    20010, //皱眉
                    20011, //反应慢
                    20012, //精干大眼
                    20013, //不良少年
                    20014, //柔情大眼
                    20015, //怒气
                    20016, //神气大眼
                    20017, //正派
                    20018, //小书生
                    20019, //小公举
                    20020, //藐视
                    20021, //笑眯眯
                    20022, //小淘气
                    20023, //温柔赞许
                    20024, //干瞪眼
                    20025, //天然呆
                    20026, //闭眼
                    20027, //泪痣
                    20028, //嫌弃
                    20029, //坏坏
                    20031, //懒散
                    20030, //傲视
                    20033, //伪娘
                    20032, //迷离
                    20037, //龙神
                    20048, //帅气魔族
                    20049, //冷酷精灵
                    23000, //活力冒险家
                    23001, //勇敢冒险家
                    20050 //近视
                ];
            } else {
                facetype = [
                    21000, //最初冒险(酷)
                    21001, //最初冒险(萌)
                    21002, //最初冒险(帅)
                    21003, //小美
                    21004, //炯炯有神
                    21005, //嘟嘴小眼
                    21006, //嘟嘴大眼
                    21007, //成熟浓妆
                    21008, //无辜
                    21009, //干瞪眼
                    21010, //滴溜溜
                    21011, //水汪汪
                    21012, //睁大眼
                    21013, //下垂眼
                    21014, //弱弱
                    21015, //凶巴巴
                    21016, //神采奕奕
                    21017, //聚精会神
                    21018, //迷离
                    21019, //严肃
                    21020, //对眼
                    21021, //葵瓜子眼
                    21022, //美少妇
                    21023, //空洞
                    21025, //闭眼
                    21026, //忧思
                    21024, //泪痣
                    21027, //石榴姐
                    21029, //小淘气
                    21028, //卡哇伊
                    21030, //嫑笑
                    21031, //乖小囡
                    21035, //龙神
                    21046, //帅气魔族
                    21047, //冷酷精灵
                    21053, //冷艳
                    21054, //美瞳
                    21055, //温和精灵
                    21056, //耍酷幻影
                    21057//温柔幻影
                ];
            }
            break;
        case 1:
            if (cm.getPlayerStat("GENDER") == 0) {//经典皇家
                facetype = [
                    20053, //单眼皮
                    20051, //猫眼
                    20055, //呆萌
                    20056, //美瞳
                    20057, //温和精灵
                    20058, //耍酷幻影
                    20059, //温柔幻影
                    20060, //坚毅
                    20061, //豆豆
                    20062, //犀利利
                    20063, //大方脸
                    20065, //双刀
                    20066, //噘嘴
                    20067, //好好先生
                    20068, //忧愁
                    20069, //米哈尔
                    20070, //漫画高手
                    20074, //坚韧异瞳
                    20075, //冷静异瞳
                    20077, //铃铛眼
                    20076, //狂龙战士
                    20080, //星星眼
                    20081, //雪亮
                    20083, //懵懂少年
                    20084, //孤独
                    20085, //沉着
                    20086, //斯乌
                    20087, //端正
                    20088, //稚气少年
                    20043, //双瞳色
                    20045, //个性
                    20046, //外星人
                    20047, //漫画
                    20035, //水灵灵
                    20036, //战神
                    20041, //人心安卓
                    20042, //无心安卓
                    20040, //明眸
                    20052, //异界美型
                    20071, //瞳焰红
                    20072 //瞳焰紫
                ];
            } else {
                facetype = [
                    21058, //雪亮
                    21059, //小芳脸
                    21061, //双刀
                    21062, //噘嘴
                    21064, //忧愁
                    21065, //小傻瓜
                    21069, //坚韧异瞳
                    21070, //冷静异瞳
                    21071, //狂龙战士
                    21072, //铃铛眼
                    21073, //萌天使
                    21074, //聪明诺巴
                    21075, //可爱诺巴
                    21077, //大圆眼
                    21078, //漫画高手
                    21079, //阿莉亚
                    21080, //忧郁
                    21081, //奥尔卡
                    21082, //天真
                    21083, //典雅
                    21084, //吊眼
                    21085, //维丽尔
                    21041, //双瞳色
                    21043, //个性
                    21044, //外星人
                    21045, //漫画
                    21033, //水灵灵
                    21034, //战神
                    21036, //豆豆
                    21050, //异界美型
                    21038, //明眸
                    21039, //人心安卓
                    21040, //无心安卓
                    21049, //猫眼
                    21048, //近视
                    21052, //坚定
                    21066, //瞳焰红
                    21067, //瞳焰紫
                    21086, //初心者
                    21089//紫色妖姬
                ];
            }
            break;
        case 2:
            if (cm.getPlayerStat("GENDER") == 0) {//RED皇家
                facetype = [
                    20089, //初心者
                    20093, //妖艳眉
                    20094, //雄心勃勃
                    20095, //滴溜溜
                    20054, //坚定
                    20097, //水晶葡萄
                    20090, //顽皮
                    20098, //正太
                    20099, //提斯
                    20096, //眈眈
                    23002, //褐眉大侠
                    23003, //伦多
                    23005, //奥利弗
                    23004, //异能
                    23006, //呆萌少年
                    23008, //模范生
                    20864, //天真弟
                    20882, //凝视
                    20044, //深邃大眼
                    23013, //路人甲
                    23014, //路人乙
                    23010, //月光
                    23011, //聪明玲珑
                    23023, //信心满满
                    23012, //隐月
                    23021, //呆萌傻笑
                    23020, //大眼仔
                    23016, //宝玉
                    23018, //恶魔
                    23024, //睡美男
                    23017, //丹凤眼
                    23015, //大眼睫毛
                    23019, //古惑仔
                    23031, //深邃大圆眼
                    23028, //平静
                    23025 //委屈
                ];
            } else {
                facetype = [
                    21090, //凝神
                    21091, //琉璃眼
                    21093, //水晶葡萄
                    21094, //亲切冒险家
                    21095, //非凡冒险家
                    21092, //温柔女孩
                    24001, //萝莉
                    21096, //奕奕
                    21097, //修嘉
                    21098, //奥利维亚
                    24002, //褐眉女侠
                    24003, //坚毅女侠
                    21099, //未来机器人
                    24004, //呆萌少女
                    21060, //天真妹
                    21063, //俏皮眼
                    21042, //深邃大眼
                    24009, //路人甲
                    24010, //路人乙
                    24007, //月光
                    24008, //朦妹妹
                    24016, //大眼
                    24018, //大佬夫人
                    24011, //假睫毛
                    24012, //黛玉
                    24019, //模范生
                    24014, //恶魔
                    24020, //睡美人
                    24021, //俏夫人
                    24013, //小凤仙
                    24015, //古惑囡
                    24026, //深邃大圆眼
                    24024, //平静
                    24022, //委屈
                    24023, //艳夫人
                    24027, //水晶之心
                    24025, //大姐大
                    24028, //自然萌
                    24031, //睫毛弯弯
                    24032 //紫色诱惑
                ];
            }
            break;
        case 3:
            if (cm.getPlayerStat("GENDER") == 0) {//周年庆皇家
                facetype = [
                    23026, //学生1
                    23027, //学生2
                    23032, //水晶之心
                    23029, //鹰钩鼻大叔
                    23030, //僵尸脸
                    23035, //坚决
                    23033, //自然萌
                    23039, //兵团少年
                    23041, //刚毅
                    23042, //深邃
                    23043, //悲壮
                    23038, //迪伦
                    23034, //娃娃脸
                    23055, //未来机器人
                    23058, //天天变整容
                    23057, //芝麻眼
                    23056, //星光熠熠
                    23044, //派对精灵
                    23053, //不高兴
                    23054, //婴儿脸
                    23059, //逗比
                    23063, //小乖乖
                    23064, //笑盈盈
                    23060, //纯真年代
                    20091, //侍神
                    20092, //隼人
                    20073, //热血剑豪
                    20078, //坚毅剑豪
                    23069, //妖精
                    23071, //乖宝贝
                    23065, //真挚
                    23066, //冷静
                    23076, //黯然神伤
                    23072, //忧郁少年
                    23078, //憔悴病怏怏
                    23077, //中年帅哥
                    23070 //男才脸型
                ];
            } else {
                facetype = [
                    24036, //兵团少女
                    24038, //冷酷
                    24039, //正直 
                    24040, //悲壮
                    24041, //糕点师
                    24035, //水朦朦
                    24029, //娃娃脸
                    24056, //天天变整容
                    24053, //哈允德
                    24055, //芝麻眼
                    24054, //星光熠熠
                    24050, //派对精灵
                    24051, //婴儿脸
                    24057, //逗比
                    24061, //笑盈盈
                    24058, //纯真年代
                    24059, //水晶女孩
                    24060, //小乖乖
                    21087, //热血剑豪
                    21088, //侍神
                    21068, //阴阳道师
                    21076, //阴阳术士
                    24068, //妖精
                    24069, //女貌脸型
                    24070, //乖宝贝
                    24071, //黯然神伤
                    24063, //精干
                    24064, //温柔
                    24072//忧郁少女
                ];
            }
            break;
    }
}
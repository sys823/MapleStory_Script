﻿var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
// 每个阶段礼包所需的充值数
var condition = new Array(30, 50, 100, 300, 500, 1000, 1500, 2000, 3000, 5000, 8000, 10000);
// 礼包内容
var reward = new Array(
					// 礼包1 30元
					Array(1, 2430683, 1),
					//Array(1, 4002001, 5),
					Array(1, 2431296, 1),
					Array(1, 2048717, 1),
					Array(1, 5062009, 10),
					Array(1, 5062500, 10),
					Array(1, 2049124, 2),
					Array(1, 2340000, 2),
					Array(1, 3010984, 1),
					Array(1, 2049122, 1),





					// 礼包1 50元
					Array(2, 2431945, 1),          // 140防具自选
					//Array(2, 4002001, 10),
					Array(2, 5062009, 20),          // 超级神奇魔方
					Array(2, 5062500, 10),        // 大师附加神奇魔方
					Array(2, 2049116, 5),     //强化混沌卷轴
    				        Array(2, 2340000, 5),      // 祝福卷轴
    				        Array(2, 2049124, 3),      // 正向混沌卷轴
    				        Array(2, 2430683, 1),      // 情人节卷轴箱子
    				        Array(2, 2048717, 1),      // 永远的涅槃火焰
    				        Array(2, 4001839, 100),      // 星星
   				        Array(2, 3010018, 1),      // 椰子树沙滩椅

					// 礼包2 100元
					                    Array(3, 1202173, 1),                    //骑马像图腾
					                    Array(3, 1202174, 1),                    //玉壶图腾
					                    Array(3, 1202175, 1),                    //青铜香炉图腾
					Array(3, 2431945, 1),     // 140防具自选
					//Array(3, 4002001, 20),
					Array(3, 2431296, 1),     // 140武器自选
					Array(3, 5062009, 30),          // 超级神奇魔方
					Array(3, 5062002, 50),        // 高级神奇魔方
					                    Array(3, 5062024, 10),     //闪炫魔方
    				        Array(3, 2430683, 2),      // 情人节卷轴箱子
    				        Array(3, 2048717, 2),      // 永远的涅槃火焰
    				        Array(3, 2340000, 5),      // 祝福卷轴
					                    Array(3, 2049116, 5),     //强化混沌卷轴
    				        Array(3, 2049124, 5),      // 正向混沌卷轴
    				        Array(3, 2430683, 2),      // 情人节卷轴箱子
    				        Array(3, 4001839, 200),      // 星星
    				        Array(3, 3010131, 1),      // 贪吃熊猫椅


					// 礼包3 300元
					                    Array(4, 1202173, 1),                    //骑马像图腾
					                    Array(4, 1202174, 1),                    //玉壶图腾
					                    Array(4, 1202175, 1),                    //青铜香炉图腾
					                    Array(4, 1142249, 1),            //我是幸运儿
										//Array(4, 4002001, 30),
					                    Array(4, 1003720, 1),            //进阶半半头盔
					                    Array(4, 2431944, 3),     // 140武器自选
					                    Array(4, 5062009, 40),          // 超级神奇魔方
					                    Array(4, 5062002, 50),        // 高级神奇魔方
					                    Array(4, 5062500, 50),        // 大师附加神奇魔方
					                    Array(4, 5062024, 10),     //闪炫魔方
					                    Array(4, 2049705, 3),       //A级潜能附加卷
    				        Array(4, 2430683, 3),      // 情人节卷轴箱子
    				        Array(4, 2048717, 3),      // 永远的涅槃火焰
    				        Array(4, 5064000, 5),          //防暴卷轴
    				        Array(4, 2340000, 5),      // 祝福卷轴
    				        Array(4, 2049116, 5),      // 强化混沌卷轴
    				        Array(4, 2049124, 5),      // 正向混沌卷轴
    				        Array(4, 4001839, 300),      // 星星
    				        Array(4, 3010751, 1),      // 鲸鱼椅子
    				        Array(4, 3012002, 1),      // 浴桶

					// 礼包4 500元
					                    Array(5, 1202173, 1),                    //骑马像图腾
					                    Array(5, 1202174, 1),                    //玉壶图腾
					                    Array(5, 1202175, 1),                    //青铜香炉图腾
					                    Array(5, 2434007, 1),            //150武器自选
//Array(5, 4002001, 50),
					                    Array(5, 1032216, 1),            //真红耳环
					                    //Array(5, 4030042, 5000),           //征服者币
					                    Array(5, 4001126, 2000),           //枫叶
					                    Array(5, 2049750, 1),           //S潜能卷轴80%
					                    Array(5, 5062009, 50),            //超级神奇魔方
					                    Array(5, 5062002, 50),           //高级神奇魔方
					                    Array(5, 5062024, 10),     //闪炫
    				        Array(5, 2430683, 5),      // 情人节卷轴箱子
    				        Array(5, 2048717, 4),      // 永远的涅槃火焰
    				        Array(5, 5064000, 5),          //防暴卷轴
                                        Array(5, 5062500, 50), //大师附加神奇魔方
                                        Array(5, 5530111, 2), //金色刻印之印
                                        Array(5, 2048301, 2), //金光潜能附加印章
					                    Array(5, 2340000, 10),         //祝福卷轴
					                    Array(5, 2049116, 10),     //强化混沌卷轴
    				        Array(5, 2049124, 10),      // 正向混沌卷轴
    				        Array(5, 2049155, 5),      // 惊人正义50%
					                    Array(5, 2049750, 5),       //s级潜能附加卷
                                        Array(5, 2432228, 1),               //名片戒指箱子
    				        Array(5, 4001839, 500),     // 星星
    				        Array(5, 3010826, 1),     // 地球椅子
    				        Array(5, 3010183, 1),     // 胡萝卜椅子
							Array(5, 4001715, 1),//1亿金币

					// 礼包5 1000元
					                    Array(6, 1202173, 1),                    //骑马像图腾
					                    Array(6, 1202174, 1),                    //玉壶图腾
					                    Array(6, 1202175, 1),                    //青铜香炉图腾
										//Array(6, 1113070, 1),			//真红
										//Array(6, 2430893, 1),			//银河武器副手自选
										//Array(6, 4002001, 100),
										Array(6, 1190302, 1),
										Array(6, 2432069, 1),
					                    Array(6, 2430988, 1),            //150防具自选
					                    Array(6, 2430885, 1),            //银河武器自选
					                    Array(6, 1113070, 1),            //真红之环
					                    Array(6, 2590010, 1),     // 特殊灵魂附魔石
					                    Array(6, 2591391, 1),            //伟大的皮努尔灵魂结晶
					                    Array(6, 5062009, 100),            //超级神奇魔方
					                    Array(6, 5062002, 100),           //高级神奇魔方
					                    Array(6, 5062024, 20),     //闪炫
                                        Array(6, 5062500, 50), //大师附加神奇魔方
                                        Array(6, 2048301, 10), //金光潜能附加印章
                                        Array(6, 5530111, 1), //金色刻印之印
    				        Array(6, 2430683, 10),      // 情人节卷轴箱子
    				        Array(6, 2048717, 5),      // 永远的涅槃火焰
					                    Array(6, 2340000, 30),         //祝福卷轴
					                    Array(6, 2049116, 20),     //强化混沌卷轴
    				        Array(6, 2049124, 20),      // 正向混沌卷轴
    				        Array(6, 2049155, 15),      // 惊人正义50%
					                    Array(6, 2049750, 10),       //s级潜能附加卷
                                        Array(6, 2432228, 1),               //名片戒指箱子
    				        Array(6, 4001839, 1000),      // 星星
   				        Array(6, 3015349, 1),      // 青蛙摇摇机椅子
						Array(6, 4001715, 3),//3亿金币
 


					// 礼包6 1500元
										//
					                    Array(7, 1202173, 1),                    //骑马像图腾
					                    Array(7, 1202174, 1),                    //玉壶图腾
					                    Array(7, 1202175, 1),                    //青铜香炉图腾
										//Array(7, 4002001, 150),
					                    //Array(7, 2433418, 1),                    //暴君防具箱自选
					                    //Array(7, 1113075, 1),                    //最高级贝勒戒指
				                    	Array(7, 1113074, 1),                    //高级贝勒戒指
				                    	Array(7, 1012319, 1),                    //八周年点点红
			                    		Array(7, 1152155, 1),                    //真红护肩
			                    		Array(7, 2049750, 15),           //S潜能卷轴80%
					Array(7, 2432069, 2),
        		                Array(7, 5064000, 10),                //防暴卷轴
                                        Array(7, 5062500, 150), //大师附加神奇魔方
					                    Array(7, 5062024, 60),     //闪炫
                                        Array(7, 5062009, 100),             //超级神奇魔方
                                        Array(7, 5062002, 100),            //高级神奇魔方
                                        Array(7, 2048301, 10), //金光潜能附加印章
                                        Array(7, 5530111, 10), //金色刻印之印
    				        Array(7, 2430683, 20),      // 情人节卷轴箱子
    				        Array(7, 2048717, 15),      // 永远的涅槃火焰
					                    Array(7, 2049323, 20),         //高级装备强化卷轴 
					                    Array(7, 2340000, 50),         //祝福卷轴
					                    Array(7, 2049116, 30),     //强化混沌卷轴
    				        Array(7, 2049124, 30),      // 正向混沌卷轴
    				        Array(7, 2049155, 20),      // 惊人正义50%
					                    Array(7, 2049705, 20),       //A级潜能附加卷
    				        Array(7, 4001839, 2000),      // 星星
                                        Array(7, 3010824, 1), //水星椅子
                                        Array(7, 3010825, 1), //金星椅子
                                        Array(7, 3010827, 1), //火星椅子
										Array(7, 4001715, 5),//5亿金币


					// 礼包7 2000元
					                    Array(8, 1202173, 1),                    //骑马像图腾
					                    Array(8, 1202174, 1),                    //玉壶图腾
					                    Array(8, 1202175, 1),                    //青铜香炉图腾
					                    Array(8, 1142803, 1),                    //安德洛墨达之贵宾
										//Array(8, 4002001, 200),
										Array(8, 1122267, 1),
										Array(8, 2430988, 1),
					                    Array(8, 1662039, 1),                    //奥尔卡机器人
					                    Array(8, 1672027, 1),                    //极真锂心脏
					                    Array(8, 1032219, 1),                    //遗忘之神话耳环
					                    Array(8, 1132246, 1),                    //最高级贝勒腰带
					                    Array(8, 2433418, 1),                    //暴君自选
					Array(8, 2432069, 2),
    				        Array(8, 2430683, 12),      // 情人节卷轴箱子
    				        Array(8, 2048717, 10),      // 永远的涅槃火焰
        		                Array(8, 5064000, 20),                //防暴卷轴
					                    Array(8, 2340000, 50),               //祝福卷轴
                                        Array(8, 5062009, 100),             //超级神奇魔方
                                        Array(8, 5062500, 100), //大师附加神奇魔方
					                    Array(8, 5062024, 100),     //闪炫
					                    Array(8, 2049750, 5),           //S潜能卷轴80%
                                        Array(5, 2048301, 15), //金光潜能附加印章
                                        Array(8, 5530111, 15), //金色刻印之印
					                    Array(8, 2049323, 30),         //高级装备强化卷轴 
					                    Array(8, 2340000, 50),         //祝福卷轴
					                    Array(8, 2049116, 30),     //强化混沌卷轴
    				                    Array(8, 2049124, 30),      // 正向混沌卷轴
    				                    Array(8, 2049155, 20),      // 惊人正义50%
					                    Array(8, 2049705, 15),       //A级潜能附加卷
                                        Array(8, 3010828, 1), //木星椅子
                                        Array(8, 3010829, 1), //土星椅子
                                        Array(8, 3010830, 1), //天王星椅子
                                        Array(8, 3010831, 1), //海王星椅子
                                        Array(8, 3010832, 1), //太阳椅子
										Array(8, 4001715, 5),//5亿金币



    					// 礼包8 3000元 
										Array(9, 2430886, 1),
										//Array(9, 4002001, 300),
										Array(9, 2433418, 1),
				Array(9, 1113075, 1),                    //最高级贝勒戒指
					                    Array(9, 2430988, 2),                    //FFN防具箱
					                    //Array(9, 2430886, 1),                    //160武器自选
                                        Array(9, 5064000, 30),                //防暴卷轴
					                    Array(9, 2340000, 100),               //祝福卷轴
                                        Array(9, 5062009, 150),             //超级神奇魔方
					                    Array(9, 5062002, 200),            //高级神奇魔方
					                    Array(9, 5062500, 200),           //大师附加魔方
					                    Array(9, 5062024, 150),     //闪炫
				Array(9, 2432069, 3),
                                        Array(9, 2049750, 15),     //S级潜能卷轴 80%
					                    Array(9, 2049155, 30),          //惊人正义卷轴
					                    Array(9, 2049323, 50),         //高级装备强化卷轴
    				                    Array(9, 2430683, 15),      // 情人节卷轴箱子
    				                    Array(9, 2048717, 12),      // 永远的涅槃火焰
                                        Array(9, 2048301, 8), //金光潜能附加印章
                                        Array(9, 5530111, 8), //金色刻印之印
					                    Array(9, 2340000, 40),         //祝福卷轴
					                    Array(9, 2049116, 20),     //强化混沌卷轴
    				                    Array(9, 2049124, 20),      // 正向混沌卷轴
    				                    Array(9, 2049155, 15),      // 惊人正义50%
					                    Array(9, 2049705, 8),       //A级潜能附加卷 
					                    Array(9, 3010876, 1),        //冒险岛航星椅子
					                    Array(9, 3015193, 1),        //被驯服的鲸鱼椅子
					                    Array(9, 3015328, 1),        //冒险岛电动缆车椅子
										Array(9, 4001715, 6),//6亿金币

        				// 礼包9 5000元
					                    Array(9, 1202173, 1),                    //骑马像图腾
					                    Array(9, 1202174, 1),                    //玉壶图腾
					                    Array(9, 1202175, 1),                    //青铜香炉图腾
										Array(10, 1132215, 1),
										//Array(10, 4002001, 500),
										Array(10, 1152124, 1),
										Array(10, 1032201, 1),
										Array(10, 1113056, 1),
										Array(10, 2433418, 1),
										//Array(10, 1132246, 1)
 										//最高级贝勒德
Array(10, 2432069, 4),
					                    //Array(10, 1122267, 1),                    //最高级贝勒德
					                    //Array(10, 1032223, 1),                    //最高级贝勒德
					                    //Array(10, 1113075, 1),                    //最高级贝勒德
                                        Array(10, 3010822, 1), //贪吃鳄鱼椅子
                                        Array(10, 3015343, 1), //冰雪企鹅王椅子
    				                    Array(10, 2430683, 20),      // 情人节卷轴箱子
    				                    Array(10, 2048717, 15),      // 永远的涅槃火焰
                                        Array(10, 5064000, 50),                //防暴卷轴
					                    Array(10, 2340000, 100),               //祝福卷轴
                                        Array(10, 5062009, 200),             //超级神奇魔方
                                        Array(10, 5062002, 300),            //高级神奇魔方
                                        Array(10, 5062500, 300),           //大师附加魔方
					                    Array(10, 5062024, 150),     //闪炫
                                        Array(10, 2049762, 5),     //S级潜能卷轴 80%
                                        Array(10, 2049155, 50),          //惊人正义卷轴
                                        Array(10, 2049323, 50),         //高级装备强化卷轴 
                                        Array(10, 3016000, 1),        //水族馆椅子
                                        Array(10, 3016101, 1),        //怪物水晶球秋千椅
                                        Array(10, 3015182, 1),        //蝶恋花椅子
										Array(10, 4001715, 8),//1亿金币
      			
  //礼包10 
					                    Array(11, 1202173, 1),                    //骑马像图腾
					                    Array(11, 1202174, 1),                    //玉壶图腾
					                    Array(11, 1202175, 1),                    //青铜香炉图腾
										Array(11, 1082102, 1), 
										Array(11, 1102039, 1),
										//Array(11, 4002001, 800),
										Array(11, 1012414, 1),
				Array(11, 2432069, 5),
										Array(11, 1022195, 1), 
										Array(11, 1122259, 1), 
										Array(11, 1162018, 1), 
										Array(11, 2433418, 1), 
					                   // Array(11, 2433418, 1),                    //暴君防具箱子自选
    				                    Array(11, 2430683, 30),      // 情人节卷轴箱子
    				                    Array(11, 2048717, 20),      // 永远的涅槃火焰
                                        Array(11, 5064000, 50),                //防暴卷轴
					                    Array(11, 2340000, 100),               //祝福卷轴
                                        Array(11, 5062009, 200),             //超级神奇魔方
                                        Array(11, 5062002, 300),            //高级神奇魔方
                                        Array(11, 5062500, 300),           //大师附加魔方
					                    Array(11, 5062024, 150),     //闪炫
                                        Array(11, 2049762, 5),     //S级潜能卷轴 80%
                                        Array(11, 2049155, 50),          //惊人正义卷轴
                                        Array(11, 2049323, 50),         //高级装备强化卷轴 
                                        Array(11, 3010070, 1), //巨无霸品客斌
                                        Array(11, 3010416, 1), //巨无霸白雪人
                                        Array(11, 3010417, 1), //巨无霸企鹅王
                                        Array(11, 3010788, 1), //巨无霸年夜饭                                       
                                        Array(11, 3015051, 1), //巨无霸国际巨星
										Array(11, 4001715, 10),//10亿金币



        				// 礼包11 10000元
				      Array(12, 2433418, 1),                    //暴君防具箱子自选
					Array(12, 2432069, 8),
										Array(12, 2430886, 1),
										Array(12, 1012057, 1),
										Array(12, 1022048, 1),
										//Array(12, 4002001, 1000),
					                    Array(12, 1142742, 1),                    //冒险岛奖杯
                                        Array(12, 2430887, 6),                    //160自选一套
					                    Array(12, 1202173, 10),                    //骑马像图腾
					                    Array(12, 1202174, 10),                    //玉壶图腾
					                    Array(12, 1202175, 10),                    //青铜香炉图腾
    				                    Array(12, 2430683, 50),      // 情人节卷轴箱子
    				                    Array(12, 2048717, 30),      // 永远的涅槃火焰
                                        Array(12, 5064000, 50),                //防暴卷轴
					                    Array(12, 2340000, 100),               //祝福卷轴
                                        Array(12, 5062009, 200),             //超级神奇魔方
                                        Array(12, 5062002, 300),            //高级神奇魔方
                                        Array(12, 5062500, 300),           //大师附加魔方
					                    Array(12, 5062024, 200),     //闪炫
                                        Array(12, 2049762, 30),     //S级潜能卷轴 80%
                                        Array(12, 2049155, 50),          //惊人正义卷轴
                                        Array(12, 2049323, 200),         //高级装备强化卷轴 
										Array(12, 4001715, 15),//15亿金币
                                        Array(12, 3012019, 2), //爱琴海椅子
                                        Array(12, 3012024, 2), //沙滩排球椅子
                                        Array(12, 3012025, 2), //小鸡弹簧床椅子
                                        Array(12, 3012026, 2), //旋转花茶杯情侣椅子                                      
                                        Array(12, 3015304, 1)//哗啦啦大水车  
                                        );


var sel;
var status = -1;
var text;
var ljname;
var curlevel = -1;;
function start() {
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
        var revenue = cm.getHyPay(3);
        text = "\t\t\t" + tt + " #e#r蘑菇冒险岛▲充值礼包中心#k#n " + tt + "\r\n\r\n";
        text += "#d#e当前总充值金额数量： #r" + cm.getHyPay(3) + " #d元#k\r\n#e";
        for (var i = 1; i <= condition.length; i++) {
            if (cm.getEventCount("累计充值礼包" + i, 1) == 1) {
                text += "#d#L" + i + "#" + tt + " [#r已完成#d]累计充值福利 #r\t\t\t" + condition[i - 1] + "#l\r\n";
                curlevel = curlevel == -1 ? i : curlevel;
            } else {
                text += "#d#L" + i + "#" + tt + " [未完成]累计充值福利 #r\t\t\t" + condition[i - 1] + "#l\r\n";
            }
        }
        text += "#k";
        cm.sendSimple(text);
    } else if (status == 1) {
        sel = selection;
        text = "\t\t\t#e#r- 累计充值" + condition[selection - 1] + "元福利 -#k#n\r\n\r\n";
        for (var i = 0; i < reward.length; i++) {
            if (reward[i][0] == selection) {
                text += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
            }
        }
        cm.sendYesNo(text);
    } else if (status == 2) {
        if (cm.getEventCount("累计充值礼包" + sel, 1) == 1) {
            cm.sendOk("#e#r\r\n\r\n\t\t这个礼包您已经领取过了");
            status = -1;
            //cm.dispose();
            return;
        }
        if (cm.getHyPay(3) < condition[sel - 1]) {
            cm.playerMessage(1, "累计金额未达标！");
            cm.dispose();
            return;
        }

        var rewardlist = new Array();
        for (var i = 0; i < reward.length; i++) {
            if (reward[i][0] == sel) {
                if (reward[i][3] == null)
                    reward[i][3] = -1;
                rewardlist.push(new Array(reward[i][1], reward[i][2], reward[i][3]));
            }
        }
        if (!cm.canHoldSlots(rewardlist.length)) {
            cm.sendOk("包裹空间不足，请确保包裹每个栏位有至少 " + rewardlist.length + " 格空间");
            cm.dispose();
            return;
        }
        for (var i = 0; i < rewardlist.length; i++) {
            if (rewardlist[i][0] == 2430865) {
                cm.gainItem(rewardlist[i][0], rewardlist[i][1], rewardlist[i][2]);
            } else {
                cm.gainItem(rewardlist[i][0], rewardlist[i][1]);
            }
        }
        cm.setEventCount("累计充值礼包" + sel, 1);
        cm.playerMessage(1, "领取成功");
        cm.worldSpouseMessage(0x20, "≡累计充值≡　　恭喜玩家 " + cm.getChar().getName() + " 领取了累计充值 " + condition[sel - 1] + " 元的福利礼包！！！");
        cm.dispose();
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
/*
抽奖副本
*/
var status = 0;
var psrw = Array(
Array(1212011, 1), 
Array(1212012, 1), 
Array(1222011, 1), 
Array(1222012, 1), 
Array(1232011, 1), 
Array(1232012, 1), 
Array(1242011, 1), 
Array(1242012, 1), 
Array(1302081, 1), 
Array(1302086, 1),
Array(1312037, 1),
Array(1312038, 1),
Array(1322060, 1),
Array(1322061, 1),
Array(1332075, 1),
Array(1332076, 1),
Array(1342011, 1),
Array(1342012, 1),
Array(1362016, 1),
Array(1362017, 1),
Array(1372044, 1),
Array(1372045, 1),
Array(1382057, 1),
Array(1382059, 1),
Array(1402046, 1),
Array(1402047, 1),
Array(1412033, 1),
Array(1412034, 1),
Array(1422037, 1), //
Array(1422038, 1), 
Array(1432047, 1),
Array(1432049, 1),
Array(1442063, 1),
Array(1442067, 1),
Array(1452057, 1),
Array(1452059, 1),
Array(1462050, 1),
Array(1462051, 1),
Array(1472068, 1),
Array(1472071, 1),
Array(1482023, 1),
Array(1482024, 1),
Array(1492023, 1),
Array(1492025, 1),
Array(1522015, 1),
Array(1522016, 1),
Array(1532015, 1),
Array(1532016, 1),
Array(1942002, 1),
Array(1952002, 1),
Array(1002776, 1),
Array(1002777, 1),
Array(1002778, 1),
Array(1002779, 1),
Array(1002780, 1),
Array(1002790, 1),
Array(1002791, 1),
Array(1002792, 1),
Array(1002793, 1),
Array(1002794, 1),
Array(1082234, 1),
Array(1082235, 1),
Array(1082236, 1),
Array(1082237, 1),
Array(1082238, 1),
Array(1082239, 1),
Array(1082240, 1),
Array(1082241, 1),
Array(1082242, 1),
Array(1082243, 1),
Array(1052155, 1),
Array(1052156, 1),
Array(1052157, 1),
Array(1052158, 1),
Array(1052159, 1),
Array(1052160, 1),
Array(1052161, 1),
Array(1052162, 1),
Array(1052163, 1),
Array(1052164, 1),
Array(1072355, 1),
Array(1072356, 1),
Array(1072357, 1),
Array(1072358, 1),
Array(1072359, 1),
Array(1072361, 1),
Array(1072362, 1),
Array(1072363, 1),
Array(1072364, 1),
Array(1072365, 1),
Array(1232014, 1),
Array(1302152, 1),
Array(1312065, 1),
Array(1322096, 1),
Array(1402095, 1),
Array(1412065, 1),
Array(1422066, 1),
Array(1432086, 1),
Array(1442116, 1),
Array(1052314, 1),
Array(1152108, 1),
Array(1003172, 1),
Array(1102275, 1),
Array(1082295, 1),
Array(1072485, 1),
Array(1152113, 1),
Array(1003176, 1),
Array(1102279, 1),
Array(1082299, 1),
Array(1052318, 1),
Array(1072489, 1),
Array(1222014, 1),
Array(1242014, 1),
Array(1482084, 1),
Array(1492085, 1),
Array(1532018, 1),
Array(1152112, 1),
Array(1003175, 1),
Array(1102278, 1),
Array(1082298, 1),
Array(1052317, 1),
Array(1072488, 1),
Array(1242042, 1),
Array(1332130, 1),
Array(1362019, 1),
Array(1052316, 1),
Array(1452111, 1),
Array(1462099, 1),
Array(1082297, 1),
Array(1003174, 1),
Array(1102277, 1),
Array(1072487, 1),
Array(1152111, 1),
Array(1152110, 1),
Array(1102276, 1),
Array(1003173, 1),
Array(1082296, 1),
Array(1052315, 1),
Array(1072486, 1),
Array(1372084, 1),
Array(1212014, 1),
Array(1382104, 1),
Array(1102612, 1),
Array(1122262, 1),
Array(1132242, 1),
Array(1082540, 1),
Array(1052647, 1),
Array(1462204, 1),
Array(1412147, 1),
Array(1532109, 1),
Array(1362101, 1),
Array(1472226, 1),
Array(1302289, 1),
Array(1242080, 1),
Array(1432178, 1),
Array(1492190, 1),
Array(1372188, 1),
Array(1212079, 1),
Array(1462093, 1),
Array(1222074, 1),
Array(1492080, 1),
Array(1442234, 1),
Array(1522105, 1),
Array(1232074, 1),
Array(1382222, 1),
Array(1332238, 1),
Array(1312165, 1),
Array(1322215, 1),
Array(1482179, 1),
Array(1402210, 1),
Array(1382101, 1),
Array(1452216, 1),
Array(1252046, 1),
Array(1422152, 1),
Array(1003946, 1),
Array(1072853, 1),
Array(1102365, 1),
Array(1102366, 1),
Array(1102364, 1),
Array(1102363, 1),
Array(1102362, 1),
Array(1112712, 1),
Array(1112784, 1),
Array(1112783, 1),
Array(1112782, 1),
Array(1152116, 1),
Array(1152115, 1),
Array(1152114, 1),
Array(1152079, 1),
Array(1132141, 1),
Array(1132187, 1),
Array(1132189, 1),
Array(1132188, 1),
Array(1082418, 1),
Array(1082419, 1),
Array(1082416, 1),
Array(1082417, 1),
Array(1082420, 1),
Array(1052433, 1),
Array(1052430, 1),
Array(1052431, 1),
Array(1052432, 1),
Array(1052429, 1),
Array(1302207, 1),
Array(1442170, 1),
Array(1532068, 1),
Array(1532095, 1),
Array(1452162, 1),
Array(1242034, 1),
Array(1362033, 1),
Array(1242052, 1),
Array(1362008, 1),
Array(1432131, 1),
Array(1362053, 1),
Array(1362056, 1),
Array(1492135, 1),
Array(1322150, 1),
Array(1522064, 1),
Array(1372130, 1),
Array(1212034, 1),
Array(1222034, 1),
Array(1462152, 1),
Array(1382158, 1),
Array(1232034, 1),
Array(1422102, 1),
Array(1402142, 1),
Array(1482135, 1),
Array(1482165, 1),
Array(1342064, 1),
Array(1472174, 1),
Array(1252019, 1),
Array(1312110, 1),
Array(1412099, 1),
Array(1332184, 1),
Array(1003443, 1),
Array(1003445, 1),
Array(1003444, 1),
Array(1003447, 1),
Array(1003446, 1),
Array(1072641, 1),
Array(1072643, 1),
Array(1072642, 1),
Array(1072645, 1),
Array(1072644, 1),
Array(1052134, 1),
Array(1052075, 1),
Array(1052072, 1),
Array(1082167, 1),
Array(1002339, 1),
Array(1052071, 1),
Array(1102283, 1),
Array(1102448, 1),
Array(1082303, 1),
Array(1082469, 1),
Array(1052322, 1),
Array(1052501, 1),
Array(1362068, 1),
Array(1472180, 1),
Array(1472123, 1),
Array(1332194, 1),
Array(1332131, 1),
Array(1003592, 1),
Array(1003180, 1),
Array(1072493, 1),
Array(1072706, 1),
Array(1102284, 1),
Array(1102449, 1),
Array(1082470, 1),
Array(1082304, 1),
Array(1052323, 1),
Array(1052502, 1),
Array(1532075, 1),
Array(1532017, 1),
Array(1242013, 1),
Array(1242046, 1),
Array(1492153, 1),
Array(1492086, 1),
Array(1222013, 1),
Array(1222043, 1),
Array(1482085, 1),
Array(1482141, 1),
Array(1003593, 1),
Array(1003181, 1),
Array(1072494, 1),
Array(1072707, 1),
Array(1102282, 1),
Array(1102447, 1),
Array(1082302, 1),
Array(1082468, 1),
Array(1052321, 1),
Array(1052500, 1),
Array(1452112, 1),
Array(1452171, 1),
Array(1522072, 1),
Array(1462100, 1),
Array(1462160, 1),
Array(1003591, 1),
Array(1003179, 1),
Array(1072492, 1),
Array(1072705, 1),
Array(1102281, 1),
Array(1102446, 1),
Array(1082301, 1),
Array(1082467, 1),
Array(1052499, 1),
Array(1052320, 1),
Array(1372140, 1),
Array(1212013, 1),
Array(1212043, 1),
Array(1372085, 1),
Array(1382169, 1),
Array(1382105, 1),
Array(1252013, 1),
Array(1252030, 1),
Array(1003590, 1),
Array(1003178, 1),
Array(1072491, 1),
Array(1072704, 1),
Array(1102280, 1),
Array(1102445, 1),
Array(1082300, 1),
Array(1082466, 1),
Array(1052498, 1),
Array(1052319, 1),
Array(1302228, 1),
Array(1442183, 1),
Array(1302153, 1),
Array(1442117, 1),
Array(1432087, 1),
Array(1432139, 1),
Array(1322163, 1),
Array(1322097, 1),
Array(1232013, 1),
Array(1232040, 1),
Array(1422067, 1),
Array(1422108, 1),
Array(1402152, 1),
Array(1312066, 1),
Array(1312117, 1),
Array(1412066, 1),
Array(1402096, 1),
Array(1412105, 1),
Array(1003589, 1),
Array(1003177, 1),
Array(1072490, 1),
Array(1072703, 1),
Array(1082163, 1),
Array(1002547, 1),
Array(1072269, 1),
Array(1082164, 1),
Array(1072268, 1),
Array(1082168, 1),
Array(1052076, 1),
Array(1092060, 1),
Array(1072273, 1),
Array(1412126, 1),
Array(1532089, 1),
Array(1472205, 1),
Array(1452196, 1),
Array(1362081, 1),
Array(1242069, 1),
Array(1242070, 1),
Array(1432158, 1),
Array(1492170, 1),
Array(1322100, 1),
Array(1522085, 1),
Array(1372168, 1),
Array(1212072, 1),
Array(1222067, 1),
Array(1462184, 1),
Array(1442209, 1),
Array(1382199, 1),
Array(1232064, 1),
Array(1422129, 1),
Array(1332214, 1),
Array(1402185, 1),
Array(1482159, 1),
Array(1342079, 1),
Array(1252062, 1),
Array(1312142, 1),
Array(1302070, 1)
);
var rand = Math.floor(Math.random() * psrw.length);

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
        cm.sendYesNo("你如果拥有100个#r#z4310091##k,可以在我这里抽奖,我包包里面有各职业100-160级装备，这个就要完全靠您的运气了。是否想要试试手气，看您能获得什么?");
    } else if (status == 1) {
          if (cm.haveItem(4310091, 100) == false) {
		cm.sendOk("你没有100个#v4310091##z4310091#");
		cm.dispose();
         } else if (cm.getSpace(1) < 1 && cm.getSpace(2) < 1 && cm.getSpace(3) < 1 && cm.getSpace(4) < 1 && cm.getSpace(5) < 1) {
		cm.sendOk("你保证你背包的每一栏都有空位");
		cm.dispose();
            } else {
	   var ii = cm.getItemInfo();
	   cm.gainItem(psrw[rand][0],+psrw[rand][1]); //随机这个道具
	   cm.gainItem(4310091,-100); //减少1个使用的这个道具
	   cm.sendOk("获取了 #v"+psrw[rand][0]+"# "+psrw[rand][1]+"个")
	   cm.channelMessage(0x18, "『家园守卫』" + " : " + "[" + cm.getChar().getName() + "]获得了" + psrw[rand][1] + "个<" + ii.getName(psrw[rand][0]) + ">,快去挑战吧");
	   cm.dispose(); 
	}
		}
		}

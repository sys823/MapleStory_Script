var status = 0; 
var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var item = new Array("1212011","1212012","1222011","1222012","1232011","1232012","1242011","1242012","1302081","1302086","1312037","1312038","1322060","1322061","1332075","1332076","1342011","1342012","1362016","1362017","1372044","1372045","1382057","1382059","1402046","1402047","1412033","1412034","1422037","1422038","1432047","1432049","1442063","1442067","1452057","1452059","1462050","1462051","1472068","1472071","1482023","1482024","1492023","1492025","1522015","1522016","1532015","1532016","1942002","1952002","1002776","1002777","1002778","1002779","1002780","1002790","1002791","1002792","1002793","1002794","1082234","1082235","1082236","1082237","1082238","1082239","1082240","1082241","1082242","1082243","1052155","1052156","1052157","1052158","1052159","1052160","1052161","1052162","1052163","1052164","1072355","1072356","1072357","1072358","1072359","1072361","1072362","1072363","1072364","1072365","1232014","1302152","1312065","1322096","1402095","1412065","1422066","1432086","1442116","1052314","1152108","1003172","1102275","1082295","1072485","1152113","1003176","1102279","1082299","1052318","1072489","1222014","1242014","1482084","1492085","1532018","1152112","1003175","1102278","1082298","1052317","1072488","1242042","1332130","1362019","1052316","1452111","1462099","1082297","1003174","1102277","1072487","1152111","1152110","1102276","1003173","1082296","1052315","1072486","1372084","1212014","1382104","1102612","1122262","1132242","1082540","1052647","1462204","1412147","1532109","1362101","1472226","1302289","1242080","1432178","1492190","1372188","1212079","1462093","1222074","1492080","1442234","1522105","1232074","1382222","1332238","1312165","1322215","1482179","1402210","1382101","1452216","1252046","1422152","1003946","1072853","1102365","1102366","1102364","1102363","1102362","1112712","1112784","1112783","1112782","1152116","1152115","1152114","1152079","1132141","1132187","1132189","1132188","1082418","1082419","1082416","1082417","1082420","1052433","1052430","1052431","1052432","1052429","1302207","1442170","1532068","1532095","1452162","1242034","1362033","1242052","1362008","1432131","1362053","1362056","1492135","1322150","1522064","1372130","1212034","1222034","1462152","1382158","1232034","1422102","1402142","1482135","1482165","1342064","1472174","1252019","1312110","1412099","1332184","1003443","1003445","1003444","1003447","1003446","1072641","1072643","1072642","1072645","1072644","1052134","1052075","1052072","1082167","1002339","1052071","1102283","1102448","1082303","1082469","1052322","1052501","1362068","1472180","1472123","1332194","1332131","1003592","1003180","1072493","1072706","1102284","1102449","1082470","1082304","1052323","1052502","1532075","1532017","1242013","1242046","1492153","1492086","1222013","1222043","1482085","1482141","1003593","1003181","1072494","1072707","1102282","1102447","1082302","1082468","1052321","1052500","1452112","1452171","1522072","1462100","1462160","1003591","1003179","1072492","1072705","1102281","1102446","1082301","1082467","1052499","1052320","1372140","1212013","1212043","1372085","1382169","1382105","1252013","1252030","1003590","1003178","1072491","1072704","1102280","1102445","1082300","1082466","1052498","1052319","1302228","1442183","1302153","1442117","1432087","1432139","1322163","1322097","1232013","1232040","1422067","1422108","1402152","1312066","1312117","1412066","1402096","1412105","1003589","1003177","1072490","1072703","1082163","1002547","1072269","1082164","1072268","1082168","1052076","1092060","1072273","1412126","1532089","1472205","1452196","1362081","1242069","1242070","1432158","1492170","1322100","1522085","1372168","1212072","1222067","1462184","1442209","1382199","1232064","1422129","1332214","1402185","1482159","1342079","1252062","1312142","1302070");
var chance = Math.floor(Math.random()*item.length);
var ii;
var jizhen = new Array("");
var yizi = new Array(3010000,3010002,3010002,3010004,3010005,3010006,3010007,3010008,3010009,3010010,3010012,3010013,3010014,3010016,3010017,3010018,3010019,3010020,3010021,3010024,3010024,3010025,3010026,3010028,3010029,3010030,3010031,3010032,3010033,3010034,3010035,3010036,3010037,3010038,3010039,3010040,3010041,3010043,3010044,3010045,3010046,3010047,3010048,3010049,3010050,3010053,3010054,3010055,3010057,3010058,3010059,3010060,3010061,3010062,3010063,3010064,3010065,3010066,3010067,3010068,3010069,3010071,3010073,3010075,3010077,3010079,3010080,3010081,3010082,3010083,3010084,3010085,3010092,3010093,3010094,3010095,3010096,3010097,3010098,3010099,3010100,3010105,3010106,3010107,3010108,3010109,3010110,3010111,3010112,3010113,3010114,3010115,3010116,3010117,3010119,3010120,3010123,3010124,3010125,3010126,3010127,3010128,3010129,3010130,3010133,3010134,3010135,3010136,3010137,3010138,3010139,3010140,3010141,3010142,3010144,3010147,3010149,3010151,3010152,3010154,3010155,3010156,3010157,3010161,3010162,3010163,3010166,3010167,3010169,3010170,3010171,3010172,3010173,3010174,3010177,3010179,3010180,3010181,3010182,3010183,3010184,3010185,3010186,3010187,3010188,3010191,3010194,3010195,3010196,3010197,3010199,3010200,3010201,3010202,3010203,3010205,3010206,3010207,3010208,3010209,3010210,3010211,3010212,3010215,3010216,3010217,3010218,3010219,3010220,3010221,3010222,3010223,3010224,3010226,3010279,3010280,3010281,3010282,3010283,3010286,3010287,3010288,3010289,3010290,3010291,3010292,3010293,3010296,3010297,3010298,3010299,3010300,3010301,3010302,3010303,3010304,3010305,3010306,3010308,3010311,3010313,3010314,3010315,3010316,3010317,3010318,3010319,3010320,3010321,3010322,3010354,3010355,3010356,3010357,3010360,3010361,3010362,3010364,3010365,3010368,3010369,3010370,3010373,3010374,3010401,3010400,3010402,3010403,3010404,3010405,3010406,3010421,3010423,3010505,3010516,3010517,3010518,3010521,3010526,3010454,3010460,3012003,3012006,3012011,3013000,3010583,3012016,3010456,3010591,3010594,3010411,3010632,3010633,3010631,3010193,3010603,3010604,3010605,3010688);
      
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
        var selStr = "#b亲，在这里您可以抵用卷跟我换取一些东西，请选择您需要：#k\r\n\r\n";
		selStr += "#d您当前的抵用卷为：#r" + cm.getPlayer().getCSPoints(2) + " #d点\r\n(市场30秒10点抵用卷,1线市场每10分钟额外送的).#k\r\n\r\n";
		selStr += "#r#L1#"+ aaa +" 10000抵用卷换取#t5050000#x100#l\r\n";
		selStr += "#r#L0#"+ aaa +" 500抵用卷换取#t5062000#x1( "+cm.getBossLog("抵用卷神奇")+" / 30次)#l\r\n";
		selStr += "#L2#"+ aaa +" 3000抵用卷随即抽取120-140装备#l\r\n";
		selStr += "#L4#"+ aaa +" 1200抵用卷换取#t5062002#x1( "+cm.getBossLog("抵用卷魔方")+" / 30次)#l\r\n";
		//selStr += "#L6#"+ aaa +" 1000抵用卷换取#t2290884#x1( "+cm.getBossLog("双弩神秘手册")+" / 10次)#l\r\n";
		selStr += "#L5#"+ aaa +" 1000抵用卷换取#t2340000#( "+cm.getBossLog("抵用卷祝福")+" / 30次)#l\r\n";
		selStr += "#L7#"+ aaa +" 1亿金币换取20000抵用卷#l\r\n";
		//selStr += "#L3#"+ aaa +" 100000绑定奇幻冒险岛币抽取极真系列#l\r\n";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getPlayer().getCSPoints(2) >= 1000 && cm.getBossLog("抵用卷神奇") <= 29){
                cm.gainNX(2, -500);
		cm.gainItem(5062000, 1);
		cm.setBossLog("抵用卷神奇");
                cm.sendOk("兑换成功。抵用卷减少500.");
		cm.worldSpouseMessage(0x20, "『抵用卷兑换』" + " : " + "恭喜" + cm.getChar().getName() + ",在市场<普通服务员>处用500抵用卷兑换神气魔方1个。");
		cm.dispose();
            } else {
                cm.sendOk("#r兑换失败:\r\n\r\n#b1). 你没有足够的抵用卷(请在市场挂机,或打怪获得)!\r\n2). 兑换次数达到上限，每天只可兑换30次。");
				cm.dispose();
            }
            break;
        case 1:
            if (cm.getPlayer().getCSPoints(2) >= 10000) {
                cm.gainNX(2, -10000);
		cm.gainItem(5050000, 100);
                cm.sendOk("兑换成功。抵用卷减少10000.");
		cm.worldSpouseMessage(0x20, "『抵用卷兑换』" + " : " + "恭喜" + cm.getChar().getName() + ",在市场<普通服务员>处用10000抵用卷兑换洗能力值卷轴100个");
		cm.dispose();
            } else {
                cm.sendOk("#r兑换失败:\r\n\r\n#b1). 你没有足够的抵用卷(请在市场挂机,或打怪获得)!");
				cm.dispose();
            }
            break;
        case 2:
            if (cm.getPlayer().getCSPoints(2) >= 3000){
                cm.gainNX(2, -3000);
		cm.gainItem(item[chance],1);
                cm.sendOk("兑换成功。抵用卷减少2000,获取#z"+item[chance]+"一个.");
		cm.worldSpouseMessage(0x20, "『抵用卷兑换』" + " : " + "恭喜" + cm.getChar().getName() + ",在市场<普通服务员>处用3000抵用卷抽取" + ii.getName(item[chance]) + "一个。");
		cm.dispose();
            } else {
                cm.sendOk("#r兑换失败:\r\n\r\n#b1). 你没有足够的抵用卷(请在市场挂机,或打怪获得)!");
				cm.dispose();
            }
            break;
        case 3:
            if (cm.getPlayerPoints() >= 100000 && cm.getPlayer().getCSPoints(1) >= 300000){
                cm.gainPlayerPoints(-100000);
		cm.gainNX(-300000);
		cm.gainItem(jizhen[chance],1);
                cm.sendOk("兑换成功。绑定奇幻冒险岛币减少1500,获取#z"+jizhen[chance]+"一个.");
		cm.worldSpouseMessage(0x20, "『绑定奇幻冒险岛币兑换』" + " : " + "恭喜" + cm.getChar().getName() + ",在市场<普通服务员>处用1500绑定奇幻冒险岛币抽取" + ii.getName(jizhen[chance]) + "一个。");
		cm.dispose();
            } else {
                cm.sendOk("#r兑换失败:\r\n\r\n#b1). 你没有足够的绑定奇幻冒险岛币(请在市场挂机获得)!\r\n2). 您的点卷不足30万。请通过免费渠道获得。");
				cm.dispose();
            }
            break;
        case 4:
            if (cm.getPlayer().getCSPoints(2) >= 1200 && cm.getBossLog("抵用卷魔方") <= 29){
                cm.gainNX(2, -1200);
		cm.gainItem(5062002,1);
		cm.setBossLog("抵用卷魔方");
                cm.sendOk("兑换成功。抵用卷减少1000.");
		cm.worldSpouseMessage(0x20, "『抵用卷兑换』" + " : " + "恭喜" + cm.getChar().getName() + ",在市场<普通服务员>处用1200抵用卷兑换高级神气魔方1个。");
		cm.dispose();
            } else {
                cm.sendOk("#r兑换失败:\r\n\r\n#b1). 你没有足够的抵用卷(请在市场挂机,或打怪获得)!\r\n2). 兑换次数达到上限，每天只可兑换30次。");
				cm.dispose();
            }
            break;
        case 5:
            if (cm.getPlayer().getCSPoints(2) >= 1000 && cm.getBossLog("抵用卷祝福") <= 29){
                cm.gainNX(2, -1000);
		cm.gainItem(2340000,1, 1);
		cm.setBossLog("抵用卷祝福");
                cm.sendOk("兑换成功。抵用卷减少3000.");
		cm.worldSpouseMessage(0x20, "『抵用卷兑换』" + " : " + "恭喜" + cm.getChar().getName() + ",在市场<普通服务员>处用1000抵用卷兑换祝福卷轴1个。");
		cm.dispose();
            } else {
                cm.sendOk("#r兑换失败:\r\n\r\n#b1). 你没有足够的抵用卷(请在市场挂机,或打怪获得)!\r\n2). 兑换次数达到上限，每天只可兑换30次。");
				cm.dispose();
            }
            break;
		case 6:
            if (cm.getPlayer().getCSPoints(2) >= 1000 && cm.getBossLog("双弩神秘手册") <= 9){
                cm.gainNX(2, -1000);
		cm.gainItem(2290884,1, 1);
		cm.setBossLog("双弩神秘手册");
                cm.sendOk("兑换成功。抵用卷减少1000.");
		cm.worldSpouseMessage(0x20, "『抵用卷兑换』" + " : " + "恭喜" + cm.getChar().getName() + ",在市场<普通服务员>处用1000抵用卷兑换双弩神秘手册个。");
		cm.dispose();
            } else {
                cm.sendOk("#r兑换失败:\r\n\r\n#b1). 你没有足够的抵用卷(请在市场挂机,或打怪获得)!\r\n2). 兑换次数达到上限，每天只可兑换10次。");
				cm.dispose();
            }
            break;
        case 7:
            if (cm.getMeso() >= 100000000){
                cm.gainNX(2, 20000);
		cm.gainMeso(-100000000);
                cm.sendOk("兑换成功，金币减少1亿");
		cm.worldSpouseMessage(0x20, "『抵用卷兑换』" + " : " + "恭喜" + cm.getChar().getName() + ",在市场<普通服务员>处用用一亿金币兑换20000抵用卷。");
		cm.dispose();
            } else {
                cm.sendOk("#r兑换失败:\r\n\r\n#b1). 金币不足。");
				cm.dispose();
            }
            break;  
        }
    }
}
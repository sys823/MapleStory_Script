﻿/* 点卷商店 */

var status = 0;
var z = "#fEffect/ItemEff/1112811/0/0#";//"+z+"//美化
var aaa = "#fEffect/CharacterEff/1003393/2/0#"; //蓝五角星
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        //cm.openNpc(2490002,700);
        return;
    } 
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#r" + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + "\r\n\r\n#e#d　　　　　　　  　珍品豪华点卷商铺\r\n" + "　#L0#" + aaa + "#r帽子" + aaa + "#l" + " #L1#" + aaa + "衣服" + aaa + "#l" + " #L2#" + aaa + "裤裙" + aaa + "#l" + " #L3#" + aaa + "武器" + aaa + "#l\r\n" + "　#L4#" + aaa + "#r手套" + aaa + "#l" + " #L5#" + aaa + "戒指" + aaa + "#l" + " #L6#" + aaa + "效果" + aaa + "#l" + " #L7#" + aaa + "披风" + aaa + "#l\r\n" + "　#L8#" + aaa + "#r鞋子" + aaa + "#l" + " #L9#" + aaa + "消耗" + aaa + "#l" + " #L10#" + aaa + "皮肤" + aaa + "#l" + " #L11#" + aaa + "椅子" + aaa + "#l\r\n" + "　#L12#" + aaa + "宠物" + aaa + "#l" + " #L13#" + aaa + "情侣" + aaa + "#l" + " #L14#" + aaa + "时装" + aaa + "#l" + " #L15#" + aaa + "闪耀" + aaa + "#l\r\n" + "　#L16#" + aaa + "新装" + aaa + "#l" + " #L17#" + aaa + "双倍" + aaa + "#l" + " #L18#" + aaa + "变身" + aaa + "#l\r\n\r\n\r\n#d#e#l" + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + ""; 
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9310376,"9310376_4");
                //cm.openNpc(2490002, 701); //帽子
                break;
            case 1:
                cm.dispose();
                cm.openNpc(9310376,"9310376_5");
                //cm.openNpc(2490002, 704); //衣服
                break;
            case 2:
                cm.dispose();
                cm.openNpc(9310376,"9310376_6");
                //cm.openNpc(2490002, 703); //裤裙
                break;
            case 3:
                cm.dispose();
                cm.openNpc(9310376,"9310376_1");
               // cm.openNpc(2490002, 702); //武器
                break;
            case 4:
				cm.dispose();
                cm.openNpc(9310376,"9310376_7"); //手套
              //  cm.sendOk("#r#e功能待添加!!请谅解", 1033210);
                break;
            case 5:
                cm.dispose();
                cm.openNpc(9310376,"9310376_9");
                //cm.openNpc(2490002, 705); //戒指
                break;
            case 6:
				cm.dispose();
                cm.openNpc(9310376,"9310376_8");//效果
              //  cm.sendOk("#r#e功能待添加!!请谅解", 1033210);
                break;
            case 7:
				cm.dispose();
                cm.openNpc(9310376,"dianjuanpifeng");//披风
               // cm.sendOk("#r#e功能待添加!!请谅解", 1033210);
                break;
            case 8: 
                cm.dispose();
				cm.openNpc(9310376,"9310376_3");//鞋子
                break;
            case 9:
                cm.dispose();//卷轴
				cm.openNpc(9900002, "daojujuanzhou");
                break;
            case 10:
                cm.dispose();
                cm.openNpc(9900002,"shpf"); //皮肤
                break;
            case 11:
                cm.dispose();
                cm.openNpc(1032205,"111");//椅子
                break;
			case 12:
                cm.dispose();
                cm.openNpc(9310470,"xycw");//宠物
                break;
			case 13:
                cm.dispose();
                cm.openNpc(9310376,"9310376_10");//情侣
                break;
			case 14:
                cm.dispose();
                cm.openNpc(9310376,"9310376_11");//时装
                break;
			case 15:
                cm.dispose();
                cm.openNpc(9900002,"sydz");//闪耀
                break;
			case 16:
                cm.dispose();
                cm.openNpc(9310376,"9310376_12");//新装
                break;
		    case 17:
                cm.dispose();
                cm.openNpc(9001000,"shuangbei");//双倍
			    break;
			case 18:
                cm.dispose();
                cm.openNpc(9310470,"bsys");//变身药水
			    break;
        }
    } 
}
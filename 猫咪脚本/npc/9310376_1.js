/* �������̵� ���� */

var status = -1;
var itemList = Array(
Array(1702567, 100000),
Array(1702566, 50000),
Array(1702489, 50000),
Array(1702486, 50000),
Array(1702488, 50000),
Array(1702557, 50000),
Array(1702534, 50000),
Array(1702533, 50000),
Array(1702505, 50000),
Array(1702503, 50000),
Array(1702528, 50000),
Array(1702501, 50000),
Array(1702305, 50000),
Array(1702478, 50000),
Array(1702530, 50000),
Array(1702382, 50000),
Array(1702466, 40000),
Array(1702334, 40000),
Array(1702480, 40000),
Array(1702485, 45000),
Array(1702509, 40000),
Array(1702013, 50000),
Array(1702374, 40000),
Array(1702512, 40000),
Array(1702459, 40000),
Array(1702508, 40000),
Array(1702233, 40000),
Array(4000897, 40000),
Array(1702228, 10000), //�ɿ��㽶
Array(1702155, 30000), //Ѥ���ʺ�
Array(1702182, 20000), //����������
Array(1702208, 10000), //�������
Array(1702285, 20000), //��ɫ�����������
Array(1702302, 10000), //����
Array(1702261, 30000), //ӣ����
Array(1702091, 20000), //������
Array(1702168, 20000), //����ʥ����
Array(1702367, 14000),
Array(1702341, 14000),
Array(1322102, 14000),
Array(1702366, 14000),
Array(1702352, 14000),
Array(1302037, 14000),
Array(1302061, 14000),
Array(1302063, 14000),
Array(1302080, 14000),
Array(1302084, 14000),
Array(1302085, 14000),
Array(1302087, 14000),
Array(1302169, 14000),
Array(1322051, 14000),
Array(1332032, 14000),
Array(1332053, 14000),
Array(1372017, 14000),
Array(1372031, 14000),
Array(1402037, 14000),
Array(1402049, 14000),
Array(1402063, 14000),
Array(1422011, 14000),
Array(1432039, 14000),
Array(1432046, 14000),
Array(1442026, 14000),
Array(1442065, 14000),
Array(1442088, 14000),
Array(1472063, 14000),
Array(1702342, 14000),
Array(1702337, 14000),
Array(1702335, 14000),
Array(1702330, 14000),
Array(1702346, 14000),
Array(1702341, 14000),
Array(1702340, 14000),
Array(1702324, 14000),
Array(1322102, 14000),
Array(1412056, 14000),
Array(1402110, 14000),
Array(1702310, 14000),
Array(1702329, 14000),
Array(1702316, 14000),
Array(1702309, 14000),
Array(1702408, 15000),
Array(1702415, 15000),
Array(1702403, 15000),
Array(1702402, 15000),
Array(1702375, 15000),
Array(1702348, 15000),
Array(1702442, 15000),
Array(1702422, 15000),
Array(1702446, 15000),
Array(1702422, 15000)
);
var selectedItem = -1;
var selectedCost = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k���ã���ѡ����ϣ������ĵ��ߣ�";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1]  + "#k���#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.sendYesNo("���Ƿ���#i" + selectedItem + ":# #b#t" + selectedItem + "##k ��Ҫ #r" + selectedCost + "#k �����");
        } else {
            cm.sendOk("���ִ���...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selectedItem <= 0) {
            cm.sendOk("������߳��ִ���...");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "����̵�", 3, true);
            if (gachaponItem != -1) {
                cm.gainNX( - selectedCost );
                cm.sendOk("��ϲ���ɹ�����#i" + selectedItem + ":# #b#t" + selectedItem + "##k��");
            } else {
                cm.sendOk("����ʧ�ܣ�����ȷ���ڱ���������Ŀ�������Ƿ���һ�����ϵĿռ䡣");
            }
        } else {
            cm.sendOk("��û����ô������\r\n\r\n����#i" + selectedItem + ":# #b#t" + selectedItem + "##k ��Ҫ #r" + selectedCost + "#k �����");
        }
        cm.dispose();
    }
}
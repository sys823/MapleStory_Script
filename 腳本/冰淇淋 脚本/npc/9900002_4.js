/* ����̳� - ���� */

var status = -1;
var itemList = Array(
// -----�۸�Ϊ 2000 ��� --------
Array(3010002, 10000), //��ɫʱ��ת��
Array(3010003, 10000), //��ɫʱ��ת��
Array(3010006, 10000), //��ɫʱ��ת��
Array(3010004, 10000), //����������
Array(3010005, 10000), //����������
Array(3010018, 10000), //Ҭ����ɳ̲��
Array(3010029, 10000), //������
Array(3010030, 10000), //�ڻ���
Array(3010031, 10000), //�컷��
Array(3010032, 10000), //�ƻ���
Array(3010033, 10000), //�̻���
Array(3010043, 10000), //ħŮ�ķ�ɨ��
Array(3013002, 10000), //�̻���
Array(3010166, 10000), //˫��ͬ��
// -----�۸�Ϊ 4000 ��� --------
Array(3010007, 20000), //��ɫ��������
Array(3010008, 20000), //��ɫ��������
Array(3010010, 20000), //��ɫ��������
Array(3010016, 20000), //��ɫ��������
Array(3010017, 20000), //��ɫ��������
Array(3010024, 20000), //��߷�����
Array(3010025, 20000), //��Ҷ�����
// -----�۸�Ϊ 8000 ��� --------
Array(3010014, 40000), //������
Array(3010019, 40000), //��˾��
Array(3010021, 40000), //ůů��
Array(3010034, 40000), //�Ƴ�����(��)
Array(3010035, 40000), //�Ƴ�����(��)
Array(3010037, 40000), //������
Array(3010038, 40000), //����ɳ��
Array(3010040, 40000), //������
Array(3010041, 40000), //��������
Array(3010044, 40000), //ͬһ��ɡ��
Array(3010045, 40000), //��������
Array(3010049, 40000), //ѩ����
Array(3010068, 40000), //¶ˮ����
Array(3010050, 40000), //������
Array(3010069, 40000), //��Ʒ�
Array(3010093, 40000), //�����Ļ�
Array(3010094, 40000), //ƯƯ������
Array(3010095, 40000), //ʯͷ������
// -----�۸�Ϊ 10000 ��� --------
Array(3010009, 80000), //������
Array(3010028, 80000), //�����ķ�²
Array(3010036, 80000), //������ǧ
Array(3010046, 80000), //������
Array(3010047, 80000), //������
Array(3010048, 80000), //ʥ��������
Array(3010051, 80000), //ɳĮ���ӿ���1
Array(3010052, 80000), //ɳĮ���ӿ���2
Array(3010054, 80000), //������ല
Array(3010057, 80000), //Ѫɫõ��
Array(3010058, 80000), //����ĩ��
Array(3010071, 80000), //������
Array(3010073, 80000), //babyƷ����
Array(3010075, 80000), //��Ϊ���ֿ�
Array(3010077, 80000), //èͷӥ����
Array(3010096, 80000), //������ʯ����
Array(3010098, 80000), //����լ��
Array(3010099, 80000), //����������
Array(3010100, 80000), //��������
Array(3010110, 80000), //���ʴ��������
Array(3010111, 80000), //��������
Array(3010112, 80000), //�������
Array(3010116, 80000), //ҡ��֮������
Array(3010117, 80000), //ħ��������
Array(3010118, 80000), //�ǹ���������
Array(3010119, 80000), //��������
Array(3010120, 80000), //�ʵ�����
Array(3010123, 80000), //���ջ���
Array(3010124, 80000), //����˹��������
Array(3010125, 80000), //�ᱴ¡ս����
Array(3010126, 80000), //����ħ����
Array(3012001, 80000), //����
Array(3012002, 80000), //ԡͰ
Array(3010066, 80000), //����ɫ��ëɳ��
Array(3010067, 80000), //��ɫ���ʦ��
Array(3010080, 80000), //�������F�a 
Array(3010081, 80000), //��ñ�������
Array(3010082, 80000), //��ñ�������
Array(3010083, 80000), //�����������
Array(3010084, 80000), //̫ƽ���������
Array(3010107, 80000), //�����ĵ�����
Array(3010108, 80000), //������ǧ
Array(3010109, 80000), //ů¯��
Array(3010113, 80000), //�Ļ귢��������
Array(3010055, 80000), //��ѩ��������
Array(3010145, 80000), //������ˮ����Ҷ��
Array(3010136, 80000), //6�����������
Array(3010137, 80000), //��������
Array(3010149, 80000), //è�������
Array(3010144, 80000), //��Ϧ����
Array(3010155, 80000), //��Ӱ˫����èͷӥ
Array(3010078, 80000), //����è����
Array(3010132, 80000), //����è����
Array(3010133, 80000), //������
// -----�۸�Ϊ 20000 ��� --------
Array(3012003, 100000), //��������
Array(3012006, 100000), //�紵����
Array(3012010, 100000), //�ɿ�����������
Array(3012011, 100000), //�Ұ��ɿ������
Array(3010156, 100000), //���η�����
Array(3010152, 100000), //������������
Array(3010162, 100000), //��������
Array(3010163, 100000), //������
Array(3010135, 100000), //���ն���������
Array(3010139, 100000), //˽�ܿռ�
Array(3010168, 100000), //������������
Array(3010172, 100000), //�ǿ�����
Array(3010173, 100000), //��ʥ����������
Array(3010175, 100000), //����������
Array(3010179, 100000), //��β��è����
Array(3010169, 100000), //ֽ����(������)
Array(3010171, 100000), //����������
Array(3010174, 100000), //Ů����ҩ��
Array(3010182, 100000), //���Ӽ�����
Array(3010183, 100000), //���ܲ�����
Array(3010053, 100000), //���Ӽ��������
Array(3010142, 100000), //ˮ�������
Array(3010209, 100000), //��ݮ������±���
Array(3010210, 100000), //��ݱ�����±���
Array(3010197, 100000), //Ӣ�۵�����-ս��
Array(3010200, 100000), //Ӣ�۵�����-����
Array(3010201, 100000), //Ӣ�۵�����-��Ӱ
Array(3010161, 100000), //������
Array(3010226, 100000), //�¹���������
Array(3010085, 100000), //����������
Array(3013000, 100000), //ӣ������
Array(3010177, 100000), //�ֱ�����
Array(3010454, 100000), //�ƶ�
Array(3010591, 250000), //����������
Array(3010127, 100000), //��������
Array(3010128, 100000), //��������
Array(3010311, 100000), //��������
Array(3010799, 100000), //��Ĺ��������
Array(3010896, 100000), //�ҵ�Ů������
Array(3010689, 100000), //10��������
Array(3010751, 100000), //��������
Array(3010752, 100000), //õ������
Array(3010754, 100000), //�ٹ�ҹ��
Array(3012020, 100000), //���ٻ�������
Array(3010779, 100000), //�������ƽ�
Array(3010788, 100000), //���ް���ҹ��
Array(3010783, 100000), //��ɫ������
Array(3010876, 100000), //ð�յ���������
Array(3010696, 100000), //���Ѽ
Array(3010715, 200000), //�Ҹ�9���군��������
Array(3010070, 250000), //���ް�Ʒ����
Array(3010828, 250000), //ľ������
Array(3010829, 250000), //ľ������
Array(3010820, 250000), //������߱�������
Array(3010511, 250000), //è�乫԰����
Array(3010516, 250000), //��������ӡ�ڰ�С��
Array(3012016, 250000), //�����ǹ�����
Array(3010459, 250000), //��ʹ��̨��
Array(3010196, 250000), //����ԡ����
Array(3010423, 250000), //Ģ����������
Array(3010461, 250000), //����ר���¹�����ǧ��
Array(3010528, 250000), //�ܲ�������
Array(3010448, 250000), //����ԡ����
Array(3010660, 250000), //�λù����Ǳ�����
Array(3010714, 250000), //������
Array(3010835, 250000), //����ˮ���������
Array(3010779, 250000), //�������ƽ�
Array(3010702, 250000), //���ٺ�����
Array(3012019, 250000), //���ٺ�����
Array(3010842, 250000), //èè���η���
Array(3010718, 250000), //�����ƶ��ɳ��
Array(3010658, 250000), //�������ϱ�����
Array(3010744, 250000), //ð�յ���שͷ������
Array(3010594, 250000), //��ݮ������
Array(3012020, 250000), //���ٻ�������
Array(3010843, 250000), //���ý��η���
Array(3010115, 250000), //�ܱ�����
Array(3010704, 250000), //�ͽ�֮��������
Array(3010140, 250000), //���տ�����
Array(3010605, 250000), //��������3
Array(3014004, 250000), //�����۽�����
Array(3010657, 250000), //���ų�����
Array(3010519, 250000), //�޴��ѩ������
Array(3010705, 250000), //�����ˮ������
Array(3010401, 250000), //��Ӱ������
Array(3010697, 250000), //����֮��
Array(3010193, 250000), //��ܽ��˼������ƿ
Array(3010757, 250000), //�����
Array(3010603, 250000), //��������1
Array(3010604, 250000), //��������2
Array(3010662, 250000), //���������
Array(3013000, 250000), //ӣ������
Array(3014003, 250000), //����ģ������
Array(3010362, 250000), //�ʺ�����
Array(3010936, 250000), //������¥��
Array(3010760, 250000), //�Ŵ�ԡ������
Array(3014000, 250000), //������������
Array(3010851, 250000), //������������
Array(3010723, 250000), //��ʽ���������
Array(3014005, 250000), //����������
Array(3010879, 250000), //���ð�յ�����
Array(3010877, 250000), //����ɺ����
Array(3012024, 250000), //ɳ̲��������
Array(3010832, 250000) //̫������
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
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1] / 5 + " #k���#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1] / 5;
            cm.sendYesNo("���Ƿ���#i" + selectedItem + ":# #b#t" + selectedItem + "##k ��Ҫ #r" + selectedCost + " #k �����");
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
                cm.gainNX( - selectedCost);
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
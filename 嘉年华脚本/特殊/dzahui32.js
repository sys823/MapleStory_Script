﻿var status = 0;
var choice;
var scrolls = Array(
Array("", 1070000, 0),
Array("", 1070001, 0),
Array("", 1070002, 0),
Array("", 1070003, 0),
Array("", 1070004, 0),
Array("", 1070005, 0),
Array("", 1070006, 0),
Array("", 1070007, 0),
Array("", 1070008, 0),
Array("", 1070009, 0),
Array("", 1070011, 0),
Array("", 1070016, 0),
Array("", 1070018, 0),
Array("", 1070019, 0),
Array("", 1070020, 0),
Array("", 1070024, 0),
Array("", 1070025, 0),
Array("", 1070026, 0),
Array("", 1070027, 0),
Array("", 1071000, 0),
Array("", 1071001, 0),
Array("", 1071002, 0),
Array("", 1071003, 0),
Array("", 1071004, 0),
Array("", 1071005, 0),
Array("", 1071006, 0),
Array("", 1071007, 0),
Array("", 1071008, 0),
Array("", 1071009, 0),
Array("", 1071010, 0),
Array("", 1071011, 0),
Array("", 1071012, 0),
Array("", 1071013, 0),
Array("", 1071014, 0),
Array("", 1071015, 0),
Array("", 1071016, 0),
Array("", 1071017, 0),
Array("", 1071018, 0),
Array("", 1071019, 0),
Array("", 1071020, 0),
Array("", 1071021, 0),
Array("", 1071026, 0),
Array("", 1071028, 0),
Array("", 1071030, 0),
Array("", 1071031, 0),
Array("", 1071032, 0),
Array("", 1071036, 0),
Array("", 1071037, 0),
Array("", 1071038, 0),
Array("", 1071040, 0),
Array("", 1071042, 0),
Array("", 1071043, 0),
Array("", 1072010, 0),
Array("", 1072013, 0),
Array("", 1072014, 0),
Array("", 1072057, 0),
Array("", 1072058, 0),
Array("", 1072088, 0),
Array("", 1072092, 0),
Array("", 1072093, 0),
Array("", 1072094, 0),
Array("", 1072095, 0),
Array("", 1072096, 0),
Array("", 1072097, 0),
Array("", 1072098, 0),
Array("", 1072099, 0),
Array("", 1072100, 0),
Array("", 1072111, 0),
Array("", 1072153, 0),
Array("", 1072175, 0),
Array("", 1072176, 0),
Array("", 1072180, 0),
Array("", 1072181, 0),
Array("", 1072186, 0),
Array("", 1072187, 0),
Array("", 1072188, 0),
Array("", 1072189, 0),
Array("", 1072190, 0),
Array("", 1072191, 0),
Array("", 1072199, 0),
Array("", 1072200, 0),
Array("", 1072201, 0),
Array("", 1072202, 0),
Array("", 1072217, 0),
Array("", 1072218, 0),
Array("", 1072219, 0),
Array("", 1072230, 0),
Array("", 1072231, 0),
Array("", 1072232, 0),
Array("", 1072233, 0),
Array("", 1072234, 0),
Array("", 1072235, 0),
Array("", 1072236, 0),
Array("", 1072237, 0),
Array("", 1072240, 0),
Array("", 1072241, 0),
Array("", 1072242, 0),
Array("", 1072243, 0),
Array("", 1072244, 0),
Array("", 1072245, 0),
Array("", 1072246, 0),
Array("", 1072247, 0),
Array("", 1072250, 0),
Array("", 1072251, 0),
Array("", 1072252, 0),
Array("", 1072253, 0),
Array("", 1072256, 0),
Array("", 1072257, 0),
Array("", 1072258, 0),
Array("", 1072259, 0),
Array("", 1072260, 0),
Array("", 1072265, 0),
Array("", 1072266, 0),
Array("", 1072267, 0),
Array("", 1072274, 0),
Array("", 1072276, 0),
Array("", 1072278, 0),
Array("", 1072279, 0),
Array("", 1072280, 0),
Array("", 1072281, 0),
Array("", 1072282, 0),
Array("", 1072283, 0),
Array("", 1072284, 0),
Array("", 1072322, 0),
Array("", 1072323, 0),
Array("", 1072324, 0),
Array("", 1072325, 0),
Array("", 1072326, 0),
Array("", 1072327, 0),
Array("", 1072328, 0),
Array("", 1072329, 0),
Array("", 1072330, 0),
Array("", 1072331, 0),
Array("", 1072332, 0),
Array("", 1072333, 0),
Array("", 1072334, 0),
Array("", 1072335, 0),
Array("", 1072336, 0),
Array("", 1072337, 0),
Array("", 1072341, 0),
Array("", 1072347, 0),
Array("", 1072349, 0),
Array("", 1072350, 0),
Array("", 1072351, 0),
Array("", 1072352, 0),
Array("", 1072353, 0),
Array("", 1072354, 0),
Array("", 1072367, 0),
Array("", 1072370, 0),
Array("", 1072371, 0),
Array("", 1072373, 0),
Array("", 1072374, 0),
Array("", 1072377, 0),
Array("", 1072378, 0),
Array("", 1072379, 0),
Array("", 1072381, 0),
Array("", 1072382, 0),
Array("", 1072384, 0),
Array("", 1072385, 0),
Array("", 1072386, 0),
Array("", 1072387, 0),
Array("", 1072388, 0),
Array("", 1072392, 0),
Array("", 1072394, 0),
Array("", 1072395, 0),
Array("", 1072404, 0),
Array("", 1072406, 0),
Array("", 1072407, 0),
Array("", 1072408, 0),
Array("", 1072417, 0),
Array("", 1072425, 0),
Array("", 1072426, 0),
Array("", 1072433, 0),
Array("", 1072437, 0),
Array("", 1072438, 0),
Array("", 1072439, 0),
Array("", 1072440, 0),
Array("", 1072441, 0),
Array("", 1072443, 0),
Array("", 1072444, 0),
Array("", 1072448, 0),
Array("", 1072454, 0),
Array("", 1072457, 0),
Array("", 1072461, 0),
Array("", 1072462, 0),
Array("", 1072464, 0),
Array("", 1072466, 0),
Array("", 1072467, 0),
Array("", 1072468, 0),
Array("", 1072469, 0),
Array("", 1072470, 0),
Array("", 1072478, 0),
Array("", 1072482, 0),
Array("", 1072483, 0),
Array("", 1072484, 0),
Array("", 1072507, 0),
Array("", 1072508, 0),
Array("", 1072509, 0),
Array("", 1072514, 0),
Array("", 1072515, 0),
Array("", 1072516, 0),
Array("", 1072517, 0),
Array("", 1072531, 0),
Array("", 1072536, 0),
Array("", 1072537, 0),
Array("", 1072559, 0),
Array("", 1072609, 0),
Array("", 1072613, 0),
Array("", 1072622, 0),
Array("", 1072627, 0),
Array("", 1072628, 0),
Array("", 1072633, 0),
Array("", 1072637, 0),
Array("", 1072646, 0),
Array("", 1072647, 0),
Array("", 1072648, 0),
Array("", 1072649, 0),
Array("", 1072652, 0),
Array("", 1072658, 0),
Array("", 1072659, 0),
Array("", 1072662, 0),
Array("", 1072663, 0),
Array("", 1072680, 0),
Array("", 1072681, 0),
Array("", 1072708, 0),
Array("", 1072748, 0),
Array("", 1072749, 0),
Array("", 1072770, 0),
Array("", 1072771, 0)
);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("好吧，欢迎下次继续光临！.");
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;

        if (status == 0) {
            choices = "\r\n兔兔币余额：#r" + cm.getHyPay(1) + "#k个 (#r买后不支持退货哟亲#k)";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i][1] + "##z" + scrolls[i][1] + "#　#d需要#r" + scrolls[i][2] + "#d兔兔币#k#l";
            }
            cm.sendSimpleS("欢迎来到時尚鞋子店,你想买我们商店的物品么?请选择吧：." + choices,2);
        } else if (status == 1) {
            cm.sendYesNo("你确定需要购买#v" + scrolls[selection][1] + "##t" + scrolls[selection][1] + "#?");
		choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][2];
            if (cm.getHyPay(1) < money) {
                cm.sendOk("抱歉，你没足够的兔兔币！");
                cm.dispose();
            } else {
                cm.addHyPay(money);
                cm.gainItem(scrolls[choice][1], 1);
                cm.sendOk("购买成功.");
                cm.dispose();
            }
        }
    }
}
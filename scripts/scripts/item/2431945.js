var itemList = Array(
	Array(4310036, 2500),
	Array(4000021, 120),
	Array(4001241, 8),
	Array(4001242, 8),
	Array(4033356, 3),
	Array(4000630, 3),
	Array(4004000, 80),
	Array(4004001, 80),
	Array(4004002, 80),
	Array(4004003, 80)
);
function start() {
    if (im.getSpace(4) >= 10) {
        im.gainItem(2431945, -1);
		for(var key in itemList) {
			im.gainItem(itemList[key][0],itemList[key][1]);
		}
        im.playerMessage(-1, "��ϲ�����140��������������");
        im.worldSpouseMessage(0x20, "[��ֵ����] ����ϲ " + im.getPlayer().getName() + " �� <140��������> �л��ȫ���������ϣ�������Ľ��");
	im.dispose();
    } else {
        im.sendOk("�뽫������Ԥ��10����λ���ϣ��ҽ�����������140������ȫ���������ϡ�");
	im.dispose();
    }
}
function start() {
	if (im.haveItem(1122224) && im.haveItem(1122226)) {
		im.sendSimple("��������#i1122224##t1122224#��#i1122226##t1122226#�����������һ����#b\r\n#L0##i1122224##t1122224##l\r\n#L1##i1122226##t1122226##l");
	} else {
		if(im.haveItem(1122224)) {
			action(1, 0, 0);
		} else if(im.haveItem(1122226)) {
			action(1, 0, 1);
		} else {
			im.sendOk("��ȷ���㱳������#t1122224#����#t1122226#��");
			im.dispose();
		}
	}
}

function action(mode, type, selection) {
	var i = -1;
	var chance = -1;
	var gain = -1;
	if (selection == 0) {
		i = 1122224;
		chance = 350;
		gain = 1122226;
	} else if (selection == 1) {
		i = 1122226;
		chance = 250;
		gain = 1122231;
	}
	if (i == -1) {
		im.sendOk("����δ֪����")
		im.dispose();
		return;
	}
	var random = new java.util.Random();
	if(random.nextInt(1000) <= chance) {
		if(im.canHold(i)) {
			im.used(1);
			im.gainItem(i, -1);
			im.gainLockItem(gain, 1, false, 0, "ð�յ���ʿ֮��(սʿ)");
		} else {
			im.sendOk("��ȷ���㱳�����㹻�Ŀռ䡣");
		}
	} else {
		im.used(1);
		im.sendOk("����ʧ�ܡ�");
	}
	im.dispose();
}
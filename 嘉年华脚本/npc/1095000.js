var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendYesNo("Would you like to head back?");
    } else if (status == 1) {
	cm.warp(120000104);
	cm.dispose();
    }
}

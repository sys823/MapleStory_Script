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
        cm.sendOk("史上最帅的人是#r#eGM. #b#e\r\n#L0#帅 #b#e\r\n#L1#111 #b#e\r\n#L2#222");
    }else if (status == 1){
		if(selection==0)
        if(cm.haveItem(4000016,2)){
			cm.sendOk("你真的聪明啊");
		    cm.gainItem(4000015,-1);
		}else{
		    cm.dispose();
			//	cm.openNpc(9000030, "MAXskill");
		}
    

    cm.dispose();
}
}
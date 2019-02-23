var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }
    if (status == 0) {//\r\n#b#L5#��ҪתְΪ��ħ(һת)#l
        cm.sendSimple("��ȷ��Ҫתְ��(��ħ/˫��/��.../�Զ�תְҵ.)\r\n������ѡ��...\r\n#b#L2#��ҪתְΪҹ�ⷨʦ������ְҵ��#l\r\n#b#L5#��ҪתְΪ��ħ����(һת)#l\r\n#b#L7#��ҪתְΪ�ֵ���Ӱ#l\r\n#b#L6#��ҪתְΪ��֮��ʿ#l\r\n#b#L0#��ҪתְΪ������#l\r\n#b#L1#��ҪתְΪ˫��#l\r\n#b#L4#��ҪתְΪ˫��(һת)#l\r\n#b#L8#��ҪתְΪ����(һת)#l\r\n#b#L3#��������ְҵתְ(սʿ/��ʦ/��...)#l");
    } else if (status == 1) {
        switch (selection) {
            case 0:
                if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                    cm.getPlayer().changeJob(501);
                    cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ������.\r\n�Ժ��תְ��Ϊ�Զ�תְ.");
                } else {
                    cm.sendOk("�㲻������ְҵ ����ĵȼ�û�дﵽ10.");
                }
                cm.dispose();
                break;
            case 1:
                if (cm.getJob() == 400 && cm.getPlayer().getLevel() >= 20) {
                    cm.getPlayer().changeJob(430);
                } else if (cm.getJob() == 433 && cm.getPlayer().getLevel() >= 120) {
                    cm.getPlayer().changeJob(434);
                    cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��Ӱ˫��.\r\n���Ѿ��ɹ�תְΪ������.\r\n�Ժ��תְ��Ϊ�Զ�תְ.");
                } else {
                    cm.sendOk("�㲻�Ƿ���(һת)ְҵ ����ĵȼ�û�дﵽ20.(˫��һת��ת����)");
                }
                cm.dispose();
                break;
            case 2:
                if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                    cm.getPlayer().changeJob(2700);
                    cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪҹ�ⷨʦ.");
                } else if (cm.getJob() == 2700 && cm.getPlayer().getLevel() >= 30) {
                    cm.getPlayer().changeJob(2710);
                    cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪҹ�ⷨʦ2ת");
                } else if (cm.getJob() == 2710 && cm.getPlayer().getLevel() >= 70) {
                    cm.getPlayer().changeJob(2711);
                    cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪҹ�ⷨʦ3ת");
                } else if (cm.getJob() == 2711 && cm.getPlayer().getLevel() >= 120) {
                    cm.getPlayer().changeJob(2712);
                    cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪҹ�ⷨʦ4ת");
                } else {
                    cm.sendOk("�㲻��ҹ�ⷨʦְҵ ����ĵȼ�û�дﵽҪ��.");
                }
                cm.dispose();
                break;
            case 3:
                cm.dispose();
                cm.openNpc(9900002, 22);
                break;
            case 4:
                if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                    cm.getPlayer().changeJob(2300);
                    cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ˫�󹭼���.\r\n�Ժ��תְ��Ϊ�Զ�תְ.");
                } else {
                    cm.sendOk("�㲻������ְҵ ����ĵȼ�û�дﵽ10.");
                }
                cm.dispose();
                break;
            case 5:
                if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                    cm.getPlayer().changeJob(3100);
                    cm.gainItem(1322122,1);
                    cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��ħ����.\r\n�Ժ��תְ��Ϊ�Զ�תְ.");
                } else {
                    cm.sendOk("�㲻������ְҵ ����ĵȼ�û�дﵽ10.");
                }
                cm.dispose();
                break;
            case 6:
                if (cm.getJob() == 5000 && cm.getPlayer().getLevel() >= 10) {
                    cm.getPlayer().changeJob(5100);
                    cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��֮��ʿ.");
                } else if (cm.getJob() == 5100 && cm.getPlayer().getLevel() >= 30) {
                    cm.getPlayer().changeJob(5110);
                    cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��֮��ʿ2ת");
                } else if (cm.getJob() == 5110 && cm.getPlayer().getLevel() >= 70) {
                    cm.getPlayer().changeJob(5111);
                    cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��֮��ʿ3ת");
                } else if (cm.getJob() == 5111 && cm.getPlayer().getLevel() >= 120) {
                    cm.getPlayer().changeJob(5112);
                    cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��֮��ʿ4ת");
                } else {
                    cm.sendOk("�㲻�ǹ�֮��ʿְҵ ����ĵȼ�û�дﵽҪ��.");
                }
                cm.dispose();
                break;
            case 7:
                if (cm.getJob() == 0 &&  cm.getPlayer().getLevel() >= 10) {
                    cm.getPlayer().changeJob(2400);
                    cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��Ӱ�ֵ�.\r\n�Ժ��תְ��Ϊ�Զ�תְ.");
                } else {
                    cm.sendOk("�㲻�Ǳ���������ְҵ,����ĵȼ�û�дﵽҪ��.\r\n��Ӱְҵ��Ϊ�Զ�תְ.");
                }
                cm.dispose();
                break;
            case 8:
                if (cm.getJob() == 0 &&  cm.getPlayer().getLevel() >= 10) {
                    cm.getPlayer().changeJob(509);
                    cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����");
                } else {
                    cm.sendOk("�㲻�Ǳ��������ֻ����Ĵ���,����ĵȼ�û�дﵽҪ��.");
                }
                cm.dispose();
                break;
        }
    }
}
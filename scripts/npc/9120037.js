/*
	NPC Name: 		��³��˾��
	Map(s): 		�߿Ƽ�����  2102 �� ��Զ���ӣ��ȴ� ��802000410)
	Description: 		Dunas Battle starter
*/
var status = -1;

function start() {
    if (cm.getMapId() == 802000410) {
        if (cm.getPlayer().getClient().getChannel() != 1) {
            cm.sendOk(" #e#r����˹#n#k Զ��������ֻ�� Ƶ�� 1  ����.");
            cm.dispose();
            return;
        }
        var em = cm.getEventManager("Dunas");

        if (em == null) {
            cm.sendOk("�����嵥Ϊ�գ�����ϵ����Ա��");
            cm.dispose();
            return;
        }
        //	var prop = em.getProperty("DunasSummoned");

        //	if (((prop.equals("PQCleared") || (prop.equals("1")) && cm.getPlayerCount(802000211) == 0)) || prop.equals("0") || prop == null) {
        var prop = em.getProperty("state");
        if (prop == null || prop.equals("0")) {
            var squadAvailability = cm.getSquadAvailability("Dunas");
            if (squadAvailability == -1) {
                status = 0;
                cm.sendYesNo("���ڿ�������Զ����!\r\n����Ҫ��Ϊ #e#r����˹ Զ���ӵĶӳ�#n #kô?");

            } else if (squadAvailability == 1) {
                // -1 = Cancelled, 0 = not, 1 = true
                var type = cm.isSquadLeader("Dunas");
                if (type == -1) {
                    cm.sendOk("�Ѿ����������롣");
                    cm.dispose();
                } else if (type == 0) {
                    var memberType = cm.isSquadMember("Dunas");
                    if (memberType == 2) {
                        cm.sendOk("���Ѿ���Զ���ӵ��Ʋ�������");
                        cm.dispose();
                    } else if (memberType == 1) {
                        status = 5;
                        cm.sendSimple("����������ʲô��\r\n#b#L0#�鿴Զ���ӳ�Ա#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�˳�Զ����#l");
                    } else if (memberType == -1) {
                        cm.sendOk("5���ӽ���Զ�����Ѿ��Զ�ע��.������ע��.");
                        cm.dispose();
                    } else {
                        status = 5;
                        cm.sendSimple("��������ʲô�� \r\n#b#L0#�鿴Զ���ӳ�Ա#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�˳�Զ����#l");
                    }
                } else { // Is leader
                    status = 10;
                    cm.sendSimple("����������ʲô��\r\n#b#L0#�鿴Զ���ӳ�Ա#l \r\n#b#L1#����Զ���ӳ�Ա#l \r\n#b#L2#�༭�����б�#l \r\n#r#L3#�����ͼ#l");
                    // TODO viewing!
                }
            } else {
                var eim = cm.getDisconnected("Dunas");
                if (eim == null) {
                    var squd = cm.getSquad("Dunas");
                    if (squd != null) {
                        cm.sendYesNo("Զ���ӵ���ս�Ѿ���ʼ..\r\n" + squd.getNextPlayer());
                        status = 3;
                    } else {
                        cm.sendOk("Զ���ӵ���ս�Ѿ���ʼ..");
                        cm.safeDispose();
                    }
                } else {
                    cm.sendYesNo("��Ҫ��������Զ��������?");
                    status = 2;
                }
            }
        } else {
            var eim = cm.getDisconnected("Dunas");
            if (eim == null) {
                var squd = cm.getSquad("Dunas");
                if (squd != null) {
                    cm.sendYesNo("Զ���ӵ���ս�Ѿ���ʼ.\r\n" + squd.getNextPlayer());
                    status = 3;
                } else {
                    cm.sendOk("Զ���ӵ���ս�Ѿ���ʼ.");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("��Ҫ��������Զ��������?");
                status = 2;
            }
        }
    } else {
        status = 25;
        cm.sendNext("��Ҫ�뿪����ص�#b �߿Ƽ�����  2102 �� ��Զ���ӣ��ȴ� #kô?");
    }
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (mode == 1) {
            if (cm.registerSquad("Dunas", 5, " �Ѿ���Ϊ�� ����˹  Զ���Ӷӳ�������������Զ���ӣ������´򿪶Ի��������Զ���ӡ�.")) {
                cm.sendOk("���Ѿ���Ϊ�� ����˹   Զ���Ӷӳ�����������5���ӣ���ȴ���Ա�ǵ����롣.");
            } else {
                cm.sendOk("δ֪����.");
            }
        }
        cm.dispose();
        break;
    case 2:
        if (!cm.reAdd("Dunas", "Dunas")) {
            cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("Dunas");
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("�����Ѿ���Զ�����ڽ���������..");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) {
            if (!cm.getSquadList("Dunas", 0)) {
                cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember("Dunas", true);
            if (ba == 2) {
                cm.sendOk("Զ����Ա�Ѿ��ﵽ30�������Ժ����ԡ�");
            } else if (ba == 1) {
                cm.sendOk("�������Զ���ӳɹ�����Ⱥ�ӳ�ָʾ��");
            } else {
                cm.sendOk("���Ѿ��μ���Զ���ӣ���Ⱥ�ӳ�ָʾ��");
            }
        } else { // withdraw
            var baa = cm.addMember("Dunas", false);
            if (baa == 1) {
                cm.sendOk("�Ʋ�ָ���ĳ�Ա�ɹ���");
            } else {
                cm.sendOk("��û�вμ�Զ���ӡ�.");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (mode == 1) {
            if (selection == 0) {
                if (!cm.getSquadList("Dunas", 0)) {
                    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�.");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("Dunas", 1)) {
                    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("Dunas", 2)) {
                    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�.");
                    cm.dispose();
                }
            } else if (selection == 3) { // get insode
                if (cm.getSquad("Dunas") != null) {
                    var dd = cm.getEventManager("Dunas");
                    dd.startInstance(cm.getSquad("Dunas"), cm.getMap());
                } else {
                    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�.");
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
        break;
    case 11:
        cm.banMember("Dunas", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("Dunas", selection);
        }
        cm.dispose();
        break;
    case 25:
        cm.warp(802000410, 0);
        cm.dispose();
        break;
    }
}
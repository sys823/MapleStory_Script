var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			var selStr = "#d#e��ӭʹ�ð�è��ҹ�����Ʒ����ѡ������Ҫ�ģ�#n#k\r\n";
			selStr +="\t#b����ǰ��è���Ϊ��  #r" + cm.getPlayerPoints() + " #b ��#n#k\r\n\r\n";
			selStr +="- #e#d����#n\r\n"
			selStr +="#L2##b"+aaa+" ���� #r#t2340000##k #b��Ҫ #r30000#k #b�󶨱�#l#k\r\n"; 
			selStr +="#L1##b"+aaa+" ���� #r����#t2049323##k #b��Ҫ #r60000#k #b�󶨱�#l#k\r\n";
			selStr +="#L3##b"+aaa+" �� #r#t2046074##k #b��Ҫ #r300000#k #b�󶨱�#l#k\r\n";
			selStr +="#L4##b"+aaa+" �� #r#t2046075##k #b��Ҫ #r300000#k #b�󶨱�#l#k\r\n";
			selStr +="#L5##b"+aaa+" �� #r#t2046149##k #b��Ҫ #r300000#k #b�󶨱�#l#k\r\n";
			selStr +="#L6##b"+aaa+" ���� #r#t2049750##k #b��Ҫ #r60000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L7##b"+aaa+" ���� #r#t2070024##k #b��Ҫ #r50000#k #b�󶨱�#l#k\r\n";
			selStr +="#L8##b"+aaa+" ���� #r#t2070023##k #b��Ҫ #r150000#k #b�󶨱�#l#k\r\n";
			selStr +="#L9##b"+aaa+" ���� #r#t2049124##k #b��Ҫ #r90000#k #b�󶨱�#l#k\r\n";
			selStr +="#L10##b"+aaa+" ���� #r#t2049137##k #b��Ҫ #r300000#k #b�󶨱�#l#k\r\n";
            selStr +="#L12##b"+aaa+" ���� #r#t2045212##k #b��Ҫ #r100000#k #b�󶨱�#l#k\r\n";
			selStr +="#L13##b"+aaa+" ���� #r#t2613000##k #b��Ҫ #r500000#k #b�󶨱�#l#k\r\n";
			selStr +="#L14##b"+aaa+" ���� #r#t2613001##k #b��Ҫ #r500000#k #b�󶨱�#l#k\r\n";
			selStr +="#L15##b"+aaa+" ���� #r#t2612010##k #b��Ҫ #r500000#k #b�󶨱�#l#k\r\n";
			selStr +=" \r\n\r\n";
                        cm.sendSimple(selStr);	
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("ȷ������һ�� #r#t2049323##k ��? ����ʹ�õ��� #r60000#k ��è��ҡ�");
			} else if (selection == 2) {
				typed=2;
				cm.sendYesNo("ȷ������һ�� #r#t2340000##k ��? ����ʹ�õ��� #r30000#k ��è��ҡ�");
                        } else if (selection == 3) {
				typed=3;
				cm.sendYesNo("ȷ������һ�� #r#t2046074##k ��? ����ʹ�õ��� #r300000#k ��è��ҡ�");
                        } else if (selection == 4) {
				typed=4;
				cm.sendYesNo("ȷ������һ�� #r#t2046075##k ��? ����ʹ�õ��� #r300000#k ��è��ҡ�");
                        } else if (selection == 5) {
				typed=5;
				cm.sendYesNo("ȷ������һ�� #r#t2046149##k ��? ����ʹ�õ��� #r300000#k ��è��ҡ�");
                        } else if (selection == 6) {
				typed=6;
				cm.sendYesNo("ȷ������һ�� #r#t2049750##k ��? ����ʹ�õ��� #r60000#k ��è��ҡ�");
                        } else if (selection == 7) {
				typed=7;
				cm.sendYesNo("ȷ������һ�� #r#t2070024##k ��? ����ʹ�õ��� #r90000#k ��è��ҡ�\r\n#r(PS:���ɱ��ֵ����ȥ��ľ��ҩ���ֵ)#k");	
                        } else if (selection == 8) {
				typed=8;
				cm.sendYesNo("ȷ������һ�� #r#t2070023##k ��? ����ʹ�õ��� #r150000#k ��è��ҡ�");	
                        } else if (selection == 9) {
				typed=9;
				cm.sendYesNo("ȷ������һ�� #r#t2049124##k ��? ����ʹ�õ��� #r90000#k ��è��ҡ�");	
                        } else if (selection == 10) {
				typed=10;
				cm.sendYesNo("ȷ������һ�� #r#t2049137##k ��? ����ʹ�õ��� #r300000#k ��è��ҡ�");
                        } else if (selection == 11) {
				typed=11;
				cm.sendYesNo("ȷ������һ�� #r#t4001716##k ��? ����ʹ�õ��� #r3000000#k ��è��ҡ�");
						} else if (selection == 12) {
				typed=12;
				cm.sendYesNo("ȷ������һ�� #r#t2045212##k ��? ����ʹ�õ��� #r100000#k ��è��ҡ�");
						} else if (selection == 13) {
				typed=13;
				cm.sendYesNo("ȷ������һ�� #r#t2613000##k ��? ����ʹ�õ��� #r500000#k ��è��ҡ�");
						} else if (selection == 14) {
				typed=14;
				cm.sendYesNo("ȷ������һ�� #r#t2613001##k ��? ����ʹ�õ��� #r500000#k ��è��ҡ�");
						} else if (selection == 15) {
				typed=15;
				cm.sendYesNo("ȷ������һ�� #r#t2612010##k ��? ����ʹ�õ��� #r500000#k ��è��ҡ�");
			}
		} else if (status == 2) {
			if(typed==1){
                if (cm.getPlayerPoints() >= 60000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-60000);
			cm.gainItem(2049323, 1);
			cm.sendOk("��ϲ���ɹ�����#t2049323#.");
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ�������߼�װ��ǿ����һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����������λ����,������.");
			cm.dispose();
				}
			}else if(typed==2){
                if (cm.getPlayerPoints() >= 30000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-30000);
			cm.gainItem(2340000, 1);
			cm.sendOk("��ϲ���ɹ�����#t2340000#.");
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ���ף������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����������λ����,������.");
			cm.dispose();
				}
			}else if(typed==3){
                if (cm.getPlayerPoints() >= 300000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-300000);
			cm.gainItem(2046074, 1);
			cm.sendOk("��ϲ���ɹ�����#t2046074#.");
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ�������������������������99%һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����������λ����,������.");
			cm.dispose();
				}
			}else if(typed==4){
                if (cm.getPlayerPoints() >= 300000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-300000);
			cm.gainItem(2046075, 1);
			cm.sendOk("��ϲ���ɹ�����#t2046075#.");
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ���������������ħ��������99%һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����������λ����,������.");
			cm.dispose();
				}
			}else if(typed==5){
                if (cm.getPlayerPoints() >= 300000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-300000);
			cm.gainItem(2046149, 1);
			cm.sendOk("��ϲ���ɹ�����#t2046149#.");
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ�������˫����������������99%һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����������λ����,������.");
			cm.dispose();
				}
			}else if(typed==6){
                if (cm.getPlayerPoints() >= 60000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-60000);
			cm.gainItem(2049750, 1);
			cm.sendOk("��ϲ���ɹ�����#t2049750#.");
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ���S��Ǳ�ܾ��� 80%һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����������λ����,������.");
			cm.dispose();
				}
			}else if(typed==7){
                if (cm.getPlayerPoints() >= 150000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-150000);
			cm.gainItem(2070024, 1);
			cm.sendOk("��ϲ���ɹ�����#t2070024#.");
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ������޷���һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����������λ����,������.");
			cm.dispose();
				}
			}else if(typed==8){
                if (cm.getPlayerPoints() >= 150000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-150000);
			cm.gainItem(2070023, 1);
			cm.sendOk("��ϲ���ɹ�����#t2070023#.");
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ���������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����������λ����,������.");
			cm.dispose();
				}
			}else if(typed==9){
                if (cm.getPlayerPoints() >= 90000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-90000);
			cm.gainItem(2049124, 1);
			cm.sendOk("��ϲ���ɹ�����#t2049124#.");
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ�������������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����������λ����,������.");
			cm.dispose();
				}
			}else if(typed==10){
                if (cm.getPlayerPoints() >= 300000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-300000);
			cm.gainItem(2049137, 1);
			cm.sendOk("��ϲ���ɹ�����#t2049137#.");
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ��������������� 40%һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����������λ����,������.");
			cm.dispose();
				}
			}else if(typed==11){
                if (cm.getPlayerPoints() >= 3000000 && cm.getSpace(4) >= 1) {
			cm.gainPlayerPoints(-3000000);
			cm.gainItem(4001716, 1);
			cm.sendOk("��ϲ���ɹ�����#t4001716#.");
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ��򶨾ӽ�10��һ��.");
			cm.dispose();
				}
			}else if(typed==12){
                if (cm.getPlayerPoints() >= 100000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-100000);
			cm.gainItem(2045212, 1);
			cm.sendOk("��ϲ���ɹ�����#t2045212#.");
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ���Ʒ����˫��ǹ��������һ��.");
			cm.dispose();
				}
			}else if(typed==13){
                if (cm.getPlayerPoints() >= 500000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-500000);
			cm.gainItem(2613000, 1);
			cm.sendOk("��ϲ���ɹ�����#t2613000#.");
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ����ǻ�����������������һ��.");
			cm.dispose();
				}
			}else if(typed==14){
                if (cm.getPlayerPoints() >= 500000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-500000);
			cm.gainItem(2613001, 1);
			cm.sendOk("��ϲ���ɹ�����#t2613001#.");
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ����ǻ�������ħ��������һ��.");
			cm.dispose();
				}
			}else if(typed==15){
                if (cm.getPlayerPoints() >= 500000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-500000);
			cm.gainItem(2612010, 1);
			cm.sendOk("��ϲ���ɹ�����#t2612010#.");
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ����ǻ�˫����������������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����������λ����,������.");
			cm.dispose();
				}
           }
		}
	  }
	}
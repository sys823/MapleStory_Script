/*
 Ϧ��������Chinað�յ�
 ���ʱ�䣺2015��4��28�� 16:34:19
 �ű����ܣ��̳�ϵͳ
 */

var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconX = "#fEffect/CharacterEff/1112905/0/1#";
var iconStar = "#fEffect/CharacterEff/1112904/2/1#";
var icon2 = "#fEffect/CharacterEff/1082565/4/0#";
var icon3 = "#fUI/UIWindow/Quest/icon6/7#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var vvv = "#fUI/UIWindow.img/Quest/icon8/0#";
var List = Array(
		
		//У԰����
        Array(icon3+"#r#e ��������#l", 17, 1, 9310144),
		Array(icon3+"#r ��Ϸ��ֵ#l", 1000,1,1),
		Array(icon3+"#r ��ֵ����#l",  8, 1, 9310144),
		Array("  "+icon3+"#r#e Ԫ���һ�  #l", 101, 2, 9310144),
        Array(icon3+"#r ���д��  #l", 14, 2 , 9900003), 
		Array(icon3+"#r ����ȡ��#l", 0, 2 , 9030000),
		Array("#d����������������������������������������������", 1, 2, 0),
		Array("  "+vvv+"#b ��ͨ���� #l", 1, 3,3000021),
		Array(vvv+"#b �������   #l", 2, 3,3000021),
        Array(vvv+"#b �ſ����  #l", 3, 3,3000021),
		Array("  "+vvv+"#b ��Ч��ָ #l", 4, 3,3000021),
		Array(vvv+"#b ����ħ��   #l", 5, 3,3000021),
        Array(vvv+"#b ��ҫ��װ#l", 0, 3, 2120017),
        Array("  "+vvv+"#d ϡ������ #l", 7, 3,3000021),
		Array(vvv+"#d ��Ʒ����   #l", 8, 3,3000021),
        Array(vvv+"#d ��Ʒ��װ  #l", 9, 3,3000021),
		Array("  "+vvv+"#d ��Ʒ���� #l", 10, 4,3000021),
		Array(vvv+"#d ����˫��   #l", 21, 4,3000021),
        Array(vvv+"#d ��������#l", 6, 4,3000021),
		Array("  "+vvv+"#d �˺�Ƥ�� #l", 13, 4,3000021),
		Array(vvv+"#d �����װ   #l", 14, 4,3000021),
        Array(vvv+"#d �����ڴ�  #l", 15, 4,3000021),

        //Array("  "+vvv+"#d ������װ #l", 19, 4,3000021),
		//Array(vvv+"#d ������װ   #l", 20, 4,3000021),
        //Array(vvv+"#d ������װ   #l", 10, 4 , 9010022),
		Array("#d��������������������������������������������������\r\n", 1, 4, 0)

		
);

var text;
//�Ƿ������֣�ģʽ�����

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			var myRmb = getMyRmb();
			text = "";
text += "     #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0# Ԫ����#r"+myRmb+"#n#k      #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0# �����#r" + cm.getPlayer().getCSPoints(1) + " #k\r\n     #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0# ����ң�#r"+cm.getItemQuantity(4000463) + " #k";			for (var i = 0; i < 5; i++) {
                ListFor(i);
            }
			text += "\r\n#e#g\t\t  "+icon2+" Chinað�յ�ף����Ϸ��� "+ icon2 +"#n#k\r\n";
            cm.sendSimple(text)
        } else if (a == 1) {
            var mode_ = List[selection][1];
            
			var npcid = 9900003;
			if (List[selection][3] != null)
				npcid = List[selection][3];
			if (npcid == 0) {
				a=-1;
				cm.sendSimple("��Ӵ����㵽�������ˡ�");
			} else if (npcid == 1) {
				cm.dispose();
				cm.openWeb("http://my1.libaopay.com/buy/?wid=62259");
			} else {
				cm.dispose();
            	cm.openNpc(npcid, mode_);
			}
		}//a
    }//mode
}//f


function ListFor(type) {
    switch (type) {
        case 1://��Ϸ��԰
            text += "\r\n"+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+"#k";
            break;
		case 2:
			text+=  "#n";
			break;
		case 3:
			text+=  "#n";
			break;
    }
    var x = 0;
    for (var i = 0; i < List.length; i++) {
        if (List[i][2] == type) {
			if (List[i][2]==1) 
				text+="  ";
			if (List[i][2]==2)
				y = 3;
			else 
				y = 2;
			if (x==1 && List[i][2]>2) {
				text+=" ";
			}
            if (x == y) {
                text += "#L" + i + "#" + List[i][0] + "#l\r\n";
                x = 0;
            } else {
                text += "#L" + i + "#" + List[i][0] + "#l";
                x++;
            }
			if (x==1 && List[i][2]>2) {
				text+=" ";
			}
        }
    }
	//text+="#e\r\n";
}

function getMyRmb() {
	var myRmb;
	var conn = cm.getConnection();
	var sql = "select rmb from accounts where id = ?;";
	var pstmt = conn.prepareStatement(sql);
	pstmt.setString(1, cm.getPlayer().getAccountID());
	var myRmbSql = pstmt.executeQuery();
	if (myRmbSql.next()) {
		myRmb = myRmbSql.getString("rmb");
	} else {
		myRmb = 0;
	}
	myRmbSql.close();
	pstmt.close();
	return myRmb;
}
/*
 ��ҫ��װ
 */

var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//����New
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";

var List = Array(
		//������Ŀ

		Array(iconEvent + " #r����ˮ��#k", 1, 1, 1540326),
		Array(iconEvent + " #r�ܲ�����#k", 2, 1, 1540326),
		Array(iconEvent + " #rС���Թ�#k", 3, 1, 1540326),
		Array(iconEvent + " #r�����ܰ�#k", 4, 1, 1540326),
		Array(iconEvent + " #r������#k", 5, 1, 1540326),
		Array(iconEvent + " #r�Ա�����#k", 6, 1, 1540326),
		Array(iconEvent + " #r΢Ц����#k", 7, 1, 1540326),
		Array(iconEvent + " #r���鴫��#k", 8, 1, 1540326),
		Array(iconEvent + " #r��������#k", 9, 1, 1540326),
		Array(iconEvent + " #r��̫�ɰ�#k", 10, 1, 1540326)
		//Array(iconEvent + " #r����֮��#k", 1, 1, 1540326),
		//Array(iconEvent + " #r����֮��#k", 1, 1, 1540326),
		//Array(iconEvent + " #r����֮��#k", 1, 1, 1540326),
		//Array(iconEvent + " #r����֮��#k", 1, 1, 1540326),
		//Array(iconEvent + " #r¶������#k", 1987, 1, 9900002)
		
		
		//Array(icon2+"#bʱװ����"+icon2, 0, 2, 9000069),
		//Array(icon2+"#d����ϴ��"+icon2, 1, 2, 9000174),
		 //Array(icon2+"#b�����ƹ�"+icon2, 1000, 2),
		//Array(icon2+"#b����Ǳ��"+icon2, 1001, 2)
		//Array(iconEvent + " #rů��Ů��#k", 777, 1, 9310144)
)
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
            text = "";
            for (var i = 0; i < 5; i++) {
                ListFor(i);
            }
			
            cm.sendSimple(text)
        } else if (a == 1) {
            var mode_ = List[selection][1];
            cm.dispose();
			var npcid = 9900003;
			if (List[selection][3] != null)
				npcid = List[selection][3];
            cm.openNpc(npcid, mode_);
        }//a
    }//mode
}//f


function ListFor(type) {
    switch (type) {
        case 1://�������
            text += "#e#d\t\t\t  "+icon2+" ��Ʒ��װ "+ icon2 +"#n#k\r\n";
            break;
		default: 
			text+="\r\n";
    }
    var x = 0;
    for (var i = 0; i < List.length; i++) {
        if (List[i][2] == type) {
            if (x == 2) {
				if (List[i+1]!=null && List[i+1][2]!=type)
               		text += "  #L" + i + "#" + List[i][0] + "#l";
				else
					text += "  #L" + i + "#" + List[i][0] + "#l\r\n";
                x = 0;
            } else {
                text += "  #L" + i + "#" + List[i][0] + "#l";
                x++;
            }
        }
    }
}

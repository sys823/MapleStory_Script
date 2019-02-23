/*
 脚本功能：拍卖脚本V2版
 */
var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconX = "#fEffect/CharacterEff/1112905/0/1#";
var iconStar = "#fEffect/CharacterEff/1112904/2/1#";
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var icon3 = "#fEffect/CharacterEff/1082565/4/0#";
var List = Array(
		
		//校园助手     
		Array(iconStar+"#r#e万能传送#n", 0, 1,1530420),
		Array(iconStar+"#r#e万能服务#n", 0, 1, 2135017),
		Array(iconStar+"#g#e返回市场#n", 99, 1),
		
		Array(icon3+"#b每日签到#k", 7, 2),
        //Array(icon3+"#b每日任务#k", 12, 2), //TODO
        Array(icon3+"#b连续签到#k", 502, 2, 9900003), 
		Array(icon3+"#r元宝兑换#k", 101, 2, 9310144), 
		Array(icon3+"#r兑换点卷#k", 11, 2, 9900004),
		//Array(icon3+"#b在线奖励#k", 608, 2, 9900003),
		
		Array(icon2+"#d自动转职"+icon2, 4, 3),
		Array(icon2+icon2+icon2+icon2+icon2+icon2+icon2+icon2+icon2, 3, 3, 0),
		Array(icon2+"#d点卷商城#k"+icon2,0, 3, 3000021),
	
		Array(icon2+"#d群宠技能#k"+icon2, 22, 3),
		Array(icon2+"   #r充值奖励#k   "+icon2, 8, 3, 9310144),
		Array(icon2+"#d平民商城"+icon2, 0, 3, 1011101),
		
		//Array(icon2+"#d活跃礼包#k"+icon2, 23, 3),
		Array(icon2+"#d征服积分#k"+icon2, 501, 3),
		Array(icon2+"   #r充值网址   "+icon2, 1000, 3, 1),
		//Array(icon2+"#d组队任务"+icon2, 6, 3, 9310144),
		Array(icon2+"#r在线奖励"+icon2,608, 3, 9900003),
		
		Array(icon2+"#d每日组队"+icon2, 6, 3, 9310144),//TODO
		//Array(icon2+"#d竞技积分"+icon2, 501, 3),//TODO
		Array(icon2+"   #r购买理财   "+icon2,  17,  3, 9310144),
		//Array(icon2+"#d重置副本"+icon2, 3, 3, 9900004),
		Array(icon2+"#r等级奖励"+icon2, 0, 3, 9300011),
		
		
		Array(icon2+"#d清理背包"+icon2, 500, 3),
		Array(icon2+icon2+icon2+icon2+icon2+icon2+icon2+icon2+icon2, 3, 3, 0),
		Array(icon2+"#d我要变强"+icon2, 1, 3, 9900004)
);

var text;
//是否活动，名字，模式，类别

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
            text += "\t#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0# 您的元宝：#r#e"+myRmb+"#n#k个 #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0# 今天在线：#r#e"+cm.getGamePoints()+"#n#k分钟";
			for (var i = 0; i < 5; i++) {
                ListFor(i);
            }
			text += "\r\n#e#g\t\t  "+icon2+" China冒险岛祝您游戏愉快 "+ icon2 +"#n#k\r\n";
            cm.sendSimple(text)
        } else if (a == 1) {
            var mode_ = List[selection][1];
            
			var npcid = 9900003;
			if (List[selection][3] != null)
				npcid = List[selection][3];
			if (npcid == 0) {
				a=-1;
				cm.sendSimple("#r#e哎哟,讨厌，你点到人家咪咪了。");
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
        case 1://游戏乐园
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

var status = 0;
var nature;
var DJnature;
var ItemId;
var nature1 = Array();
var nature2 = Array();
//var A,B,C,D;
//----------------------------------------------------变量切割
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
		status++;
	} else {
		if (status >= 1) {
			status = 1;
			cm.dispose();
			return;
		} else {
			cm.dispose();
			return;
		}
		status--;
	}

    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
            cm.dispose();
        } 
    else if (status == 0) {
		var selStr = "#e        欢迎来到欢乐炸炸炸 \r\n";
		   selStr +="      #b#k\r\n\r\n";
		   selStr +="      #r#k\r\n\r\n\r\n";
		   selStr +="#r#L0#我要开始欢乐炸炸炸#l\r\n";
		   selStr +="#r#L1#我要看说明#l\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
		if (selection == 1){
			var TET = "#e        欢迎来到点装属性提升【说明中心 】\r\n";
			TET += "1.这里提升的点装只能是自己背包里现有的【点装道具】\r\n";
			TET += "2.提升过后的点装道具，将会有一个月时间限制，一个月后可以续费延长时间\r\n";
			TET += "3.这里只提升6个属性：力量、敏捷、智力、运气、攻击、魔法攻击\r\n";
			TET += "4.3E金币提升的范围是0~10\r\n";
			TET += "5.5E金币提升的范围是0~20\r\n";
			TET += "6.10E金币提升的范围是0~30\r\n";
			TET += "7.每次提升还会额外消耗300个结晶\r\n";
			TET += "8.每次提升会回收背包里现有的，然后生成新的。\r\n";
			TET += "9.一旦属性洗出来后,钱就扣掉!!!。\r\n";
			cm.sendOk(TET);
			cm.dispose();
			return;
		}
		var avail = "";
            for (var i = 0; i < 96; i++) {
                if (cm.getInventory(1).getItem(i) != null&&cm.isCash(cm.getInventory(1).getItem(i).getItemId())) {
					avail += "#L" + cm.getInventory(1).getItem(i).getItemId() + "# #z" + cm.getInventory(1).getItem(i).getItemId() + "# #i" + cm.getInventory(1).getItem(i).getItemId() + ":##l\r\n";
                }
            }
            cm.sendSimple("#b请选择需要加属性的道具后 点击下一步将会开始获取随机属性:\r\n#b" + avail);
		} else if (status == 2) {//先选4项属性
			ItemId = selection;
			getStats();
			var TXT = "				#v"+ItemId+"# #z"+ItemId+"#          \r\n";
			for (var i = 0;i<nature1.length ;i++ ){
				TXT += " #d"+nature1[i][0]+"\r\n";
			}
			TXT +="#r#L0#我要用3E砸初级阶段#l\r\n";
			TXT +="#L1#我要用5E砸中级阶段#l\r\n";
			TXT +="#L2#我要用10E砸高级阶段#l\r\n";
			TXT +="#L3#大爷我不砸了！#l  \r\n";
			TXT +="		";
			cm.sendSimple("#b您获得的属性如下，是否继续？下一步将开始洗属性。并且会扣金币和最高级结晶:\r\n\r\n#b" + TXT);
		} else if (status == 3) {//用金币进行洗属性
			var PI;
			var Money;
			if(selection !=3){
				if(!cm.haveItem(4021016,300)){
				cm.sendOk("检查一下背包是否有300个最高级结晶");
				cm.dispose();
				return;
			}
			if(selection == 0){//3E
				Money = 300000000;
				PI = 10;
			}else if(selection == 1){//5E
				Money = 500000000;
				PI = 20;
			}else if(selection == 2){//10E
				Money = 1000000000;
				PI = 30;
			}else{
				cm.sendOk("出错了，请联系管理员！");
				cm.dispose();
				return;
			}
			if(cm.getMeso()<Money){
				cm.sendOk("检查一下背包是否有"+Money+"金币");
				cm.dispose();
				return;
			}
			var TXT = "";
			for (var i = 0;i<nature1.length ;i++ ){
				var Ai = Math.floor(Math.random()*PI);;
				nature1[i][1]=Ai;
				TXT += "\r\n#r"+nature1[i][0]+" : #b"+nature1[i][1]+"#k";
			}
			TXT +="\r\n#L0#是#l\r\n";
			cm.sendSimple("#b您获得的属性值如下，请点击下一步。:\r\n#b" + TXT);
			cm.gainMeso(-Money);
			cm.gainItem(4021016,-300);
			}else{
				cm.dispose();
			}
		} else if (status == 4) {
			if(selection == 0){
				cm.gainItem(ItemId,-1);//去掉原来的
				setStats();
				cm.worldSpouseMessage(0x0F,"[面板提升中心]:玩家 "+ cm.getChar().getName() +" 用金币对点装进行了强化，大家快瞧瞧！");
				cm.dispose();
			}else{
				cm.sendOk("打造出错请联系管理员");
				cm.dispose();
			}
    }
}
function getStats(){//金币普通槽
	nature = Array(Array("力量",0),
				   Array("智力",0),
				   Array("运气",0),
				   Array("敏捷",0),
				   Array("物理攻击",0),
				   Array("魔法攻击",0));
	for (var i=0 ;i<nature.length ;i++ ){
		nature1.push(nature[i]);
	}
	return;
}
function setStats(){
	var Name = Array("来！互相伤害","我是GAY","我的天呐！","高考算个屌","太阳之子","太阳的后裔","宇宙的后裔","在座都是大爷","充钱才能更强","你们都是垃圾","我最屌","叫我女王大人","没见过帅哥？");
	var equip = cm.getNewEquip(ItemId);
	for (var i = 0;i<nature1.length ;i++ ){
		if(nature1[i][0]=="力量"){
			equip.setStr(nature1[i][1]);
		}else if(nature1[i][0]=="智力"){
			equip.setInt(nature1[i][1]);
		}else if(nature1[i][0]=="运气"){
			equip.setLuk(nature1[i][1]);
		}else if(nature1[i][0]=="敏捷"){
			equip.setDex(nature1[i][1]);
		}else if(nature1[i][0]=="物理攻击"){
			equip.setWatk(nature1[i][1]);
		}else if(nature1[i][0]=="魔法攻击"){
			equip.setMatk(nature1[i][1]);
		}
	}
	cm.playerMessage(5,"恭喜打造成功！");
	equip.setOwner(Name[Math.floor(Math.random()*Name.length)]);
	//cm.setLock(equip);
	equip.setExpiration(java.lang.System.currentTimeMillis()+(1000*60*60*24*30));
	cm.addFromDrop(equip);
	cm.sendOk("恭喜打造成功");
	return;
}
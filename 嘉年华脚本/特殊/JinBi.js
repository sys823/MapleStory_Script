var status = 0;
function start() {
        cm.sendNext("魔方副本：\r\n玩家每天只能进一次。（请点击下一步开启）");
}

function action(mode, type, selection) {
    if (mode == 1) {
		var em = cm.getEventManager("Goldpz");
		if (em == null) {
			cm.sendOk("请联系管理员开通此副本。");
		}else{
		    var prop = em.getProperty("started");
			if(cm.getPQLog("金币副本")<1||cm.getChar().isGM()==true){
				if (cm.getParty()==null) {
		            cm.sendOk("请先自己开个组,而且只能自己一个人.完成后再来跟我说话");
				}else if (cm.getParty().getMembers().size()<2&&cm.getChar().isGM()!=true){
					cm.sendOk("组里至少要2个人哦");
				} else if (!cm.checkPartyEventCount("魔方副本", 2)) {
					cm.sendNext("你的队员次数已经达到上限了。");
				}else if(prop == null||prop =="false" ){
						em.startInstance(cm.getParty(), cm.getMap());
				        //cm.setPQLog("魔方副本");
						//cm.gainMembersPQ("魔方副本", 1);
						cm.setPartyEventCount("魔方副本",1);
						cm.worldSpouseMessage(0x20,"『魔方副本』 ：玩家 "+ cm.getChar().getName() +" 进入了魔方道具组队副本.");
		                cm.dispose();
				}else{
						cm.sendOk("对不起，该副本已经有人");
					}
			}else{
				cm.sendOk("开启失败\r\n1.该副本一天只能进一次")
			}
		}
		}
    cm.dispose();
}

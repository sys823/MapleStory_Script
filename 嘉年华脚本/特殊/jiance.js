function start() {
    var eim = cm.getEventInstance();
	if (eim.getProperty(""+cm.getName())=="true"){
		//cm.dispose();
		var A = cm.getTime();
		//eim.setProperty("time2",""+A);
		var DJ =cm.getLevel();
		var JOB = cm.getJobNameById(cm.getJobId());
		var name = cm.getName();
		var HP = cm.getChar().getStat().getMaxHp();
		var accname = cm.getC().getAccountName();
		var B = eim.getProperty("time1")+"";
		var C = parseInt(eim.getProperty("BeidlerRArm")) + parseInt(eim.getProperty("BeidlerLArm")) + parseInt(eim.getProperty("BeidlerHip"));
		var D = eim.getName();
		if (D =="BeidlerPQ"){
			D = D + "" + eim.getProperty("Core");
		}
		var conn = cm.getConnection();
		var pstmt = conn.prepareStatement("select leiji from hypay where accname = '"+cm.getC().getAccountName()+"'");
		var result = pstmt.executeQuery();
		result.next();
		var leiji = result.getString("leiji");
		var sql="insert into bosslog(帐号,名字,职业,等级,血量上限,入场时间,消灭完出场时间,所打BOSS,余额充值)VALUES('"+accname+"','"+name+"','"+JOB+"',"+DJ+","+HP+",'"+B+"','"+A+"','"+D+"',"+leiji+")";
        var pstmt = conn.prepareStatement(sql);
					     pstmt.executeUpdate();
						 eim.setProperty(""+cm.getName(),"false");
						 	cm.dispose();
	}else{
		var A = cm.getTime();
		eim.setProperty("time1",""+A);
		//eim.setProperty("PD","true");
		eim.setProperty(""+cm.getName(),"true");
	}
	cm.dispose();
}
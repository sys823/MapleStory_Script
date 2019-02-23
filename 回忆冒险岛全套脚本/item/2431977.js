/*
	活跃度礼盒 1阶
*/

var status;
var reward = Array(
					Array(2001505, 10, 100),	// 超级药水
					Array(2001556, 10, 50),		// 包治百病药
					Array(2431738, 1, 1),		// 神奇魔方
					Array(5062002, 1, 5),           // 高级神奇魔方
					Array(5064000, 1, 1),           // 防暴卷轴
					Array(2003524, 1, 5),		// 上等英雄秘药 - 利用炼金术的最尖端技术制作而成的神秘药水。使用后，在2小时内攻击力和魔法攻击力增加18
					Array(2003527, 1, 5)		// 上等祝福秘药 - 利用炼金术的最尖端技术制作而成的神秘药水。使用后，在2小时内力量、敏捷、智力、运气各增加40，移动速度和跳跃力提高到最大值。
					);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode <= 0) {
		im.dispose();
		return;
	} else {
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
	}

	if (status == 0) {
		if (!im.haveSpace(2)) {
			im.sendOk("消耗栏空间不足，请整理后再打开");
			im.dispose();
			return;
		}
		var index = Math.floor(Math.random() * reward.length);
		var quantity = Math.floor(Math.random() * reward[index][2] + reward[index][1]);
		
		im.gainItem(2431977, -1);
		im.gainItem(reward[index][0], quantity);
		if (im.getBossLogAcc("推广积分1")<=0) {
			gainTGP(1);
			im.setBossLogAcc("推广积分1");
		}
		im.dispose();
	}
}

function gainTGP(quantity) {
	var sql = "update accounts set spoints = spoints + ? where name = (select invitation from (select invitation from accounts where id = ?) as temp);";
	var id = im.getPlayer().getAccountID();
	var pstmt = im.getConnection().prepareStatement(sql);
	pstmt.setString(1, quantity);
	pstmt.setInt(2, id);
	var isSuccess = (pstmt.executeUpdate() > 0) ? true: false;
	pstmt.close();
	return isSuccess;
}
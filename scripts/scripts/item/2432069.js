var itemList = Array(
	Array(4310058, 99)
);
function start() {
    if (im.getSpace(3) >= 1) {
        im.gainItem(2432069, -1);
		for(var key in itemList) {
			im.gainItem(itemList[key][0],itemList[key][1]);
		}
        im.playerMessage(-1, "恭喜您获暴君防具兑换材料-麦格纳斯币99个");
        im.worldSpouseMessage(0x15, "『充值奖励』:恭喜 " + im.getPlayer().getName() + " 从 <暴君防具箱> 中获得麦格纳斯币99个，离超神更近了一步！");
	im.dispose();
    } else {
        im.sendOk("请将消耗栏预留1个空位以上，我将给您暴君防具兑换材料-麦格纳斯币99个。");
	im.dispose();
    }
}
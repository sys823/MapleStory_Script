var itemList = Array(
    Array(4000241, 300),
	Array(1003561, 1),
	Array(1102467, 1),
    Array(1082438, 1),
	Array(1052467, 1),
	Array(1072672, 1)
);
function start() {
    if (im.getSpace(1) >= 5) {
        im.gainItem(2431047, -1);
		for(var key in itemList) {
			im.gainItem(itemList[key][0],itemList[key][1]);
		}
        im.playerMessage(-1, "恭喜您获得5件风暴系列防具，嫩草x300");
        im.worldSpouseMessage(0x15, "[充值奖励] : 恭喜 " + im.getPlayer().getName() + " 从 <风暴装备箱> 中获得5件风暴系列防具和大量物品！");
	im.dispose();
    } else {
        im.sendOk("请将装备栏预留5个空位以上，我将给予您5件风暴系列防具。");
	im.dispose();
    }
}
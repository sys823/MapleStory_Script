var ItemList = Array(
				Array(5062501,1),//MS潜能魔方
				Array(5062500,1),
				Array(5062009,1),
				Array(4310030,2),
				Array(4310036,2)
);
function start() {
	for (var i =0;i<ItemList.length ;i++ ){
		cm.gainItem(ItemList[i][0], ItemList[i][1]);
		cm.getPlayer().dropMessage(5, "[魔方副本]：这波获得了 "+cm.getItemName(ItemList[i][0])+"  "+ItemList[i][1]+"个");
	}
	cm.dispose();
}
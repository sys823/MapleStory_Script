/* 
	韵 自由市场进入钓鱼的NPC
*/

var status = -1;
var sel;

function action(mode, type, selection) {

 cm.sendOk("非常遗憾，钓鱼场由于王八老板吃喝膘赌抽，欠下1.5亿的赌债跑了。。");
 cm.dispose();
 return;
 
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.sendSimple("你想去哪里钓鱼呢？\r\n#b#L0# 外层空间钓鱼场#l");
    } else if (status == 1) {
        if (selection <= 2 && selection >= 0) {
            if (cm.getPlayer().getMapId() < 749050500 || cm.getPlayer().getMapId() > 749050502) {
                cm.saveLocation("FISHING");
            }
            cm.warp(749050500 + selection,0);
        }
        cm.dispose();
    }
}
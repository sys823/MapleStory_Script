function enter(pi) {
    if (pi.haveItem(4001260,7) && pi.getPlayer().getParty() != null && pi.getMap().getAllMonstersThreadsafe().size() == 0) {
        pi.warpParty(925100100, 0);
        pi.removeAll(4001260);
    } else {
        pi.playerMessage(5, "请收集老海盗箱子的钥匙7个并消灭所有怪物,否则无法通过!");
    }
}

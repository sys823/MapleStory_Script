function enter(pi) {
	var map = pi.getPlayer().getMap();
	var reactor = map.getReactorByName("gate03");
	var state = reactor.getState();
	if (state >= 4) {
		pi.warp(670010600, 8);
		return true;
	} else {
		pi.getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.serverNotice(5, "���ѹر�"));
		return false;
	}
}
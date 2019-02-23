importPackage(net.sf.odinms.server.maps);
importPackage(net.sf.odinms.net.channel);
importPackage(net.sf.odinms.tools);


function enter(pi) {
	var eim = pi.getPlayer().getEventInstance();
	var mf = eim.getMapFactory();
	var map = mf.getMap(920010100);
	var party = pi.getPlayer().getEventInstance().getPlayers();
	var realParty = pi.getParty();
	var playerStatus = pi.isLeader();
	if (playerStatus) {
		for (var i = 0; i < party.size(); i++) {
			party.get(i).changeMap(map, map.getPortal(13));
		}
		return true;	
	} else {
		pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "Only the party leader has the desision whether to leave this room or not."));
		return false;
	}
}

function enter(pi) {
    var em = pi.getEventManager("Juliet");
    if (em != null && em.getProperty("stage6_1").equals("0")) {
        pi.warp(926110302, 0);
        em.setProperty("stage6_1", "1");
    } else {
        pi.playerMessage(5, "Someone has already gone in this portal.");
    }
}
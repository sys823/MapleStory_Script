function enter(pi) {
    if (pi.getMap().getReactorByName("jnr3_out2").getState() > 0) {
        pi.warp(926110202, 0);
    } else {
        pi.playerMessage(5, "实验室大门是关闭的!");
    }
}
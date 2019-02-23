/*
玩具城 副本 NPC 
传出去
*/
var status = 0;
var minLevel = 160;
var maxLevel = 255;
var minPartySize = 3;
var maxPartySize = 999;
var GetMeny=500;

function start() {
    status = -1;
    action(1, 0, 0);
}

// function start() {
//     if (cm.getMapId() != 922010000) {
//         cm.sendYesNo("你确定要出去吗?");
//     } else {
// if (cm.haveItem(4001022)) {
//     cm.removeAll(4001022);
// }
// if (cm.haveItem(4001023)) {
//     cm.removeAll(4001023);
// }
// cm.warp(910000000, 0)
// cm.dispose();
//     }
// }

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            if (cm.getMap().getId() != 922010000) {
                cm.sendYesNo("你确定要出去吗?");
            } else {
                cm.sendSimple("#e<组队任务：玩具城组队挑战任务>#n\r\n你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……如果想挑战的话，请让#b所属组队的队长#k来和我说话。\r\n#b#L0#我想执行组队任务。#l\r\n#L1#我想听一下说明。#l\r\n#L9#我想出去#l")
            }
        }
        if (type == 1) { //确定出去
            cm.warp(910000000, 0);
            cm.dispose();
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getParty() == null) { // 没有组队
                    cm.sendOk("请组队后和我谈话。");
                    cm.dispose();
                } else if (!cm.isLeader()) { // 不是队长
                    cm.sendOk("请叫队长和我谈话。");
                    cm.dispose();
                    /*} else if (cm.getBossLog('LUDI') >= 6){
                     cm.sendOk("对不起，一天只能进入6次。")
                     cm.dispose();*/
                } else {
                    var party = cm.getParty().getMembers();
                    var mapId = cm.getPlayer().getMapId();
                    var next = true;
                    var levelValid = 0;
                    var inMap = 0;
                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
                            levelValid += 1;
                        } else {
                            next = false;
                        }
                        if (cPlayer.getMapid() == mapId) {
                            inMap += 1;
                        }
                    }
                    if (party.size() < minPartySize || party.size() > maxPartySize || inMap < minPartySize) {
                        next = false;
                    }
                    if (next) {
                        var em = cm.getEventManager("LudiPQ");
                        cm.worldMessage("[组队任务] " + cm.getChar().getName() + " 带领他的队伍进入了玩具城组队挑战任务。大家一起祝福他们吧！");
                        if (em == null) {
                            cm.sendOk("此任务正在建设当中。");
                        } else {
                            var prop = em.getProperty("state");
                            if (prop == "0" || prop == null) {
                                em.startInstance(cm.getParty(), cm.getMap());
                                cm.removeAll(4001022);
                                cm.removeAll(4001023);
                                cm.dispose();
                                return;
                            } else {
                                cm.sendOk("请等待其他队伍出来.或可以换频道进入！");
                            }
                        }
                        cm.dispose();
                    } else {
                        cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
                        cm.dispose();
                    }
                } //判断组队
            } else if (selection == 1) {
                cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
                cm.dispose();
            }
            else if (selection==9) {
                                        if (cm.getBossLog("玩具城") > 3) {
                            cm.getChar().modifyCSPoints(1, GetMeny);
                        }
            cm.warp(910000000, 0);
            cm.dispose();
            }
        }
        //status
    } //mode
} //f

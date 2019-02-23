/*  NPC : Legor
    Bowman 4th job advancement
	Forest of the priest (240010501)
*/


var status = -1;

var newjob;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
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
       
       newjob = cm.getJob() + 1;


        if (! (cm.getJob() == 311 || cm.getJob() == 321)) {

            cm.sendOk("#r" + cm.getVipname() + " #b你已经完成了第四次转职！\r\n#k你来找我是有什么疑问么？\r\n#rMaplewing  永恒的羽翼！");
            cm.dispose();
            return;

        } else if (cm.getPlayerStat("LVL") < 120) {

            cm.sendOk("#r" + cm.getVipname() + " #b你还未达到120级，无法进行第四次转职！\r\n#d请达到120级以后再来找我！");
            cm.dispose();
            return;

        } else {


           cm.sendSimple("#r" + cm.getVipname() + " #k你想要再进一步提升么?\r\n#b#L0#我要成为一名#r " + cm.getJobNameById(newjob) + ".#l\r\n#b#L1#让我再考虑一下.#l");

        }


    } else if (status == 1) {
        if (selection == 1) {
            cm.sendOk("#r" + cm.getVipname() + " #k如果你准备好了,我会让你进行第四次转职！.");
            cm.dispose();
            return;
        }
        if (cm.getPlayerStat("RSP") > cm.getPlayerStat("LVL") * 3) { //玩家还有太多的SP
            if (cm.getPlayer().getAllSkillLevels() > ((cm.getPlayerStat("LVL") - 9) * 3)) { //玩家还有太多的Sp
                cm.sendOk("#r" + cm.getVipname() + "  #k你还有未使用完的 SP ，请使用完后再来找我！.#n");
                cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 120) * 3);
            } else {
                cm.sendOk("#r" + cm.getVipname() + "  #k嗯……你还有#b SP #k未使用！请使用完后再来找我.");
            }
            cm.dispose();
            return;
        } else {
          cm.changeJob(newjob);
          cm.sendOk("#r" + cm.getVipname() + "  #k 恭喜你已经完成了  #d第四次转职#k  ！\r\n你现在已经是一名 " + cm.getJobNameById(newjob) + "\r\n#b加油吧！ #r<时间女神>伦娜#b  在等待着你！\r\n\r\n#e#d永恒的羽翼------枫翼重修"); 
          cm.dispose();

}

}

}














/*
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
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
        if (! (cm.getJob() == 311 || cm.getJob() == 321)) {
            cm.sendOk("Why do you want to see me? There is nothing you want to ask me.");
            cm.dispose();
            return;
        } else if (cm.getPlayerStat("LVL") < 120) {
            cm.sendOk("You're still weak to go to bowman extreme road. If you get stronger, come back to me.");
            cm.dispose();
            return;
        } else {
            if (cm.getQuestStatus(6924) == 2) {
                if (cm.getJob() == 311) cm.sendSimple("You're qualified to be a true bowman. \r\nDo you want job advancement?\r\n#b#L0# I want to advance to Bow Master.#l\r\n#b#L1#  Let me think for a while.#l");
                else cm.sendSimple("You're qualified to be a true bowman. \r\nDo you want job advancement?\r\n#b#L0# I want to advance to Cross Bowmaster.#l\r\n#b#L1#  Let me think for a while.#l");
            } else {
                cm.sendOk("You're not ready to make 4th job advancement. When you're ready, talk to me.");
                cm.dispose();
                return;
            }
        }
    } else if (status == 1) {
        if (selection == 1) {
            cm.sendOk("You don't have to hesitate....You passed all tests. Whenever you decide, talk to me. If you're ready, I'll let you make the 4th job advancement.");
            cm.dispose();
            return;
        }
        if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 120) * 3) { //player have too much SP means they havent assigned to their skills
            if (cm.getPlayer().getAllSkillLevels() > cm.getPlayerStat("LVL") * 3) { //player used too much SP means they have assigned to their skills.. conflict
                cm.sendOk("It appears that you have a great number of SP yet you have used enough SP on your skills already. Your SP has been reset. #ePlease talk to me again to make the job advancement.#n");
                cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 120) * 3);
            } else {
                cm.sendOk("Hmm...You have too many #bSP#k. You can't make the 4th job advancement with too many SP left.");
            }
            cm.dispose();
            return;
        } else {
            if (cm.getJob() == 311) {
                cm.changeJob(312);
                cm.sendNext("You became the best bowman, #bBowmaster#k. Bow Master can use  #bSharp Eyes#k which can increase the fighting power of colleagues so that it became such an important job.");
            } else {
                cm.changeJob(322);
                cm.sendNext("You became the best bowman #bCross Bowmaster#k. Marksman can use  #bSharp Eyes#k which can increase the fighting power of colleagues so that it became such an important job.");
            }
        }
    } else if (status == 2) {
        if (cm.getJob() == 312) {
            cm.sendNext("This is not all about Bow Master. Bow Master is good at a fast battle. It can attack enemies with enormously fast speed and even have great attack power.");
        } else {
            cm.sendNextPrev("This is not all about Cross Bowmaster. Each shot of Marksman is very strong. It can attack many enemies  with strong power and may beat off them at once.");
        }
    } else if (status == 3) {
        cm.sendNextPrev("Don't forget that it all depends on how much you train.");
        cm.dispose();
    }
}






*/
/* 
	
*/
var status = -1;
var hair_Colo_new;

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("你好。我是回忆冒险岛活动NPC。今天正式补偿，10分钟内我可以免费为你设计一个发型。怎么样？\r\n#b#L0#更换发型(免费更换)#l");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [33000, 33030, 33040, 33050, 33060, 33070, 33080, 33090, 33100, 33110, 33120, 33130, 33140, 33150, 33160, 33170, 33180, 33190, 33200, 33210, 33220, 33230, 33240, 33250, 33260, 33270, 33280, 33290, 33300, 33310, 33320, 33330, 33340, 33350, 33360, 33370, 33380, 33390, 33400, 33410, 33430, 33440, 33450, 33460, 33470, 33480, 33500, 33510, 33520, 33530, 33540, 33550, 33580, 33590, 33600, 33610, 33620, 33630, 33640, 33650, 33710, 33720, 33750, 33660, 33670, 33680, 33690, 33970, 33980, 33990, 33810, 33960, 33730, 33740,33760, 33770, 33800];
            } else {
                hair_Colo_new = [34000, 34010, 34040, 34050, 34060, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34170, 34180, 34190, 34200, 34210, 34220, 34230, 34240, 34250, 34260, 34270, 34280, 34290, 34300, 34310, 34320, 34330, 34340, 34350, 34360, 34370, 34380, 34400, 34410, 34420, 34430, 34440, 34450, 34470, 34480, 34490, 34510, 34560, 34590, 34600, 34610, 34620, 34630, 34640, 34650, 34670, 34710, 34720, 34750, 34760, 31990, 34880, 34890, 34900, 34910, 34680, 34690, 34660, 34790, 34800, 34860, 34540, 34700, 34730, 34740, 34770, 34830, 34870, 34990];
            }
            for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            cm.sendYesNo("使用皇家理发券，可以随机更换发型。你真的要使用#b#t05150040##k，更换发型吗？");
        }
    } else if (status == 2) {
	    cm.gainItemPeriod(5150040,1,1);
        if (cm.setRandomAvatar(5150040, hair_Colo_new) == 1) {
            cm.sendOk("好了,让朋友们赞叹你的新发型吧!");
        } else {
            cm.sendOk("必须要有皇家理发券，我才能为你理发。");
        }
        cm.safeDispose();
    }
}
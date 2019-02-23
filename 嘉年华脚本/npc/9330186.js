/* 
	枫之校园高手答题
*/
var questions = new Array("我们服好玩吗？",
				"管理员不漂亮么，打开填问题，这题答案为“否”"//是 true,

);
var answers = new Array(true,false);//这里填答案开关按钮。比如地一题的答案是“是”那对应填true，否为false
var rOutput = new Array("是的，好玩",//这里是填答案
					"否"
	);
var asked = new Array();
var currentQuestion;
var junk = new Array;
var junkWeap = new Array;
var goodEqWeap = new Array;
var useable = new Array;
var Rare = new Array;
var Select;
var openEvent = 0;


function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
   if (a == 3 && mode == 1) {
        a = 2;
        selection = 0;
    } else if (mode == 1 || (mode == 0 && type == 1))
        a++;
    else {
        if (type == 12 && mode == 0)
            cm.sendOk("有别的事情吗？如果你想继续参加的话可以跟我对话。");
        cm.dispose();
        return;
    }
	if(cm.getPlayer().getParty() != null || cm.isLeader()){
	if (a == 0){//
				cm.sendNext("参加考试答题，#b答对两个问题#k就可以获取奖杯，#b答对可以进入下一题#k，#r打错了的话就得重新来过#k，。继续吗？");
	}else if (a == 1){
				cm.sendSimple("同学你准备好了吗？那就让我们开始吧！#b\r\n#L0# 开始参加考试答题。");
	}else if (a == 2){
		  if (asked.length == 2 ) {//回答完成部分
                			cm.sendSimple("恭喜你答对了所有问题。看来你的头脑不错，我将颁发奖杯给你。#b\r\n\r\n1、领取到了#v4001137#优秀印章。\r\n2、你可以带领你的同学们通往下一个教室。");
							cm.gainItem(4001137,1);
							cm.dispose();
            			} else {
               				currentQuestion = -1;
                			while (contains(currentQuestion) || currentQuestion == -1) {
                    		currentQuestion = Math.floor(Math.random() * questions.length);
                		}
                			asked.push(currentQuestion);
                			cm.sendSimple("第 "+asked.length+" 题\r\n\r\n"+questions[currentQuestion]+"#b\r\n#L0# 是。\r\n#L1# 否。");
            			}//全部回答完成，和提问题部分
	}else if (a == 3){
						var answer = selection == 0 ?  true : false;
       					    if (answers[currentQuestion] == answer) {
                            cm.sendNext("恭喜你，回答正确。#r\r\n\r\n"+rOutput[currentQuestion]);
                            } else {
            				cm.sendOk("很遗憾，回答错误。#b\r\n\r\n"+rOutput[currentQuestion]+"\r\n回答错误之后就重新开始再答题了。");
           				    cm.dispose();
        					}
		}//status
	} else {
		cm.sendOk("请队长来答题，他可是你们的代表！");
		cm.dispose();
	}
}


function contains(quest) {
    for (var i = 0; i < asked.length; i++) {
        if (asked[i] == quest)
            return true;
    }
    return false;
}

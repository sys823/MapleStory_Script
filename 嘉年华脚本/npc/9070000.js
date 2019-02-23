﻿var tknow=0;
var typed=0;
var Qicon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var icon = "#fUI/Basic/BtHide3/mouseOver/0#";
var tzIcon ="#fUI/Basic/BtCoin/mouseOver/1#";
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var time1;
var time2;
var timeout = 8; //超时时间

function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {   
			if (mode == -1) {
                cm.dispose();
            }else {
                if (status >= 0 && mode == 0) {
				   cm.dispose();
				   return;                    
				}
				if (mode == 1) {
				   status++;
				}else {
				   status--;
				}
		if (status == 0) {
			var text = "我是饱读诗书的孔明，答题时间为每时#r50-55分#n#k,请准备：#b\r\n";
			text += "服务器当前时间：#r" + hour +":" + minute + ":" + second + "#n#k\r\n\r\n";
			text += Qicon + "今日答题总数: #r"+ cm.getPQLog("答题总数") +" #b道#n#k\r\n";
			text += Qicon + "今日正确题目: #r"+ cm.getPQLog("答题正确") +" #b道#n#k\r\n";
			text += "#L1##b"+icon+" 点此查看答题详细规则（新手必看）#l\r\n";
			text += "#L2##b"+icon+" 开始答题（"+timeout+"秒限时，速度要快哦）#l\r\n";
			text += "#L3##r"+icon+" 答对题目数兑换/魔方/卷轴/点卷#l\r\n\r\n";
			text += "#b    <注意>:每天0点#r清空答题数据#b，请及时兑换\r\n";
			cm.sendSimple(text);
		}else if (status == 1) {
			if(selection==1){
					cm.sendOk("每次答题都有#b"+timeout+"秒钟时间限制#k，超过时间则失败，指定时间内回答错误也失败！点击开始答题后开始记时，在给出的题目中，#r一般有4个选项#k，请输入你认为正确的选项，点击确认即可完成答题.\r\n#r#e注意：每天的50分，#b如（1点50分至1点55分）#r,都可以答题，答题时间为5分钟。每次回答正确后，将会#d随机给你奖励，如冒险币、点卷、活力值、积分或是征服者币！");
					cm.dispose();
					return;
			}
			if(selection==2){
				if((minute >= 0 && minute <= 59)){
					var randx = Math.floor(Math.random() * 2);
					typed = 1;					
					if(randx = 0){
						var randy = Math.floor(Math.random() * itemtk1.length);//取题库1
						tknow = itemtk1[randy];
						cm.sendGetText(Qicon + "#b问题：" + tknow[0] + "\r\n#r============================================#n#k\r\n#d答案1:"+tknow[1]+"\r\n答案2:"+tknow[2]+"\r\n答案3:"+tknow[3]+"\r\n答案4:"+tknow[4]+"\r\n============================================#n#k\r\n#r请输入你认为正确的答案,如果是答案1就填1，答案2就填2\r\n\r\n");
						time1 = cm.getCurrentTime();
					}else{
						var randy = Math.floor(Math.random() * itemtk2.length);//取题库2
						tknow = itemtk2[randy];
						cm.sendGetText(Qicon + "#b问题：" + tknow[0] + "\r\n#r============================================#n#k\r\n#d答案1:"+tknow[1]+"\r\n答案2:"+tknow[2]+"\r\n答案3:"+tknow[3]+"\r\n答案4:"+tknow[4]+"\r\n============================================#n#k\r\n#r请输入你认为正确的答案,如果是答案1就填1，答案2就填2\r\n");
						time1 = cm.getCurrentTime();
					}
				}else{
					cm.sendOk("当前服务器时间:"+hour+"点"+minute+"分\r\n时间还没到哦.整点的50-55分可以答题，例如:\r\n#b1点50分到1点55分\r\n#r而且可以答题的时候，系统会公告，请不要错过。");
					cm.dispose();
				}
			}
			if(selection==3){
				typed = 2;
				var selText = "截至目前为止，您答对的题目总数为:#r"+cm.getPQLog("答题正确") +"道#b\r\n";
				selText += "#L1#" + icon + " 换取(#i5062002#x2#i5062500#x2#i5064000#x1)(需要答对题目128道)#l\r\n";
				selText += "#L2#" + icon + " 换取答题高手勋章(#i1142072#)(需要答对题目400道)#l\r\n";
				selText += "#L3#" + icon + " 换取周年庆100%武器卷轴箱子(#i2431990#)(需要答对题目600道)#l\r\n";
				//selText += "#L4#" + icon + " 换取150级武器箱子(#i2431988#)(需要答对题目800道)#l\r\n\r\n";
				selText += "#e#r注意：第一项换取魔方和卷轴后，不会减少答题数目，但后面的选项会扣掉相应的答题数目！\r\n\r\n";
				cm.sendSimple(selText);
			}
		}else if (status == 2) {
			if(typed == 1){
				cm.setPQLog("答题总数");
				time2 = cm.getCurrentTime();   //取出答题后的时间
				fee = cm.getText();						
				if(selection == tknow[5] || fee == tknow[5]){
					//计算两个时间差
					if ((time2 - time1)/1000 > timeout) {
						cm.sendOk("很遗憾，回答是正确的，但是超时了！\r\n");
						cm.dispose();
						return;
					} 
					var randx = Math.floor(Math.random() * 15) + 1;
					var randy = Math.floor(Math.random() * 200000) + 5000;//冒险币
					var randdj = Math.floor(Math.random() * 100)+100;//点卷
					var randdy = Math.floor(Math.random() * 10) + 5;//点卷
					var randjf = Math.floor(Math.random() * 1) + 1;//积分
					var randred = Math.floor(Math.random() * 15) + 5;//征服币
					cm.setPQLog("答题正确");					
					if(randx < 3){//冒险币
						cm.gainMeso(randy); 						
						cm.sendOk("恭喜，您答对了！#b正确答案:"+tknow[5]+"#k\r\n您获得了 "+randy+" 冒险币.");
						cm.worldSpouseMessage(0x20,"[答题系统]：恭喜 "+ cm.getChar().getName() +" 正确回答<诸葛孔明>的问题~得到 "+randy+" 冒险币~");
					}
					if(randx >= 3 && randx < 6){//点卷
						cm.gainNX(2, randdj);
						cm.sendOk("恭喜，您答对了！#b正确答案:"+tknow[5]+"#k\r\n您获得了 " +randdj+"抵用卷.");
						cm.worldSpouseMessage(0x20,"[答题系统]：恭喜 "+ cm.getChar().getName() +" 正确回答<诸葛孔明>的问题,得到 " +randdj+" 抵用卷~");
					}
					if(randx >= 6 && randx < 9){//活力值
						cm.gainNX(1, randdy);
						cm.sendOk("恭喜，您答对了！#b正确答案:"+tknow[5]+"#k\r\n您获得了 "+randdy+" 点卷");
						cm.worldSpouseMessage(0x20,"[答题系统]：恭喜 "+ cm.getChar().getName() +" 正确回答<诸葛孔明>的问题,得到 "+randdy+" 点卷~");
					}
					if(randx >= 9 && randx < 12){//积分
						//cm.gainPlayerPoints(randjf);
						cm.gainItem(5072000, randjf);
						cm.sendOk("恭喜，您答对了！#b正确答案:"+tknow[5]+"#k\r\n您获得了 " +randjf+" 高质地喇叭.");
						cm.worldSpouseMessage(0x20,"[答题系统]：恭喜 "+ cm.getChar().getName() +" 正确回答<诸葛孔明>的问题,得到 " +randjf+" 高质地喇叭~");
					}
					if(randx >= 12 && randx<= 15){//征服币
						cm.gainItem(4310036, randred);
						cm.sendOk("恭喜，您答对了！#b正确答案:"+tknow[5]+"#k\r\n您获得了 " +randred+" 征服者币.");
						cm.worldSpouseMessage(0x20,"[答题系统]：恭喜 "+ cm.getChar().getName() +" 正确回答<诸葛孔明>的问题,得到 " +randred+" 征服者币~");
					}					
				}else{
					cm.sendOk("很遗憾，回答错误！\r\n");
					//正确答案是：#r[" + tknow[5] + "]、" + tknow[tknow[5]]);
				}
				cm.dispose();
				return;
			}
			if(typed==2){
				if(selection==1){//换取6个魔方和3个防爆卷轴
					if (cm.getPQLog("答题128兑换") < 1){
						if (cm.getPQLog("答题正确") < 128){
							cm.sendOk("抱歉，您今天还没有答对128道题目，请继续努力！\r\n");
							cm.dispose();
							return;
						}
						if (cm.getSpace(2) < 3 || cm.getSpace(5) <2){
							cm.sendOk("您的背包没有空间，请保证消耗栏3空格、特殊栏2空格！\r\n");
							cm.dispose();
							return;
						}
						cm.gainItem(5062002, 2);//神奇魔方
						cm.gainItem(5062500, 2);//神奇魔方
						cm.gainItem(5064000, 1);//防爆卷
						cm.setPQLog("答题128兑换");
						cm.sendOk("恭喜，您使用正确答题数目兑换了#i5062000#x10,#i2531000#x5.");
						cm.worldSpouseMessage(0x20,"[答题系统]:恭喜["+ cm.getChar().getName() +"]用正确答题数目兑换了大量魔方和卷轴~");
					} else {
						cm.sendOk("抱歉，您今天已经领取过了.");
						cm.dispose();
						return;
					}
				} else if (selection == 2){//换取135级武器箱子
					if (cm.getPQLog("答题正确") < 400){
						cm.sendOk("抱歉，您今天还没有答对400道题目，请继续努力！\r\n");
						cm.dispose();
						return;
					}
					if (cm.getSpace(1) < 1){
						cm.sendOk("您的背包没有空间，请至少保证装备栏1空格！\r\n");
						cm.dispose();
						return;
					}
					cm.setPQLog("答题正确", 0, -400);
					cm.gainItem(1142072, 1);//135级武器箱子
					cm.sendOk("恭喜，您使用正确答题数目兑换了答题高手勋章#i1142072#.");
					cm.worldSpouseMessage(0x20,"[答题系统]:恭喜["+ cm.getChar().getName() +"]用正确答题数目兑换了答题高手勋章~");
				} else if (selection == 3){//换取140级武器箱子
					if (cm.getPQLog("答题正确") < 600){
						cm.sendOk("抱歉，您今天还没有答对600道题目，请继续努力！\r\n");
						cm.dispose();
						return;
					}
					if (cm.getSpace(2) < 1){
						cm.sendOk("您的背包没有空间，请至少保证消耗栏1空格！\r\n");
						cm.dispose();
						return;
					}
					cm.setPQLog("答题正确", 0, -600);
					cm.gainItem(2431990, 1);//140级武器箱子
					cm.sendOk("恭喜，您使用正确答题数目兑换了周年庆100%武器攻击卷轴箱子#i2431990#.");
					cm.worldSpouseMessage(0x20,"[答题系统]:恭喜["+ cm.getChar().getName() +"]用正确答题数目兑换了周年庆100%武器攻击卷轴箱子~");
				} else if (selection == 4){//换取150级武器箱子
					if (cm.getPQLog("答题正确") < 800){
						cm.sendOk("抱歉，您今天还没有答对800道题目，请继续努力！\r\n");
						cm.dispose();
						return;
					}
					if (cm.getSpace(2) < 1){
						cm.sendOk("您的背包没有空间，请至少保证消耗栏1空格！\r\n");
						cm.dispose();
						return;
					}
					cm.setPQLog("答题正确", 0, -800);
					//cm.gainItem(2431996, 1);//150级武器箱子					
					cm.sendOk("恭喜，您使用正确答题数目兑换了150级武器箱子#i2431988#.");
					cm.worldSpouseMessage(0x20,"[答题系统]:恭喜["+ cm.getChar().getName() +"]用正确答题数目兑换了150级武器箱子~");
				}				
				cm.dispose();
				return;
			}
		}
	}
}


var itemtk1 = Array(
Array("大煮干丝是哪个菜系的代表菜之一","四川菜系","山东菜系","广东菜系","淮扬菜系","4"),
Array("红茶属于( )茶","半发酵","发酵","不发酵","微发酵","1"),
Array("满汉全席起兴于","清代","唐代","宋代","两汉","1"),
Array("我们服哪个管理员最帅？","哈士奇","哈士奇","哈士奇","哈士奇","-1"),
Array("吃冰淇淋不解渴主要是因为它:","含蛋白质","含脂肪","含糖","含盐","3"),
Array("下列哪项是人体的造血器官?","心脏","骨髓","肾脏","脾脏","2"),
Array("下列哪种球类没有越位的规则?","足球","篮球","冰球","橄榄球","2"),
Array("我国铁路部门规定身高多少的儿童要买全票?","1.2米","1.3米","1.4米","1.5米","3"),
Array("敲门砖一词源于:","考试","拜师","做官","应聘","3"),
Array("工笔是哪种绘画形式的技法","水彩画","油画","水粉画","国画","4"),
Array("冰淇淋是从哪国传进的外来语","英国","法国","美国","俄罗斯","1"),
Array("席梦思三个字源于","人名","地名","字典","文献","1"),
Array("八仙过海中的八仙除铁拐李、张果老、吕洞宾、曹国舅外还有","韩非子、蓝采和、何翠姑、汉钟离","蓝采和、何仙姑、韩非子、汉钟离","韩湘子、蓝采和、何仙姑、红孩儿","韩湘子、蓝采和、何仙姑、汉钟离","4"),
Array("无冕之王的由来与下列哪一个有关","英国《泰晤士报》","法国《费加罗报》","美国《太阳报》","德国《明镜》周刊","1"),
Array("老三届指的是那几年毕业的初、高中毕业生","1964--1966 ","1966--1968 ","1969--1971","1972--1975","2"),
Array("博士作为官名最早出现在","秦","汉","唐","宋","1"),
Array("谬种流传最早是宋朝人批评当时的","官场黑暗","科举制度","社会风气","诗词风格","2"),
Array("《在那遥远的地方》是哪里的民歌","四川民歌","江苏民歌","蒙古民歌","青海民歌","4"),
Array("人体含水量百分比最高的器官是","心脏","肝脏","肾脏","眼球","4"),
Array("人体最大的解毒器官是","胃","肾脏","肝脏","脾脏","3"),
Array("下半旗是把旗子下降到","旗杆的一半处","下降1米","下降1．5米","距离杆顶的1/3处","4"),
Array("下列地点与电影奖搭配不正确的是","戛纳-金棕榈 ","亚洲-金马","洛杉矶-奥斯卡","柏林-圣马克金狮","4"),
Array("下列哪种邮件如果丢失了，邮局不负赔偿责任","平信","挂号信","保价邮件","特快转递邮件","1"),
Array("下面哪种酸，人在品尝时不是酸味的","琥珀酸","苹果酸","柠檬酸","单宁酸","4"),
Array("土豆不宜存放在什么地方","干燥处","通风处","日光照射处","卧室内","3"),
Array("小华家的电灯丝断了，他把灯泡晃了晃使灯丝又搭上了，再用的时候会发现","灯比原来亮了","灯比原来暗了","跟原来一样","灯不亮了","1"),
Array("飞机票头等舱的票价一般为普通舱票价的","200%","180%","150%","130%","3"),
Array("马拉松赛跑中的马拉松一词是指","人名","地名","书本名","文献名","1"),
Array("中国无声影片的最高峰《神女》是谁的代表作","阮玲玉","王人美","上官云珠","张瑞芳","1"),
Array("中国民间送灶神时要吃粘牙的甜食，这是为了","容易打发小孩子","是灶神喜欢的食品","甜为吉利","用糖粘住灶神的牙","4"),
Array("中国抗日战争中，最早为抗击日寇牺牲的中国将领是","张治中","张自忠","赵登禹","左权","3"),
Array("中国铁路车票一般分为几种","3种","4种","5种","6种","1"),
Array("什么时间吃水果比较好","起床后","睡觉前","吃饭前","吃饭后","3"),
Array("从何时起，对最高统治者称王","夏","商","周","春秋","2"),
Array("方便面里必然有哪种食品添加剂","防腐剂","合成抗氧化剂","食用色素","甜蜜素","2"),
Array("父母和一个已婚子女及其配偶、后代所组成的家庭属于什么类型的家庭","复合家庭","单身家庭","核心家庭","直系家庭","4"),
Array("世界上最大最贵的钻石藏在","中国紫禁城","英国王室","法国卢浮宫","美国华尔街","2"),
Array("世界上最高的立式佛像--巴米杨佛在哪个国家","印度尼西亚","伊拉克","阿富汗","中国","3"),
Array("仙人掌进行光合作用是依靠","根","茎","叶","花","3"),
Array("以下哪一类茶是半发酵茶","红茶","绿茶","乌龙茶","花茶","3"),
Array("古时戒指用来表示","荣誉","富贵","禁戒","婚否","3"),
Array("汉朝最先下诏废除肉刑的皇帝是","汉武帝","汉成帝","汉文帝","汉景帝","3"),
Array("全世界最大的石佛像在","四川乐山","河南洛阳","四川屏山","四川江津","1"),
Array("吃太多手摇爆米花机爆出的米花会导致","锡中毒","铅中毒","汞中毒","银中毒","2"),
Array("在英语当中，哪两个字母的出现频率最高","e.t","t.h","h.m","m.e","1"),
Array("多大的数字被称为天文数字","千万以上","亿以上","百亿以上","千亿以上","2"),
Array("有植物熊猫之称的是","银杏","银杉","云杉","红豆杉","2"),
Array("自来水表上的一度水表示耗水量为","100公斤水","1000公斤水","1吨水","1立方米水","4"),
Array("西印度群岛位于","印度洋","大西洋","太平洋","地中海","2"),
Array("我国最先出现的纸币是","元代宝钞","元代交子","宋代宝钞","宋代交子","4"),
Array("只获得过1次诺贝尔奖的有","居里夫人","格林加德","桑格","巴丁","2"),
Array("麦当劳的经营方式是什么","直营连锁","特许加盟","特许经营","加盟连锁","3"),
Array("味精的主要成分是什么","谷氨酸钠","醋酸","氯化钠","碘化钠","1"),
Array("狗热时用什么散热","皮肤","舌头","鼻子","耳朵","2"),
Array("现在美国国旗星条旗上有多少颗星","25","30","50","60","3"),
Array("苹果中含有增强记忆力的微量元素是","铁","锌","钙","钠","2"),
Array("陕西乾陵武则天墓碑上有几个字","1000","899","699","0","4"),
Array("鱼、蛙、蛇等冷血动物的体温是","冷的","随外界的温度变化而变化","随体形的大小变化而变化","热的","2"),
Array("举世闻名的泰姬陵在","泰国","印度","柬埔寨","老挝","2"),
Array("俗称四不象的动物是","麋鹿","白唇鹿","斑马","梅花鹿","1"),
Array("按照风俗习惯戒指带在中指上表示","正在寻找对象","正在恋爱之中","表示独身","表示离婚","2"),
Array("树干为什么常常刷成白色","防火","灭菌","放虫","保暖","2"),
Array("洗鱼后手上有腥味用下列哪种东西可以去除","肥皂","牙膏","奶粉","自来水","2"),
Array("相传我国古代能作掌上舞的人是","杨玉环","赵飞燕","西施","貂蝉","2"),
Array("美国的那斯达克股票市场属于","主板股票市场","创业板股票市场","权重板股票市场","期货市场","2"),
Array("骨折时伴随休克发生，应先治","骨折","休克","止痛","止血","2"),
Array("射出去的子弹头是怎么飞行","直线","旋转","弧线","交叉线","2"),
Array("被公认为体育运动和健美体魄象征的雕像是","大卫","维纳斯","掷铁饼者","思想者","3"),
Array("菊花在秋天开，如果把菊花一直放在温暖的环境里，这些菊花会怎么样","全开花","全不开花","开一半的花","全部死掉","2"),
Array("智力的核心是","机械记忆能力","注意力","抽象思维能力","观察力","3"),
Array("最初糖果的糖取自","甜菜","蜂蜜","甘蔗","萝卜","2"),
Array("遗产继承的第二顺序是","祖父母、外祖父母、兄弟姐妹","兄弟姐妹、外祖父母、祖父母","兄弟姐妹、祖父母、外祖父母","祖父母、兄弟姐妹、外祖父母","3"),
Array("数学符号中的0起源于","古印度","古希腊","古埃及","古罗马","1"),
Array("馒头起源于","东方","南方","西方","北方","2"),
Array("醋放久了会生白，为了防止其生白，最好在醋内加一些黄酒后再掺入少许","姜末","白糖","精盐","味精","3"),
Array("燕窝中最珍贵的是","官燕","毛燕","血燕","白燕","3"),
Array("感冒忌用下列哪一种食物","海鱼","豆浆","青菜","生姜","1"),
Array("老年人一天吃几只鸡蛋才合适","2","1－2","1","2－3","2"),
Array("柠檬汁有哪些营养含量","维生素A和维生素C","维生素B1和维生素C","维生素C ","维生素B6","1"),
Array("酒中含有酒精，饮酒过多或经常饮酒，会造成酒精中毒，使身体受损，那么，饮酒对人体的哪些器官最为有害？","眼睛","皮肤","心脏","肺","3"),
Array("关于合理饮食有利于健康的下列说法正确的是","没有水就没有生命","饮用水越纯净越好","养成良好的饮食习惯，多吃蔬菜、水果等碱性食物","调味剂和营养剂加得越多越好","3"),
Array("低盐饮食有利于预防什么疾病？","乙型肝炎","糖尿病","高血压","贫血","3"),
Array("碘缺乏会导致儿童、青少年","甲亢","无力","心理疾病","生长发育和智力受影响","4"),
Array("夏季在烈日下工作或运动量过大出汗多时，为预防中暑应多喝","糖水","糖醋水","盐开水","白开水","3"),
Array("烧菜时最好在何时加碘盐以减少碘的损失？","烧菜前用碘盐爆锅","烧菜加水后","烧菜加水前","菜将出锅时","4"),
Array("某人由于营养不良，身体浮肿，其食疗补救措施是","多吃蔬菜","多喝豆汁","多吃馒头","多喝水","2"),
Array("下列不属于营养物质的是","食物中的葡萄糖","肝糖元分解形成的葡萄糖","饮水中的碘","食物中的胡萝卜素","2"),
Array("下列关于营养物质的叙述中，正确的是","营养物质摄入过多时，一定使人发胖","营养物质摄入过多时，一定排出","营养物质摄入过多时，氧化分解加强，释放能量多","在人体内可以利用必需氨基酸合成非必需氨基酸","4"),
Array("某小学组织学生体检时发现一学生头围较小，智商较低，情感淡漠。据老师反映该学生书写困难，学习能力差。其原因是","婴幼儿时期严重营养不良","严重缺钙","儿童时期营养不良","缺锌","1"),
Array("在人的一生中，脑发育的最关键时期是","胎儿期和婴儿期","婴儿期和儿童期","儿童期和青春期","青春期和婴儿期","1"),
Array("有关维生素的叙述不正确的是","是维持机体新陈代谢必不可少的物质","是构建机体组织和调节机体生理功能必不可少的物质","是某些特殊生理功能所不可缺少的物质","绝大多数维生素不能在人体内合成","2"),
Array("自然界中，有智慧元素之称的是","铁","碘","钙","锌","2"),
Array("食品的保质期是指它的","生产日期","最终食用期","最佳食用期","出厂日期","3"),
Array("下列说法中不正确的是","长期多食鸡蛋会导致胆固醇偏高","空腹不宜饮茶","死鳝鱼、死甲鱼、死螃蟹只要做熟了还是能吃的","关节炎患者不宜吃海鲜时喝啤酒","3"),
Array("绿色食品、有机食品、无公害农产品标准对产品的要求由高到低依次排列为","绿色食品、有机食品、无公害食品","有机食品、绿色食品、无公害食品","绿色食品、无公害食品、有机食品","无公害食品、有机食品、绿色食品","2"),
Array("以下哪种食品可以食用?","发霉的茶叶","发芽的土豆","变绿的豆芽","变红的汤圆","3"),
Array("豆浆又叫植物奶，被国际营养协会评定为健康食品和世界六大营养饮料之一。但是喝豆浆也有注意事项，以下正确的食用方法是","喝没有煮沸的豆浆","豆浆中冲入鸡蛋","喝豆浆时搭配其他食物","用保温瓶长时间储存豆浆","3"),
Array("亚硝酸盐属剧毒类化学物质，又叫工业用盐，如酸菜中就含一定量的亚硝酸盐，吃酸菜时最好吃一些什么，可减少亚硝酸盐的危害。","绿色食品","新鲜蔬菜","富含维生素c的水果","各种杂粮","3"),
Array("郊游时，看见野生蘑菇，您应该怎么做？","采下来带回家食用","凭经验判断无毒的就可带回家食用","咨询围人后感觉安全再食用","野生的蘑菇不安全，不采摘也不食用","4"),
Array("出现食物中毒症状或者误食化学品时，最先采取的急救措施是","催吐","吃止泻药物","进行人工呼吸","向卫生防疫部门报告","1"),
Array("铜器与什么不宜长久接触，否则会产生铜绿。用生有铜绿的铜器盛放食品或烹炒菜肴易中毒。","酱油","花椒面","味精","醋","4"),
Array("如将电线插头脱离插座，以下哪一项是安全的做法？","用工具猛力撬出","用力拉引电线，使插头脱离插座","小心地用手把插头从插座拔出来","用钳子把插头拉出来","3")
);

var itemtk2 = Array(
Array("有生命物质(即生物)和无生命物质的根本区别是","反应性","反映形式","感应性","信号性反应","3"),
Array("人以感知、记忆、思维等心理活动过程为基础的系统整体对自己身心状态与外界环境变化的觉知和认识是","思维活动","语言活动","认识活动","意识活动","4"),
Array("教育学研究的对象是","教育现象","教育方针","教育政策","教育理论","1"),
Array("标志着教育学作为一门独立的学科开始形成的教育论著是","《学记》","《普通教育学》","《大教学论》","《教育论》","3"),Array("下列不属于骑士七技的范围的是","骑马","投枪","音乐","吟诗","3"),
Array("蓬生麻中,不扶而直；白沙在涅,与之俱黑反映了对人的发展的影响的是","教育","环境","遗传","主观努力","2"),
Array("学校体育的最为基本的组织形式是","早操、课间操","体育课","体育竞赛","学生自觉锻炼","2"),
Array("教学过程是一种特殊的","心理过程","信息过程","逻辑过程","认识过程","4"),
Array("要尽量多地要求一个人,也要尽可能多地尊重一个人所体现的德育原则是","从学生实际出发的原则","知行统一的原则","尊重、信任学生与严格要求学生相结合的原则","集体教育和个别教育相结合的原则","3"),
Array("布鲁纳所倡导的发现学习的教学方法是一种","以直观感知为主的教学方法","以实际训练为主的教学方法","以探究活动为主的教学方法","以情感陶冶为主的教学方法","3"),
Array("班主任工作计划一般包括","学期计划和具体活动计划","全面计划和专题计划","课内计划和课外计划","教学工作计划和思想工作计划","1"),
Array("在三结合教育中,占主导地位的是","家庭教育","学校教育","自我教育","社会教育","2"),
Array("学校对学生进行德育的重要而又特殊的途径是","课外校外教育","各科教学","社会实践活动","班主任工作","4"),
Array("长期以来的教育实践证明,学校工作必须做到","以教学为主","教学、科研并重","教学、科研、生产三中心","所有时间用于搞教学","1"),
Array("班级授课制在我国正式实行一般认为是在","唐朝中期","明朝中期 ","清朝末年","辛亥革命以后","3"),
Array("中国历史上最早提出教学相长的著作是","《大学》","《中庸》","《学记》","《春秋》","1"),
Array("实用主义教育流派的代表人物是","夸美纽斯","赫尔巴特","裴斯泰洛齐","杜威","4"),
Array("教育心理起源论认为教育起源于","生产劳动","模仿","语言","动物本能","2"),
Array("普通中小学经常组织诸如生物、物理、航模等兴趣小组,主要是为了","深化课堂教学","培养竞赛人才","因材施教,发展青少年个性特长","充分发掘学有余力的学生的学习潜力","3"),
Array("西汉初期实行的罢黜百家,独尊儒术的文教政策体现了教育的","永恒性","历史性","相对独立性","继承性","2"),
Array("学生在教育过程中,处于","主导地位","主体地位","被动地位","辅助地位","2"),
Array("教学过程的中心环节是","感知教材、形成表象","理解教材、形成概念","巩固与保持知识","运用知识,形成技能技巧","2"),
Array(".班集体形成的主要标志之一是","成立了班委会","开展了班级工作","形成了正确舆论","确定了班级工作计划","3"),
Array("英国教育家斯宾塞的教育代表作是","《爱弥儿》","《人的教育》","《教育漫话》 ","《教育论》","4"),
Array("孟母三迁的故事说明了哪种因素对人发展的影响?","遗传","环境","教育","社会活动","2"),
Array("毛泽东同志在1957年首次提出的我国社会主义的教育目的是","培养有社会主义觉悟有文化的劳动者","培养德智体全面发展的社会主义新人","培养又红又专的社会主义接班人","培养脑体结合的社会主义建设者","1"),
Array("教学工作的中心环节是","备课","上课","课外辅导","检查评定成绩","2"),
Array("被称为世界上第一部研究教育的专著是","《教育没话》 ","《教育学》","《学记》","《雄辩术原理》","3"),
Array("()年,颁布了《中华人民共和国义务教育法》","1985","1986","1988","1993","2"),
Array("我国目前主要由下列哪一主体承担普及九年义务教育的责任?","地方","中央","社会力量","学生家长","1"),
Array("智力可以分解为多种因素,下列哪种因素是智力的核心?","观察力","想像力","思维力","判断力","3"),
Array("学为人师,行为世范体现了教师工作的","复杂性、创造性","连续性、广延性","长期性、间接性  ","主体性、示范性","4"),
Array("学而时习之体现的教学原则是","理论联系实际的原则","启发性原则","循序渐进的原则","巩固性原则","4"),
Array("三军可夺帅,匹夫不可夺志说的是","道德认识","道德情感","道德意志","道德行为","3"),
Array("三结合的教育一般是指","学校、家庭、社会教育三结合","班主任、科任教师和家长教育三结合","校长、教师和家长教育三结合","家庭、环境和学校教育三结合","1"),
Array(".孔子说：其身正,不令而行；其身不正,虽令不从.这反映教师劳动的哪种特点?","主体性","创造性","间接性","示范法","4"),
Array("近代教育史上,是下列哪一位教育家首次试图把教育学建立在心理学和哲学的基础之上","夸美纽斯","赫尔巴特","杜威","洛克","2"),
Array("赞科夫在《教学与发展》一书中提出五条新的教学原则,不在此列的一条是","高难度原则","高速度原则","理论知识起主导作用的原则","循序渐进原则","4"),
Array("体育的根本任务是","通过体育对学生进行思想品德教育","增强学生体质","向学生传授体育和卫生的基本知识和基本技能","向国家输送优秀运动员","2"),
Array("我国实行的第一个现代学制是","壬寅学制","癸卯学制","壬子癸丑学制","壬戌学制","2"),
Array("班级授课制的实施在我国始于","唐代","清末","民国初期","新中国成立","2"),
Array("哪个社会的教育具有教育与生产劳动相脱离的特点","原始社会","古代社会","资本主义","社会主义","2"),
Array("在古代欧洲,曾经出现过一种旨在培养多方面发展的人的和谐教育,它是","斯巴达教育","雅典教育","教会教育","骑士教育","2"),
Array("学生既是教育的对象,又是教育过程中的主体.学生主体作用的最高表现形式为","自觉性","独立性","创造性","主动性","3"),
Array("德育过程的基本矛盾是","知与行的矛盾","外界多种良莠掺杂的教育影响之间的矛盾","教育者提出的德育要求与受教育者已有的品德基础之间的矛盾","学生的上进心与情性之间的矛盾","3"),
Array("教育要适应人的发展的个别差异性,做到","循序渐进","因材施教","教学相长","防微杜渐","2"),
Array("狭义的教育制度是指","国民教育制度","社会教育制度","高等教育制度","学校教育制度","4"),
Array("古希腊斯巴达教育比较重视","军事体操教育","政治哲学教育","天文数学教育 ","全面发展教育","1"),
Array("我国首次把美育列为教育的重要组成部分是在","1911年","1912年","1957年","1958年","2"),
Array("我国颁布实行的壬戌学制是在","1902年","1903年","1912年","1922年","4"),
Array("学校工作必须坚持以","教学为主","德育为主","教师为主","学生为主","1"),
Array("前苏联教育家马卡连柯所倡导的平行教育的德育原则是指","知行统一原则","尊重信任与严格要求学生相结合原则","教育影响的一致性与连贯性原则","集体教育与个别教育相结合的原则","4"),
Array("89.课外校外教育与课堂教学的共同之处在于它们都是","师生共同参加的","学生自愿选择的","有目的、有计划、有组织的","受教学计划、教学大纲规范的","3"),
Array("得道者多助，失道者寡助。出自","《礼记》","《老子》","《孟子》","《孙子》","3"),
Array("温故而知新，可以为师矣。出自 ","《论语》","《庄子》","《礼记》","《孟子》","1"),
Array("满园春色关不住，一枝红杏出墙来出自叶绍翁的","《游园不值》","《春望》","《春夜喜雨》","《梦游》","1"),
Array("《赋得古原草送别》是（）的作品","李白","杜甫","白居易","陈天桥","3"),
Array("先天下之忧而忧，后天下之乐而乐出自（）的文章","文天祥","辛弃疾","范仲淹","范玮琪","3"),
Array("《七步诗》的作者是","曹操","曹丕","曹植","曹格","3"),
Array("海內存知己，天涯若比邻是（）的诗句。","王勃","李白","白居易","杜甫","2"),
Array("我住长江头，君住长江尾是（）的诗句","李白","苏轼","李之仪","芙蓉姐姐","2"),
Array("昔人已乘黄鹤去，此地空余黄鹤楼是（）的诗句","李白","崔颢","王维","马化腾","2"),
Array("《黔之驴》是（）的作品","韩非子","王安石","柳宗元","崔永元","3"),
Array("独在异乡为异客，每逢佳节倍思亲是（）的诗句","王维","王之涣","王勃","王心凌","1"),
Array("《陋室铭》的作者是","韩愈","刘禹锡","欧阳修","刘德华","2"),
Array("著名边塞诗《白雪歌送武判官归京》的作者是","王翰","高适","岑参","陈奕迅","3"),
Array("学然后知不足，教然后知困。出自","《论语》","《荀子》","《礼记》","《老子》","3"),
Array("屈原是伟大的爱国诗人，他是","春秋时期楚国人","战国时期楚国人","唐朝人","清朝人","2"),
Array("《史记》的作者司马迁是（）代著名史学家","宋","汉","明","清","2"),
Array("我国最早的诗歌总集是","《古诗十九首》","《诗经》","《离骚》","《古诗十八首》","2"),
Array("大诗人陶渊明是（）时期人","东汉","三国","东晋","唐朝","3"),
Array("《孟子》是（）重要经典人物之一","儒家","法家","道家","武家","1"),
Array("（）是与岑参齐名的唐代著名边塞诗人。","王翰","高适","李贺","刀郎","2"),
Array("晓镜但愁云鬓改，夜吟应觉月光寒出自（）的《无题》。","李贺","李清照","李商隐","李宇春","3"),
Array("人有悲欢离合，月有阴晴圆缺，此事古难全。出自苏轼的","《江城子》","《江城子》","《念奴娇》","《庄子》","2"),
Array("先帝创业未半，而中道崩殂。这句话出自（）的《前出师表》","诸葛亮","曹操","杜甫","济公","1"),
Array("三十功名尘与土，八千里路云和月。是（）的词句","岳飞","辛弃疾","陆游","小沈阳","1"),
Array("《兰亭集序》是（）的著名作品","王勃","苏轼","王羲之","周杰伦","3"),
Array("古诗《游子吟》的作者是","贾岛","孟郊","孟浩然","凤凰传奇","2"),
Array("两情若是久长时，又岂在朝朝暮暮是（）词作中的名句","秦观","李清照","柳永","张杰","1"),
Array("李煜是南唐最后一位君主，也是唐五代成就最高的","诗人","词人","散文家","艺人","2"),
Array("南宋豪放派代表词人是","辛弃疾","苏轼","陆游","屠洪纲","3"),
Array("《少年中国说》的作者是","康有为","梁启超","谭嗣同","后弦","2"),
Array("一片冰心在玉壶，出自（）的诗","王昌龄","李白","高适","阿杜","1"),
Array("《窦娥冤》的作者是","白居易","关汉卿","汤显祖","李白","2"),
Array("我劝天公重抖擞，不拘一格降人才，的作者龚自珍是（）人","宋朝","清朝","明朝","唐朝","2"),
Array("《文心雕龙》的作者是","刘向","刘勰","曹丕","陈小春","2"),
Array("《春江花月夜》是（）的著名作品","张继","张九龄","张若虚公","张柏芝","3"),
Array("国际社会公认的第一礼俗是","女士优先","尊重原则","宽容的原则","男士优先","1"),
Array("正确握手的时长一般为","3-4秒","5-6秒","10秒","24小时","1"),
Array("女士携带的手提包,在正式宴会就餐期间应","放在背部与椅背之间","挂在自己椅子的靠背上","挂在衣架上","提在手上","1"),
Array("宴会上,为表示尊重,主宾的座位应","在主人的右侧","在主人的左侧","随其所好","都可以","1"),
Array("使用餐巾时,不可以用餐巾来","擦嘴角的油渍","擦手上的油渍","擦脸上的油渍","擦拭餐具","4"),
Array("不分年龄辈份的差异而结成的好朋友称","世交","莫逆交","忘年交","年忘交","3"),
Array("在涉外交往中,对外国部长以上的高级官员可称为","陛下","殿下","阁下","尊下","3"),
Array("初次见面时,客套话称","久仰","久违","久别","久爱","1"),
Array("下列几种花中,()花最适合赠送给母亲","玫瑰","月季","康乃馨","喇叭花","4"),
Array("别人给你服务,做事和帮忙,无论给你的帮助多么微不足道,都要说","谢谢","请","对不起","滚","1"),
Array("结婚时所行的三拜礼的三拜是","一拜天地 二拜高堂 三拜亲友","一拜天地  二拜高堂  三新人交拜","一拜高堂 二拜天地 三夫妻对拜","一拜天地 二拜亲友 三夫妻对拜","2"),
Array("三星高照作为我国古代的祝福用语,其中三星是指","福星,禄星,寿星","冥王星,海王星,北斗星","启明星,智多星,北斗星","星爷,星哥,周星星","1"),
Array("我国古代的拜年一词特指行为","向长辈叩岁","平辈相互道贺","亲戚互相走动","馈赠礼品","1"),
Array("我国古代的贺年一词特指行为","向长辈叩岁","平辈相互道贺","亲戚互相走动","馈赠礼品","2"),
Array("被认为是我国古代中华民族共有的崇拜物是","麒麟","龙","虎","彪","2"),
Array("醉翁之意不在酒中的醉翁是指","陶渊明","欧阳修","李白","张学友","2"),
Array("（）是我国最早的一部诗歌总集，共收录周代诗歌305篇","唐诗","宋词","乐府诗","诗经","4"),
Array("（）是战国时代的伟大诗人屈原创造的一种诗体","唐诗","宋词","楚词","诗经","3"),
Array("（）是指由朝廷乐府系统或相当于乐府职能的音乐管理机关搜集、保存而流传下来的汉代诗歌","唐诗","宋词","两汉乐府诗","诗经","3"),
Array("（）描写的是从东汉末年到西晋初年之间近一百年的历史风云","《三国演义》","《水浒传》","《西游记》","《红楼梦》","1"),
Array("笔墨纸砚是文房四宝。四宝又以（）为首。","笔","墨","纸","砚","4"),
Array("中秋节的习俗很多，形式也各不相同，但都寄托着人们对生活无限的热爱和对美好生活的向往。最早记载中秋节吃月饼的习俗是在（）","西汉","唐代","宋代","元代","2"),
Array("每逢佳节倍思亲，这里的佳节指的是","春节","七夕节","重阳节","中秋节","3"),
Array("农历的十月初一是（），源于秦时孟盖女为被抓去修万里长城的丈夫送寒衣的民间传说","寒食节","寒衣节","上工节","缝衣","2")
);

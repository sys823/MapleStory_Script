var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);//������ڣ��������� 1 ��������ȥ���������� 7��
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var min = ca.get(java.util.Calendar.MINUTE);//��÷���
var sec = ca.get(java.util.Calendar.SECOND); //�����
var setupTask;
var probability = 200.0;//���ʼ�1000/10000=0.1
var Hfish = 2.0;//�߼������������
var Lfish = 1.0;//��ͨ�����������
var YZ = 1.3;//����������������
var ff = [];
var xs = "�ճ�";
//var fish = [4031633];
var fish = [
4031627,4031627,4031627,4031627,4031627,4031627,4031627,4031627,4031627,4031627,
4031628,4031628,4031628,4031628,4031628,4031628,4031628,4031628,4031628,4031628,
4031630,4031630,4031630,4031630,4031630,4031630,4031630,4031630,4031630,4031630,
4031630,4031630,4031630,4031630,4031630,4031630,4031630,4031630,4031630,4031630,
4031631,4031631,4031631,4031631,4031631,4031631,4031631,4031631,4031631,4031631,
4031633,4031633,4031633,4031633,4031633,4031633,4031633,4031633,4031633,4031633,
4031634,4031634,4031634,4031634,4031634,4031634,4031634,4031634,4031634,4031634,
4031635,4031635,4031635,4031635,4031635,4031635,4031635,4031635,4031635,4031635,
4031636,4031636,4031636,4031636,4031636,4031636,4031636,4031636,4031636,4031636,
4031637,4031637,4031637,4031637,4031637,4031637,4031637,4031637,4031637,4031637,
4031638,4031638,4031638,4031638,4031638,4031638,4031638,4031638,4031638,4031638,
4031639,4031639,4031639,4031639,4031639,4031639,4031639,4031639,4031639,4031639,
4031640,4031640,4031640,4031640,4031640,4031640,4031640,4031640,4031640,4031640,
4031641,4031641,4031641,4031641,4031641,4031641,4031641,4031641,4031641,4031641,
4031642,4031642,4031642,4031642,4031642,4031642,
4031643,4031643,4031643,4031643,4031643,4031643,
4031644,4031644,4031644,4031644,4031644,4031644,
4031645,4031645,4031645,4031645,4031645,4031645,
4031646,4031646,4031646,4031646,4031646,4031646,
4031647,4031647,4031647,4031647,4031647,4031647,
4031648,4031648,4031648,4031648,4031648,4031648,
4031627,4031627,4031627,4031627,4031627,4031627,4031627,4031627,4031627,4031627,
4031628,4031628,4031628,4031628,4031628,4031628,4031628,4031628,4031628,4031628,
4031630,4031630,4031630,4031630,4031630,4031630,4031630,4031630,4031630,4031630,
4031630,4031630,4031630,4031630,4031630,4031630,4031630,4031630,4031630,4031630,
4031631,4031631,4031631,4031631,4031631,4031631,4031631,4031631,4031631,4031631,
4031633,4031633,4031633,4031633,4031633,4031633,4031633,4031633,4031633,4031633,
4031634,4031634,4031634,4031634,4031634,4031634,4031634,4031634,4031634,4031634,
4031635,4031635,4031635,4031635,4031635,4031635,4031635,4031635,4031635,4031635,
4031636,4031636,4031636,4031636,4031636,4031636,4031636,4031636,4031636,4031636,
4031637,4031637,4031637,4031637,4031637,4031637,4031637,4031637,4031637,4031637,
4031638,4031638,4031638,4031638,4031638,4031638,4031638,4031638,4031638,4031638,
4031639,4031639,4031639,4031639,4031639,4031639,4031639,4031639,4031639,4031639,
4031640,4031640,4031640,4031640,4031640,4031640,4031640,4031640,4031640,4031640,
4031641,4031641,4031641,4031641,4031641,4031641,4031641,4031641,4031641,4031641,
4031642,4031642,4031642,4031642,4031642,4031642,
4031643,4031643,4031643,4031643,4031643,4031643,
4031644,4031644,4031644,4031644,4031644,4031644,
4031645,4031645,4031645,4031645,4031645,4031645,
4031646,4031646,4031646,4031646,4031646,4031646,
4031647,4031647,4031647,4031647,4031647,4031647,
4031648,4031648,4031648,4031648,4031648,4031648,
//������
2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,
2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,
2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,
2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,
2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,
2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,
2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,
2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,
2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,
2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,
2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,
2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,
2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,
2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,2431690,
//������
4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,
4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,
4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,
4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,
4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,
4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,
4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,
4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,
4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,
4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,
4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,
4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,4001200,
//����
2431055,2431055,2431055,2431055,2431055,2431055,2431055,2431055,2431055,2431055,
2431055,2431055,2431055,2431055,2431055,
2431055,2431055,2431055,2431055,2431055,2431055,2431055,2431055,2431055,2431055,
2431055,2431055,2431055,2431055,2431055,
//δ֪����
2431004,2431004,2431004,2431004,2431004,2431004,2431004,2431004,2431004,2431004,
2431004,2431004,2431004,2431004,2431004,2431004,2431004,2431004,2431004,2431004,
2431004,2431004,2431004,2431004,2431004,2431004,2431004,2431004,2431004,2431004,
2431004,2431004,2431004,2431004,2431004,2431004,2431004,2431004,2431004,2431004,
//�������ٻ���
2101120,2101120,2101120,2101120,2101120,2101120,2101120,2101120,2101120,2101120,
2101120,2101120,2101120,2101120,2101120,2101120,2101120,2101120,2101120,2101120,
//�سɾ�
2040006,2040006,2040006,//ͷ�������سɾ�
2040007,2040007,2040007,//ͷ�������سɾ�
2040303,2040303,2040303,//���������سɾ�
2040403,2040403,2040403,//���·����سɾ�
2040506,2040506,2040506,//ȫ���������ݱسɾ�
2040507,2040507,2040507,//ȫ�����׷����سɾ�
2040603,2040603,2040603,//��ȹ�����سɾ�
2040709,2040709,2040709,//Ь�����ݱسɾ�
2040710,2040710,2040710,//Ь����Ծ�سɾ�
2040711,2040711,2040711,//Ь���ٶȱسɾ�
2040806,2040806,2040806,//�������ݱسɾ�
2040903,2040903,2040903,//���Ʒ����سɾ�
2041024,2041024,2041024,//����ħ�������سɾ�
2041025,2041025,2041025,//�������������سɾ�
2043003,2043003,//���ֽ������سɾ�
2043103,2043103,//���ָ������سɾ�
2043203,2043203,//���ֶ��������سɾ�
2043303,2043303,//�̽������سɾ�
2043703,2043703,//���ȹ����سɾ�
2043803,2043803,//���ȹ����سɾ�
2044003,2044003,//˫�ֽ������سɾ�
2044019,2044019,//˫�ֽ�ħ���سɾ�
2044103,2044103,//˫�ָ������سɾ�
2044203,2044203,//˫�ֶ��������سɾ�
2044303,2044303,//ǹ�����سɾ�
2044403,2044403,//ì�����سɾ�
2044503,2044503,//�������سɾ�
2044603,2044603,//�󹥻��سɾ�
2044703,2044703,//ȭ�׹����سɾ�
2044815,2044815,//ָ�ڹ����سɾ�
2044908,2044908,//��ǹ�����سɾ�
2049005,2049005,2049005,2049005,2049005,//��ҽ���ᡪ��
2049750,2049750,//S��Ǳ�ܾ���80% 
2049751,2049750,//S��Ǳ�ܾ���60%
//��ͨ������߼����
2300001,2300001,2300001,2300001,2300001,2300000,2300000,2300000,2300000,2300000,
//������ĸ
3994641,3994641,3994641,3994641,3994641,
3994642,3994642,3994642,3994642,3994642,
3994643,3994643,3994643,3994643,3994643,
3994644,3994644,3994644,3994644,3994644,
3994645,3994645,3994645,3994645,3994645,
//ף������
2340000,2340000,2340000,
//���
1442039,1442039,1442039,1442039,1442039,//������	
1442018,1442018,1442018,1442018,1442018,//������
1012477,//���ζѩ��	
1012420,//ˮ����ݮζѩ��	
1012419,//���ζѩ��	
1012417,//�ɿ���ѩ��	
1012418,//����ζѩ��	
1012416,//��ݮѩ��	
1012073,//����ѩ��	
1012071,//�ɿ���ѩ��	
1012072,//���ѩ��	
1012070,//��ݮѩ��	
1012268,//����ѩ��	
1012267,//���ѩ��
//������
2022643,2022643,2022643,2022643,//Ѭ������ 
2022645,2022645,2022645,2022645,//��ζ���������	10��������Ծ��/�ƶ��ٶ� +10
2022646,2022646,2022646,2022646,//��������10�����ڻر���/������ +10
2022779,2022779,2022779,2022779,//���Ϳ�����	10�����ڻر�ֵ���400��
2022265,2022265,2022265,2022265,//�������	15�������������������30��ħ�����������30��
2431046,2431046,2431046,2431046,2431046,2431046,2431046,2431046,2431046,2431046,//���غ������(����)
2450021,2450021,2450021,2450021,2450021,//1.5������
2003568,//�߼�������ҩ ���
2003570,2003570,2003570,2003570,//3��������ҩ  �ڶ�
2003571,2003571,//5��������ҩ  ����
2003572,2003572,2003572,2003572,2003572//������ҩ     ��С
];
var fishname = [
//�ܵ��������㣬����
[4031627, "����(3cm)"], [4031628, "����(120cm)"], [4031630, "����(30cm)"], [4031631, "����(150cm)"], [4031633, "����(3.6cm)"], [4031634, "����(5cm)"], [4031635, "����(6.5cm)"], [4031636, "����(10cm)"], [4031637, "����(53cm)"], [4031638, "����(60cm)"], [4031639, "����(100cm)"], [4031640, "����(113cm)"], [4031641, "����(128cm)"], [4031642, "����(131cm)"], [4031643, "����(140cm)"], [4031644, "����(148cm)"], [4031645, "����(166cm)"], [4031646, "����(183cm)"], [4031647, "����(227cm)"], [4031648, "����(288cm)"], [4001200, "С��"], [3994641, "����<M>"], [3994642, "����<A>"], [3994643, "����<P>"], [3994644, "����<L>"], [3994645, "����<E>"], [2101120, "������ٻ���"], [2431055, "����"], [2049750, "S��Ǳ�ܾ��� 80%"], [2049751, "S��Ǳ�ܾ��� 60%"], [2040006, "ͷ�������سɾ�"], [2040007, "ͷ�������سɾ�"], [2040303, "���������سɾ�"], [2040403, "���·����سɾ�"], [2040506, "ȫ���������ݱسɾ�"], [2040507, "ȫ�����׷����سɾ�"], [2040603, "��ȹ�����سɾ�"], [2040709, "Ь�����ݱسɾ�"], [2040710, "Ь����Ծ�سɾ�"], [2040711, "Ь���ٶȱسɾ�"], [2040806, "�������ݱسɾ�"], [2040903, "���Ʒ����سɾ�"], [2041024, "����ħ�������سɾ�"], [2041025, "�������������سɾ�"], [2043003, "���ֽ������سɾ�"], [2043103, "���ָ������سɾ�"], [2043203, "���ֶ��������سɾ�"], [2043303, "�̽������سɾ�"], [2043703, "���ȹ����سɾ�"], [2043803, "���ȹ����سɾ�"], [2044003, "˫�ֽ������سɾ�"], [2044019, "˫�ֽ�ħ���سɾ�"], [2044103, "˫�ָ������سɾ�"], [2044203, "˫�ֶ��������سɾ�"], [2044303, "ǹ�����سɾ�"], [2044403, "ì�����سɾ�"], [2044503, "�������سɾ�"], [2044603, "�󹥻��سɾ�"], [2044703, "ȭ�׹����سɾ�"], [2044815, "ָ�ڹ����سɾ�"], [2044908, "��ǹ�����سɾ�"], [1012477, "���ζѩ��"], [1012420, "ˮ����ݮζѩ��"], [1012419, "���ζѩ��"], [1012417, "�ɿ���ѩ��"],[1012418, "����ζѩ��"], [1012416, "��ݮѩ��"], [1012073, "����ѩ��"], [1012071, "�ɿ���ѩ��"], [1012072, "���ѩ��"], [1012070, "��ݮѩ��"], [1012268, "����ѩ��"], [1012267, "���ѩ��"], [2450021, "1.5�����鄻"], [1442039, "������"], [1442018, "������"], [2049005, "��ҽ���ᡪ��"], [2431046, "���غ������"], [2022643, "Ѭ������"], [2022645, "��ζ���������"], [2022646, "��������"], [2022779, "���Ϳ�����"], [2022265, "�������"], [2431004, "δ֪����"], [2300001, "�߼����"], [2300000, "���"], [2340000, "ף������"], [2003568, "�߼�������ҩ"], [2003570, "3��������ҩ"], [2003571, "5��������ҩ"], [2003572, "������ҩ"]];

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 10;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
        var allPlayers = em.getChannelServer().getMapFactory().getMap(749050501).getCharacters();//ȡ�õ�ǰ��ͼ������������
        allPlayers = allPlayers.iterator(); 
        while (allPlayers.hasNext()) {//ѭ��ÿһ�����
            var player = allPlayers.next();
            fishing(player);
    }
}

function fishing(c){
    if (getItemAmount(c, 1432039)) {
		var cc = c.getClient();
            if (getItemAmount(c, 2300001)) {
                //�߼����
                em.removeById(cc, 2300001, 1,true,false);
				addFish(c, 1);
				
            } else if(getItemAmount(c, 2300000)){
                //��ͨ���
				em.removeById(cc, 2300000, 1,true,false);
                addFish(c, 0);
				//em.removeById(cc,2300000,-1,"����");
            } else {
                c.dropMessage(5,"������ϵͳ���������Ĺ��ˣ��뼰ʱ���䣡");
            }
    } else {
        c.dropMessage(5,"����ͨ���㳡����ͨ���㳡����ͨҲ��Ҫһ����ͨ��Ͱɣ�");
    }
    return true;
}

//��ȡ��Ʒ����.
function getItemAmount(player, itemid) {
    return player.itemQuantity(itemid);
}

function addFish(c, type) { //������
    var cc = c.getClient();
	var pp = probability;
    var randNum = Math.floor(Math.random() * 10000) + 1;
    if (type) { //�߼�����ܵ����������.
        pp = pp * Hfish;
    }else{
		pp = pp * Lfish;
	}
	if (weekday == 6 && hour >= 10 && hour < 22) { //ÿ����������
	    pp = pp * 2;
		xs = "������";
	}
     if (fish.length > 0) {
         if (randNum<pp) {//��������
			var randfish = Math.floor(Math.random() * fish.length);
			em.addById(cc,fish[randfish],1,"����");
			if(fish[randfish]==2431690) {
			c.dropMessage(-1,"��ϲ�㣬�������һ����˵�еĽ�����.");
			c.dropMessage(5,"["+ xs +"]������ϵͳ����ϲ�㣬�������һ����˵�еĽ�����.");
			em.broadcastYellowMsg("["+ xs +"]������ϵͳ��" + " : " + "��� "+c.getName()+" ����ͨ���㳡������ 1 �������㣬������߻���ͣ���Ͻ������~");
			} else {
            var fn = "��";var i=0;
			for(;i<fishname.length;i++)
			{
				if(fish[randfish]==fishname[i][0])
				{
					fn = fishname[i][1];
					break;
				}
			}
			var fishno = fish[randfish];
			if(fishno==2101120||fishno==3994641||fishno==3994642||fishno==3994643||fishno==3994644||fishno==3994645||fishno==2040006||fishno==2040007||fishno==2040303||fishno==2040403||fishno==2040506||fishno==2040507||fishno==2040603||fishno==2040709||fishno==2040710||fishno==2040711||fishno==2040806||fishno==2040903||fishno==2041024||fishno==2041025||fishno==2043003||fishno==2043103||fishno==2043203||fishno==2043303||fishno==2043703||fishno==2043803||fishno==2044003||fishno==2044019||fishno==2044103||fishno==2044203||fishno==2044303||fishno==2044403||fishno==2044503||fishno==2044603||fishno==2044703||fishno==2044815||fishno==2044908||fishno==2049750||fishno==2049751||fishno==1012477||fishno==1012420||fishno==1012419||fishno==1012417||fishno==1012418||fishno==1012416||fishno==2450021||fishno==1442039||fishno==2049005||fishno==2431046||fishno==2022643||fishno==2022645||fishno==2022646||fishno==2022779||fishno==2022265||fishno==2431004||fishno==2340000||fishno==2003568||fishno==2003570||fishno==2003571||fishno==2003572) {
			em.broadcastServerMsg("["+ xs +"]������ϵͳ��" + " : " + "��� "+c.getName()+" �ڵ��㳡������"+fn+"���㻹�ڵ�ʲô����С���һ�������~");
			}
            c.dropMessage(-1,"��ϲ�㣬�������һ��"+fn+".");
			c.dropMessage(5,"["+ xs +"]������ϵͳ����ϲ�㣬�������һ��"+fn+".");
			}
         } else {
			 //û���� 
			if(type == 1) {
			c.dropMessage(-1,"������һ���߼����.����û�е����κζ���.");
			c.dropMessage(5,"["+ xs +"]������ϵͳ��������һ���߼����.����û�е����κζ���.");
			} else {
			c.dropMessage(-1,"������һ����ͨ���.����û�е����κζ���.");
			c.dropMessage(5,"["+ xs +"]������ϵͳ��������һ����ͨ���.����û�е����κζ���.");
			}
		 }
    }
	
    //gainItem(c, (getItemAmount(c, 2300001) == 0) ? 2300000 : 2300001, -1);			//�������ĸ߼����
}
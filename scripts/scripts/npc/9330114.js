var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(5220040)) { //���ְٱ�ȯ
            cm.sendYesNo("ð�յ�ת�������и���#bװ���������ϡ������ĵ���#k�ޣ�ʹ�á�#b#t5220040##k���Ϳ��Խ���. ��Ϸ�̳��еġ�������������Ϸ���������ޡ� ���粻��ת��ȯ�Ļ����ǲ�����ʹ���ҵġ�����Ҫ��ת����ô?  ");
        } else {
            cm.sendOk("�㱳������#b#t5220040##k��?");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var item;
        if (Math.floor(Math.random() * 300) == 0) {
            item = cm.gainGachaponItem(1102042, 1);
        } else {
            var itemList = new Array(1032007, //��ĸ��
            1032008, //è�۶���
            1032009, //�Ʒ�����
            1032012, //���ö���
            1032017, //õ�����
            1032019, //ˮ�ɶ���
            1032022, //��ɫԲ�Ͷ���
            1032023, //��ݮ����
            1032025, //Ҷ�Ӷ���
            1032026, //��ˮ������
            1032040, //��Ҷ�Ͷ���
            1032041, //��Ҷ�Ͷ���
            1032042, //��Ҷ�Ͷ���
            //-------ñ��-------
            1002080, //��ͷ��
            1002081, //��ͷ��
            1002082, //��ͷ��
            1002083, //��ͷ��
            1002161, //�춬��
            1002162, //������
            1002163, //�̶���
            1002164, //�ֶ���
            1002165, //�ڶ���
            1002207, //���̫��ñ
            1002208, //����̫��ñ
            1002209, //�̺�̫��ñ
            1002210, //�ƺ�̫��ñ
            1002211, //��������ñ
            1002212, //�������ñ
            1002213, //�̹�����ñ
            1002214, //�ڹ�����ñ
            1002267, //�๭��
            1002268, //�ƹ���
            1002269, //�׹���
            1002270, //�ڹ���
            1002275, //���ƽ���ñ
            1002276, //��ƽ���ñ
            1002277, //�̻ƽ���ñ
            1002278, //�ڻƽ���ñ
            1002281, //�����֮ñ
            1002282, //�����֮ñ
            1002283, //�����֮ñ
            1002284, //�����֮ñ
            1002285, //�����֮ñ
            1002286, //��˾��ñ
            1002287, //�׻�˾��ñ
            1002402, //ӥ��ͷ��(��)
            1002403, //ӥ��ͷ��(��)
            1002404, //ӥ��ͷ��(��)
            1002405, //ӥ��ͷ��(��)
            1002418, //�ϱ�ֽͷ��
            1002419, //��Ҷñ
            1002424, //������ñ
            1002425, //������ñ
            1002436, //����˹̹֮ñ
            1002441, //��Ѫͷ��
            1002452, //���ǰ�ͷ��
            1002453, //���Ǻ�ͷ��
            1002454, //���Ǻ�ͷ��
            1002455, //���Ǻ�ͷ��
            1002492, //��ɫ����ñ
            1002554, //����ͷ��
            1002699, //�Ϲ�ñ��
            1002778, //��������ñ
            //------����------
            1102000, //��ɫð������
            1102001, //��ɫð������
            1102002, //��ɫð������
            1102003, //��ɫð������
            1102004, //��ɫð������
            1102011, //��ɫ�ػ�����
            1102031, //����������
            1102032, //����������
            1102033, //����������
            1102034, //����������
            1102035, //����������
            1102040, //��������(��)
            1102041, //��������(��)
            1102042, //��������(��)
            1102043, //��������(��)
            1102046, //�������
            1102047, //��������
            1102048, //��������
            1102140, //������������
            1102147, //��߽�������
            1102172, //���㲻������
            1102174, //������Ա����
            1102166, //��Ҷ����
            1102167, //��Ҷ����
            1102168, //��Ҷ����
            //------����------
            1082002, //��������
            1082012, //����������
            1082013, //����������
            1082014, //����������
            1082015, //����������
            1082016, //����������
            1082017, //����������
            1082018, //����������
            1082044, //�ƽ𱩷�����
            1082045, //�ƽ�׷������
            1082046, //����׷������
            1082047, //�Ͽ�׷������
            1082065, //��������
            1082066, //��������
            1082067, //��������
            1082068, //��ͭ��������
            1082069, //﮿���������
            1082070, //�ƽ���������
            1082086, //������ӡ����
            1082087, //�ƽ��ӡ����
            1082088, //�ڷ�ӡ����
            1082089, //��������
            1082090, //��������
            1082091, //��������
            1082095, //��ͭ��������
            1082096, //����������
            1082097, //�ƽ���������
            1082098, //��ս������
            1082099, //��ս������
            1082100, //��ս������
            1082103, //��ͭ��Ӱ����
            1082104, //﮿�Ӱ����
            1082105, //�ڰ�Ӱ����
            1082106, //����������
            1082107, //�ƽ���������
            1082108, //����������
            1082109, //����ʹ����
            1082110, //����ʹ����
            1082111, //����ʹ����
            1082112, //����ʹ����
            1082144, //�ù�����(��)
            1082145, //��������(��)
            1082146, //��������(��)
            1082147, //��������(��)
            1082148, //��������(��)
            1082149, //��������(��)
            1082150, //��������(��)
            1082158, //��ɫ��������
            1082159, //��ɫ��������
            1082160, //��ɫ��������
            1082163, //����������
            1082236, //�����������
            1082241, //������������
            //-------����------
            1302016, //��ɫ��ɡ
            1302017, //��ɫ��ɡ
            1302021, //��Ƥ��ͷ
            1302024, //�ϱ�ֽ��
            1302025, //����ɡ
            1302026, //����ɡ
            1302027, //����ɡ
            1302028, //����ɡ
            1302029, //����ɡ
            1302030, //��Ҷ��
            1302049, //���߱���
            1302050, //ս��
            1302058, //ð�յ�ɡ
            1302061, //���ٱ���
            1302087, //���
            1312002, //����
            1312012, //Ǭ��Ȧ
            1312013, //�йٱ�
            1322003, //������
            1322005, //����
            1322006, //�ֹ�
            1322012, //��ɫשͷ
            1322071, //�ɿ�����
            1332053, //Ұ���տ���
            1332057, //��Ҷ3����
            1332066, //���ֹκ���
            1402029, //����������
            1402040, //��Ҷ3����
            1402044, //�Ϲϵ���
            1412028, //��Ҷ3����
            1422032, //��Ҷ3����
            1422036, //��߽��˵Ĵ���
            1452000, //ս����
            1452001, //���Թ�
            1452002, //����
            1452003, //������
            1452004, //���֮��
            1452005, //�׵�
            1452006, //����֮��
            1452007, //���繭
            1452008, //�칭
            1452009, //����
            1452010, //����
            1452011, //����
            1452012, //������
            1452013, //��ȸ��
            1452014, //�ƻ���
            1452015, //���乭
            1452016, //Ư��֮��
            1452017, //ħ��֮��
            1452018, //��Ы֮��
            1452019, //��ӥ��(��)
            1452020, //��ӥ��(��)
            1452021, //��ӥ��(��)
            1452022, //��Ҷ��
            1452023, //�ܼ�֮��
            1452024, //���ֹ�
            1452025, //��ɫ÷��˹
            1452026, //��ɫ÷��˹
            1452044, //������ṭ
            1452045, //��ҶHAPPY��
            1452046, //��Ҷ3����
            1452048, //��ɫ������ӾȦ
            1452051, //�������ֵĹ�
            1452057, //���㾪�繭
            1452059, //�������繭
            1452062, //ʥ��������ʹ����(��)
            1462000, //ɽ����
            1462001, //��
            1462002, //ս����
            1462003, //����
            1462004, //ӥ��
            1462005, //˫����
            1462006, //������
            1462007, //����
            1462008, //�ƽ���
            1462014, //��Ҷ����
            1462015, //��ʥ����(��)
            1462016, //��ʥ����(��)
            1462017, //�ڰ�ʥ����
            1462018, //���������
            1462019, //��Ҷ��
            1462020, //����֮��
            1462021, //霺���
            1462022, //��ɫ������
            1462023, //ɽ����
            1462024, //����
            1462025, //�ƽ���
            1462026, //������
            1462027, //�ڰ���
            1462028, //ɽ����
            1462029, //����
            1462030, //�ƽ���
            1462031, //������
            1462032, //�ڰ���
            1462033, //ɽ����
            1462034, //����
            1462035, //�ƽ���
            1462036, //������
            1462037, //�ڰ���
            1462039, //�ƽ������
            1462040, //��Ҷ������
            1462041, //��Ҷ3����
            1462043, //��ɫ������ӾȦ
            1522010, //��Ů�� - (������)
            1522011, //������ - (������)
            1522012, //������ǹ - (������)
            1522013, //������ - \nֻ��ʹ��ר�þ���
	    1522014, //������ǹ - (������)
            1462050, //����ڤ����
	    1522015, //�����ʻ���ǹ
   	    1522016, //�����ʻ���ǹ
            1462051, //����ڤ����
	    1522021, //��˫�ʻ���ǹ
            1462056, //ʥ��������ʹ����(��)
            1492026, //��ɫ������ӾȦ
            1492034, //��Ҷ3����
            1302073, //�¼��¹��죨��ѧ�ߣ�
            1302074, //�������ǹ��죨��ѧ�ߣ�
            1452049, //�¼��¹��죨����
            1452050, //�������ǹ��죨����
            1462044, //�¼��¹��죨��
            1462045, //�������ǹ��죨��
            //------ҩˮ------
            1002894, //��ɫ��֯����
            1002895, //��ɫ��֯����
            1002896, //��ɫ��֯����
            1002897, //��ɫ��֯����
            1002898, //��ɫ��֯����
            1002899, //��ɫ��֯����
            1002800, //��ɫ��֯����
            1002915, //�Ǹ���˹��ñ��(����
            1012056, //������
            1122001, //��ɫ�������
            1122002, //��ɫ�������
            1122003, //��ɫ�������
            1122004, //�ۺ�������
            1122005, //��ɫ�������
            1122006, //��ɫ�������
            1122015, //��ҶΧ��
            1002391, //����ͷ��(��)
            1002392, //����ͷ��(��)
            1002393, //����ͷ��(��)
            1002394, //����ͷ��(��)
            1002395, //����ͷ��(��)
            1002418, //�ϱ�ֽͷ��
            1002419, //��Ҷñ
            1002424, //������ñ
            1002425, //������ñ
            1002441, //��Ѫͷ��
            1002508, //��Ҷͷ��
            1002509, //��Ҷͷ��
            1002510, //��Ҷͷ��
            1002511, //��Ҷͷ��
            1002547, //������ñ��
            // ------ 093 ------------
/*3010002, //��ɫʱ��ת��
3010003, //��ɫʱ��ת�� 
3010004, //����������
3010005, //����������
3010006, //��ɫʱ��ת��
3010209, //��ݱ�����±�����
3010210, //��ݮ������±�����
3010007, //��ɫ��������
3010008, //��ɫ��������
3010009, //�齵�
3010010, //��ɫ�������� 
3010012, //��ʿ ���� 
3010013, //�Ƴ�����
3010014, //������
3010016, //��ɫ��������
3010294, //��ɫ��������
3010017, //��ɫ��������
3010295, //��ɫ�������棨�ɽ��ף�
3010018, //Ҭ����ɳ̲��
3010019, //��˾��
3010021, //ůů��
3010024, //��߷�����
3010025, //��Ҷ�����
3010028, //�����ķ�²
3010029, //������
3010030, //�ڻ���
3010031, //�컷��
3010032, //�ƻ���
3010033, //�̻���
3010034, //�Ƴ�����(��ɫ)
3010035, //�Ƴ�����(��ɫ)
3010036, //������ǧ
3010037, //������
3010038, //����ɳ�� 
3010039, //��ɫ�������� 
3010040, //������ 
3010041, //��������
3010043, //ħŮ�ķ�ɨ��
//3010044, //ͬһ��ɡ��
3010045, //��������
3010046, //������ 
3010047, //������ 
3010048, //ʥ��������
3010049, //ѩ����
3010199, //ѩ����
3010050, //������
3010051, //ɳĮ����1����
3010052, //ɳĮ����2����
3010054, //������ല
3010057, //Ѫɫõ�� 
3010058, //����ĩ�� 
3010060, //���ĵ�
3010062, //���
3010068, //¶ˮ����
3010069, //��Ʒ�
//3010070, //���ް�Ʒ����
3010071, //������
3010073, //babyƷ���� 
3010075, //��Ϊ���ֿ�
3010077, //èͷӥ����
3010085, //����������
3010092, //ħŮ�ķ�ɨ��
3010093, //�����Ļ�
3010094, //ƯƯ������
3010095, //ʯͷ������ 
3010096, //������ʯ����
3010098, //����լ��
3010099, //����������
3010100, //��������
3010106, //ѩ��ս��
3010110, //���ʴ��������
3010111, //��������
3010112, //�������
3010116, //ҡ��֮������
3010117, //ħ��������
3010118, //�ǹ���������
3010119, //��������
3010120, //�ʵ�����
3010123, //���ջ���
3010124, //����˹��������
3010125, //�ᱴ¡ս����
3010126, //����ħ����
3010127, //��������
3011000, //����������
3012001, //����
3012002, //ԡͰ
3012003, //��������
3012006, //�紵����
3012010, //�ɿ�����������
3012011, //�Ұ��ɿ������
3020000, //̰����è��
//3020001, //����������
3010061, //������
3010063, //�������Ǳ����� 
3010064, //��ɫɰ�ñ����� 
3010065, //�ۺ캣̲������ 
3010066, //����ɫ��ëɳ�� 
3010067, //��ɫ���ʦ��
3010080, //�������F�a 
3010081, //��ñ�������
3010082, //��ñ������� 
3010083, //�����������
3010084, //̫ƽ���������
3010097, //��̵�ľ�� 
3010107, //�����ĵ�����
3010108, //������ǧ 
3010109, //ů¯��
3010292, //ů¯�Σ��ɽ��ף�
3010113, //�Ļ귢�������� 
3010114, //��²�Ұɣ�����
3010115, //�ܱ�����
3010055, //��ѩ��������
3010137, //��������
3010149, //è�������
3010144, //��Ϧ����
3010155, //��Ӱ˫����èͷӥ����
3010020, //����uľͰ 
3010078, //����è����
3010079, //��èè����
3010105, //�{ɫ����������
3010102, //�{ɫ����������
3010103, //�{ɫ����������
3010104, //�{ɫ����������
3010026, //���鸽������������
3010129, //��������
3010130, //Ѫɫõ�� 
3010131, //̰����è�� 
3010132, //����������
3010133, //������
3010134, //��Ҷ�����
3010157, //��������
3010186, //��������
3010191, //��������
3010194, //ҰӪ��������
3010202, //��˵��Ҷ�¡���
3010203, //�ۺ�ɳ̲����ɡ
3010205, //����¼��������
3010206, //���뻭������
3010207, //���ֺ�������
3010208, //��è����
3010211, //��������
3010162, //��������
3010163, //������
3010164, //������(����)  
3010135, //���ն��������� 
3010139, //˽�ܿռ�
3010168, //������������
3010170, //ѩҹ����
3010172, //�ǿ�����
3010173, //��ʥ����������
3010175, //����������
3010179, //��β��è����
3010169, //ֽ�����������
3010171, //����������
3010174, //Ů����ҩ��
3010182, //���Ӽ�����
3010183, //���ܲ�����
3010299, //С��������
3010053, //���Ӽ��������
3010187, //���������� 
3010142, //ˮ�������
3013000, //ӣ������
3010152, //������������ 
3010128, //��������
3010140, //���տ����� 
3010291, //���տ��������ɽ��ף�
3010141, //��������
3010151, //���˵�����
//3010166, //˫��ͬ��
3010180, //HP����
3010181, //MP����
3010184, //��������
//3010189, //����������
//3010188, //�ࡤ�װ�����
3010220, //�Ұ���������
3010218, //�ǿ˶�������
//3010293, //�ǿ˶������ӣ��ɽ��ף�
3010219, //������������
3010221, //�Ұ��ڱ�����
3010212, //��������
3010196, //����ԡ����
3010177, //�ֱ�����
//3010197, //Ӣ�۵�����-ս��
//3010200, //Ӣ�۵�����-���� 
//3010201, //Ӣ�۵�����-��Ӱ˫��
3010161, //������
3010222, //���ð������
3010226, //�¹���������
3010281, //����֮������
3010282, //�����ɺ���
3010283, //��̺��
3010288, //���������
3010195, //�޼�֮������
3010280, //ˮ������
3010286, //ŵ����˹���� 
3010296, //���۵�ʥ������
3010287, //��������
3010290, //��ħ������
3010300, //��ɫHPҩˮ����
3010301, //�߼�HPҩˮ����
3010302, //����ҩˮ����
3010303, //�ӷʱ�����
3010304, //��ħ��������
3010305, //õ���ֱ�����
3010306, //�����Ļ�����
3010138, //����������
3010311, //��������
3010224, //�����������
3010225, //Ʒ��������
3010257, //�����¡���
3010279, //�����Ϲ�����
3010320, //�����̶�ͯ������
3010321, //�������ն�ͯ������
3010289, //���˼Ҷ�ͯ������
3010356, //��ܰ�ɻ���*/
//-------------------------------------
            1462092, //���ֹ�������
            1462097, //Ѧ��˹��������
            1462105, //����ӥ��
            1462106, //����ƽ���
            1462107 //������������
            );
            item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1, "������ת����");
        }
        if (item != -1) {
            cm.gainItem(5220040, -1);
            cm.sendOk("������ #b#t" + item + "##k.");
        } else {
            cm.sendOk("��ȷʵ��#b#t5220040##k��?�����,����ȷ���ڱ�����װ��,����,�����������Ƿ���һ�����ϵĿռ�?");
        }
        cm.safeDispose();
    }
}
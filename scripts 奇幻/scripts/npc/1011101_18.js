var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
Array(2043400, 500), //����������������
Array(2043402, 500), //����������������
Array(2043401, 500), //����������������
Array(2043404, 500), //����������������
Array(2043403, 500), //����������������
Array(2042300, 500), //����������������

Array(2042305, 500), //����������������
Array(2042306, 500), //����������������
Array(2042303, 500), //����������������
Array(2042304, 500), //����������������
Array(2042301, 500), //����������������
Array(2042302, 500), //����������������
Array(2042300, 500), //����������������

Array(2042400, 500), //����������������
Array(2042402, 500), //����������������
Array(2042401, 500), //����������������
Array(2042403, 500), //����������������
Array(2042404, 500), //����������������
Array(2042405, 500), //����������������
Array(2042406, 500), //����������������

Array(2045200, 500), //˫��ǹ����������
Array(2045201, 500), //˫��ǹ����������
Array(2045202, 500), //˫��ǹ����������
Array(2045203, 500), //˫��ǹ����������
Array(2045204, 500), //˫��ǹ����������
Array(2045205, 500), //˫��ǹ����������
Array(2045206, 500), //˫��ǹ����������
Array(2045208, 500), //˫��ǹ����������
Array(2043400, 500), //������������ 100%
Array(2043401, 500), //������������ 60% 
Array(2043402, 500), //������������ 10%
Array(2043403, 500), //������������
Array(2043404, 500), //������������
Array(2040000, 500), //ͷ���������� �ɹ���100%
Array(2040001, 500), //ͷ����������60%
Array(2040002, 500), //ͷ����������10%
Array(2040003, 500), //ͷ����������100%
Array(2040004, 500), //ͷ����������60%
Array(2040005, 500), //ͷ����������10%
Array(2040008, 500), //ͷ�������������70%
Array(2040009, 500), //ͷ�������������30%
Array(2040010, 500), //ͷ�������������70%
Array(2040011, 500), //ͷ�������������30%
Array(2040012, 500), //ͷ����������70%
Array(2040013, 500), //ͷ����������30%
Array(2040014, 500), //ͷ���������������70%
Array(2040015, 500), //ͷ���������������30%
Array(2040016, 600), //ͷ�������ʾ���10%
Array(2040017, 500), //ͷ�������ʾ���60%
Array(2040018, 500), //ͷ�������ʾ���100%
Array(2040019, 500), //ͷ����������65%
Array(2040020, 500), //ͷ����������15%
Array(2040021, 500), //ͷ����������65%
Array(2040022, 500), //ͷ����������15%
Array(2040024, 500), //ͷ����������100%
Array(2040025, 500), //ͷ����������60%
Array(2040026, 500), //ͷ����������10%
Array(2040027, 500), //ͷ�����ݾ���100%
Array(2040028, 750), //ͷ�����ݾ���70%
Array(2040029, 500), //ͷ�����ݾ���60%
Array(2040030, 500), //ͷ�����ݾ���30%
Array(2040031, 500), //ͷ�����ݾ���10%
Array(2040043, 500), //ͷ�����ݾ���65%
Array(2040044, 500), //ͷ�����ݾ���15%
Array(2040100, 500), //����װ����������10%
Array(2040101, 500), //����װ����������60%
Array(2040103, 500), //����װ�������������30%
Array(2040104, 500), //����װ�������������70%
Array(2040105, 500), //����װ�λر��ʾ���10%
Array(2040106, 500), //����װ�λر��ʾ���60%
Array(2040108, 500), //����װ�λر����������30%
Array(2040109, 800), //����װ�λر����������70%
Array(2040200, 200), //�۲�װ�������ʾ���10%
Array(2040201, 200), //�۲�װ�������ʾ���60%
Array(2040203, 200), //�۲�װ���������������30%
Array(2040204, 200), //�۲�װ���������������70%
Array(2040205, 200), //�۲�װ����������10%
Array(2040206, 200), //�۲�װ����������60%
Array(2040208, 200), //�۲�װ�������������30%
Array(2040209, 200), //�۲�װ�������������70%
Array(2040300, 100), //������������100%
Array(2040301, 100), //������������60%
Array(2040302, 150), //������������10%
Array(2040304, 100), //���������������70%
Array(2040305, 100), //���������������30%
Array(2040306, 200), //�������ݾ���70%
Array(2040307, 200), //�������ݾ���30%
Array(2040308, 500), //�����������������70%
Array(2040309, 500), //�����������������30%
Array(2040310, 500), //��������������10%
Array(2040311, 500), //��������������60%
Array(2040312, 500), //��������������100%
Array(2040313, 100), //������������65%
Array(2040314, 200), //������������15%
Array(2040316, 100), //�������ݾ���100%
Array(2040317, 100), //�������ݾ���60%
Array(2040318, 200), //�������ݾ���10%
Array(2040319, 200), //����װ����������100%
Array(2040320, 200), //������������70%
Array(2040321, 200), //����װ����������60%
Array(2040322, 200), //����װ����������30%
Array(2040323, 100), //������������10%
Array(2040324, 500), //����װ����������100%
Array(2040325, 600), //����װ����������70%
Array(2040326, 100), //����װ����������60%
Array(2040327, 100), //����װ����������30%
Array(2040328, 100), //����װ����������10%
Array(2040335, 500), //����װ�����ݾ���65%
Array(2040336, 500), //����װ�����ݾ���15%
Array(2040337, 500), //����װ����������65%
Array(2040338, 500), //����װ����������15%
Array(2040339, 500), //����װ����������65%
Array(2040340, 500), //����װ����������15%
Array(2040400, 500), //���·�������100%
Array(2040401, 500), //���·�������60%
Array(2040402, 500), //���·�������10%
Array(2040404, 500), //���·����������70%
Array(2040405, 500), //���·����������30%
Array(2040406, 500), //������������70%
Array(2040407, 500), //������������30%
Array(2040408, 500), //������������70%
Array(2040409, 500), //������������30%
Array(2040410, 300), //���������������70%
Array(2040411, 300), //���������������30%
Array(2040412, 300), //������������10%
Array(2040413, 300), //������������60%
Array(2040414, 500), //������������100%
Array(2040415, 500), //���·���������65%
Array(2040416, 500), //���·���������15%
Array(2040417, 500), //������������100%
Array(2040418, 500), //������������60%
Array(2040419, 500), //������������10%
Array(2040420, 500), //������������100%
Array(2040421, 500), //������������60%
Array(2040422, 500), //������������10%
Array(2040423, 500), //������������100%
Array(2040424, 500), //������������70%
Array(2040425, 500), //������������60%
Array(2040426, 500), //������������30%
Array(2040427, 500), //������������10%
Array(2040431, 500), //������������65%
Array(2040432, 500), //������������15%
Array(2040433, 500), //������������65%
Array(2040434, 500), //������������15%"
Array(2040435, 500), //������������65%
Array(2040436, 500), //������������15%
Array(2040500, 500), //ȫ���������ݾ���100%
Array(2040501, 200), //ȫ���������ݾ���60%
Array(2040502, 100), //ȫ���������ݾ���10%
Array(2040503, 300), //ȫ�����׷�������100%
Array(2040504, 100), //ȫ�����׷�������60%
Array(2040505, 200), //ȫ�����׷�������10%
Array(2040508, 300), //ȫ�����������������70%
Array(2040509, 300), //ȫ�����������������30%
Array(2040510, 300), //ȫ�����׷����������70%
Array(2040511, 300), //ȫ�����׷����������70%
Array(2040512, 300), //ȫ��������������100%
Array(2040513, 300), //ȫ��������������60%
Array(2040514, 200), //ȫ��������������10%
Array(2040515, 400), //ȫ��������������100%
Array(2040516, 400), //ȫ��������������60%
Array(2040517, 300), //ȫ��������������10%
Array(2040518, 400), //ȫ��������������70%
Array(2040519, 400), //ȫ��������������30%
Array(2040520, 400), //ȫ���������˾���70%
Array(2040521, 400), //ȫ���������˾���30%
Array(2040522, 400), //ȫ���������ݾ���65%
Array(2040523, 300), //ȫ���������ݾ���15%
Array(2040524, 400), //ȫ�����׷�������65%
Array(2040525, 400), //ȫ�����׷�������15%
Array(2040526, 300), //ȫ��������������65%
Array(2040527, 400), //ȫ��������������15%
Array(2040528, 300), //ȫ���������˾���65%
Array(2040529, 400), //ȫ���������˾���15%
Array(2040530, 500), //ȫ��������������100%
Array(2040531, 400), //ȫ��������������70%
Array(2040532, 400), //ȫ��������������60%
Array(2040533, 400), //ȫ��������������30%
Array(2040534, 300), //ȫ��������������10%
Array(2040540, 400), //ȫ��������������65%
Array(2040541, 500), //ȫ��������������15%
Array(2040600, 500), //��/ȹ��������100%
Array(2040601, 500), //��/ȹ��������60%
Array(2040602, 500), //��/ȹ��������10%
Array(2040604, 500), //��/ȹ�����������70%
Array(2040605, 500), //��/ȹ�����������30%
Array(2040606, 500), //��ȹ��Ծ�������70%
Array(2040607, 500), //��ȹ��Ծ�������30%
Array(2040608, 500), //��ȹ�����������70%
Array(2040609, 500), //��ȹ�����������30%
Array(2040610, 500), //��ȹ�����������70%
Array(2040611, 500), //��ȹ�����������30%
Array(2040612, 500), //��ȹ���ݾ���10%
Array(2040613, 500), //��ȹ���ݾ���60%
Array(2040614, 500), //��ȹ���ݾ���100%
Array(2040615, 500), //��ȹ��������65%
Array(2040616, 500), //��ȹ��������15%
Array(2040617, 500), //��ȹ��Ծ����100%
Array(2040618, 500), //��ȹ��Ծ����60%
Array(2040619, 500), //��ȹ��Ծ����10%
Array(2040620, 500), //��ȹ��������100%
Array(2040621, 500), //��ȹ��������60%
Array(2040622, 500), //��ȹ��������10%
Array(2040623, 300), //��ȹ���ݾ���100%
Array(2040624, 300), //��ȹ���ݾ���70%
Array(2040625, 300), //��ȹ���ݾ���60%
Array(2040626, 300), //��ȹ���ݾ���30%
Array(2040627, 200), //��ȹ���ݾ���10%
Array(2040631, 100), //��ȹ��Ծ����65%
Array(2040632, 300), //��ȹ��Ծ����15%
Array(2040633, 400), //��ȹ��������65%
Array(2040634, 400), //��ȹ��������15%
Array(2040635, 200), //��ȹ���ݾ���65%
Array(2040636, 400), //��ȹ���ݾ���15%
Array(2040700, 200), //Ь�����ݶȾ���100%
Array(2040701, 300), //Ь�����ݶȾ���60%
Array(2040702, 400), //Ь�����ݶȾ���10%
Array(2040703, 200), //Ь����Ծ����100%
Array(2040704, 300), //Ь����Ծ����60%
Array(2040705, 400), //Ь����Ծ����10%
Array(2040706, 500), //Ь���ٶȾ���100%
Array(2040707, 500), //Ь���ٶȾ���60%
Array(2040708, 500), //Ь���ٶȾ���10%
Array(2040712, 500), //Ь�������������70%
Array(2040713, 500), //Ь�������������30%
Array(2040714, 500), //Ь����Ծ�������70%
Array(2040715, 500), //Ь����Ծ�������30%
Array(2040716, 500), //Ь���ٶ��������70%
Array(2040717, 500), //Ь���ٶ��������30%
Array(2040718, 300), //Ь�����ݾ���65%
Array(2040719, 400), //Ь�����ݾ���15%
Array(2040720, 300), //Ь����Ծ����65%
Array(2040721, 300), //Ь����Ծ����15%
Array(2040722, 500), //Ь���ٶȾ���65%
Array(2040723, 500), //Ь���ٶȾ���15%
Array(2040727, 500), //Ь�ӷ�������10%
Array(2040800, 300), //�������ݾ���100%
Array(2040801, 400), //�������ݾ���60%
Array(2040802, 300), //�������ݾ���10%
Array(2040803, 100), //���׹�������100%
Array(2040804, 400), //���׹�������60%
Array(2040805, 200), //���׹�������10%
Array(2040808, 500), //���������������70%
Array(2040809, 500), //���������������30%
Array(2040810, 100), //���׹����������70%
Array(2040811, 100), //���׹����������30%
Array(2040812, 500), //������������70%
Array(2040813, 500), //������������30%
Array(2040814, 500), //����ħ���������70%
Array(2040815, 500), //����ħ���������30%
Array(2040816, 500), //����ħ������10%
Array(2040817, 500), //����ħ������60%
Array(2040818, 500), //����ħ������100%
Array(2040819, 500), //�������ݾ���65%
Array(2040820, 500), //�������ݾ���15%
Array(2040821, 300), //���׹�������65%
Array(2040822, 300), //���׹�������15%
Array(2040823, 200), //������������100%
Array(2040824, 500), //������������60%
Array(2040825, 500), //������������10%
Array(2040831, 500), //������������65%
Array(2040832, 500), //������������15%
Array(2040900, 500), //���Ʒ�������
Array(2040901, 500), //���Ʒ�������60%
Array(2040902, 500), //���Ʒ�������10%
Array(2040904, 500), //���Ʒ����������70%
Array(2040905, 500), //���Ʒ����������30%
Array(2040906, 500), //������������70%
Array(2040907, 500), //������������30%
Array(2040908, 500), //������������70%
Array(2040909, 500), //������������30%
Array(2040910, 500), //���Ʒ�������65%
Array(2040911, 500), //���Ʒ�������15%
Array(2040914, 300), //���ƹ�������60%
Array(2040915, 300), //���ƹ�������10%
Array(2040916, 400), //���ƹ����������70%
Array(2040917, 200), //���ƹ����������30%
Array(2040919, 200), //����ħ������60%
Array(2040920, 300), //����ħ������10%
Array(2040921, 300), //����ħ���������70%
Array(2040922, 400), //����ħ���������30%
Array(2040923, 200), //������������100%
Array(2040924, 300), //������������60%
Array(2040925, 400), //������������10%
Array(2040926, 800), //������������100%
Array(2040927, 800), //������������60%
Array(2040928, 800), //������������10%
Array(2040929, 400), //������������100%
Array(2040930, 300), //������������70%
Array(2040931, 200), //������������60%
Array(2040932, 100), //������������30%
Array(2040933, 300), //������������10%
Array(2040937, 400), //������������65%
Array(2040938, 200), //������������15%
Array(2040939, 300), //������������65%
Array(2040940, 100), //������������15%
Array(2040941, 300), //������������65%
Array(2040942, 300), //������������15%
Array(2041000, 300), //����ħ������100%
Array(2041001, 300), //����ħ������60%
Array(2041002, 300), //����ħ������10%
Array(2041003, 300), //�����������100%
Array(2041004, 300), //�����������60%
Array(2041005, 300), //�����������10%
Array(2041006, 300), //������������100%
Array(2041007, 300), //������������60%
Array(2041008, 300), //������������10%
Array(2041009, 300), //����ħ������100%
Array(2041010, 300), //����ħ������60%
Array(2041011, 300), //����ħ������10%
Array(2041012, 300), //������������100%
Array(2041013, 300), //������������60%
Array(2041014, 300), //������������10%
Array(2041015, 340), //������������100%
Array(2041016, 300), //������������60%
Array(2041017, 300), //������������10%
Array(2041018, 300), //�������ݾ���100%
Array(2041019, 300), //�������ݾ���60%
Array(2041020, 300), //�������ݾ���10%
Array(2041021, 300), //������������100%
Array(2041022, 300), //������������60%
Array(2041023, 300), //������������10%
Array(2041026, 300), //����ħ���������70%
Array(2041027, 300), //����ħ���������30%
Array(2041028, 300), //��������������70%
Array(2041029, 300), //��������������30%
Array(2041030, 300), //���������������70%
Array(2041031, 300), //���������������30%
Array(2041032, 300), //����ħ���������70%
Array(2041033, 300), //����ħ���������30%
Array(2041034, 300), //���������������70%
Array(2041035, 300), //���������������30%
Array(2041036, 300), //���������������70%
Array(2041037, 300), //���������������30%
Array(2041038, 300), //���������������70%
Array(2041039, 300), //���������������30%
Array(2041040, 300), //���������������70%
Array(2041041, 300), //���������������30%
Array(2041042, 300), //����ħ����������65%
Array(2041043, 300), //����ħ����������15%
Array(2041044, 300), //����������������65%
Array(2041045, 300), //����������������15%
Array(2041046, 300), //������������65%
Array(2041047, 300), //������������15%
Array(2041048, 300), //����ħ������65%
Array(2041049, 300), //����ħ������15%
Array(2041050, 300), //����������65%
Array(2041051, 300), //����������15%
Array(2041052, 300), //������������65%
Array(2041053, 300), //������������15%
Array(2041054, 300), //�������ݾ���65%
Array(2041055, 300), //�������ݾ���15%
Array(2041056, 300), //�������˾���65%
Array(2041057, 300), //�������˾���15%
Array(2041058, 300), //�����������10%
Array(2041102, 300), //��ָ��������10%
Array(2041105, 300), //��ָ��������10%
Array(2041108, 300), //��ָ���ݾ���10%
Array(2041111, 300), //��ָ��������10%
Array(2041201, 300), //������������10%
Array(2041202, 300), //������������60%
Array(2041203, 300), //������������100%
Array(2041204, 300), //���������������30%
Array(2041205, 300), //���������������70%
Array(2041206, 300), //������������10%
Array(2041207, 300), //������������60%
Array(2041208, 300), //������������100%
Array(2041209, 300), //���������������30%
Array(2041210, 300), //���������������70%
Array(2041300, 300), //������������100%
Array(2041301, 300), //������������60%
Array(2041302, 300), //������������10%
Array(2041303, 300), //������������100%
Array(2041304, 300), //������������60%
Array(2041305, 300), //������������10%
Array(2041306, 300), //�������ݾ���100%
Array(2041307, 300), //�������ݾ���60%
Array(2041308, 300), //�������ݾ���10%
Array(2041309, 300), //������������100%
Array(2041310, 300), //������������60%
Array(2041311, 300), //������������10%
Array(2041312, 300), //������������70%
Array(2041313, 300), //������������30%
Array(2041314, 300), //������������70%
Array(2041315, 300), //������������30%
Array(2041316, 300), //�������ݾ���70%
Array(2041317, 300), //�������ݾ���30%
Array(2041318, 300), //������������70%
Array(2041319, 300), //������������30%
Array(2043000, 300), //���ֽ���������100%
Array(2043001, 300), //���ֽ���������60%
Array(2043002, 300), //���ֽ���������10%
Array(2043004, 300), //���ֽ������������70%
Array(2043005, 300), //���ֽ������������30%
Array(2043006, 300), //���ֽ�ħ���������70%
Array(2043007, 300), //���ֽ�ħ���������30%
Array(2043008, 300), //���ֽ�ħ������10%
Array(2043009, 300), //���ֽ�ħ������60%
Array(2043010, 300), //���ֽ�ħ������100%
Array(2043011, 300), //���ֽ���������65%
Array(2043012, 300), //���ֽ���������15%
Array(2043015, 300), //���ֽ������ʾ���100%
Array(2043016, 300), //���ֽ������ʾ���70%
Array(2043017, 300), //���ֽ������ʾ���60%
Array(2043018, 300), //���ֽ������ʾ���30%
Array(2043019, 300), //���ֽ������ʾ���10%
Array(2043024, 300), //���ֽ����о���65%
Array(2043025, 300), //���ֽ����о���15%
Array(2043100, 300), //���ָ���������100%
Array(2043101, 300), //���ָ���������60%
Array(2043102, 300), //���ָ���������10%
Array(2043104, 400), //���ָ������������70%
Array(2043105, 400), //���ָ������������30%
Array(2043106, 400), //���ָ���������65%
Array(2043107, 400), //���ָ���������15%
Array(2043110, 400), //���ָ������ʾ���100%
Array(2043111, 400), //���ָ������ʾ���70%
Array(2043112, 400), //���ָ������ʾ���60%
Array(2043113, 400), //���ָ������ʾ���30%
Array(2043114, 400), //���ָ������ʾ���10%
Array(2043118, 400), //���ָ����о���65%
Array(2043119, 400), //���ָ����о���15%
Array(2043200, 400), //���ֶ�����������100%
Array(2043201, 400), //���ֶ�����������60%
Array(2043202, 400), //���ֶ�����������10%
Array(2043204, 400), //���ֶ��������������70%
Array(2043205, 400), //���ֶ��������������30%
Array(2043206, 400), //���ֶ�����������65%
Array(2043207, 400), //���ֶ�����������15%
Array(2043210, 400), //���ֶ��������ʾ���100%
Array(2043211, 400), //���ֶ��������ʾ���70%
Array(2043212, 400), //���ֶ��������ʾ���60%
Array(2043213, 400), //���ֶ��������ʾ���30%
Array(2043214, 400), //���ֶ��������ʾ���10%
Array(2043218, 400), //���ֶ������о���65%
Array(2043219, 400), //���ֶ������о���15%
Array(2043300, 450), //�̽���������100%
Array(2043301, 400), //�̽���������60%
Array(2043302, 400), //�̽���������10%
Array(2043304, 400), //�̽������������70%
Array(2043305, 400), //�̽������������30%
Array(2043306, 400), //�̽���������65%
Array(2043307, 400), //�̽���������15%
Array(2043700, 400), //����ħ������100%
Array(2043701, 400), //����ħ������60%
Array(2043702, 400), //����ħ������10%
Array(2043704, 400), //����ħ���������70%
Array(2043705, 400), //����ħ���������30%
Array(2043706, 400), //����ħ������65%
Array(2043707, 400), //����ħ������15%
Array(2043800, 400), //����ħ������100%
Array(2043801, 400), //����ħ������60%
Array(2043802, 300), //����ħ������10%
Array(2043804, 300), //����ħ���������70%
Array(2043805, 300), //����ħ���������30%
Array(2043806, 300), //����ħ������65%
Array(2043807, 300), //����ħ������15%
Array(2044000, 500), //˫�ֽ���������100%
Array(2044001, 300), //˫�ֽ���������60%
Array(2044002, 300), //˫�ֽ���������10%
Array(2044004, 400), //˫�ֽ������������70%
Array(2044005, 300), //˫�ֽ������������30%
Array(2044006, 300), //˫�ֽ���������65%
Array(2044007, 300), //˫�ֽ���������15%
Array(2044010, 300), //˫�ֽ������ʾ���100%
Array(2044011, 300), //˫�ֽ������ʾ���70%
Array(2044012, 300), //˫�ֽ������ʾ���60%
Array(2044013, 300), //˫�ֽ������ʾ���30%
Array(2044014, 300), //˫�ֽ������ʾ���10%
Array(2044026, 300), //˫�ֽ����о���65%
Array(2044027, 300), //˫�ֽ����о���15%
Array(2044100, 300), //˫�ָ���������100%
Array(2044101, 300), //˫�ָ���������60%
Array(2044102, 300), //˫�ָ���������10%
Array(2044104, 300), //˫�ָ������������70%
Array(2044105, 300), //˫�ָ������������%30
Array(2044106, 300), //˫�ָ���������65%
Array(2044107, 300), //˫�ָ���������15%
Array(2044110, 300), //˫�ָ������ʾ���100%
Array(2044111, 300), //˫�ָ������ʾ���70%
Array(2044112, 300), //˫�ָ������ʾ���60%
Array(2044113, 300), //˫�ָ������ʾ���30%
Array(2044114, 300), //˫�ָ������ʾ���10%
Array(2044118, 300), //˫�ָ����о���65%
Array(2044119, 300), //˫�ָ����о���15%
Array(2044200, 300), //˫�ֶ�����������100%
Array(2044201, 300), //˫�ֶ�����������60%
Array(2044202, 300), //˫�ֶ�����������10%
Array(2044204, 300), //˫�ֶ��������������70%
Array(2044205, 300), //˫�ֶ��������������30%
Array(2044206, 300), //˫�ֶ�����������65%
Array(2044207, 300), //˫�ֶ�����������15%
Array(2044210, 300), //˫�ֶ��������ʾ���100%
Array(2044211, 300), //˫�ֶ��������ʾ���70%
Array(2044212, 300), //˫�ֶ��������ʾ���60%
Array(2044213, 300), //˫�ֶ��������ʾ���30%
Array(2044214, 300), //˫�ֶ��������ʾ���10%
Array(2044218, 300), //���ֶ������о���65%
Array(2044219, 300), //���ֶ������о���15%
Array(2044300, 300), //ǹ��������100%
Array(2044301, 300), //ǹ��������60%
Array(2044302, 300), //ǹ��������10%
Array(2044304, 300), //ǹ�����������70%
Array(2044305, 300), //ǹ�����������30%
Array(2044306, 300), //ǹ��������65%
Array(2044307, 300), //ǹ��������15%
Array(2044310, 300), //ǹ�����ʾ���100%
Array(2044311, 300), //ǹ�����ʾ���70%
Array(2044312, 300), //ǹ�����ʾ���60%
Array(2044313, 300), //ǹ�����ʾ���30%
Array(2044314, 300), //ǹ�����ʾ���10%
Array(2044318, 300), //ǹ���о���65%
Array(2044319, 300), //ǹ���о���15%
Array(2044400, 300), //ì��������100%
Array(2044401, 300), //ì��������60%
Array(2044402, 300), //ì��������10%
Array(2044404, 300), //ì�����������70%
Array(2044405, 300), //ì�����������30%
Array(2044406, 300), //ì��������65%
Array(2044407, 300), //ì��������15%
Array(2044410, 300), //ì�����ʾ���100%
Array(2044411, 300), //ì�����ʾ���70%
Array(2044412, 300), //ì�����ʾ���60%
Array(2044413, 300), //ì�����ʾ���30%
Array(2044414, 300), //ì�����ʾ���10%
Array(2044418, 300), //ì���о���65%
Array(2044419, 300), //ì���о���15%
Array(2044500, 300), //����������100%
Array(2044501, 300), //����������60%
Array(2044502, 300), //����������10%
Array(2044504, 300), //�������������70%
Array(2044505, 300), //�������������30%
Array(2044506, 300), //����������65%
Array(2044507, 300), //����������15%
Array(2044600, 300), //�󹥻�����100%
Array(2044601, 300), //�󹥻�����60%
Array(2044602, 300), //�󹥻�����10%
Array(2044604, 600), //�󹥻��������70%
Array(2044605, 600), //�󹥻��������30%
Array(2044606, 500), //�󹥻�����65%
Array(2044607, 500), //�󹥻�����15%
Array(2044700, 400), //ȭ�׹�������100%
Array(2044701, 200), //ȭ�׹�������60%
Array(2044702, 300), //ȭ�׹�������10%
Array(2044704, 300), //ȭ�׹����������70%
Array(2044705, 300), //ȭ�׹����������30%
Array(2044706, 300), //ȭ�׹�������65%
Array(2044707, 300), //ȭ�׹�������15%
Array(2044800, 300), //ȭ�׹�������100%
Array(2044801, 300), //ȭ�׹�������60%
Array(2044802, 300), //ȭ�׹�������10%
Array(2044803, 300), //ȭ�׹�������70%
Array(2044804, 300), //ȭ�׹�������30%
Array(2044805, 300), //ȭ�������ʾ���100%
Array(2044806, 300), //ȭ�������ʾ���70%
Array(2044807, 300), //ȭ�������ʾ���60%
Array(2044808, 300), //ȭ�������ʾ���30%
Array(2044809, 300), //ȭ�������ʾ���10%
Array(2044811, 300), //ȭ�׹�������65%
Array(2044812, 300), //ָ�ڹ�������15%
Array(2044813, 300), //ָ�����о���65%
Array(2044814, 300), //ָ�����о���15%
Array(2044900, 300), //��ǹ��������100%
Array(2044901, 300), //��ǹ��������60%
Array(2044902, 300), //��ǹ��������10%
Array(2044903, 300), //��ǹ��������70%
Array(2044904, 300), //��ǹ��������30%
Array(2044906, 300), //��ǹ��������65%
Array(2044907, 300), //��ǹ��������15%
Array(2049100, 300), //�������60%
Array(2049200, 500), //������������70%
Array(2049201, 500), //������������30%
Array(2049202, 500), //�������ݾ���70%
Array(2049203, 500), //�������ݾ���30%
Array(2049204, 500), //������������70%
Array(2049205, 500), //������������30%
Array(2049206, 500), //�������˾���70%
Array(2049207, 500), //�������˾���30%
Array(2049208, 500), //����HP����70%
Array(2049209, 500), //����HP����30%
Array(2049210, 500), //����MP����70%
Array(2049211, 500) //����MP����30%
);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "#h0#,�����������ﹺ��#e#b��ͨ����#n#k,��ѡ������Ҫ�������Ʒ\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# - #r"+(itemlist[i][1]*500)+"#b��Ϸ��  \r\n";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("������������������Ҫ���������\r\n\r\n#r1����Ҫ" + (itemlist[selects][1]*500) + "��#b��Ϸ��#k", 1, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("���빺��" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]*500) + "��Ϸ�ҡ�");
        } else if (a == 3) {
            if (cm.getPlayer().getMeso() >= buynum * itemlist[selects][1]*500 ) {
                cm.gainMeso(-buynum * itemlist[selects][1]*500);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("����ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻����Ϸ�ҡ�");
                cm.dispose();
            }
        }
    }//mode
}//f
/* 
 * 2432151 - ���� ���д� ����
 */
var period = -1;
var mountSkillId = 80001329;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);//, true);
    im.dispose();
}
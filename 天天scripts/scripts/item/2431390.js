/* 
 * 2431390 - ���� ���� ����
 */
var period = 90;
var mountSkillId = 80001229;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId);
    im.dispose();
}
/* 
 * 2431390 - ���� �ܳ� ����
 */
var period = 90;
var mountSkillId = 80001032;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId,-1);
    im.dispose();
}
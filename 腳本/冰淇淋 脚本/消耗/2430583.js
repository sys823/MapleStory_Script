/* 
 * 2430583 - 天马3天交换券 - 双击可以在3天内使用骑乘技能[天马]。\n习得#c飞行骑乘#技能后，还可驾驭飞行。
 */
var period = 3;
var mountSkillId = 80001067;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}
var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("state", "false");
    em.setProperty("endEvent", "true");
    em.setProperty("check", "0");
    em.setProperty("maxCheck", "9999999");
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 60 * 2  ; //���ö�ÿ���
    }
    setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
}

function startEvent() {
    em.setProperty("state", "true");
    em.setProperty("endEvent", "false");
    em.setProperty("check", 0);
    em.setProperty("maxCheck", "" + getMaxCheck(Math.floor(Math.random() * 2)));
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 10);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 60 * 2 ; //���ö�ý���
    }
    setupTask = em.scheduleAtTimestamp("finishEvent", nextTime);
    em.broadcastServerMsg(5120010,"[��¥�]��Ѿ�������10���Ӻ��������1���ﵽ���¥����ҽ����һ�Ƚ�6666�����",true);
}

function finishEvent() {
    if (em.getProperty("endEvent").equals("false")) {
        em.broadcastServerMsg("[��¥�] ��Ѿ�������110���Ӻ��������λδ�������н����������ٽ�������");
    } else {
        em.broadcastServerMsg("[��¥�] ���λ���н����Ѿ����ţ��´λ����110���Ӻ�����ϣ����һ����μӡ�");
    }
    scheduleNew();
}

function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(true);
    }
}

function getMaxCheck(type) {
    var lou = Math.floor(Math.random() * 200) + 288;
    switch (type) {
    case 0:
        return lou;
    case 1:
        return lou + 50;
		}
		return 999;
}

function rand(lbound, ubound) {
    return Math.floor(Math.random() * (ubound - lbound)) + lbound;
}
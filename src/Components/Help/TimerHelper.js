import dayjs from "dayjs";

export function setCurrentTimer(countdown) {
    const timeStampDayjs = dayjs(countdown);
    const nowDayjs = dayjs();
    if (timeStampDayjs.isBefore(nowDayjs)) {
        return {
            d: '00',
            h: '00',
            m: '00',
            s: '00',
        }
    }

    return {
        s: getSeconds(nowDayjs, timeStampDayjs),
        m: getMinutes(nowDayjs, timeStampDayjs),
        h: getHours(nowDayjs, timeStampDayjs),
        d: getDays(nowDayjs, timeStampDayjs)
    }
}

function getSeconds(nowDayjs, timeStampDayjs) {
    const seconds = timeStampDayjs.diff(nowDayjs, 'seconds') % 60;
    return addZero(seconds, 2);
}
function getMinutes(nowDayjs, timeStampDayjs) {
    const minutes = timeStampDayjs.diff(nowDayjs, 'minutes') % 60;
    return addZero(minutes, 2);

}
function getHours(nowDayjs, timeStampDayjs) {
    const hours = timeStampDayjs.diff(nowDayjs, 'hours') % 24;
    return addZero(hours, 2);
}
function getDays(nowDayjs, timeStampDayjs) {
    const days = timeStampDayjs.diff(nowDayjs, 'days') % 24;
    return days.toString();
}

function addZero(number, minLength) {
    const strNum = number.toString();
    if (strNum.length >= minLength) return strNum;
    return '0'.repeat(minLength - strNum.length) + strNum;
}


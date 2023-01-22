import { check, sleep } from 'k6';
import http from 'k6/http';
export let errorRate = new Rate('errors');
import { Trend, Gauge, Rate } from 'k6/metrics';
const SLEEP_DURATION = 0.1;
let ReqDurationTrend = new Trend('Request duration', true)

export function liveData(endpoints) {
    let res = http.get(endpoints.EXAMPLE1_ENDPOINT, {
        tags: {
            test_type: "users100",
            //test_type: "users125",
            //test_type: "users150",
        },
    })
    errorRate.add(res.error_code)
    ReqDurationTrend.add(res.timings.duration)
    sleep(SLEEP_DURATION)
}

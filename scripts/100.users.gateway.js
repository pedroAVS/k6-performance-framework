import { scenarios } from './common/scenarios.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import { liveData } from "./common/tests.js"
import { ApiGateway } from "./common/constants.js"

const market = `DE`
const language = `de`
const baseUrl = ApiGateway
const endpoints = {
    EXAMPLE1_ENDPOINT: `${baseUrl}/data/${market}/${language}/*****`,
    EXAMPLE2_ENDPOINT: `${baseUrl}/*****/${market}/${language}/*****`,
}

export function handleSummary(data) {
    return {
        "GATEWAY_100_summary.html": htmlReport(data),
        stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
}

export let options = {
    thresholds: {
        'http_req_duration{test_type:users_100}': ['p(90)<20000'],
        'errors{test_type:users_100}': ['rate < 0.01']
    },
    scenarios: {
        users_100: scenarios.users_100,
    },
};

export default function() {
    liveData(endpoints)
}
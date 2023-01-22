export let scenarios = {
    minIterationDuration: '2s',
    noConnectionReuse: true,
    setupTimeout: '20s',
    summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(95)', 'p(99)', 'p(99.99)'],
    teardownTimeout: '30s',
    users_100: {
        executor: 'constant-vus',
        vus: 100,
        duration: '10m'
    },
    users_125: {
        executor: 'constant-vus',
        vus: 125,
        duration: '10m'
    },
    users_150: {
        executor: 'constant-vus',
        vus: 150,
        duration: '10m'
    }
}
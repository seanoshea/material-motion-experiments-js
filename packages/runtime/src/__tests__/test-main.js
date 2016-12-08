var tests = [];
for (var file in window.__karma__.files) {
    tests.push(file);
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src/__tests__',
    deps: tests,
    callback: window.__karma__.start
});

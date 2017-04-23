var gulp = require('gulp');

gulp.task("js:app", (done) => {
    exec(webpackcmd + " --config webpack.config.js", function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        done(err);
    });
});
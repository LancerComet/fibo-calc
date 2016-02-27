/*
 *  Fibo Calculator By LancerComet at 20:40, 2016.02.27.
 *  # Carry Your World #
 */

var gulp = require("gulp");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var stylus = require("gulp-stylus");

gulp.task("default", ["js-tasks", "stylus-tasks"]);

(function jsTasks () {

    gulp.task("js-tasks", ["js-watch", "js-package"]);

    gulp.task("js-watch", function () {
        gulp.watch("./src/**/*.js", ["js-package"]);
    });

    gulp.task("js-package", function () {
        gulp.src("./src/scripts/app.js")
            .pipe(uglify())
            .pipe(rename("fibo-app.min.js"))
            .pipe(gulp.dest("./dist/scripts/"));
    });

})();


(function stylusTasks () {

    gulp.task("stylus-tasks", ["stylus-watch", "stylus-package"]);

    gulp.task("stylus-watch", function () {
        gulp.watch("./src/**/*.styl", ["stylus-package"]);
    });

    gulp.task("stylus-package", function () {
        gulp.src("./src/stylus/app.styl")
            .pipe(stylus({
                compress: true
            }))
            .pipe(rename("fibo-app.min.css"))
            .pipe(gulp.dest("./dist/stylesheets/"));
    });

})();
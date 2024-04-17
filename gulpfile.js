const gulp = require('gulp');
const sass = require('gulp-sass')(require ('sass'));

//criando função para pegar o arquivo de dev  scss e criar o arquvo de programa css.
function styles() {
    //retornando arquivo em que vai ser pego
    return gulp.src('./src/styles/*.scss')
    //comprimindo arquivo
    .pipe(sass({ outputStyle: 'compressed' }))
    //criando local onde o arquivo vai ficar
    .pipe(gulp.dest('./dist/css'));
}

//rodando a função do arquivo SCSS para CSS
exports.default = styles;
//fazendo função de vigia automatica
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
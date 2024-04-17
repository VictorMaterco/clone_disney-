//instalando plugin do gulp
const gulp = require('gulp');
// instalando plugin de Sass
const sass = require('gulp-sass')(require ('sass'));
// instalando plugin de minificar imagens
const imagemin = require('gulp-imagemin');

//criando função para pegar o arquivo de dev  scss e criar o arquvo de programa css.
function styles() {
    //retornando arquivo em que vai ser pego
    return gulp.src('./src/styles/*.scss')
    //comprimindo arquivo
    .pipe(sass({ outputStyle: 'compressed' }))
    //criando local onde o arquivo vai ficar
    .pipe(gulp.dest('./dist/css'));
}

//criando funcao para minificar img
function images() {
    //retornando arquivo em que vai ser pego
    return gulp.src('./src/images/**/*')
    //comprimindo images
    .pipe(imagemin())
    //criando local onde o arquivo vai ficar
    .pipe(gulp.dest('./dist/images'));
}

//rodando a função do arquivo SCSS para CSS
exports.default = gulp.parallel(styles, images);

//fazendo função de vigia automatica
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
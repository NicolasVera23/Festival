const {src, dest, watch, parallel} = require("gulp")

//CSS
const sass = require("gulp-sass")(require('sass'))
const plumber = require('gulp-plumber')

//Imagenes
const webp = require('gulp-webp')

function css(callBack) {
    src('src/scss/app.scss')//Identifica el archivo de SASS
    .pipe(plumber())
    .pipe(sass())//Compila el archivo
    .pipe(dest('build/css'))//Almacenarlo en el disco duro

    
    callBack()
}
function javascript(callBack) {
    src('/src/js/**/*.js')
    .pipe(dest('build/js'))

    callBack()
}
function dev(callBack) {
    watch('src/scss/**/*.scss', css) //Con doble asterisco aqui y arriba asi **/* y arriba queda para observar todos los cambios
    watch('src/js/**/*.js', javascript) //Con doble asterisco aqui y arriba asi **/* y arriba queda para observar todos los cambios
    
    callBack()
}
function versionWebp(callBack) {
    const options = {
        quality: 50
    }
    src('/src/img/**/*.{png,jpg}') //Va a entrar de forma recursiva y buscar con estos dos formatos
        .pipe(webp(options))
        .pipe(dest('build/img'))
    callBack()
}
exports.css = css;
exports.js = javascript;
exports.versionWebp = versionWebp;
exports.dev = parallel(versionWebp, dev, javascript);

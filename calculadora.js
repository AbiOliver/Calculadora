function insert(num){
    var resultado = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resultado + num;
}
function clean(){
    var ac = window.document.getElementById('res')
    ac.addEventListener('click', clean)
    ac.innerHTML = ''
}
function back() {
    var resultado = window.document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular() {
    var res = document.getElementById('res').innerHTML;
   if(res){
    var res = window.document.getElementById('res').innerHTML = eval(res);
   }else{
    document.getElementById('res').innerHTML = 'Sem valor'
   }
}
var hora = window.document.getElementById('horas')
var minutos = window.document.querySelector('#minutos')
var segundos = window.document.querySelector('#segundos')

setInterval(()=>{
    let data = new Date()
    let dhora = data.getHours()
    let dminutos = data.getMinutes()
    let dsegundos = data.getSeconds()

    hora.innerHTML = `${formatTime(dhora)}`
    minutos.innerHTML = `${formatTime(dminutos)}`
    segundos.innerHTML = `${formatTime(dsegundos)}`


}, 1000)

function formatTime(time){
    return time < 10 ? '0' + time:time
}
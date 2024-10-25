let hora_atual = Date.now;

function et(diaDoAno){
  let b = ((diaDoAno-81)*(360/364));
  return (9.87*Math.sin(2*b))-(7.53*Math.cos(b))-(1.5*Math.sin(b));
}

function longAdjust(fusoHorario){
  let longPadrao = (fusoHorario)*15;
  latLocal((longitude)=>{
     return longPadrao-longitude;
  })
}

function latLocal(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((posicao) => {
            const longitude = posicao.coords.longitude;
            callback(longitude);
        }, (erro) => {
            console.error("Erro ao obter localização:", erro.message);
            callback(null);
        });
    } else {
        console.error("Geolocalização não é suportada neste navegador.");
        callback(null);
    }
}

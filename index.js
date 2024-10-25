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

function hoje() {
    const h = new Date();
    const inicioDoAno = new Date(h.getFullYear(), 0, 0); // 0 para janeiro
    const diff = h - inicioDoAno; // diferença em milissegundos
    const diaDoAno = Math.floor(diff / (1000 * 60 * 60 * 24)); // converte para dias
    return diaDoAno;
}

function tsa(hora_padrao,et,correcao_latitude,hv){
  let ds = hora_padrao-(hv*(60*1000));
  let equacao_tempo = et(hoje());
  let 
}

console.log('Tempo solar aparente = Tempo padrão local + Equação de tempo +- 4(Longitude Padrão - Longitude Local)');
console.log('TSA = '+hora_atual+' ');

export default function somarHoras(tempo, minutosASomar) {
    // Divida a string do tempo em horas e minutos
    const [horasStr, minutosStr] = tempo.split(":");
    
    // Converta as partes de horas e minutos em números inteiros
    const horas = parseInt(horasStr, 10);
    const minutos = parseInt(minutosStr, 10);
    
    // Calcule o total de minutos
    const totalMinutos = horas * 60 + minutos + minutosASomar;
    
    // Extraia as horas e minutos finais
    const horasFinais = Math.floor(totalMinutos / 60);
    const minutosFinais = totalMinutos % 60;
    
    // Formate as horas e minutos como strings (com zero à esquerda, se necessário)
    const horasFormatadas = horasFinais.toString().padStart(2, "0");
    const minutosFormatados = minutosFinais.toString().padStart(2, "0");
    
    // Retorne o horário final no formato "hh:mm"
    return `${horasFormatadas}:${minutosFormatados}`;
  }
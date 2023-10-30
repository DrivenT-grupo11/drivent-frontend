export default function somarHoras(tempo, minutosASomar) {
    const [horasStr, minutosStr] = tempo.split(":");
    
    const horas = parseInt(horasStr, 10);
    const minutos = parseInt(minutosStr, 10);
    
    const totalMinutos = horas * 60 + minutos + minutosASomar;
    
    const horasFinais = Math.floor(totalMinutos / 60);
    const minutosFinais = totalMinutos % 60;
    
    const horasFormatadas = horasFinais.toString().padStart(2, "0");
    const minutosFormatados = minutosFinais.toString().padStart(2, "0");
    
    return `${horasFormatadas}:${minutosFormatados}`;
  }
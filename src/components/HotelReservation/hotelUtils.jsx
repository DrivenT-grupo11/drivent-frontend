export function blockedBookingMessage(error) {
    if (error === 'Cannot list hotels! Ticket not paid') {
      return (
        <p>
          Você precisa ter confirmado pagamento antes <br />
          de fazer a escolha de hospedagem.
        </p>
      )
    }
    
    if (error === 'Cannot list hotels! Ticket does not includes hotel') {
      return (
        <p>
          Sua modalidade de ingresso não inclui hospedagem <br />
          Prossiga para a escolha de atividades.
        </p>
      );
    } else {
      return <p>Ocorreu um erro! Tente novamente.</p>
    }
  }
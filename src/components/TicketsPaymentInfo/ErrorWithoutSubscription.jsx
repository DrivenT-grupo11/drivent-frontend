import styled from 'styled-components';


export default function ErrorWithoutSubscription() {

    return (
        <>
            <AccessWithoutSubscriptionMessage>
                Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
            </AccessWithoutSubscriptionMessage>
        </>
    )
}

const AccessWithoutSubscriptionMessage = styled.div`
    width: 800px;
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8E8E8E;
> p {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
}
`;
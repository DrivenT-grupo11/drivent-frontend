import styled from 'styled-components';
import { blockedBookingMessage } from './hotelUtils';

export default function BlockedBooking({ error }) {
  return (
    <BlockedBookingMessageWrapper>
      <StyledMessage>
        {blockedBookingMessage(error.response.data)}
      </StyledMessage>
    </BlockedBookingMessageWrapper>
  );
}

const BlockedBookingMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  width: 100%;
  height: 89%;
`;

const StyledMessage = styled.div`
  > p {
    font-family: Roboto !important;
    color: #8e8e8e;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

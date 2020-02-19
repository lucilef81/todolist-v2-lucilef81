import styled from 'styled-components';
import config from '../../StyledConfig';

const Titletyled = styled.div`
  .title {
    font-size: 1.5rem;
    padding: 1rem;
    border-bottom: 1px solid ${config.primary};
    text-align: left;
    color: ${config.primary};
  }
`;

export default Titletyled;

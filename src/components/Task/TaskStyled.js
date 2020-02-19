import styled from 'styled-components';
import config from '../../StyledConfig';

const TaskStyled = styled.div`
  .task {
    border: 1px solid ${config.primary};
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem;
    transition: all 300ms;

    &:hover {
      transition: all 300ms;
      background-color: ${config.primaryHover};
      color: #fff;
    }
  }
`;

export default TaskStyled;

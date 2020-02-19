import styled from 'styled-components';
import config from '../../StyledConfig';

const TasksStyled = styled.div`
  .tasks {
    text-align: center;
    display: grid;
    align-items: center;
    justify-content: center;
    color: ${config.primary};
  }
`;

export default TasksStyled;

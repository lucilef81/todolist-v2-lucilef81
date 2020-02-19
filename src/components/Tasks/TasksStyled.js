import styled from 'styled-components';
import config from '../../StyledConfig';

const TasksStyled = styled.div`
  .tasks {
    text-align: left;
    display: grid;
    align-items: left;

    color: ${config.primary};
  }
`;

export default TasksStyled;

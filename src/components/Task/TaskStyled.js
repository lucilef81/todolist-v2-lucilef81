import styled from 'styled-components';
import config from '../../StyledConfig';

const TaskStyled = styled.div`
  .task {
    border: 1px solid ${config.primary};
    border-radius: 10px;
    margin-top: 1.5rem;
    transition: all 300ms;

    &.done {
      opacity: 0.6;
      text-decoration: line-through;
    }

    input {
      display: none;
    }

    label {
      width: 100%;
      display: block;
      padding: 1rem;
    }

    &:hover {
      transition: all 300ms;
      background-color: ${config.primaryHover};
      color: #fff;
    }
  }
`;

export default TaskStyled;

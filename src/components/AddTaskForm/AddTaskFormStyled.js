import styled from 'styled-components';
import config from '../../StyledConfig';

const AddTaskFormStyled = styled.div`
  .add-task {
    input {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 2px solid ${config.light};
      border-radius: 10px;
      color: ${config.primary};
      font-size: 1rem;

      &:focus {
        border-color: ${config.primary};
      }
    }
  }
`;

export default AddTaskFormStyled;

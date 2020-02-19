import styled from 'styled-components';
import config from '../../StyledConfig';

const AddTaskFormStyled = styled.div`
  .add-task {
    padding: 1rem;

    input {
      width: 500px;
      padding: 0.5rem;
      border: 1px solid ${config.primary};
      border-radius: 10px;
      margin-bottom: 1rem;
      margin-right: 1rem;
      color: ${config.primary};
    }

    .btn {
      color: ${config.primary};
      padding: 0.8rem;
      border-radius: 10px;
      transition: all 300ms;
      font-weight: bold;

      &:hover {
        background-color: ${config.primary};
        color: #fff;
      }
    }
  }
`;

export default AddTaskFormStyled;

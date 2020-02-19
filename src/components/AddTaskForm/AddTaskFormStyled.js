import styled from 'styled-components';
import config from '../../StyledConfig';

const AddTaskFormStyled = styled.div`
  .add-task {
    display: flex;
    justify-content: center;
    align-items: stretch;

    input {
      width: 200px;
      padding: 0.75rem 1rem;
      border: 1px solid ${config.primary};
      border-radius: 10px;
      color: ${config.primary};
      font-size: 1rem;
    }

    .btn {
      color: ${config.primary};
      padding: 0 1rem;
      margin-left: 1rem;
      border-radius: 10px;
      transition: all 300ms;
      font-weight: bold;

      &:hover {
        background-color: ${config.primaryHover};
        color: #fff;
      }
    }
  }
`;

export default AddTaskFormStyled;

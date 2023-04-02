import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxButton = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 6px;
  padding: 10px;

  button {
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    font-size: 14px;
    line-height: 10px;
    padding: 10px;
    color: #6246ea;
    font-weight: 700;
    letter-spacing: 0.03rem;
  }

  .button-list {
    background: #6246ea;
    border-radius: 6px;
    color: #fff;
  }
`;

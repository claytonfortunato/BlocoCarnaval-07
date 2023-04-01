import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 33.25rem;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;

  .ImageOne {
    position: absolute;
    top: 0;
    left: 0;
  }

  .ImageTwo {
    position: absolute;
    top: 13.375rem;
    right: 0;
  }
`;

export const Content = styled.div``;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: #e45858;
    text-transform: uppercase;
  }

  span {
    color: #6246ea;
  }
`;

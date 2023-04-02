import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 33.25rem;
  background: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const ContentSearch = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.div``;

export const ContainerSelect = styled.div``;

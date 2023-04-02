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
  gap: 20px;
  p {
    color: #e45858;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }

  h1 {
    font-size: 2.7rem;
    line-height: 3.75rem;
    font-weight: bold;
    max-width: 40.438rem;
    text-align: center;
  }

  span {
    color: #6246ea;
  }
`;

export const ContentSearch = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 10px;
  padding: 10px;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 0%;
  gap: 10px;
  padding: 12px 8px;
  background: #f4f4ff;
`;

export const ContainerSelect = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 0%;
  gap: 10px;
  padding: 12px 8px;
  background: #f4f4ff;
`;

export const Button = styled.button`
  display: flex;
  flex: 1 1 0%;
  background: #6246ea;
  padding: 12px 0px;
  font-weight: bold;
  color: #fff;
`;

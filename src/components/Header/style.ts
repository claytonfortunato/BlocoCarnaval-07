import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 33.25rem;
  background: ${(props) => props.theme.gray100};
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

export const Content = styled.div`
  width: 62.063rem;
  z-index: 50;
`;

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
    color: ${(props) => props.theme.purple};
  }
`;

export const ContentSearch = styled.div`
  max-width: 980px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 40px;
  padding: 40px;
  border-radius: 10px;
  z-index: 10;
  box-shadow: 0px 5px 5px 3px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 0%;
  gap: 10px;
  padding: 12px 8px;
  background: #f4f4ff;
  border-radius: 6px;
  input {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    border: none;
    background: #f4f4ff;
    outline: none;
    color: #828282;
  }
`;

export const ContainerSelect = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 0%;
  gap: 10px;
  padding: 12px 8px;
  background: ${(props) => props.theme.gray100};
  border-radius: 6px;

  select {
    width: 100%;
    -webkit-appearance: none !important;
    border: none;
    background: #f4f4ff;
    color: #828282;
    font-size: 16px;
    outline: none;
    option {
      color: #828282;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  background: #6246ea;
  padding: 12px 32px;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  border-radius: 4px;
  text-transform: uppercase;
  line-height: 1.5rem;
  border: none;
  transition: 0.3s all ease-out;
  &:hover {
    cursor: pointer;
    color: #333;
  }
`;

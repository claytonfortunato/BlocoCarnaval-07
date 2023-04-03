import styled from "styled-components";

export const Container = styled.div`
  width: 384px;
  border: 1px solid #eaeaea;
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  img {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 16px;
  h3 {
    font-size: 20px;
    line-height: 1.75rem;
  }

  span {
  }
`;

export const BoxLocation = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;

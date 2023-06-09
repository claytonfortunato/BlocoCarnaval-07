import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 7rem;
`;

export const Container = styled.div`
  padding-bottom: 12px;
`;

export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 32px;
  }
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
    color: ${(props) => props.theme.purple};
    font-weight: 700;
    letter-spacing: 0.03rem;
    border-radius: 6px;

    &:hover {
      background: ${(props) => props.theme.purple};
      color: ${(props) => props.theme.white};
      transition: 0.5s all ease-out;
      border-radius: 6px;
    }
  }

  .button-list {
    background-color: ${(props) => props.theme.purple};
    border-radius: 6px;
    color: ${(props) => props.theme.white};
    margin-right: 8px;
  }
`;

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  margin-top: 2.5rem;

  @media screen and (max-width: 1238px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

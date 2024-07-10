import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 40px;
  padding: 100px;
  background-color: rgb(11, 11, 48);
`;

export const CarCardWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 400px;
  min-height: 150px;
  max-height: fit-content;
  padding: 40px;
  border: 2px solid black;
  border-radius: 4px;
  background-color: white;
`;

export const CarInfoContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const CarInfoTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const CarInfo = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

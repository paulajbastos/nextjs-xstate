import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const TrafficLight = styled.div`
  width: 92px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const Light = styled.input`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  margin-bottom: 10px;
  opacity: 0.5;
  appearance: none;
  &:checked {
    opacity: 1;
  }

  &.yellow {
    background-color: #ffff00;
  }
  &.green {
    background-color: #4cbb17;
  }
  &.red {
    background-color: #e60000;
  }
`;

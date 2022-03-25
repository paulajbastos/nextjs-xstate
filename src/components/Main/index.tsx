import { useMachine } from '@xstate/react';
import { trafficLightMachine } from 'states/trafficLightMachine';

import * as S from './styles';

const Main = () => {
  // Typescript will infer what current and send are here
  // And will provide useful information about usage
  const [current, send] = useMachine(trafficLightMachine);

  return (
    <S.Container>
      <S.TrafficLight>
        <S.Light
          type="radio"
          readOnly
          className="red"
          checked={current.matches('red')}
        />
        <S.Light
          type="radio"
          readOnly
          className="yellow"
          checked={current.matches('yellow')}
        />
        <S.Light
          type="radio"
          readOnly
          className="green"
          checked={current.matches('green')}
        />
        <button onClick={() => send('NEXT')}>NEXT</button>
      </S.TrafficLight>
    </S.Container>
  );
};

export default Main;

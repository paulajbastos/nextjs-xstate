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
          // checked={current.matches('red')}
          checked={current.matches({ ON: 'red' })}
        />
        <S.Light
          type="radio"
          readOnly
          className="yellow"
          checked={current.matches({ ON: 'yellow' })}
        />
        <S.Light
          type="radio"
          readOnly
          className="green"
          checked={current.matches({ ON: 'green' })}
        />
        <button onClick={() => send('NEXT')}>NEXT</button>
        <button onClick={() => send('TURN_ON')}>TURN ON</button>
        <button onClick={() => send('TURN_OFF')}>TURN OFF</button>
      </S.TrafficLight>
    </S.Container>
  );
};

export default Main;

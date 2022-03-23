// import { createMachine } from 'xstate';

// import { useMachine } from '@xstate/react';

export default function Home() {
  // const promiseMachine = createMachine({
  //   id: 'promise',
  //   initial: 'pending',
  //   states: {
  //     pending: {
  //       on: {
  //         RESOLVE: { target: 'resolved' },
  //         REJECT: { target: 'rejected' }
  //       }
  //     },
  //     resolved: {
  //       type: 'final'
  //     },
  //     rejected: {
  //       type: 'final'
  //     }
  //   }
  // });
  // const [state, send] = useMachine(promiseMachine);

  return (
    <div className="container">
      <div className="pole" />
      <div className="traffic-light">
        <input
          type="radio"
          readOnly
          className="light red"
          // checked={current.matches("red")}
        />
        <input
          type="radio"
          readOnly
          className="light yellow"
          // checked={current.matches("yellow")}
        />
        <input
          type="radio"
          readOnly
          className="light green"
          // checked={current.matches("green")}
        />
        {/* <button onClick={() => send("NEXT")}>NEXT</button> */}
      </div>
    </div>

    // <div>

    // {state.matches('pending') && <p>Loading...</p>}
    // {state.matches('rejected') && <p>Promise Rejected</p>}
    // {state.matches('resolved') && <p>Promise Resolved</p>}
    // <div>

    //   <button onClick={() => send('RESOLVE')}>Resolve</button>
    //   <button onClick={() => send('REJECT')}>Reject</button>
    // </div>
    // </div>
  );
}

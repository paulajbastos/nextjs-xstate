import { useMachine } from '@xstate/react';
import { jokesMachine } from 'states/jokesMachine';

// import * as S from './styles';

const Search = () => {
  const [{ context, matches }, send] = useMachine(jokesMachine);

  const { results, error, input } = context;

  return (
    <div className="container">
      <h1>Dad Joke Search</h1>
      <div className="search-bar">
        <input
          type="text"
          name="name"
          value={input}
          onChange={(e) => send({ type: 'TYPE', value: e.target.value })}
        />
        <button disabled={matches('searching')} onClick={() => send('SEARCH')}>
          Search
        </button>
      </div>
      {matches('error') && <div>{error}</div>}
      <ul className="results">
        {results.map(({ joke, id }, index) => (
          <li className="result-item" key={id}>
            {joke}
            {index !== results.length ? <hr /> : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

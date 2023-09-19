import { useState } from 'react';

function PageOne() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const content = [
    'React why !!!!!!!!!!!!!!',
    'React what ????????????',
    'React who is !!!!!????????',
    'React js ',
  ];
  return (
    <div>
      <h1>REACT</h1>
      <button
        className={activeContentIndex === 0 ? 'active' : ''}
        onClick={() => setActiveContentIndex(0)}
      >
        React why
      </button>
      <button
        className={activeContentIndex === 1 ? 'active' : ''}
        onClick={() => setActiveContentIndex(1)}
      >
        React what
      </button>
      <button
        className={activeContentIndex === 2 ? 'active' : ''}
        onClick={() => setActiveContentIndex(2)}
      >
        React who
      </button>
      <button
        className={activeContentIndex === 3 ? 'active' : ''}
        onClick={() => setActiveContentIndex(3)}
      >
        React js
      </button>

      <ul>{content[activeContentIndex]}</ul>
    </div>
  );
}

export default PageOne;

import { useState } from 'react';

const questions = [
  {
    id: 1234,
    question: 'What language is React based on?',
    answer: 'JavaScript',
  },
  {
    id: 4321,
    question: 'What are the building blocks of React apps?',
    answer: 'Components',
  },
  {
    id: 5678,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: 'JSX',
  },
  {
    id: 8765,
    question: 'How to pass data from parent to child components?',
    answer: 'props',
  },
  {
    id: 9012,
    question: 'How to give components memory?',
    answer: 'useState hook',
  },
  {
    id: 2109,
    question:
      'What do we call an input element that is completely synchronized with state?',
    answer: 'Controlled Element',
  },
  {
    id: 3456,
    question: 'When you need data to change within a component, use ____?',
    answer: 'State',
  },
  {
    id: 6543,
    question:
      'When you need to define the "settings" of a component, use ____?',
    answer: 'props',
  },
  {
    id: 1212,
    question: 'React will rerender the UI when the ____ is changed',
    answer: 'state',
  },
];

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedID, setSelectedID] = useState(null);

  function handleClick(id) {
    setSelectedID(id !== selectedID ? id : null);
  }

  return (
    <ul>
      {questions.map((question) => (
        <div
          key={question.id}
          className={`card ${selectedID === question.id ? 'answered' : ''}`}
          onClick={() => handleClick(question.id)}
        >
          <p>
            {selectedID === question.id ? question.answer : question.question}
          </p>
        </div>
      ))}
    </ul>
  );
}

// src/components/Admin.js
import React, { useState } from 'react';

const Admin = () => {
  const [quiz, setQuiz] = useState({ title: '', questions: [] });
  const [question, setQuestion] = useState({ text: '', options: ['', '', '', ''], correct: '' });

  const addQuestion = () => {
    setQuiz({ ...quiz, questions: [...quiz.questions, question] });
    setQuestion({ text: '', options: ['', '', '', ''], correct: '' });
  };

  const saveQuiz = () => {
    const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    quizzes.push(quiz);
    localStorage.setItem('quizzes', JSON.stringify(quizzes));
    setQuiz({ title: '', questions: [] });
  };

  return (
    <div className="md:w-[80%] sm:w-[95%] w-[98%] mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create a Quiz</h2>
      <input
        type="text"
        className="border rounded p-2 w-full mb-4"
        placeholder="Quiz Title"
        value={quiz.title}
        onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
      />
      <h3 className="text-xl font-semibold mb-2">Add a Question</h3>
      <input
        type="text"
        className="border rounded p-2 w-full mb-2"
        placeholder="Question"
        value={question.text}
        onChange={(e) => setQuestion({ ...question, text: e.target.value })}
      />
      {question.options.map((option, index) => (
        <input
          key={index}
          type="text"
          className="border rounded p-2 w-full mb-2"
          placeholder={`Option ${index + 1}`}
          value={option}
          onChange={(e) => {
            const newOptions = [...question.options];
            newOptions[index] = e.target.value;
            setQuestion({ ...question, options: newOptions });
          }}
        />
      ))}
      <input
        type="text"
        className="border rounded p-2 w-full mb-4"
        placeholder="Correct Option"
        value={question.correct}
        onChange={(e) => setQuestion({ ...question, correct: e.target.value })}
      />
      <button
        onClick={addQuestion}
        className="bg-blue-500 text-white p-2 rounded mr-2"
      >
        Add Question
      </button>
      <button
        onClick={saveQuiz}
        className="bg-green-500 text-white p-2 rounded"
      >
        Save Quiz
      </button>
    </div>
  );
};

export default Admin;

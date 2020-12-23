/*

Есть два эндпоинта:

https://my-json-server.typicode.com/paraplancrm/api/students (Список учеников)

[
  {
    "name": "Надежда Калашникова",
    "status": "38d4f887-add9-416a-8590-8352c6e28e13"
  },
]

https://my-json-server.typicode.com/paraplancrm/api/statuses (Список статусов)

[
  {
    "id": "38d4f887-add9-416a-8590-8352c6e28e13",
    "name": "Записался на пробное",
    "order": 20,
    "active": true
  },
]


1. Вывести список учеников в формате "Имя ученика - Название статуса".
// 2. Разбить список на два - первый содержит только активных учеников, второй только неактивных.
// 3. Отсортировать списки по полю order статуса и по фамилии ученика.

fetch('url').then(res => res.json())

*/


import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

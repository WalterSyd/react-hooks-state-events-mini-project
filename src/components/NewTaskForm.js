// NewTaskForm.js
import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setText(''); // Clear form
    setCategory(categories[0]); // Reset category
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
      </label>
      <label>
        Category
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;

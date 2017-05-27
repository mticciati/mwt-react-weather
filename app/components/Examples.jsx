import React from 'react';
import { Link } from 'react-router-dom';

const Examples = (props) => (
  <div>
    <h1 className="text-center page-title">Examples</h1>
    <p>Here are a few example locations to try out:</p>
    <ol>
      <li>
        <Link to="/examples/?location=Manhattan">Manhattan, NY</Link>
      </li>
      <li>
        <Link to="/examples/?location=Rio">Rio, Brazil</Link>
      </li>
    </ol>
  </div>
);

export default Examples; 
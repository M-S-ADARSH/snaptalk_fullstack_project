import React, { useState } from 'react';
import axios from 'axios';
import GrammarReport from './GrammerReport';
import './GrammerChecker.css'; // Import the CSS file

const GrammarChecker = () => {
    const [text, setText] = useState('');
    const [results, setResults] = useState(null);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const checkGrammar = async () => {
        try {
            const response = await axios.post('https://api.languagetool.org/v2/check', null, {
                params: {
                    text,
                    language: 'en-US'
                }
            });
            setResults(response.data);
        } catch (error) {
            console.error('Error checking grammar:', error);
        }
    };

    return (
        <div className="grammar-checker-container">
            <textarea
                className="textarea"
                value={text}
                onChange={handleTextChange}
                placeholder="Enter your text here..."
            />
            <button onClick={checkGrammar}>Check Grammar</button>
            <GrammarReport results={results} />
        </div>
    );
};

export default GrammarChecker;

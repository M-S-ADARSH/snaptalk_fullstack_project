import React, { useState } from 'react';
import Sentiment from 'sentiment';
import jsPDF from 'jspdf';
import './SentimentAnalyser.css';
const SentimentAnalyzer = () => {
    const [text, setText] = useState('');
    const [sentiment, setSentiment] = useState(null);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const analyzeSentiment = () => {
        const sentimentAnalyzer = new Sentiment();
        const result = sentimentAnalyzer.analyze(text);
        setSentiment(result);
    };

    const exportToPDF = () => {
        if (!sentiment) {
            alert("No sentiment analysis result to export.");
            return;
        }

        const doc = new jsPDF();
        doc.text("Sentiment Analysis Report", 10, 10);

        doc.text(`Text: ${text}`, 10, 20);
        doc.text(`Score: ${sentiment.score}`, 10, 30);
        doc.text(`Comparative: ${sentiment.comparative}`, 10, 40);
        doc.text(`Positive Words: ${sentiment.positive.join(', ')}`, 10, 50);
        doc.text(`Negative Words: ${sentiment.negative.join(', ')}`, 10, 60);

        doc.save('sentiment-report.pdf');
    };

    return (
        <div className='page-content'>
            <h2>Sentiment Analyzer</h2>
            <textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Enter text here..."
                rows="10"
                cols="50"
            />
            <button onClick={analyzeSentiment}>Analyze Sentiment</button>
            <button onClick={exportToPDF}>Export to PDF</button>
            {sentiment && (
                <div>
                    <h3>Sentiment Analysis Result</h3>
                    <p><strong>Score:</strong> {sentiment.score}</p>
                    <p><strong>Comparative:</strong> {sentiment.comparative}</p>
                    <p><strong>Positive Words:</strong> {sentiment.positive.join(', ')}</p>
                    <p><strong>Negative Words:</strong> {sentiment.negative.join(', ')}</p>
                </div>
            )}
        </div>
    );
};

export default SentimentAnalyzer;

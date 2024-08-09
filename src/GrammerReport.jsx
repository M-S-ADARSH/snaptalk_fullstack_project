import React from 'react';
import jsPDF from 'jspdf';
import './GrammerReport.css'; // Add styles for the report

const exportToPDF = (results) => {
    const doc = new jsPDF();
    let y = 10;

    doc.setFontSize(16);
    doc.text("Grammar Check Report", 10, y);
    y += 10;

    doc.setFontSize(12);
    results.matches.forEach((match, index) => {
        if (y > 270) { // Adjust for bottom margin
            doc.addPage();
            y = 10;
        }

        doc.text(`Issue ${index + 1}: ${match.message}`, 10, y);
        y += 10;
        doc.text(`Context: ${match.context.text}`, 10, y);
        y += 10;
        doc.text(`Suggestions: ${match.replacements.map(rep => rep.value).join(', ')}`, 10, y);
        y += 20;
    });

    doc.save('grammar-report.pdf');
};

const GrammarReport = ({ results }) => {
    if (!results || !results.matches.length) {
        return <p>No issues found.</p>;
    }

    return (
        <div className="report-container">
            <h3>Grammar Check Report</h3>
            <ul className="report-list">
                {results.matches.map((match, index) => (
                    <li key={index} className="report-item">
                        <strong>Issue:</strong> {match.message} <br />
                        <strong>Context:</strong> {match.context.text} <br />
                        <strong>Suggestions:</strong> 
                        {match.replacements.map((rep, idx) => (
                            <span key={idx}>
                                {rep.value}{idx < match.replacements.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </li>
                ))}
            </ul>
            <button onClick={() => exportToPDF(results)}>Export to PDF</button>
        </div>
    );
};

export default GrammarReport;

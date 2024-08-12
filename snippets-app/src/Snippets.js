import React, { useState, Suspense } from "react";
import 'react-quill/dist/quill.snow.css';
import "./style.css"
import "./Snippets.css"

// Dynamically import React Quill
const ReactQuill = React.lazy(() => import('react-quill'));

const Snippets = () => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setOutputText(inputText);
    };

    return (
        <div className="snippets-container">
            <h2>Snippets Page</h2>
            <form onSubmit={handleSubmit}>
                <Suspense fallback={<div>Loading editor...</div>}>
                    <ReactQuill
                        value={inputText}
                        onChange={setInputText}
                        placeholder="Enter your text here..."
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </Suspense>
                <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
                    Submit
                </button>
            </form>

            {outputText && (
                <div className="mt-4">
                    <h3>Output:</h3>
                    <div
                        className="p-2 border border-gray-300 rounded"
                        dangerouslySetInnerHTML={{ __html: outputText }}
                    />
                </div>
            )}
        </div>
    );
};

export default Snippets;

import React, { useState } from "react";

import "../styles/Form.css";

import generate from "../services/api";

function Form({ setModalUrl, setShowModal, setLoading }) {
    const [creativityValue, setCreativityValue] = useState(100);
    const [accuracyValue, setAccuracyValue] = useState(100);
    const [selectedMode, setSelectedMode] = useState("v3");

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setShowModal(false);

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        if (data.mode === "v3") {
            data.accuracy = accuracyValue;
        }

        const result = await generate(data);

        if (result) {
            setLoading(false);
            setModalUrl(result.url);
            setShowModal(true);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Url</label>
                <input name="url" type="url" placeholder="https://your-url.com" required />

                <label>Mode</label>
                <select
                    name="mode"
                    required
                    value={selectedMode}
                    onChange={(e) => setSelectedMode(e.target.value)}
                >
                    <option value="v3">Fine-tuned GPT-4o (15 sec)</option>
                    <option value="v2">CSS theme Gemini (15 sec)</option>
                    <option value="v1">Schema + CSS theme Gemini (30 sec)</option>
                </select>

                <div className="slider-block">
                    <label>Creativity</label>
                    <div className="slider-container">
                        <input
                            type="range"
                            min="40"
                            max="100"
                            step="10"
                            name="creativity"
                            value={creativityValue}
                            onChange={(e) => setCreativityValue(Number(e.target.value))}
                        />
                        <div className="slider-values">
                            <span>{`${creativityValue}%`}</span>
                        </div>
                    </div>

                    {selectedMode === "v3" && (
                        <>
                            <label>Accuracy</label>
                            <div className="slider-container">
                                <input
                                    type="range"
                                    min="10"
                                    max="100"
                                    step="10"
                                    name="accuracy"
                                    value={accuracyValue}
                                    onChange={(e) => setAccuracyValue(Number(e.target.value))}
                                />
                                <div className="slider-values">
                                    <span>{`${accuracyValue}%`}</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <div className="button-container">
                    <button type="submit">Generate</button>
                </div>
            </form>
        </div>
    );
}

export default Form;

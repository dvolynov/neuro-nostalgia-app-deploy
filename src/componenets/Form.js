import React, { useState } from "react";

import "../styles/Form.css";

import generate from "../services/api";


function Form({setModalUrl, setShowModal, setLoading}) {
    const [creativityValue, setCreativityValue] = useState(75);

    const mapToTemperatureRange = (value) => {
        return (value / 50) - 1;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setShowModal(false);

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        const temperature = mapToTemperatureRange(creativityValue);

        const result = await generate(data, temperature);

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
                <input name="url" type="url" placeholder="https://your-url.com" required defaultValue={"https://www.deepl.com/en/translator"}/>

                <label>Mode</label>
                <select name="mode" required>
                    <option value="v3" >Generate new structure + CSS theme with GPT-40 (API v3.0)</option>
                    <option value="v2" defaultChecked={true}>Generate retro CSS theme (API v2.0)</option>
                    <option value="v1">Generate new structure + CSS theme (API v1.0)</option>
                </select>

                <label>Engine</label>
                <select name="model_name" required>
                    <option value="gemini-1.5-flash" defaultChecked>Fast: swift and versatile (approx. 30-40 sec)
                    </option>
                    <option value="gemini-1.5-pro">Pro: more intelligent (approx. 1-2 min)</option>
                </select>

                <label>Max Output Tokens</label>
                <input name="max_output_tokens" type="number" defaultValue="8192" required/>

                <label>Creativity</label>
                <div className="slider-container">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={creativityValue}
                        onChange={(e) => setCreativityValue(Number(e.target.value))}
                    />
                    <div className="slider-values">
                        <span>{`${creativityValue}%`}</span>
                    </div>
                </div>

                <div className="button-container">
                    <button type="submit">Generate</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
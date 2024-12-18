# AI Retro Engine

## Overview

**AI Retro Engine** is a web-based application that transforms URLs into timeless, retro-inspired designs using AI-powered models. This project showcases a creative blend of nostalgia and modern technology, offering seamless customization and generation of retro-styled pages.

## Features

- **Customizable Creativity and Accuracy Levels:** Fine-tune the output using sliders for creativity and accuracy.
- **Multiple Modes:** Choose from three modes:
  - **v3:** Fine-tuned GPT-4o (15 sec)
  - **v2:** CSS theme Gemini (15 sec)
  - **v1:** Schema + CSS theme Gemini (30 sec)
- **Responsive UI:** Modern design for desktop and mobile devices.
- **Dynamic Previews:** View generated results in a modal with a live iframe.

## Tech Stack

- **Frontend:** React.js
- **Styling:** CSS
- **API Integration:** Fetch API
- **Hosting:** DigitalOcean

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/ai-retro-engine.git
   cd ai-retro-engine
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm start
   ```

4. **Access the application:**  
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## File Structure

- **`components/Form.js`:** Handles the form logic and API integration.
- **`pages/Home.js`:** Main application page with the form and modal for results.
- **`services/api.js`:** API handler for generating retro-style pages.
- **`styles/`:** Contains all CSS files for styling (`Form.css`, `Home.css`, `Modal.css`, etc.).

## Usage

1. **Enter a URL** in the input field.
2. **Select a mode** from the dropdown menu.
3. Adjust the **creativity** (and accuracy for v3 mode) using sliders.
4. Click **Generate** to transform your input.
5. View the result in the modal or navigate to the generated URL.

## API Reference

API documentation is available at:  
[AI Retro Engine API Documentation](https://seashell-app-unjjz.ondigitalocean.app/docs)

### API Endpoint

`POST /api/{mode}/retroify`

#### Parameters

- `url` (string): The input URL to retroify.
- `creativity` (number): Creativity level (40–100).
- `accuracy` (number): Accuracy level (10–100) (required for v3 mode).
- `model_name` (string): Model name for v1 and v2.
- `max_output_tokens` (number): Token limit for v1 and v2.

## Known Issues

- **Error Handling:** Some errors during API calls may not provide detailed feedback.
- **Loading Indicator:** Modal may overlap content when loading for extended periods.

## Contributions

Feel free to fork the repository, make improvements, and submit pull requests.

## Contact

Developer: [dvolynov@gmail.com](mailto:dvolynov@gmail.com)  
Hackathon Page: [Neuro Nostalgia Hackathon](https://neuronostalgia.com)
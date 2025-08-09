
# Named Entity Recognition (NER) Extractor

This web application identifies and highlights named entities (like people, organizations, and locations) in a piece of text. It's built with Python, FastAPI, and the spaCy NLP library.

## Features

-   **FastAPI Backend**: A high-performance Python backend.
-   **spaCy Integration**: Uses state-of-the-art NLP models for accurate entity recognition.
-   **Visual Output**: Displays the original text with entities highlighted in different colors based on their category.
-   **Simple Web Interface**: Easy-to-use interface to paste text and see the results.

## Technologies Used

-   **Backend**: FastAPI, Uvicorn
-   **NLP**: spaCy
-   **Frontend**: HTML, CSS, JavaScript

## Getting Started

### Prerequisites

-   Python 3.7+
-   pip

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/ner-extractor.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd ner-extractor
    ```
3.  Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```

### Usage

1.  Start the web server:
    ```bash
    uvicorn app.main:app --reload
    ```
2.  Open your browser and navigate to `http://127.0.0.1:8000`.
3.  Paste your text into the text area and click "Extract Entities".

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

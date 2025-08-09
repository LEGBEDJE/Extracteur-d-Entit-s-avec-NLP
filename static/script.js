
const form = document.getElementById('ner-form');
const resultDiv = document.getElementById('result');
const resultContainer = document.getElementById('result-container');
const submitButton = document.getElementById('submit-button');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const text = formData.get('text');

    // Show loader and disable button
    submitButton.classList.add('loading');
    submitButton.disabled = true;

    try {
        const response = await fetch('/extract-entities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        const data = await response.json();

        // The backend sends back HTML, which we can directly inject
        resultDiv.innerHTML = data.html;
        resultContainer.style.display = 'block';
    } catch (error) {
        console.error('An error occurred:', error);
        resultDiv.innerHTML = '<p style="color: red;">An error occurred while processing your request.</p>';
    } finally {
        // Hide loader and re-enable button
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
    }
});

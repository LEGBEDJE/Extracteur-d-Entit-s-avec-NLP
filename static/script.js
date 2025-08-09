
const form = document.getElementById('ner-form');
const resultDiv = document.getElementById('result');
const resultContainer = document.getElementById('result-container');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const text = formData.get('text');

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
});

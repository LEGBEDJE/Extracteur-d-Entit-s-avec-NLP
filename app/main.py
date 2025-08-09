
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
import spacy
from spacy import displacy

# Load the spaCy model
nlp = spacy.load("en_core_web_sm")

app = FastAPI()

# Serve static files (HTML, CSS, JS)
app.mount("/static", StaticFiles(directory="/home/legbedje/Documents/ner-extractor/static"), name="static")

class TextRequest(BaseModel):
    text: str

@app.get("/")
async def read_root():
    """Serve the main HTML page."""
    return FileResponse('/home/legbedje/Documents/ner-extractor/static/index.html')

@app.post("/extract-entities")
async def extract_entities(request: TextRequest):
    """Process text with spaCy and return visualized HTML."""
    doc = nlp(request.text)
    # Use displaCy to generate HTML with highlighted entities
    html = displacy.render(doc, style="ent", jupyter=False)
    return {"html": html}

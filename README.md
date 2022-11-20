# Annai
We can take PDFs and MP3s and generate questions based on the content from them. We then display those questions to act as a study guide for our users.

## Inspiration
We first thought of a product which can reach many people, especially people in school. We all had some trouble staying engaged when reading or studying pages of material, so we decided to make a tool to fix that.

##  Tech Stack
#### Front-end Stack
| Type      | Tech                      |
| --------- | ------------------------- |
| Language  | JavaScript                |
| Framework | React                     |
| Styling   | HTML, CSS                 |

#### Back-end Stack
| Type      | Tech                      |
| --------- | ------------------------- |
| Language  | Python                    |
| Framework | FastAPI                   |
| Other     | OpenAI, Google Cloud      |

## Quickstart Guide
```
git clone https://github.com/nTony46/ANNAI

// Inside app/ Create a .env file to set OPENAI_API_KEY,
// create a Google Cloud Key, put the cred.json in the directory

// Starting at main directory
python3 -m virtualenv
source venv/bin/activate
pip install -r requirements.txt

cd app
uvicorn annai_api:app --reload

// New terminal at main directory
npm run start

// The app should be hosted at http://localhost:3000/
```


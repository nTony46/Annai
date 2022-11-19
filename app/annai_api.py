from annai import (create_bucket, generate_questions, transcript_audio,
                   upload_to_cloud)
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum

app = FastAPI()
handler = Mangum(app)
app.add_middleware(
	CORSMiddleware,
	allow_origins=["*"],
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"]
)

BUCKET_NAME = "annai_demo_bucket"

@app.get("/generate_questions")
async def generate_questions(prompt):
	questions = generate_questions(prompt)
	return {"questions": questions}

@app.get("/generate_questions_mp3")
async def generate_questions_mp3(mp3):
	path_to_mp3 = './'
	mp3_name = './'
	upload_to_cloud(BUCKET_NAME, path_to_mp3, mp3_name)
	transcript = transcript_audio(BUCKET_NAME, mp3_name)
	questions = generate_questions(prompt=transcript)
	return {"questions": questions}





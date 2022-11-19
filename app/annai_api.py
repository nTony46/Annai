import shutil

from annai import (generate_questions, transcript_audio, transcript_pdf,
                   upload_to_cloud, youtube_to_mp3)
from fastapi import FastAPI, File, HTTPException, UploadFile
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

@app.get("/")
async def root():
	return {"message": "Hello!"}


@app.get("/generate_questions")
async def generate_study_questions(prompt: str):
	questions = generate_questions(prompt)
	return {"questions": questions}


@app.post("/generate_questions_mp3")
async def generate_questions_mp3(file: UploadFile = File(...)):
	with open('./inputs/promptdemo.mp3', 'wb') as buffer:
		shutil.copyfileobj(file.file, buffer)

	upload_to_cloud(BUCKET_NAME, './inputs/promptdemo.mp3', 'prompt-demo-mp3')
	transcript = transcript_audio(BUCKET_NAME, 'prompt-demo-mp3')
	questions = generate_questions(prompt=transcript)
	return {"questions": questions}


@app.post("/generate_questions_pdf")
async def generate_questions_pdf(file: UploadFile = File(...)):
	with open('./inputs/promptdemo.pdf', 'wb') as buffer:
		shutil.copyfileobj(file.file, buffer)

	transcript = transcript_pdf('./inputs/promptdemo.pdf')
	questions = generate_questions(prompt=transcript)
	return {"questions": questions}


@app.get("/generate_questions_youtube")
async def generate_questions_youtube(link: str):
	path = './inputs/yt-prompt-demo.mp3'
	youtube_to_mp3(link, path)
	upload_to_cloud(BUCKET_NAME, path, 'yt-prompt-demo')
	transcript = transcript_audio(BUCKET_NAME, 'yt-prompt-demo')
	questions = generate_questions(prompt=transcript)
	return {"questions": questions}




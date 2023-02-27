import openai
import os

default_api_key = "DEFAULT_API_KEY"
api_key = os.environ.get("AI_KEY", default_api_key)
openai.api_key = api_key

def generate_response(query):
    if api_key == default_api_key:
       raise ValueError("OpenAI API key not set. Please set the AI_KEY environment variable.")
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=query,
        temperature=0,
        max_tokens=64,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0
    )
    message = response.choices[0].text.strip()
    return message



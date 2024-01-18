from flask import Flask, request, render_template, jsonify
from flask_cors import CORS
import openai
import json

app = Flask(__name__)
CORS(app)

openai.api_key = 'YOUR API KEY'

@app.route('/')
def index():
    return render_template('TestAiHt.html')

@app.route('/ask', methods=['POST'])
@app.route('/get_phrases', methods=['POST'])
def get_phrases():
    try:
        data = request.get_json()
        keywords = data['keywords']
        theme = data['theme']
        phraseNum = 4 

        messages = [
            # 기존의 messages 리스트...
            {
                'role': 'user',
                'content': f'''
                    theme = {theme}, keywords = {keywords}.
                    Please write it in KOREAN ONLY.

                    I want to get some help in writing a phrase for the invitation.
                    After looking at the theme and keywords provided, please recommend {phraseNum} phrases that match well.
                    Do not provide additional translations in English. Korean responses only, please.
                    I will use what you give me as a data in program, so you should give it as a format of json but type have to me array.
                    Please provide it as is without line breaks.
                '''
            }
        ]

        # OpenAI API 호출...
        response = openai.ChatCompletion.create(model='gpt-4', messages=messages)
        answer = response.choices[0].message['content']

        # JSON 문자열을 파이썬 객체로 변환
        try:
            phrases = json.loads(answer)
        except json.JSONDecodeError:
            # JSON 변환에 실패한 경우, 원래의 응답을 사용
            phrases = answer

        return jsonify(phrases)

    except Exception as e:
        app.logger.error(f'Error: {str(e)}')
        return jsonify(error=str(e)), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)

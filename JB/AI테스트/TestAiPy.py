#Debug: python TestAiPy.py

from flask import Flask, request, render_template, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

openai.api_key = 'api KEY'

@app.route('/')
def index():
    return render_template('TestAiHt.html')

@app.route('/ask', methods=['POST'])
def ask():
    try:
        question = request.form['question']
        
        # 'v1/chat/completions' 엔드포인트를 사용하도록 수정
        response = openai.ChatCompletion.create(
            model='gpt-4',
            messages=[{"role": "system", "content": "You are a helpful assistant."}, 
                      {"role": "user", "content": question}]
        )
        answer = response.choices[0].message['content']
        return jsonify(answer=answer)
    except Exception as e:
        app.logger.error(f'Error: {str(e)}')
        return jsonify(error=str(e)), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)

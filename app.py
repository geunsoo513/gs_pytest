from flask import Flask, render_template

app = Flask(__name__)

# 루트 페이지
@app.route('/')
def index():
    return render_template('index.html')

# 개발 서버 실행
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=7000, debug=True)

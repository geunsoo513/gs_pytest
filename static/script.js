// HTML 요소 참조
const form = document.getElementById('answer-form');
const userOutput = document.getElementById('user-output');
const resultBox = document.getElementById('result');
const feedback = document.getElementById('feedback');
const actualOutput = document.getElementById('actual-output');
const questionBox = document.getElementById('python-question');

// 파이썬 문제 리스트 (문제와 정답 짝으로 구성)
const questions = [
  {
    code: `print("Hello, Python!")`,
    answer: `Hello, Python!`
  },
  {
    code: `
for i in range(3):
    print("Hi")`,
    answer: `Hi\nHi\nHi`
  },
  {
    code: `
a = 5
b = 2
print(a + b)
print(a * b)`,
    answer: `7\n10`
  },
  {
    code: `
def greet(name):
    return "Hello " + name

print(greet("Alice"))`,
    answer: `Hello Alice`
  },
  {
    code: `
x = [1, 2, 3]
print(x[0])
print(len(x))`,
    answer: `1\n3`
  }
];

// 랜덤 문제 선택
const selectedQuestion = questions[Math.floor(Math.random() * questions.length)];
questionBox.textContent = selectedQuestion.code.trim();

// 공백/줄바꿈 정리해서 비교
function cleanString(str) {
  return str.trim().replace(/\r/g, '');
}

// 제출 처리
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const userAnswer = userOutput.value;

  const isCorrect = cleanString(userAnswer) === cleanString(selectedQuestion.answer);

  resultBox.classList.remove('hidden');
  feedback.textContent = isCorrect ? '✅ 정답입니다!' : '❌ 틀렸어요.';
  actualOutput.textContent = selectedQuestion.answer;
});

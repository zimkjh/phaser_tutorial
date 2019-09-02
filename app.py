# _*_ coding: utf-8 _*_
from flask import Flask, abort, request, render_template

# app = Flask(__name__, static_folder="/home/ubuntu/wc/tutorial/static", static_url_path="/static", template_folder="/home/ubuntu/wc/tutorial/templates")
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/1')
def part1():
	return render_template('part1.html')

@app.route('/2')
def part2():
	return render_template('part2.html')
@app.route('/3')
def part3():
	return render_template('part3.html')
@app.route('/4')
def part4():
	return render_template('part4.html')
@app.route('/5')
def part5():
	return render_template('part5.html')
@app.route('/6')
def part6():
	return render_template('part6.html')
@app.route('/7')
def part7():
	return render_template('part7.html')
@app.route('/8')
def part8():
	return render_template('part8.html')
@app.route('/9')
def part9():
	return render_template('part9.html')
@app.route('/10')
def part10():
	return render_template('part10.html')


if __name__ == '__main__':
    app.run(debug = True)

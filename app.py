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

@app.route('/tower_stacking')
def tower_stacking():
	return render_template('tower_stacking.html')

@app.route('/block_stacking')
def block_stacking():
	return render_template('block_stacking.html')


@app.route('/block_stacking_2')
def block_stacking_2():
	return render_template('block_stacking_o.html')


if __name__ == '__main__':
    app.run(debug = False)

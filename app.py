from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

# Load products from JSON file
with open('products.json') as f:
    products = json.load(f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/products')
def get_products():
    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, jsonify, render_template
import requests

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/timer")
def timer():
    return render_template("timer.html")


@app.route("/recipes")
def recipes():
    return render_template("recipes.html")


@app.route("/get_egg_recipes")
def get_egg_recipes():
    url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=egg"
    response = crequests.get(url)
    data = response.json()
    return jsonify(data)


@app.route("/get_recipe_detail/<meal_id>")
def get_recipe_detail(meal_id):
    url = f"https://www.themealdb.com/api/json/v1/1/lookup.php?i={meal_id}"
    response = requests.get(url)
    data = response.json()
    return jsonify(data)

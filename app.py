from flask import Flask, jsonify, render_template
import random

app = Flask(__name__)

citations = [
    {
        "texte": "La vie est ce que nous en faisons.",
        "auteur": "Eleanor Roosevelt",
        "photo": "eleanor.jpg"
    },
    {
        "texte": "Rien n’est impossible à celui qui essaie.",
        "auteur": "Napoléon Bonaparte",
        "photo": "napoleon.jpg"
    },
    {
        "texte": "Votre temps est limité, ne le gaspillez pas à vivre la vie de quelqu’un d’autre.",
        "auteur": "Steve Jobs",
        "photo": "steve.jpg"
    }
]

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/citation")
def citation():
    return jsonify(random.choice(citations))

if __name__ == "__main__":
    app.run(debug=True)

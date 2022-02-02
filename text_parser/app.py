import text_parser
import json
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/parse', methods=['POST'])
def parse():
    data = request.get_json()
    text = data["text"]
    rdf_domains = data["rdf_domains"]
    print(text)
    print(rdf_domains)

    nouns, verbs, sim_dict, names = text_parser.parse_text(text, rdf_domains)

    response = {
        "nouns": nouns,
        "verbs": verbs,
        "rdf_domains": rdf_domains,
        "similarities": sim_dict,
        "names": names
    }

    return json.dumps(response)


if __name__ == '__main__':
    app.run(port=34567, debug=True)

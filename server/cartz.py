import sys

from flask import Flask

from config import envs


print envs
app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World!"

if __name__ == "__main__":
    key = 'dev'
    if len(sys.argv) > 1 and 'prod' in sys.argv:
        key = 'prod'
    app.run(host=envs[key]['host'], port=envs[key]['port'])

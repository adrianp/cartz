import sys

from flask import Flask

from config import envs


print envs
app = Flask(__name__, static_url_path='')


@app.route("/")
def hello():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    key = 'dev'
    if len(sys.argv) > 1 and 'prod' in sys.argv:
        key = 'prod'
    app.run(host=envs[key]['host'], port=envs[key]['port'])

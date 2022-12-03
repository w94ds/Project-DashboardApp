
from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(__name__)

CORS(app)
# CORS(app, resources={r"/*": {"origins": ["http://192.168.0.151:2000/dashboard1","*"]}}) 

jsonData = {
    "Id" : 1,
    "Name": "Johnny"
}

@app.route("/")
def t():
    print('Success!')
    # return "<p>Hi!</p>"
    return jsonData

@app.route("/testGet")
def tGet():
    print('Get Success!')
    return "<p>Get!</p>"

@app.route('/testPost', methods=['POST'])
def tPost():
    print('Post Success!')
    return "<p>Post!</p>"

@app.route('/testPostwithPara', methods=['POST'])
def tPostwithPara():
    print(request.get_json())
    print('Post with Para Success!')
    return request.get_json()



if __name__ == "__main__":
    app.run()

    # try:
        # print(Fore.RED + 'App Run !' + Fore.WHITE)
        # socketio.run(app , host=config.HOST, port=config.PORT)
    # except KeyboardInterrupt:
    #     print('Interrupted')

    #     try:
    #         sys.exit(0)
    #     except SystemExit:
    #         os._exit(0)
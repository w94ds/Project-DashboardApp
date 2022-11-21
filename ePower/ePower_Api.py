# -*- coding: utf-8 -*-
"""
Created on Fri Nov 18 11:32:01 2022

@author: User
"""

from flask import Flask, jsonify
from flask import request
from flask_cors import CORS
import datetime
import json

import crawler as CrawlerReq

app = Flask(__name__)
CORS(app)

########## read #####

@app.route("/")
def pyConnTest():
    print('Success!')
    return "<p>Hi!</p>"

########## GET only ##########

@app.route("/Get_TPC_PowerNeed_Pre")
def pyGet_TPC_PowerNeed_Pre():
    #tnow_local = datetime.date.today()
    eInfo = CrawlerReq.electricityInfo_yday()
    print(eInfo)
    return jsonify(eInfo)

@app.route("/electricityinfo_Now")
def pyGet_TPC_PowerNeed_Now():
    eInfo_cur = CrawlerReq.electricityinfo_current()
    return jsonify(eInfo_cur)

@app.route("/Get_TPC_PowerNeed_Post")
def pyGet_TPC_PowerNeed_Post():
    eInfo_Next = CrawlerReq.electricityInfo_future()
    return jsonify(eInfo_Next)

@app.route("/Get_TPC_SolarStatus")
def pyGet_TPC_SolarStatus():
    eSolar_data = CrawlerReq.solar()
    return jsonify(eSolar_data)

@app.route("/Get_ETP_MktInfo")
def pyGet_ETP_MktInfo():
    eDeal_data = CrawlerReq.electricity_deal()
    return jsonify(eDeal_data)

@app.route("/Get_ETP_Deal_Spinning")
def pyGet_ETP_Deal_Spinning():
    eDeal_Spinning = CrawlerReq.electricity_deal_realtimeStored()
    return jsonify(eDeal_Spinning)

@app.route("/Get_ETP_Deal_Supplemental")
def pyGet_ETP_Deal_Supplemental():
    eDeal_Supplemental = CrawlerReq.electricity_deal_replenishStore()
    return jsonify(eDeal_Supplemental)

########## GET and POST ##########


@app.route('/Get_CWB_Weather2FC', methods=['POST'])
def pyGet_CWB_Weather2FC():
    #area_req = json.loads(request.get_json())
    area_req = request.get_json()       
    area_id = area_req.get("area")
   
    #area_req = json.loads (request)
    if (area_id == "Lukang"):
        weather2req = CrawlerReq.cwb_LugangInfo()
    elif (area_id == "Lunbei"):
        weather2req = CrawlerReq.cwb_LunbeiInfo()
    elif (area_id == "Budai"):
        weather2req = CrawlerReq.cwb_LunbeiInfo()
    elif (area_id == "Qigu"):
        weather2req = CrawlerReq.cwb_QiguInfo()
    else:
        return request.get_json()
    return jsonify(weather2req)

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
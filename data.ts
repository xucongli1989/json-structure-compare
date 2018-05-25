
/**
 * JSON A
 */
export const a = {
    "baggageDTO": {
        "groupList": [
            {
                "childCanBuyBaggage": true,
                "freeUnitWeight": 0,
                "hasFree": true,
                "name": "string",
                "productList": [
                    {
                        "count": 0,
                        "price": 0,
                        "weight": 0
                    }
                ],
                "selected": true,
                "selectedList": [
                    {
                        "passengerName": "string",
                        "productId": 0
                    }
                ]
            }
        ],
        "hasPayedTip": "string",
        "header": "string",
        "notEnoughTip": "string",
        "passengerList": [
            {
                "areaCode": "string",
                "birthday": "yyyy-MM-dd",
                "ffpCard": {
                    "airlineCode": "string",
                    "ffpCardName": "string",
                    "ffpNum": "string",
                    "id": 0
                },
                "gender": "string",
                "givenName": "string",
                "idCards": [
                    {
                        "cardLimitTime": "yyyy-MM-dd",
                        "cardName": "string",
                        "cardNum": "string",
                        "cardType": 0
                    }
                ],
                "mobile": "string",
                "nameCN": "string",
                "nameEN": "string",
                "nationalityCode": "string",
                "passengerCategory": "Adult",
                "passengerId": 0,
                "surname": "string"
            }
        ],
        "promotionName": "string",
        "remark": "string",
        "tagList": [
            {
                "desc": "string",
                "name": "string"
            }
        ]
    },
    "checkInDTO": {
        "checkInDesc": {
            "desc": "string",
            "feeTip": "string",
            "freeText": "string",
            "note": "string",
            "tagList": [
                "string"
            ],
            "title": "string",
            "warmTip": "string"
        },
        "checkInInfos": [
            {
                "checkInKey": "string",
                "free": true,
                "priceInfo": {
                    "count": 0,
                    "desc": "string",
                    "passengerNameList": [
                        "string"
                    ],
                    "price": 0,
                    "printPrice": 0
                },
                "segmentNo": 0,
                "selected": true,
                "transfer": true
            }
        ],
        "preferSelected": "string",
        "preferSupported": [
            {
                "cnText": "string",
                "enText": "string",
                "value": "string"
            }
        ]
    },
    "generalCoupons": [
        {
            "couponID": 0,
            "couponName": "string",
            "couponProductRule": "string",
            "instructions": [
                "string"
            ],
            "maxCouponNumber": 0,
            "policyId": 0,
            "printPrice": 0,
            "salePrice": 0,
            "slogan": "string",
            "tags": [
                "string"
            ]
        }
    ],
    "hkg": {
        "promotionSlogan": "离港车票优惠大放送",
        "airportBus": {
            "detailList": [
                {
                    "policyID": 1001,
                    "isSelected": true,
                    "detailTagList": [
                        {
                            "name": "商务七人车11",
                            "desc": "舒适共乘111"
                        }
                    ],
                    "departureStationId": 1,
                    "departureStationName": "深圳湾口岸",
                    "departureIsHK": false,
                    "arrivalStationId": 2,
                    "arrivalStationName": "香港国际机场T1",
                    "arrivalIsHK": true,
                    "durationMinutes": 100,
                    "workStartTime": "08:00",
                    "workEndTime": "23:00",
                    "validStartDate": "2018-05-20",
                    "validEndDate": "2018-06-20",
                    "segmentNo": 1,
                    "sequenceNo": 1,
                    "adultPriceInfo": {
                        "printPrice": 300,
                        "price": 100,
                        "desc": "成人票为3岁以上",
                        "count": 2
                    },
                    "childPriceInfo": {
                        "printPrice": 88,
                        "price": 60,
                        "desc": "儿童票为1岁以上",
                        "count": 1
                    },
                    "infantPriceInfo": {
                        "printPrice": 150,
                        "price": 100,
                        "desc": "婴儿票为2个月以上",
                        "count": 1
                    }
                },
                {
                    "policyID": 1002,
                    "isSelected": true,
                    "detailTagList": [
                        {
                            "name": "商务七人车2222",
                            "desc": "舒适共乘2222"
                        }
                    ],
                    "departureStationId": 2,
                    "departureStationName": "香港国际机场T1",
                    "departureIsHK": true,
                    "arrivalStationId": 1,
                    "arrivalStationName": "深圳湾口岸",
                    "arrivalIsHK": false,
                    "durationMinutes": 100,
                    "workStartTime": "08:00",
                    "workEndTime": "23:00",
                    "validStartDate": "2018-05-20",
                    "validEndDate": "2018-06-20",
                    "segmentNo": 2,
                    "sequenceNo": 1,
                    "adultPriceInfo": {
                        "printPrice": 300,
                        "price": 100,
                        "desc": "成人票为3岁以上",
                        "count": 2
                    },
                    "childPriceInfo": {
                        "printPrice": 88,
                        "price": 60,
                        "desc": "儿童票为1岁以上",
                        "count": 1
                    },
                    "infantPriceInfo": {
                        "printPrice": 150,
                        "price": 100,
                        "desc": "婴儿票为2个月以上",
                        "count": 1
                    }
                },
                {
                    "policyID": 1002,
                    "isSelected": true,
                    "detailTagList": [
                        {
                            "name": "商务七人车3333",
                            "desc": "舒适共乘3333"
                        }
                    ],
                    "departureStationId": 3,
                    "departureStationName": "中山",
                    "departureIsHK": false,
                    "arrivalStationId": 2,
                    "arrivalStationName": "香港国际机场T1",
                    "arrivalIsHK": true,
                    "durationMinutes": 120,
                    "workStartTime": "08:00",
                    "workEndTime": "23:00",
                    "validStartDate": "2018-05-20",
                    "validEndDate": "2018-06-20",
                    "segmentNo": 1,
                    "sequenceNo": 1,
                    "adultPriceInfo": {
                        "printPrice": 300,
                        "price": 100,
                        "desc": "成人票为3岁以上",
                        "count": 2
                    },
                    "childPriceInfo": {
                        "printPrice": 88,
                        "price": 60,
                        "desc": "儿童票为1岁以上",
                        "count": 1
                    },
                    "infantPriceInfo": {
                        "printPrice": 150,
                        "price": 100,
                        "desc": "婴儿票为2个月以上",
                        "count": 1
                    }
                }
            ],
            "callBusTips": "请在乘坐前至少4小时，选择站点致电预约",
            "serviceList": [
                "有效期: 通港车票的有效期为航班起飞前15天至航班起飞后15天内，逾期不可使用。",
                "取票地点: 请到各站点的环岛旅运柜台取票",
                "取票凭证: 请凭借预订预留的证件/手机号/携程购票短信在环岛各柜台验证取票。",
                "工作时间: 深圳机场08: 00-20: 20"
            ],
            "refundDesc": "退改说明：请在有效期截止日期提前一天完成退改，过期将不得取消并修改。",
            "specialDescList": [
                "请预留充分的接驳及通关时间，以免接驳上出现误差造成任何损失，乘客需自行承担。",
                "每名乘客只可免费携带行李一件［体积不能超过64厘米 x 41厘米 x 23厘米，重量不能超过10公斤］及手提行李一件［体积不能超过37.5厘米 x 25厘米 x 15厘米］。对超重、超大行李（以长宽高相加所得之数不超过128厘米或50英吋为限）及携带危险品（如易燃、易爆、强烈腐蚀性等物品）的行李，本公司有权拒绝运送该行李。就超重、超大行李，本公司有权要求乘客购买额外行李票，过境巴士每件行李为50元，商务轿车每件行李为100元。"
            ]
        },
        "shuttleBoat": {
            "detailList": [
                {
                    "preposePolicyID": 11111,
                    "detailTagList": [
                        {
                            "name": "快速进入到香港",
                            "desc": ""
                        }
                    ],
                    "voyageRouteID": "1",
                    "departureStationId": 1,
                    "departureStationName": "深圳湾口岸",
                    "departureIsHK": false,
                    "arrivalStationId": 2,
                    "arrivalStationName": "香港国际机场T1",
                    "arrivalIsHK": true,
                    "setOffTime": "2018-03-29 12:30",
                    "durationMinutes": 130,
                    "segmentNo": 1,
                    "sequenceNo": 1,
                    "baggageRule": "深圳去香港可免费托运一件行李，超出的行李将收取￥30/件",
                    "seatPriceList": [
                        {
                            "isSelected": true,
                            "seatRankID": 1,
                            "seatName": "普通座位",
                            "adultPriceInfo": {
                                "printPrice": 188,
                                "price": 100,
                                "count": 1,
                                "desc": "成人票为3岁以上"
                            },
                            "childPriceInfo": {
                                "printPrice": 88,
                                "price": 60,
                                "count": 1,
                                "desc": "儿童票为1岁以上"
                            },
                            "infantPriceInfo": {
                                "printPrice": 0,
                                "price": 0,
                                "count": 1,
                                "desc": "婴儿票为2个月以上"
                            }
                        }
                    ],
                    "serviceDesc": "服务说明：深圳到香港的服务说明",
                    "refundDesc": "退改说明：深圳到香港请在有效期截止日期提前一天完成退改，过期将不得取消并修改。",
                    "specialDesc": "特殊说明：深圳到香港请预留充分的接驳及通关时间"
                },
                {
                    "preposePolicyID": 11111,
                    "detailTagList": [
                        {
                            "name": "快速进入到香港",
                            "desc": ""
                        }
                    ],
                    "voyageRouteID": "1",
                    "departureStationId": 1,
                    "departureStationName": "深圳湾口岸",
                    "departureIsHK": false,
                    "arrivalStationId": 2,
                    "arrivalStationName": "香港国际机场T1",
                    "arrivalIsHK": true,
                    "setOffTime": "2018-03-29 15:20",
                    "durationMinutes": 130,
                    "segmentNo": 1,
                    "sequenceNo": 1,
                    "baggageRule": "深圳去香港可免费托运一件行李，超出的行李将收取￥30/件",
                    "seatPriceList": [
                        {
                            "isSelected": true,
                            "seatRankID": 1,
                            "seatName": "普通座位",
                            "adultPriceInfo": {
                                "printPrice": 188,
                                "price": 100,
                                "count": 1,
                                "desc": "成人票为3岁以上"
                            },
                            "childPriceInfo": {
                                "printPrice": 88,
                                "price": 60,
                                "count": 1,
                                "desc": "儿童票为1岁以上"
                            },
                            "infantPriceInfo": {
                                "printPrice": 0,
                                "price": 0,
                                "count": 1,
                                "desc": "婴儿票为2个月以上"
                            }
                        }
                    ],
                    "serviceDesc": "服务说明：深圳到香港的服务说明",
                    "refundDesc": "退改说明：深圳到香港请在有效期截止日期提前一天完成退改，过期将不得取消并修改。",
                    "specialDesc": "特殊说明：深圳到香港请预留充分的接驳及通关时间"
                },
                {
                    "preposePolicyID": 22222,
                    "detailTagList": [
                        {
                            "name": "快速出境到深圳",
                            "desc": ""
                        }
                    ],
                    "voyageRouteID": "2",
                    "departureStationId": 2,
                    "departureStationName": "香港国际机场T1",
                    "departureIsHK": true,
                    "arrivalStationId": 1,
                    "arrivalStationName": "深圳湾口岸",
                    "arrivalIsHK": false,
                    "setOffTime": "2018-03-29 15:00",
                    "durationMinutes": 130,
                    "segmentNo": 2,
                    "sequenceNo": 1,
                    "baggageRule": "香港到深圳可免费托运一件行李，超出的行李将收取￥99/件",
                    "seatPriceList": [
                        {
                            "isSelected": false,
                            "seatRankID": 1,
                            "seatName": "普通座位",
                            "adultPriceInfo": {
                                "printPrice": 188,
                                "price": 100,
                                "count": 1,
                                "desc": "成人票为3岁以上"
                            },
                            "childPriceInfo": {
                                "printPrice": 88,
                                "price": 60,
                                "count": 1,
                                "desc": "儿童票为1岁以上"
                            },
                            "infantPriceInfo": {
                                "printPrice": 0,
                                "price": 0,
                                "count": 1,
                                "desc": "婴儿票为2个月以上"
                            }
                        }
                    ],
                    "serviceDesc": "服务说明：香港到深圳的服务说明",
                    "refundDesc": "退改说明：香港到深圳请在有效期截止日期提前一天完成退改，过期将不得取消并修改。",
                    "specialDesc": "特殊说明：香港到深圳请预留充分的接驳及通关时间"
                },
                {
                    "preposePolicyID": 33333,
                    "detailTagList": [
                        {
                            "name": "快速进入到香港",
                            "desc": ""
                        }
                    ],
                    "voyageRouteID": "3",
                    "departureStationId": 3,
                    "departureStationName": "罗湖口岸",
                    "departureIsHK": false,
                    "arrivalStationId": 2,
                    "arrivalStationName": "香港国际机场T2",
                    "arrivalIsHK": true,
                    "setOffTime": "2018-03-29 10:55",
                    "durationMinutes": 130,
                    "segmentNo": 1,
                    "sequenceNo": 1,
                    "baggageRule": "深圳去香港可免费托运一件行李，超出的行李将收取￥30/件",
                    "seatPriceList": [
                        {
                            "isSelected": false,
                            "seatRankID": 1,
                            "seatName": "普通座位",
                            "adultPriceInfo": {
                                "printPrice": 188,
                                "price": 100,
                                "count": 1,
                                "desc": "成人票为3岁以上"
                            },
                            "childPriceInfo": {
                                "printPrice": 88,
                                "price": 60,
                                "count": 1,
                                "desc": "儿童票为1岁以上"
                            },
                            "infantPriceInfo": {
                                "printPrice": 0,
                                "price": 0,
                                "count": 1,
                                "desc": "婴儿票为2个月以上"
                            }
                        }
                    ],
                    "serviceDesc": "服务说明：深圳到香港的服务说明",
                    "refundDesc": "退改说明：深圳到香港请在有效期截止日期提前一天完成退改，过期将不得取消并修改。",
                    "specialDesc": "特殊说明：深圳到香港请预留充分的接驳及通关时间"
                },
                {
                    "preposePolicyID": 44444,
                    "detailTagList": [
                        {
                            "name": "快速出境到深圳",
                            "desc": ""
                        }
                    ],
                    "voyageRouteID": "4",
                    "departureStationId": 4,
                    "departureStationName": "皇冈口岸",
                    "departureIsHK": false,
                    "arrivalStationId": 2,
                    "arrivalStationName": "香港国际机场T2",
                    "arrivalIsHK": true,
                    "setOffTime": "2018-03-29 15:00",
                    "durationMinutes": 130,
                    "segmentNo": 1,
                    "sequenceNo": 1,
                    "baggageRule": "香港到深圳可免费托运一件行李，超出的行李将收取￥99/件",
                    "seatPriceList": [
                        {
                            "isSelected": false,
                            "seatRankID": 1,
                            "seatName": "普通座位",
                            "adultPriceInfo": {
                                "printPrice": 188,
                                "price": 100,
                                "count": 1,
                                "desc": "成人票为3岁以上"
                            },
                            "childPriceInfo": {
                                "printPrice": 88,
                                "price": 60,
                                "count": 1,
                                "desc": "儿童票为1岁以上"
                            },
                            "infantPriceInfo": {
                                "printPrice": 0,
                                "price": 0,
                                "count": 1,
                                "desc": "婴儿票为2个月以上"
                            }
                        }
                    ],
                    "serviceDesc": "服务说明：香港到深圳的服务说明",
                    "refundDesc": "退改说明：香港到深圳请在有效期截止日期提前一天完成退改，过期将不得取消并修改。",
                    "specialDesc": "特殊说明：香港到深圳请预留充分的接驳及通关时间"
                }
            ]
        }
    },
    "insurance": {
        "header": "意外延误双重保障，更享组合优惠价！",
        "noNeedButtonText": "我不需要购买保险",
        "groupList": [
            {
                "name": "双重保障",
                "groupType": "营销推荐",
                "iconUrl": "http://pic.c-ctrip.com/fltcommon/book/insurance-icons/insurance3.png",
                "insuranceList": [
                    {
                        "typeName": "航空意外险",
                        "type": "HYX",
                        "isShowSelect": false,
                        "saleTagList": [
                            {
                                "name": "新升级",
                                "desc": ""
                            }
                        ],
                        "notice": "<a href='xxxx'>意外险条款</a>",
                        "detailList": [
                            {
                                "isSelected": true,
                                "typeID": "HYX01",
                                "productCode": "10000",
                                "id": "HYX01_10000",
                                "name": "可选择天数1-3天",
                                "desc": "航空意外伤害最高320万，指被保险人持有效机票检票并进入保单载明",
                                "shortDesc": "最高赔付¥320万/航段",
                                "tagList": [
                                    {
                                        "name": "意外险+延误险双重保障内容",
                                        "desc": ""
                                    },
                                    {
                                        "name": "权威保司产品",
                                        "desc": ""
                                    }
                                ],
                                "cancelTipText": "现在购买即可免费获得香港购物优惠券，包含4张人气商店优惠券",
                                "stayTipText": "挽留提示",
                                "priceInfo": {
                                    "price": 200,
                                    "passengerNameList": [
                                        "WWW/QQQ",
                                        "XXX/SB"
                                    ]
                                },
                                "adultInfo": null,
                                "childInfo": null,
                                "infantInfo": null,
                                "coupon": {
                                    "isFree": true,
                                    "name": "购物券"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "name": "其它保障",
                "groupType": "其它保险",
                "iconUrl": "http://pic.c-ctrip.com/fltcommon/book/insurance-icons/insurance3.png",
                "insuranceList": [
                    {
                        "typeName": "航空延误险",
                        "type": "YWX",
                        "saleTagList": [
                            {
                                "name": "新升级",
                                "desc": ""
                            }
                        ],
                        "isShowSelect": false,
                        "notice": "<a href='xxxx'>意外险条款</a>",
                        "detailList": [
                            {
                                "isSelected": false,
                                "typeID": "YWX01",
                                "productCode": "10000",
                                "id": "YWX01_10000",
                                "name": "可选择天数1-3天",
                                "desc": "延误险最高320万，指被保险人持有效机票检票并进入保单载明",
                                "shortDesc": "最高赔付¥320万/航段",
                                "tagList": [
                                    {
                                        "name": "意外险+延误险双重保障内容",
                                        "desc": ""
                                    },
                                    {
                                        "name": "权威保司产品",
                                        "desc": ""
                                    }
                                ],
                                "cancelTipText": "旅程变数多，您确定放弃全面保障？",
                                "stayTipText": "挽留提示",
                                "priceInfo": {
                                    "price": 200,
                                    "passengerNameList": [
                                        "WWW/QQQ"
                                    ]
                                },
                                "adultInfo": null,
                                "childInfo": null,
                                "infantInfo": null,
                                "coupon": null
                            }
                        ]
                    },
                    {
                        "typeName": "国际旅行险",
                        "type": "SGX",
                        "saleTagList": [
                            {
                                "name": "新升级",
                                "desc": ""
                            }
                        ],
                        "isShowSelect": true,
                        "notice": "<a href='xxxx'>意外险条款</a>",
                        "detailList": [
                            {
                                "isSelected": false,
                                "typeID": "SGX01",
                                "productCode": "10000",
                                "id": "SGX01_10000",
                                "name": "可选择天数1-3天",
                                "desc": "旅行险伤害最高900万，指被保险人持有效机票检票并进入保单载明",
                                "shortDesc": "最高赔付¥900万/航段",
                                "tagList": [
                                    {
                                        "name": "旅行险+延误险双重保障内容",
                                        "desc": ""
                                    },
                                    {
                                        "name": "权威保司产品",
                                        "desc": ""
                                    }
                                ],
                                "cancelTipText": "旅程变数多，您确定放弃全面保障？",
                                "stayTipText": "挽留提示",
                                "priceInfo": {
                                    "price": 200,
                                    "passengerNameList": [
                                        "WWW/QQQ"
                                    ]
                                },
                                "adultInfo": null,
                                "childInfo": null,
                                "infantInfo": null,
                                "coupon": null
                            },
                            {
                                "isSelected": false,
                                "typeID": "SGX02",
                                "productCode": "10001",
                                "id": "SGX01_10001",
                                "name": "可选择天数10-30天",
                                "desc": "旅行险最高888万，指被保险人持有效机票检票并进入保单载明",
                                "shortDesc": "最高赔付¥888万/航段",
                                "tagList": [
                                    {
                                        "name": "旅行险+延误险双重保障内容",
                                        "desc": ""
                                    },
                                    {
                                        "name": "权威保司产品",
                                        "desc": ""
                                    }
                                ],
                                "cancelTipText": "旅程变数多，您确定放弃全面保障？",
                                "stayTipText": "挽留提示",
                                "priceInfo": {
                                    "price": 200,
                                    "passengerNameList": [
                                        "WWW/QQQ"
                                    ]
                                },
                                "adultInfo": null,
                                "childInfo": null,
                                "infantInfo": null,
                                "coupon": null
                            }
                        ]
                    },
                    {
                        "typeName": "航空组合险",
                        "type": "ZHX",
                        "saleTagList": [
                            {
                                "name": "新升级",
                                "desc": ""
                            }
                        ],
                        "isShowSelect": false,
                        "notice": "<a href='xxxx'>意外险条款</a>",
                        "detailList": [
                            {
                                "isSelected": false,
                                "typeID": "ZHX01",
                                "productCode": "10000",
                                "id": "ZHX01_10000",
                                "name": "可选择天数1-3天",
                                "desc": "组合险最高400万，指被保险人持有效机票检票并进入保单载明",
                                "shortDesc": "最高赔付¥400万/航段",
                                "tagList": [
                                    {
                                        "name": "组合险+延误险双重保障内容",
                                        "desc": ""
                                    },
                                    {
                                        "name": "权威保司产品",
                                        "desc": ""
                                    }
                                ],
                                "cancelTipText": "旅程变数多，您确定放弃全面保障？",
                                "stayTipText": "挽留提示",
                                "priceInfo": {
                                    "price": 200,
                                    "passengerNameList": [
                                        "WWW/QQQ"
                                    ]
                                },
                                "adultInfo": null,
                                "childInfo": null,
                                "infantInfo": null,
                                "coupon": null
                            }
                        ]
                    }
                ]
            }
        ],
        "policyHolder": {
            "name": "WWW/QQQ",
            "cardType": 2,
            "cardNo": "123456789",
            "countryCode": "86",
            "tel": 13012312312,
            "email": "xxx@xxx.com"
        }
    },
    "loungeDTO": {
        "coupon": {
            "desc": "string",
            "key": "string",
            "name": "string"
        },
        "freePassengerCount": 0,
        "header": "string",
        "loungeList": [
            {
                "discountTip": "string",
                "location": "string",
                "loungeName": "string",
                "picList": [
                    "string"
                ],
                "priceInfo": {
                    "count": 0,
                    "desc": "string",
                    "passengerNameList": [
                        "string"
                    ],
                    "price": 0,
                    "printPrice": 0
                },
                "productId": 0,
                "segmentNo": 0,
                "selected": true,
                "sequence": 0,
                "tagList": [
                    {
                        "desc": "string",
                        "highLight": true,
                        "name": "string"
                    }
                ],
                "useList": [
                    "string"
                ]
            }
        ],
        "openClientPreference": true,
        "openSegPreference": true
    },
    "pickUp": {
        "header": "异国用车无烦恼，专车接送不排队，海外接送机全场6折",
        "groupList": [
            {
                "name": "送机",
                "patternType": 2,
                "tagList": [
                    {
                        "name": "接送机立减¥30/人",
                        "isHighlight": true,
                        "desc": ""
                    },
                    {
                        "name": "保证新车",
                        "isHighlight": false,
                        "desc": ""
                    },
                    {
                        "name": "无额外费用",
                        "isHighlight": false,
                        "desc": ""
                    }
                ],
                "detailList": [
                    {
                        "detailID": "2_1_1",
                        "isSelected": true,
                        "isExpand": true,
                        "title": "送我去浦东国际机场T1",
                        "airportCode": "PVG",
                        "minGetOnTime": "2018-03-19 16:05",
                        "maxGetOnTime": "2018-03-20 02:38",
                        "rentalPrice": 200,
                        "segmentNo": 1,
                        "sequenceNo": 1,
                        "flightIndex": 2,
                        "serviceID": 32,
                        "bookTagInfo": {
                            "name": "预订说明",
                            "desc": "由于各服务商的服务及退改规则不同，您可在填写接送机地址后点击此处查看各程服务及退改说明"
                        },
                        "selectedProductInfo": {
                            "couponCode": "123123",
                            "address": "长江大厦",
                            "getOnTime": "2018-03-19 11:30",
                            "vehicleID": 556673,
                            "vehicleType": 1,
                            "priceMark": "61198762"
                        }
                    }
                ]
            },
            {
                "name": "接机",
                "patternType": 1,
                "tagList": [
                    {
                        "name": "无额外费用",
                        "isHighlight": false,
                        "desc": ""
                    }
                ],
                "detailList": [
                    {
                        "detailID": "1_1_1",
                        "isSelected": false,
                        "isExpand": false,
                        "title": "来浦东国际机场T1接我",
                        "airportCode": "PVG",
                        "minGetOnTime": "2018-03-19 11:05",
                        "maxGetOnTime": "2018-03-19 12:00",
                        "rentalPrice": 120,
                        "segmentNo": 1,
                        "sequenceNo": 1,
                        "flightIndex": 3,
                        "serviceID": 32,
                        "bookTagInfo": {
                            "name": "预订说明",
                            "desc": "由于各服务商的服务及退改规则不同，您可在填写接送机地址后点击此处查看各程服务及退改说明"
                        },
                        "selectedProductInfo": {
                            "couponCode": "123123",
                            "address": "北京大厦",
                            "getOnTime": "2018-03-19 11:30",
                            "vehicleID": 556673,
                            "vehicleType": 1,
                            "priceMark": "61198788"
                        }
                    }
                ]
            }
        ],
        "couponInfo": {
            "couponList": [
                {
                    "code": "123123",
                    "isSelected": true,
                    "name": "【机票特权】10元全球接送机券",
                    "price": 10
                }
            ],
            "couponDesc": [
                "使用特权券，可享特权接送机立减优惠。",
                "预订特权接送机可获得优先派单权益，并有机会体验车型升级惊喜。"
            ]
        }
    },
    "pickUpCoupon": {
        "couponID": 0,
        "couponName": "string",
        "couponProductRule": "string",
        "instructions": [
            "string"
        ],
        "maxCouponNumber": 0,
        "policyId": 0,
        "printPrice": 0,
        "salePrice": 0,
        "slogan": "购券出票后订接送机可享特权优惠价",
        "tags": [
            "string"
        ]
    },
    "preposes": [
        {
            "couponDesc": "string",
            "couponID": 0,
            "couponName": "string",
            "couponProductRule": "string",
            "policyId": 0,
            "prePoseName": "string",
            "printPrice": 0,
            "salePrice": 0
        }
    ],
    "shoppingCouponDTO": {
        "cityCode": "string",
        "couponInfoList": [
            {
                "discountRule": "string",
                "effectDuration": "string",
                "logoUrl": "string",
                "storeId": 0,
                "usageDescription": "string"
            }
        ],
        "discountNote": "string",
        "free": true,
        "header": "string",
        "name": "string",
        "price": 0,
        "promotionSlogan": "string",
        "refundRule": "string",
        "segmentId": 0,
        "tagList": [
            {
                "desc": "string",
                "name": "string"
            }
        ]
    },
    "visaCoupons": [
        {
            "couponID": 0,
            "couponName": "string",
            "couponProductRule": "string",
            "instructions": [
                "string"
            ],
            "maxCouponNumber": 0,
            "policyId": 0,
            "printPrice": 0,
            "salePrice": 0,
            "slogan": "string",
            "tags": [
                "string"
            ],
            "visaCardTags": [
                {
                    "picStyle": "string",
                    "subTitle": "string",
                    "title": "string"
                }
            ],
            "visaProcessTags": [
                {
                    "picStyle": "string",
                    "subTitle": "string",
                    "title": "string"
                }
            ]
        }
    ],
    "upgradeDTO": {
        "head": "限量",
        "notSupportUpgradeList": [
            {
                "arrivalCityName": "布宜诺斯艾利斯",
                "departureCityName": "上海",
                "flightNo": "string",
                "memoInfo": "string",
                "newCabinClass": "Y",
                "newSeatClass": "string",
                "price": 300,
                "productId": 0,
                "segmentNo": 1,
                "isSelected": true,
                "sequenceNo": 2,
                "tagList": [
                    {
                        "desc": "string",
                        "name": "string"
                    }
                ],
                "takeOffTime": "string"
            }
        ],
        "refInstructions": [
            "升舱未处理时，可随时免费退订升舱",
            "升舱服务开始处理后，不可以取消升舱",
            "升舱成功后，改期退票规则具体以航司客规为准"
        ],
        "slogan": "让飞行更舒适",
        "upgradeList": [
            {
                "arrivalCityName": "西雅图",
                "departureCityName": "上海",
                "flightNo": "MU8889",
                "memoInfo": "客票改期：升舱后全票不允许自愿改期2",
                "newCabinClass": "Y",
                "newSeatClass": "商务舱",
                "price": 1800,
                "productId": 100,
                "segmentNo": 1,
                "isSelected": true,
                "sequenceNo": 1,
                "tagList": [
                    {
                        "name": "1.5倍里程",
                        "isHighlight": false,
                        "desc": ""
                    },
                    {
                        "name": "10KG行李",
                        "isHighlight": false,
                        "desc": ""
                    },
                    {
                        "name": "发票",
                        "isHighlight": false,
                        "desc": ""
                    }
                ],
                "takeOffTime": "08月12日"
            }
        ],
        "useInstructions": [
            "升舱名额有限，无法保证100%升舱成功",
            "升舱结果最迟在起飞前24小时以短信告知",
            "如升舱未成功，升舱费原路退回，不影响原有行程",
            "未通知升舱结果前，请勿办理值机"
        ]
    }
}


/**
 * JSON B
 */
export const b = {
    "baggageDTO": {
        "groupList": [
            {
                "childCanBuyBaggage": true,
                "freeUnitWeight": 0,
                "hasFree": true,
                "name": "string",
                "productList": [
                    {
                        "count": 0,
                        "price": 0,
                        "weight": 0
                    }
                ],
                "selected": true,
                "selectedList": [
                    {
                        "passengerName": "string",
                        "productId": 0
                    }
                ]
            }
        ],
        "hasPayedTip": "string",
        "header": "string",
        "notEnoughTip": "string",
        "passengerList": [
            {
                "name": "string",
                "passengerCategory": "Adult",
                "passengerId": 0
            }
        ],
        "promotionName": "string",
        "remark": "string",
        "tagList": [
            {
                "desc": "string",
                "name": "string"
            }
        ]
    },
    "checkInDTO": {
        "checkInDesc": {
            "desc": "string",
            "feeTip": "string",
            "freeText": "string",
            "note": "string",
            "tagList": [
                "string"
            ],
            "title": "string",
            "warmTip": "string"
        },
        "checkInInfos": [
            {
                "checkInKey": "string",
                "free": true,
                "priceInfo": {
                    "count": 0,
                    "desc": "string",
                    "passengerNameList": [
                        "string"
                    ],
                    "price": 0,
                    "printPrice": 0
                },
                "segmentNo": 0,
                "selected": true,
                "transfer": true
            }
        ],
        "preferSelected": "string",
        "preferSupported": [
            {
                "cnText": "string",
                "enText": "string",
                "value": "string"
            }
        ]
    },
    "generalCoupons": [
        {
            "couponID": 0,
            "couponName": "string",
            "couponProductRule": "string",
            "instructions": [
                "string"
            ],
            "maxCouponNumber": 0,
            "policyId": 0,
            "printPrice": 0,
            "salePrice": 0,
            "slogan": "string",
            "tags": [
                "string"
            ]
        }
    ],
    "hkg": {
        "airportBus": {
            "callBusTips": "string",
            "detailList": [
                {
                    "adultPriceInfo": {
                        "count": 0,
                        "desc": "string",
                        "passengerNameList": [
                            "string"
                        ],
                        "price": 0,
                        "printPrice": 0
                    },
                    "arrivalIsHK": true,
                    "arrivalStationId": 0,
                    "arrivalStationName": "string",
                    "childPriceInfo": {
                        "count": 0,
                        "desc": "string",
                        "passengerNameList": [
                            "string"
                        ],
                        "price": 0,
                        "printPrice": 0
                    },
                    "departureIsHK": true,
                    "departureStationId": 0,
                    "departureStationName": "string",
                    "detailTagList": [
                        {
                            "desc": "string",
                            "name": "string"
                        }
                    ],
                    "durationMinutes": 0,
                    "infantPriceInfo": {
                        "count": 0,
                        "desc": "string",
                        "passengerNameList": [
                            "string"
                        ],
                        "price": 0,
                        "printPrice": 0
                    },
                    "isFree": true,
                    "isSelected": true,
                    "policyID": 0,
                    "segmentNo": 0,
                    "validEndDate": "string",
                    "validStartDate": "string",
                    "workEndTime": "string",
                    "workStartTime": "string"
                }
            ],
            "refundDesc": "string",
            "serviceList": [
                "string"
            ],
            "specialDescList": [
                "string"
            ]
        },
        "promotionSlogan": "string",
        "shuttleBoat": {
            "detailList": [
                {
                    "arrivalIsHK": true,
                    "arrivalStationId": "string",
                    "arrivalStationName": "string",
                    "baggageRule": "string",
                    "departureIsHK": true,
                    "departureStationId": "string",
                    "departureStationName": "string",
                    "durationMinutes": 0,
                    "isFree": true,
                    "preposePolicyID": 0,
                    "refundDesc": "string",
                    "seatPriceList": [
                        {
                            "adultPriceInfo": {
                                "count": 0,
                                "desc": "string",
                                "passengerNameList": [
                                    "string"
                                ],
                                "price": 0,
                                "printPrice": 0
                            },
                            "childPriceInfo": {
                                "count": 0,
                                "desc": "string",
                                "passengerNameList": [
                                    "string"
                                ],
                                "price": 0,
                                "printPrice": 0
                            },
                            "infantPriceInfo": {
                                "count": 0,
                                "desc": "string",
                                "passengerNameList": [
                                    "string"
                                ],
                                "price": 0,
                                "printPrice": 0
                            },
                            "isSelected": true,
                            "seatName": "string",
                            "seatRankID": "string",
                            "ticketNum": 0
                        }
                    ],
                    "segmentNo": 0,
                    "serviceDesc": "string",
                    "setOffTime": "string",
                    "specialDesc": "string",
                    "voyageRouteID": "string"
                }
            ]
        }
    },
    "insurance": {
        "groupList": [
            {
                "groupType": "string",
                "iconUrl": "string",
                "insuranceList": [
                    {
                        "coupon": {
                            "isFree": true,
                            "name": "string"
                        },
                        "detailList": [
                            {
                                "adultInfo": {
                                    "count": 0,
                                    "desc": "string",
                                    "passengerNameList": [
                                        "string"
                                    ],
                                    "price": 0,
                                    "printPrice": 0
                                },
                                "cancelTipText": "string",
                                "childInfo": {
                                    "count": 0,
                                    "desc": "string",
                                    "passengerNameList": [
                                        "string"
                                    ],
                                    "price": 0,
                                    "printPrice": 0
                                },
                                "desc": "string",
                                "id": "string",
                                "infantInfo": {
                                    "count": 0,
                                    "desc": "string",
                                    "passengerNameList": [
                                        "string"
                                    ],
                                    "price": 0,
                                    "printPrice": 0
                                },
                                "isSelected": true,
                                "name": "string",
                                "priceInfo": {
                                    "count": 0,
                                    "desc": "string",
                                    "passengerNameList": [
                                        "string"
                                    ],
                                    "price": 0,
                                    "printPrice": 0
                                },
                                "productCode": "string",
                                "promotionSlogan": "string",
                                "selected": true,
                                "shortDesc": "string",
                                "stayTipText": "string",
                                "tagList": [
                                    {
                                        "desc": "string",
                                        "name": "string"
                                    }
                                ],
                                "typeID": "string"
                            }
                        ],
                        "isShowSelect": true,
                        "notice": "string",
                        "saleTagList": [
                            {
                                "desc": "string",
                                "name": "string"
                            }
                        ],
                        "type": "string",
                        "typeName": "string"
                    }
                ],
                "name": "string"
            }
        ],
        "header": "string",
        "noNeedButtonText": "string",
        "turnOffUnneededInsurance": true
    },
    "loungeDTO": {
        "coupon": {
            "desc": "string",
            "key": "string",
            "name": "string"
        },
        "freePassengerCount": 0,
        "header": "string",
        "loungeList": [
            {
                "discountTip": "string",
                "location": "string",
                "loungeName": "string",
                "picList": [
                    "string"
                ],
                "priceInfo": {
                    "count": 0,
                    "desc": "string",
                    "passengerNameList": [
                        "string"
                    ],
                    "price": 0,
                    "printPrice": 0
                },
                "productId": 0,
                "segmentNo": 0,
                "selected": true,
                "sequence": 0,
                "tagList": [
                    {
                        "desc": "string",
                        "highLight": true,
                        "name": "string"
                    }
                ],
                "useList": [
                    "string"
                ]
            }
        ]
    },
    "pickUp": {
        "couponInfo": {
            "couponDesc": [
                "string"
            ],
            "couponList": [
                {
                    "code": "string",
                    "name": "string",
                    "price": 0,
                    "selected": true
                }
            ]
        },
        "groupList": [
            {
                "detailList": [
                    {
                        "airportCode": "string",
                        "bookTagInfo": {
                            "desc": "string",
                            "name": "string"
                        },
                        "detailID": "string",
                        "flightIndex": 0,
                        "isExpand": true,
                        "isFree": true,
                        "isSelected": true,
                        "maxGetOnTime": "string",
                        "minGetOnTime": "string",
                        "rentalPrice": 0,
                        "segmentNo": 0,
                        "selectedProductInfo": {
                            "address": "string",
                            "couponCode": "string",
                            "getOnTime": "string",
                            "priceMark": "string",
                            "vehicleType": 0
                        },
                        "sequenceNo": 0,
                        "serviceID": 0,
                        "title": "string"
                    }
                ],
                "name": "string",
                "patternType": 0,
                "tagList": [
                    {
                        "desc": "string",
                        "highlight": true,
                        "name": "string"
                    }
                ]
            }
        ],
        "header": "string"
    },
    "pickUpCoupon": {
        "couponID": 0,
        "couponName": "string",
        "couponProductRule": "string",
        "instructions": [
            "string"
        ],
        "maxCouponNumber": 0,
        "policyId": 0,
        "printPrice": 0,
        "salePrice": 0,
        "slogan": "string",
        "tags": [
            "string"
        ]
    },
    "preposes": [
        {
            "couponDesc": "string",
            "couponID": 0,
            "couponName": "string",
            "couponProductRule": "string",
            "policyId": 0,
            "prePoseName": "string",
            "printPrice": 0,
            "salePrice": 0
        }
    ],
    "savedXProduct": true,
    "shoppingCouponDTO": {
        "cityCode": "string",
        "couponInfoList": [
            {
                "discountRule": "string",
                "effectDuration": "string",
                "logoUrl": "string",
                "storeId": 0,
                "usageDescription": "string"
            }
        ],
        "discountNote": "string",
        "free": true,
        "header": "string",
        "name": "string",
        "price": 0,
        "promotionSlogan": "string",
        "refundRule": "string",
        "segmentId": 0,
        "tagList": [
            {
                "desc": "string",
                "name": "string"
            }
        ]
    },
    "upgradeDTO": {
        "head": "string",
        "notSupportUpgradeList": [
            {
                "arrivalCityName": "string",
                "departureCityName": "string",
                "flightNo": "string",
                "memoInfo": "string",
                "newCabinClass": "Y",
                "newSeatClass": "string",
                "price": 0,
                "productId": 0,
                "segmentNo": 0,
                "selected": true,
                "sequenceNo": 0,
                "tagList": [
                    {
                        "desc": "string",
                        "name": "string"
                    }
                ],
                "takeOffTime": "string"
            }
        ],
        "refInstructions": [
            "string"
        ],
        "slogan": "string",
        "upgradeList": [
            {
                "arrivalCityName": "string",
                "departureCityName": "string",
                "flightNo": "string",
                "memoInfo": "string",
                "newCabinClass": "Y",
                "newSeatClass": "string",
                "price": 0,
                "productId": 0,
                "segmentNo": 0,
                "selected": true,
                "sequenceNo": 0,
                "tagList": [
                    {
                        "desc": "string",
                        "name": "string"
                    }
                ],
                "takeOffTime": "string"
            }
        ],
        "useInstructions": [
            "string"
        ]
    },
    "visaCoupons": [
        {
            "couponID": 0,
            "couponName": "string",
            "couponProductRule": "string",
            "instructions": [
                "string"
            ],
            "maxCouponNumber": 0,
            "policyId": 0,
            "printPrice": 0,
            "salePrice": 0,
            "slogan": "string",
            "tags": [
                "string"
            ],
            "visaCardTags": [
                {
                    "picStyle": "string",
                    "subTitle": "string",
                    "title": "string"
                }
            ],
            "visaProcessTags": [
                {
                    "picStyle": "string",
                    "subTitle": "string",
                    "title": "string"
                }
            ]
        }
    ]
}
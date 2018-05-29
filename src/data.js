"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * JSON A
 */
exports.a = {
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
};
/**
 * JSON B
 */
exports.b = {
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
};
//# sourceMappingURL=data.js.map
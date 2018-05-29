/**
 * JSON A
 */
export declare const a: {
    "header": string;
    "groupList": {
        "name": string;
        "patternType": number;
        "tagList": {
            "name": string;
            "isHighlight": boolean;
            "desc": string;
        }[];
        "detailList": {
            "detailID": string;
            "isSelected": boolean;
            "isExpand": boolean;
            "title": string;
            "airportCode": string;
            "minGetOnTime": string;
            "maxGetOnTime": string;
            "rentalPrice": number;
            "segmentNo": number;
            "sequenceNo": number;
            "flightIndex": number;
            "serviceID": number;
            "bookTagInfo": {
                "name": string;
                "desc": string;
            };
            "selectedProductInfo": {
                "couponCode": string;
                "address": string;
                "getOnTime": string;
                "vehicleID": number;
                "vehicleType": number;
                "priceMark": string;
            };
        }[];
    }[];
    "couponInfo": {
        "couponList": {
            "code": string;
            "isSelected": boolean;
            "name": string;
            "price": number;
        }[];
        "couponDesc": string[];
    };
};
/**
 * JSON B
 */
export declare const b: {
    "couponInfo": {
        "couponDesc": string[];
        "couponList": {
            "code": string;
            "name": string;
            "price": number;
            "selected": boolean;
        }[];
    };
    "groupList": {
        "detailList": {
            "airportCode": string;
            "bookTagInfo": {
                "desc": string;
                "name": string;
            };
            "detailID": string;
            "flightIndex": number;
            "isExpand": boolean;
            "isFree": boolean;
            "isSelected": boolean;
            "maxGetOnTime": string;
            "minGetOnTime": string;
            "rentalPrice": number;
            "segmentNo": number;
            "selectedProductInfo": {
                "address": string;
                "couponCode": string;
                "getOnTime": string;
                "priceMark": string;
                "vehicleType": number;
            };
            "sequenceNo": number;
            "serviceID": number;
            "title": string;
        }[];
        "name": string;
        "patternType": number;
        "tagList": {
            "desc": string;
            "highlight": boolean;
            "name": string;
        }[];
    }[];
    "header": string;
};

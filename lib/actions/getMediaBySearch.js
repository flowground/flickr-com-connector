/**
 * Auto-generated action file for "Flickr API Schema" API.
 *
 * Generated at: 2019-05-07T14:40:46.250Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / flickr-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'getMediaBySearch'
 * Endpoint Path: '/rest?method=flickr.photos.search'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "api_key",
    "text",
    "tags",
    "user_id",
    "min_upload_date",
    "max_upload_date",
    "min_taken_date",
    "max_taken_date",
    "license",
    "sort",
    "privacy_filter",
    "bbox",
    "accuracy",
    "safe_search",
    "content_type",
    "machine_tags",
    "machine_tag_mode",
    "group_id",
    "contacts",
    "woe_id",
    "place_id",
    "media",
    "has_geo",
    "geo_context",
    "lat",
    "lon",
    "radius",
    "radius_units",
    "is_commons",
    "in_gallery",
    "is_getty",
    "per_page",
    "page"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "api_key": "api_key",
    "text": "text",
    "tags": "tags",
    "user_id": "user_id",
    "min_upload_date": "min_upload_date",
    "max_upload_date": "max_upload_date",
    "min_taken_date": "min_taken_date",
    "max_taken_date": "max_taken_date",
    "license": "license",
    "sort": "sort",
    "privacy_filter": "privacy_filter",
    "bbox": "bbox",
    "accuracy": "accuracy",
    "safe_search": "safe_search",
    "content_type": "content_type",
    "machine_tags": "machine_tags",
    "machine_tag_mode": "machine_tag_mode",
    "group_id": "group_id",
    "contacts": "contacts",
    "woe_id": "woe_id",
    "place_id": "place_id",
    "media": "media",
    "has_geo": "has_geo",
    "geo_context": "geo_context",
    "lat": "lat",
    "lon": "lon",
    "radius": "radius",
    "radius_units": "radius_units",
    "is_commons": "is_commons",
    "in_gallery": "in_gallery",
    "is_getty": "is_getty",
    "per_page": "per_page",
    "page": "page"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'getMediaBySearch',
        pathName: '/rest?method=flickr.photos.search',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}
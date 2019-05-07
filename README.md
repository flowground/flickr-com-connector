# ![LOGO](logo.png) Flickr API Schema **flow**ground Connector

## Description

A generated **flow**ground connector for the Flickr API Schema API (version 1.0.0).

Generated from: https://api.apis.guru/v2/specs/flickr.com/1.0.0/swagger.json<br/>
Generated at: 2019-05-07T17:40:46+03:00

## API Description

A subset of Flickr's API defined in Swagger format.

## Authorization

This API does not require authorization.

## Actions

### Returns an access token

*Tags:* `Public`

#### Input Parameters
* `oauth_consumer_key` - _required_
* `oauth_nonce` - _required_
* `oauth_timestamp` - _required_
* `oauth_signature_method` - _required_
* `oauth_version` - _required_
* `oauth_signature` - _required_
* `oauth_verifier` - _required_
* `oauth_token` - _required_

### Returns an oauth token and oauth token secret

*Tags:* `Public`

#### Input Parameters
* `oauth_consumer_key` - _required_
* `oauth_nonce` - _required_
* `oauth_timestamp` - _required_
* `oauth_signature_method` - _required_
* `oauth_version` - _required_
* `oauth_signature` - _required_
* `oauth_callback` - _required_

### Returns next and previous favorites for a photo in a user's favorites

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `photo_id` - _required_
* `user_id` - _optional_

### Returns a list of the user's favorite photos. Only photos which the calling user has permission to see are returned.

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `user_id` - _required_
* `min_fave_date` - _optional_
* `max_fave_date` - _optional_
* `page` - _optional_
* `per_page` - _optional_

### Returns a list of photos in a gallery.

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `gallery_id` - _required_

### Get information on a group topic reply

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `group_id` - _optional_
* `topic_id` - _required_
* `reply_id` - _required_

### Get information about a group discussion topic

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `group_id` - _optional_
* `topic_id` - _required_

### Get a list of discussion topics in a group.

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `group_id` - _optional_
* `page` - _optional_
* `per_page` - _optional_

### Get information about a group

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `group_id` - _optional_
* `group_path_alias` - _optional_
* `lang` - _optional_

### Returns next and previous photos for a photo in a group pool

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `photo_id` - _required_
* `group_id` - _optional_

### Returns a list of pool photos for a given group

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `group_id` - _optional_

### Returns a person

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `user_id` - _optional_

### Return photos from the given user's photostream

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `user_id` - _required_
* `safe_search` - _optional_
* `min_upload_date` - _optional_
* `max_upload_date` - _optional_
* `min_taken_date` - _optional_
* `max_taken_date` - _optional_
* `content_type` - _optional_
* `privacy_filter` - _optional_
* `page` - _optional_
* `per_page` - _optional_

### Returns next and previous photos in a photo list

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `photo_id` - _required_
* `photolist_id` - _required_

### Returns next and previous photos for a photo in a photostream

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `photo_id` - _required_

### Retrieves a list of EXIF/TIFF/GPS tags for a given photo. The calling user must have permission to view the photo.

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `photo_id` - _required_
* `secret` - _optional_

### Returns a photo

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `photo_id` - _required_

### Returns photo sizes

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `photo_id` - _required_

### Fetches a list of available photo licenses for Flickr

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_

### Return a list of photos matching some criteria.

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `text` - _optional_ - A free text search. Photos who's title, description or tags contain the text will be returned. You can exclude results that match a term by prepending it with a - character.
* `tags` - _optional_ - A comma-delimited list of tags. Photos with one or more of the tags listed will be returned. You can exclude results that match a term by prepending it with a - character.
* `user_id` - _optional_ - The NSID of the user who's photo to search. If this parameter isn't passed then everybody's public photos will be searched. A value of "me" will search against the calling user's photos for authenticated calls.
* `min_upload_date` - _optional_ - Minimum upload date. Photos with an upload date greater than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime.
* `max_upload_date` - _optional_ - Maximum upload date. Photos with an upload date less than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime.
* `min_taken_date` - _optional_ - Minimum taken date. Photos with an taken date greater than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp.
* `max_taken_date` - _optional_ - Maximum taken date. Photos with an taken date less than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp.
* `license` - _optional_ - The license id for photos (for possible values see the flickr.photos.licenses.getInfo method). Multiple licenses may be comma-separated.
* `sort` - _optional_ - The order in which to sort returned photos. Deafults to date-posted-desc (unless you are doing a radial geo query, in which case the default sorting is by ascending distance from the point specified). The possible values are:
  date-posted-asc,
  date-posted-desc,
  date-taken-asc,
  date-taken-desc,
  interestingness-desc,
  interestingness-asc, and
  relevance.

* `privacy_filter` - _optional_ - Return photos only matching a certain privacy level. This only applies when making an authenticated call to view photos you own. Valid values are:,
  1: public photos,
  2: private photos visible to friends,
  3: private photos visible to family,
  4: private photos visible to friends & family,
  5: completely private photos

* `bbox` - _optional_ - A comma-delimited list of 4 values defining the Bounding Box of the area that will be searched.
* `accuracy` - _optional_ - Recorded accuracy level of the location information. Current range is 1-16:
  World level is 1
  Country is ~3
  Region is ~6
  City is ~11
  Street is ~16

* `safe_search` - _optional_ - Safe search setting:
  1: for safe,
  2: for moderate,
  3: for restricted

* `content_type` - _optional_ - Content Type setting:
  1: photos only.
  2: screenshots only.
  3: 'other' only.
  4: photos and screenshots.
  5: screenshots and 'other'.
  6: photos and 'other'.
  7: photos, screenshots, and 'other' (all).

* `machine_tags` - _optional_ - Aside from passing in a fully formed machine tag, there is a special syntax for searching on specific properties : Find photos using the 'dc' namespace : "machine_tags" => "dc:" Find photos with a title in the 'dc' namespace : "machine_tags" => "dc:title=" Find photos titled "mr. camera" in the 'dc' namespace : "machine_tags" => "dc:title=\"mr. camera\" Find photos whose value is "mr. camera" : "machine_tags" => "*:*=\"mr. camera\"" Find photos that have a title, in any namespace : "machine_tags" => "*:title=" Find photos that have a title, in any namespace, whose value is "mr. camera" : "machine_tags" => "*:title=\"mr. camera\"" Find photos, in the 'dc' namespace whose value is "mr. camera" : "machine_tags" => "dc:*=\"mr. camera\"" Multiple machine tags may be queried by passing a comma-separated list. The number of machine tags you can pass in a single query depends on the tag mode (AND or OR) that you are querying with. "AND" queries are limited to (16) machine tags. "OR" queries are limited to (8).

* `machine_tag_mode` - _optional_ - Either 'any' for an OR combination of tags, or 'all' for an AND combination. Defaults to 'any' if not specified.
* `group_id` - _optional_ - The id of a group who's pool to search. If specified, only matching photos posted to the group's pool will be returned.
* `contacts` - _optional_ - Search your contacts. Either 'all' or 'ff' for just friends and family. (Experimental)
* `woe_id` - _optional_ - A 32-bit identifier that uniquely represents spatial entities. (not used if bbox argument is present).
* `place_id` - _optional_ - A Flickr place id. (not used if bbox argument is present). Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters -- If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).

* `media` - _optional_ - Filter results by media type. Possible values are all (default), photos or videos
* `has_geo` - _optional_ - Any photo that has been geotagged, or if the value is "0" any photo that has not been geotagged. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters -- If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).

* `geo_context` - _optional_ - Geo context is a numeric value representing the photo's geotagginess beyond latitude and longitude. For example, you may wish to search for photos that were taken "indoors" or "outdoors". The current list of context IDs is: 0, not defined. 1, indoors. 2, outdoors. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters -- If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).

* `lat` - _optional_ - A valid latitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters -- If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).

* `lon` - _optional_ - A valid longitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters -- If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).

* `radius` - _optional_ - A valid radius used for geo queries, greater than zero and less than 20 miles (or 32 kilometers), for use with point-based geo queries. The default value is 5 (km).
* `radius_units` - _optional_ - The unit of measure when doing radial geo queries. Valid options are "mi" (miles) and "km" (kilometers). The default is "km".
* `is_commons` - _optional_ - Limit the scope of the search to only photos that are part of the Flickr Commons project. Default is false.
* `in_gallery` - _optional_ - Limit the scope of the search to only photos that are in a gallery? Default is false, search all photos.
* `is_getty` - _optional_ - Limit the scope of the search to only photos that are for sale on Getty. Default is false.
* `per_page` - _optional_ - Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
* `page` - _optional_ - The page of results to return. If this argument is omitted, it defaults to 1.

### Returns next and previous photos for a photo in a set

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `photo_id` - _required_
* `photoset_id` - _optional_

### Returns the albums belonging to the specified user

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `user_id` - _required_
* `page` - _optional_
* `per_page` - _optional_

### Returns a list of photos in an album.

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `photoset_id` - _required_

### Echos the input parameters back in the response

*Tags:* `Public`

#### Input Parameters
* `api_key` - _required_
* `echo` - _optional_

### Uploads a new photo to Flickr

*Tags:* `Public`

## License

**flow**ground :- Telekom iPaaS / flickr-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.

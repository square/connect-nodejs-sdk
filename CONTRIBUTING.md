# How to contribute

**If you have feedback about the new SDKs, or just want to talk to other Square
Developers, request an invite to the new [slack community for Square
Developers](https://docs.google.com/forms/d/e/1FAIpQLSfAZGIEZoNs-XryKqUoW3atFQHdQw5UqXLMOVPq3V4DEq-AJw/viewform?usp=sf_link#response=ACYDBNj5LFgPy8Tcac2gSgv_IjXvgWsPy2CO2xTXwnc0OSSxCvWFgc7SCDHvVQ)**

## Bug reports and feature requests

Bug reports and feature requests for the SDK are welcome from everyone. If you
would like to file an issue, you may either file one in this repository or in
[connect-api-specification](https://github.com/square/connect-api-specification).

## Pull requests

The code for this SDK is auto-generated with
[swagger-codegen](https://github.com/swagger-api/swagger-codegen), using the
settings and templates found in the connect-api-specification repository.
For this reason, **we prefer that pull requests be submitted against
[connect-api-specification](https://github.com/square/connect-api-specification)**.

## Testing

Tests can be run with `npm test`.

You will need to supply your own `travis-ci/accounts.json` file. This file
should have the following format:

```json
{
    "US-Prod": {
        "access_token": "XXX",
        "location_id": "YYY",
        "application_id": "ZZZ"
    },
    "US-Prod-Sandbox": {
        "access_token": "XXX",
        "location_id": "YYY",
        "application_id": "ZZZ"
    }
}
```

All of these credentials can be obtained from the
[Developer Application Dashboard](https://connect.squareup.com/apps).

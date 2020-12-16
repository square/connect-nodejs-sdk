# Square Connect Node.js SDK - DEPRECATED

---

[![Build Status](https://travis-ci.org/square/connect-nodejs-sdk.svg?branch=master)](https://travis-ci.org/square/connect-nodejs-sdk)
[![npm version](https://badge.fury.io/js/square-connect.svg)](https://badge.fury.io/js/square-connect)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)
==================

## NOTICE: The Square Connect Node.js SDK is deprecated and replaced by [square/square-nodejs-sdk]
This Square Connect Node.js SDK is deprecated. This SDK entered security maintenance phase on 2020-12-16 and will be RETIRED (EOL) in Q2, 2021. In the security maintenance phase, this SDK will continue to receive support and security patches but will no longer receive bug fixes or API updates. Once it is retired, support and security patches will no longer be available.

This SDK itself will continue to work indefinitely until such time that the underlying APIs are retired, at which point portions of this SDK may stop functioning. For a full list of API retirement dates, please see our [Square API Lifecycle documentation].

| Security Maintenance | Retired (EOL) |
| -------- | -------- |
| December 16, 2020 | Q2, 2021 |

To ensure that you continue to receive API updates and SDK improvements, you should migrate to the new [Square Node.js SDK]. Please follow the instructions below to migrate to the new SDK.

The old Connect SDK documentation is available under the [/docs] folder.

<br/>

---

* [Migrate to the Square Node.js SDK](#migrate-to-the-square-nodejs-sdk)
  * [Install the SDK](#install-the-sdk)
  * [Update your code](#update-your-code)
* [Example code migration](#example-code-migration)
* [Ask the Community](#ask-the-community)

---

<br/>

## Migrate to the Square Node.js SDK

Follow the instructions below to migrate your apps from this deprecated Connect Node.js SDK to the new [Square Node.js SDK]. You need to install the new SDK and update your application code.

### Install the Square Node.js SDK

```sh
$ npm install square
```

### Update your application code
Make the following changes to migrate your application code to the new Square SDK:

1. Change all instances that import the `square-connect` library to import the `square` library.
1. Update the instantiation and initialization of the API client to follow the method described below.
1. Replace `square-connect` models with the new `square` equivalents with camel case parameter names.
1. Update code for calling Square APIs and accessing response data to follow the method described below.

**Note:** The new SDK supports TypeScript. It exports type files that you can use to type-check the SDK usage in TypeScript codebases.

### Client instantiation and initialization
Use the following examples to compare client instantiation and initialization in the deprecated SDK versus the new SDK.

#### Deprecated Connect SDK
This is how you import the `square-connect` library, and instantiate and initialize the API client.
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// To access sandbox resources, set the basePath to the sandbox URL
//defaultClient.basePath = 'https://connect.squareupsandbox.com';

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = process.env.SQUARE_ACCESS_TOKEN;
```

#### New Square SDK
This is how you can do the same thing with the new `square` library. You can import using the ES module or CommonJS module syntax, but you should not mix the two import styles in the same codebase.

**Option 1: ES module import example** (recommended)
```javascript
import {  ApiError, Client, Environment  } from 'square'

const client = new Client({
  timeout:3000,
  environment: Environment.Production, // `Environment.Sandbox` to access sandbox resources
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})
```
**Option 2: CommonJS module import example**  
```javascript
const {  ApiError, Client, Environment  } = require('square')

const client = new Client({
  timeout:3000,
  environment: Environment.Production, // `Environment.Sandbox` to access sandbox resources
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})
```

### Example code migration
As a specific example, consider the code for creating a customer in the sandbox environment.

#### Deprecated Connect SDK
The following example uses the `square-connect` library to create a customer.
```javascript
var SquareConnect = require('square-connect');

// Instantiate and initialize the API client
var defaultClient = SquareConnect.ApiClient.instance;
defaultClient.basePath = 'https://connect.squareupsandbox.com';
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = process.env.SQUARE_ACCESS_TOKEN;

// Unique key to ensure this operation runs only once if you need to retry
var idempotencyKey = "unique_key";

var requestBody = SquareConnect.CreateCustomerRequest.constructFromObject({
  idempotency_key: idempotencyKey, // Parameters use snake case
  given_name: "Amelia",
  family_name: "Earhart",
  email_address: "Amelia.Earhart@aviators.com"
});

// Get an instance of the Square API you want call
var customersApi = new SquareConnect.CustomersApi();

// Call the API
customersApi.createCustomer(requestBody).then(function(result) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(result, 0, 1));
}, function(error) {
  console.error(error);
});
```

#### New Square SDK
Now consider equivalent code that uses the new `square` library. Note the following:
   * Calls to a Square API must be wrapped in an asynchronous function.
   * Parameter names must be changed from snake case to camel case, for example from `location_id` to `locationId`.
   * Square API calls return an ApiResponse or throw an ApiError. Use a try/catch statement to check whether the response succeeded or failed. Both objects contain properties that describe the request (`headers` and `request`) and the response (`statusCode`, `body`, and `result`). The response payload is returned as text in the `body` property or as a dictionary in the `result` property.

```javascript
import { ApiError, Client, Environment } from 'square'

// Instantiate and initialize the API client
const client = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})

// Get an instance of the Square API you want call
const { customersApi }  = client

// Unique key to ensure this operation runs only once if you need to retry
let idempotencyKey = "unique_key"

// Call the API from within an async function
const createCustomer = async () => {
  let requestBody = {
    idempotencyKey: idempotencyKey,  // Parameters use camel case
    givenName: "Amelia",  
    familyName: "Earhart",
    emailAddress: "Amelia.Earhart@aviators.com"
  }

  // Use a try/catch statement to check if the response succeeded or failed
  try {
    let { result } = await customersApi.createCustomer(requestBody)     
    console.log('API called successfully. Returned data: 'result)
  } catch (error) {
    if (error instanceof ApiError) {
      console.log("Errors: ", error.errors)
    } else {
      console.log("Unexpected Error: ", error)
    }
  }
}
createCustomer()
```

That's it!

For more information about using the new Square SDK, see the [Square Node.js SDK] on GitHub.

For more examples that use the new Square SDK, see the [Square Connect API Examples] on GitHub.

---

<br/>

## Ask the community

Please join us in our [Square developer community] if you have any questions or feedback!

[//]: # "Link anchor definitions"
[square/square-nodejs-sdk]: https://github.com/square/square-nodejs-sdk
[Square Node.js SDK]: https://github.com/square/square-nodejs-sdk
[Square API Lifecycle documentation]: https://developer.squareup.com/docs/build-basics/api-lifecycle#deprecated-apis
[/docs]: https://github.com/square/connect-nodejs-sdk/tree/master/docs/README.md
[Square Connect API Examples]: https://github.com/square/connect-api-examples/tree/master/connect-examples/v2
[Square developer community]: https://squ.re/slack
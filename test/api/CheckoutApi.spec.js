const SquareConnect = require('../../src/index');
const {
  accounts,
  expect,
  handleUnexpectedError,
  generateIdempotencyKey
} = require('../support/setup');

describe('CheckoutApi', function () {
  beforeEach(function () {
    this.account = accounts.sandbox;
    this.locationId = this.account.location_id;

    const defaultClient = SquareConnect.ApiClient.instance;
    const oauth2 = defaultClient.authentications['oauth2'];
    oauth2.accessToken = this.account.access_token;
    this.api = new SquareConnect.CheckoutApi();
  });

  it('should call createCheckout successfully', async function () {
    const requestBody = {
      idempotency_key: generateIdempotencyKey(),
      order: {
        reference_id: 'reference_id',
        line_items: [
          {
            name: 'Printed T Shirt',
            quantity: '2',
            base_price_money: {amount: 1500, currency: 'USD'},
            discounts: [
              {
                name: '7% off previous season item',
                percentage: '7'
              },
              {
                name: '$3 off Customer Discount',
                amount_money: {amount: 300, currency: 'USD'}
              }
            ]
          },
          {
            name: 'Slim Jeans',
            quantity: '1',
            base_price_money: {amount: 2500, currency: 'USD'}
          },
          {
            name: 'Woven Sweater',
            quantity: '3',
            base_price_money: {amount: 3500, currency: 'USD'},
            discounts: [
              {
                name: '$11 off Customer Discount',
                amount_money: {amount: 1100, currency: 'USD'}
              },
              {
                name: 'Fair Trade Tax',
                percentage: '5'
              }
            ]
          },
        ],
        discounts: [
          {
            name: "Father's day 12% OFF",
            percentage: '12'
          },
          {
            name: 'Global Sales $55 OFF',
            amount_money: {amount: 5500, currency: 'USD'}
          }
        ],
        taxes: [
          {
            name: 'Sales Tax',
            type: 'ADDITIVE',
            percentage: '8.5'
          }
        ]
      },
      ask_for_shipping_address: true,
      merchant_support_email: 'merchant+support@website.com',
      pre_populate_buyer_email: 'example@email.com',
      pre_populate_shipping_address: {
        address_line_1: '1455 Market St',
        address_line_2: 'Suite 600',
        locality: 'San Francisco',
        administrative_district_level_1: 'CA',
        postal_code: '94103',
        country: 'US',
        first_name: 'Jane',
        last_name: 'Doe'
      },
      redirect_url: 'https://www.example.com/checkout-order-confirm'
    };

    const response = await this.api.createCheckout(this.locationId, requestBody)
      .catch(handleUnexpectedError);

    expect(response.errors).not.to.exist;
    expect(response.checkout.checkout_page_url).to.match(/^https:\/\/connect\./);
  });
});

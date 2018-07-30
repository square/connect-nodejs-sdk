const SquareConnect = require('../../src/index');
const {
  accounts,
  expect,
  handleUnexpectedError
} = require('../support/setup');

describe('MobileAuthorizationApi', function() {
  beforeEach(function() {
    const defaultClient = SquareConnect.ApiClient.instance;
    const oauth2 = defaultClient.authentications['oauth2'];
    oauth2.accessToken = accounts.production.access_token;
    this.api  = new SquareConnect.MobileAuthorizationApi();
  });

  it('should create mobile authorization code', async function () {
    const resp = await this.api.createMobileAuthorizationCode({location_id: accounts.production.location_id})
      .catch(handleUnexpectedError);

    expect(resp.authorization_code).to.exist;
    expect(resp.expires_at).to.exist;
    expect(resp.error).not.to.exist;
  });

});

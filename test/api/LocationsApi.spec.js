const SquareConnect = require('../../src/index');
const {
  accounts,
  expect,
  handleUnexpectedError
} = require('../support/setup');

describe('LocationsApi', function () {
  beforeEach(function () {
    const defaultClient = SquareConnect.ApiClient.instance;
    const oauth2 = defaultClient.authentications['oauth2'];
    oauth2.accessToken = accounts.sandbox.access_token;
    this.api = new SquareConnect.LocationsApi();
  });

  it('should list locations', async function () {
    const resp = await this.api.listLocations()
      .catch(handleUnexpectedError);

    const locations = resp.locations;
    expect(locations).to.exist;
    const locationIds = locations.map(location => location.id);
    expect(locationIds).to.include(accounts.sandbox.location_id);
  });
});

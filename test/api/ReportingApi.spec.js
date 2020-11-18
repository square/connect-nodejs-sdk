const SquareConnect = require('../../src/index');
const {
  accounts,
  expect,
  handleUnexpectedError
} = require('../support/setup');

function addDays(startDate, numberOfDays) {
  return new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate() + numberOfDays,
    startDate.getHours(),
    startDate.getMinutes(),
    startDate.getSeconds()
  );
}

// describe('ReportingApi', function () {

//   beforeEach(function () {
//     this.account = accounts.production;
//     this.locationId = this.account.location_id

//     const defaultClient = SquareConnect.ApiClient.instance;
//     const oauth2 = defaultClient.authentications['oauth2'];
//     oauth2.accessToken = this.account.access_token;

//     this.api = new SquareConnect.ReportingApi();
//   });

//   it('should call listAdditionalRecipientReceivableRefunds successfully', async function () {
//     const now = new Date();
//     const response = await this.api.listAdditionalRecipientReceivableRefunds(this.locationId, {
//       begin_time: addDays(now, -30),
//       end_time: now,
//       sort_order: 'DESC'
//     }).catch(handleUnexpectedError);

//     expect(response.errors).not.to.exist;
//   });

//   it('should call listAdditionalRecipientReceivables successfully', async function () {
//     const now = new Date();
//     const response = await this.api.listAdditionalRecipientReceivables(this.locationId, {
//       begin_time: addDays(now, -30),
//       end_time: now,
//       sort_order: 'DESC'
//     }).catch(handleUnexpectedError);

//     expect(response.errors).not.to.exist;
//   });
// });

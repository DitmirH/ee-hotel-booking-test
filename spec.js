const chakram = require('chakram'),
	expect = chakram.expect;

describe('Chakram', function() {
	it('should post a valid request successfully', function() {
		let request = chakram.post('http://hotel-test.equalexperts.io/booking/', {
			firstname: 'di',
			lastname: 'tester',
			totalprice: 120,
			depositpaid: false,
			bookingdates: {
				checkin: '2019-09-20',
				checkout: '2019-09-22',
			},
		});
		return expect(request).to.have.status(200);
	});

	it('should error if price not set', function() {
		let request = chakram.post('http://hotel-test.equalexperts.io/booking/', {
			firstname: 'di',
			lastname: 'tester',
			totalprice: null,
			depositpaid: false,
			bookingdates: {
				checkin: '2019-09-20',
				checkout: '2019-09-22',
			},
		});
		return (
			expect(request).to.have.status(500),
			expect(request).to.have.json('Internal Server Error')
		);
	});

	it('should delete a request ', function() {
		let request = chakram.delete('http://hotel-test.equalexperts.io/booking/177607', {
			headers: {
				authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM=',
			},
		});
		return expect(request).to.have.status('201');
	});
});

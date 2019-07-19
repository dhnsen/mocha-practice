const assert = require('assert');
const requestTime = require('../requestTime');


describe('Testing requestTime middleware', function(){
    it('Should add a timestamp `requestTime` prop to req', function(){
        const req = {};
        requestTime(req, null, () => {});

        assert.ok(req.requestTime > 0);
    });
});
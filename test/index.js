var expect = require('chai').expect;
var is = require('../lib/is/index');

describe('is micro-checking library', function() {
  describe('is.arguments', function () {
    it('should return true if passed parameter type is arguments', function () {
      var getArguments = function () {
          return arguments;
      };
      var arguments = getArguments('test');
      expect(is.arguments(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not arguments", function () {
      var notArguments = ['test'];
      expect(is.arguments(notArguments)).to.be.false;
    });
  });
  describe('is.array', function() {
	it('should return true if passed argument type is Array', function() {
		expect(is.array(['value1', 'value2'])).to.be.true;
	});
	it('should return false if passed argument type is not Array', function() {
		expect(is.array('Yoyoyo')).to.be.false;
	});
	});
	describe('is.boolean', function() {
	it('should return true if passed argument type is Boolean', function() {
		expect(is.boolean(true)).to.be.true;
		expect(is.boolean(false)).to.be.true;
	});
	it('should return false if passed argument type is not Boolean', function() {
		expect(is.boolean('Yoyoyo')).to.be.false;
	});
	});
	
	describe('is.date', function() {
	it('should return true if passed argument type is Date', function() {
		expect(is.date(new Date())).to.be.true;
		expect(is.date(new Date(2001-03-04))).to.be.true;
	});
	it('should return false if passed argument type is not Date', function() {
		expect(is.date('Yoyoyo')).to.be.false;
	});
	});
	
	describe('is.error', function() {
	it('should return true if passed argument type is Error', function() {
		expect(is.error(new Error())).to.be.true;
	});
	it('should return false if passed argument type is not Error', function() {
		expect(is.error('Yoyoyo')).to.be.false;
	});
	});
	
	describe('is.function', function() {
	it('should return true if passed argument type is Function', function() {
		expect(is.function(new Function())).to.be.true;
	});
	it('should return false if passed argument type is not Function', function() {
		expect(is.function('Yoyoyo')).to.be.false;
	});
	});
	
	describe('is.nan', function() {
	it('should return true if passed argument type is NaN', function() {
		expect(is.nan(0/0)).to.be.true;
		expect(is.nan(Number('1.2geoff'))).to.be.true;
	});
	it('should return false if passed argument type is not NaN', function() {
		expect(is.nan('Yoyoyo')).to.be.false;
	});
	});
	
	describe('is.null', function() {
	it('should return true if passed argument type is Null', function() {
		expect(is.null(null)).to.be.true;
	});
	it('should return false if passed argument type is not Null', function() {
		expect(is.null('Yoyoyo')).to.be.false;
	});
	});
	
	describe('is.number', function() {
	it('should return true if passed argument type is Number', function() {
		expect(is.number(0)).to.be.true;
	});
	it('should return false if passed argument type is not Number', function() {
		expect(is.number('Yoyoyo')).to.be.false;
		expect(is.number(null)).to.be.false;
	});
	});
	
	describe('is.object', function() {
	it('should return true if passed argument type is Object', function() {
		/*expect(is.object(0)).to.be.true;
		expect(is.object('Je suis un objet')).to.be.true;
		expect(is.object(new Function())).to.be.true;*/
		expect(is.object(new Object())).to.be.true;
	});
	it('should return false if passed argument type is not Object', function() {
		expect(is.object(null)).to.be.false;
		expect(is.object(0/0)).to.be.false;
	});
	});
	
	/*describe('is.json', function() {
	it('should return true if passed argument type is JSon', function() {
		expect(is.json(new json())).to.be.true;
	});
	it('should return false if passed argument type is not JSon', function() {
		expect(is.number('Yoyoyo')).to.be.false;
	});
	});*/
	
	describe('is.string', function() {
	it('should return true if passed argument type is String', function() {
		expect(is.string('Yoyo je suis un string !')).to.be.true;
	});
	it('should return false if passed argument type is not String', function() {
		expect(is.string(0)).to.be.false;
	});
	});
	
	describe('is.char', function() {
	it('should return true if passed argument type is Char', function() {
		expect(is.char('a')).to.be.true;
	});
	it('should return false if passed argument type is not Char', function() {
		expect(is.char('aa')).to.be.false;
	});
	});
	
	describe('is.undefined', function() {
	it('should return true if passed argument type is Undefined', function() {
		expect(is.undefined(undefined)).to.be.true;
	});
	it('should return false if passed argument type is not Undefined', function() {
		expect(is.undefined('Je ne suis pas undefined')).to.be.false;
		expect(is.undefined(19)).to.be.false;
	});
	});
	
	describe('is.empty', function() {
	it('should return true if passed argument type is Empty', function() {
		expect(is.empty(new Object())).to.be.true;
		expect(is.empty(new Array())).to.be.true;
	});
	it('should return false if passed argument type is not Empty', function() {
		expect(is.empty('Je ne suis pas empty')).to.be.false;
		expect(is.empty(0)).to.be.false;
		
	});
	});
});



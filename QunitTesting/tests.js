//module('module 1');
//
//test('My First Test', function(){
//        ok(true);
//        });
//
//module('module 2', {
//        setup: function(){
//                
//        },
//        teardown: function(){
//                
//        }
//        });
//
//test('My Second Test', function(){
//        ok(true);
//        });
//test('DOM Test', function(){
//        strictEqual($("#mytestdiv").length, 1);
//        strictEqual($("#mytestdiv").text(), 'some content');
//        });
//module('DOM Tests', {
//        setup: function(){
//            $("body").append("<div id='div1'>some text</div>");    
//        },
//        teardown: function(){
//           $("#div1").remove();     
//        }
//        });
//
//test('DOM Test 1', function(){
//        strictEqual(SUT.ReadDiv(), 'some text');
//        });
//
//module('DOM Tests 2', {
//        setup: function(){
//            $("body").append("<div id='div1'>some text</div>");    
//        },
//        teardown: function(){
//           $("#div1").remove();      
//        }
//        });
//
//test('DOM Test 2', function(){
//        strictEqual(SUT.ReadDiv(), 'some text');
//        });
//module('DOM Tests', {
//	setup: function() {},
//	teardown: function() {}
//});
//
//test('CreatTodoItem creates 1 item', function(){
//        SUT.createTodoItem();
//        strictEqual($(".js-todoContainer").length, 1);
//        });
//module('Team City tests', {
//        setup: function(){
//                
//        },
//        teardown: function(){
//                
//        }
//        });
//
//test('Passing Test', function(){
//        SUT.doSomething();
//        strictEqual(1, 1);
//        });
//test('Failing Test', function(){
//        SUT.doSomething();
//        strictEqual(2, 2);        
//        });
//module('Asynchronous Tests');
//
//test('broken asynchronous timing test', function() {
//	stop();
//	stop();
//	setTimeout(function() {
//		ok(true);
//		start();
//	}, 100);
//});
//test('broken asynchronous timing test 2', function() {
//	stop();
//	setTimeout(function() {
//		ok(true);
//		console.log("longer timeout finished");
//		start();
//	}, 200);
//	setTimeout(function() {
//		ok(true);
//		start();
//	}, 100);
//});
//
//asyncTest('broken asynchronous timing test 3', function() {
//	setTimeout(function() {
//		ok(true);
//		start();
//	}, 100);
//});
//asyncTest('UI asynchronous timing test', function() {
//	SUT.fadeOutDiv(500);
//	setTimeout(function() {
//		ok(true);
//		start();
//	}, 100);
//});
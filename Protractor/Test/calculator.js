
let homePage=require('../Pages/homePage')
describe("Google Test",function(){
   
     it("search Test",function(){
        //browser.get();
        homePage.get('https://juliemr.github.io/protractor-demo/');
        //element(by.model('first')).sendKeys('2');
        homePage.enterfirstNumber('2');
        //element(by.model('second')).sendKeys('4');
        homePage.entersecondNumber('4');
       // element(by.css('[ng-click="doAddition()"]')).click();
       homePage.clicGo();

       /* let result=element(by.cssContainingText('.ng-binding','6'));
        expect(result.getText()).toEqual('6');*/
        homePage.verifyResult('6');
        
        browser.sleep(5000);

     });

     it("search Test",function(){
      //browser.get();
      homePage.get('https://juliemr.github.io/protractor-demo/');
      //element(by.model('first')).sendKeys('2');
      homePage.enterfirstNumber('2');
      //element(by.model('second')).sendKeys('4');
      homePage.entersecondNumber('4');
     // element(by.css('[ng-click="doAddition()"]')).click();
     homePage.clicGo1();

     /* let result=element(by.cssContainingText('.ng-binding','6'));
      expect(result.getText()).toEqual('6');*/
      homePage.verifyResult('6');
      
      browser.sleep(5000);

   });

     
});
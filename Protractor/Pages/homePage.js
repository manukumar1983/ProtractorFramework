var homePage = function () {
    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
     let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function (url) {
        browser.get(url);
    }
    this.enterfirstNumber = function (firstNo) {
        firstNumber_input.sendKeys(firstNo);
    };

    this.entersecondNumber = function (secondNo) {
        secondNumber_input.sendKeys(secondNo)
    };
    this.clicGo = function () {
        goButton.click();
    }; this.verifyResult = function (result) {
        let output = element(by.css)
    }

    this.verifyResult = function (result) {
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    };

};

module.exports = new homePage();
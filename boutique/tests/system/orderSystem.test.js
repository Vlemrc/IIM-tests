const { Builder, By, until } = require('selenium-webdriver');

let driver;

beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
});

afterAll(async () => {
    await driver.quit();
});

test('should complete the order process', async () => {
    await driver.get('http://localhost:3000/memberRegistration.html');
    await driver.findElement(By.id('lastName')).sendKeys('Doe');
    await driver.findElement(By.id('firstName')).sendKeys('John');
    await driver.findElement(By.id('email')).sendKeys('john.doe@example.com');
    await driver.findElement(By.id('password')).sendKeys('password123');
    await driver.findElement(By.tagName('button')).click();
    await driver.wait(until.titleIs('Expected Title After Registration'), 1000);

    await driver.get('http://localhost:3000/productSelection.html');
    await driver.findElement(By.id('headwear')).sendKeys('Chapeau');
    await driver.findElement(By.id('tops')).sendKeys('T-shirt');
    await driver.findElement(By.id('bottoms')).sendKeys('Pantalon');
    await driver.findElement(By.id('shoes')).sendKeys('Baskets');
    await driver.findElement(By.tagName('button')).click();
    await driver.wait(until.titleIs('Expected Title After Product Selection'), 1000);

    await driver.get('http://localhost:3000/orderReview.html');
    await driver.findElement(By.id('confirmOrder')).click();
    await driver.wait(until.titleIs('Expected Title After Order Confirmation'), 1000);
});

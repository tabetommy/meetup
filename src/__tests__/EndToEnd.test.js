import puppeteer from 'puppeteer';
import mockData from '../mock-data';

describe('show/hide an event details', () => {
  jest.setTimeout(30000);
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .eventDetails');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .expandDetailsBtn');
    const eventDetails = await page.$('.event .eventDetails');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .collapseDetailsBtn');
    const eventDetails = await page.$('.event .eventDetails');
    expect(eventDetails).toBeNull();
  });

});


describe('filter events by city', () => {
    jest.setTimeout(50000);
    let browser;
    let page;
    beforeAll(async () => {
      browser = await puppeteer.launch();
      page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.event');
    });
  
    afterAll(() => {
      browser.close();
    });
  
    test('When user has not searched for a city, show upcoming events from all cities', async () => {
        const allEvents = (await page.$$('.event')).length;
        expect(allEvents).toBe(mockData.length);
    });
  

    test('User should see a list of suggestions when they search for a city', async () => {
      await page.type('.city', 'Berlin', {delay: 100})
      const suggestions = await page.$$('.suggestions li');
      expect(suggestions).toHaveLength(2)
    });

    test('User can select a city from the suggested list', async () => {
        await page.waitForSelector('.city');
        await page.click('.suggestions li');
        let CityInputValue = await page.$eval('.city', el => el.value);
        expect(CityInputValue).toBe('Berlin, Germany')
      });
    
  });
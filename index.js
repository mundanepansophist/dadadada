var puppeteer = new require('puppeteer');
var fs = require('fs');

var ids;

const id = ['2014A1PS356H', '2014A1PS356HB.jpg', '2014A4PS456HB.jpg'];

const url = 'http://placement.bits-pilani.ac.in/Pictures/';

async function screen(result, index) {
    const browser = await puppeteer.launch();
    console.log('doing');
    const page = await browser.newPage();
    await page.setViewport({
        width: 400,
        height: 400
    });
    await page.goto(result + index + 'B.jpg');
    const path = await 'screenshots/' + index + '.png';
    console.log(page.title());
    await page.screenshot({
        path
    });
    browser.close();
}

fs.readFile('./txt2.txt', "utf8", function (err, data) {
    if (err) {
        console.log(err);
    }
    ids = data.split("\n");
    console.log(ids);
    ids.forEach(function (element) {
        console.log(url + element);
        screen(url, element);
    })
})
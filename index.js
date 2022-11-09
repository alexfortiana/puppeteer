import puppeteer from "puppeteer";


(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: "~/projects/test-puppeteer/myChromeSession",
  });
  const page = await browser.newPage();
  await page.goto("https://rrhh.tramitapp.com/");

  const buttonClasses =
    "button.tw-bg-state-green.tw-h-72.tw-w-72.tw-rounded-full";
  await page.waitForSelector(buttonClasses);
  await page.click(buttonClasses);

  const playClasses =
    "button.tw-pb-8.btn.btn-block.btn-lg.btn-success.waves-effect.waves-light";
  await page.waitForSelector(playClasses);
  await page.click(playClasses);
  await browser.close();
})();


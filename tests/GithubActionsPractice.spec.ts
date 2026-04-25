import { test, expect } from '@playwright/test';

test("Practice Test1", async ({ page }) => {
    console.log("starting the test 1");
    await page.goto("https://www.saucedemo.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Swag Labs");
    console.log("test 1 completed");
});

test("Practice Test2", async ({ page }) => {
    console.log("starting the test 2");
    await page.goto("https://www.saucedemo.com");
    console.log(await page.title());                        
    await expect(page).toHaveTitle("Swag Labs");
    console.log("test 2 completed");
});

test("Practice Test3", async ({ page }) => {
    console.log("starting the test 2");
    await page.goto("https://www.saucedemo.com");
    console.log(await page.title());                        
    await expect(page).toHaveTitle("Swag Labs wrong title");
    console.log("test 3 completed");
});

test.describe("Practice of Describe", async () => {
    test("Practice Test4", async ({ page, browserName }) => {
        console.log("starting the test 4");
        await page.goto("https://www.saucedemo.com");
        console.log(await page.title());                        
        await expect(page).toHaveTitle("Swag Labs");
        console.log("test 4 completed");
    });


    test("Practice Test5", async ({ page, browserName }) => {
        console.log("starting the test 5");
        console.log(browserName);
        await page.goto("https://www.saucedemo.com");
        console.log(await page.title());                        
        await expect(page).toHaveTitle("Swag Labs");
        console.log("test 5 completed");
    });

    test("Practice Test6", async ({ page }) => {
        console.log("starting the test 6");
        await page.goto("https://www.saucedemo.com");
        console.log(await page.title());                        
        await expect(page).toHaveTitle("Swag Labs");
        console.log("test 6 completed");
    });
});

test("Practice Test7", async ({ page }) => {
    console.log("starting the test 7");
    await page.goto("https://www.saucedemo.com");
    console.log(await page.title());                        
    await expect(page).toHaveTitle("Swag Labs");
    console.log("Ending test 7 completed");
});
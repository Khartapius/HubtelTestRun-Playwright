import { test, expect} from '@playwright/test';


//Request Money Testing
test('has title', async({page}) => {
    await page.goto('https://hubtel.com/');

    //Click the request money from anyone.
    await page.getByRole('link', { name:'Request Money from Anyone'}).click();

    // Expect page to have title.
    await expect(page).toHaveTitle(/Request Money From Anyone - Hubtel/);
});

test('has footer', async({page}) => {
    await page.goto('https://hubtel.com/');

    //Click the request money from anyone.
    await page.getByRole('link', { name:'Request Money from Anyone'}).click();

    //Expect page to have footer.
    await expect(page.getByRole('heading', {name:'©2005 - 2023 Hubtel'})).toBeVisible();
});



//Charge Customers In-Store testing.
test('has title', async({page}) => {
    await page.goto('https://hubtel.com/');

    //Click the charge customers in store link.
    await page.getByRole('link', { name:'Charge Customers In-Store'}).click();

    // Expect page to have title.
    await expect(page).toHaveTitle(/Charge Customers In-store - Hubtel/);
});

test('has footer', async({page}) => {
    await page.goto('https://hubtel.com/');

    //Click the charge cutomers in store link.
    await page.getByRole('link', { name:'Charge Customers In-Store'}).click();

    //Expect page to have footer.
    await expect(page.getByRole('heading', {name:'©2005 - 2023 Hubtel'})).toBeVisible();
});



    //Integrate online checkout testing.
test('has title', async({page}) => {
    await page.goto('https://hubtel.com/');

    //Click the Integrate online checkout link.
    await page.getByRole('link', { name:'Integrate Online Checkout'}).click();

    // Expect page to have title.
    await expect(page).toHaveTitle(/Integrate Online Checkout - Hubtel/);
});

test('has footer', async({page}) => {
    await page.goto('https://hubtel.com/');

    //Click the Integrate online checkout link.
    await page.getByRole('link', { name:'Integrate Online Checkout'}).click();

    //Expect page to have footer.
    await expect(page.getByRole('heading', {name:'©2005 - 2023 Hubtel'})).toBeVisible();
});



    //RaiseUp for Schools testing.
test('has title', async({page}) => {
    await page.goto('https://hubtel.com/');

    //Click the RaiseUp for Schools link.
    await page.getByRole('link', { name:'RaiseUp for Schools'}).click();

    // Expect page to have title.
    await expect(page).toHaveTitle(/RaiseUp for Schools - Hubtel/);
});

test('has footer', async({page}) => {
    await page.goto('https://hubtel.com/');

    //Click the RaiseUp for schools link.
    await page.getByRole('link', { name:'RaiseUp for Schools'}).click();

    //Expect page to have footer.
    await expect(page.getByRole('heading', {name:'©2005 - 2023 Hubtel'})).toBeVisible();
});



    //Hubtel for hospitals testing.
test('has title', async({page}) => {
    await page.goto('https://hubtel.com/');

    //Click the hubtel for hospitals link.
    await page.getByRole('link', { name:'Hubtel for Hospitals'}).click();

    // Expect page to have title.
    await expect(page).toHaveTitle(/Hubtel for Hospitals/);
});

test('has footer', async({page}) => {
    await page.goto('https://hubtel.com/');

    //Click the hubtel for hospitals link.
    await page.getByRole('link', { name:'Hubtel for Hospitals'}).click();

    //Expect page to have footer.
    await expect(page.getByRole('heading', {name:'©2005 - 2023 Hubtel'})).toBeVisible();
});



    //Hubtel for governments testing.
test('has title', async({page}) => {
    await page.goto('https://hubtel.com/');
    
    //Click the hubtel for government link.
    await page.getByRole('link', { name:'Hubtel for Government'}).click();
    
    // Expect page to have title.
    await expect(page).toHaveTitle(/Hubtel for Government/);
});
    
test('has footer', async({page}) => {
    await page.goto('https://hubtel.com/');
    
    //Click the hubtel for government link.
    await page.getByRole('link', { name:'Hubtel for Government'}).click();
    
    //Expect page to have footer.
    await expect(page.getByRole('heading', {name:'©2005 - 2023 Hubtel'})).toBeVisible();
});
    


    //Send SMS testing.
test('has title', async({page}) => {
    await page.goto('https://hubtel.com/');
    
    //Click the send SMS link.
    await page.getByRole('link', { name:'Send SMS'}).click();
    
    // Expect page to have title.
    await expect(page).toHaveTitle(/Bulk SMS - Hubtel/);
});
    
test('has footer', async({page}) => {
    await page.goto('https://hubtel.com/');
    
    //Click the send SMS link.
    await page.getByRole('link', { name:'Send SMS'}).click();
    
    //Expect page to have footer.
    await expect(page.getByRole('heading', {name:'©2005 - 2023 Hubtel'})).toBeVisible();
});



    //Service providers testing.
test('has title', async({page}) => {
    await page.goto('https://hubtel.com/');
    
    //Click the services providers link.
    await page.getByRole('link', { name:'Service Providers'}).click();
    
    // Expect page to have title.
    await expect(page).toHaveTitle(/Connect your service to Hubtel/);
});
    
test('has footer', async({page}) => {
    await page.goto('https://hubtel.com/');
    
    //Click the service providers link.
    await page.getByRole('link', { name:'Service Providers'}).click();
    
    //Expect page to have footer.
    await expect(page.getByRole('heading', {name:'©2005 - 2023 Hubtel'})).toBeVisible();
});



    //Shops testing.
test('has title', async({page}) => {
    await page.goto('https://hubtel.com/');
        
    //Click the shops link.
    await page.getByRole('link', { name:'Shops'}).click();
        
    // Expect page to have title.
    await expect(page).toHaveTitle(/Become a shop partner | Increase sales - Hubtel/);
});
        
    test('has footer', async({page}) => {
    await page.goto('https://hubtel.com/');
        
    //Click the shops link.
    await page.getByRole('link', { name:'Shops'}).click();
        
    //Expect page to have footer.
    await expect(page.getByRole('heading', {name:'©2005 - 2023 Hubtel'})).toBeVisible();
});
    


//Riders testing.
test('has title', async({page}) => {
    await page.goto('https://hubtel.com/');
        
    //Click the riders link.
    await page.getByRole('link', { name:'Riders'}).click();
        
    // Expect page to have title.
    await expect(page).toHaveTitle(/Beome a rider | Ride with Hubtel/);
});
        
    test('has footer', async({page}) => {
    await page.goto('https://hubtel.com/');
        
    //Click the Riders link.
    await page.getByRole('link', { name:'Riders'}).click();
        
    //Expect page to have footer.
    await expect(page.getByRole('heading', {name:'©2005 - 2023 Hubtel'})).toBeVisible();
});



    //Restaurants testing.
test('has title', async({page}) => {
    await page.goto('https://hubtel.com/');
        
    //Click the restaurants link.
    await page.getByRole('link', { name:'Restaurants'}).click();
        
    // Expect page to have title.
    await expect(page).toHaveTitle(/Become a restaurant partner | Grow your business - Hubtel/);
});
        
    test('has footer', async({page}) => {
    await page.goto('https://hubtel.com/');
        
    //Click the restaurants link.
    await page.getByRole('link', { name:'Restaurants'}).click();
        
    //Expect page to have footer.
    await expect(page.getByRole('heading', {name:'©2005 - 2023 Hubtel'})).toBeVisible();
});
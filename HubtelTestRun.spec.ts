import { test, expect} from '@playwright/test';


//Request Money Testing
test('has title', async({page}) => {
    await page.goto('https://hubtel.com/');

    //Click the request money from anyone.
    page.getByRole('link', { name: 'Request Money from Anyone' });

    // Expect page to have title.
    const title = await page.$('title');
    const titleTag = await title?.textContent();
    expect(titleTag).toContain('Hubtel - Find and pay for everyday essentials');

     //Expect page to have footer.
     const footer = await page.$('footer');
     const footerText = await footer?.textContent();
 
     expect(footerText).toContain('©2005 - 2023 Hubtel');
});





//Charge Customers In-Store testing.
test('title', async({page}) => {
    await page.goto('https://hubtel.com/');

    //Click the charge customers in store link.
    await page.getByRole('link', { name:'Charge Customers In-Store'}).click();

    // Expect page to have title.
    await expect(page).toHaveTitle(/Charge Customers In-store - Hubtel/);

     //Expect page to have footer.
     const footer = await page.$('footer');
     const footerText = await footer?.textContent();
 
     expect(footerText).toContain('©2005 - 2023 Hubtel');
});



    //Integrate online checkout testing.
test('1 has title', async({page}) => {
    await page.goto('https://hubtel.com/');

    //Click the Integrate online checkout link.
    await page.getByRole('link', { name:'Integrate Online Checkout'}).click();

    // Expect page to have title.
    await expect(page).toHaveTitle(/Integrate Online Checkout - Hubtel/);

     //Expect page to have footer.
     const footer = await page.$('footer');
     const footerText = await footer?.textContent();
 
     expect(footerText).toContain('©2005 - 2023 Hubtel');
});



    //RaiseUp for Schools testing.
test('2 has title', async({page}) => {
    await page.goto('https://hubtel.com/');

    //Click the RaiseUp for Schools link.
    await page.getByRole('link', { name:'RaiseUp for Schools'}).click();

    // Expect page to have title.
    await expect(page).toHaveTitle(/RaiseUp for Schools - Hubtel/);

     //Expect page to have footer.
     const footer = await page.$('footer');
     const footerText = await footer?.textContent();
 
     expect(footerText).toContain('©2005 - 2023 Hubtel');
})



    //Hubtel for hospitals testing.
test('3 has title', async({page}) => {
    await page.goto('https://hubtel.com/');

    //Click the hubtel for hospitals link.
    await page.getByRole('link', { name:'Hubtel for Hospitals'}).click();

    // Expect page to have title.
    await expect(page).toHaveTitle(/Hubtel for Hospitals/);

     //Expect page to have footer.
     const footer = await page.$('footer');
     const footerText = await footer?.textContent();
 
     expect(footerText).toContain('©2005 - 2023 Hubtel');
});



    //Hubtel for governments testing.
test('4 has title', async({page}) => {
    await page.goto('https://hubtel.com/');
    
    //Click the hubtel for government link.
    await page.getByRole('link', { name:'Hubtel for Government'}).click();
    
    // Expect page to have title.
    await expect(page).toHaveTitle(/Hubtel for Government/);

     //Expect page to have footer.
     const footer = await page.$('footer');
     const footerText = await footer?.textContent();
 
     expect(footerText).toContain('©2005 - 2023 Hubtel');
});    


    //Send SMS testing.
test('5 has title', async({page}) => {
    await page.goto('https://hubtel.com/');
    
    //Click the send SMS link.
    await page.getByRole('link', { name:'Send SMS'}).click();
    
    // Expect page to have title.
    await expect(page).toHaveTitle(/Bulk SMS - Hubtel/);

     //Expect page to have footer.
     const footer = await page.$('footer');
     const footerText = await footer?.textContent();
 
     expect(footerText).toContain('©2005 - 2023 Hubtel');
})



    //Service providers testing.
test('6 has title', async({page}) => {
    await page.goto('https://hubtel.com/');
    
    //Click the services providers link.
    await page.getByRole('link', { name:'Service Providers'}).click();
    
    // Expect page to have title.
    await expect(page).toHaveTitle(/Connect your service to Hubtel/);

     //Expect page to have footer.
     const footer = await page.$('footer');
     const footerText = await footer?.textContent();
 
     expect(footerText).toContain('©2005 - 2023 Hubtel');
});



    //Shops testing.
test('7 has title', async({page}) => {
    await page.goto('https://hubtel.com/');
        
    //Click the shops link.
    await page.getByRole('link', { name:'Shops'}).click();
        
    // Expect page to have title.
    await expect(page).toHaveTitle(/Become a shop partner | Increase sales - Hubtel/);

     //Expect page to have footer.
     const footer = await page.$('footer');
     const footerText = await footer?.textContent();
 
     expect(footerText).toContain('©2005 - 2023 Hubtel');
});
    


//Riders testing.
test('8 has title', async({page}) => {
    await page.goto('https://hubtel.com/');
        
    //Click the riders link.
    await page.getByRole('link', { name:'Riders'}).click();
        
    // Expect page to have title.
    await expect(page).toHaveTitle(/Beome a rider | Ride with Hubtel/);

     //Expect page to have footer.
     const footer = await page.$('footer');
     const footerText = await footer?.textContent();
 
     expect(footerText).toContain('©2005 - 2023 Hubtel');
});



    //Restaurants testing.
test('9 has title', async({page}) => {
    await page.goto('https://hubtel.com/');
        
    //Click the restaurants link.
    await page.getByRole('link', { name:'Restaurants'}).click();
        
    // Expect page to have title.
    await expect(page).toHaveTitle(/Become a restaurant partner | Grow your business - Hubtel/);

     //Expect page to have footer.
     const footer = await page.$('footer');
     const footerText = await footer?.textContent();
 
     expect(footerText).toContain('©2005 - 2023 Hubtel');
});
        
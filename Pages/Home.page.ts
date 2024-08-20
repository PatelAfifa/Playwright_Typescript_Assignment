//home.page.ts
import { expect, Locator,  } from '@playwright/test';
const testdata=require("../tests/testData.json")
import{SavedArtWork} from '../Pages/SavedArtWork'
import { Page } from 'playwright'; // Import the necessary Playwright types

export class ArtworkHomePage {
saveArt = new SavedArtWork();
private  myArtName : string;
private page: Page;
readonly loginButton: Locator;  
readonly userName: Locator;
readonly password:Locator;
readonly submit:Locator;

//Create New Artwork
readonly newArtWork:Locator;
readonly addArtWork:Locator;
readonly artName:Locator;
readonly editionType:Locator;
readonly edition:Locator;
readonly description:Locator;
readonly currentPrice:Locator;
readonly currentCurrency:Locator;
readonly primaryPrice:Locator;
readonly primaryCurrency:Locator;
readonly dateAtPrimarySale:Locator;
readonly chooseDate:Locator;
readonly dummy:Locator;
readonly uploadImage:Locator;
readonly styleOfArtWork:Locator;
readonly nftGenensis:Locator;
readonly supply:Locator;
readonly collabator:Locator;
readonly ownedBy:Locator;
readonly theMarketPlaceMinted:Locator;
readonly mintedOn:Locator;
readonly createdDate:Locator;
readonly copyRight:Locator;
readonly artistLoyality:Locator;
readonly physicalPiece:Locator;
readonly publish:Locator;
readonly style:Locator;
readonly genensis:Locator;
readonly supplyValue:Locator;
readonly collabatorValue:Locator;
readonly ownedByValue:Locator;
readonly marketplaceSelect:Locator;
readonly mintedDate:Locator;
readonly selectCreatedDate:Locator;
readonly copyRightOption:Locator;
readonly artistLoyalityOption:Locator;

//Artwork Published 
readonly publishedProject:Locator;

//Open Published Project and add review and submit
readonly openMyArt:Locator;
readonly loadState:Locator;
readonly Review:Locator;
readonly reviewTitle:Locator;
readonly reviewDetail:Locator;
readonly reviewSubmit:Locator;
readonly searchArt:Locator;
readonly searchpublishedArt:Locator;
readonly publishedArtWork:Locator;
readonly SerachNewArt:any;


constructor(page: Page) {
this.page = page;

//Login Locators
this.loginButton = page.locator('xpath=//a[contains(text(),"Login")]');
this.userName = page.locator("xpath=//input[@id='email']");
this.password = page.locator("xpath=//input[@id='password']");
this.submit =  page.locator('xpath=//button[@type="submit"]');

//Create New Artwork Locators
this.newArtWork =page.locator('xpath=//a[@class="flex items-center sm:mb-4 lg:mb-0 py-2 lg:py-0"]//span[@id="artworks"]');
this.addArtWork=page.locator('xpath=//a[contains(text(),"Add Artwork")]');
this.artName=page.locator('xpath=//input[@id="artwork_name"]');
this.editionType=page.locator("//span[contains(text(),'Select Edition Type')]");
this.edition=page.locator("//span[contains(text(),'Limited Edition')]");
this.description=page.locator("//div[@class='ce-paragraph cdx-block']");
this.currentPrice=page.locator('#current_price');
this.currentCurrency=page.locator('.css-1stb430-indicatorContainer > svg');
this.primaryCurrency=page.getByText('USD');
this.primaryPrice=page.locator('#primary_sale_price');
this.dateAtPrimarySale=page.getByRole('button', { name: 'Choose Date' });
this.chooseDate=page.getByRole('gridcell', { name: '20' });
this.dummy=page.locator('.my-6 > div > div > .relative');
this.uploadImage=page.locator('input[type="file"]');
this.styleOfArtWork=page.locator('.undefined > .css-1aagls8-control > .css-hlgwow > .css-19bb58m');
this.style=page.getByRole('option', { name: 'Abstract'},).locator('label');
this.nftGenensis=page.locator('form div').filter({ hasText: 'NFT Genesis *Select NFT' }).locator('svg');
this.genensis=page.getByRole('option', { name: '2020' }).locator('span');
this.supply=page.locator('.undefined > .css-1aagls8-control > .css-hlgwow > .css-19bb58m');
this.supplyValue=page.getByRole('option', { name: '- 24 /year' }).locator('label');
this.collabator=page.locator('div:nth-child(12) > .mt-6 > .css-1aagls8-control > .css-hlgwow > .css-19bb58m');
this.collabatorValue=page.locator('#react-select-7-input');
this.ownedBy=page.locator('.mt-6 > div > div > .relative');
this.ownedByValue=page.locator('[id="headlessui-combobox-input-\\:r6\\:"]');
this.theMarketPlaceMinted=page.getByRole('button', { name: 'Select Marketplace' });
this.marketplaceSelect=page.getByRole('option', { name: 'Foundation' });
this.mintedOn=page.getByRole('button', { name: 'Choose Date' });
this.mintedDate=page.getByRole('gridcell', { name: '27' });
this.createdDate=page.locator('div').filter({ hasText: /^Created On \*Choose Date$/ }).getByRole('button');;
this.selectCreatedDate=page.getByRole('gridcell', { name: '26' });
this.copyRight=page.getByRole('button', { name: 'Select copyright' });
this.copyRightOption=page.getByRole('option', { name: 'COPY RIGHT 1 Lorem ipsum' });
this.artistLoyality=page.locator('xpath=//input[@name="artist_loyalty" and @type="radio" and @value="1"]');
this.artistLoyalityOption=page.getByText('Yes');
this.physicalPiece=page.locator('div').filter({ hasText: /^Is there a physical pieceYesNo$/ }).getByLabel('Yes');
this.publish=page.locator('xpath=//button[text()="Publish"]');

//Published Art locator
this.publishedProject=page.getByRole('banner').getByRole('img').nth(1);
this.searchpublishedArt=page.locator('#searchbox');
this.publishedArtWork=page.locator('//div[@class="flex items-center gap-3 hover:bg-dark-50 rounded-md p-1 hover:cursor-pointer"]');

//Add Review Locators
this.openMyArt=page.getByRole('banner').getByRole('img').nth(1);
this.searchArt=page.locator('#searchbox');
this.publishedArtWork=page.locator('//div[@class="flex items-center gap-3 hover:bg-dark-50 rounded-md p-1 hover:cursor-pointer"]');
this.Review=page.locator('xpath=//button[text()="Reviews"]');
this.reviewTitle=page.getByPlaceholder('Title');
this.reviewDetail=page.getByPlaceholder('Review Detail');
this.reviewSubmit=page.locator('//div[@class="flex justify-between"]/button[@type="submit"]');

}

generateRandomNumber(): number {
    return Math.floor(Math.random() * 900) + 100;
}
generateRandomArtName(): string {
    const constantString = 'OurNewArt#';
    const storedRandomNumber = this.generateRandomNumber();
    return constantString + storedRandomNumber;
}



//Website URL                  
async goto(){
await this.page.goto(testdata.url);
}

//Login to Website

async login(){
await this.loginButton.waitFor({state:"visible"});
await this.loginButton.click();
await this.userName.waitFor({state:"visible"});
await this.userName.click();
await this.userName.fill(testdata.username);
await this.password.click();
await this.password.fill(testdata.Password);
await this.submit.click()
await this.page.waitForTimeout(8000);
}
//Create New Artwork
async newArt(){
    await this.page.setViewportSize({width:1280,height:720});
    console.log(this.myArtName);
    this.myArtName = this.generateRandomArtName()
    console.log(this.myArtName);
    await this.newArtWork.click({ timeout: 80000 });
    await this.page.waitForLoadState();
    await this.addArtWork.isVisible();
    await this.addArtWork.click({ timeout: 80000 });
    await this.artName.isVisible();
    await this.artName.fill(this.myArtName);
    await this.editionType.isVisible();
    await this.editionType.click();
    await this.edition.isVisible()
    await this.edition.click();
    await this.description.isVisible();
    await this.description.fill(testdata.ArtDescription);
    await this.currentPrice.fill('20');
    await this.currentCurrency.first().click();
    await this.primaryCurrency.click();
    await this.primaryPrice.fill('15');
    await this.dateAtPrimarySale.first().click();
    await this.chooseDate.click();
    await this.dummy.first().click();
    await this.dummy.first().click();
    await this.uploadImage.setInputFiles('./myart.jpg');
    await this.styleOfArtWork.first().click();
    await this.style.click();
    await this.nftGenensis.click();
    await this.genensis.click();
    await this.supply.click();
    await this.supplyValue.click();
    await this.theMarketPlaceMinted.click();
    await this.marketplaceSelect.click();
    await this.collabator.click();
    if(this.collabatorValue){
    await this.collabatorValue.fill(testdata.UserID);
    await this.collabatorValue.press('Enter');
    }

    await this.createdDate.click();
    await this.selectCreatedDate.click({ timeout: 80000 });
    await this.copyRight.click();
    await this.copyRightOption.click();
    await this.artistLoyality.click();
    await this.artistLoyalityOption.nth(1).click();
    await this.physicalPiece.check();
    await this.publish.click({ timeout: 80000 });

    this.saveArt.setName(this.myArtName);
    console.log(this.saveArt.getName());


}
//Artwork Published
 async  artworkPublished(){
    await this.page.setViewportSize({width:1280,height:720});
   // await this.page.waitForTimeout(5000);
    await this.publishedProject.waitFor({state:"visible"});
    console.log('artworkopen');
    await this.publishedProject.click({ timeout: 80000 });
    console.log(this.saveArt.getName());
    await this.searchpublishedArt.fill(this.saveArt.getName());
    await this.publishedArtWork.isVisible();
    await this.publishedArtWork.click({ timeout: 80000 });
    await console.log("Your Artwork is published successfully");

}
//Artwork Review
async artworkReview(){
    await this.page.setViewportSize({width:1280,height:720});
    await this.openMyArt.waitFor({state:"visible"});
    await this.openMyArt.click({ timeout: 80000 });
    await this.searchArt.fill(this.saveArt.getName());
    console.log('artworkopen');
    await this.publishedArtWork.click({ timeout: 80000 });
    await this.page.waitForLoadState();
    await this.Review.click({ timeout: 80000 });
    await this.reviewTitle.pressSequentially(testdata.Tiltle,{delay:50});
    await this.reviewDetail.pressSequentially(testdata.Details,{delay:50});
    await this.reviewSubmit.click({ timeout: 80000 });

}


}

// function generateRandomNumber(): number {
//     return Math.floor(Math.random() * 900) + 100;
//     }

    
// const  constantString = 'MyNewArt#'; 
// const  storedRandomNumber = generateRandomNumber();
// const myArtName :string= constantString+storedRandomNumber  ;
    



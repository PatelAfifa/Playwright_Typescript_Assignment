import { test, expect } from '../tests/fixtures'
import { ArtworkHomePage} from '../Pages/Home.page';
import { SavedArtWork} from '../Pages/SavedArtWork';
import { chromium,webkit,firefox } from "playwright";
test.setTimeout(80000);


  test('New ArtWork', async ({ page,homepage }) => {
    
   await homepage.goto();
   await page.waitForLoadState();
   await homepage.login();
   await page.waitForLoadState();
   await page.evaluate("document.body.style.zoom=1.0")
   await homepage.newArt();
    
    });
   

        

           
import { ArtworkHomePage} from '../Pages/Home.page';
import { SavedArtWork} from '../Pages/SavedArtWork';
import { chromium,webkit,firefox } from "playwright";
import { test, expect } from '../tests/fixtures'




 test('Add review for newly created Artwork', async ({ page,homepage }) => {

            await homepage.goto();
            await page.waitForLoadState();
            await homepage.login();
            await page.waitForLoadState();
            await page.evaluate("document.body.style.zoom=1.0")
            await homepage.artworkReview();
            await page.screenshot({ path: 'screenshot3.png', fullPage: true });
            
            });
//import { test, expect,Page,Browser } from '@playwright/test';
import { ArtworkHomePage} from '../Pages/Home.page';
import { SavedArtWork} from '../Pages/SavedArtWork';
import { chromium,webkit,firefox } from "playwright";
import { test, expect } from '../tests/fixtures'






test('ArtWork Published', async ({ page,homepage }) => {
    await homepage.goto();
    await homepage.login();
    await page.waitForTimeout(7000);
    console.log('error');
    page.screenshot({ path: 'error-screenshot.png' })
    await homepage.artworkPublished();
    
    });

// fixtures.ts
import { test as base } from '@playwright/test';
import { ArtworkHomePage } from '../Pages/Home.page'; // Adjust the path


type pageObjects={
  homepage:ArtworkHomePage

}

export const test =base.extend<pageObjects>(
  {
    homepage:async({page},use)=>{
      const homepage=new ArtworkHomePage(page);
      use(homepage)
    },

    

  }
)

export const expect =test.expect

function generateRandomNumber(): number {
  return Math.floor(Math.random() * 900) + 100;
  }

  

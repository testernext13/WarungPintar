const { WaitTask } = require("puppeteer");
const { I, searchingPage } = inject();

//Access a Product via Search
Given('user already open eBay', () => {
  // From "features\Exercise1.feature" {"line":8,"column":1}
  I.amOnPage('https://www.ebay.com/');
  I.wait(3);
});

When('user input macbook  they want to search on the search bar', () => {
  // From "features\Exercise1.feature" {"line":9,"column":1}
  searchingPage.fillSearchingProduct('macbook');
});

When('user click searching', () => {
  // From "features\Exercise1.feature" {"line":10,"column":1}
  searchingPage.clickSearching();
  I.wait(3);
});

When('user see result searching', () => {
  // From "features\Exercise1.feature" {"line":11,"column":1}
  I.see('macbook');
});

When('user selected search category to Books & Magazines', () => {
  // From "features\Exercise1.feature" {"line":12,"column":1}
  searchingPage.selectingCategory('58058');
  I.wait(3);
});

When('user click search', () => {
  // From "features\Exercise1.feature" {"line":13,"column":1}
  searchingPage.clickSearching();
  I.wait(3);
});

Then('user can to be able to see result for Books & Magazines', () => {
  // From "features\Exercise1.feature" {"line":14,"column":1}
  I.see('Books & Magazines');
});
const { WaitTask } = require("puppeteer");
const { I, searchingPage } = inject();

//Access a Product via category after applying multiple filters
Given('user already open eBay', () => {
  // From "features\Exercise1.feature" {"line":9,"column":1}
  I.amOnPage('https://www.ebay.com/');
  I.wait(3);
});

Given('user access electronics category page', () => {
  // From "features\Exercise1.feature" {"line":10,"column":1}
  I.amOnPage('https://www.ebay.com/b/Electronics/bn_7000259124');
  I.wait(2);
});

Given('user navigate to cell phones,smart watches & Accesories page', () => {
  // From "features\Exercise1.feature" {"line":11,"column":1}
  I.amOnPage('https://www.ebay.com/b/Cell-Phones-Smart-Watches-Accessories/15032/bn_1865441');
  I.wait(3);
});

Given('user navigate to cell phones & Smartphones', () => {
  // From "features\Exercise1.feature" {"line":12,"column":1}
  I.amOnPage('https://www.ebay.com/b/Cell-Phones-Smartphones/9355/bn_320094');
  I.wait(3);
});

When('user added filters', () => {
  // From "features\Exercise1.feature" {"line":13,"column":1}
  searchingPage.clickFilters();
  I.wait(3);
});

When('user added filter screen size', () => {
  // From "features\Exercise1.feature" {"line":14,"column":1}
  searchingPage.clickScreenSize();
});

When('user selected screen size 6 in or more', () => {
  // From "features\Exercise1.feature" {"line":15,"column":1}
  searchingPage.chooseScreenSize();
  I.wait(3);
});

When('user added filter price', () => {
  // From "features\Exercise1.feature" {"line":16,"column":1}
  searchingPage.clickPrice();
});

When('user input price 12000000', () => {
  // From "features\Exercise1.feature" {"line":17,"column":1}
  searchingPage.inputPrice();
  I.wait(2);
});

When('user added filter item location', () => {
  // From "features\Exercise1.feature" {"line":18,"column":1}
  searchingPage.clickItemLocation();
});

When('user selected item location Asia', () => {
  // From "features\Exercise1.feature" {"line":19,"column":1}
  searchingPage.chooseItemLocation();
  I.wait(2);
});

When('user click apply on pop-up filters', () => {
  // From "features\Exercise1.feature" {"line":20,"column":1}
  searchingPage.clickApply();
  I.wait(3);
});

Then('user can to be able to see result for 3 filters applied', () => {
  // From "features\Exercise1.feature" {"line":21,"column":1}
  I.see('3 filters applied');
});


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
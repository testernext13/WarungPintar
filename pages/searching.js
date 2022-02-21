const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields:{
    searcBar: {name: '_nkw'},
  },

  searchingButton:{
    searchBtn: {id: 'gh-btn'},
  },

  filtersButton:{
    filtersBtn: {css: 'button.brm__all-filters.fake-link'},
  },


  addScreenSize:{
    screenSizeBtn: {XPath: "//span[normalize-space()='Screen Size']"},
  },


  selectScreenSize:{
    selectSizeBox: {id: 'c5-subPanel-Screen%20Size_6%20in%20or%20More_cbx'},
  },


  price:{
    addPriceBtn: {id: 'c5-mainPanel-price'},
    typeStartPrice: {css: 'input.x-textrange__input.x-textrange__input--from'},
  },

  location:{
    addLocationBtn: {id: 'c5-mainPanel-price'},
    chooseLocation: {css: '#c3-subPanel-location_Asia > label.x-refine__single-select-label > input[name="location"]'},
  },

  applyButton:{
    applyBtn: {css: 'button.x-overlay-footer__apply-btn.btn.btn--primary'},
  },

  optionByValue:{
    categoriesOption: {name: '_sacat'},  
},

  fillSearchingProduct(value){
  I.fillField(this.fields.searcBar, value);
  },

  clickSearching(){
    I.click(this.searchingButton.searchBtn);
    I.wait(3);
  },

  clickFilters(){
    I.click(this.filtersButton.filtersBtn);
  },

  clickScreenSize(){
    I.click(this.addScreenSize.screenSizeBtn);
  },

  chooseScreenSize(){
    I.click(this.selectScreenSize.selectSizeBox);
  },

  clickPrice(){
    I.click(this.price.addPriceBtn);
    I.wait(2);
  },

  inputPrice(){
    I.fillField(this.price.typeStartPrice, value);
  },

  clickItemLocation(){
    I.click(this.location.addLocationBtn);
    I.wait(2);
  },

  chooseItemLocation(){
    I.click(this.location.chooseLocation);
  },

  clickApply(){
    I.click(this.applyButton.applyBtn);
  },

  selectingCategory(value){
    I.selectOption(this.optionByValue.categoriesOption, value);
    I.wait(2);
  }
}
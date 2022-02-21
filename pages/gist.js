const { I } = inject();

module.exports = {

  // insert your locators and methods here

  fields:{
    username: {name: 'login'},
    password: {name: 'password'},
    gistDescription: {name: 'gist[description]'},
    gistFileName: {name: 'gist[contents][][name]'},
    gistNotes: {id: 'code-editor'},
  },

  optionByValue:{
    categoriesGist: {css: 'gist[public]'},  
},

  Button:{
    signInBtn: {name: 'commit'},
    createPublicBtn: {css: 'button.hx_create-pr-button.js-sync-select-menu-button.btn-primary.btn.BtnGroup-item'},
    clickCategoryGist: {css: 'summary.select-menu-button.btn-primary.btn.BtnGroup-item.float-none'},
    clickPublicGist: {XPath: '//form[@id="new_gist"]/div/div[2]/div/details/details-menu/label[2]'},
    clickEditBtn: {css: 'a.btn.btn-sm'},
    clickUpdateGistBtn: {css: 'button.btn-primary.btn'},
    clickDeleteBtn: {css: '.btn-danger.btn-sm.btn'}
  },

  fillUsername(value){
  I.fillField(this.fields.username, value);
  },

  fillPassword(value){
  I.fillField(this.fields.password, value);
  },
  
  fillGistDescription(value){
  I.fillField(this.fields.gistDescription, value);
  },
  

  fillGistFileName(value){
    I.fillField(this.fields.gistFileName, value);
    },

  fillGistNotes(value){
  I.fillField(this.fields.gistNotes, value);
  },
  


  clickSignIn(){
    I.click(this.Button.signInBtn);
    I.wait(10);
  },

  clickCreate(){
    I.click(this.Button.createPublicBtn);
    I.wait(3);
  },

  clickCategory(value){
    I.click(this.Button.clickCategoryGist);
    I.wait(2);
  },

  clickPublic(value){
    I.click(this.Button.clickPublicGist);
    I.wait(2);
  },

  clickEdit(value){
    I.click(this.Button.clickEditBtn);
    I.wait(2);
  },

  clickUpdate(value){
    I.click(this.Button.clickUpdateGistBtn);
    I.wait(3);
  },

  clickDelete(value){
    I.click(this.Button.clickDeleteBtn);
    I.wait(3);
  },
}
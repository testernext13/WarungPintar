const { WaitTask } = require("puppeteer");
const { I, gistPage } = inject();

//Create a public gist
Given('user already access login page github', () => {
  // From "features\Exercise2.feature" {"line":54,"column":1}
  I.amOnPage('https://github.com/login');
  I.wait(3);
});

When('user input email address', () => {
  // From "features\Exercise2.feature" {"line":55,"column":1}
  gistPage.fillUsername('testernext1313@gmail.com');
});

When('user input password', () => {
  // From "features\Exercise2.feature" {"line":56,"column":1}
  gistPage.fillPassword('1313testernext');
});

When('user click Sign in button', () => {
  // From "features\Exercise2.feature" {"line":57,"column":1}
  gistPage.clickSignIn();
  I.wait(10);
});

Given('user navigate to gist page', () => {
  // From "features\Exercise2.feature" {"line":46,"column":1}
  I.amOnPage('https://gist.github.com/');
  I.wait(3);
});

When('user input description', () => {
  // From "features\Exercise2.feature" {"line":19,"column":1}
 gistPage.fillGistDescription('WARUNG PINTAR13');
});

When('user input filename', () => {
  // From "features\Exercise2.feature" {"line":20,"column":1}
  gistPage.fillGistFileName('warpintest313 new');
});

When('user input notes', () => {
  // From "features\Exercise2.feature" {"line":21,"column":1}
  gistPage.fillGistNotes('added notes 3131');
  I.wait(3);
});

When('user click create gist button', () => {
  // From "features\Exercise2.feature" {"line":24,"column":1}
  gistPage.clickCreate();
  I.wait(2);
});

Then('user can to be able to see gist name', () => {
  // From "features\Exercise2.feature" {"line":25,"column":1}
  I.see('Created now');
});


//Edit an existing gist
Given('user already access login page github', () => {
  // From "features\Exercise2.feature" {"line":54,"column":1}
  I.amOnPage('https://github.com/login');
  I.wait(3);
});

When('user input email address', () => {
  // From "features\Exercise2.feature" {"line":55,"column":1}
  gistPage.fillUsername('testernext1313@gmail.com');
});

When('user input password', () => {
  // From "features\Exercise2.feature" {"line":56,"column":1}
  gistPage.fillPassword('1313testernext');
});

When('user click Sign in button', () => {
  // From "features\Exercise2.feature" {"line":57,"column":1}
  gistPage.clickSignIn();
  I.wait(10);
});

Given('user navigate to gist page existing list', () => {
  // From "features\Exercise2.feature" {"line":46,"column":1}
  I.amOnPage('https://gist.github.com/testernext13');
  I.wait(3);
});

Given('user selected existing gists testing13', () => {
  // From "features\Exercise2.feature" {"line":34,"column":1}
  I.amOnPage('https://gist.github.com/testernext13/9dd7bf17a0a9502ca3d9fa3348f1fbe4');
  I.wait(3);
});

When('user click edit', () => {
  // From "features\Exercise2.feature" {"line":35,"column":1}
  gistPage.clickEdit();
});

When('user edit gist filename', () => {
  // From "features\Exercise2.feature" {"line":35,"column":1}
  gistPage.fillGistFileName('testing13 edit1');
});


When('user click update public gist button', () => {
  // From "features\Exercise2.feature" {"line":36,"column":1}
  gistPage.clickUpdate();
  I.wait(2);
});

When('user navigate Revision tabbing menu', () => {
  // From "features\Exercise2.feature" {"line":37,"column":1}
  I.amOnPage('https://gist.github.com/testernext13/9dd7bf17a0a9502ca3d9fa3348f1fbe4/revisions');
  I.wait(2);
});

Then('user can to be able to see Revisions list', () => {
  // From "features\Exercise2.feature" {"line":38,"column":1}
  I.see('Revisions');
});



//Delete an existing gist
Given('user already access login page github', () => {
  // From "features\Exercise2.feature" {"line":54,"column":1}
  I.amOnPage('https://github.com/login');
  I.wait(3);
});

When('user input email address', () => {
  // From "features\Exercise2.feature" {"line":55,"column":1}
  gistPage.fillUsername('testernext1313@gmail.com');
});

When('user input password', () => {
  // From "features\Exercise2.feature" {"line":56,"column":1}
  gistPage.fillPassword('1313testernext');
});

When('user click Sign in button', () => {
  // From "features\Exercise2.feature" {"line":57,"column":1}
  gistPage.clickSignIn();
  I.wait(10);
});

When('user navigate to all my gist page', () => {
  // From "features\Exercise2.feature" {"line":46,"column":1}
  I.amOnPage('https://gist.github.com/testernext13');
  I.wait(3);
});

Given('user navigate existing gists', () => {
  // From "features\Exercise2.feature" {"line":47,"column":1}
  I.amOnPage('https://gist.github.com/testernext13/71fcc69b998692330293dcdf34abec80');
  I.wait(3);
});

Given('user click Delete button', () => {
  // From "features\Exercise2.feature" {"line":48,"column":1}
  gistPage.clickDelete();
});

When('user accept alert delete', () => {
  // From "features\Exercise2.feature" {"line":49,"column":1}
  I.amAcceptingPopups();
  I.wait(3);
});

Then('user can to be able to see message Gist deleted successfully', () => {
  // From "features\Exercise2.feature" {"line":50,"column":1}
  I.see('Gist deleted successfully.');
});



//see my list of gists
Given('user already access login page github', () => {
    // From "features\Exercise2.feature" {"line":54,"column":1}
    I.amOnPage('https://github.com/login');
    I.wait(3);
  });
  
  When('user input email address', () => {
    // From "features\Exercise2.feature" {"line":55,"column":1}
    gistPage.fillUsername('testernext1313@gmail.com');
  });
  
  When('user input password', () => {
    // From "features\Exercise2.feature" {"line":56,"column":1}
    gistPage.fillPassword('1313testernext');
  });
  
  When('user click Sign in button', () => {
    // From "features\Exercise2.feature" {"line":57,"column":1}
    gistPage.clickSignIn();
    I.wait(10);
  });
  
  When('user navigate to all my gist page', () => {
    // From "features\Exercise2.feature" {"line":46,"column":1}
    I.amOnPage('https://gist.github.com/testernext13');
    I.wait(3);
  });

Then('user can to be able to see all gist list', () => {
  // From "features\Exercise2.feature" {"line":59,"column":1}
  I.see('All gists');
 });

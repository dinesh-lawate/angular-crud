import { EmpAngularAppPage } from './app.po';

describe('emp-angular-app App', () => {
  let page: EmpAngularAppPage;

  beforeEach(() => {
    page = new EmpAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

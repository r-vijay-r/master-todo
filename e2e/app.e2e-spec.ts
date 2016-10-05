import { MasterTodoPage } from './app.po';

describe('master-todo App', function() {
  let page: MasterTodoPage;

  beforeEach(() => {
    page = new MasterTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

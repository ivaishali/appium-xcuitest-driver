import * as find from 'appium-flutter-finder';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { initSession, deleteSession, MOCHA_TIMEOUT } from '../helpers/session';
import { FLUTTER_CAPS } from '../desired';


chai.should();
chai.use(chaiAsPromised);

describe('basic ios functionality', function () {
  this.timeout(MOCHA_TIMEOUT);

  let driver;
  before(async function () {
    driver = await initSession(FLUTTER_CAPS);
  });
  after(async function () {
    await deleteSession();
  });

  it('should favorite a name', async function () {
    await driver.contexts();

    await driver.clickElement(find.byText('HotShell'));

    await driver.clickElement(find.byValueKey('saved'));

    await driver.clickElement(find.byText('HotShell')).should.not.be.rejected;
  });
});

import { NavigateFn } from '@reach/router';

import packageJson from '../../package.json';
import { UserStore } from './user';
import { UserService } from 'Services/user';
import { IRequest } from 'Utils/request';
import { UiStore } from './ui';

interface RootStoreParams {
  request: IRequest;
  navigate: NavigateFn;
}

export class RootStore {
  public userStore: UserStore;

  public uiStore: UiStore;

  public constructor({ request, navigate }: RootStoreParams) {
    // Glue everything together here so that when stores need to be tested, the dependencies can
    // be mocked very easily
    this.userStore = new UserStore(this, new UserService(request));
    this.uiStore = new UiStore(this, navigate);
  }

  public get appVersion() {
    return packageJson.version;
  }
}

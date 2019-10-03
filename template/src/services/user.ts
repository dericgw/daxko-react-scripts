import { Service } from '.';
import { User } from 'Stores/model/user';

export class UserService extends Service {
  protected path = '/users';

  public getById = async (id: string): Promise<User> => {
    // Axios should be configured to already have the base path. See ./utils/request
    const result = await this.request.get<User>(`${this.path}/${id}`);

    // Do some data manipulation here...

    // Notice the nice autocompletion on "result"
    return result;
  };
}

export enum IStorageUserKeys {
  onBoarding = 'onBoarding',
  authData = 'authData',
  authMeta = 'authMeta',
}

export interface IStorageOnBoarding {
  onBoardingShown: boolean;
}

export interface IStorageTokens {
  access_token?: string;
  expires_at?: number;
  refresh_token?: string;
  token_type?: string;
}

export interface IStorageUserData {
  email?: string;
  first_name?: string;
  full_name?: string;
  id?: string;
  last_name?: string;
  picture?: string;
  roles?: string[];
  statistics_bookmarks?: number;
  statistics_papers?: number;
}

class Storage {
  getOnBoarding(): IStorageOnBoarding {
    return JSON.parse(
      localStorage.getItem(IStorageUserKeys.onBoarding) ?? '{}',
    );
  }
  setOnBoarding(onBoarding: IStorageOnBoarding) {
    localStorage.setItem(
      IStorageUserKeys.onBoarding,
      JSON.stringify(onBoarding),
    );
  }

  getTokens(): IStorageTokens {
    return JSON.parse(localStorage.getItem(IStorageUserKeys.authData) ?? '{}');
  }
  setTokens(tokens: IStorageTokens) {
    localStorage.setItem(IStorageUserKeys.authData, JSON.stringify(tokens));
  }

  getUserData(): IStorageUserData {
    return JSON.parse(localStorage.getItem(IStorageUserKeys.authMeta) ?? '{}');
  }
  setUserData(userData: IStorageUserData) {
    localStorage.setItem(IStorageUserKeys.authMeta, JSON.stringify(userData));
  }

  clearUserData() {
    localStorage.clear();
  }
}

export const storage = new Storage();

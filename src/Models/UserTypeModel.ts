export type UserListItemModel = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: string;
  weight: string;
  eyeColor: string;
  hair: {};
  domain: String;
  ip: string;
  address: {
    address: {
      address: string;
      city: string;
      state: string;
    };
  };
  company: {
    address: {
      address: {
        address: string;
        city: string;
        state: string;
      };
    };
  };
};

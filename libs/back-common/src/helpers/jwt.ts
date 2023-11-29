export interface IToken {
  username?: string;
  email?: string;
  id: string;
  createdAt: Date;
}

export const generateUserToken = (user: IToken): IToken => ({
  username: user.username,
  email: user.email,
  id: user.id,
  createdAt: new Date(),
});

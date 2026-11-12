export interface IToken {
  username?: string;
  email?: string;
  type?: "JWT" | "OAuth";
  id: string;
  createdAt: Date;
}

export const generateJWTUserToken = (user: IToken): IToken => ({
  username: user.username,
  email: user.email,
  id: user.id,
  createdAt: new Date(),
  type: "JWT",
});

export const generateOAuthUserToken = (user: IToken): IToken => ({
  username: user.username,
  email: user.email,
  id: user.id,
  createdAt: new Date(),
  type: "OAuth",
});

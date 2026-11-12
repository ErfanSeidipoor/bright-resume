export interface IHobby {
  point?: string | null;
  isShow?: boolean | null;
}

export class HobbyModel {
  constructor(public input: Partial<IHobby> = {}) {}

  getPoint(): string | undefined | null {
    return this.input.point;
  }

  setPoint(point: string | undefined): void {
    this.input = { ...this.input, point };
  }

  getIsShow(): boolean | undefined | null {
    return this.input.isShow;
  }

  setIsShow(isShow: boolean): void {
    this.input = { ...this.input, isShow };
  }

  getPlainObject() {
    return {
      isShow: this.getIsShow() || false,
      point: this.getPoint() || "",
    };
  }

  callSetMethod<M extends HobbyModelSetMethodsKeyType>(
    methodName: HobbyModelSetMethodsKeyType,
    ...args: Parameters<HobbyModel[M]>
  ): ReturnType<HobbyModel[M]> {
    if (!this[methodName]) {
      throw new Error(`Method '${methodName}' does not exist on HobbyModel`);
    }

    return (
      this[methodName] as (
        ...args: Parameters<HobbyModel[M]>
      ) => ReturnType<HobbyModel[M]>
    )(...(args as Parameters<HobbyModel[M]>));
  }
}

export type HobbyModelSetMethodsKeyType = "setPoint" | "setIsShow";

export interface ISkill {
  point?: string | null;
  isShow?: boolean | null;
}

export class SkillModel {
  constructor(public input: Partial<ISkill> = {}) {}

  getPoint(): string | undefined | null {
    return this.input.point;
  }

  setPoint(point: string | undefined): void {
    this.input = { ...this.input, point };
  }

  setIsShow(isShow: boolean): void {
    this.input = { ...this.input, isShow };
  }

  getIsShow(): boolean | undefined | null {
    return this.input.isShow;
  }

  getPlainObject() {
    return {
      isShow: this.getIsShow() || false,
      point: this.getPoint() || "",
    };
  }

  callSetMethod<M extends SkillModelSetMethodsKeyType>(
    methodName: SkillModelSetMethodsKeyType,
    ...args: Parameters<SkillModel[M]>
  ): ReturnType<SkillModel[M]> {
    if (!this[methodName]) {
      throw new Error(`Method '${methodName}' does not exist on SkillModel`);
    }

    return (
      this[methodName] as (
        ...args: Parameters<SkillModel[M]>
      ) => ReturnType<SkillModel[M]>
    )(...(args as Parameters<SkillModel[M]>));
  }
}

export type SkillModelSetMethodsKeyType = "setPoint" | "setIsShow";

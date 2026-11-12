export interface ILanguage {
  name?: string | null;
  isShowLevel?: boolean | null;
  isShow?: boolean | null;
  level?: string | null;
}

export class LanguageModel {
  constructor(public input: Partial<ILanguage> = {}) {}

  getName(): string | undefined | null {
    return this.input.name;
  }

  setName(name: string): void {
    this.input = { ...this.input, name };
  }

  getIsShowLevel(): boolean | undefined | null {
    return this.input.isShowLevel;
  }

  setIsShowLevel(isShowLevel: boolean): void {
    this.input = { ...this.input, isShowLevel };
  }

  getIsShow(): boolean | undefined | null {
    return this.input.isShow;
  }

  setIsShow(isShow: boolean): void {
    this.input = { ...this.input, isShow };
  }

  getLevel(): string | undefined | null {
    return this.input.level;
  }

  setLevel(level: string): void {
    this.input = { ...this.input, level };
  }

  getPlainObject() {
    return {
      name: this.getName() || "",
      isShowLevel: this.getIsShowLevel() || false,
      isShow: this.getIsShow() || false,
      level: this.getLevel() || "",
    };
  }

  callSetMethod<M extends LanguageModelSetMethodsKeyType>(
    methodName: LanguageModelSetMethodsKeyType,
    ...args: Parameters<LanguageModel[M]>
  ): ReturnType<LanguageModel[M]> {
    if (!this[methodName]) {
      throw new Error(`Method '${methodName}' does not exist on LanguageModel`);
    }

    return (
      this[methodName] as (
        ...args: Parameters<LanguageModel[M]>
      ) => ReturnType<LanguageModel[M]>
    )(...(args as Parameters<LanguageModel[M]>));
  }
}

export type LanguageModelSetMethodsKeyType =
  | "setName"
  | "setLevel"
  | "setIsShowLevel"
  | "setIsShow";

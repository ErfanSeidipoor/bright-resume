export interface ICertification {
  name?: string | null;
  isShowInstitute?: boolean | null;
  institute?: string | null;
  isShowDate?: boolean | null;
  year?: string | null;
  isShowPoints?: boolean | null;
  isShow?: boolean | null;
  points?: string[] | null;
}

export class CertificationModel {
  constructor(public input: Partial<ICertification> = {}) {}

  getName(): string | undefined | null {
    return this.input.name;
  }

  setName(name: string): void {
    this.input = { ...this.input, name };
  }

  getIsShowInstitute(): boolean | undefined | null {
    return this.input.isShowInstitute;
  }

  setIsShowInstitute(isShowInstitute: boolean | undefined) {
    this.input = { ...this.input, isShowInstitute };
  }

  setIsShowDate(isShowDate: boolean): void {
    this.input = { ...this.input, isShowDate };
  }

  setIsShow(isShow: boolean): void {
    this.input = { ...this.input, isShow };
  }

  getIsShow(): boolean | undefined | null {
    return this.input.isShow;
  }

  getInstitute(): string | undefined | null {
    return this.input.institute;
  }

  setInstitute(institute: string): void {
    this.input = { ...this.input, institute };
  }

  getIsShowDate(): boolean | undefined | null {
    return this.input.isShowDate;
  }

  getYear(): string | undefined | null {
    return this.input.year;
  }

  setYear(year: string): void {
    this.input = { ...this.input, year };
  }

  getIsShowPoints(): boolean | undefined | null {
    return this.input.isShowPoints;
  }

  setIsShowPoints(isShowPoints: boolean): void {
    this.input = { ...this.input, isShowPoints };
  }

  getPoints(): string[] {
    return this.input.points || [];
  }

  setPoint(index: number, point: string): void {
    if (index >= this.getPoints().length) return;
    if (this.input.points) {
      const points = [...this.input.points];
      points[index] = point;
      this.input = { ...this.input, points };
    }
  }

  getPlainObject() {
    return {
      name: this.getName() || "",
      isShowInstitute: this.getIsShowInstitute() || false,
      institute: this.getInstitute() || "",
      isShowDate: this.getIsShowDate() || false,
      year: this.getYear() || "",
      isShowPoints: this.getIsShowPoints() || false,
      isShow: this.getIsShow() || false,
      points:
        this.getPoints()
          .map((point) => point || "")
          .filter((point) => !!point) || [],
    };
  }

  changePointsIndex(index1: number, index2: number) {
    if (!this.input.points) {
      return;
    }
    const length = this.getPoints()?.length || 0;
    if (index1 >= length || index2 >= length) {
      return;
    }

    const points = [...this.input.points];

    const item1 = points[index1];
    const item2 = points[index2];

    points[index2] = item1;
    points[index1] = item2;

    this.input = { ...this.input, points };
  }

  callSetMethod<M extends CertificationModelSetMethodsKeyType>(
    methodName: CertificationModelSetMethodsKeyType,
    ...args: Parameters<CertificationModel[M]>
  ): ReturnType<CertificationModel[M]> {
    if (!this[methodName]) {
      throw new Error(
        `Method '${methodName}' does not exist on CertificationModel`
      );
    }

    return (
      this[methodName] as (
        ...args: Parameters<CertificationModel[M]>
      ) => ReturnType<CertificationModel[M]>
    )(...(args as Parameters<CertificationModel[M]>));
  }
}

export type CertificationModelSetMethodsKeyType =
  | "setName"
  | "setInstitute"
  | "setYear"
  | "setIsShowDate"
  | "setIsShowPoints"
  | "setPoint"
  | "changePointsIndex"
  | "setIsShow";

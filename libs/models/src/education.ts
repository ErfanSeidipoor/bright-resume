export interface IEducation {
  degree?: string | null;
  institute?: string | null;
  isShowInstitute?: boolean | null;
  location?: string | null;
  isShowLocation?: boolean | null;
  isShowDate?: boolean | null;
  from?: string | null;
  to?: string | null;
  isShowGpa?: boolean | null;
  gpa?: string | null;
  isShowPoints?: boolean | null;
  isShow?: boolean | null;
  points?: string[] | null;
}

export class EducationModel {
  constructor(public input: Partial<IEducation> = {}) {}

  getDegree(): string | undefined | null {
    return this.input.degree;
  }

  setDegree(degree: string): void {
    this.input = { ...this.input, degree };
  }

  getIsShowInstitute(): boolean | undefined | null {
    return this.input.isShowInstitute;
  }

  setIsShowInstitute(isShowInstitute: boolean): void {
    this.input = { ...this.input, isShowInstitute };
  }

  getInstitute(): string | undefined | null {
    return this.input.institute;
  }

  setInstitute(institute: string): void {
    this.input = { ...this.input, institute };
  }

  getIsShowLocation(): boolean | undefined | null {
    return this.input.isShowLocation;
  }

  setIsShowLocation(isShowLocation: boolean): void {
    this.input = { ...this.input, isShowLocation };
  }

  getIsShowGpa(): boolean | undefined | null {
    return this.input.isShowGpa;
  }

  setIsShowGpa(isShowGpa: boolean): void {
    this.input = { ...this.input, isShowGpa };
  }

  getLocation(): string | undefined | null {
    return this.input.location;
  }

  setLocation(location: string): void {
    this.input = { ...this.input, location };
  }

  getGpa(): string | undefined | null {
    return this.input.gpa;
  }

  setGpa(gpa: string): void {
    this.input = { ...this.input, gpa };
  }

  getIsShowDate(): boolean | undefined | null {
    return this.input.isShowDate;
  }

  setIsShowDate(isShowDate: boolean): void {
    this.input = { ...this.input, isShowDate };
  }

  getIsShow(): boolean | undefined | null {
    return this.input.isShow;
  }

  setIsShow(isShow: boolean): void {
    this.input = { ...this.input, isShow };
  }

  getTo(): string | undefined | null {
    return this.input.to;
  }

  setTo(to: string): void {
    this.input = { ...this.input, to };
  }

  getFrom(): string | undefined | null {
    return this.input.from;
  }

  setFrom(from: string): void {
    this.input = { ...this.input, from };
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

  getPlainObject() {
    return {
      degree: this.getDegree() || "",
      institute: this.getInstitute() || "",
      isShowInstitute: this.getIsShowInstitute() || false,
      location: this.getLocation() || "",
      isShowLocation: this.getIsShowLocation() || false,
      isShowDate: this.getIsShowDate() || false,
      from: this.getFrom() || "",
      to: this.getTo() || "",
      isShowGpa: this.getIsShowGpa() || false,
      gpa: this.getGpa() || "",
      isShowPoints: this.getIsShowPoints() || false,
      isShow: this.getIsShow() || false,
      points:
        this.getPoints()
          .map((point) => point || "")
          .filter((point) => !!point) || [],
    };
  }

  callSetMethod<M extends EducationModelSetMethodsKeyType>(
    methodName: EducationModelSetMethodsKeyType,
    ...args: Parameters<EducationModel[M]>
  ): ReturnType<EducationModel[M]> {
    if (!this[methodName]) {
      throw new Error(
        `Method '${methodName}' does not exist on EducationModel`
      );
    }

    return (
      this[methodName] as (
        ...args: Parameters<EducationModel[M]>
      ) => ReturnType<EducationModel[M]>
    )(...(args as Parameters<EducationModel[M]>));
  }
}

export type EducationModelSetMethodsKeyType =
  | "setDegree"
  | "setIsShowInstitute"
  | "setInstitute"
  | "setIsShowLocation"
  | "setLocation"
  | "setIsShowGpa"
  | "setGpa"
  | "setIsShowDate"
  | "setIsShowPoints"
  | "setPoint"
  | "setIsShow"
  | "setTo"
  | "setFrom"
  | "changePointsIndex";

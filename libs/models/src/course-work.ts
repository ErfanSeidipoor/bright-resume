export interface ICourseWork {
  name?: string | null;
  isShowInstitute?: boolean | null;
  institute?: string | null;
  isShowDate?: boolean | null;
  year?: string | null;
  isShowSkills?: boolean | null;
  isSkills?: boolean | null;
  skills?: string | null;
  isShowPoints?: boolean | null;
  isShow?: boolean | null;
  points?: string[] | null;
}

export class CourseWorkModel {
  constructor(public input: Partial<ICourseWork> = {}) {}

  getName(): string | undefined | null {
    return this.input.name;
  }

  setName(name: string): void {
    this.input = { ...this.input, name };
  }

  getIsShowInstitute(): boolean | undefined | null {
    return this.input.isShowInstitute;
  }

  setIsShowInstitute(): boolean | undefined | null {
    return this.input.isShowInstitute;
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

  setIsShowDate(isShowDate: boolean): void {
    this.input = { ...this.input, isShowDate };
  }

  getYear(): string | undefined | null {
    return this.input.year;
  }

  setYear(year: string): void {
    this.input = { ...this.input, year };
  }

  getIsShowSkills(): boolean | undefined | null {
    return this.input.isShowSkills;
  }

  setIsShowSkills(isShowSkills: boolean): void {
    this.input = { ...this.input, isShowSkills };
  }

  getIsSkills(): boolean | undefined | null {
    return this.input.isSkills;
  }

  setIsSkills(isSkills: boolean): void {
    this.input = { ...this.input, isSkills };
  }

  getSkills(): string | undefined | null {
    return this.input.skills;
  }

  setSkills(skills: string): void {
    this.input = { ...this.input, skills };
  }

  getIsShowPoints(): boolean | undefined | null {
    return this.input.isShowPoints;
  }

  setIsShow(isShow: boolean): void {
    this.input = { ...this.input, isShow };
  }

  getIsShow(): boolean | undefined | null {
    return this.input.isShow;
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
      isShowSkills: this.getIsShowSkills() || false,
      year: this.getYear() || "",
      isShowPoints: this.getIsShowPoints() || false,
      isSkills: this.getIsSkills() || false,
      isShow: this.getIsShow() || false,
      skills: this.getSkills() || "",
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

  callSetMethod<M extends CourseWorkModelSetMethodsKeyType>(
    methodName: CourseWorkModelSetMethodsKeyType,
    ...args: Parameters<CourseWorkModel[M]>
  ): ReturnType<CourseWorkModel[M]> {
    if (!this[methodName]) {
      throw new Error(
        `Method '${methodName}' does not exist on CourseWorkModel`
      );
    }

    return (
      this[methodName] as (
        ...args: Parameters<CourseWorkModel[M]>
      ) => ReturnType<CourseWorkModel[M]>
    )(...(args as Parameters<CourseWorkModel[M]>));
  }
}

export type CourseWorkModelSetMethodsKeyType =
  | "setName"
  | "setInstitute"
  | "setIsShowInstitute"
  | "setIsShowDate"
  | "setYear"
  | "setIsShowSkills"
  | "setSkills"
  | "setSkills"
  | "setIsShowPoints"
  | "setPoint"
  | "changePointsIndex"
  | "setIsShow";

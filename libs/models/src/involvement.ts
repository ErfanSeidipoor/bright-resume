export interface IInvolvement {
  role?: string | null;
  isShowCompany?: boolean | null;
  company?: string | null;
  isShowLocation?: boolean | null;
  location?: string | null;
  isShowDate?: boolean | null;
  from?: string | null;
  to?: string | null;
  isShow?: boolean | null;
  isShowPoints?: boolean | null;
  points?: string[] | null;
}

export class InvolvementModel {
  constructor(public input: Partial<IInvolvement> = {}) {}

  getRole(): string | undefined | null {
    return this.input.role;
  }

  setRole(role: string): void {
    this.input = { ...this.input, role };
  }

  getIsShowCompany(): boolean | undefined | null {
    return this.input.isShowCompany;
  }

  setIsShowCompany(isShowCompany: boolean): void {
    this.input = { ...this.input, isShowCompany };
  }

  getCompany(): string | undefined | null {
    return this.input.company;
  }

  setCompany(company: string): void {
    this.input = { ...this.input, company };
  }

  getIsShowLocation(): boolean | undefined | null {
    return this.input.isShowLocation;
  }

  setIsShowLocation(isShowLocation: boolean): void {
    this.input = { ...this.input, isShowLocation };
  }

  getLocation(): string | undefined | null {
    return this.input.location;
  }

  setLocation(location: string): void {
    this.input = { ...this.input, location };
  }

  getIsShowDate(): boolean | undefined | null {
    return this.input.isShowDate;
  }

  setIsShowDate(isShowDate: boolean): void {
    this.input = { ...this.input, isShowDate };
  }

  getFrom(): string | undefined | null {
    return this.input.from;
  }

  setFrom(from: string): void {
    this.input = { ...this.input, from };
  }

  getTo(): string | undefined | null {
    return this.input.to;
  }

  setTo(to: string): void {
    this.input = { ...this.input, to };
  }

  getIsShow(): boolean | undefined | null {
    return this.input.isShow;
  }

  setIsShow(isShow: boolean): void {
    this.input = { ...this.input, isShow };
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
      role: this.getRole() || "",
      company: this.getCompany() || "",
      isShowLocation: this.getIsShowLocation() || false,
      isShowCompany: this.getIsShowCompany() || false,
      location: this.getLocation() || "",
      isShowDate: this.getIsShowDate() || false,
      from: this.getFrom() || "",
      to: this.getTo() || "",
      isShow: this.getIsShow() || false,
      isShowPoints: this.getIsShowPoints() || false,
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

  callSetMethod<M extends InvolvementModelSetMethodsKeyType>(
    methodName: InvolvementModelSetMethodsKeyType,
    ...args: Parameters<InvolvementModel[M]>
  ): ReturnType<InvolvementModel[M]> {
    if (!this[methodName]) {
      throw new Error(
        `Method '${methodName}' does not exist on InvolvementModel`
      );
    }

    return (
      this[methodName] as (
        ...args: Parameters<InvolvementModel[M]>
      ) => ReturnType<InvolvementModel[M]>
    )(...(args as Parameters<InvolvementModel[M]>));
  }
}

export type InvolvementModelSetMethodsKeyType =
  | "setRole"
  | "setIsShowCompany"
  | "setCompany"
  | "setIsShowLocation"
  | "setLocation"
  | "setIsShowDate"
  | "setFrom"
  | "setTo"
  | "setIsShow"
  | "setIsShowPoints"
  | "setPoint"
  | "changePointsIndex";

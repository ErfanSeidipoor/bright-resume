export interface IProject {
  title?: string | null;
  isShowRole?: boolean | null;
  role?: string | null;
  isShowCompany?: boolean | null;
  company?: string | null;
  isShowLocation?: boolean | null;
  location?: string | null;
  isShowUrl?: boolean | null;
  url?: string | null;
  isShowDate?: boolean | null;
  from?: string | null;
  to?: string | null;
  isShow?: boolean | null;
  isShowPoints?: boolean | null;
  points?: string[] | null;
}

export class ProjectModel {
  constructor(public input: Partial<IProject> = {}) {}

  getTitle(): string | undefined | null {
    return this.input.title;
  }

  setTitle(title: string): void {
    this.input = { ...this.input, title };
  }

  getIsShowRole(): boolean | undefined | null {
    return this.input.isShowRole;
  }

  setIsShowRole(isShowRole: boolean): void {
    this.input = { ...this.input, isShowRole };
  }

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

  getIsShowLocation(): boolean | undefined | null {
    return this.input.isShowLocation;
  }

  getLocation(): string | undefined | null {
    return this.input.location;
  }

  setLocation(location: string): void {
    this.input = { ...this.input, location };
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

  getIsShowUrl(): boolean | undefined | null {
    return this.input.isShowUrl;
  }

  setIsShowUrl(isShowUrl: boolean): void {
    this.input = { ...this.input, isShowUrl };
  }

  getUrl(): string | undefined | null {
    return this.input.url;
  }

  setUrl(url: string): void {
    this.input = { ...this.input, url };
  }

  getIsShowDate(): boolean | undefined | null {
    return this.input.isShowDate;
  }

  setIsShowDate(isShowDate: boolean): void {
    this.input = { ...this.input, isShowDate };
  }

  getIsShowPoints(): boolean | undefined | null {
    return this.input.isShowPoints;
  }

  setIsShowPoints(isShowPoints: boolean): void {
    this.input = { ...this.input, isShowPoints };
  }

  getIsShow(): boolean | undefined | null {
    return this.input.isShow;
  }

  setIsShow(isShow: boolean): void {
    this.input = { ...this.input, isShow };
  }

  getPoints(): string[] {
    return this.input.points || [];
  }

  setCompany(company: string): void {
    this.input = { ...this.input, company };
  }

  setIsShowLocation(isShowLocation: boolean): void {
    this.input.isShowLocation = isShowLocation;
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
      title: this.getTitle() || "",
      isShowRole: this.getIsShowRole() || false,
      role: this.getRole() || "",
      isShowCompany: this.getIsShowCompany() || false,
      company: this.getCompany() || "",
      isShowLocation: this.getIsShowLocation() || false,
      location: this.getLocation() || "",
      isShowUrl: this.getIsShowUrl() || false,
      url: this.getUrl() || "",
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

  callSetMethod<M extends ProjectModelSetMethodsKeyType>(
    methodName: ProjectModelSetMethodsKeyType,
    ...args: Parameters<ProjectModel[M]>
  ): ReturnType<ProjectModel[M]> {
    if (!this[methodName]) {
      throw new Error(`Method '${methodName}' does not exist on ProjectModel`);
    }

    return (
      this[methodName] as (
        ...args: Parameters<ProjectModel[M]>
      ) => ReturnType<ProjectModel[M]>
    )(...(args as Parameters<ProjectModel[M]>));
  }
}

export type ProjectModelSetMethodsKeyType =
  | "setTitle"
  | "setIsShowRole"
  | "setRole"
  | "setIsShowCompany"
  | "setCompany"
  | "setIsShowLocation"
  | "setLocation"
  | "setIsShowUrl"
  | "setUrl"
  | "setTo"
  | "setFrom"
  | "setIsShowDate"
  | "setIsShowPoints"
  | "setIsShow"
  | "setPoint"
  | "changePointsIndex";

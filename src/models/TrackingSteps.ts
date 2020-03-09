export default class TrackingSteps {
  local: string;
  status: string;
  observation?: string;
  trackedAt: Date;

  constructor(local: string, status: string, trackedAt: Date, observation?: string) {
    this.local = local;
    this.status = status;
    this.observation = observation;
    this.trackedAt = new Date(trackedAt);
  }

  static fromJSON(data: any){
    return new TrackingSteps(
      data.locale,
      data.status,
      data.trackedAt,
      data.observation
    );
  }
}
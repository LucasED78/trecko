import TrackingSteps from "./TrackingSteps";

export default class Track {
  code: string;
  tracks: Array<TrackingSteps>;
  isDelivered: boolean;
  postedAt: Date;
  updatedAt: Date;

  constructor(
    code: string, 
    tracks: Array<TrackingSteps>, 
    isDelivered: boolean, 
    postedAt: Date, 
    updatedAt: Date
  ){
    this.code = code;
    this.tracks = tracks;
    this.isDelivered = isDelivered;
    this.postedAt = postedAt;
    this.updatedAt = updatedAt;
  }

  static fromJSON(data: any){
    return new Track(
      data.code,
      data.tracks.map((e: any) => TrackingSteps.fromJSON(e)),
      data.isDelivered,
      data.postedAt,
      data.updatedAt
    )
  }
}
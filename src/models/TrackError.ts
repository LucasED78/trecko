export default class TrackError {
  code: string;
  isInvalid: boolean;
  error: string;

  constructor(code: string, isInvalid: boolean, error: string){
    this.code = code;
    this.isInvalid = isInvalid;
    this.error = error;
  }

  static fromJSON(data: any){
    return new TrackError(
      data.code,
      data.isInvalid,
      data.error
    )
  }
}
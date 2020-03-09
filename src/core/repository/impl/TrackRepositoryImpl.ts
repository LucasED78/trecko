import TrackRepository from "../TrackRepository";
import Track from "../../../models/Track";
import TreckoHttp from "../../http/TreckoHttp";
import TreckoHttpResponse from "../../http/TreckoHttpResponse";
import TrackError from "../../../models/TrackError";

export default class TrackRepositoryImpl implements TrackRepository {
  treckoHttp: TreckoHttp;

  constructor(treckoHttp: TreckoHttp){
    this.treckoHttp = treckoHttp;
  }

  track = async(code: string): Promise<Track> => {
    try {
      const response = await this.treckoHttp.get(`/${code}`);

      const [ data ] = response.data as Array<any>;

      if (data.hasOwnProperty('isInvalid')){
        throw TrackError.fromJSON(data);
      }

      return Track.fromJSON(data[0]);
    } catch(e){
      throw e;
    }
  }
}
import Track from "../../models/Track";
import TrackError from "../../models/TrackError";

export default interface TrackRepository {
  track(code: string): Promise<Track>
}
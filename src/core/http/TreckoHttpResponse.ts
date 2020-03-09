export default class TreckoHttpResponse {
  success: Boolean;
  data: Object;
  
  constructor(success: Boolean, data: Object){
    this.success = success;
    this.data = data;
  }
}
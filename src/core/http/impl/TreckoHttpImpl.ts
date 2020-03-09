import TreckoHttp from '../TreckoHttp';
import TreckoAxios from '../TreckoAxios';
import HttpMethods from '../HttpMethods';
import TreckoHttpError from '../TreckoHttpError';
import TreckoHttpResponse from '../TreckoHttpResponse';

export default class TreckoHttpImpl implements TreckoHttp {
  treckoAxios = TreckoAxios();

  request = async (path: string, method: HttpMethods, data?: Object | undefined, headers?: Object | undefined): Promise<TreckoHttpResponse | TreckoHttpError> => {
    try {
      let response;

      switch (method) {
        case HttpMethods.GET:
          response = await this.treckoAxios.get(path);
          break;
        case HttpMethods.POST:
          response = await this.treckoAxios.post(path, data);
          break;
        case HttpMethods.PUT:
          response = await this.treckoAxios.put(path, data);
          break;
        case HttpMethods.PATCH:
          response = await this.treckoAxios.patch(path, data);
          break;
        case HttpMethods.DELETE:
          response = await this.treckoAxios(path);
          break;
        default:
          break;
      }

      if (response?.data) return new TreckoHttpResponse(true, response?.data);
      else return new TreckoHttpError('erro');
    }catch(e){
      return new TreckoHttpError('ocorreu um erro');
    }
  }

  get = async (path: string, headers?: Object | undefined): Promise<TreckoHttpResponse | TreckoHttpError> => {
    return this.request(path, HttpMethods.GET);
  }

  post = async (path: string, data: Object, headers?: Object | undefined): Promise<TreckoHttpResponse | TreckoHttpError> => {
    return this.request(path, HttpMethods.POST, data);
  }

  put(path: string, data: Object, headers?: Object | undefined): Promise<TreckoHttpResponse | TreckoHttpError> {
    return this.request(path, HttpMethods.PUT, data);
  }

  patch(path: string, data: Object, headers?: Object | undefined): Promise<TreckoHttpResponse | TreckoHttpError> {
    return this.request(path, HttpMethods.PATCH, data);
  }

  delete(path: string, data: Object, headers?: Object | undefined): Promise<TreckoHttpResponse | TreckoHttpError> {
    return this.request(path, HttpMethods.DELETE, data);
  }
}
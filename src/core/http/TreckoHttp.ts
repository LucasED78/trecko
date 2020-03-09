import HttpMethods from './HttpMethods';
import TreckoHttpError from './TreckoHttpError';
import TreckoHttpResponse from './TreckoHttpResponse';

export default interface TreckoHttp {
    request(path: string, method: HttpMethods, data?: Object, headers?: Object): Promise<TreckoHttpResponse | TreckoHttpError>;
    get(path: string, headers?: Object): Promise<TreckoHttpResponse | TreckoHttpError>;
    post(path: string, data: Object, headers?: Object): Promise<TreckoHttpResponse | TreckoHttpError>;
    put(path: string, data: Object, headers?: Object): Promise<TreckoHttpResponse | TreckoHttpError>;
    patch(path: string, data: Object, headers?: Object): Promise<TreckoHttpResponse | TreckoHttpError>;
    delete(path: string, data: Object, headers?: Object): Promise<TreckoHttpResponse | TreckoHttpError>;
}
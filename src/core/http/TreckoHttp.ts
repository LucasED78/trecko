import HttpMethods from './HttpMethods';
import TreckoHttpResponse from './TreckoHttpResponse';

export default interface TreckoHttp {
    request(path: string, method: HttpMethods, data?: Object, headers?: Object): Promise<TreckoHttpResponse>;
    get(path: string, headers?: Object): Promise<TreckoHttpResponse>;
    post(path: string, data: Object, headers?: Object): Promise<TreckoHttpResponse>;
    put(path: string, data: Object, headers?: Object): Promise<TreckoHttpResponse>;
    patch(path: string, data: Object, headers?: Object): Promise<TreckoHttpResponse>;
    delete(path: string, data: Object, headers?: Object): Promise<TreckoHttpResponse>;
}
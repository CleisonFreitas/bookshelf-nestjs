export class NestHttpResponse {
    constructor(response: NestHttpResponse){
      /*  this.status = response.status;
        this.headers = response.headers;
        this.body = response.body;*/


        Object.assign(this, response);
    }
    status: number;
    headers: object;
    body: object;
}
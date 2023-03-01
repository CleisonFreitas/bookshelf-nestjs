import { NestHttpResponse } from "./nest-http.response";

export class NestResponseBuilder {
    private response : NestHttpResponse = {
        status: 200,
        headers: {},
        body: {}
    };

    public withStatus(status:number) {
        this.response.status = status;
        return this;
    }

    public withHeaders(headers: object) {
        this.response.headers = headers;
        return this;
    }

    public withBody(body: object) {
        this.response.body = body;
        return this;
    }

    public build() {
        return new NestHttpResponse(this.response);
    }
}
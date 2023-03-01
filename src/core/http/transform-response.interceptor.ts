import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators";
import { HttpAdapterHost,AbstractHttpAdapter } from "@nestjs/core";
import { map, Observable } from "rxjs";
import { NestHttpResponse } from "./nest-http.response";

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor {
    private httpAdapter : AbstractHttpAdapter;

    constructor(adapterHost: HttpAdapterHost){
        this.httpAdapter = adapterHost.httpAdapter;
    }
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle()
                    .pipe(
                        map((responseController : NestHttpResponse) => {
                            if(responseController instanceof NestHttpResponse) {
                                const content = context.switchToHttp();
                                const response = content.getResponse();
                                const {headers,status,body} = responseController;

                                const headersName = Object.getOwnPropertyNames(headers);

                                headersName.forEach((headerName) => {
                                    const headerValue = headers[headerName];
                                    this.httpAdapter.setHeader(response, headerName, headerValue);
                                });

                                this.httpAdapter.status(response,status);

                                return body;
                            }

                            return responseController;
                        })
                    );
    }

}
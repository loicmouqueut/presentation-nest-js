import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators'

@Injectable()
export class ExecutionInterceptor implements NestInterceptor {

    numberRequest: number = 0;
    readonly maxRequest: number = 10;

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

        return next.handle()
        .pipe(
            tap(() => {
                if (this.numberRequest == this.maxRequest) {
                    console.log(`${this.maxRequest} requests received, shutting down the server`);
                    process.exit(0);
                } else {
                    console.log('Request number ' + ++this.numberRequest + ` / ${this.maxRequest}`);
                }
            })
        );
    }
}
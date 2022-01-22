import { createParamDecorator, HttpException, ExecutionContext } from '@nestjs/common';

const throwErr = paramName => {
    throw new HttpException(`Missing parameter: ${paramName}`, 400);
};

export const ParamId = createParamDecorator((paramName: string = 'id', ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    if (request && request.params) {
        try {
            if (!request.params[paramName]) throwErr(paramName);
            else {
                const id = parseInt(request.params[paramName], 10);
                if (!id) throwErr(paramName);
                else return id;
            }
        } catch (error) {
            throwErr(paramName);
        }
    } else {
        return null;
    }
});

export const ParamGuid = createParamDecorator((paramName: string = 'id', ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    if (request && request.params) {
        try {
            if (!request.params[paramName]) throwErr(paramName);
            else {
                const guid = request.params[paramName];
                if (
                    !guid ||
                    !/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/.test(guid)
                ) {
                    throwErr(paramName);
                } else {
                    return guid;
                }
            }
        } catch (error) {
            throwErr(paramName);
        }
    } else {
        return null;
    }
});

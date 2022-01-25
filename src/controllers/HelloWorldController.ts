import { Req, UsePipe } from "@tsed/common";
import { useDecorators } from "@tsed/core";
import { Controller, Injectable } from "@tsed/di";
import { Get, PipeMethods } from "@tsed/schema";

class UserEntity {
  constructor(public name: string) {}
}

@Injectable()
class ParseCurrentUserPipe implements PipeMethods<Req, UserEntity> {
  transform(req: Req) {
    return new UserEntity("test");
  }
}

export function UseCurrentUser(): ParameterDecorator {
  return useDecorators(UsePipe(ParseCurrentUserPipe));
}

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get(@UseCurrentUser() user: UserEntity) {
    return "hello " + user.name;
  }
}

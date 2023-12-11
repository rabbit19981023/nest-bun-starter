import { beforeAll, describe, expect, it } from "bun:test";
import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
  let app: TestingModule;
  let appController: AppController;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get(AppController);
  });

  describe("getHello", () => {
    it("should return 'Hello World!'", () => {
      expect(appController.getHello()).toBe("Hello World!");
    });
  });
});

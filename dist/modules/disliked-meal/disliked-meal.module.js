"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DislikedMealModule = void 0;
const common_1 = require("@nestjs/common");
const disliked_meal_service_1 = require("./services/disliked-meal.service");
const disliked_meal_controller_1 = require("./controllers/disliked-meal.controller");
const prisma_service_1 = require("../../prisma/prisma.service");
let DislikedMealModule = class DislikedMealModule {
};
exports.DislikedMealModule = DislikedMealModule;
exports.DislikedMealModule = DislikedMealModule = __decorate([
    (0, common_1.Module)({
        controllers: [disliked_meal_controller_1.DislikedMealController],
        providers: [disliked_meal_service_1.DislikedMealService, prisma_service_1.PrismaService],
    })
], DislikedMealModule);
//# sourceMappingURL=disliked-meal.module.js.map
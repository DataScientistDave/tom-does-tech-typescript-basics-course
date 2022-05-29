"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
// If you hover over app without installing express types, then it will say any which is bad practice
var app = (0, express_1["default"])();
// Install types from monorepo
// yarn add @types/express -D
// Types over app is express

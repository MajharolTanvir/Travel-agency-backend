"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagePlanController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const pagination_1 = require("../../../constants/pagination");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const packagePlan_constant_1 = require("./packagePlan.constant");
const packagePlan_services_1 = require("./packagePlan.services");
const createPackage = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield packagePlan_services_1.PackagePlanServices.createPackage(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Package created successfully!',
        data: result,
    });
}));
const getAllPackage = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, packagePlan_constant_1.packageFilterAbleField);
    const options = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const result = yield packagePlan_services_1.PackagePlanServices.getAllPackage(filters, options);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Packages retrieved successfully!',
        meta: result.meta,
        data: result.data,
    });
}));
const getSinglePackage = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield packagePlan_services_1.PackagePlanServices.getSinglePackage(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Package retrieved successfully!',
        data: result,
    });
}));
const updatePackage = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield packagePlan_services_1.PackagePlanServices.updatePackage(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Package updated successfully!',
        data: result,
    });
}));
const deletePackage = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield packagePlan_services_1.PackagePlanServices.deletePackage(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Package deleted successfully!',
        data: result,
    });
}));
const createPackagePlaces = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield packagePlan_services_1.PackagePlanServices.createPackagePlaces(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Package places selected successfully!',
        data: result,
    });
}));
const getPackagePlaces = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield packagePlan_services_1.PackagePlanServices.getPackagePlaces();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Package places retrieved successfully!',
        data: result.data,
    });
}));
const deletePackagePlaces = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield packagePlan_services_1.PackagePlanServices.deletePackagePlaces(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Package deleted successfully!',
        data: result,
    });
}));
exports.PackagePlanController = {
    createPackage,
    getAllPackage,
    getSinglePackage,
    updatePackage,
    deletePackage,
    createPackagePlaces,
    getPackagePlaces,
    deletePackagePlaces,
};

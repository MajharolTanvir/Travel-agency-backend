"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultiesRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const facilitiesOptions_validation_1 = require("./facilitiesOptions.validation");
const facilitiesOptions_controller_1 = require("./facilitiesOptions.controller");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(facilitiesOptions_validation_1.FacultiesZodValidation.createFacilities), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN), facilitiesOptions_controller_1.FacultiesController.createFacilities);
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.TRAVELER), facilitiesOptions_controller_1.FacultiesController.getAllFacilities);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.TRAVELER), facilitiesOptions_controller_1.FacultiesController.getSingleFacilities);
router.patch('/:id', (0, validateRequest_1.default)(facilitiesOptions_validation_1.FacultiesZodValidation.updateFacilities), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN), facilitiesOptions_controller_1.FacultiesController.updateFacilities);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN), facilitiesOptions_controller_1.FacultiesController.deleteFacilities);
exports.FacultiesRouter = router;

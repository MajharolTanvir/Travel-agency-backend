"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const profile_controller_1 = require("./profile.controller");
const profile_validation_1 = require("./profile.validation");
const router = express_1.default.Router();
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN), profile_controller_1.ProfileController.changeRole);
router.patch('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.TRAVELER, user_1.ENUM_USER_ROLE.GUIDE, user_1.ENUM_USER_ROLE.MANAGERS, user_1.ENUM_USER_ROLE.DISTRICT_COORDINATOR, user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), (0, validateRequest_1.default)(profile_validation_1.ProfileValidation.profileUpdateZodValidation), profile_controller_1.ProfileController.profileUpdate);
router.get('/user-profile', (0, auth_1.default)(user_1.ENUM_USER_ROLE.TRAVELER, user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), profile_controller_1.ProfileController.getProfile);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.TRAVELER, user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), profile_controller_1.ProfileController.getSingleProfile);
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.TRAVELER, user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), profile_controller_1.ProfileController.getAllProfile);
router.patch('/change-role/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN), profile_controller_1.ProfileController.profileUpdate);
exports.ProfileRouter = router;

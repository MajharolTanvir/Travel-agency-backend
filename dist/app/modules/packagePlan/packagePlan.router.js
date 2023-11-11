"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagePlanRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const packagePlan_controller_1 = require("./packagePlan.controller");
const packagePlan_validation_1 = require("./packagePlan.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(packagePlan_validation_1.PackagePlanValidation.createPackagePlan), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), packagePlan_controller_1.PackagePlanController.createPackage);
router.post('/package-places', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), packagePlan_controller_1.PackagePlanController.createPackagePlaces);
router.get('/', packagePlan_controller_1.PackagePlanController.getAllPackage);
router.get('/package-places', packagePlan_controller_1.PackagePlanController.getPackagePlaces);
router.get('/:id', packagePlan_controller_1.PackagePlanController.getSinglePackage);
router.patch('/:id', (0, validateRequest_1.default)(packagePlan_validation_1.PackagePlanValidation.updatePackagePlan), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), packagePlan_controller_1.PackagePlanController.updatePackage);
router.delete('/delete-place/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), packagePlan_controller_1.PackagePlanController.deletePackagePlaces);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), packagePlan_controller_1.PackagePlanController.deletePackage);
exports.PackagePlanRouter = router;

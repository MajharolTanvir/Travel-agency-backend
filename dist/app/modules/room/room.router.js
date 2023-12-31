"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const room_controller_1 = require("./room.controller");
const room_validation_1 = require("./room.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(room_validation_1.RoomZodValidation.createRoom), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.DISTRICT_COORDINATOR, user_1.ENUM_USER_ROLE.MANAGERS), room_controller_1.RoomsController.createRoom);
router.get('/', room_controller_1.RoomsController.getAllRoom);
router.get('/:id', room_controller_1.RoomsController.getSingleRoom);
router.patch('/:id', (0, validateRequest_1.default)(room_validation_1.RoomZodValidation.updateRoom), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.MANAGERS, user_1.ENUM_USER_ROLE.DISTRICT_COORDINATOR), room_controller_1.RoomsController.updateRoom);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.DISTRICT_COORDINATOR, user_1.ENUM_USER_ROLE.MANAGERS), room_controller_1.RoomsController.deleteRoom);
exports.RoomRouter = router;

import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { RoomsController } from './room.controller';
import { RoomZodValidation } from './room.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(RoomZodValidation.createRoom),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.HEAD_MANAGER),
  RoomsController.createRoom
);

router.get(
  '/',
  RoomsController.getAllRoom
);

router.get(
  '/:id',
  RoomsController.getSingleRoom
);

router.patch(
  '/:id',
  validateRequest(RoomZodValidation.updateRoom),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.HEAD_MANAGER),
  RoomsController.updateRoom
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.HEAD_MANAGER),
  RoomsController.deleteRoom
);

export const RoomRouter = router;

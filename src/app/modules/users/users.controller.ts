import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { UsersService } from './users.services';
import { JwtPayload } from 'jsonwebtoken';

const signup = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  const result = await UsersService.signup(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Verification mail sent successfully',
    data: result,
  });
});

const confirmedSignup = catchAsync(async (req: Request, res: Response) => {
  const { userEmail } = req.user as JwtPayload;
  const result = await UsersService.confirmedSignup(req.body, userEmail);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Account has been created successfully',
    data: result,
  });
});

const signIn = catchAsync(async (req: Request, res: Response) => {
  const userData = req.body;
  const result = await UsersService.signIn(userData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User login successfully',
    data: result,
  });
});

const forgetPassword = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body;
  const result = await UsersService.forgetPassword(email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Password reset link sent successfully. Please check your email',
    data: result,
  });
});

const resetPassword = catchAsync(async (req: Request, res: Response) => {
  const token = req.query.token as string;
  const { password } = req.body;
  const result = await UsersService.resetPassword(token, password);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Password reset successfully',
    data: result,
  });
});

const getAllHeadManager = catchAsync(async (req: Request, res: Response) => {
  const result = await UsersService.getAllHeadManager();
  console.log(result);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Head manager retrieved successfully',
    data: result,
  });
});

const getAllCoOrdinator = catchAsync(async (req: Request, res: Response) => {
  const result = await UsersService.getAllCoOrdinator();
  console.log(result);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Coordinators retrieved successfully',
    data: result,
  });
});

const getAllGuide = catchAsync(async (req: Request, res: Response) => {
  const result = await UsersService.getAllGuide();
  console.log(result);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Guides retrieved successfully',
    data: result,
  });
});

export const UsersController = {
  signup,
  confirmedSignup,
  signIn,
  forgetPassword,
  resetPassword,
  getAllHeadManager,
  getAllCoOrdinator,
  getAllGuide,
};

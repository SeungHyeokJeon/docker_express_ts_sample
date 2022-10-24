import express, { Request, Response } from 'express';
import statusCode from '../modules/statusCode';
import message from '../modules/responseMessage';
import util from '../modules/utils';
// import { UserService } from '../services';

const selectUser = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;

  res.json({ Id: userId });
};

export default {
  selectUser,
};

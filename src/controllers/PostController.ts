import express, { Request, Response } from 'express';
import statusCode from '../modules/statusCode';
import message from '../modules/responseMessage';
import util from '../modules/utils';
// import { PostService } from '../services';

const selectPost = async (req: Request, res: Response): Promise<void> => {
  const { postId } = req.params;

  res.json({ postId: postId });
};

export default {
  selectPost,
};

import { Container } from 'inversify';
import { CommentService } from './comment-service.interface.js';
import { CommentEntity, CommentModel } from './comment.entity.js';
import { DefaultCommentService } from './default-comment.service.js';
import { Component } from '../../types/index.js';
import { ModelType } from '@typegoose/typegoose/lib/types.js';
import { Controller } from '../../libs/rest/index.js';
import CommentController from './comment.controller.js';

export function createCommentContainer() {
  const commentContainer = new Container();

  commentContainer.bind<CommentService>(Component.CommentService).to(DefaultCommentService);
  commentContainer.bind<ModelType<CommentEntity>>(Component.CommentModel).toConstantValue(CommentModel);
  commentContainer.bind<Controller>(Component.CommentController).to(CommentController).inSingletonScope();

  return commentContainer;
}

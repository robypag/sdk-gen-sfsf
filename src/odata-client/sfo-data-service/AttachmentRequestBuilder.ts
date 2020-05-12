/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Attachment } from './Attachment';

/**
 * Request builder class for operations supported on the [[Attachment]] entity.
 */
export class AttachmentRequestBuilder extends RequestBuilder<Attachment> {
  /**
   * Returns a request builder for retrieving one `Attachment` entity based on its keys.
   * @param attachmentId Key property. See [[Attachment.attachmentId]].
   * @returns A request builder for creating requests to retrieve one `Attachment` entity based on its keys.
   */
  getByKey(attachmentId: BigNumber): GetByKeyRequestBuilder<Attachment> {
    return new GetByKeyRequestBuilder(Attachment, { attachmentId: attachmentId });
  }

  /**
   * Returns a request builder for querying all `Attachment` entities.
   * @returns A request builder for creating requests to retrieve all `Attachment` entities.
   */
  getAll(): GetAllRequestBuilder<Attachment> {
    return new GetAllRequestBuilder(Attachment);
  }

  /**
   * Returns a request builder for creating a `Attachment` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Attachment`.
   */
  create(entity: Attachment): CreateRequestBuilder<Attachment> {
    return new CreateRequestBuilder(Attachment, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Attachment`.
   * @param attachmentId Key property. See [[Attachment.attachmentId]].
   * @returns A request builder for creating requests that delete an entity of type `Attachment`.
   */
  delete(attachmentId: BigNumber): DeleteRequestBuilder<Attachment>;
  /**
   * Returns a request builder for deleting an entity of type `Attachment`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Attachment` by taking the entity as a parameter.
   */
  delete(entity: Attachment): DeleteRequestBuilder<Attachment>;
  delete(attachmentIdOrEntity: any): DeleteRequestBuilder<Attachment> {
    return new DeleteRequestBuilder(Attachment, attachmentIdOrEntity instanceof Attachment ? attachmentIdOrEntity : { attachmentId: attachmentIdOrEntity! });
  }
}

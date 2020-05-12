/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Photo } from './Photo';

/**
 * Request builder class for operations supported on the [[Photo]] entity.
 */
export class PhotoRequestBuilder extends RequestBuilder<Photo> {
  /**
   * Returns a request builder for retrieving one `Photo` entity based on its keys.
   * @param photoType Key property. See [[Photo.photoType]].
   * @param userId Key property. See [[Photo.userId]].
   * @returns A request builder for creating requests to retrieve one `Photo` entity based on its keys.
   */
  getByKey(photoType: number, userId: string): GetByKeyRequestBuilder<Photo> {
    return new GetByKeyRequestBuilder(Photo, {
      photoType: photoType,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `Photo` entities.
   * @returns A request builder for creating requests to retrieve all `Photo` entities.
   */
  getAll(): GetAllRequestBuilder<Photo> {
    return new GetAllRequestBuilder(Photo);
  }

  /**
   * Returns a request builder for creating a `Photo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Photo`.
   */
  create(entity: Photo): CreateRequestBuilder<Photo> {
    return new CreateRequestBuilder(Photo, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Photo`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Photo`.
   */
  update(entity: Photo): UpdateRequestBuilder<Photo> {
    return new UpdateRequestBuilder(Photo, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Photo`.
   * @param photoType Key property. See [[Photo.photoType]].
   * @param userId Key property. See [[Photo.userId]].
   * @returns A request builder for creating requests that delete an entity of type `Photo`.
   */
  delete(photoType: number, userId: string): DeleteRequestBuilder<Photo>;
  /**
   * Returns a request builder for deleting an entity of type `Photo`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Photo` by taking the entity as a parameter.
   */
  delete(entity: Photo): DeleteRequestBuilder<Photo>;
  delete(photoTypeOrEntity: any, userId?: string): DeleteRequestBuilder<Photo> {
    return new DeleteRequestBuilder(Photo, photoTypeOrEntity instanceof Photo ? photoTypeOrEntity : {
      photoType: photoTypeOrEntity!,
      userId: userId!
    });
  }
}

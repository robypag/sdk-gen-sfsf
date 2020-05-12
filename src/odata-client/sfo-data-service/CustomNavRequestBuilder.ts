/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { CustomNav } from './CustomNav';

/**
 * Request builder class for operations supported on the [[CustomNav]] entity.
 */
export class CustomNavRequestBuilder extends RequestBuilder<CustomNav> {
  /**
   * Returns a request builder for retrieving one `CustomNav` entity based on its keys.
   * @param title Key property. See [[CustomNav.title]].
   * @returns A request builder for creating requests to retrieve one `CustomNav` entity based on its keys.
   */
  getByKey(title: string): GetByKeyRequestBuilder<CustomNav> {
    return new GetByKeyRequestBuilder(CustomNav, { title: title });
  }

  /**
   * Returns a request builder for querying all `CustomNav` entities.
   * @returns A request builder for creating requests to retrieve all `CustomNav` entities.
   */
  getAll(): GetAllRequestBuilder<CustomNav> {
    return new GetAllRequestBuilder(CustomNav);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomNav`.
   * @param title Key property. See [[CustomNav.title]].
   * @returns A request builder for creating requests that delete an entity of type `CustomNav`.
   */
  delete(title: string): DeleteRequestBuilder<CustomNav>;
  /**
   * Returns a request builder for deleting an entity of type `CustomNav`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomNav` by taking the entity as a parameter.
   */
  delete(entity: CustomNav): DeleteRequestBuilder<CustomNav>;
  delete(titleOrEntity: any): DeleteRequestBuilder<CustomNav> {
    return new DeleteRequestBuilder(CustomNav, titleOrEntity instanceof CustomNav ? titleOrEntity : { title: titleOrEntity! });
  }
}

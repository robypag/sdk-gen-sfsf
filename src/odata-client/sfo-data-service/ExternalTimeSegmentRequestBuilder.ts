/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { ExternalTimeSegment } from './ExternalTimeSegment';

/**
 * Request builder class for operations supported on the [[ExternalTimeSegment]] entity.
 */
export class ExternalTimeSegmentRequestBuilder extends RequestBuilder<ExternalTimeSegment> {
  /**
   * Returns a request builder for retrieving one `ExternalTimeSegment` entity based on its keys.
   * @param externalTimeRecordExternalCode Key property. See [[ExternalTimeSegment.externalTimeRecordExternalCode]].
   * @param externalCode Key property. See [[ExternalTimeSegment.externalCode]].
   * @returns A request builder for creating requests to retrieve one `ExternalTimeSegment` entity based on its keys.
   */
  getByKey(externalTimeRecordExternalCode: string, externalCode: string): GetByKeyRequestBuilder<ExternalTimeSegment> {
    return new GetByKeyRequestBuilder(ExternalTimeSegment, {
      ExternalTimeRecord_externalCode: externalTimeRecordExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `ExternalTimeSegment` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalTimeSegment` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalTimeSegment> {
    return new GetAllRequestBuilder(ExternalTimeSegment);
  }

  /**
   * Returns a request builder for creating a `ExternalTimeSegment` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalTimeSegment`.
   */
  create(entity: ExternalTimeSegment): CreateRequestBuilder<ExternalTimeSegment> {
    return new CreateRequestBuilder(ExternalTimeSegment, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ExternalTimeSegment`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExternalTimeSegment`.
   */
  update(entity: ExternalTimeSegment): UpdateRequestBuilder<ExternalTimeSegment> {
    return new UpdateRequestBuilder(ExternalTimeSegment, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ExternalTimeSegment`.
   * @param externalTimeRecordExternalCode Key property. See [[ExternalTimeSegment.externalTimeRecordExternalCode]].
   * @param externalCode Key property. See [[ExternalTimeSegment.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `ExternalTimeSegment`.
   */
  delete(externalTimeRecordExternalCode: string, externalCode: string): DeleteRequestBuilder<ExternalTimeSegment>;
  /**
   * Returns a request builder for deleting an entity of type `ExternalTimeSegment`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExternalTimeSegment` by taking the entity as a parameter.
   */
  delete(entity: ExternalTimeSegment): DeleteRequestBuilder<ExternalTimeSegment>;
  delete(externalTimeRecordExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<ExternalTimeSegment> {
    return new DeleteRequestBuilder(ExternalTimeSegment, externalTimeRecordExternalCodeOrEntity instanceof ExternalTimeSegment ? externalTimeRecordExternalCodeOrEntity : {
      ExternalTimeRecord_externalCode: externalTimeRecordExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}

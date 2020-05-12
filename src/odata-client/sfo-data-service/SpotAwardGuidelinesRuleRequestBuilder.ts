/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SpotAwardGuidelinesRule } from './SpotAwardGuidelinesRule';

/**
 * Request builder class for operations supported on the [[SpotAwardGuidelinesRule]] entity.
 */
export class SpotAwardGuidelinesRuleRequestBuilder extends RequestBuilder<SpotAwardGuidelinesRule> {
  /**
   * Returns a request builder for retrieving one `SpotAwardGuidelinesRule` entity based on its keys.
   * @param spotAwardProgramExternalCode Key property. See [[SpotAwardGuidelinesRule.spotAwardProgramExternalCode]].
   * @param externalCode Key property. See [[SpotAwardGuidelinesRule.externalCode]].
   * @returns A request builder for creating requests to retrieve one `SpotAwardGuidelinesRule` entity based on its keys.
   */
  getByKey(spotAwardProgramExternalCode: string, externalCode: string): GetByKeyRequestBuilder<SpotAwardGuidelinesRule> {
    return new GetByKeyRequestBuilder(SpotAwardGuidelinesRule, {
      SpotAwardProgram_externalCode: spotAwardProgramExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `SpotAwardGuidelinesRule` entities.
   * @returns A request builder for creating requests to retrieve all `SpotAwardGuidelinesRule` entities.
   */
  getAll(): GetAllRequestBuilder<SpotAwardGuidelinesRule> {
    return new GetAllRequestBuilder(SpotAwardGuidelinesRule);
  }

  /**
   * Returns a request builder for creating a `SpotAwardGuidelinesRule` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SpotAwardGuidelinesRule`.
   */
  create(entity: SpotAwardGuidelinesRule): CreateRequestBuilder<SpotAwardGuidelinesRule> {
    return new CreateRequestBuilder(SpotAwardGuidelinesRule, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SpotAwardGuidelinesRule`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SpotAwardGuidelinesRule`.
   */
  update(entity: SpotAwardGuidelinesRule): UpdateRequestBuilder<SpotAwardGuidelinesRule> {
    return new UpdateRequestBuilder(SpotAwardGuidelinesRule, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SpotAwardGuidelinesRule`.
   * @param spotAwardProgramExternalCode Key property. See [[SpotAwardGuidelinesRule.spotAwardProgramExternalCode]].
   * @param externalCode Key property. See [[SpotAwardGuidelinesRule.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `SpotAwardGuidelinesRule`.
   */
  delete(spotAwardProgramExternalCode: string, externalCode: string): DeleteRequestBuilder<SpotAwardGuidelinesRule>;
  /**
   * Returns a request builder for deleting an entity of type `SpotAwardGuidelinesRule`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SpotAwardGuidelinesRule` by taking the entity as a parameter.
   */
  delete(entity: SpotAwardGuidelinesRule): DeleteRequestBuilder<SpotAwardGuidelinesRule>;
  delete(spotAwardProgramExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<SpotAwardGuidelinesRule> {
    return new DeleteRequestBuilder(SpotAwardGuidelinesRule, spotAwardProgramExternalCodeOrEntity instanceof SpotAwardGuidelinesRule ? spotAwardProgramExternalCodeOrEntity : {
      SpotAwardProgram_externalCode: spotAwardProgramExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SpotAwardEligibilityRule } from './SpotAwardEligibilityRule';

/**
 * Request builder class for operations supported on the [[SpotAwardEligibilityRule]] entity.
 */
export class SpotAwardEligibilityRuleRequestBuilder extends RequestBuilder<SpotAwardEligibilityRule> {
  /**
   * Returns a request builder for retrieving one `SpotAwardEligibilityRule` entity based on its keys.
   * @param spotAwardProgramExternalCode Key property. See [[SpotAwardEligibilityRule.spotAwardProgramExternalCode]].
   * @param externalCode Key property. See [[SpotAwardEligibilityRule.externalCode]].
   * @returns A request builder for creating requests to retrieve one `SpotAwardEligibilityRule` entity based on its keys.
   */
  getByKey(spotAwardProgramExternalCode: string, externalCode: string): GetByKeyRequestBuilder<SpotAwardEligibilityRule> {
    return new GetByKeyRequestBuilder(SpotAwardEligibilityRule, {
      SpotAwardProgram_externalCode: spotAwardProgramExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `SpotAwardEligibilityRule` entities.
   * @returns A request builder for creating requests to retrieve all `SpotAwardEligibilityRule` entities.
   */
  getAll(): GetAllRequestBuilder<SpotAwardEligibilityRule> {
    return new GetAllRequestBuilder(SpotAwardEligibilityRule);
  }

  /**
   * Returns a request builder for creating a `SpotAwardEligibilityRule` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SpotAwardEligibilityRule`.
   */
  create(entity: SpotAwardEligibilityRule): CreateRequestBuilder<SpotAwardEligibilityRule> {
    return new CreateRequestBuilder(SpotAwardEligibilityRule, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SpotAwardEligibilityRule`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SpotAwardEligibilityRule`.
   */
  update(entity: SpotAwardEligibilityRule): UpdateRequestBuilder<SpotAwardEligibilityRule> {
    return new UpdateRequestBuilder(SpotAwardEligibilityRule, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SpotAwardEligibilityRule`.
   * @param spotAwardProgramExternalCode Key property. See [[SpotAwardEligibilityRule.spotAwardProgramExternalCode]].
   * @param externalCode Key property. See [[SpotAwardEligibilityRule.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `SpotAwardEligibilityRule`.
   */
  delete(spotAwardProgramExternalCode: string, externalCode: string): DeleteRequestBuilder<SpotAwardEligibilityRule>;
  /**
   * Returns a request builder for deleting an entity of type `SpotAwardEligibilityRule`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SpotAwardEligibilityRule` by taking the entity as a parameter.
   */
  delete(entity: SpotAwardEligibilityRule): DeleteRequestBuilder<SpotAwardEligibilityRule>;
  delete(spotAwardProgramExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<SpotAwardEligibilityRule> {
    return new DeleteRequestBuilder(SpotAwardEligibilityRule, spotAwardProgramExternalCodeOrEntity instanceof SpotAwardEligibilityRule ? spotAwardProgramExternalCodeOrEntity : {
      SpotAwardProgram_externalCode: spotAwardProgramExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}

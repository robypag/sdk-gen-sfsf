/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Onb2RehireCheckParams, Onb2RehireCheckParamsField } from './Onb2RehireCheckParams';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * Onb2OnboardeeDetails
 */
export interface Onb2OnboardeeDetails {
  /**
   * applicationId.
   */
  applicationId: string;
  /**
   * email.
   */
  email: string;
  /**
   * rehireCheckParams.
   * @nullable
   */
  rehireCheckParams?: Onb2RehireCheckParams;
  /**
   * rehireUser.
   * @nullable
   */
  rehireUser?: string;
  /**
   * shouldCancelOnboarding.
   * @nullable
   */
  shouldCancelOnboarding?: boolean;
  /**
   * shouldCreateNewHire.
   * @nullable
   */
  shouldCreateNewHire?: boolean;
  /**
   * userId.
   */
  userId: string;
  /**
   * userName.
   */
  userName: string;
}

/**
 * @deprecated since v1.6.0. Use [[Onb2OnboardeeDetails.build]] instead.
 */
export function createOnb2OnboardeeDetails(json: any): Onb2OnboardeeDetails {
  return Onb2OnboardeeDetails.build(json);
}

/**
 * Onb2OnboardeeDetailsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class Onb2OnboardeeDetailsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[Onb2OnboardeeDetails.applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  applicationId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('applicationId', this, 'Edm.String');
  /**
   * Representation of the [[Onb2OnboardeeDetails.email]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  email: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('email', this, 'Edm.String');
  /**
   * Representation of the [[Onb2OnboardeeDetails.rehireCheckParams]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rehireCheckParams: Onb2RehireCheckParamsField<EntityT> = new Onb2RehireCheckParamsField('rehireCheckParams', this);
  /**
   * Representation of the [[Onb2OnboardeeDetails.rehireUser]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rehireUser: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('rehireUser', this, 'Edm.String');
  /**
   * Representation of the [[Onb2OnboardeeDetails.shouldCancelOnboarding]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shouldCancelOnboarding: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('shouldCancelOnboarding', this, 'Edm.Boolean');
  /**
   * Representation of the [[Onb2OnboardeeDetails.shouldCreateNewHire]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shouldCreateNewHire: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('shouldCreateNewHire', this, 'Edm.Boolean');
  /**
   * Representation of the [[Onb2OnboardeeDetails.userId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('userId', this, 'Edm.String');
  /**
   * Representation of the [[Onb2OnboardeeDetails.userName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('userName', this, 'Edm.String');
}

export namespace Onb2OnboardeeDetails {
  export function build(json: { [keys: string]: FieldType }): Onb2OnboardeeDetails {
    return createComplexType(json, {
      applicationId: (applicationId: string) => ({ applicationId: edmToTs(applicationId, 'Edm.String') }),
      email: (email: string) => ({ email: edmToTs(email, 'Edm.String') }),
      rehireCheckParams: (rehireCheckParams: Onb2RehireCheckParams) => ({ rehireCheckParams: Onb2RehireCheckParams.build(rehireCheckParams) }),
      rehireUser: (rehireUser: string) => ({ rehireUser: edmToTs(rehireUser, 'Edm.String') }),
      shouldCancelOnboarding: (shouldCancelOnboarding: boolean) => ({ shouldCancelOnboarding: edmToTs(shouldCancelOnboarding, 'Edm.Boolean') }),
      shouldCreateNewHire: (shouldCreateNewHire: boolean) => ({ shouldCreateNewHire: edmToTs(shouldCreateNewHire, 'Edm.Boolean') }),
      userId: (userId: string) => ({ userId: edmToTs(userId, 'Edm.String') }),
      userName: (userName: string) => ({ userName: edmToTs(userName, 'Edm.String') })
    });
  }
}

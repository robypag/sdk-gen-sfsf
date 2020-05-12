/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CandidateProfileConversionInfoRequestBuilder } from './CandidateProfileConversionInfoRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CandidateProfileConversionInfo" of service "SFOData".
 */
export class CandidateProfileConversionInfo extends Entity implements CandidateProfileConversionInfoType {
  /**
   * Technical entity name for CandidateProfileConversionInfo.
   */
  static _entityName = 'CandidateProfileConversionInfo';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CandidateProfileConversionInfo.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Alumni Users Sys Id.
   * @nullable
   */
  alumniUsersSysId?: string;
  /**
   * Candidate Id.
   */
  candidateId!: BigNumber;
  /**
   * Is Alumni.
   * @nullable
   */
  isAlumni?: boolean;
  /**
   * Post Conv Ext Email Address1.
   * @nullable
   */
  postConvExtEmailAddress1?: string;
  /**
   * Post Conv Ext Email Address2.
   * @nullable
   */
  postConvExtEmailAddress2?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  alumniUser!: User;

  /**
   * Returns an entity builder to construct instances `CandidateProfileConversionInfo`.
   * @returns A builder that constructs instances of entity type `CandidateProfileConversionInfo`.
   */
  static builder(): EntityBuilderType<CandidateProfileConversionInfo, CandidateProfileConversionInfoTypeForceMandatory> {
    return Entity.entityBuilder(CandidateProfileConversionInfo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CandidateProfileConversionInfo` entity type.
   * @returns A `CandidateProfileConversionInfo` request builder.
   */
  static requestBuilder(): CandidateProfileConversionInfoRequestBuilder {
    return new CandidateProfileConversionInfoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateProfileConversionInfo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CandidateProfileConversionInfo`.
   */
  static customField(fieldName: string): CustomField<CandidateProfileConversionInfo> {
    return Entity.customFieldSelector(fieldName, CandidateProfileConversionInfo);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { User, UserType } from './User';

export interface CandidateProfileConversionInfoType {
  alumniUsersSysId?: string;
  candidateId: BigNumber;
  isAlumni?: boolean;
  postConvExtEmailAddress1?: string;
  postConvExtEmailAddress2?: string;
  alumniUser: UserType;
}

export interface CandidateProfileConversionInfoTypeForceMandatory {
  alumniUsersSysId: string;
  candidateId: BigNumber;
  isAlumni: boolean;
  postConvExtEmailAddress1: string;
  postConvExtEmailAddress2: string;
  alumniUser: UserType;
}

export namespace CandidateProfileConversionInfo {
  /**
   * Static representation of the [[alumniUsersSysId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALUMNI_USERS_SYS_ID: StringField<CandidateProfileConversionInfo> = new StringField('alumniUsersSysId', CandidateProfileConversionInfo, 'Edm.String');
  /**
   * Static representation of the [[candidateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_ID: BigNumberField<CandidateProfileConversionInfo> = new BigNumberField('candidateId', CandidateProfileConversionInfo, 'Edm.Int64');
  /**
   * Static representation of the [[isAlumni]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ALUMNI: BooleanField<CandidateProfileConversionInfo> = new BooleanField('isAlumni', CandidateProfileConversionInfo, 'Edm.Boolean');
  /**
   * Static representation of the [[postConvExtEmailAddress1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POST_CONV_EXT_EMAIL_ADDRESS_1: StringField<CandidateProfileConversionInfo> = new StringField('postConvExtEmailAddress1', CandidateProfileConversionInfo, 'Edm.String');
  /**
   * Static representation of the [[postConvExtEmailAddress2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POST_CONV_EXT_EMAIL_ADDRESS_2: StringField<CandidateProfileConversionInfo> = new StringField('postConvExtEmailAddress2', CandidateProfileConversionInfo, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[alumniUser]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALUMNI_USER: OneToOneLink<CandidateProfileConversionInfo, User> = new OneToOneLink('alumniUser', CandidateProfileConversionInfo, User);
  /**
   * All fields of the CandidateProfileConversionInfo entity.
   */
  export const _allFields: Array<StringField<CandidateProfileConversionInfo> | BigNumberField<CandidateProfileConversionInfo> | BooleanField<CandidateProfileConversionInfo> | OneToOneLink<CandidateProfileConversionInfo, User>> = [
    CandidateProfileConversionInfo.ALUMNI_USERS_SYS_ID,
    CandidateProfileConversionInfo.CANDIDATE_ID,
    CandidateProfileConversionInfo.IS_ALUMNI,
    CandidateProfileConversionInfo.POST_CONV_EXT_EMAIL_ADDRESS_1,
    CandidateProfileConversionInfo.POST_CONV_EXT_EMAIL_ADDRESS_2,
    CandidateProfileConversionInfo.ALUMNI_USER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CandidateProfileConversionInfo> = new AllFields('*', CandidateProfileConversionInfo);
  /**
   * All key fields of the CandidateProfileConversionInfo entity.
   */
  export const _keyFields: Array<Selectable<CandidateProfileConversionInfo>> = [CandidateProfileConversionInfo.CANDIDATE_ID];
  /**
   * Mapping of all key field names to the respective static field property CandidateProfileConversionInfo.
   */
  export const _keys: { [keys: string]: Selectable<CandidateProfileConversionInfo> } = CandidateProfileConversionInfo._keyFields.reduce((acc: { [keys: string]: Selectable<CandidateProfileConversionInfo> }, field: Selectable<CandidateProfileConversionInfo>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

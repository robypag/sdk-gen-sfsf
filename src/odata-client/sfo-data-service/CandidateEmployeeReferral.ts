/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CandidateEmployeeReferralRequestBuilder } from './CandidateEmployeeReferralRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CandidateEmployeeReferral" of service "SFOData".
 */
export class CandidateEmployeeReferral extends Entity implements CandidateEmployeeReferralType {
  /**
   * Technical entity name for CandidateEmployeeReferral.
   */
  static _entityName = 'CandidateEmployeeReferral';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CandidateEmployeeReferral.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * App Status Set Item Id.
   * @nullable
   */
  applicantStatusSetItemId?: BigNumber;
  /**
   * Employee Referral Id.
   */
  candidateEmployeeReferralId!: BigNumber;
  /**
   * Created Date.
   */
  createdDate!: Moment;
  /**
   * Expiration Date.
   * @nullable
   */
  expirationDate?: Moment;
  /**
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * Referral key.
   * @nullable
   */
  referralKey?: string;
  /**
   * Referred By.
   */
  referredBy!: string;
  /**
   * Status.
   * @nullable
   */
  status?: BigNumber;
  /**
   * One-to-one navigation property to the [[CandidateLight]] entity.
   */
  candidate!: CandidateLight;
  /**
   * One-to-one navigation property to the [[JobRequisition]] entity.
   */
  jobRequisition!: JobRequisition;
  /**
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  referralResume!: Attachment;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  user!: User;

  /**
   * Returns an entity builder to construct instances `CandidateEmployeeReferral`.
   * @returns A builder that constructs instances of entity type `CandidateEmployeeReferral`.
   */
  static builder(): EntityBuilderType<CandidateEmployeeReferral, CandidateEmployeeReferralTypeForceMandatory> {
    return Entity.entityBuilder(CandidateEmployeeReferral);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CandidateEmployeeReferral` entity type.
   * @returns A `CandidateEmployeeReferral` request builder.
   */
  static requestBuilder(): CandidateEmployeeReferralRequestBuilder {
    return new CandidateEmployeeReferralRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateEmployeeReferral`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CandidateEmployeeReferral`.
   */
  static customField(fieldName: string): CustomField<CandidateEmployeeReferral> {
    return Entity.customFieldSelector(fieldName, CandidateEmployeeReferral);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { CandidateLight, CandidateLightType } from './CandidateLight';
import { JobRequisition, JobRequisitionType } from './JobRequisition';
import { Attachment, AttachmentType } from './Attachment';
import { User, UserType } from './User';

export interface CandidateEmployeeReferralType {
  applicantStatusSetItemId?: BigNumber;
  candidateEmployeeReferralId: BigNumber;
  createdDate: Moment;
  expirationDate?: Moment;
  lastModifiedDate: Moment;
  referralKey?: string;
  referredBy: string;
  status?: BigNumber;
  candidate: CandidateLightType;
  jobRequisition: JobRequisitionType;
  referralResume: AttachmentType;
  user: UserType;
}

export interface CandidateEmployeeReferralTypeForceMandatory {
  applicantStatusSetItemId: BigNumber;
  candidateEmployeeReferralId: BigNumber;
  createdDate: Moment;
  expirationDate: Moment;
  lastModifiedDate: Moment;
  referralKey: string;
  referredBy: string;
  status: BigNumber;
  candidate: CandidateLightType;
  jobRequisition: JobRequisitionType;
  referralResume: AttachmentType;
  user: UserType;
}

export namespace CandidateEmployeeReferral {
  /**
   * Static representation of the [[applicantStatusSetItemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICANT_STATUS_SET_ITEM_ID: BigNumberField<CandidateEmployeeReferral> = new BigNumberField('applicantStatusSetItemId', CandidateEmployeeReferral, 'Edm.Int64');
  /**
   * Static representation of the [[candidateEmployeeReferralId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_EMPLOYEE_REFERRAL_ID: BigNumberField<CandidateEmployeeReferral> = new BigNumberField('candidateEmployeeReferralId', CandidateEmployeeReferral, 'Edm.Int64');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<CandidateEmployeeReferral> = new DateField('createdDate', CandidateEmployeeReferral, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[expirationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPIRATION_DATE: DateField<CandidateEmployeeReferral> = new DateField('expirationDate', CandidateEmployeeReferral, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<CandidateEmployeeReferral> = new DateField('lastModifiedDate', CandidateEmployeeReferral, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[referralKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERRAL_KEY: StringField<CandidateEmployeeReferral> = new StringField('referralKey', CandidateEmployeeReferral, 'Edm.String');
  /**
   * Static representation of the [[referredBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERRED_BY: StringField<CandidateEmployeeReferral> = new StringField('referredBy', CandidateEmployeeReferral, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: BigNumberField<CandidateEmployeeReferral> = new BigNumberField('status', CandidateEmployeeReferral, 'Edm.Int64');
  /**
   * Static representation of the one-to-one navigation property [[candidate]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE: OneToOneLink<CandidateEmployeeReferral, CandidateLight> = new OneToOneLink('candidate', CandidateEmployeeReferral, CandidateLight);
  /**
   * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQUISITION: OneToOneLink<CandidateEmployeeReferral, JobRequisition> = new OneToOneLink('jobRequisition', CandidateEmployeeReferral, JobRequisition);
  /**
   * Static representation of the one-to-one navigation property [[referralResume]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERRAL_RESUME: OneToOneLink<CandidateEmployeeReferral, Attachment> = new OneToOneLink('referralResume', CandidateEmployeeReferral, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<CandidateEmployeeReferral, User> = new OneToOneLink('user', CandidateEmployeeReferral, User);
  /**
   * All fields of the CandidateEmployeeReferral entity.
   */
  export const _allFields: Array<BigNumberField<CandidateEmployeeReferral> | DateField<CandidateEmployeeReferral> | StringField<CandidateEmployeeReferral> | OneToOneLink<CandidateEmployeeReferral, CandidateLight> | OneToOneLink<CandidateEmployeeReferral, JobRequisition> | OneToOneLink<CandidateEmployeeReferral, Attachment> | OneToOneLink<CandidateEmployeeReferral, User>> = [
    CandidateEmployeeReferral.APPLICANT_STATUS_SET_ITEM_ID,
    CandidateEmployeeReferral.CANDIDATE_EMPLOYEE_REFERRAL_ID,
    CandidateEmployeeReferral.CREATED_DATE,
    CandidateEmployeeReferral.EXPIRATION_DATE,
    CandidateEmployeeReferral.LAST_MODIFIED_DATE,
    CandidateEmployeeReferral.REFERRAL_KEY,
    CandidateEmployeeReferral.REFERRED_BY,
    CandidateEmployeeReferral.STATUS,
    CandidateEmployeeReferral.CANDIDATE,
    CandidateEmployeeReferral.JOB_REQUISITION,
    CandidateEmployeeReferral.REFERRAL_RESUME,
    CandidateEmployeeReferral.USER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CandidateEmployeeReferral> = new AllFields('*', CandidateEmployeeReferral);
  /**
   * All key fields of the CandidateEmployeeReferral entity.
   */
  export const _keyFields: Array<Selectable<CandidateEmployeeReferral>> = [CandidateEmployeeReferral.CANDIDATE_EMPLOYEE_REFERRAL_ID];
  /**
   * Mapping of all key field names to the respective static field property CandidateEmployeeReferral.
   */
  export const _keys: { [keys: string]: Selectable<CandidateEmployeeReferral> } = CandidateEmployeeReferral._keyFields.reduce((acc: { [keys: string]: Selectable<CandidateEmployeeReferral> }, field: Selectable<CandidateEmployeeReferral>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

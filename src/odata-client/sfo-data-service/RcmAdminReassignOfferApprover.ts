/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RcmAdminReassignOfferApproverRequestBuilder } from './RcmAdminReassignOfferApproverRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "RCMAdminReassignOfferApprover" of service "SFOData".
 */
export class RcmAdminReassignOfferApprover extends Entity implements RcmAdminReassignOfferApproverType {
  /**
   * Technical entity name for RcmAdminReassignOfferApprover.
   */
  static _entityName = 'RCMAdminReassignOfferApprover';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for RcmAdminReassignOfferApprover.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * applicationId.
   */
  applicationId!: BigNumber;
  /**
   * candidateName.
   * @nullable
   */
  candidateName?: string;
  /**
   * currUserId.
   */
  currUserId!: string;
  /**
   * jobReqId.
   * @nullable
   */
  jobReqId?: BigNumber;
  /**
   * jobReqTitle.
   * @nullable
   */
  jobReqTitle?: string;
  /**
   * offerDetailId.
   */
  offerDetailId!: BigNumber;
  /**
   * targetUserId.
   * @nullable
   */
  targetUserId?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  currUser!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  targetUser!: User;

  /**
   * Returns an entity builder to construct instances `RcmAdminReassignOfferApprover`.
   * @returns A builder that constructs instances of entity type `RcmAdminReassignOfferApprover`.
   */
  static builder(): EntityBuilderType<RcmAdminReassignOfferApprover, RcmAdminReassignOfferApproverTypeForceMandatory> {
    return Entity.entityBuilder(RcmAdminReassignOfferApprover);
  }

  /**
   * Returns a request builder to construct requests for operations on the `RcmAdminReassignOfferApprover` entity type.
   * @returns A `RcmAdminReassignOfferApprover` request builder.
   */
  static requestBuilder(): RcmAdminReassignOfferApproverRequestBuilder {
    return new RcmAdminReassignOfferApproverRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `RcmAdminReassignOfferApprover`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `RcmAdminReassignOfferApprover`.
   */
  static customField(fieldName: string): CustomField<RcmAdminReassignOfferApprover> {
    return Entity.customFieldSelector(fieldName, RcmAdminReassignOfferApprover);
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

export interface RcmAdminReassignOfferApproverType {
  applicationId: BigNumber;
  candidateName?: string;
  currUserId: string;
  jobReqId?: BigNumber;
  jobReqTitle?: string;
  offerDetailId: BigNumber;
  targetUserId?: string;
  currUser: UserType;
  targetUser: UserType;
}

export interface RcmAdminReassignOfferApproverTypeForceMandatory {
  applicationId: BigNumber;
  candidateName: string;
  currUserId: string;
  jobReqId: BigNumber;
  jobReqTitle: string;
  offerDetailId: BigNumber;
  targetUserId: string;
  currUser: UserType;
  targetUser: UserType;
}

export namespace RcmAdminReassignOfferApprover {
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: BigNumberField<RcmAdminReassignOfferApprover> = new BigNumberField('applicationId', RcmAdminReassignOfferApprover, 'Edm.Int64');
  /**
   * Static representation of the [[candidateName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_NAME: StringField<RcmAdminReassignOfferApprover> = new StringField('candidateName', RcmAdminReassignOfferApprover, 'Edm.String');
  /**
   * Static representation of the [[currUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURR_USER_ID: StringField<RcmAdminReassignOfferApprover> = new StringField('currUserId', RcmAdminReassignOfferApprover, 'Edm.String');
  /**
   * Static representation of the [[jobReqId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_ID: BigNumberField<RcmAdminReassignOfferApprover> = new BigNumberField('jobReqId', RcmAdminReassignOfferApprover, 'Edm.Int64');
  /**
   * Static representation of the [[jobReqTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_TITLE: StringField<RcmAdminReassignOfferApprover> = new StringField('jobReqTitle', RcmAdminReassignOfferApprover, 'Edm.String');
  /**
   * Static representation of the [[offerDetailId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFER_DETAIL_ID: BigNumberField<RcmAdminReassignOfferApprover> = new BigNumberField('offerDetailId', RcmAdminReassignOfferApprover, 'Edm.Int64');
  /**
   * Static representation of the [[targetUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_USER_ID: StringField<RcmAdminReassignOfferApprover> = new StringField('targetUserId', RcmAdminReassignOfferApprover, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[currUser]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURR_USER: OneToOneLink<RcmAdminReassignOfferApprover, User> = new OneToOneLink('currUser', RcmAdminReassignOfferApprover, User);
  /**
   * Static representation of the one-to-one navigation property [[targetUser]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_USER: OneToOneLink<RcmAdminReassignOfferApprover, User> = new OneToOneLink('targetUser', RcmAdminReassignOfferApprover, User);
  /**
   * All fields of the RcmAdminReassignOfferApprover entity.
   */
  export const _allFields: Array<BigNumberField<RcmAdminReassignOfferApprover> | StringField<RcmAdminReassignOfferApprover> | OneToOneLink<RcmAdminReassignOfferApprover, User>> = [
    RcmAdminReassignOfferApprover.APPLICATION_ID,
    RcmAdminReassignOfferApprover.CANDIDATE_NAME,
    RcmAdminReassignOfferApprover.CURR_USER_ID,
    RcmAdminReassignOfferApprover.JOB_REQ_ID,
    RcmAdminReassignOfferApprover.JOB_REQ_TITLE,
    RcmAdminReassignOfferApprover.OFFER_DETAIL_ID,
    RcmAdminReassignOfferApprover.TARGET_USER_ID,
    RcmAdminReassignOfferApprover.CURR_USER,
    RcmAdminReassignOfferApprover.TARGET_USER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<RcmAdminReassignOfferApprover> = new AllFields('*', RcmAdminReassignOfferApprover);
  /**
   * All key fields of the RcmAdminReassignOfferApprover entity.
   */
  export const _keyFields: Array<Selectable<RcmAdminReassignOfferApprover>> = [RcmAdminReassignOfferApprover.APPLICATION_ID, RcmAdminReassignOfferApprover.CURR_USER_ID, RcmAdminReassignOfferApprover.OFFER_DETAIL_ID];
  /**
   * Mapping of all key field names to the respective static field property RcmAdminReassignOfferApprover.
   */
  export const _keys: { [keys: string]: Selectable<RcmAdminReassignOfferApprover> } = RcmAdminReassignOfferApprover._keyFields.reduce((acc: { [keys: string]: Selectable<RcmAdminReassignOfferApprover> }, field: Selectable<RcmAdminReassignOfferApprover>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

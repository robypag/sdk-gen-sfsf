/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RightToReturnRequestBuilder } from './RightToReturnRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "RightToReturn" of service "SFOData".
 */
export class RightToReturn extends Entity implements RightToReturnType {
  /**
   * Technical entity name for RightToReturn.
   */
  static _entityName = 'RightToReturn';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for RightToReturn.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Position_Code.
   * Maximum length: 128.
   */
  positionCode!: string;
  /**
   * Position_Position Start Date.
   */
  positionEffectiveStartDate!: Moment;
  /**
   * User.
   * Maximum length: 100.
   */
  code!: string;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * gaEndJobInfoId.
   * @nullable
   */
  gaEndJobInfoId?: BigNumber;
  /**
   * Event Reason.
   * Maximum length: 32.
   * @nullable
   */
  gaEventReason?: string;
  /**
   * gaStartJobInfoId.
   * @nullable
   */
  gaStartJobInfoId?: BigNumber;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Time Type.
   * Maximum length: 128.
   * @nullable
   */
  loaTimeType?: string;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Reason.
   * Maximum length: 255.
   * @nullable
   */
  reason?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  codeNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[FoEventReason]] entity.
   */
  gaEventReasonNav!: FoEventReason[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[TimeType]] entity.
   */
  loaTimeTypeNav!: TimeType;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  reasonNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `RightToReturn`.
   * @returns A builder that constructs instances of entity type `RightToReturn`.
   */
  static builder(): EntityBuilderType<RightToReturn, RightToReturnTypeForceMandatory> {
    return Entity.entityBuilder(RightToReturn);
  }

  /**
   * Returns a request builder to construct requests for operations on the `RightToReturn` entity type.
   * @returns A `RightToReturn` request builder.
   */
  static requestBuilder(): RightToReturnRequestBuilder {
    return new RightToReturnRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `RightToReturn`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `RightToReturn`.
   */
  static customField(fieldName: string): CustomField<RightToReturn> {
    return Entity.customFieldSelector(fieldName, RightToReturn);
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
import { FoEventReason, FoEventReasonType } from './FoEventReason';
import { TimeType, TimeTypeType } from './TimeType';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface RightToReturnType {
  positionCode: string;
  positionEffectiveStartDate: Moment;
  code: string;
  createdBy?: string;
  createdDateTime?: Moment;
  gaEndJobInfoId?: BigNumber;
  gaEventReason?: string;
  gaStartJobInfoId?: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  loaTimeType?: string;
  mdfSystemRecordStatus?: string;
  reason?: string;
  codeNav: UserType;
  createdByNav: UserType;
  gaEventReasonNav: FoEventReasonType[];
  lastModifiedByNav: UserType;
  loaTimeTypeNav: TimeTypeType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  reasonNav: MdfEnumValueType;
}

export interface RightToReturnTypeForceMandatory {
  positionCode: string;
  positionEffectiveStartDate: Moment;
  code: string;
  createdBy: string;
  createdDateTime: Moment;
  gaEndJobInfoId: BigNumber;
  gaEventReason: string;
  gaStartJobInfoId: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  loaTimeType: string;
  mdfSystemRecordStatus: string;
  reason: string;
  codeNav: UserType;
  createdByNav: UserType;
  gaEventReasonNav: FoEventReasonType[];
  lastModifiedByNav: UserType;
  loaTimeTypeNav: TimeTypeType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  reasonNav: MdfEnumValueType;
}

export namespace RightToReturn {
  /**
   * Static representation of the [[positionCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_CODE: StringField<RightToReturn> = new StringField('Position_code', RightToReturn, 'Edm.String');
  /**
   * Static representation of the [[positionEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_EFFECTIVE_START_DATE: DateField<RightToReturn> = new DateField('Position_effectiveStartDate', RightToReturn, 'Edm.DateTime');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<RightToReturn> = new StringField('code', RightToReturn, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<RightToReturn> = new StringField('createdBy', RightToReturn, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<RightToReturn> = new DateField('createdDateTime', RightToReturn, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[gaEndJobInfoId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GA_END_JOB_INFO_ID: BigNumberField<RightToReturn> = new BigNumberField('gaEndJobInfoId', RightToReturn, 'Edm.Int64');
  /**
   * Static representation of the [[gaEventReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GA_EVENT_REASON: StringField<RightToReturn> = new StringField('gaEventReason', RightToReturn, 'Edm.String');
  /**
   * Static representation of the [[gaStartJobInfoId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GA_START_JOB_INFO_ID: BigNumberField<RightToReturn> = new BigNumberField('gaStartJobInfoId', RightToReturn, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<RightToReturn> = new StringField('lastModifiedBy', RightToReturn, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<RightToReturn> = new DateField('lastModifiedDateTime', RightToReturn, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[loaTimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOA_TIME_TYPE: StringField<RightToReturn> = new StringField('loaTimeType', RightToReturn, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<RightToReturn> = new StringField('mdfSystemRecordStatus', RightToReturn, 'Edm.String');
  /**
   * Static representation of the [[reason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REASON: StringField<RightToReturn> = new StringField('reason', RightToReturn, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[codeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE_NAV: OneToOneLink<RightToReturn, User> = new OneToOneLink('codeNav', RightToReturn, User);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<RightToReturn, User> = new OneToOneLink('createdByNav', RightToReturn, User);
  /**
   * Static representation of the one-to-many navigation property [[gaEventReasonNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GA_EVENT_REASON_NAV: Link<RightToReturn, FoEventReason> = new Link('gaEventReasonNav', RightToReturn, FoEventReason);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<RightToReturn, User> = new OneToOneLink('lastModifiedByNav', RightToReturn, User);
  /**
   * Static representation of the one-to-one navigation property [[loaTimeTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOA_TIME_TYPE_NAV: OneToOneLink<RightToReturn, TimeType> = new OneToOneLink('loaTimeTypeNav', RightToReturn, TimeType);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<RightToReturn, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', RightToReturn, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[reasonNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REASON_NAV: OneToOneLink<RightToReturn, MdfEnumValue> = new OneToOneLink('reasonNav', RightToReturn, MdfEnumValue);
  /**
   * All fields of the RightToReturn entity.
   */
  export const _allFields: Array<StringField<RightToReturn> | DateField<RightToReturn> | BigNumberField<RightToReturn> | OneToOneLink<RightToReturn, User> | Link<RightToReturn, FoEventReason> | OneToOneLink<RightToReturn, TimeType> | OneToOneLink<RightToReturn, MdfEnumValue>> = [
    RightToReturn.POSITION_CODE,
    RightToReturn.POSITION_EFFECTIVE_START_DATE,
    RightToReturn.CODE,
    RightToReturn.CREATED_BY,
    RightToReturn.CREATED_DATE_TIME,
    RightToReturn.GA_END_JOB_INFO_ID,
    RightToReturn.GA_EVENT_REASON,
    RightToReturn.GA_START_JOB_INFO_ID,
    RightToReturn.LAST_MODIFIED_BY,
    RightToReturn.LAST_MODIFIED_DATE_TIME,
    RightToReturn.LOA_TIME_TYPE,
    RightToReturn.MDF_SYSTEM_RECORD_STATUS,
    RightToReturn.REASON,
    RightToReturn.CODE_NAV,
    RightToReturn.CREATED_BY_NAV,
    RightToReturn.GA_EVENT_REASON_NAV,
    RightToReturn.LAST_MODIFIED_BY_NAV,
    RightToReturn.LOA_TIME_TYPE_NAV,
    RightToReturn.MDF_SYSTEM_RECORD_STATUS_NAV,
    RightToReturn.REASON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<RightToReturn> = new AllFields('*', RightToReturn);
  /**
   * All key fields of the RightToReturn entity.
   */
  export const _keyFields: Array<Selectable<RightToReturn>> = [RightToReturn.POSITION_CODE, RightToReturn.POSITION_EFFECTIVE_START_DATE, RightToReturn.CODE];
  /**
   * Mapping of all key field names to the respective static field property RightToReturn.
   */
  export const _keys: { [keys: string]: Selectable<RightToReturn> } = RightToReturn._keyFields.reduce((acc: { [keys: string]: Selectable<RightToReturn> }, field: Selectable<RightToReturn>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

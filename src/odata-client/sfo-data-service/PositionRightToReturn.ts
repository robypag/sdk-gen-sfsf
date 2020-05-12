/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PositionRightToReturnRequestBuilder } from './PositionRightToReturnRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PositionRightToReturn" of service "SFOData".
 */
export class PositionRightToReturn extends Entity implements PositionRightToReturnType {
  /**
   * Technical entity name for PositionRightToReturn.
   */
  static _entityName = 'PositionRightToReturn';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PositionRightToReturn.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * Status.
   * Maximum length: 128.
   * @nullable
   */
  effectiveStatus?: string;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Code.
   */
  externalCode!: BigNumber;
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
   * posTBHEndRowId.
   * @nullable
   */
  posTbhEndRowId?: BigNumber;
  /**
   * posTBHStartRowId.
   * @nullable
   */
  posTbhStartRowId?: BigNumber;
  /**
   * Position.
   * Maximum length: 128.
   * @nullable
   */
  position?: string;
  /**
   * Reason.
   * Maximum length: 128.
   * @nullable
   */
  reason?: string;
  /**
   * rootObjectId.
   * Maximum length: 255.
   * @nullable
   */
  rootObjectId?: string;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * User.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  effectiveStatusNav!: MdfEnumValue;
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
   * One-to-many navigation property to the [[Position]] entity.
   */
  positionNav!: Position[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  reasonNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `PositionRightToReturn`.
   * @returns A builder that constructs instances of entity type `PositionRightToReturn`.
   */
  static builder(): EntityBuilderType<PositionRightToReturn, PositionRightToReturnTypeForceMandatory> {
    return Entity.entityBuilder(PositionRightToReturn);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PositionRightToReturn` entity type.
   * @returns A `PositionRightToReturn` request builder.
   */
  static requestBuilder(): PositionRightToReturnRequestBuilder {
    return new PositionRightToReturnRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PositionRightToReturn`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PositionRightToReturn`.
   */
  static customField(fieldName: string): CustomField<PositionRightToReturn> {
    return Entity.customFieldSelector(fieldName, PositionRightToReturn);
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
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { FoEventReason, FoEventReasonType } from './FoEventReason';
import { TimeType, TimeTypeType } from './TimeType';
import { Position, PositionType } from './Position';
import { WfRequest, WfRequestType } from './WfRequest';

export interface PositionRightToReturnType {
  createdBy?: string;
  createdDateTime?: Moment;
  effectiveStatus?: string;
  endDate?: Moment;
  externalCode: BigNumber;
  gaEndJobInfoId?: BigNumber;
  gaEventReason?: string;
  gaStartJobInfoId?: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  loaTimeType?: string;
  mdfSystemRecordStatus?: string;
  posTbhEndRowId?: BigNumber;
  posTbhStartRowId?: BigNumber;
  position?: string;
  reason?: string;
  rootObjectId?: string;
  startDate?: Moment;
  userId?: string;
  createdByNav: UserType;
  effectiveStatusNav: MdfEnumValueType;
  gaEventReasonNav: FoEventReasonType[];
  lastModifiedByNav: UserType;
  loaTimeTypeNav: TimeTypeType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  positionNav: PositionType[];
  reasonNav: MdfEnumValueType;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export interface PositionRightToReturnTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  effectiveStatus: string;
  endDate: Moment;
  externalCode: BigNumber;
  gaEndJobInfoId: BigNumber;
  gaEventReason: string;
  gaStartJobInfoId: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  loaTimeType: string;
  mdfSystemRecordStatus: string;
  posTbhEndRowId: BigNumber;
  posTbhStartRowId: BigNumber;
  position: string;
  reason: string;
  rootObjectId: string;
  startDate: Moment;
  userId: string;
  createdByNav: UserType;
  effectiveStatusNav: MdfEnumValueType;
  gaEventReasonNav: FoEventReasonType[];
  lastModifiedByNav: UserType;
  loaTimeTypeNav: TimeTypeType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  positionNav: PositionType[];
  reasonNav: MdfEnumValueType;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export namespace PositionRightToReturn {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PositionRightToReturn> = new StringField('createdBy', PositionRightToReturn, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PositionRightToReturn> = new DateField('createdDateTime', PositionRightToReturn, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[effectiveStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS: StringField<PositionRightToReturn> = new StringField('effectiveStatus', PositionRightToReturn, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PositionRightToReturn> = new DateField('endDate', PositionRightToReturn, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PositionRightToReturn> = new BigNumberField('externalCode', PositionRightToReturn, 'Edm.Int64');
  /**
   * Static representation of the [[gaEndJobInfoId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GA_END_JOB_INFO_ID: BigNumberField<PositionRightToReturn> = new BigNumberField('gaEndJobInfoId', PositionRightToReturn, 'Edm.Int64');
  /**
   * Static representation of the [[gaEventReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GA_EVENT_REASON: StringField<PositionRightToReturn> = new StringField('gaEventReason', PositionRightToReturn, 'Edm.String');
  /**
   * Static representation of the [[gaStartJobInfoId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GA_START_JOB_INFO_ID: BigNumberField<PositionRightToReturn> = new BigNumberField('gaStartJobInfoId', PositionRightToReturn, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PositionRightToReturn> = new StringField('lastModifiedBy', PositionRightToReturn, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PositionRightToReturn> = new DateField('lastModifiedDateTime', PositionRightToReturn, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[loaTimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOA_TIME_TYPE: StringField<PositionRightToReturn> = new StringField('loaTimeType', PositionRightToReturn, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PositionRightToReturn> = new StringField('mdfSystemRecordStatus', PositionRightToReturn, 'Edm.String');
  /**
   * Static representation of the [[posTbhEndRowId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_TBH_END_ROW_ID: BigNumberField<PositionRightToReturn> = new BigNumberField('posTBHEndRowId', PositionRightToReturn, 'Edm.Int64');
  /**
   * Static representation of the [[posTbhStartRowId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_TBH_START_ROW_ID: BigNumberField<PositionRightToReturn> = new BigNumberField('posTBHStartRowId', PositionRightToReturn, 'Edm.Int64');
  /**
   * Static representation of the [[position]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION: StringField<PositionRightToReturn> = new StringField('position', PositionRightToReturn, 'Edm.String');
  /**
   * Static representation of the [[reason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REASON: StringField<PositionRightToReturn> = new StringField('reason', PositionRightToReturn, 'Edm.String');
  /**
   * Static representation of the [[rootObjectId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROOT_OBJECT_ID: StringField<PositionRightToReturn> = new StringField('rootObjectId', PositionRightToReturn, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PositionRightToReturn> = new DateField('startDate', PositionRightToReturn, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<PositionRightToReturn> = new StringField('userId', PositionRightToReturn, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PositionRightToReturn, User> = new OneToOneLink('createdByNav', PositionRightToReturn, User);
  /**
   * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS_NAV: OneToOneLink<PositionRightToReturn, MdfEnumValue> = new OneToOneLink('effectiveStatusNav', PositionRightToReturn, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[gaEventReasonNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GA_EVENT_REASON_NAV: Link<PositionRightToReturn, FoEventReason> = new Link('gaEventReasonNav', PositionRightToReturn, FoEventReason);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PositionRightToReturn, User> = new OneToOneLink('lastModifiedByNav', PositionRightToReturn, User);
  /**
   * Static representation of the one-to-one navigation property [[loaTimeTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOA_TIME_TYPE_NAV: OneToOneLink<PositionRightToReturn, TimeType> = new OneToOneLink('loaTimeTypeNav', PositionRightToReturn, TimeType);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PositionRightToReturn, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PositionRightToReturn, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[positionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_NAV: Link<PositionRightToReturn, Position> = new Link('positionNav', PositionRightToReturn, Position);
  /**
   * Static representation of the one-to-one navigation property [[reasonNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REASON_NAV: OneToOneLink<PositionRightToReturn, MdfEnumValue> = new OneToOneLink('reasonNav', PositionRightToReturn, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<PositionRightToReturn, User> = new OneToOneLink('userIdNav', PositionRightToReturn, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<PositionRightToReturn, WfRequest> = new Link('wfRequestNav', PositionRightToReturn, WfRequest);
  /**
   * All fields of the PositionRightToReturn entity.
   */
  export const _allFields: Array<StringField<PositionRightToReturn> | DateField<PositionRightToReturn> | BigNumberField<PositionRightToReturn> | OneToOneLink<PositionRightToReturn, User> | OneToOneLink<PositionRightToReturn, MdfEnumValue> | Link<PositionRightToReturn, FoEventReason> | OneToOneLink<PositionRightToReturn, TimeType> | Link<PositionRightToReturn, Position> | Link<PositionRightToReturn, WfRequest>> = [
    PositionRightToReturn.CREATED_BY,
    PositionRightToReturn.CREATED_DATE_TIME,
    PositionRightToReturn.EFFECTIVE_STATUS,
    PositionRightToReturn.END_DATE,
    PositionRightToReturn.EXTERNAL_CODE,
    PositionRightToReturn.GA_END_JOB_INFO_ID,
    PositionRightToReturn.GA_EVENT_REASON,
    PositionRightToReturn.GA_START_JOB_INFO_ID,
    PositionRightToReturn.LAST_MODIFIED_BY,
    PositionRightToReturn.LAST_MODIFIED_DATE_TIME,
    PositionRightToReturn.LOA_TIME_TYPE,
    PositionRightToReturn.MDF_SYSTEM_RECORD_STATUS,
    PositionRightToReturn.POS_TBH_END_ROW_ID,
    PositionRightToReturn.POS_TBH_START_ROW_ID,
    PositionRightToReturn.POSITION,
    PositionRightToReturn.REASON,
    PositionRightToReturn.ROOT_OBJECT_ID,
    PositionRightToReturn.START_DATE,
    PositionRightToReturn.USER_ID,
    PositionRightToReturn.CREATED_BY_NAV,
    PositionRightToReturn.EFFECTIVE_STATUS_NAV,
    PositionRightToReturn.GA_EVENT_REASON_NAV,
    PositionRightToReturn.LAST_MODIFIED_BY_NAV,
    PositionRightToReturn.LOA_TIME_TYPE_NAV,
    PositionRightToReturn.MDF_SYSTEM_RECORD_STATUS_NAV,
    PositionRightToReturn.POSITION_NAV,
    PositionRightToReturn.REASON_NAV,
    PositionRightToReturn.USER_ID_NAV,
    PositionRightToReturn.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PositionRightToReturn> = new AllFields('*', PositionRightToReturn);
  /**
   * All key fields of the PositionRightToReturn entity.
   */
  export const _keyFields: Array<Selectable<PositionRightToReturn>> = [PositionRightToReturn.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PositionRightToReturn.
   */
  export const _keys: { [keys: string]: Selectable<PositionRightToReturn> } = PositionRightToReturn._keyFields.reduce((acc: { [keys: string]: Selectable<PositionRightToReturn> }, field: Selectable<PositionRightToReturn>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

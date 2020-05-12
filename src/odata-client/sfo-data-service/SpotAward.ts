/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SpotAwardRequestBuilder } from './SpotAwardRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SpotAward" of service "SFOData".
 */
export class SpotAward extends Entity implements SpotAwardType {
  /**
   * Technical entity name for SpotAward.
   */
  static _entityName = 'SpotAward';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SpotAward.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Approval Status.
   * Maximum length: 128.
   * @nullable
   */
  approvalStatus?: string;
  /**
   * Approved Date.
   * @nullable
   */
  approvedDate?: Moment;
  /**
   * Award Amount.
   * @nullable
   */
  awardAmount?: BigNumber;
  /**
   * Budget Holder.
   * Maximum length: 100.
   * @nullable
   */
  budgetHolderId?: string;
  /**
   * Award Category.
   * Maximum length: 128.
   * @nullable
   */
  category?: string;
  /**
   * Message to Approvers.
   * Maximum length: 4000.
   * @nullable
   */
  commentForApprovers?: string;
  /**
   * Message to Recipient.
   * Maximum length: 4000.
   * @nullable
   */
  commentForReceiver?: string;
  /**
   * createdBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * Request Date.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  currency?: string;
  /**
   * externalCode.
   */
  externalCode!: BigNumber;
  /**
   * Guideline Amount.
   * @nullable
   */
  guidelineAmount?: BigNumber;
  /**
   * lastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Award Level.
   * Maximum length: 128.
   * @nullable
   */
  level?: string;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Nominator.
   * Maximum length: 100.
   * @nullable
   */
  nominatorId?: string;
  /**
   * mdfSystemRecordId.
   * Maximum length: 255.
   * @nullable
   */
  recordId?: string;
  /**
   * Spot Award Program.
   * Maximum length: 128.
   * @nullable
   */
  spotAwardProgram?: string;
  /**
   * Award Recipient.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;
  /**
   * workflowRequestId.
   * @nullable
   */
  workflowRequestId?: BigNumber;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  approvalStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  budgetHolderIdNav!: User;
  /**
   * One-to-one navigation property to the [[SpotAwardCategory]] entity.
   */
  categoryNav!: SpotAwardCategory;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[SpotAwardLevel]] entity.
   */
  levelNav!: SpotAwardLevel;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  nominatorIdNav!: User;
  /**
   * One-to-one navigation property to the [[SpotAwardProgram]] entity.
   */
  spotAwardProgramNav!: SpotAwardProgram;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `SpotAward`.
   * @returns A builder that constructs instances of entity type `SpotAward`.
   */
  static builder(): EntityBuilderType<SpotAward, SpotAwardTypeForceMandatory> {
    return Entity.entityBuilder(SpotAward);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SpotAward` entity type.
   * @returns A `SpotAward` request builder.
   */
  static requestBuilder(): SpotAwardRequestBuilder {
    return new SpotAwardRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAward`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SpotAward`.
   */
  static customField(fieldName: string): CustomField<SpotAward> {
    return Entity.customFieldSelector(fieldName, SpotAward);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { User, UserType } from './User';
import { SpotAwardCategory, SpotAwardCategoryType } from './SpotAwardCategory';
import { SpotAwardLevel, SpotAwardLevelType } from './SpotAwardLevel';
import { SpotAwardProgram, SpotAwardProgramType } from './SpotAwardProgram';
import { WfRequest, WfRequestType } from './WfRequest';

export interface SpotAwardType {
  approvalStatus?: string;
  approvedDate?: Moment;
  awardAmount?: BigNumber;
  budgetHolderId?: string;
  category?: string;
  commentForApprovers?: string;
  commentForReceiver?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  currency?: string;
  externalCode: BigNumber;
  guidelineAmount?: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  level?: string;
  mdfSystemRecordStatus?: string;
  nominatorId?: string;
  recordId?: string;
  spotAwardProgram?: string;
  userId?: string;
  workflowRequestId?: BigNumber;
  approvalStatusNav: MdfEnumValueType;
  budgetHolderIdNav: UserType;
  categoryNav: SpotAwardCategoryType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  levelNav: SpotAwardLevelType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nominatorIdNav: UserType;
  spotAwardProgramNav: SpotAwardProgramType;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export interface SpotAwardTypeForceMandatory {
  approvalStatus: string;
  approvedDate: Moment;
  awardAmount: BigNumber;
  budgetHolderId: string;
  category: string;
  commentForApprovers: string;
  commentForReceiver: string;
  createdBy: string;
  createdDateTime: Moment;
  currency: string;
  externalCode: BigNumber;
  guidelineAmount: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  level: string;
  mdfSystemRecordStatus: string;
  nominatorId: string;
  recordId: string;
  spotAwardProgram: string;
  userId: string;
  workflowRequestId: BigNumber;
  approvalStatusNav: MdfEnumValueType;
  budgetHolderIdNav: UserType;
  categoryNav: SpotAwardCategoryType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  levelNav: SpotAwardLevelType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nominatorIdNav: UserType;
  spotAwardProgramNav: SpotAwardProgramType;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export namespace SpotAward {
  /**
   * Static representation of the [[approvalStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVAL_STATUS: StringField<SpotAward> = new StringField('approvalStatus', SpotAward, 'Edm.String');
  /**
   * Static representation of the [[approvedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVED_DATE: DateField<SpotAward> = new DateField('approvedDate', SpotAward, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[awardAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AWARD_AMOUNT: BigNumberField<SpotAward> = new BigNumberField('awardAmount', SpotAward, 'Edm.Decimal');
  /**
   * Static representation of the [[budgetHolderId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUDGET_HOLDER_ID: StringField<SpotAward> = new StringField('budgetHolderId', SpotAward, 'Edm.String');
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<SpotAward> = new StringField('category', SpotAward, 'Edm.String');
  /**
   * Static representation of the [[commentForApprovers]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT_FOR_APPROVERS: StringField<SpotAward> = new StringField('commentForApprovers', SpotAward, 'Edm.String');
  /**
   * Static representation of the [[commentForReceiver]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT_FOR_RECEIVER: StringField<SpotAward> = new StringField('commentForReceiver', SpotAward, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<SpotAward> = new StringField('createdBy', SpotAward, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<SpotAward> = new DateField('createdDateTime', SpotAward, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<SpotAward> = new StringField('currency', SpotAward, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<SpotAward> = new BigNumberField('externalCode', SpotAward, 'Edm.Int64');
  /**
   * Static representation of the [[guidelineAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GUIDELINE_AMOUNT: BigNumberField<SpotAward> = new BigNumberField('guidelineAmount', SpotAward, 'Edm.Decimal');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<SpotAward> = new StringField('lastModifiedBy', SpotAward, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<SpotAward> = new DateField('lastModifiedDateTime', SpotAward, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[level]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEVEL: StringField<SpotAward> = new StringField('level', SpotAward, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAward> = new StringField('mdfSystemRecordStatus', SpotAward, 'Edm.String');
  /**
   * Static representation of the [[nominatorId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOMINATOR_ID: StringField<SpotAward> = new StringField('nominatorId', SpotAward, 'Edm.String');
  /**
   * Static representation of the [[recordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_ID: StringField<SpotAward> = new StringField('recordId', SpotAward, 'Edm.String');
  /**
   * Static representation of the [[spotAwardProgram]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPOT_AWARD_PROGRAM: StringField<SpotAward> = new StringField('spotAwardProgram', SpotAward, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<SpotAward> = new StringField('userId', SpotAward, 'Edm.String');
  /**
   * Static representation of the [[workflowRequestId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKFLOW_REQUEST_ID: BigNumberField<SpotAward> = new BigNumberField('workflowRequestId', SpotAward, 'Edm.Int64');
  /**
   * Static representation of the one-to-one navigation property [[approvalStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVAL_STATUS_NAV: OneToOneLink<SpotAward, MdfEnumValue> = new OneToOneLink('approvalStatusNav', SpotAward, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[budgetHolderIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUDGET_HOLDER_ID_NAV: OneToOneLink<SpotAward, User> = new OneToOneLink('budgetHolderIdNav', SpotAward, User);
  /**
   * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_NAV: OneToOneLink<SpotAward, SpotAwardCategory> = new OneToOneLink('categoryNav', SpotAward, SpotAwardCategory);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<SpotAward, User> = new OneToOneLink('createdByNav', SpotAward, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAward, User> = new OneToOneLink('lastModifiedByNav', SpotAward, User);
  /**
   * Static representation of the one-to-one navigation property [[levelNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEVEL_NAV: OneToOneLink<SpotAward, SpotAwardLevel> = new OneToOneLink('levelNav', SpotAward, SpotAwardLevel);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAward, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', SpotAward, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[nominatorIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOMINATOR_ID_NAV: OneToOneLink<SpotAward, User> = new OneToOneLink('nominatorIdNav', SpotAward, User);
  /**
   * Static representation of the one-to-one navigation property [[spotAwardProgramNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPOT_AWARD_PROGRAM_NAV: OneToOneLink<SpotAward, SpotAwardProgram> = new OneToOneLink('spotAwardProgramNav', SpotAward, SpotAwardProgram);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<SpotAward, User> = new OneToOneLink('userIdNav', SpotAward, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<SpotAward, WfRequest> = new Link('wfRequestNav', SpotAward, WfRequest);
  /**
   * All fields of the SpotAward entity.
   */
  export const _allFields: Array<StringField<SpotAward> | DateField<SpotAward> | BigNumberField<SpotAward> | OneToOneLink<SpotAward, MdfEnumValue> | OneToOneLink<SpotAward, User> | OneToOneLink<SpotAward, SpotAwardCategory> | OneToOneLink<SpotAward, SpotAwardLevel> | OneToOneLink<SpotAward, SpotAwardProgram> | Link<SpotAward, WfRequest>> = [
    SpotAward.APPROVAL_STATUS,
    SpotAward.APPROVED_DATE,
    SpotAward.AWARD_AMOUNT,
    SpotAward.BUDGET_HOLDER_ID,
    SpotAward.CATEGORY,
    SpotAward.COMMENT_FOR_APPROVERS,
    SpotAward.COMMENT_FOR_RECEIVER,
    SpotAward.CREATED_BY,
    SpotAward.CREATED_DATE_TIME,
    SpotAward.CURRENCY,
    SpotAward.EXTERNAL_CODE,
    SpotAward.GUIDELINE_AMOUNT,
    SpotAward.LAST_MODIFIED_BY,
    SpotAward.LAST_MODIFIED_DATE_TIME,
    SpotAward.LEVEL,
    SpotAward.MDF_SYSTEM_RECORD_STATUS,
    SpotAward.NOMINATOR_ID,
    SpotAward.RECORD_ID,
    SpotAward.SPOT_AWARD_PROGRAM,
    SpotAward.USER_ID,
    SpotAward.WORKFLOW_REQUEST_ID,
    SpotAward.APPROVAL_STATUS_NAV,
    SpotAward.BUDGET_HOLDER_ID_NAV,
    SpotAward.CATEGORY_NAV,
    SpotAward.CREATED_BY_NAV,
    SpotAward.LAST_MODIFIED_BY_NAV,
    SpotAward.LEVEL_NAV,
    SpotAward.MDF_SYSTEM_RECORD_STATUS_NAV,
    SpotAward.NOMINATOR_ID_NAV,
    SpotAward.SPOT_AWARD_PROGRAM_NAV,
    SpotAward.USER_ID_NAV,
    SpotAward.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SpotAward> = new AllFields('*', SpotAward);
  /**
   * All key fields of the SpotAward entity.
   */
  export const _keyFields: Array<Selectable<SpotAward>> = [SpotAward.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property SpotAward.
   */
  export const _keys: { [keys: string]: Selectable<SpotAward> } = SpotAward._keyFields.reduce((acc: { [keys: string]: Selectable<SpotAward> }, field: Selectable<SpotAward>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

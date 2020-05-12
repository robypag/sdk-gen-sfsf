/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoWfConfigStepApproverRequestBuilder } from './FoWfConfigStepApproverRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOWfConfigStepApprover" of service "SFOData".
 */
export class FoWfConfigStepApprover extends Entity implements FoWfConfigStepApproverType {
  /**
   * Technical entity name for FoWfConfigStepApprover.
   */
  static _entityName = 'FOWfConfigStepApprover';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoWfConfigStepApprover.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Edit Transaction.
   * @nullable
   */
  actionType?: string;
  /**
   * approverPositionRelationship.
   * @nullable
   */
  approverPositionRelationship?: string;
  /**
   * Approver Role.
   * @nullable
   */
  approverRole?: string;
  /**
   * Approver Type.
   * Maximum length: 32.
   * @nullable
   */
  approverType?: string;
  /**
   * Context.
   * Maximum length: 32.
   * @nullable
   */
  context?: string;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created Date Time.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * emailConfiguration.
   * Maximum length: 128.
   * @nullable
   */
  emailConfiguration?: string;
  /**
   * externalCode.
   */
  externalCode!: string;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date Time.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * relationshipToApprover.
   * @nullable
   */
  relationshipToApprover?: string;
  /**
   * relationshipToPosition.
   * @nullable
   */
  relationshipToPosition?: string;
  /**
   * respectRBP.
   * @nullable
   */
  respectRbp?: boolean;
  /**
   * skipType.
   * @nullable
   */
  skipType?: string;
  /**
   * stepNum.
   */
  stepNum!: BigNumber;
  /**
   * One-to-many navigation property to the [[FoDynamicRole]] entity.
   */
  approverDynamicRoleNav!: FoDynamicRole[];
  /**
   * One-to-one navigation property to the [[DynamicGroup]] entity.
   */
  approverGroupNav!: DynamicGroup;
  /**
   * One-to-many navigation property to the [[Position]] entity.
   */
  approverPositionNav!: Position[];

  /**
   * Returns an entity builder to construct instances `FoWfConfigStepApprover`.
   * @returns A builder that constructs instances of entity type `FoWfConfigStepApprover`.
   */
  static builder(): EntityBuilderType<FoWfConfigStepApprover, FoWfConfigStepApproverTypeForceMandatory> {
    return Entity.entityBuilder(FoWfConfigStepApprover);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoWfConfigStepApprover` entity type.
   * @returns A `FoWfConfigStepApprover` request builder.
   */
  static requestBuilder(): FoWfConfigStepApproverRequestBuilder {
    return new FoWfConfigStepApproverRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoWfConfigStepApprover`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoWfConfigStepApprover`.
   */
  static customField(fieldName: string): CustomField<FoWfConfigStepApprover> {
    return Entity.customFieldSelector(fieldName, FoWfConfigStepApprover);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoDynamicRole, FoDynamicRoleType } from './FoDynamicRole';
import { DynamicGroup, DynamicGroupType } from './DynamicGroup';
import { Position, PositionType } from './Position';

export interface FoWfConfigStepApproverType {
  actionType?: string;
  approverPositionRelationship?: string;
  approverRole?: string;
  approverType?: string;
  context?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  emailConfiguration?: string;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  relationshipToApprover?: string;
  relationshipToPosition?: string;
  respectRbp?: boolean;
  skipType?: string;
  stepNum: BigNumber;
  approverDynamicRoleNav: FoDynamicRoleType[];
  approverGroupNav: DynamicGroupType;
  approverPositionNav: PositionType[];
}

export interface FoWfConfigStepApproverTypeForceMandatory {
  actionType: string;
  approverPositionRelationship: string;
  approverRole: string;
  approverType: string;
  context: string;
  createdBy: string;
  createdDateTime: Moment;
  emailConfiguration: string;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  relationshipToApprover: string;
  relationshipToPosition: string;
  respectRbp: boolean;
  skipType: string;
  stepNum: BigNumber;
  approverDynamicRoleNav: FoDynamicRoleType[];
  approverGroupNav: DynamicGroupType;
  approverPositionNav: PositionType[];
}

export namespace FoWfConfigStepApprover {
  /**
   * Static representation of the [[actionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTION_TYPE: StringField<FoWfConfigStepApprover> = new StringField('actionType', FoWfConfigStepApprover, 'Edm.String');
  /**
   * Static representation of the [[approverPositionRelationship]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVER_POSITION_RELATIONSHIP: StringField<FoWfConfigStepApprover> = new StringField('approverPositionRelationship', FoWfConfigStepApprover, 'Edm.String');
  /**
   * Static representation of the [[approverRole]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVER_ROLE: StringField<FoWfConfigStepApprover> = new StringField('approverRole', FoWfConfigStepApprover, 'Edm.String');
  /**
   * Static representation of the [[approverType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVER_TYPE: StringField<FoWfConfigStepApprover> = new StringField('approverType', FoWfConfigStepApprover, 'Edm.String');
  /**
   * Static representation of the [[context]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTEXT: StringField<FoWfConfigStepApprover> = new StringField('context', FoWfConfigStepApprover, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoWfConfigStepApprover> = new StringField('createdBy', FoWfConfigStepApprover, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoWfConfigStepApprover> = new DateField('createdDateTime', FoWfConfigStepApprover, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[emailConfiguration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_CONFIGURATION: StringField<FoWfConfigStepApprover> = new StringField('emailConfiguration', FoWfConfigStepApprover, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoWfConfigStepApprover> = new StringField('externalCode', FoWfConfigStepApprover, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoWfConfigStepApprover> = new StringField('lastModifiedBy', FoWfConfigStepApprover, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoWfConfigStepApprover> = new DateField('lastModifiedDateTime', FoWfConfigStepApprover, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[relationshipToApprover]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATIONSHIP_TO_APPROVER: StringField<FoWfConfigStepApprover> = new StringField('relationshipToApprover', FoWfConfigStepApprover, 'Edm.String');
  /**
   * Static representation of the [[relationshipToPosition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATIONSHIP_TO_POSITION: StringField<FoWfConfigStepApprover> = new StringField('relationshipToPosition', FoWfConfigStepApprover, 'Edm.String');
  /**
   * Static representation of the [[respectRbp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESPECT_RBP: BooleanField<FoWfConfigStepApprover> = new BooleanField('respectRBP', FoWfConfigStepApprover, 'Edm.Boolean');
  /**
   * Static representation of the [[skipType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SKIP_TYPE: StringField<FoWfConfigStepApprover> = new StringField('skipType', FoWfConfigStepApprover, 'Edm.String');
  /**
   * Static representation of the [[stepNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STEP_NUM: BigNumberField<FoWfConfigStepApprover> = new BigNumberField('stepNum', FoWfConfigStepApprover, 'Edm.Int64');
  /**
   * Static representation of the one-to-many navigation property [[approverDynamicRoleNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVER_DYNAMIC_ROLE_NAV: Link<FoWfConfigStepApprover, FoDynamicRole> = new Link('approverDynamicRoleNav', FoWfConfigStepApprover, FoDynamicRole);
  /**
   * Static representation of the one-to-one navigation property [[approverGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVER_GROUP_NAV: OneToOneLink<FoWfConfigStepApprover, DynamicGroup> = new OneToOneLink('approverGroupNav', FoWfConfigStepApprover, DynamicGroup);
  /**
   * Static representation of the one-to-many navigation property [[approverPositionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVER_POSITION_NAV: Link<FoWfConfigStepApprover, Position> = new Link('approverPositionNav', FoWfConfigStepApprover, Position);
  /**
   * All fields of the FoWfConfigStepApprover entity.
   */
  export const _allFields: Array<StringField<FoWfConfigStepApprover> | DateField<FoWfConfigStepApprover> | BooleanField<FoWfConfigStepApprover> | BigNumberField<FoWfConfigStepApprover> | Link<FoWfConfigStepApprover, FoDynamicRole> | OneToOneLink<FoWfConfigStepApprover, DynamicGroup> | Link<FoWfConfigStepApprover, Position>> = [
    FoWfConfigStepApprover.ACTION_TYPE,
    FoWfConfigStepApprover.APPROVER_POSITION_RELATIONSHIP,
    FoWfConfigStepApprover.APPROVER_ROLE,
    FoWfConfigStepApprover.APPROVER_TYPE,
    FoWfConfigStepApprover.CONTEXT,
    FoWfConfigStepApprover.CREATED_BY,
    FoWfConfigStepApprover.CREATED_DATE_TIME,
    FoWfConfigStepApprover.EMAIL_CONFIGURATION,
    FoWfConfigStepApprover.EXTERNAL_CODE,
    FoWfConfigStepApprover.LAST_MODIFIED_BY,
    FoWfConfigStepApprover.LAST_MODIFIED_DATE_TIME,
    FoWfConfigStepApprover.RELATIONSHIP_TO_APPROVER,
    FoWfConfigStepApprover.RELATIONSHIP_TO_POSITION,
    FoWfConfigStepApprover.RESPECT_RBP,
    FoWfConfigStepApprover.SKIP_TYPE,
    FoWfConfigStepApprover.STEP_NUM,
    FoWfConfigStepApprover.APPROVER_DYNAMIC_ROLE_NAV,
    FoWfConfigStepApprover.APPROVER_GROUP_NAV,
    FoWfConfigStepApprover.APPROVER_POSITION_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoWfConfigStepApprover> = new AllFields('*', FoWfConfigStepApprover);
  /**
   * All key fields of the FoWfConfigStepApprover entity.
   */
  export const _keyFields: Array<Selectable<FoWfConfigStepApprover>> = [FoWfConfigStepApprover.EXTERNAL_CODE, FoWfConfigStepApprover.STEP_NUM];
  /**
   * Mapping of all key field names to the respective static field property FoWfConfigStepApprover.
   */
  export const _keys: { [keys: string]: Selectable<FoWfConfigStepApprover> } = FoWfConfigStepApprover._keyFields.reduce((acc: { [keys: string]: Selectable<FoWfConfigStepApprover> }, field: Selectable<FoWfConfigStepApprover>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

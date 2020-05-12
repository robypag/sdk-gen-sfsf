/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WfRequestParticipatorRequestBuilder } from './WfRequestParticipatorRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "WfRequestParticipator" of service "SFOData".
 */
export class WfRequestParticipator extends Entity implements WfRequestParticipatorType {
  /**
   * Technical entity name for WfRequestParticipator.
   */
  static _entityName = 'WfRequestParticipator';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for WfRequestParticipator.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Actor Type.
   * Maximum length: 32.
   * @nullable
   */
  actorType?: string;
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
   * Created On.
   * @nullable
   */
  createdOn?: Moment;
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
   * Last Modified On.
   * @nullable
   */
  lastModifiedOn?: Moment;
  /**
   * Owner Id.
   * Maximum length: 100.
   * @nullable
   */
  ownerId?: string;
  /**
   * Participator Type.
   * Maximum length: 32.
   * @nullable
   */
  participatorType?: string;
  /**
   * Processing Order.
   * @nullable
   */
  processingOrder?: BigNumber;
  /**
   * Related To.
   * Maximum length: 32.
   * @nullable
   */
  relatedTo?: string;
  /**
   * Role Id.
   * Maximum length: 100.
   * @nullable
   */
  roleId?: string;
  /**
   * Workflow Request Id.
   * @nullable
   */
  wfRequestId?: BigNumber;
  /**
   * Workflow Request Participator Id.
   */
  wfRequestParticipatorId!: BigNumber;
  /**
   * One-to-one navigation property to the [[DynamicGroup]] entity.
   */
  dynamicGroupNav!: DynamicGroup;
  /**
   * One-to-one navigation property to the [[FoDynamicRole]] entity.
   */
  dynamicRoleNav!: FoDynamicRole;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  ownerNav!: User;
  /**
   * One-to-many navigation property to the [[Position]] entity.
   */
  positionNav!: Position[];

  /**
   * Returns an entity builder to construct instances `WfRequestParticipator`.
   * @returns A builder that constructs instances of entity type `WfRequestParticipator`.
   */
  static builder(): EntityBuilderType<WfRequestParticipator, WfRequestParticipatorTypeForceMandatory> {
    return Entity.entityBuilder(WfRequestParticipator);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WfRequestParticipator` entity type.
   * @returns A `WfRequestParticipator` request builder.
   */
  static requestBuilder(): WfRequestParticipatorRequestBuilder {
    return new WfRequestParticipatorRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WfRequestParticipator`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WfRequestParticipator`.
   */
  static customField(fieldName: string): CustomField<WfRequestParticipator> {
    return Entity.customFieldSelector(fieldName, WfRequestParticipator);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { DynamicGroup, DynamicGroupType } from './DynamicGroup';
import { FoDynamicRole, FoDynamicRoleType } from './FoDynamicRole';
import { User, UserType } from './User';
import { Position, PositionType } from './Position';

export interface WfRequestParticipatorType {
  actorType?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  ownerId?: string;
  participatorType?: string;
  processingOrder?: BigNumber;
  relatedTo?: string;
  roleId?: string;
  wfRequestId?: BigNumber;
  wfRequestParticipatorId: BigNumber;
  dynamicGroupNav: DynamicGroupType;
  dynamicRoleNav: FoDynamicRoleType;
  ownerNav: UserType;
  positionNav: PositionType[];
}

export interface WfRequestParticipatorTypeForceMandatory {
  actorType: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  ownerId: string;
  participatorType: string;
  processingOrder: BigNumber;
  relatedTo: string;
  roleId: string;
  wfRequestId: BigNumber;
  wfRequestParticipatorId: BigNumber;
  dynamicGroupNav: DynamicGroupType;
  dynamicRoleNav: FoDynamicRoleType;
  ownerNav: UserType;
  positionNav: PositionType[];
}

export namespace WfRequestParticipator {
  /**
   * Static representation of the [[actorType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTOR_TYPE: StringField<WfRequestParticipator> = new StringField('actorType', WfRequestParticipator, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<WfRequestParticipator> = new StringField('createdBy', WfRequestParticipator, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<WfRequestParticipator> = new DateField('createdDateTime', WfRequestParticipator, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<WfRequestParticipator> = new DateField('createdOn', WfRequestParticipator, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<WfRequestParticipator> = new StringField('lastModifiedBy', WfRequestParticipator, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<WfRequestParticipator> = new DateField('lastModifiedDateTime', WfRequestParticipator, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<WfRequestParticipator> = new DateField('lastModifiedOn', WfRequestParticipator, 'Edm.DateTime');
  /**
   * Static representation of the [[ownerId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER_ID: StringField<WfRequestParticipator> = new StringField('ownerId', WfRequestParticipator, 'Edm.String');
  /**
   * Static representation of the [[participatorType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPATOR_TYPE: StringField<WfRequestParticipator> = new StringField('participatorType', WfRequestParticipator, 'Edm.String');
  /**
   * Static representation of the [[processingOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROCESSING_ORDER: BigNumberField<WfRequestParticipator> = new BigNumberField('processingOrder', WfRequestParticipator, 'Edm.Int64');
  /**
   * Static representation of the [[relatedTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_TO: StringField<WfRequestParticipator> = new StringField('relatedTo', WfRequestParticipator, 'Edm.String');
  /**
   * Static representation of the [[roleId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_ID: StringField<WfRequestParticipator> = new StringField('roleId', WfRequestParticipator, 'Edm.String');
  /**
   * Static representation of the [[wfRequestId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_ID: BigNumberField<WfRequestParticipator> = new BigNumberField('wfRequestId', WfRequestParticipator, 'Edm.Int64');
  /**
   * Static representation of the [[wfRequestParticipatorId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_PARTICIPATOR_ID: BigNumberField<WfRequestParticipator> = new BigNumberField('wfRequestParticipatorId', WfRequestParticipator, 'Edm.Int64');
  /**
   * Static representation of the one-to-one navigation property [[dynamicGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DYNAMIC_GROUP_NAV: OneToOneLink<WfRequestParticipator, DynamicGroup> = new OneToOneLink('dynamicGroupNav', WfRequestParticipator, DynamicGroup);
  /**
   * Static representation of the one-to-one navigation property [[dynamicRoleNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DYNAMIC_ROLE_NAV: OneToOneLink<WfRequestParticipator, FoDynamicRole> = new OneToOneLink('dynamicRoleNav', WfRequestParticipator, FoDynamicRole);
  /**
   * Static representation of the one-to-one navigation property [[ownerNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER_NAV: OneToOneLink<WfRequestParticipator, User> = new OneToOneLink('ownerNav', WfRequestParticipator, User);
  /**
   * Static representation of the one-to-many navigation property [[positionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_NAV: Link<WfRequestParticipator, Position> = new Link('positionNav', WfRequestParticipator, Position);
  /**
   * All fields of the WfRequestParticipator entity.
   */
  export const _allFields: Array<StringField<WfRequestParticipator> | DateField<WfRequestParticipator> | BigNumberField<WfRequestParticipator> | OneToOneLink<WfRequestParticipator, DynamicGroup> | OneToOneLink<WfRequestParticipator, FoDynamicRole> | OneToOneLink<WfRequestParticipator, User> | Link<WfRequestParticipator, Position>> = [
    WfRequestParticipator.ACTOR_TYPE,
    WfRequestParticipator.CREATED_BY,
    WfRequestParticipator.CREATED_DATE_TIME,
    WfRequestParticipator.CREATED_ON,
    WfRequestParticipator.LAST_MODIFIED_BY,
    WfRequestParticipator.LAST_MODIFIED_DATE_TIME,
    WfRequestParticipator.LAST_MODIFIED_ON,
    WfRequestParticipator.OWNER_ID,
    WfRequestParticipator.PARTICIPATOR_TYPE,
    WfRequestParticipator.PROCESSING_ORDER,
    WfRequestParticipator.RELATED_TO,
    WfRequestParticipator.ROLE_ID,
    WfRequestParticipator.WF_REQUEST_ID,
    WfRequestParticipator.WF_REQUEST_PARTICIPATOR_ID,
    WfRequestParticipator.DYNAMIC_GROUP_NAV,
    WfRequestParticipator.DYNAMIC_ROLE_NAV,
    WfRequestParticipator.OWNER_NAV,
    WfRequestParticipator.POSITION_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WfRequestParticipator> = new AllFields('*', WfRequestParticipator);
  /**
   * All key fields of the WfRequestParticipator entity.
   */
  export const _keyFields: Array<Selectable<WfRequestParticipator>> = [WfRequestParticipator.WF_REQUEST_PARTICIPATOR_ID];
  /**
   * Mapping of all key field names to the respective static field property WfRequestParticipator.
   */
  export const _keys: { [keys: string]: Selectable<WfRequestParticipator> } = WfRequestParticipator._keyFields.reduce((acc: { [keys: string]: Selectable<WfRequestParticipator> }, field: Selectable<WfRequestParticipator>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

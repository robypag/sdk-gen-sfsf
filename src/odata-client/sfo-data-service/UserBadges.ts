/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserBadgesRequestBuilder } from './UserBadgesRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BinaryField, CustomField, DateField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "UserBadges" of service "SFOData".
 */
export class UserBadges extends Entity implements UserBadgesType {
  /**
   * Technical entity name for UserBadges.
   */
  static _entityName = 'UserBadges';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for UserBadges.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * badgeCreatorName.
   * @nullable
   */
  badgeCreatorName?: string;
  /**
   * badgeId.
   * @nullable
   */
  badgeId?: number;
  /**
   * badgeInstanceId.
   */
  badgeInstanceId!: number;
  /**
   * badgeTitle.
   * @nullable
   */
  badgeTitle?: string;
  /**
   * comment.
   * @nullable
   */
  comment?: string;
  /**
   * creatorUserID.
   * @nullable
   */
  creatorUserId?: string;
  /**
   * lastModified.
   * @nullable
   */
  lastModified?: Moment;
  /**
   * photo.
   * @nullable
   */
  photo?: string;
  /**
   * userId.
   */
  userId!: string;

  /**
   * Returns an entity builder to construct instances `UserBadges`.
   * @returns A builder that constructs instances of entity type `UserBadges`.
   */
  static builder(): EntityBuilderType<UserBadges, UserBadgesTypeForceMandatory> {
    return Entity.entityBuilder(UserBadges);
  }

  /**
   * Returns a request builder to construct requests for operations on the `UserBadges` entity type.
   * @returns A `UserBadges` request builder.
   */
  static requestBuilder(): UserBadgesRequestBuilder {
    return new UserBadgesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserBadges`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `UserBadges`.
   */
  static customField(fieldName: string): CustomField<UserBadges> {
    return Entity.customFieldSelector(fieldName, UserBadges);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface UserBadgesType {
  badgeCreatorName?: string;
  badgeId?: number;
  badgeInstanceId: number;
  badgeTitle?: string;
  comment?: string;
  creatorUserId?: string;
  lastModified?: Moment;
  photo?: string;
  userId: string;
}

export interface UserBadgesTypeForceMandatory {
  badgeCreatorName: string;
  badgeId: number;
  badgeInstanceId: number;
  badgeTitle: string;
  comment: string;
  creatorUserId: string;
  lastModified: Moment;
  photo: string;
  userId: string;
}

export namespace UserBadges {
  /**
   * Static representation of the [[badgeCreatorName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BADGE_CREATOR_NAME: StringField<UserBadges> = new StringField('badgeCreatorName', UserBadges, 'Edm.String');
  /**
   * Static representation of the [[badgeId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BADGE_ID: NumberField<UserBadges> = new NumberField('badgeId', UserBadges, 'Edm.Int32');
  /**
   * Static representation of the [[badgeInstanceId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BADGE_INSTANCE_ID: NumberField<UserBadges> = new NumberField('badgeInstanceId', UserBadges, 'Edm.Int32');
  /**
   * Static representation of the [[badgeTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BADGE_TITLE: StringField<UserBadges> = new StringField('badgeTitle', UserBadges, 'Edm.String');
  /**
   * Static representation of the [[comment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT: StringField<UserBadges> = new StringField('comment', UserBadges, 'Edm.String');
  /**
   * Static representation of the [[creatorUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATOR_USER_ID: StringField<UserBadges> = new StringField('creatorUserID', UserBadges, 'Edm.String');
  /**
   * Static representation of the [[lastModified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED: DateField<UserBadges> = new DateField('lastModified', UserBadges, 'Edm.DateTime');
  /**
   * Static representation of the [[photo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHOTO: BinaryField<UserBadges> = new BinaryField('photo', UserBadges, 'Edm.Binary');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<UserBadges> = new StringField('userId', UserBadges, 'Edm.String');
  /**
   * All fields of the UserBadges entity.
   */
  export const _allFields: Array<StringField<UserBadges> | NumberField<UserBadges> | DateField<UserBadges> | BinaryField<UserBadges>> = [
    UserBadges.BADGE_CREATOR_NAME,
    UserBadges.BADGE_ID,
    UserBadges.BADGE_INSTANCE_ID,
    UserBadges.BADGE_TITLE,
    UserBadges.COMMENT,
    UserBadges.CREATOR_USER_ID,
    UserBadges.LAST_MODIFIED,
    UserBadges.PHOTO,
    UserBadges.USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<UserBadges> = new AllFields('*', UserBadges);
  /**
   * All key fields of the UserBadges entity.
   */
  export const _keyFields: Array<Selectable<UserBadges>> = [UserBadges.BADGE_INSTANCE_ID, UserBadges.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property UserBadges.
   */
  export const _keys: { [keys: string]: Selectable<UserBadges> } = UserBadges._keyFields.reduce((acc: { [keys: string]: Selectable<UserBadges> }, field: Selectable<UserBadges>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PhotoRequestBuilder } from './PhotoRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BinaryField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Photo" of service "SFOData".
 */
export class Photo extends Entity implements PhotoType {
  /**
   * Technical entity name for Photo.
   */
  static _entityName = 'Photo';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Photo.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * height.
   */
  height!: number;
  /**
   * lastModified.
   * @nullable
   */
  lastModified?: Moment;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * lastModifiedWithTZ.
   * @nullable
   */
  lastModifiedWithTz?: Moment;
  /**
   * mimeType.
   * Maximum length: 32.
   * @nullable
   */
  mimeType?: string;
  /**
   * photo.
   * @nullable
   */
  photo?: string;
  /**
   * photoId.
   */
  photoId!: BigNumber;
  /**
   * photoName.
   * Maximum length: 128.
   * @nullable
   */
  photoName?: string;
  /**
   * photoType.
   */
  photoType!: number;
  /**
   * userId.
   * Maximum length: 100.
   */
  userId!: string;
  /**
   * width.
   */
  width!: number;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userNav!: User;

  /**
   * Returns an entity builder to construct instances `Photo`.
   * @returns A builder that constructs instances of entity type `Photo`.
   */
  static builder(): EntityBuilderType<Photo, PhotoTypeForceMandatory> {
    return Entity.entityBuilder(Photo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Photo` entity type.
   * @returns A `Photo` request builder.
   */
  static requestBuilder(): PhotoRequestBuilder {
    return new PhotoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Photo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Photo`.
   */
  static customField(fieldName: string): CustomField<Photo> {
    return Entity.customFieldSelector(fieldName, Photo);
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

export interface PhotoType {
  height: number;
  lastModified?: Moment;
  lastModifiedDateTime?: Moment;
  lastModifiedWithTz?: Moment;
  mimeType?: string;
  photo?: string;
  photoId: BigNumber;
  photoName?: string;
  photoType: number;
  userId: string;
  width: number;
  userNav: UserType;
}

export interface PhotoTypeForceMandatory {
  height: number;
  lastModified: Moment;
  lastModifiedDateTime: Moment;
  lastModifiedWithTz: Moment;
  mimeType: string;
  photo: string;
  photoId: BigNumber;
  photoName: string;
  photoType: number;
  userId: string;
  width: number;
  userNav: UserType;
}

export namespace Photo {
  /**
   * Static representation of the [[height]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEIGHT: NumberField<Photo> = new NumberField('height', Photo, 'Edm.Int32');
  /**
   * Static representation of the [[lastModified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED: DateField<Photo> = new DateField('lastModified', Photo, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<Photo> = new DateField('lastModifiedDateTime', Photo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_WITH_TZ: DateField<Photo> = new DateField('lastModifiedWithTZ', Photo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIME_TYPE: StringField<Photo> = new StringField('mimeType', Photo, 'Edm.String');
  /**
   * Static representation of the [[photo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHOTO: BinaryField<Photo> = new BinaryField('photo', Photo, 'Edm.Binary');
  /**
   * Static representation of the [[photoId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHOTO_ID: BigNumberField<Photo> = new BigNumberField('photoId', Photo, 'Edm.Int64');
  /**
   * Static representation of the [[photoName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHOTO_NAME: StringField<Photo> = new StringField('photoName', Photo, 'Edm.String');
  /**
   * Static representation of the [[photoType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHOTO_TYPE: NumberField<Photo> = new NumberField('photoType', Photo, 'Edm.Int32');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Photo> = new StringField('userId', Photo, 'Edm.String');
  /**
   * Static representation of the [[width]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIDTH: NumberField<Photo> = new NumberField('width', Photo, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[userNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NAV: OneToOneLink<Photo, User> = new OneToOneLink('userNav', Photo, User);
  /**
   * All fields of the Photo entity.
   */
  export const _allFields: Array<NumberField<Photo> | DateField<Photo> | StringField<Photo> | BinaryField<Photo> | BigNumberField<Photo> | OneToOneLink<Photo, User>> = [
    Photo.HEIGHT,
    Photo.LAST_MODIFIED,
    Photo.LAST_MODIFIED_DATE_TIME,
    Photo.LAST_MODIFIED_WITH_TZ,
    Photo.MIME_TYPE,
    Photo.PHOTO,
    Photo.PHOTO_ID,
    Photo.PHOTO_NAME,
    Photo.PHOTO_TYPE,
    Photo.USER_ID,
    Photo.WIDTH,
    Photo.USER_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Photo> = new AllFields('*', Photo);
  /**
   * All key fields of the Photo entity.
   */
  export const _keyFields: Array<Selectable<Photo>> = [Photo.PHOTO_TYPE, Photo.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Photo.
   */
  export const _keys: { [keys: string]: Selectable<Photo> } = Photo._keyFields.reduce((acc: { [keys: string]: Selectable<Photo> }, field: Selectable<Photo>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

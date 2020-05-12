/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_GoogledocsRequestBuilder } from './Background_GoogledocsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_Googledocs" of service "SFOData".
 */
export class Background_Googledocs extends Entity implements Background_GoogledocsType {
  /**
   * Technical entity name for Background_Googledocs.
   */
  static _entityName = 'Background_Googledocs';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_Googledocs.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * backgroundElementId.
   */
  backgroundElementId!: BigNumber;
  /**
   * bgOrderPos.
   */
  bgOrderPos!: BigNumber;
  /**
   * Document Description.
   * @nullable
   */
  documentName?: string;
  /**
   * Document.
   */
  documenturl!: string;
  /**
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * Last Modified Date.
   * @nullable
   */
  lastmodifieddate?: Moment;
  /**
   * userId.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;

  /**
   * Returns an entity builder to construct instances `Background_Googledocs`.
   * @returns A builder that constructs instances of entity type `Background_Googledocs`.
   */
  static builder(): EntityBuilderType<Background_Googledocs, Background_GoogledocsTypeForceMandatory> {
    return Entity.entityBuilder(Background_Googledocs);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_Googledocs` entity type.
   * @returns A `Background_Googledocs` request builder.
   */
  static requestBuilder(): Background_GoogledocsRequestBuilder {
    return new Background_GoogledocsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Googledocs`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_Googledocs`.
   */
  static customField(fieldName: string): CustomField<Background_Googledocs> {
    return Entity.customFieldSelector(fieldName, Background_Googledocs);
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

export interface Background_GoogledocsType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  documentName?: string;
  documenturl: string;
  lastModifiedDate: Moment;
  lastmodifieddate?: Moment;
  userId: string;
  userIdNav: UserType;
}

export interface Background_GoogledocsTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  documentName: string;
  documenturl: string;
  lastModifiedDate: Moment;
  lastmodifieddate: Moment;
  userId: string;
  userIdNav: UserType;
}

export namespace Background_Googledocs {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Googledocs> = new BigNumberField('backgroundElementId', Background_Googledocs, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_Googledocs> = new BigNumberField('bgOrderPos', Background_Googledocs, 'Edm.Int64');
  /**
   * Static representation of the [[documentName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_NAME: StringField<Background_Googledocs> = new StringField('documentName', Background_Googledocs, 'Edm.String');
  /**
   * Static representation of the [[documenturl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENTURL: StringField<Background_Googledocs> = new StringField('documenturl', Background_Googledocs, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_Googledocs> = new DateField('lastModifiedDate', Background_Googledocs, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastmodifieddate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LASTMODIFIEDDATE: DateField<Background_Googledocs> = new DateField('lastmodifieddate', Background_Googledocs, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_Googledocs> = new StringField('userId', Background_Googledocs, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_Googledocs, User> = new OneToOneLink('userIdNav', Background_Googledocs, User);
  /**
   * All fields of the Background_Googledocs entity.
   */
  export const _allFields: Array<BigNumberField<Background_Googledocs> | StringField<Background_Googledocs> | DateField<Background_Googledocs> | OneToOneLink<Background_Googledocs, User>> = [
    Background_Googledocs.BACKGROUND_ELEMENT_ID,
    Background_Googledocs.BG_ORDER_POS,
    Background_Googledocs.DOCUMENT_NAME,
    Background_Googledocs.DOCUMENTURL,
    Background_Googledocs.LAST_MODIFIED_DATE,
    Background_Googledocs.LASTMODIFIEDDATE,
    Background_Googledocs.USER_ID,
    Background_Googledocs.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_Googledocs> = new AllFields('*', Background_Googledocs);
  /**
   * All key fields of the Background_Googledocs entity.
   */
  export const _keyFields: Array<Selectable<Background_Googledocs>> = [Background_Googledocs.BACKGROUND_ELEMENT_ID, Background_Googledocs.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_Googledocs.
   */
  export const _keys: { [keys: string]: Selectable<Background_Googledocs> } = Background_Googledocs._keyFields.reduce((acc: { [keys: string]: Selectable<Background_Googledocs> }, field: Selectable<Background_Googledocs>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

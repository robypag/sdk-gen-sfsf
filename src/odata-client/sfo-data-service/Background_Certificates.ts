/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_CertificatesRequestBuilder } from './Background_CertificatesRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_Certificates" of service "SFOData".
 */
export class Background_Certificates extends Entity implements Background_CertificatesType {
  /**
   * Technical entity name for Background_Certificates.
   */
  static _entityName = 'Background_Certificates';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_Certificates.
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
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Expiration Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Institution.
   * @nullable
   */
  institution?: string;
  /**
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * Certification/License.
   */
  name!: string;
  /**
   * Effective Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * userId.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;

  /**
   * Returns an entity builder to construct instances `Background_Certificates`.
   * @returns A builder that constructs instances of entity type `Background_Certificates`.
   */
  static builder(): EntityBuilderType<Background_Certificates, Background_CertificatesTypeForceMandatory> {
    return Entity.entityBuilder(Background_Certificates);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_Certificates` entity type.
   * @returns A `Background_Certificates` request builder.
   */
  static requestBuilder(): Background_CertificatesRequestBuilder {
    return new Background_CertificatesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Certificates`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_Certificates`.
   */
  static customField(fieldName: string): CustomField<Background_Certificates> {
    return Entity.customFieldSelector(fieldName, Background_Certificates);
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

export interface Background_CertificatesType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  description?: string;
  endDate?: Moment;
  institution?: string;
  lastModifiedDate: Moment;
  name: string;
  startDate?: Moment;
  userId: string;
  userIdNav: UserType;
}

export interface Background_CertificatesTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  description: string;
  endDate: Moment;
  institution: string;
  lastModifiedDate: Moment;
  name: string;
  startDate: Moment;
  userId: string;
  userIdNav: UserType;
}

export namespace Background_Certificates {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Certificates> = new BigNumberField('backgroundElementId', Background_Certificates, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_Certificates> = new BigNumberField('bgOrderPos', Background_Certificates, 'Edm.Int64');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<Background_Certificates> = new StringField('description', Background_Certificates, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<Background_Certificates> = new DateField('endDate', Background_Certificates, 'Edm.DateTime');
  /**
   * Static representation of the [[institution]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTITUTION: StringField<Background_Certificates> = new StringField('institution', Background_Certificates, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_Certificates> = new DateField('lastModifiedDate', Background_Certificates, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<Background_Certificates> = new StringField('name', Background_Certificates, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<Background_Certificates> = new DateField('startDate', Background_Certificates, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_Certificates> = new StringField('userId', Background_Certificates, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_Certificates, User> = new OneToOneLink('userIdNav', Background_Certificates, User);
  /**
   * All fields of the Background_Certificates entity.
   */
  export const _allFields: Array<BigNumberField<Background_Certificates> | StringField<Background_Certificates> | DateField<Background_Certificates> | OneToOneLink<Background_Certificates, User>> = [
    Background_Certificates.BACKGROUND_ELEMENT_ID,
    Background_Certificates.BG_ORDER_POS,
    Background_Certificates.DESCRIPTION,
    Background_Certificates.END_DATE,
    Background_Certificates.INSTITUTION,
    Background_Certificates.LAST_MODIFIED_DATE,
    Background_Certificates.NAME,
    Background_Certificates.START_DATE,
    Background_Certificates.USER_ID,
    Background_Certificates.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_Certificates> = new AllFields('*', Background_Certificates);
  /**
   * All key fields of the Background_Certificates entity.
   */
  export const _keyFields: Array<Selectable<Background_Certificates>> = [Background_Certificates.BACKGROUND_ELEMENT_ID, Background_Certificates.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_Certificates.
   */
  export const _keys: { [keys: string]: Selectable<Background_Certificates> } = Background_Certificates._keyFields.reduce((acc: { [keys: string]: Selectable<Background_Certificates> }, field: Selectable<Background_Certificates>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

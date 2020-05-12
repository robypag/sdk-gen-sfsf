/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoLocationGroupRequestBuilder } from './FoLocationGroupRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOLocationGroup" of service "SFOData".
 */
export class FoLocationGroup extends Entity implements FoLocationGroupType {
  /**
   * Technical entity name for FoLocationGroup.
   */
  static _entityName = 'FOLocationGroup';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoLocationGroup.
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
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  description?: string;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Code.
   * Maximum length: 32.
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
   * Last Modified On.
   * @nullable
   */
  lastModifiedOn?: Moment;
  /**
   * Name.
   * Maximum length: 32.
   * @nullable
   */
  name?: string;
  /**
   * Start Date.
   */
  startDate!: Moment;
  /**
   * Status.
   * @nullable
   */
  status?: string;
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  descriptionTranslationNav!: FoTranslation;
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  nameTranslationNav!: FoTranslation;

  /**
   * Returns an entity builder to construct instances `FoLocationGroup`.
   * @returns A builder that constructs instances of entity type `FoLocationGroup`.
   */
  static builder(): EntityBuilderType<FoLocationGroup, FoLocationGroupTypeForceMandatory> {
    return Entity.entityBuilder(FoLocationGroup);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoLocationGroup` entity type.
   * @returns A `FoLocationGroup` request builder.
   */
  static requestBuilder(): FoLocationGroupRequestBuilder {
    return new FoLocationGroupRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLocationGroup`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoLocationGroup`.
   */
  static customField(fieldName: string): CustomField<FoLocationGroup> {
    return Entity.customFieldSelector(fieldName, FoLocationGroup);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoTranslation, FoTranslationType } from './FoTranslation';

export interface FoLocationGroupType {
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  description?: string;
  endDate?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  name?: string;
  startDate: Moment;
  status?: string;
  descriptionTranslationNav: FoTranslationType;
  nameTranslationNav: FoTranslationType;
}

export interface FoLocationGroupTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  description: string;
  endDate: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  name: string;
  startDate: Moment;
  status: string;
  descriptionTranslationNav: FoTranslationType;
  nameTranslationNav: FoTranslationType;
}

export namespace FoLocationGroup {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoLocationGroup> = new StringField('createdBy', FoLocationGroup, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoLocationGroup> = new DateField('createdDateTime', FoLocationGroup, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoLocationGroup> = new DateField('createdOn', FoLocationGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FoLocationGroup> = new StringField('description', FoLocationGroup, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoLocationGroup> = new DateField('endDate', FoLocationGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoLocationGroup> = new StringField('externalCode', FoLocationGroup, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoLocationGroup> = new StringField('lastModifiedBy', FoLocationGroup, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoLocationGroup> = new DateField('lastModifiedDateTime', FoLocationGroup, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoLocationGroup> = new DateField('lastModifiedOn', FoLocationGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FoLocationGroup> = new StringField('name', FoLocationGroup, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoLocationGroup> = new DateField('startDate', FoLocationGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoLocationGroup> = new StringField('status', FoLocationGroup, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoLocationGroup, FoTranslation> = new OneToOneLink('descriptionTranslationNav', FoLocationGroup, FoTranslation);
  /**
   * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_NAV: OneToOneLink<FoLocationGroup, FoTranslation> = new OneToOneLink('nameTranslationNav', FoLocationGroup, FoTranslation);
  /**
   * All fields of the FoLocationGroup entity.
   */
  export const _allFields: Array<StringField<FoLocationGroup> | DateField<FoLocationGroup> | OneToOneLink<FoLocationGroup, FoTranslation>> = [
    FoLocationGroup.CREATED_BY,
    FoLocationGroup.CREATED_DATE_TIME,
    FoLocationGroup.CREATED_ON,
    FoLocationGroup.DESCRIPTION,
    FoLocationGroup.END_DATE,
    FoLocationGroup.EXTERNAL_CODE,
    FoLocationGroup.LAST_MODIFIED_BY,
    FoLocationGroup.LAST_MODIFIED_DATE_TIME,
    FoLocationGroup.LAST_MODIFIED_ON,
    FoLocationGroup.NAME,
    FoLocationGroup.START_DATE,
    FoLocationGroup.STATUS,
    FoLocationGroup.DESCRIPTION_TRANSLATION_NAV,
    FoLocationGroup.NAME_TRANSLATION_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoLocationGroup> = new AllFields('*', FoLocationGroup);
  /**
   * All key fields of the FoLocationGroup entity.
   */
  export const _keyFields: Array<Selectable<FoLocationGroup>> = [FoLocationGroup.EXTERNAL_CODE, FoLocationGroup.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoLocationGroup.
   */
  export const _keys: { [keys: string]: Selectable<FoLocationGroup> } = FoLocationGroup._keyFields.reduce((acc: { [keys: string]: Selectable<FoLocationGroup> }, field: Selectable<FoLocationGroup>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

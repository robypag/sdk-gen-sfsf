/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MdfEnumValueRequestBuilder } from './MdfEnumValueRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "MDFEnumValue" of service "SFOData".
 */
export class MdfEnumValue extends Entity implements MdfEnumValueType {
  /**
   * Technical entity name for MdfEnumValue.
   */
  static _entityName = 'MDFEnumValue';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for MdfEnumValue.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * de_DE.
   * @nullable
   */
  deDe?: string;
  /**
   * en_DEBUG.
   * @nullable
   */
  enDebug?: string;
  /**
   * en_GB.
   * @nullable
   */
  enGb?: string;
  /**
   * en_US.
   * @nullable
   */
  enUs?: string;
  /**
   * es_ES.
   * @nullable
   */
  esEs?: string;
  /**
   * es_MX.
   * @nullable
   */
  esMx?: string;
  /**
   * fr_CA.
   * @nullable
   */
  frCa?: string;
  /**
   * fr_FR.
   * @nullable
   */
  frFr?: string;
  /**
   * it_IT.
   * @nullable
   */
  itIt?: string;
  /**
   * key.
   */
  key!: string;
  /**
   * localized.
   * @nullable
   */
  localized?: string;
  /**
   * nl_NL.
   * @nullable
   */
  nlNl?: string;
  /**
   * pt_BR.
   * @nullable
   */
  ptBr?: string;
  /**
   * value.
   */
  value!: string;
  /**
   * zh_CN.
   * @nullable
   */
  zhCn?: string;

  /**
   * Returns an entity builder to construct instances `MdfEnumValue`.
   * @returns A builder that constructs instances of entity type `MdfEnumValue`.
   */
  static builder(): EntityBuilderType<MdfEnumValue, MdfEnumValueTypeForceMandatory> {
    return Entity.entityBuilder(MdfEnumValue);
  }

  /**
   * Returns a request builder to construct requests for operations on the `MdfEnumValue` entity type.
   * @returns A `MdfEnumValue` request builder.
   */
  static requestBuilder(): MdfEnumValueRequestBuilder {
    return new MdfEnumValueRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `MdfEnumValue`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `MdfEnumValue`.
   */
  static customField(fieldName: string): CustomField<MdfEnumValue> {
    return Entity.customFieldSelector(fieldName, MdfEnumValue);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface MdfEnumValueType {
  deDe?: string;
  enDebug?: string;
  enGb?: string;
  enUs?: string;
  esEs?: string;
  esMx?: string;
  frCa?: string;
  frFr?: string;
  itIt?: string;
  key: string;
  localized?: string;
  nlNl?: string;
  ptBr?: string;
  value: string;
  zhCn?: string;
}

export interface MdfEnumValueTypeForceMandatory {
  deDe: string;
  enDebug: string;
  enGb: string;
  enUs: string;
  esEs: string;
  esMx: string;
  frCa: string;
  frFr: string;
  itIt: string;
  key: string;
  localized: string;
  nlNl: string;
  ptBr: string;
  value: string;
  zhCn: string;
}

export namespace MdfEnumValue {
  /**
   * Static representation of the [[deDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DE_DE: StringField<MdfEnumValue> = new StringField('de_DE', MdfEnumValue, 'Edm.String');
  /**
   * Static representation of the [[enDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EN_DEBUG: StringField<MdfEnumValue> = new StringField('en_DEBUG', MdfEnumValue, 'Edm.String');
  /**
   * Static representation of the [[enGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EN_GB: StringField<MdfEnumValue> = new StringField('en_GB', MdfEnumValue, 'Edm.String');
  /**
   * Static representation of the [[enUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EN_US: StringField<MdfEnumValue> = new StringField('en_US', MdfEnumValue, 'Edm.String');
  /**
   * Static representation of the [[esEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ES_ES: StringField<MdfEnumValue> = new StringField('es_ES', MdfEnumValue, 'Edm.String');
  /**
   * Static representation of the [[esMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ES_MX: StringField<MdfEnumValue> = new StringField('es_MX', MdfEnumValue, 'Edm.String');
  /**
   * Static representation of the [[frCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FR_CA: StringField<MdfEnumValue> = new StringField('fr_CA', MdfEnumValue, 'Edm.String');
  /**
   * Static representation of the [[frFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FR_FR: StringField<MdfEnumValue> = new StringField('fr_FR', MdfEnumValue, 'Edm.String');
  /**
   * Static representation of the [[itIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IT_IT: StringField<MdfEnumValue> = new StringField('it_IT', MdfEnumValue, 'Edm.String');
  /**
   * Static representation of the [[key]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KEY: StringField<MdfEnumValue> = new StringField('key', MdfEnumValue, 'Edm.String');
  /**
   * Static representation of the [[localized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALIZED: StringField<MdfEnumValue> = new StringField('localized', MdfEnumValue, 'Edm.String');
  /**
   * Static representation of the [[nlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NL_NL: StringField<MdfEnumValue> = new StringField('nl_NL', MdfEnumValue, 'Edm.String');
  /**
   * Static representation of the [[ptBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PT_BR: StringField<MdfEnumValue> = new StringField('pt_BR', MdfEnumValue, 'Edm.String');
  /**
   * Static representation of the [[value]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE: StringField<MdfEnumValue> = new StringField('value', MdfEnumValue, 'Edm.String');
  /**
   * Static representation of the [[zhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZH_CN: StringField<MdfEnumValue> = new StringField('zh_CN', MdfEnumValue, 'Edm.String');
  /**
   * All fields of the MdfEnumValue entity.
   */
  export const _allFields: Array<StringField<MdfEnumValue>> = [
    MdfEnumValue.DE_DE,
    MdfEnumValue.EN_DEBUG,
    MdfEnumValue.EN_GB,
    MdfEnumValue.EN_US,
    MdfEnumValue.ES_ES,
    MdfEnumValue.ES_MX,
    MdfEnumValue.FR_CA,
    MdfEnumValue.FR_FR,
    MdfEnumValue.IT_IT,
    MdfEnumValue.KEY,
    MdfEnumValue.LOCALIZED,
    MdfEnumValue.NL_NL,
    MdfEnumValue.PT_BR,
    MdfEnumValue.VALUE,
    MdfEnumValue.ZH_CN
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<MdfEnumValue> = new AllFields('*', MdfEnumValue);
  /**
   * All key fields of the MdfEnumValue entity.
   */
  export const _keyFields: Array<Selectable<MdfEnumValue>> = [MdfEnumValue.KEY, MdfEnumValue.VALUE];
  /**
   * Mapping of all key field names to the respective static field property MdfEnumValue.
   */
  export const _keys: { [keys: string]: Selectable<MdfEnumValue> } = MdfEnumValue._keyFields.reduce((acc: { [keys: string]: Selectable<MdfEnumValue> }, field: Selectable<MdfEnumValue>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

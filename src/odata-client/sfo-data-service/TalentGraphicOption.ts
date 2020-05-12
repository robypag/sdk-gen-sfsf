/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TalentGraphicOptionRequestBuilder } from './TalentGraphicOptionRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TalentGraphicOption" of service "SFOData".
 */
export class TalentGraphicOption extends Entity implements TalentGraphicOptionType {
  /**
   * Technical entity name for TalentGraphicOption.
   */
  static _entityName = 'TalentGraphicOption';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TalentGraphicOption.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * dataImage.
   */
  dataImage!: string;
  /**
   * dataIndex.
   */
  dataIndex!: string;
  /**
   * dataLabel.
   */
  dataLabel!: string;
  /**
   * dataShortLabel.
   */
  dataShortLabel!: string;
  /**
   * dataValue.
   */
  dataValue!: string;
  /**
   * gradientBackgroundColor.
   */
  gradientBackgroundColor!: string;
  /**
   * optionIndex.
   */
  optionIndex!: number;
  /**
   * optionKey.
   */
  optionKey!: string;
  /**
   * optionLabel.
   */
  optionLabel!: string;
  /**
   * optionName.
   */
  optionName!: string;
  /**
   * optionScaleId.
   */
  optionScaleId!: string;
  /**
   * optionTarget.
   */
  optionTarget!: string;
  /**
   * optionType.
   */
  optionType!: string;

  /**
   * Returns an entity builder to construct instances `TalentGraphicOption`.
   * @returns A builder that constructs instances of entity type `TalentGraphicOption`.
   */
  static builder(): EntityBuilderType<TalentGraphicOption, TalentGraphicOptionTypeForceMandatory> {
    return Entity.entityBuilder(TalentGraphicOption);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TalentGraphicOption` entity type.
   * @returns A `TalentGraphicOption` request builder.
   */
  static requestBuilder(): TalentGraphicOptionRequestBuilder {
    return new TalentGraphicOptionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TalentGraphicOption`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TalentGraphicOption`.
   */
  static customField(fieldName: string): CustomField<TalentGraphicOption> {
    return Entity.customFieldSelector(fieldName, TalentGraphicOption);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface TalentGraphicOptionType {
  dataImage: string;
  dataIndex: string;
  dataLabel: string;
  dataShortLabel: string;
  dataValue: string;
  gradientBackgroundColor: string;
  optionIndex: number;
  optionKey: string;
  optionLabel: string;
  optionName: string;
  optionScaleId: string;
  optionTarget: string;
  optionType: string;
}

export interface TalentGraphicOptionTypeForceMandatory {
  dataImage: string;
  dataIndex: string;
  dataLabel: string;
  dataShortLabel: string;
  dataValue: string;
  gradientBackgroundColor: string;
  optionIndex: number;
  optionKey: string;
  optionLabel: string;
  optionName: string;
  optionScaleId: string;
  optionTarget: string;
  optionType: string;
}

export namespace TalentGraphicOption {
  /**
   * Static representation of the [[dataImage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_IMAGE: StringField<TalentGraphicOption> = new StringField('dataImage', TalentGraphicOption, 'Edm.String');
  /**
   * Static representation of the [[dataIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_INDEX: StringField<TalentGraphicOption> = new StringField('dataIndex', TalentGraphicOption, 'Edm.String');
  /**
   * Static representation of the [[dataLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_LABEL: StringField<TalentGraphicOption> = new StringField('dataLabel', TalentGraphicOption, 'Edm.String');
  /**
   * Static representation of the [[dataShortLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_SHORT_LABEL: StringField<TalentGraphicOption> = new StringField('dataShortLabel', TalentGraphicOption, 'Edm.String');
  /**
   * Static representation of the [[dataValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_VALUE: StringField<TalentGraphicOption> = new StringField('dataValue', TalentGraphicOption, 'Edm.String');
  /**
   * Static representation of the [[gradientBackgroundColor]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GRADIENT_BACKGROUND_COLOR: StringField<TalentGraphicOption> = new StringField('gradientBackgroundColor', TalentGraphicOption, 'Edm.String');
  /**
   * Static representation of the [[optionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPTION_INDEX: NumberField<TalentGraphicOption> = new NumberField('optionIndex', TalentGraphicOption, 'Edm.Int32');
  /**
   * Static representation of the [[optionKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPTION_KEY: StringField<TalentGraphicOption> = new StringField('optionKey', TalentGraphicOption, 'Edm.String');
  /**
   * Static representation of the [[optionLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPTION_LABEL: StringField<TalentGraphicOption> = new StringField('optionLabel', TalentGraphicOption, 'Edm.String');
  /**
   * Static representation of the [[optionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPTION_NAME: StringField<TalentGraphicOption> = new StringField('optionName', TalentGraphicOption, 'Edm.String');
  /**
   * Static representation of the [[optionScaleId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPTION_SCALE_ID: StringField<TalentGraphicOption> = new StringField('optionScaleId', TalentGraphicOption, 'Edm.String');
  /**
   * Static representation of the [[optionTarget]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPTION_TARGET: StringField<TalentGraphicOption> = new StringField('optionTarget', TalentGraphicOption, 'Edm.String');
  /**
   * Static representation of the [[optionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPTION_TYPE: StringField<TalentGraphicOption> = new StringField('optionType', TalentGraphicOption, 'Edm.String');
  /**
   * All fields of the TalentGraphicOption entity.
   */
  export const _allFields: Array<StringField<TalentGraphicOption> | NumberField<TalentGraphicOption>> = [
    TalentGraphicOption.DATA_IMAGE,
    TalentGraphicOption.DATA_INDEX,
    TalentGraphicOption.DATA_LABEL,
    TalentGraphicOption.DATA_SHORT_LABEL,
    TalentGraphicOption.DATA_VALUE,
    TalentGraphicOption.GRADIENT_BACKGROUND_COLOR,
    TalentGraphicOption.OPTION_INDEX,
    TalentGraphicOption.OPTION_KEY,
    TalentGraphicOption.OPTION_LABEL,
    TalentGraphicOption.OPTION_NAME,
    TalentGraphicOption.OPTION_SCALE_ID,
    TalentGraphicOption.OPTION_TARGET,
    TalentGraphicOption.OPTION_TYPE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TalentGraphicOption> = new AllFields('*', TalentGraphicOption);
  /**
   * All key fields of the TalentGraphicOption entity.
   */
  export const _keyFields: Array<Selectable<TalentGraphicOption>> = [TalentGraphicOption.DATA_INDEX, TalentGraphicOption.OPTION_KEY];
  /**
   * Mapping of all key field names to the respective static field property TalentGraphicOption.
   */
  export const _keys: { [keys: string]: Selectable<TalentGraphicOption> } = TalentGraphicOption._keyFields.reduce((acc: { [keys: string]: Selectable<TalentGraphicOption> }, field: Selectable<TalentGraphicOption>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

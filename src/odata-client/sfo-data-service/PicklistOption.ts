/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PicklistOptionRequestBuilder } from './PicklistOptionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PicklistOption" of service "SFOData".
 */
export class PicklistOption extends Entity implements PicklistOptionType {
  /**
   * Technical entity name for PicklistOption.
   */
  static _entityName = 'PicklistOption';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PicklistOption.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * externalCode.
   * Maximum length: 256.
   * @nullable
   */
  externalCode?: string;
  /**
   * id.
   */
  id!: BigNumber;
  /**
   * localeLabel.
   * @nullable
   */
  localeLabel?: string;
  /**
   * maxValue.
   * @nullable
   */
  maxValue?: number;
  /**
   * minValue.
   * @nullable
   */
  minValue?: number;
  /**
   * optionValue.
   * @nullable
   */
  optionValue?: number;
  /**
   * sortOrder.
   * @nullable
   */
  sortOrder?: number;
  /**
   * status.
   * Maximum length: 9.
   * @nullable
   */
  status?: string;
  /**
   * One-to-many navigation property to the [[PicklistOption]] entity.
   */
  childPicklistOptions!: PicklistOption[];
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  parentPicklistOption!: PicklistOption;
  /**
   * One-to-one navigation property to the [[Picklist]] entity.
   */
  picklist!: Picklist;
  /**
   * One-to-many navigation property to the [[PicklistLabel]] entity.
   */
  picklistLabels!: PicklistLabel[];

  /**
   * Returns an entity builder to construct instances `PicklistOption`.
   * @returns A builder that constructs instances of entity type `PicklistOption`.
   */
  static builder(): EntityBuilderType<PicklistOption, PicklistOptionTypeForceMandatory> {
    return Entity.entityBuilder(PicklistOption);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PicklistOption` entity type.
   * @returns A `PicklistOption` request builder.
   */
  static requestBuilder(): PicklistOptionRequestBuilder {
    return new PicklistOptionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PicklistOption`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PicklistOption`.
   */
  static customField(fieldName: string): CustomField<PicklistOption> {
    return Entity.customFieldSelector(fieldName, PicklistOption);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Picklist, PicklistType } from './Picklist';
import { PicklistLabel, PicklistLabelType } from './PicklistLabel';

export interface PicklistOptionType {
  externalCode?: string;
  id: BigNumber;
  localeLabel?: string;
  maxValue?: number;
  minValue?: number;
  optionValue?: number;
  sortOrder?: number;
  status?: string;
  childPicklistOptions: PicklistOptionType[];
  parentPicklistOption: PicklistOptionType;
  picklist: PicklistType;
  picklistLabels: PicklistLabelType[];
}

export interface PicklistOptionTypeForceMandatory {
  externalCode: string;
  id: BigNumber;
  localeLabel: string;
  maxValue: number;
  minValue: number;
  optionValue: number;
  sortOrder: number;
  status: string;
  childPicklistOptions: PicklistOptionType[];
  parentPicklistOption: PicklistOptionType;
  picklist: PicklistType;
  picklistLabels: PicklistLabelType[];
}

export namespace PicklistOption {
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<PicklistOption> = new StringField('externalCode', PicklistOption, 'Edm.String');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<PicklistOption> = new BigNumberField('id', PicklistOption, 'Edm.Int64');
  /**
   * Static representation of the [[localeLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALE_LABEL: StringField<PicklistOption> = new StringField('localeLabel', PicklistOption, 'Edm.String');
  /**
   * Static representation of the [[maxValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_VALUE: NumberField<PicklistOption> = new NumberField('maxValue', PicklistOption, 'Edm.Double');
  /**
   * Static representation of the [[minValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIN_VALUE: NumberField<PicklistOption> = new NumberField('minValue', PicklistOption, 'Edm.Double');
  /**
   * Static representation of the [[optionValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPTION_VALUE: NumberField<PicklistOption> = new NumberField('optionValue', PicklistOption, 'Edm.Double');
  /**
   * Static representation of the [[sortOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SORT_ORDER: NumberField<PicklistOption> = new NumberField('sortOrder', PicklistOption, 'Edm.Int32');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<PicklistOption> = new StringField('status', PicklistOption, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[childPicklistOptions]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHILD_PICKLIST_OPTIONS: Link<PicklistOption, PicklistOption> = new Link('childPicklistOptions', PicklistOption, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[parentPicklistOption]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_PICKLIST_OPTION: OneToOneLink<PicklistOption, PicklistOption> = new OneToOneLink('parentPicklistOption', PicklistOption, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[picklist]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICKLIST: OneToOneLink<PicklistOption, Picklist> = new OneToOneLink('picklist', PicklistOption, Picklist);
  /**
   * Static representation of the one-to-many navigation property [[picklistLabels]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICKLIST_LABELS: Link<PicklistOption, PicklistLabel> = new Link('picklistLabels', PicklistOption, PicklistLabel);
  /**
   * All fields of the PicklistOption entity.
   */
  export const _allFields: Array<StringField<PicklistOption> | BigNumberField<PicklistOption> | NumberField<PicklistOption> | Link<PicklistOption, PicklistOption> | OneToOneLink<PicklistOption, PicklistOption> | OneToOneLink<PicklistOption, Picklist> | Link<PicklistOption, PicklistLabel>> = [
    PicklistOption.EXTERNAL_CODE,
    PicklistOption.ID,
    PicklistOption.LOCALE_LABEL,
    PicklistOption.MAX_VALUE,
    PicklistOption.MIN_VALUE,
    PicklistOption.OPTION_VALUE,
    PicklistOption.SORT_ORDER,
    PicklistOption.STATUS,
    PicklistOption.CHILD_PICKLIST_OPTIONS,
    PicklistOption.PARENT_PICKLIST_OPTION,
    PicklistOption.PICKLIST,
    PicklistOption.PICKLIST_LABELS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PicklistOption> = new AllFields('*', PicklistOption);
  /**
   * All key fields of the PicklistOption entity.
   */
  export const _keyFields: Array<Selectable<PicklistOption>> = [PicklistOption.ID];
  /**
   * Mapping of all key field names to the respective static field property PicklistOption.
   */
  export const _keys: { [keys: string]: Selectable<PicklistOption> } = PicklistOption._keyFields.reduce((acc: { [keys: string]: Selectable<PicklistOption> }, field: Selectable<PicklistOption>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

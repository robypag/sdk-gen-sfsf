/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PicklistLabelRequestBuilder } from './PicklistLabelRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PicklistLabel" of service "SFOData".
 */
export class PicklistLabel extends Entity implements PicklistLabelType {
  /**
   * Technical entity name for PicklistLabel.
   */
  static _entityName = 'PicklistLabel';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PicklistLabel.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * id.
   * @nullable
   */
  id?: BigNumber;
  /**
   * label.
   * Maximum length: 255.
   * @nullable
   */
  label?: string;
  /**
   * locale.
   * Maximum length: 32.
   */
  locale!: string;
  /**
   * optionId.
   */
  optionId!: BigNumber;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  picklistOption!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `PicklistLabel`.
   * @returns A builder that constructs instances of entity type `PicklistLabel`.
   */
  static builder(): EntityBuilderType<PicklistLabel, PicklistLabelTypeForceMandatory> {
    return Entity.entityBuilder(PicklistLabel);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PicklistLabel` entity type.
   * @returns A `PicklistLabel` request builder.
   */
  static requestBuilder(): PicklistLabelRequestBuilder {
    return new PicklistLabelRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PicklistLabel`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PicklistLabel`.
   */
  static customField(fieldName: string): CustomField<PicklistLabel> {
    return Entity.customFieldSelector(fieldName, PicklistLabel);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { PicklistOption, PicklistOptionType } from './PicklistOption';

export interface PicklistLabelType {
  id?: BigNumber;
  label?: string;
  locale: string;
  optionId: BigNumber;
  picklistOption: PicklistOptionType;
}

export interface PicklistLabelTypeForceMandatory {
  id: BigNumber;
  label: string;
  locale: string;
  optionId: BigNumber;
  picklistOption: PicklistOptionType;
}

export namespace PicklistLabel {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<PicklistLabel> = new BigNumberField('id', PicklistLabel, 'Edm.Int64');
  /**
   * Static representation of the [[label]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL: StringField<PicklistLabel> = new StringField('label', PicklistLabel, 'Edm.String');
  /**
   * Static representation of the [[locale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALE: StringField<PicklistLabel> = new StringField('locale', PicklistLabel, 'Edm.String');
  /**
   * Static representation of the [[optionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPTION_ID: BigNumberField<PicklistLabel> = new BigNumberField('optionId', PicklistLabel, 'Edm.Int64');
  /**
   * Static representation of the one-to-one navigation property [[picklistOption]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICKLIST_OPTION: OneToOneLink<PicklistLabel, PicklistOption> = new OneToOneLink('picklistOption', PicklistLabel, PicklistOption);
  /**
   * All fields of the PicklistLabel entity.
   */
  export const _allFields: Array<BigNumberField<PicklistLabel> | StringField<PicklistLabel> | OneToOneLink<PicklistLabel, PicklistOption>> = [
    PicklistLabel.ID,
    PicklistLabel.LABEL,
    PicklistLabel.LOCALE,
    PicklistLabel.OPTION_ID,
    PicklistLabel.PICKLIST_OPTION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PicklistLabel> = new AllFields('*', PicklistLabel);
  /**
   * All key fields of the PicklistLabel entity.
   */
  export const _keyFields: Array<Selectable<PicklistLabel>> = [PicklistLabel.LOCALE, PicklistLabel.OPTION_ID];
  /**
   * Mapping of all key field names to the respective static field property PicklistLabel.
   */
  export const _keys: { [keys: string]: Selectable<PicklistLabel> } = PicklistLabel._keyFields.reduce((acc: { [keys: string]: Selectable<PicklistLabel> }, field: Selectable<PicklistLabel>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

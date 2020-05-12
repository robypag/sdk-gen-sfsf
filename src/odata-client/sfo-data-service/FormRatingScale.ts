/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormRatingScaleRequestBuilder } from './FormRatingScaleRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormRatingScale" of service "SFOData".
 */
export class FormRatingScale extends Entity implements FormRatingScaleType {
  /**
   * Technical entity name for FormRatingScale.
   */
  static _entityName = 'FormRatingScale';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormRatingScale.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * name.
   * @nullable
   */
  name?: string;
  /**
   * reverseScale.
   * @nullable
   */
  reverseScale?: boolean;
  /**
   * scaleId.
   */
  scaleId!: string;
  /**
   * scaleType.
   * @nullable
   */
  scaleType?: string;
  /**
   * sectionIndex.
   */
  sectionIndex!: number;
  /**
   * showValue.
   * @nullable
   */
  showValue?: boolean;
  /**
   * One-to-many navigation property to the [[FormRatingScaleValue]] entity.
   */
  ratingScaleList!: FormRatingScaleValue[];

  /**
   * Returns an entity builder to construct instances `FormRatingScale`.
   * @returns A builder that constructs instances of entity type `FormRatingScale`.
   */
  static builder(): EntityBuilderType<FormRatingScale, FormRatingScaleTypeForceMandatory> {
    return Entity.entityBuilder(FormRatingScale);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormRatingScale` entity type.
   * @returns A `FormRatingScale` request builder.
   */
  static requestBuilder(): FormRatingScaleRequestBuilder {
    return new FormRatingScaleRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormRatingScale`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormRatingScale`.
   */
  static customField(fieldName: string): CustomField<FormRatingScale> {
    return Entity.customFieldSelector(fieldName, FormRatingScale);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormRatingScaleValue, FormRatingScaleValueType } from './FormRatingScaleValue';

export interface FormRatingScaleType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  name?: string;
  reverseScale?: boolean;
  scaleId: string;
  scaleType?: string;
  sectionIndex: number;
  showValue?: boolean;
  ratingScaleList: FormRatingScaleValueType[];
}

export interface FormRatingScaleTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  name: string;
  reverseScale: boolean;
  scaleId: string;
  scaleType: string;
  sectionIndex: number;
  showValue: boolean;
  ratingScaleList: FormRatingScaleValueType[];
}

export namespace FormRatingScale {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormRatingScale> = new BigNumberField('formContentId', FormRatingScale, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormRatingScale> = new BigNumberField('formDataId', FormRatingScale, 'Edm.Int64');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FormRatingScale> = new StringField('name', FormRatingScale, 'Edm.String');
  /**
   * Static representation of the [[reverseScale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVERSE_SCALE: BooleanField<FormRatingScale> = new BooleanField('reverseScale', FormRatingScale, 'Edm.Boolean');
  /**
   * Static representation of the [[scaleId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCALE_ID: StringField<FormRatingScale> = new StringField('scaleId', FormRatingScale, 'Edm.String');
  /**
   * Static representation of the [[scaleType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCALE_TYPE: StringField<FormRatingScale> = new StringField('scaleType', FormRatingScale, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormRatingScale> = new NumberField('sectionIndex', FormRatingScale, 'Edm.Int32');
  /**
   * Static representation of the [[showValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHOW_VALUE: BooleanField<FormRatingScale> = new BooleanField('showValue', FormRatingScale, 'Edm.Boolean');
  /**
   * Static representation of the one-to-many navigation property [[ratingScaleList]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_SCALE_LIST: Link<FormRatingScale, FormRatingScaleValue> = new Link('ratingScaleList', FormRatingScale, FormRatingScaleValue);
  /**
   * All fields of the FormRatingScale entity.
   */
  export const _allFields: Array<BigNumberField<FormRatingScale> | StringField<FormRatingScale> | BooleanField<FormRatingScale> | NumberField<FormRatingScale> | Link<FormRatingScale, FormRatingScaleValue>> = [
    FormRatingScale.FORM_CONTENT_ID,
    FormRatingScale.FORM_DATA_ID,
    FormRatingScale.NAME,
    FormRatingScale.REVERSE_SCALE,
    FormRatingScale.SCALE_ID,
    FormRatingScale.SCALE_TYPE,
    FormRatingScale.SECTION_INDEX,
    FormRatingScale.SHOW_VALUE,
    FormRatingScale.RATING_SCALE_LIST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormRatingScale> = new AllFields('*', FormRatingScale);
  /**
   * All key fields of the FormRatingScale entity.
   */
  export const _keyFields: Array<Selectable<FormRatingScale>> = [FormRatingScale.FORM_CONTENT_ID, FormRatingScale.FORM_DATA_ID, FormRatingScale.SECTION_INDEX];
  /**
   * Mapping of all key field names to the respective static field property FormRatingScale.
   */
  export const _keys: { [keys: string]: Selectable<FormRatingScale> } = FormRatingScale._keyFields.reduce((acc: { [keys: string]: Selectable<FormRatingScale> }, field: Selectable<FormRatingScale>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

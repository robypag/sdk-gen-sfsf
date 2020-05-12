/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormReviewFeedbackListRequestBuilder } from './FormReviewFeedbackListRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, Selectable } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormReviewFeedbackList" of service "SFOData".
 */
export class FormReviewFeedbackList extends Entity implements FormReviewFeedbackListType {
  /**
   * Technical entity name for FormReviewFeedbackList.
   */
  static _entityName = 'FormReviewFeedbackList';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormReviewFeedbackList.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * One-to-many navigation property to the [[FormReviewFeedback]] entity.
   */
  formFeedbacks!: FormReviewFeedback[];

  /**
   * Returns an entity builder to construct instances `FormReviewFeedbackList`.
   * @returns A builder that constructs instances of entity type `FormReviewFeedbackList`.
   */
  static builder(): EntityBuilderType<FormReviewFeedbackList, FormReviewFeedbackListTypeForceMandatory> {
    return Entity.entityBuilder(FormReviewFeedbackList);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormReviewFeedbackList` entity type.
   * @returns A `FormReviewFeedbackList` request builder.
   */
  static requestBuilder(): FormReviewFeedbackListRequestBuilder {
    return new FormReviewFeedbackListRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormReviewFeedbackList`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormReviewFeedbackList`.
   */
  static customField(fieldName: string): CustomField<FormReviewFeedbackList> {
    return Entity.customFieldSelector(fieldName, FormReviewFeedbackList);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormReviewFeedback, FormReviewFeedbackType } from './FormReviewFeedback';

export interface FormReviewFeedbackListType {
  formDataId: BigNumber;
  formFeedbacks: FormReviewFeedbackType[];
}

export interface FormReviewFeedbackListTypeForceMandatory {
  formDataId: BigNumber;
  formFeedbacks: FormReviewFeedbackType[];
}

export namespace FormReviewFeedbackList {
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormReviewFeedbackList> = new BigNumberField('formDataId', FormReviewFeedbackList, 'Edm.Int64');
  /**
   * Static representation of the one-to-many navigation property [[formFeedbacks]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_FEEDBACKS: Link<FormReviewFeedbackList, FormReviewFeedback> = new Link('formFeedbacks', FormReviewFeedbackList, FormReviewFeedback);
  /**
   * All fields of the FormReviewFeedbackList entity.
   */
  export const _allFields: Array<BigNumberField<FormReviewFeedbackList> | Link<FormReviewFeedbackList, FormReviewFeedback>> = [
    FormReviewFeedbackList.FORM_DATA_ID,
    FormReviewFeedbackList.FORM_FEEDBACKS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormReviewFeedbackList> = new AllFields('*', FormReviewFeedbackList);
  /**
   * All key fields of the FormReviewFeedbackList entity.
   */
  export const _keyFields: Array<Selectable<FormReviewFeedbackList>> = [FormReviewFeedbackList.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property FormReviewFeedbackList.
   */
  export const _keys: { [keys: string]: Selectable<FormReviewFeedbackList> } = FormReviewFeedbackList._keyFields.reduce((acc: { [keys: string]: Selectable<FormReviewFeedbackList> }, field: Selectable<FormReviewFeedbackList>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

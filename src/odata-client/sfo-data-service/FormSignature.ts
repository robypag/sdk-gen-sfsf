/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormSignatureRequestBuilder } from './FormSignatureRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormSignature" of service "SFOData".
 */
export class FormSignature extends Entity implements FormSignatureType {
  /**
   * Technical entity name for FormSignature.
   */
  static _entityName = 'FormSignature';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormSignature.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * actionInformation.
   * @nullable
   */
  actionInformation?: string;
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * roleType.
   * @nullable
   */
  roleType?: string;
  /**
   * sectionIndex.
   */
  sectionIndex!: number;
  /**
   * signedBy.
   * @nullable
   */
  signedBy?: string;
  /**
   * signedDate.
   * @nullable
   */
  signedDate?: string;
  /**
   * status.
   * @nullable
   */
  status?: string;
  /**
   * stepId.
   */
  stepId!: string;
  /**
   * stepOrder.
   * @nullable
   */
  stepOrder?: number;
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  comment!: FormUserRatingComment;

  /**
   * Returns an entity builder to construct instances `FormSignature`.
   * @returns A builder that constructs instances of entity type `FormSignature`.
   */
  static builder(): EntityBuilderType<FormSignature, FormSignatureTypeForceMandatory> {
    return Entity.entityBuilder(FormSignature);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormSignature` entity type.
   * @returns A `FormSignature` request builder.
   */
  static requestBuilder(): FormSignatureRequestBuilder {
    return new FormSignatureRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormSignature`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormSignature`.
   */
  static customField(fieldName: string): CustomField<FormSignature> {
    return Entity.customFieldSelector(fieldName, FormSignature);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormUserRatingComment, FormUserRatingCommentType } from './FormUserRatingComment';

export interface FormSignatureType {
  actionInformation?: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  roleType?: string;
  sectionIndex: number;
  signedBy?: string;
  signedDate?: string;
  status?: string;
  stepId: string;
  stepOrder?: number;
  comment: FormUserRatingCommentType;
}

export interface FormSignatureTypeForceMandatory {
  actionInformation: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  roleType: string;
  sectionIndex: number;
  signedBy: string;
  signedDate: string;
  status: string;
  stepId: string;
  stepOrder: number;
  comment: FormUserRatingCommentType;
}

export namespace FormSignature {
  /**
   * Static representation of the [[actionInformation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTION_INFORMATION: StringField<FormSignature> = new StringField('actionInformation', FormSignature, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormSignature> = new BigNumberField('formContentId', FormSignature, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormSignature> = new BigNumberField('formDataId', FormSignature, 'Edm.Int64');
  /**
   * Static representation of the [[roleType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_TYPE: StringField<FormSignature> = new StringField('roleType', FormSignature, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormSignature> = new NumberField('sectionIndex', FormSignature, 'Edm.Int32');
  /**
   * Static representation of the [[signedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNED_BY: StringField<FormSignature> = new StringField('signedBy', FormSignature, 'Edm.String');
  /**
   * Static representation of the [[signedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNED_DATE: StringField<FormSignature> = new StringField('signedDate', FormSignature, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FormSignature> = new StringField('status', FormSignature, 'Edm.String');
  /**
   * Static representation of the [[stepId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STEP_ID: StringField<FormSignature> = new StringField('stepId', FormSignature, 'Edm.String');
  /**
   * Static representation of the [[stepOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STEP_ORDER: NumberField<FormSignature> = new NumberField('stepOrder', FormSignature, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[comment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT: OneToOneLink<FormSignature, FormUserRatingComment> = new OneToOneLink('comment', FormSignature, FormUserRatingComment);
  /**
   * All fields of the FormSignature entity.
   */
  export const _allFields: Array<StringField<FormSignature> | BigNumberField<FormSignature> | NumberField<FormSignature> | OneToOneLink<FormSignature, FormUserRatingComment>> = [
    FormSignature.ACTION_INFORMATION,
    FormSignature.FORM_CONTENT_ID,
    FormSignature.FORM_DATA_ID,
    FormSignature.ROLE_TYPE,
    FormSignature.SECTION_INDEX,
    FormSignature.SIGNED_BY,
    FormSignature.SIGNED_DATE,
    FormSignature.STATUS,
    FormSignature.STEP_ID,
    FormSignature.STEP_ORDER,
    FormSignature.COMMENT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormSignature> = new AllFields('*', FormSignature);
  /**
   * All key fields of the FormSignature entity.
   */
  export const _keyFields: Array<Selectable<FormSignature>> = [FormSignature.FORM_CONTENT_ID, FormSignature.FORM_DATA_ID, FormSignature.SECTION_INDEX, FormSignature.STEP_ID];
  /**
   * Mapping of all key field names to the respective static field property FormSignature.
   */
  export const _keys: { [keys: string]: Selectable<FormSignature> } = FormSignature._keyFields.reduce((acc: { [keys: string]: Selectable<FormSignature> }, field: Selectable<FormSignature>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormRaterListSectionRequestBuilder } from './FormRaterListSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormRaterListSection" of service "SFOData".
 */
export class FormRaterListSection extends Entity implements FormRaterListSectionType {
  /**
   * Technical entity name for FormRaterListSection.
   */
  static _entityName = 'FormRaterListSection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormRaterListSection.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * category.
   * @nullable
   */
  category?: string;
  /**
   * cellPhone.
   * @nullable
   */
  cellPhone?: string;
  /**
   * company.
   * @nullable
   */
  company?: string;
  /**
   * department.
   * @nullable
   */
  department?: string;
  /**
   * division.
   * @nullable
   */
  division?: string;
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * internalOrExternal.
   * @nullable
   */
  internalOrExternal?: string;
  /**
   * jobCode.
   * @nullable
   */
  jobCode?: string;
  /**
   * jobTitle.
   * @nullable
   */
  jobTitle?: string;
  /**
   * mail.
   * @nullable
   */
  mail?: string;
  /**
   * manager.
   * @nullable
   */
  manager?: string;
  /**
   * participantID.
   * @nullable
   */
  participantId?: string;
  /**
   * participantName.
   * @nullable
   */
  participantName?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  participantUser!: User;

  /**
   * Returns an entity builder to construct instances `FormRaterListSection`.
   * @returns A builder that constructs instances of entity type `FormRaterListSection`.
   */
  static builder(): EntityBuilderType<FormRaterListSection, FormRaterListSectionTypeForceMandatory> {
    return Entity.entityBuilder(FormRaterListSection);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormRaterListSection` entity type.
   * @returns A `FormRaterListSection` request builder.
   */
  static requestBuilder(): FormRaterListSectionRequestBuilder {
    return new FormRaterListSectionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormRaterListSection`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormRaterListSection`.
   */
  static customField(fieldName: string): CustomField<FormRaterListSection> {
    return Entity.customFieldSelector(fieldName, FormRaterListSection);
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

export interface FormRaterListSectionType {
  category?: string;
  cellPhone?: string;
  company?: string;
  department?: string;
  division?: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  internalOrExternal?: string;
  jobCode?: string;
  jobTitle?: string;
  mail?: string;
  manager?: string;
  participantId?: string;
  participantName?: string;
  participantUser: UserType;
}

export interface FormRaterListSectionTypeForceMandatory {
  category: string;
  cellPhone: string;
  company: string;
  department: string;
  division: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  internalOrExternal: string;
  jobCode: string;
  jobTitle: string;
  mail: string;
  manager: string;
  participantId: string;
  participantName: string;
  participantUser: UserType;
}

export namespace FormRaterListSection {
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<FormRaterListSection> = new StringField('category', FormRaterListSection, 'Edm.String');
  /**
   * Static representation of the [[cellPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CELL_PHONE: StringField<FormRaterListSection> = new StringField('cellPhone', FormRaterListSection, 'Edm.String');
  /**
   * Static representation of the [[company]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY: StringField<FormRaterListSection> = new StringField('company', FormRaterListSection, 'Edm.String');
  /**
   * Static representation of the [[department]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: StringField<FormRaterListSection> = new StringField('department', FormRaterListSection, 'Edm.String');
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION: StringField<FormRaterListSection> = new StringField('division', FormRaterListSection, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormRaterListSection> = new BigNumberField('formContentId', FormRaterListSection, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormRaterListSection> = new BigNumberField('formDataId', FormRaterListSection, 'Edm.Int64');
  /**
   * Static representation of the [[internalOrExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_OR_EXTERNAL: StringField<FormRaterListSection> = new StringField('internalOrExternal', FormRaterListSection, 'Edm.String');
  /**
   * Static representation of the [[jobCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE: StringField<FormRaterListSection> = new StringField('jobCode', FormRaterListSection, 'Edm.String');
  /**
   * Static representation of the [[jobTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_TITLE: StringField<FormRaterListSection> = new StringField('jobTitle', FormRaterListSection, 'Edm.String');
  /**
   * Static representation of the [[mail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIL: StringField<FormRaterListSection> = new StringField('mail', FormRaterListSection, 'Edm.String');
  /**
   * Static representation of the [[manager]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER: StringField<FormRaterListSection> = new StringField('manager', FormRaterListSection, 'Edm.String');
  /**
   * Static representation of the [[participantId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_ID: StringField<FormRaterListSection> = new StringField('participantID', FormRaterListSection, 'Edm.String');
  /**
   * Static representation of the [[participantName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_NAME: StringField<FormRaterListSection> = new StringField('participantName', FormRaterListSection, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[participantUser]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_USER: OneToOneLink<FormRaterListSection, User> = new OneToOneLink('participantUser', FormRaterListSection, User);
  /**
   * All fields of the FormRaterListSection entity.
   */
  export const _allFields: Array<StringField<FormRaterListSection> | BigNumberField<FormRaterListSection> | OneToOneLink<FormRaterListSection, User>> = [
    FormRaterListSection.CATEGORY,
    FormRaterListSection.CELL_PHONE,
    FormRaterListSection.COMPANY,
    FormRaterListSection.DEPARTMENT,
    FormRaterListSection.DIVISION,
    FormRaterListSection.FORM_CONTENT_ID,
    FormRaterListSection.FORM_DATA_ID,
    FormRaterListSection.INTERNAL_OR_EXTERNAL,
    FormRaterListSection.JOB_CODE,
    FormRaterListSection.JOB_TITLE,
    FormRaterListSection.MAIL,
    FormRaterListSection.MANAGER,
    FormRaterListSection.PARTICIPANT_ID,
    FormRaterListSection.PARTICIPANT_NAME,
    FormRaterListSection.PARTICIPANT_USER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormRaterListSection> = new AllFields('*', FormRaterListSection);
  /**
   * All key fields of the FormRaterListSection entity.
   */
  export const _keyFields: Array<Selectable<FormRaterListSection>> = [FormRaterListSection.FORM_CONTENT_ID, FormRaterListSection.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property FormRaterListSection.
   */
  export const _keys: { [keys: string]: Selectable<FormRaterListSection> } = FormRaterListSection._keyFields.reduce((acc: { [keys: string]: Selectable<FormRaterListSection> }, field: Selectable<FormRaterListSection>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

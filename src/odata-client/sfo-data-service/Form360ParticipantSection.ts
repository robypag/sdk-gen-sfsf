/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Form360ParticipantSectionRequestBuilder } from './Form360ParticipantSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Form360ParticipantSection" of service "SFOData".
 */
export class Form360ParticipantSection extends Entity implements Form360ParticipantSectionType {
  /**
   * Technical entity name for Form360ParticipantSection.
   */
  static _entityName = 'Form360ParticipantSection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Form360ParticipantSection.
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
   * sectionConfigurable.
   * @nullable
   */
  sectionConfigurable?: boolean;
  /**
   * sectionDescription.
   * @nullable
   */
  sectionDescription?: string;
  /**
   * sectionIndex.
   */
  sectionIndex!: number;
  /**
   * sectionName.
   */
  sectionName!: string;
  /**
   * One-to-many navigation property to the [[Form360Participant]] entity.
   */
  formParticipants!: Form360Participant[];
  /**
   * One-to-one navigation property to the [[Form360ParticipantConfig]] entity.
   */
  participantConfig!: Form360ParticipantConfig;

  /**
   * Returns an entity builder to construct instances `Form360ParticipantSection`.
   * @returns A builder that constructs instances of entity type `Form360ParticipantSection`.
   */
  static builder(): EntityBuilderType<Form360ParticipantSection, Form360ParticipantSectionTypeForceMandatory> {
    return Entity.entityBuilder(Form360ParticipantSection);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Form360ParticipantSection` entity type.
   * @returns A `Form360ParticipantSection` request builder.
   */
  static requestBuilder(): Form360ParticipantSectionRequestBuilder {
    return new Form360ParticipantSectionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360ParticipantSection`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Form360ParticipantSection`.
   */
  static customField(fieldName: string): CustomField<Form360ParticipantSection> {
    return Entity.customFieldSelector(fieldName, Form360ParticipantSection);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Form360Participant, Form360ParticipantType } from './Form360Participant';
import { Form360ParticipantConfig, Form360ParticipantConfigType } from './Form360ParticipantConfig';

export interface Form360ParticipantSectionType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionConfigurable?: boolean;
  sectionDescription?: string;
  sectionIndex: number;
  sectionName: string;
  formParticipants: Form360ParticipantType[];
  participantConfig: Form360ParticipantConfigType;
}

export interface Form360ParticipantSectionTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionConfigurable: boolean;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
  formParticipants: Form360ParticipantType[];
  participantConfig: Form360ParticipantConfigType;
}

export namespace Form360ParticipantSection {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<Form360ParticipantSection> = new BigNumberField('formContentId', Form360ParticipantSection, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<Form360ParticipantSection> = new BigNumberField('formDataId', Form360ParticipantSection, 'Edm.Int64');
  /**
   * Static representation of the [[sectionConfigurable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_CONFIGURABLE: BooleanField<Form360ParticipantSection> = new BooleanField('sectionConfigurable', Form360ParticipantSection, 'Edm.Boolean');
  /**
   * Static representation of the [[sectionDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_DESCRIPTION: StringField<Form360ParticipantSection> = new StringField('sectionDescription', Form360ParticipantSection, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<Form360ParticipantSection> = new NumberField('sectionIndex', Form360ParticipantSection, 'Edm.Int32');
  /**
   * Static representation of the [[sectionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_NAME: StringField<Form360ParticipantSection> = new StringField('sectionName', Form360ParticipantSection, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[formParticipants]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_PARTICIPANTS: Link<Form360ParticipantSection, Form360Participant> = new Link('formParticipants', Form360ParticipantSection, Form360Participant);
  /**
   * Static representation of the one-to-one navigation property [[participantConfig]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_CONFIG: OneToOneLink<Form360ParticipantSection, Form360ParticipantConfig> = new OneToOneLink('participantConfig', Form360ParticipantSection, Form360ParticipantConfig);
  /**
   * All fields of the Form360ParticipantSection entity.
   */
  export const _allFields: Array<BigNumberField<Form360ParticipantSection> | BooleanField<Form360ParticipantSection> | StringField<Form360ParticipantSection> | NumberField<Form360ParticipantSection> | Link<Form360ParticipantSection, Form360Participant> | OneToOneLink<Form360ParticipantSection, Form360ParticipantConfig>> = [
    Form360ParticipantSection.FORM_CONTENT_ID,
    Form360ParticipantSection.FORM_DATA_ID,
    Form360ParticipantSection.SECTION_CONFIGURABLE,
    Form360ParticipantSection.SECTION_DESCRIPTION,
    Form360ParticipantSection.SECTION_INDEX,
    Form360ParticipantSection.SECTION_NAME,
    Form360ParticipantSection.FORM_PARTICIPANTS,
    Form360ParticipantSection.PARTICIPANT_CONFIG
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Form360ParticipantSection> = new AllFields('*', Form360ParticipantSection);
  /**
   * All key fields of the Form360ParticipantSection entity.
   */
  export const _keyFields: Array<Selectable<Form360ParticipantSection>> = [Form360ParticipantSection.FORM_CONTENT_ID, Form360ParticipantSection.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property Form360ParticipantSection.
   */
  export const _keys: { [keys: string]: Selectable<Form360ParticipantSection> } = Form360ParticipantSection._keyFields.reduce((acc: { [keys: string]: Selectable<Form360ParticipantSection> }, field: Selectable<Form360ParticipantSection>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

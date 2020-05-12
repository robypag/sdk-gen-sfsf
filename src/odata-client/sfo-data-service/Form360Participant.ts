/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Form360ParticipantRequestBuilder } from './Form360ParticipantRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Form360Participant" of service "SFOData".
 */
export class Form360Participant extends Entity implements Form360ParticipantType {
  /**
   * Technical entity name for Form360Participant.
   */
  static _entityName = 'Form360Participant';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Form360Participant.
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
   * isExternalUser.
   * @nullable
   */
  isExternalUser?: boolean;
  /**
   * isFixedCategory.
   * @nullable
   */
  isFixedCategory?: boolean;
  /**
   * isRemovable.
   * @nullable
   */
  isRemovable?: boolean;
  /**
   * participantAction.
   * @nullable
   */
  participantAction?: string;
  /**
   * participantCategory.
   * @nullable
   */
  participantCategory?: string;
  /**
   * participantId.
   */
  participantId!: string;
  /**
   * participantOrder.
   * @nullable
   */
  participantOrder?: number;
  /**
   * participantUsername.
   * @nullable
   */
  participantUsername?: string;
  /**
   * One-to-many navigation property to the [[Form360ParticipantDetail]] entity.
   */
  participantDetails!: Form360ParticipantDetail[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  participantUser!: User;

  /**
   * Returns an entity builder to construct instances `Form360Participant`.
   * @returns A builder that constructs instances of entity type `Form360Participant`.
   */
  static builder(): EntityBuilderType<Form360Participant, Form360ParticipantTypeForceMandatory> {
    return Entity.entityBuilder(Form360Participant);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Form360Participant` entity type.
   * @returns A `Form360Participant` request builder.
   */
  static requestBuilder(): Form360ParticipantRequestBuilder {
    return new Form360ParticipantRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360Participant`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Form360Participant`.
   */
  static customField(fieldName: string): CustomField<Form360Participant> {
    return Entity.customFieldSelector(fieldName, Form360Participant);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Form360ParticipantDetail, Form360ParticipantDetailType } from './Form360ParticipantDetail';
import { User, UserType } from './User';

export interface Form360ParticipantType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  isExternalUser?: boolean;
  isFixedCategory?: boolean;
  isRemovable?: boolean;
  participantAction?: string;
  participantCategory?: string;
  participantId: string;
  participantOrder?: number;
  participantUsername?: string;
  participantDetails: Form360ParticipantDetailType[];
  participantUser: UserType;
}

export interface Form360ParticipantTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  isExternalUser: boolean;
  isFixedCategory: boolean;
  isRemovable: boolean;
  participantAction: string;
  participantCategory: string;
  participantId: string;
  participantOrder: number;
  participantUsername: string;
  participantDetails: Form360ParticipantDetailType[];
  participantUser: UserType;
}

export namespace Form360Participant {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<Form360Participant> = new BigNumberField('formContentId', Form360Participant, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<Form360Participant> = new BigNumberField('formDataId', Form360Participant, 'Edm.Int64');
  /**
   * Static representation of the [[isExternalUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_EXTERNAL_USER: BooleanField<Form360Participant> = new BooleanField('isExternalUser', Form360Participant, 'Edm.Boolean');
  /**
   * Static representation of the [[isFixedCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_FIXED_CATEGORY: BooleanField<Form360Participant> = new BooleanField('isFixedCategory', Form360Participant, 'Edm.Boolean');
  /**
   * Static representation of the [[isRemovable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_REMOVABLE: BooleanField<Form360Participant> = new BooleanField('isRemovable', Form360Participant, 'Edm.Boolean');
  /**
   * Static representation of the [[participantAction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_ACTION: StringField<Form360Participant> = new StringField('participantAction', Form360Participant, 'Edm.String');
  /**
   * Static representation of the [[participantCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_CATEGORY: StringField<Form360Participant> = new StringField('participantCategory', Form360Participant, 'Edm.String');
  /**
   * Static representation of the [[participantId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_ID: StringField<Form360Participant> = new StringField('participantId', Form360Participant, 'Edm.String');
  /**
   * Static representation of the [[participantOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_ORDER: NumberField<Form360Participant> = new NumberField('participantOrder', Form360Participant, 'Edm.Int32');
  /**
   * Static representation of the [[participantUsername]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_USERNAME: StringField<Form360Participant> = new StringField('participantUsername', Form360Participant, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[participantDetails]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_DETAILS: Link<Form360Participant, Form360ParticipantDetail> = new Link('participantDetails', Form360Participant, Form360ParticipantDetail);
  /**
   * Static representation of the one-to-one navigation property [[participantUser]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_USER: OneToOneLink<Form360Participant, User> = new OneToOneLink('participantUser', Form360Participant, User);
  /**
   * All fields of the Form360Participant entity.
   */
  export const _allFields: Array<BigNumberField<Form360Participant> | BooleanField<Form360Participant> | StringField<Form360Participant> | NumberField<Form360Participant> | Link<Form360Participant, Form360ParticipantDetail> | OneToOneLink<Form360Participant, User>> = [
    Form360Participant.FORM_CONTENT_ID,
    Form360Participant.FORM_DATA_ID,
    Form360Participant.IS_EXTERNAL_USER,
    Form360Participant.IS_FIXED_CATEGORY,
    Form360Participant.IS_REMOVABLE,
    Form360Participant.PARTICIPANT_ACTION,
    Form360Participant.PARTICIPANT_CATEGORY,
    Form360Participant.PARTICIPANT_ID,
    Form360Participant.PARTICIPANT_ORDER,
    Form360Participant.PARTICIPANT_USERNAME,
    Form360Participant.PARTICIPANT_DETAILS,
    Form360Participant.PARTICIPANT_USER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Form360Participant> = new AllFields('*', Form360Participant);
  /**
   * All key fields of the Form360Participant entity.
   */
  export const _keyFields: Array<Selectable<Form360Participant>> = [Form360Participant.FORM_CONTENT_ID, Form360Participant.FORM_DATA_ID, Form360Participant.PARTICIPANT_ID];
  /**
   * Mapping of all key field names to the respective static field property Form360Participant.
   */
  export const _keys: { [keys: string]: Selectable<Form360Participant> } = Form360Participant._keyFields.reduce((acc: { [keys: string]: Selectable<Form360Participant> }, field: Selectable<Form360Participant>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

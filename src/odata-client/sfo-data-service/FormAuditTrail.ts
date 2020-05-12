/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormAuditTrailRequestBuilder } from './FormAuditTrailRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormAuditTrail" of service "SFOData".
 */
export class FormAuditTrail extends Entity implements FormAuditTrailType {
  /**
   * Technical entity name for FormAuditTrail.
   */
  static _entityName = 'FormAuditTrail';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormAuditTrail.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * auditTrailAction.
   * @nullable
   */
  auditTrailAction?: string;
  /**
   * auditTrailCoSender.
   * @nullable
   */
  auditTrailCoSender?: string;
  /**
   * auditTrailComment.
   * @nullable
   */
  auditTrailComment?: string;
  /**
   * auditTrailId.
   */
  auditTrailId!: BigNumber;
  /**
   * auditTrailLastModified.
   * @nullable
   */
  auditTrailLastModified?: Moment;
  /**
   * auditTrailRecipient.
   * @nullable
   */
  auditTrailRecipient?: string;
  /**
   * auditTrailSendProxy.
   * @nullable
   */
  auditTrailSendProxy?: string;
  /**
   * auditTrailSender.
   * @nullable
   */
  auditTrailSender?: string;
  /**
   * formContentAssociatedStepId.
   * @nullable
   */
  formContentAssociatedStepId?: string;
  /**
   * formContentId.
   * @nullable
   */
  formContentId?: BigNumber;
  /**
   * formDataId.
   * @nullable
   */
  formDataId?: BigNumber;
  /**
   * One-to-one navigation property to the [[FormContent]] entity.
   */
  formContent!: FormContent;
  /**
   * One-to-one navigation property to the [[FormHeader]] entity.
   */
  formHeader!: FormHeader;

  /**
   * Returns an entity builder to construct instances `FormAuditTrail`.
   * @returns A builder that constructs instances of entity type `FormAuditTrail`.
   */
  static builder(): EntityBuilderType<FormAuditTrail, FormAuditTrailTypeForceMandatory> {
    return Entity.entityBuilder(FormAuditTrail);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormAuditTrail` entity type.
   * @returns A `FormAuditTrail` request builder.
   */
  static requestBuilder(): FormAuditTrailRequestBuilder {
    return new FormAuditTrailRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormAuditTrail`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormAuditTrail`.
   */
  static customField(fieldName: string): CustomField<FormAuditTrail> {
    return Entity.customFieldSelector(fieldName, FormAuditTrail);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormContent, FormContentType } from './FormContent';
import { FormHeader, FormHeaderType } from './FormHeader';

export interface FormAuditTrailType {
  auditTrailAction?: string;
  auditTrailCoSender?: string;
  auditTrailComment?: string;
  auditTrailId: BigNumber;
  auditTrailLastModified?: Moment;
  auditTrailRecipient?: string;
  auditTrailSendProxy?: string;
  auditTrailSender?: string;
  formContentAssociatedStepId?: string;
  formContentId?: BigNumber;
  formDataId?: BigNumber;
  formContent: FormContentType;
  formHeader: FormHeaderType;
}

export interface FormAuditTrailTypeForceMandatory {
  auditTrailAction: string;
  auditTrailCoSender: string;
  auditTrailComment: string;
  auditTrailId: BigNumber;
  auditTrailLastModified: Moment;
  auditTrailRecipient: string;
  auditTrailSendProxy: string;
  auditTrailSender: string;
  formContentAssociatedStepId: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  formContent: FormContentType;
  formHeader: FormHeaderType;
}

export namespace FormAuditTrail {
  /**
   * Static representation of the [[auditTrailAction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUDIT_TRAIL_ACTION: StringField<FormAuditTrail> = new StringField('auditTrailAction', FormAuditTrail, 'Edm.String');
  /**
   * Static representation of the [[auditTrailCoSender]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUDIT_TRAIL_CO_SENDER: StringField<FormAuditTrail> = new StringField('auditTrailCoSender', FormAuditTrail, 'Edm.String');
  /**
   * Static representation of the [[auditTrailComment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUDIT_TRAIL_COMMENT: StringField<FormAuditTrail> = new StringField('auditTrailComment', FormAuditTrail, 'Edm.String');
  /**
   * Static representation of the [[auditTrailId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUDIT_TRAIL_ID: BigNumberField<FormAuditTrail> = new BigNumberField('auditTrailId', FormAuditTrail, 'Edm.Int64');
  /**
   * Static representation of the [[auditTrailLastModified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUDIT_TRAIL_LAST_MODIFIED: DateField<FormAuditTrail> = new DateField('auditTrailLastModified', FormAuditTrail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[auditTrailRecipient]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUDIT_TRAIL_RECIPIENT: StringField<FormAuditTrail> = new StringField('auditTrailRecipient', FormAuditTrail, 'Edm.String');
  /**
   * Static representation of the [[auditTrailSendProxy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUDIT_TRAIL_SEND_PROXY: StringField<FormAuditTrail> = new StringField('auditTrailSendProxy', FormAuditTrail, 'Edm.String');
  /**
   * Static representation of the [[auditTrailSender]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUDIT_TRAIL_SENDER: StringField<FormAuditTrail> = new StringField('auditTrailSender', FormAuditTrail, 'Edm.String');
  /**
   * Static representation of the [[formContentAssociatedStepId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ASSOCIATED_STEP_ID: StringField<FormAuditTrail> = new StringField('formContentAssociatedStepId', FormAuditTrail, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormAuditTrail> = new BigNumberField('formContentId', FormAuditTrail, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormAuditTrail> = new BigNumberField('formDataId', FormAuditTrail, 'Edm.Int64');
  /**
   * Static representation of the one-to-one navigation property [[formContent]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT: OneToOneLink<FormAuditTrail, FormContent> = new OneToOneLink('formContent', FormAuditTrail, FormContent);
  /**
   * Static representation of the one-to-one navigation property [[formHeader]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_HEADER: OneToOneLink<FormAuditTrail, FormHeader> = new OneToOneLink('formHeader', FormAuditTrail, FormHeader);
  /**
   * All fields of the FormAuditTrail entity.
   */
  export const _allFields: Array<StringField<FormAuditTrail> | BigNumberField<FormAuditTrail> | DateField<FormAuditTrail> | OneToOneLink<FormAuditTrail, FormContent> | OneToOneLink<FormAuditTrail, FormHeader>> = [
    FormAuditTrail.AUDIT_TRAIL_ACTION,
    FormAuditTrail.AUDIT_TRAIL_CO_SENDER,
    FormAuditTrail.AUDIT_TRAIL_COMMENT,
    FormAuditTrail.AUDIT_TRAIL_ID,
    FormAuditTrail.AUDIT_TRAIL_LAST_MODIFIED,
    FormAuditTrail.AUDIT_TRAIL_RECIPIENT,
    FormAuditTrail.AUDIT_TRAIL_SEND_PROXY,
    FormAuditTrail.AUDIT_TRAIL_SENDER,
    FormAuditTrail.FORM_CONTENT_ASSOCIATED_STEP_ID,
    FormAuditTrail.FORM_CONTENT_ID,
    FormAuditTrail.FORM_DATA_ID,
    FormAuditTrail.FORM_CONTENT,
    FormAuditTrail.FORM_HEADER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormAuditTrail> = new AllFields('*', FormAuditTrail);
  /**
   * All key fields of the FormAuditTrail entity.
   */
  export const _keyFields: Array<Selectable<FormAuditTrail>> = [FormAuditTrail.AUDIT_TRAIL_ID];
  /**
   * Mapping of all key field names to the respective static field property FormAuditTrail.
   */
  export const _keys: { [keys: string]: Selectable<FormAuditTrail> } = FormAuditTrail._keyFields.reduce((acc: { [keys: string]: Selectable<FormAuditTrail> }, field: Selectable<FormAuditTrail>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalLearnerEmailInfoRequestBuilder } from './ExternalLearnerEmailInfoRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ExternalLearnerEmailInfo" of service "SFOData".
 */
export class ExternalLearnerEmailInfo extends Entity implements ExternalLearnerEmailInfoType {
  /**
   * Technical entity name for ExternalLearnerEmailInfo.
   */
  static _entityName = 'ExternalLearnerEmailInfo';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ExternalLearnerEmailInfo.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Email Address.
   * Maximum length: 100.
   * @nullable
   */
  emailAddress?: string;
  /**
   * Email Type.
   * Maximum length: 38.
   * @nullable
   */
  emailType?: string;
  /**
   * Is Primary.
   * @nullable
   */
  isPrimary?: boolean;
  /**
   * is_deleted.
   * @nullable
   */
  isDeleted?: boolean;
  /**
   * itemId.
   */
  itemId!: BigNumber;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  emailTypeNav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `ExternalLearnerEmailInfo`.
   * @returns A builder that constructs instances of entity type `ExternalLearnerEmailInfo`.
   */
  static builder(): EntityBuilderType<ExternalLearnerEmailInfo, ExternalLearnerEmailInfoTypeForceMandatory> {
    return Entity.entityBuilder(ExternalLearnerEmailInfo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ExternalLearnerEmailInfo` entity type.
   * @returns A `ExternalLearnerEmailInfo` request builder.
   */
  static requestBuilder(): ExternalLearnerEmailInfoRequestBuilder {
    return new ExternalLearnerEmailInfoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalLearnerEmailInfo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ExternalLearnerEmailInfo`.
   */
  static customField(fieldName: string): CustomField<ExternalLearnerEmailInfo> {
    return Entity.customFieldSelector(fieldName, ExternalLearnerEmailInfo);
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

export interface ExternalLearnerEmailInfoType {
  emailAddress?: string;
  emailType?: string;
  isPrimary?: boolean;
  isDeleted?: boolean;
  itemId: BigNumber;
  lastModifiedDateTime?: Moment;
  emailTypeNav: PicklistOptionType;
}

export interface ExternalLearnerEmailInfoTypeForceMandatory {
  emailAddress: string;
  emailType: string;
  isPrimary: boolean;
  isDeleted: boolean;
  itemId: BigNumber;
  lastModifiedDateTime: Moment;
  emailTypeNav: PicklistOptionType;
}

export namespace ExternalLearnerEmailInfo {
  /**
   * Static representation of the [[emailAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_ADDRESS: StringField<ExternalLearnerEmailInfo> = new StringField('emailAddress', ExternalLearnerEmailInfo, 'Edm.String');
  /**
   * Static representation of the [[emailType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_TYPE: StringField<ExternalLearnerEmailInfo> = new StringField('emailType', ExternalLearnerEmailInfo, 'Edm.String');
  /**
   * Static representation of the [[isPrimary]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_PRIMARY: BooleanField<ExternalLearnerEmailInfo> = new BooleanField('isPrimary', ExternalLearnerEmailInfo, 'Edm.Boolean');
  /**
   * Static representation of the [[isDeleted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DELETED: BooleanField<ExternalLearnerEmailInfo> = new BooleanField('is_deleted', ExternalLearnerEmailInfo, 'Edm.Boolean');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: BigNumberField<ExternalLearnerEmailInfo> = new BigNumberField('itemId', ExternalLearnerEmailInfo, 'Edm.Decimal');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<ExternalLearnerEmailInfo> = new DateField('lastModifiedDateTime', ExternalLearnerEmailInfo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the one-to-one navigation property [[emailTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_TYPE_NAV: OneToOneLink<ExternalLearnerEmailInfo, PicklistOption> = new OneToOneLink('emailTypeNav', ExternalLearnerEmailInfo, PicklistOption);
  /**
   * All fields of the ExternalLearnerEmailInfo entity.
   */
  export const _allFields: Array<StringField<ExternalLearnerEmailInfo> | BooleanField<ExternalLearnerEmailInfo> | BigNumberField<ExternalLearnerEmailInfo> | DateField<ExternalLearnerEmailInfo> | OneToOneLink<ExternalLearnerEmailInfo, PicklistOption>> = [
    ExternalLearnerEmailInfo.EMAIL_ADDRESS,
    ExternalLearnerEmailInfo.EMAIL_TYPE,
    ExternalLearnerEmailInfo.IS_PRIMARY,
    ExternalLearnerEmailInfo.IS_DELETED,
    ExternalLearnerEmailInfo.ITEM_ID,
    ExternalLearnerEmailInfo.LAST_MODIFIED_DATE_TIME,
    ExternalLearnerEmailInfo.EMAIL_TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ExternalLearnerEmailInfo> = new AllFields('*', ExternalLearnerEmailInfo);
  /**
   * All key fields of the ExternalLearnerEmailInfo entity.
   */
  export const _keyFields: Array<Selectable<ExternalLearnerEmailInfo>> = [ExternalLearnerEmailInfo.ITEM_ID];
  /**
   * Mapping of all key field names to the respective static field property ExternalLearnerEmailInfo.
   */
  export const _keys: { [keys: string]: Selectable<ExternalLearnerEmailInfo> } = ExternalLearnerEmailInfo._keyFields.reduce((acc: { [keys: string]: Selectable<ExternalLearnerEmailInfo> }, field: Selectable<ExternalLearnerEmailInfo>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

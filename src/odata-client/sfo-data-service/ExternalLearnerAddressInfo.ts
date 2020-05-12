/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalLearnerAddressInfoRequestBuilder } from './ExternalLearnerAddressInfoRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ExternalLearnerAddressInfo" of service "SFOData".
 */
export class ExternalLearnerAddressInfo extends Entity implements ExternalLearnerAddressInfoType {
  /**
   * Technical entity name for ExternalLearnerAddressInfo.
   */
  static _entityName = 'ExternalLearnerAddressInfo';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ExternalLearnerAddressInfo.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * addressType.
   * Maximum length: 30.
   * @nullable
   */
  addressType?: string;
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
  addressTypeNav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `ExternalLearnerAddressInfo`.
   * @returns A builder that constructs instances of entity type `ExternalLearnerAddressInfo`.
   */
  static builder(): EntityBuilderType<ExternalLearnerAddressInfo, ExternalLearnerAddressInfoTypeForceMandatory> {
    return Entity.entityBuilder(ExternalLearnerAddressInfo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ExternalLearnerAddressInfo` entity type.
   * @returns A `ExternalLearnerAddressInfo` request builder.
   */
  static requestBuilder(): ExternalLearnerAddressInfoRequestBuilder {
    return new ExternalLearnerAddressInfoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalLearnerAddressInfo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ExternalLearnerAddressInfo`.
   */
  static customField(fieldName: string): CustomField<ExternalLearnerAddressInfo> {
    return Entity.customFieldSelector(fieldName, ExternalLearnerAddressInfo);
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

export interface ExternalLearnerAddressInfoType {
  addressType?: string;
  isDeleted?: boolean;
  itemId: BigNumber;
  lastModifiedDateTime?: Moment;
  addressTypeNav: PicklistOptionType;
}

export interface ExternalLearnerAddressInfoTypeForceMandatory {
  addressType: string;
  isDeleted: boolean;
  itemId: BigNumber;
  lastModifiedDateTime: Moment;
  addressTypeNav: PicklistOptionType;
}

export namespace ExternalLearnerAddressInfo {
  /**
   * Static representation of the [[addressType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_TYPE: StringField<ExternalLearnerAddressInfo> = new StringField('addressType', ExternalLearnerAddressInfo, 'Edm.String');
  /**
   * Static representation of the [[isDeleted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DELETED: BooleanField<ExternalLearnerAddressInfo> = new BooleanField('is_deleted', ExternalLearnerAddressInfo, 'Edm.Boolean');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: BigNumberField<ExternalLearnerAddressInfo> = new BigNumberField('itemId', ExternalLearnerAddressInfo, 'Edm.Decimal');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<ExternalLearnerAddressInfo> = new DateField('lastModifiedDateTime', ExternalLearnerAddressInfo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the one-to-one navigation property [[addressTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_TYPE_NAV: OneToOneLink<ExternalLearnerAddressInfo, PicklistOption> = new OneToOneLink('addressTypeNav', ExternalLearnerAddressInfo, PicklistOption);
  /**
   * All fields of the ExternalLearnerAddressInfo entity.
   */
  export const _allFields: Array<StringField<ExternalLearnerAddressInfo> | BooleanField<ExternalLearnerAddressInfo> | BigNumberField<ExternalLearnerAddressInfo> | DateField<ExternalLearnerAddressInfo> | OneToOneLink<ExternalLearnerAddressInfo, PicklistOption>> = [
    ExternalLearnerAddressInfo.ADDRESS_TYPE,
    ExternalLearnerAddressInfo.IS_DELETED,
    ExternalLearnerAddressInfo.ITEM_ID,
    ExternalLearnerAddressInfo.LAST_MODIFIED_DATE_TIME,
    ExternalLearnerAddressInfo.ADDRESS_TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ExternalLearnerAddressInfo> = new AllFields('*', ExternalLearnerAddressInfo);
  /**
   * All key fields of the ExternalLearnerAddressInfo entity.
   */
  export const _keyFields: Array<Selectable<ExternalLearnerAddressInfo>> = [ExternalLearnerAddressInfo.ITEM_ID];
  /**
   * Mapping of all key field names to the respective static field property ExternalLearnerAddressInfo.
   */
  export const _keys: { [keys: string]: Selectable<ExternalLearnerAddressInfo> } = ExternalLearnerAddressInfo._keyFields.reduce((acc: { [keys: string]: Selectable<ExternalLearnerAddressInfo> }, field: Selectable<ExternalLearnerAddressInfo>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

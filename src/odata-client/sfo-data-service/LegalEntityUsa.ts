/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LegalEntityUsaRequestBuilder } from './LegalEntityUsaRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "LegalEntityUSA" of service "SFOData".
 */
export class LegalEntityUsa extends Entity implements LegalEntityUsaType {
  /**
   * Technical entity name for LegalEntityUsa.
   */
  static _entityName = 'LegalEntityUSA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for LegalEntityUsa.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Legal Entity_Effective as of.
   */
  legalEntityEffectiveStartDate!: Moment;
  /**
   * Legal Entity_Code.
   * Maximum length: 32.
   */
  legalEntityExternalCode!: string;
  /**
   * createdBy.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * EEO Company Code.
   * Maximum length: 45.
   * @nullable
   */
  eeoCompanyCode?: string;
  /**
   * Employer ID.
   * Maximum length: 45.
   * @nullable
   */
  employerId?: string;
  /**
   * externalCode.
   */
  externalCode!: BigNumber;
  /**
   * Fed Reserve Bank District.
   * Maximum length: 45.
   * @nullable
   */
  fedReserveBankDistrict?: string;
  /**
   * Federal Reserve Bank ID.
   * Maximum length: 45.
   * @nullable
   */
  federalReserveBankId?: string;
  /**
   * lastModifiedBy.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Legal Entity Type.
   * Maximum length: 128.
   * @nullable
   */
  legalEntityType?: string;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-many navigation property to the [[PickListValueV2]] entity.
   */
  legalEntityTypeNav!: PickListValueV2[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `LegalEntityUsa`.
   * @returns A builder that constructs instances of entity type `LegalEntityUsa`.
   */
  static builder(): EntityBuilderType<LegalEntityUsa, LegalEntityUsaTypeForceMandatory> {
    return Entity.entityBuilder(LegalEntityUsa);
  }

  /**
   * Returns a request builder to construct requests for operations on the `LegalEntityUsa` entity type.
   * @returns A `LegalEntityUsa` request builder.
   */
  static requestBuilder(): LegalEntityUsaRequestBuilder {
    return new LegalEntityUsaRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalEntityUsa`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `LegalEntityUsa`.
   */
  static customField(fieldName: string): CustomField<LegalEntityUsa> {
    return Entity.customFieldSelector(fieldName, LegalEntityUsa);
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
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface LegalEntityUsaType {
  legalEntityEffectiveStartDate: Moment;
  legalEntityExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  eeoCompanyCode?: string;
  employerId?: string;
  externalCode: BigNumber;
  fedReserveBankDistrict?: string;
  federalReserveBankId?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  legalEntityType?: string;
  mdfSystemRecordStatus?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  legalEntityTypeNav: PickListValueV2Type[];
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface LegalEntityUsaTypeForceMandatory {
  legalEntityEffectiveStartDate: Moment;
  legalEntityExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  eeoCompanyCode: string;
  employerId: string;
  externalCode: BigNumber;
  fedReserveBankDistrict: string;
  federalReserveBankId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  legalEntityType: string;
  mdfSystemRecordStatus: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  legalEntityTypeNav: PickListValueV2Type[];
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace LegalEntityUsa {
  /**
   * Static representation of the [[legalEntityEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_EFFECTIVE_START_DATE: DateField<LegalEntityUsa> = new DateField('LegalEntity_effectiveStartDate', LegalEntityUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[legalEntityExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_EXTERNAL_CODE: StringField<LegalEntityUsa> = new StringField('LegalEntity_externalCode', LegalEntityUsa, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<LegalEntityUsa> = new StringField('createdBy', LegalEntityUsa, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<LegalEntityUsa> = new DateField('createdDateTime', LegalEntityUsa, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[eeoCompanyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_COMPANY_CODE: StringField<LegalEntityUsa> = new StringField('eeoCompanyCode', LegalEntityUsa, 'Edm.String');
  /**
   * Static representation of the [[employerId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYER_ID: StringField<LegalEntityUsa> = new StringField('employerID', LegalEntityUsa, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<LegalEntityUsa> = new BigNumberField('externalCode', LegalEntityUsa, 'Edm.Int64');
  /**
   * Static representation of the [[fedReserveBankDistrict]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FED_RESERVE_BANK_DISTRICT: StringField<LegalEntityUsa> = new StringField('fedReserveBankDistrict', LegalEntityUsa, 'Edm.String');
  /**
   * Static representation of the [[federalReserveBankId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEDERAL_RESERVE_BANK_ID: StringField<LegalEntityUsa> = new StringField('federalReserveBankID', LegalEntityUsa, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<LegalEntityUsa> = new StringField('lastModifiedBy', LegalEntityUsa, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<LegalEntityUsa> = new DateField('lastModifiedDateTime', LegalEntityUsa, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[legalEntityType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_TYPE: StringField<LegalEntityUsa> = new StringField('legalEntityType', LegalEntityUsa, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<LegalEntityUsa> = new StringField('mdfSystemRecordStatus', LegalEntityUsa, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<LegalEntityUsa, User> = new OneToOneLink('createdByNav', LegalEntityUsa, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<LegalEntityUsa, User> = new OneToOneLink('lastModifiedByNav', LegalEntityUsa, User);
  /**
   * Static representation of the one-to-many navigation property [[legalEntityTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_TYPE_NAV: Link<LegalEntityUsa, PickListValueV2> = new Link('legalEntityTypeNav', LegalEntityUsa, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<LegalEntityUsa, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', LegalEntityUsa, MdfEnumValue);
  /**
   * All fields of the LegalEntityUsa entity.
   */
  export const _allFields: Array<DateField<LegalEntityUsa> | StringField<LegalEntityUsa> | BigNumberField<LegalEntityUsa> | OneToOneLink<LegalEntityUsa, User> | Link<LegalEntityUsa, PickListValueV2> | OneToOneLink<LegalEntityUsa, MdfEnumValue>> = [
    LegalEntityUsa.LEGAL_ENTITY_EFFECTIVE_START_DATE,
    LegalEntityUsa.LEGAL_ENTITY_EXTERNAL_CODE,
    LegalEntityUsa.CREATED_BY,
    LegalEntityUsa.CREATED_DATE_TIME,
    LegalEntityUsa.EEO_COMPANY_CODE,
    LegalEntityUsa.EMPLOYER_ID,
    LegalEntityUsa.EXTERNAL_CODE,
    LegalEntityUsa.FED_RESERVE_BANK_DISTRICT,
    LegalEntityUsa.FEDERAL_RESERVE_BANK_ID,
    LegalEntityUsa.LAST_MODIFIED_BY,
    LegalEntityUsa.LAST_MODIFIED_DATE_TIME,
    LegalEntityUsa.LEGAL_ENTITY_TYPE,
    LegalEntityUsa.MDF_SYSTEM_RECORD_STATUS,
    LegalEntityUsa.CREATED_BY_NAV,
    LegalEntityUsa.LAST_MODIFIED_BY_NAV,
    LegalEntityUsa.LEGAL_ENTITY_TYPE_NAV,
    LegalEntityUsa.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<LegalEntityUsa> = new AllFields('*', LegalEntityUsa);
  /**
   * All key fields of the LegalEntityUsa entity.
   */
  export const _keyFields: Array<Selectable<LegalEntityUsa>> = [LegalEntityUsa.LEGAL_ENTITY_EFFECTIVE_START_DATE, LegalEntityUsa.LEGAL_ENTITY_EXTERNAL_CODE, LegalEntityUsa.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property LegalEntityUsa.
   */
  export const _keys: { [keys: string]: Selectable<LegalEntityUsa> } = LegalEntityUsa._keyFields.reduce((acc: { [keys: string]: Selectable<LegalEntityUsa> }, field: Selectable<LegalEntityUsa>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

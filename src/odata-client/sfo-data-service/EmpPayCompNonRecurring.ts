/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpPayCompNonRecurringRequestBuilder } from './EmpPayCompNonRecurringRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmpPayCompNonRecurring" of service "SFOData".
 */
export class EmpPayCompNonRecurring extends Entity implements EmpPayCompNonRecurringType {
  /**
   * Technical entity name for EmpPayCompNonRecurring.
   */
  static _entityName = 'EmpPayCompNonRecurring';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmpPayCompNonRecurring.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Alternative Cost Center.
   * Maximum length: 32.
   * @nullable
   */
  alternativeCostCenter?: string;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created Date Time.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Created On.
   * @nullable
   */
  createdOn?: Moment;
  /**
   * Currency Code.
   * Maximum length: 20.
   * @nullable
   */
  currencyCode?: string;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date Time.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedOn?: Moment;
  /**
   * notes.
   * Maximum length: 4000.
   * @nullable
   */
  notes?: string;
  /**
   * operation.
   * @nullable
   */
  operation?: string;
  /**
   * Type.
   */
  payComponentCode!: string;
  /**
   * Issue Date.
   */
  payDate!: Moment;
  /**
   * User ID.
   * Maximum length: 100.
   */
  userId!: string;
  /**
   * Value.
   * @nullable
   */
  value?: number;
  /**
   * One-to-many navigation property to the [[FoCostCenter]] entity.
   */
  alternativeCostCenterNav!: FoCostCenter[];
  /**
   * One-to-one navigation property to the [[EmpEmployment]] entity.
   */
  employmentNav!: EmpEmployment;
  /**
   * One-to-many navigation property to the [[FoPayComponent]] entity.
   */
  payComponentCodeNav!: FoPayComponent[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userNav!: User;
  /**
   * One-to-one navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest;

  /**
   * Returns an entity builder to construct instances `EmpPayCompNonRecurring`.
   * @returns A builder that constructs instances of entity type `EmpPayCompNonRecurring`.
   */
  static builder(): EntityBuilderType<EmpPayCompNonRecurring, EmpPayCompNonRecurringTypeForceMandatory> {
    return Entity.entityBuilder(EmpPayCompNonRecurring);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmpPayCompNonRecurring` entity type.
   * @returns A `EmpPayCompNonRecurring` request builder.
   */
  static requestBuilder(): EmpPayCompNonRecurringRequestBuilder {
    return new EmpPayCompNonRecurringRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpPayCompNonRecurring`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmpPayCompNonRecurring`.
   */
  static customField(fieldName: string): CustomField<EmpPayCompNonRecurring> {
    return Entity.customFieldSelector(fieldName, EmpPayCompNonRecurring);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { EmpEmployment, EmpEmploymentType } from './EmpEmployment';
import { FoPayComponent, FoPayComponentType } from './FoPayComponent';
import { User, UserType } from './User';
import { WfRequest, WfRequestType } from './WfRequest';

export interface EmpPayCompNonRecurringType {
  alternativeCostCenter?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  currencyCode?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  notes?: string;
  operation?: string;
  payComponentCode: string;
  payDate: Moment;
  userId: string;
  value?: number;
  alternativeCostCenterNav: FoCostCenterType[];
  employmentNav: EmpEmploymentType;
  payComponentCodeNav: FoPayComponentType[];
  userNav: UserType;
  wfRequestNav: WfRequestType;
}

export interface EmpPayCompNonRecurringTypeForceMandatory {
  alternativeCostCenter: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  currencyCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  notes: string;
  operation: string;
  payComponentCode: string;
  payDate: Moment;
  userId: string;
  value: number;
  alternativeCostCenterNav: FoCostCenterType[];
  employmentNav: EmpEmploymentType;
  payComponentCodeNav: FoPayComponentType[];
  userNav: UserType;
  wfRequestNav: WfRequestType;
}

export namespace EmpPayCompNonRecurring {
  /**
   * Static representation of the [[alternativeCostCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALTERNATIVE_COST_CENTER: StringField<EmpPayCompNonRecurring> = new StringField('alternativeCostCenter', EmpPayCompNonRecurring, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmpPayCompNonRecurring> = new StringField('createdBy', EmpPayCompNonRecurring, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmpPayCompNonRecurring> = new DateField('createdDateTime', EmpPayCompNonRecurring, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<EmpPayCompNonRecurring> = new DateField('createdOn', EmpPayCompNonRecurring, 'Edm.DateTime');
  /**
   * Static representation of the [[currencyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_CODE: StringField<EmpPayCompNonRecurring> = new StringField('currencyCode', EmpPayCompNonRecurring, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmpPayCompNonRecurring> = new StringField('lastModifiedBy', EmpPayCompNonRecurring, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmpPayCompNonRecurring> = new DateField('lastModifiedDateTime', EmpPayCompNonRecurring, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<EmpPayCompNonRecurring> = new DateField('lastModifiedOn', EmpPayCompNonRecurring, 'Edm.DateTime');
  /**
   * Static representation of the [[notes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTES: StringField<EmpPayCompNonRecurring> = new StringField('notes', EmpPayCompNonRecurring, 'Edm.String');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<EmpPayCompNonRecurring> = new StringField('operation', EmpPayCompNonRecurring, 'Edm.String');
  /**
   * Static representation of the [[payComponentCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_CODE: StringField<EmpPayCompNonRecurring> = new StringField('payComponentCode', EmpPayCompNonRecurring, 'Edm.String');
  /**
   * Static representation of the [[payDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_DATE: DateField<EmpPayCompNonRecurring> = new DateField('payDate', EmpPayCompNonRecurring, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EmpPayCompNonRecurring> = new StringField('userId', EmpPayCompNonRecurring, 'Edm.String');
  /**
   * Static representation of the [[value]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE: NumberField<EmpPayCompNonRecurring> = new NumberField('value', EmpPayCompNonRecurring, 'Edm.Double');
  /**
   * Static representation of the one-to-many navigation property [[alternativeCostCenterNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALTERNATIVE_COST_CENTER_NAV: Link<EmpPayCompNonRecurring, FoCostCenter> = new Link('alternativeCostCenterNav', EmpPayCompNonRecurring, FoCostCenter);
  /**
   * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYMENT_NAV: OneToOneLink<EmpPayCompNonRecurring, EmpEmployment> = new OneToOneLink('employmentNav', EmpPayCompNonRecurring, EmpEmployment);
  /**
   * Static representation of the one-to-many navigation property [[payComponentCodeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_CODE_NAV: Link<EmpPayCompNonRecurring, FoPayComponent> = new Link('payComponentCodeNav', EmpPayCompNonRecurring, FoPayComponent);
  /**
   * Static representation of the one-to-one navigation property [[userNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NAV: OneToOneLink<EmpPayCompNonRecurring, User> = new OneToOneLink('userNav', EmpPayCompNonRecurring, User);
  /**
   * Static representation of the one-to-one navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: OneToOneLink<EmpPayCompNonRecurring, WfRequest> = new OneToOneLink('wfRequestNav', EmpPayCompNonRecurring, WfRequest);
  /**
   * All fields of the EmpPayCompNonRecurring entity.
   */
  export const _allFields: Array<StringField<EmpPayCompNonRecurring> | DateField<EmpPayCompNonRecurring> | NumberField<EmpPayCompNonRecurring> | Link<EmpPayCompNonRecurring, FoCostCenter> | OneToOneLink<EmpPayCompNonRecurring, EmpEmployment> | Link<EmpPayCompNonRecurring, FoPayComponent> | OneToOneLink<EmpPayCompNonRecurring, User> | OneToOneLink<EmpPayCompNonRecurring, WfRequest>> = [
    EmpPayCompNonRecurring.ALTERNATIVE_COST_CENTER,
    EmpPayCompNonRecurring.CREATED_BY,
    EmpPayCompNonRecurring.CREATED_DATE_TIME,
    EmpPayCompNonRecurring.CREATED_ON,
    EmpPayCompNonRecurring.CURRENCY_CODE,
    EmpPayCompNonRecurring.LAST_MODIFIED_BY,
    EmpPayCompNonRecurring.LAST_MODIFIED_DATE_TIME,
    EmpPayCompNonRecurring.LAST_MODIFIED_ON,
    EmpPayCompNonRecurring.NOTES,
    EmpPayCompNonRecurring.OPERATION,
    EmpPayCompNonRecurring.PAY_COMPONENT_CODE,
    EmpPayCompNonRecurring.PAY_DATE,
    EmpPayCompNonRecurring.USER_ID,
    EmpPayCompNonRecurring.VALUE,
    EmpPayCompNonRecurring.ALTERNATIVE_COST_CENTER_NAV,
    EmpPayCompNonRecurring.EMPLOYMENT_NAV,
    EmpPayCompNonRecurring.PAY_COMPONENT_CODE_NAV,
    EmpPayCompNonRecurring.USER_NAV,
    EmpPayCompNonRecurring.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmpPayCompNonRecurring> = new AllFields('*', EmpPayCompNonRecurring);
  /**
   * All key fields of the EmpPayCompNonRecurring entity.
   */
  export const _keyFields: Array<Selectable<EmpPayCompNonRecurring>> = [EmpPayCompNonRecurring.PAY_COMPONENT_CODE, EmpPayCompNonRecurring.PAY_DATE, EmpPayCompNonRecurring.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property EmpPayCompNonRecurring.
   */
  export const _keys: { [keys: string]: Selectable<EmpPayCompNonRecurring> } = EmpPayCompNonRecurring._keyFields.reduce((acc: { [keys: string]: Selectable<EmpPayCompNonRecurring> }, field: Selectable<EmpPayCompNonRecurring>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

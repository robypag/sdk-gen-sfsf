/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoDynamicRoleRequestBuilder } from './FoDynamicRoleRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FODynamicRole" of service "SFOData".
 */
export class FoDynamicRole extends Entity implements FoDynamicRoleType {
  /**
   * Technical entity name for FoDynamicRole.
   */
  static _entityName = 'FODynamicRole';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoDynamicRole.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Business Unit.
   * @nullable
   */
  businessUnit?: string;
  /**
   * Legal Entity.
   * @nullable
   */
  company?: string;
  /**
   * Cost Center.
   * @nullable
   */
  costCenter?: string;
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
   * Department.
   * @nullable
   */
  department?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  description?: string;
  /**
   * division.
   * @nullable
   */
  division?: string;
  /**
   * dynamicGroup.
   * @nullable
   */
  dynamicGroup?: string;
  /**
   * Dynamic Role Assignment Id.
   */
  dynamicRoleAssignmentId!: BigNumber;
  /**
   * eventReason.
   * @nullable
   */
  eventReason?: string;
  /**
   * Dynamic Role ID.
   * Maximum length: 32.
   */
  externalCode!: string;
  /**
   * Job Classification.
   * @nullable
   */
  jobCode?: string;
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
   * Location.
   * @nullable
   */
  location?: string;
  /**
   * Dynamic Role.
   * Maximum length: 32.
   * @nullable
   */
  name?: string;
  /**
   * Pay Grade.
   * @nullable
   */
  payGrade?: string;
  /**
   * Pay Group.
   * @nullable
   */
  payGroup?: string;
  /**
   * Approver.
   * @nullable
   */
  person?: string;
  /**
   * position.
   * @nullable
   */
  position?: string;
  /**
   * Approver Type.
   * @nullable
   */
  resolverType?: string;
  /**
   * One-to-many navigation property to the [[FoBusinessUnit]] entity.
   */
  businessUnitNav!: FoBusinessUnit[];
  /**
   * One-to-many navigation property to the [[FoCompany]] entity.
   */
  companyNav!: FoCompany[];
  /**
   * One-to-many navigation property to the [[FoCostCenter]] entity.
   */
  costCenterNav!: FoCostCenter[];
  /**
   * One-to-many navigation property to the [[FoDepartment]] entity.
   */
  departmentNav!: FoDepartment[];
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  descriptionTranslationNav!: FoTranslation;
  /**
   * One-to-many navigation property to the [[FoDivision]] entity.
   */
  divisionNav!: FoDivision[];
  /**
   * One-to-one navigation property to the [[DynamicGroup]] entity.
   */
  dynamicGroupNav!: DynamicGroup;
  /**
   * One-to-many navigation property to the [[FoEventReason]] entity.
   */
  eventReasonNav!: FoEventReason[];
  /**
   * One-to-many navigation property to the [[FoJobCode]] entity.
   */
  jobCodeNav!: FoJobCode[];
  /**
   * One-to-many navigation property to the [[FoLocation]] entity.
   */
  locationNav!: FoLocation[];
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  nameTranslationNav!: FoTranslation;
  /**
   * One-to-many navigation property to the [[FoPayGrade]] entity.
   */
  payGradeNav!: FoPayGrade[];
  /**
   * One-to-many navigation property to the [[FoPayGroup]] entity.
   */
  payGroupNav!: FoPayGroup[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  personNav!: User;
  /**
   * One-to-many navigation property to the [[Position]] entity.
   */
  positionNav!: Position[];

  /**
   * Returns an entity builder to construct instances `FoDynamicRole`.
   * @returns A builder that constructs instances of entity type `FoDynamicRole`.
   */
  static builder(): EntityBuilderType<FoDynamicRole, FoDynamicRoleTypeForceMandatory> {
    return Entity.entityBuilder(FoDynamicRole);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoDynamicRole` entity type.
   * @returns A `FoDynamicRole` request builder.
   */
  static requestBuilder(): FoDynamicRoleRequestBuilder {
    return new FoDynamicRoleRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoDynamicRole`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoDynamicRole`.
   */
  static customField(fieldName: string): CustomField<FoDynamicRole> {
    return Entity.customFieldSelector(fieldName, FoDynamicRole);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoBusinessUnit, FoBusinessUnitType } from './FoBusinessUnit';
import { FoCompany, FoCompanyType } from './FoCompany';
import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { FoDepartment, FoDepartmentType } from './FoDepartment';
import { FoTranslation, FoTranslationType } from './FoTranslation';
import { FoDivision, FoDivisionType } from './FoDivision';
import { DynamicGroup, DynamicGroupType } from './DynamicGroup';
import { FoEventReason, FoEventReasonType } from './FoEventReason';
import { FoJobCode, FoJobCodeType } from './FoJobCode';
import { FoLocation, FoLocationType } from './FoLocation';
import { FoPayGrade, FoPayGradeType } from './FoPayGrade';
import { FoPayGroup, FoPayGroupType } from './FoPayGroup';
import { User, UserType } from './User';
import { Position, PositionType } from './Position';

export interface FoDynamicRoleType {
  businessUnit?: string;
  company?: string;
  costCenter?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  department?: string;
  description?: string;
  division?: string;
  dynamicGroup?: string;
  dynamicRoleAssignmentId: BigNumber;
  eventReason?: string;
  externalCode: string;
  jobCode?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  location?: string;
  name?: string;
  payGrade?: string;
  payGroup?: string;
  person?: string;
  position?: string;
  resolverType?: string;
  businessUnitNav: FoBusinessUnitType[];
  companyNav: FoCompanyType[];
  costCenterNav: FoCostCenterType[];
  departmentNav: FoDepartmentType[];
  descriptionTranslationNav: FoTranslationType;
  divisionNav: FoDivisionType[];
  dynamicGroupNav: DynamicGroupType;
  eventReasonNav: FoEventReasonType[];
  jobCodeNav: FoJobCodeType[];
  locationNav: FoLocationType[];
  nameTranslationNav: FoTranslationType;
  payGradeNav: FoPayGradeType[];
  payGroupNav: FoPayGroupType[];
  personNav: UserType;
  positionNav: PositionType[];
}

export interface FoDynamicRoleTypeForceMandatory {
  businessUnit: string;
  company: string;
  costCenter: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  department: string;
  description: string;
  division: string;
  dynamicGroup: string;
  dynamicRoleAssignmentId: BigNumber;
  eventReason: string;
  externalCode: string;
  jobCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  location: string;
  name: string;
  payGrade: string;
  payGroup: string;
  person: string;
  position: string;
  resolverType: string;
  businessUnitNav: FoBusinessUnitType[];
  companyNav: FoCompanyType[];
  costCenterNav: FoCostCenterType[];
  departmentNav: FoDepartmentType[];
  descriptionTranslationNav: FoTranslationType;
  divisionNav: FoDivisionType[];
  dynamicGroupNav: DynamicGroupType;
  eventReasonNav: FoEventReasonType[];
  jobCodeNav: FoJobCodeType[];
  locationNav: FoLocationType[];
  nameTranslationNav: FoTranslationType;
  payGradeNav: FoPayGradeType[];
  payGroupNav: FoPayGroupType[];
  personNav: UserType;
  positionNav: PositionType[];
}

export namespace FoDynamicRole {
  /**
   * Static representation of the [[businessUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_UNIT: StringField<FoDynamicRole> = new StringField('businessUnit', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the [[company]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY: StringField<FoDynamicRole> = new StringField('company', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the [[costCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER: StringField<FoDynamicRole> = new StringField('costCenter', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoDynamicRole> = new StringField('createdBy', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoDynamicRole> = new DateField('createdDateTime', FoDynamicRole, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoDynamicRole> = new DateField('createdOn', FoDynamicRole, 'Edm.DateTime');
  /**
   * Static representation of the [[department]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: StringField<FoDynamicRole> = new StringField('department', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FoDynamicRole> = new StringField('description', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION: StringField<FoDynamicRole> = new StringField('division', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the [[dynamicGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DYNAMIC_GROUP: StringField<FoDynamicRole> = new StringField('dynamicGroup', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the [[dynamicRoleAssignmentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DYNAMIC_ROLE_ASSIGNMENT_ID: BigNumberField<FoDynamicRole> = new BigNumberField('dynamicRoleAssignmentId', FoDynamicRole, 'Edm.Decimal');
  /**
   * Static representation of the [[eventReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EVENT_REASON: StringField<FoDynamicRole> = new StringField('eventReason', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoDynamicRole> = new StringField('externalCode', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the [[jobCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE: StringField<FoDynamicRole> = new StringField('jobCode', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoDynamicRole> = new StringField('lastModifiedBy', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoDynamicRole> = new DateField('lastModifiedDateTime', FoDynamicRole, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoDynamicRole> = new DateField('lastModifiedOn', FoDynamicRole, 'Edm.DateTime');
  /**
   * Static representation of the [[location]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION: StringField<FoDynamicRole> = new StringField('location', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FoDynamicRole> = new StringField('name', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the [[payGrade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_GRADE: StringField<FoDynamicRole> = new StringField('payGrade', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the [[payGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_GROUP: StringField<FoDynamicRole> = new StringField('payGroup', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the [[person]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON: StringField<FoDynamicRole> = new StringField('person', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the [[position]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION: StringField<FoDynamicRole> = new StringField('position', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the [[resolverType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOLVER_TYPE: StringField<FoDynamicRole> = new StringField('resolverType', FoDynamicRole, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[businessUnitNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_UNIT_NAV: Link<FoDynamicRole, FoBusinessUnit> = new Link('businessUnitNav', FoDynamicRole, FoBusinessUnit);
  /**
   * Static representation of the one-to-many navigation property [[companyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_NAV: Link<FoDynamicRole, FoCompany> = new Link('companyNav', FoDynamicRole, FoCompany);
  /**
   * Static representation of the one-to-many navigation property [[costCenterNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_NAV: Link<FoDynamicRole, FoCostCenter> = new Link('costCenterNav', FoDynamicRole, FoCostCenter);
  /**
   * Static representation of the one-to-many navigation property [[departmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT_NAV: Link<FoDynamicRole, FoDepartment> = new Link('departmentNav', FoDynamicRole, FoDepartment);
  /**
   * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoDynamicRole, FoTranslation> = new OneToOneLink('descriptionTranslationNav', FoDynamicRole, FoTranslation);
  /**
   * Static representation of the one-to-many navigation property [[divisionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION_NAV: Link<FoDynamicRole, FoDivision> = new Link('divisionNav', FoDynamicRole, FoDivision);
  /**
   * Static representation of the one-to-one navigation property [[dynamicGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DYNAMIC_GROUP_NAV: OneToOneLink<FoDynamicRole, DynamicGroup> = new OneToOneLink('dynamicGroupNav', FoDynamicRole, DynamicGroup);
  /**
   * Static representation of the one-to-many navigation property [[eventReasonNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EVENT_REASON_NAV: Link<FoDynamicRole, FoEventReason> = new Link('eventReasonNav', FoDynamicRole, FoEventReason);
  /**
   * Static representation of the one-to-many navigation property [[jobCodeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE_NAV: Link<FoDynamicRole, FoJobCode> = new Link('jobCodeNav', FoDynamicRole, FoJobCode);
  /**
   * Static representation of the one-to-many navigation property [[locationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_NAV: Link<FoDynamicRole, FoLocation> = new Link('locationNav', FoDynamicRole, FoLocation);
  /**
   * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_NAV: OneToOneLink<FoDynamicRole, FoTranslation> = new OneToOneLink('nameTranslationNav', FoDynamicRole, FoTranslation);
  /**
   * Static representation of the one-to-many navigation property [[payGradeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_GRADE_NAV: Link<FoDynamicRole, FoPayGrade> = new Link('payGradeNav', FoDynamicRole, FoPayGrade);
  /**
   * Static representation of the one-to-many navigation property [[payGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_GROUP_NAV: Link<FoDynamicRole, FoPayGroup> = new Link('payGroupNav', FoDynamicRole, FoPayGroup);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<FoDynamicRole, User> = new OneToOneLink('personNav', FoDynamicRole, User);
  /**
   * Static representation of the one-to-many navigation property [[positionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_NAV: Link<FoDynamicRole, Position> = new Link('positionNav', FoDynamicRole, Position);
  /**
   * All fields of the FoDynamicRole entity.
   */
  export const _allFields: Array<StringField<FoDynamicRole> | DateField<FoDynamicRole> | BigNumberField<FoDynamicRole> | Link<FoDynamicRole, FoBusinessUnit> | Link<FoDynamicRole, FoCompany> | Link<FoDynamicRole, FoCostCenter> | Link<FoDynamicRole, FoDepartment> | OneToOneLink<FoDynamicRole, FoTranslation> | Link<FoDynamicRole, FoDivision> | OneToOneLink<FoDynamicRole, DynamicGroup> | Link<FoDynamicRole, FoEventReason> | Link<FoDynamicRole, FoJobCode> | Link<FoDynamicRole, FoLocation> | Link<FoDynamicRole, FoPayGrade> | Link<FoDynamicRole, FoPayGroup> | OneToOneLink<FoDynamicRole, User> | Link<FoDynamicRole, Position>> = [
    FoDynamicRole.BUSINESS_UNIT,
    FoDynamicRole.COMPANY,
    FoDynamicRole.COST_CENTER,
    FoDynamicRole.CREATED_BY,
    FoDynamicRole.CREATED_DATE_TIME,
    FoDynamicRole.CREATED_ON,
    FoDynamicRole.DEPARTMENT,
    FoDynamicRole.DESCRIPTION,
    FoDynamicRole.DIVISION,
    FoDynamicRole.DYNAMIC_GROUP,
    FoDynamicRole.DYNAMIC_ROLE_ASSIGNMENT_ID,
    FoDynamicRole.EVENT_REASON,
    FoDynamicRole.EXTERNAL_CODE,
    FoDynamicRole.JOB_CODE,
    FoDynamicRole.LAST_MODIFIED_BY,
    FoDynamicRole.LAST_MODIFIED_DATE_TIME,
    FoDynamicRole.LAST_MODIFIED_ON,
    FoDynamicRole.LOCATION,
    FoDynamicRole.NAME,
    FoDynamicRole.PAY_GRADE,
    FoDynamicRole.PAY_GROUP,
    FoDynamicRole.PERSON,
    FoDynamicRole.POSITION,
    FoDynamicRole.RESOLVER_TYPE,
    FoDynamicRole.BUSINESS_UNIT_NAV,
    FoDynamicRole.COMPANY_NAV,
    FoDynamicRole.COST_CENTER_NAV,
    FoDynamicRole.DEPARTMENT_NAV,
    FoDynamicRole.DESCRIPTION_TRANSLATION_NAV,
    FoDynamicRole.DIVISION_NAV,
    FoDynamicRole.DYNAMIC_GROUP_NAV,
    FoDynamicRole.EVENT_REASON_NAV,
    FoDynamicRole.JOB_CODE_NAV,
    FoDynamicRole.LOCATION_NAV,
    FoDynamicRole.NAME_TRANSLATION_NAV,
    FoDynamicRole.PAY_GRADE_NAV,
    FoDynamicRole.PAY_GROUP_NAV,
    FoDynamicRole.PERSON_NAV,
    FoDynamicRole.POSITION_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoDynamicRole> = new AllFields('*', FoDynamicRole);
  /**
   * All key fields of the FoDynamicRole entity.
   */
  export const _keyFields: Array<Selectable<FoDynamicRole>> = [FoDynamicRole.DYNAMIC_ROLE_ASSIGNMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property FoDynamicRole.
   */
  export const _keys: { [keys: string]: Selectable<FoDynamicRole> } = FoDynamicRole._keyFields.reduce((acc: { [keys: string]: Selectable<FoDynamicRole> }, field: Selectable<FoDynamicRole>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

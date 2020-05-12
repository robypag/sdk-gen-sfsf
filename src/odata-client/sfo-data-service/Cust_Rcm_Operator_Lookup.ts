/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Cust_Rcm_Operator_LookupRequestBuilder } from './Cust_Rcm_Operator_LookupRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "cust_RCM_Operator_Lookup" of service "SFOData".
 */
export class Cust_Rcm_Operator_Lookup extends Entity implements Cust_Rcm_Operator_LookupType {
  /**
   * Technical entity name for Cust_Rcm_Operator_Lookup.
   */
  static _entityName = 'cust_RCM_Operator_Lookup';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Cust_Rcm_Operator_Lookup.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Recruiter.
   * Maximum length: 100.
   * @nullable
   */
  custRecruiter?: string;
  /**
   * Recruiting Team Lead.
   * Maximum length: 100.
   * @nullable
   */
  custRecruitingTeamLead?: string;
  /**
   * Region.
   * Maximum length: 255.
   * @nullable
   */
  custRegion?: string;
  /**
   * Shared Services.
   * Maximum length: 100.
   * @nullable
   */
  custSharedServices?: string;
  /**
   * Business Unit.
   * Maximum length: 128.
   * @nullable
   */
  custBusinessUnit?: string;
  /**
   * Company.
   * Maximum length: 128.
   * @nullable
   */
  custCompany?: string;
  /**
   * Cost Center.
   * Maximum length: 128.
   * @nullable
   */
  custCostCenter?: string;
  /**
   * Country (3 digit ISO).
   * Maximum length: 255.
   * @nullable
   */
  custCountry?: string;
  /**
   * Department.
   * Maximum length: 128.
   * @nullable
   */
  custDepartment?: string;
  /**
   * Division.
   * Maximum length: 128.
   * @nullable
   */
  custDivision?: string;
  /**
   * Employee Class.
   * Maximum length: 128.
   * @nullable
   */
  custEmployeeClass?: string;
  /**
   * Employment Type.
   * Maximum length: 128.
   * @nullable
   */
  custEmploymentType?: string;
  /**
   * Job Level.
   * Maximum length: 128.
   * @nullable
   */
  custJobLevel?: string;
  /**
   * Location.
   * Maximum length: 32.
   * @nullable
   */
  custLocation?: string;
  /**
   * Pay Grade.
   * Maximum length: 32.
   * @nullable
   */
  custPayGrade?: string;
  /**
   * Regular/Temporary.
   * Maximum length: 128.
   * @nullable
   */
  custRegularTemporary?: string;
  /**
   * effectiveStartDate.
   */
  effectiveStartDate!: Moment;
  /**
   * externalCode.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * externalName.
   * Maximum length: 128.
   * @nullable
   */
  externalName?: string;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Effective End Date.
   * @nullable
   */
  mdfSystemEffectiveEndDate?: Moment;
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
  custRecruiterNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  custRecruitingTeamLeadNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  custSharedServicesNav!: User;
  /**
   * One-to-one navigation property to the [[FoBusinessUnit]] entity.
   */
  custBusinessUnitNav!: FoBusinessUnit;
  /**
   * One-to-one navigation property to the [[FoCompany]] entity.
   */
  custCompanyNav!: FoCompany;
  /**
   * One-to-one navigation property to the [[FoCostCenter]] entity.
   */
  custCostCenterNav!: FoCostCenter;
  /**
   * One-to-one navigation property to the [[FoDepartment]] entity.
   */
  custDepartmentNav!: FoDepartment;
  /**
   * One-to-one navigation property to the [[FoDivision]] entity.
   */
  custDivisionNav!: FoDivision;
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  custEmployeeClassNav!: PickListValueV2;
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  custEmploymentTypeNav!: PickListValueV2;
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  custJobLevelNav!: PickListValueV2;
  /**
   * One-to-one navigation property to the [[FoLocation]] entity.
   */
  custLocationNav!: FoLocation;
  /**
   * One-to-one navigation property to the [[FoPayGrade]] entity.
   */
  custPayGradeNav!: FoPayGrade;
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  custRegularTemporaryNav!: PickListValueV2;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `Cust_Rcm_Operator_Lookup`.
   * @returns A builder that constructs instances of entity type `Cust_Rcm_Operator_Lookup`.
   */
  static builder(): EntityBuilderType<Cust_Rcm_Operator_Lookup, Cust_Rcm_Operator_LookupTypeForceMandatory> {
    return Entity.entityBuilder(Cust_Rcm_Operator_Lookup);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Cust_Rcm_Operator_Lookup` entity type.
   * @returns A `Cust_Rcm_Operator_Lookup` request builder.
   */
  static requestBuilder(): Cust_Rcm_Operator_LookupRequestBuilder {
    return new Cust_Rcm_Operator_LookupRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Cust_Rcm_Operator_Lookup`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Cust_Rcm_Operator_Lookup`.
   */
  static customField(fieldName: string): CustomField<Cust_Rcm_Operator_Lookup> {
    return Entity.customFieldSelector(fieldName, Cust_Rcm_Operator_Lookup);
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
import { FoBusinessUnit, FoBusinessUnitType } from './FoBusinessUnit';
import { FoCompany, FoCompanyType } from './FoCompany';
import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { FoDepartment, FoDepartmentType } from './FoDepartment';
import { FoDivision, FoDivisionType } from './FoDivision';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { FoLocation, FoLocationType } from './FoLocation';
import { FoPayGrade, FoPayGradeType } from './FoPayGrade';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface Cust_Rcm_Operator_LookupType {
  createdBy?: string;
  createdDateTime?: Moment;
  custRecruiter?: string;
  custRecruitingTeamLead?: string;
  custRegion?: string;
  custSharedServices?: string;
  custBusinessUnit?: string;
  custCompany?: string;
  custCostCenter?: string;
  custCountry?: string;
  custDepartment?: string;
  custDivision?: string;
  custEmployeeClass?: string;
  custEmploymentType?: string;
  custJobLevel?: string;
  custLocation?: string;
  custPayGrade?: string;
  custRegularTemporary?: string;
  effectiveStartDate: Moment;
  externalCode: string;
  externalName?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemEffectiveEndDate?: Moment;
  mdfSystemRecordStatus?: string;
  createdByNav: UserType;
  custRecruiterNav: UserType;
  custRecruitingTeamLeadNav: UserType;
  custSharedServicesNav: UserType;
  custBusinessUnitNav: FoBusinessUnitType;
  custCompanyNav: FoCompanyType;
  custCostCenterNav: FoCostCenterType;
  custDepartmentNav: FoDepartmentType;
  custDivisionNav: FoDivisionType;
  custEmployeeClassNav: PickListValueV2Type;
  custEmploymentTypeNav: PickListValueV2Type;
  custJobLevelNav: PickListValueV2Type;
  custLocationNav: FoLocationType;
  custPayGradeNav: FoPayGradeType;
  custRegularTemporaryNav: PickListValueV2Type;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface Cust_Rcm_Operator_LookupTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  custRecruiter: string;
  custRecruitingTeamLead: string;
  custRegion: string;
  custSharedServices: string;
  custBusinessUnit: string;
  custCompany: string;
  custCostCenter: string;
  custCountry: string;
  custDepartment: string;
  custDivision: string;
  custEmployeeClass: string;
  custEmploymentType: string;
  custJobLevel: string;
  custLocation: string;
  custPayGrade: string;
  custRegularTemporary: string;
  effectiveStartDate: Moment;
  externalCode: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemEffectiveEndDate: Moment;
  mdfSystemRecordStatus: string;
  createdByNav: UserType;
  custRecruiterNav: UserType;
  custRecruitingTeamLeadNav: UserType;
  custSharedServicesNav: UserType;
  custBusinessUnitNav: FoBusinessUnitType;
  custCompanyNav: FoCompanyType;
  custCostCenterNav: FoCostCenterType;
  custDepartmentNav: FoDepartmentType;
  custDivisionNav: FoDivisionType;
  custEmployeeClassNav: PickListValueV2Type;
  custEmploymentTypeNav: PickListValueV2Type;
  custJobLevelNav: PickListValueV2Type;
  custLocationNav: FoLocationType;
  custPayGradeNav: FoPayGradeType;
  custRegularTemporaryNav: PickListValueV2Type;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace Cust_Rcm_Operator_Lookup {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<Cust_Rcm_Operator_Lookup> = new StringField('createdBy', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<Cust_Rcm_Operator_Lookup> = new DateField('createdDateTime', Cust_Rcm_Operator_Lookup, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[custRecruiter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_RECRUITER: StringField<Cust_Rcm_Operator_Lookup> = new StringField('cust_Recruiter', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[custRecruitingTeamLead]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_RECRUITING_TEAM_LEAD: StringField<Cust_Rcm_Operator_Lookup> = new StringField('cust_RecruitingTeamLead', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[custRegion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_REGION: StringField<Cust_Rcm_Operator_Lookup> = new StringField('cust_Region', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[custSharedServices]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_SHARED_SERVICES: StringField<Cust_Rcm_Operator_Lookup> = new StringField('cust_SharedServices', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[custBusinessUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_BUSINESS_UNIT: StringField<Cust_Rcm_Operator_Lookup> = new StringField('cust_businessUnit', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[custCompany]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_COMPANY: StringField<Cust_Rcm_Operator_Lookup> = new StringField('cust_company', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[custCostCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_COST_CENTER: StringField<Cust_Rcm_Operator_Lookup> = new StringField('cust_costCenter', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[custCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_COUNTRY: StringField<Cust_Rcm_Operator_Lookup> = new StringField('cust_country', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[custDepartment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_DEPARTMENT: StringField<Cust_Rcm_Operator_Lookup> = new StringField('cust_department', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[custDivision]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_DIVISION: StringField<Cust_Rcm_Operator_Lookup> = new StringField('cust_division', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[custEmployeeClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_EMPLOYEE_CLASS: StringField<Cust_Rcm_Operator_Lookup> = new StringField('cust_employeeClass', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[custEmploymentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_EMPLOYMENT_TYPE: StringField<Cust_Rcm_Operator_Lookup> = new StringField('cust_employmentType', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[custJobLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_JOB_LEVEL: StringField<Cust_Rcm_Operator_Lookup> = new StringField('cust_jobLevel', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[custLocation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_LOCATION: StringField<Cust_Rcm_Operator_Lookup> = new StringField('cust_location', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[custPayGrade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_PAY_GRADE: StringField<Cust_Rcm_Operator_Lookup> = new StringField('cust_payGrade', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[custRegularTemporary]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_REGULAR_TEMPORARY: StringField<Cust_Rcm_Operator_Lookup> = new StringField('cust_regularTemporary', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[effectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_START_DATE: DateField<Cust_Rcm_Operator_Lookup> = new DateField('effectiveStartDate', Cust_Rcm_Operator_Lookup, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<Cust_Rcm_Operator_Lookup> = new StringField('externalCode', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[externalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME: StringField<Cust_Rcm_Operator_Lookup> = new StringField('externalName', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<Cust_Rcm_Operator_Lookup> = new StringField('lastModifiedBy', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<Cust_Rcm_Operator_Lookup> = new DateField('lastModifiedDateTime', Cust_Rcm_Operator_Lookup, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<Cust_Rcm_Operator_Lookup> = new DateField('mdfSystemEffectiveEndDate', Cust_Rcm_Operator_Lookup, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<Cust_Rcm_Operator_Lookup> = new StringField('mdfSystemRecordStatus', Cust_Rcm_Operator_Lookup, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<Cust_Rcm_Operator_Lookup, User> = new OneToOneLink('createdByNav', Cust_Rcm_Operator_Lookup, User);
  /**
   * Static representation of the one-to-one navigation property [[custRecruiterNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_RECRUITER_NAV: OneToOneLink<Cust_Rcm_Operator_Lookup, User> = new OneToOneLink('cust_RecruiterNav', Cust_Rcm_Operator_Lookup, User);
  /**
   * Static representation of the one-to-one navigation property [[custRecruitingTeamLeadNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_RECRUITING_TEAM_LEAD_NAV: OneToOneLink<Cust_Rcm_Operator_Lookup, User> = new OneToOneLink('cust_RecruitingTeamLeadNav', Cust_Rcm_Operator_Lookup, User);
  /**
   * Static representation of the one-to-one navigation property [[custSharedServicesNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_SHARED_SERVICES_NAV: OneToOneLink<Cust_Rcm_Operator_Lookup, User> = new OneToOneLink('cust_SharedServicesNav', Cust_Rcm_Operator_Lookup, User);
  /**
   * Static representation of the one-to-one navigation property [[custBusinessUnitNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_BUSINESS_UNIT_NAV: OneToOneLink<Cust_Rcm_Operator_Lookup, FoBusinessUnit> = new OneToOneLink('cust_businessUnitNav', Cust_Rcm_Operator_Lookup, FoBusinessUnit);
  /**
   * Static representation of the one-to-one navigation property [[custCompanyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_COMPANY_NAV: OneToOneLink<Cust_Rcm_Operator_Lookup, FoCompany> = new OneToOneLink('cust_companyNav', Cust_Rcm_Operator_Lookup, FoCompany);
  /**
   * Static representation of the one-to-one navigation property [[custCostCenterNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_COST_CENTER_NAV: OneToOneLink<Cust_Rcm_Operator_Lookup, FoCostCenter> = new OneToOneLink('cust_costCenterNav', Cust_Rcm_Operator_Lookup, FoCostCenter);
  /**
   * Static representation of the one-to-one navigation property [[custDepartmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_DEPARTMENT_NAV: OneToOneLink<Cust_Rcm_Operator_Lookup, FoDepartment> = new OneToOneLink('cust_departmentNav', Cust_Rcm_Operator_Lookup, FoDepartment);
  /**
   * Static representation of the one-to-one navigation property [[custDivisionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_DIVISION_NAV: OneToOneLink<Cust_Rcm_Operator_Lookup, FoDivision> = new OneToOneLink('cust_divisionNav', Cust_Rcm_Operator_Lookup, FoDivision);
  /**
   * Static representation of the one-to-one navigation property [[custEmployeeClassNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_EMPLOYEE_CLASS_NAV: OneToOneLink<Cust_Rcm_Operator_Lookup, PickListValueV2> = new OneToOneLink('cust_employeeClassNav', Cust_Rcm_Operator_Lookup, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[custEmploymentTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_EMPLOYMENT_TYPE_NAV: OneToOneLink<Cust_Rcm_Operator_Lookup, PickListValueV2> = new OneToOneLink('cust_employmentTypeNav', Cust_Rcm_Operator_Lookup, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[custJobLevelNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_JOB_LEVEL_NAV: OneToOneLink<Cust_Rcm_Operator_Lookup, PickListValueV2> = new OneToOneLink('cust_jobLevelNav', Cust_Rcm_Operator_Lookup, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[custLocationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_LOCATION_NAV: OneToOneLink<Cust_Rcm_Operator_Lookup, FoLocation> = new OneToOneLink('cust_locationNav', Cust_Rcm_Operator_Lookup, FoLocation);
  /**
   * Static representation of the one-to-one navigation property [[custPayGradeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_PAY_GRADE_NAV: OneToOneLink<Cust_Rcm_Operator_Lookup, FoPayGrade> = new OneToOneLink('cust_payGradeNav', Cust_Rcm_Operator_Lookup, FoPayGrade);
  /**
   * Static representation of the one-to-one navigation property [[custRegularTemporaryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_REGULAR_TEMPORARY_NAV: OneToOneLink<Cust_Rcm_Operator_Lookup, PickListValueV2> = new OneToOneLink('cust_regularTemporaryNav', Cust_Rcm_Operator_Lookup, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<Cust_Rcm_Operator_Lookup, User> = new OneToOneLink('lastModifiedByNav', Cust_Rcm_Operator_Lookup, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<Cust_Rcm_Operator_Lookup, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', Cust_Rcm_Operator_Lookup, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<Cust_Rcm_Operator_Lookup, WfRequest> = new Link('wfRequestNav', Cust_Rcm_Operator_Lookup, WfRequest);
  /**
   * All fields of the Cust_Rcm_Operator_Lookup entity.
   */
  export const _allFields: Array<StringField<Cust_Rcm_Operator_Lookup> | DateField<Cust_Rcm_Operator_Lookup> | OneToOneLink<Cust_Rcm_Operator_Lookup, User> | OneToOneLink<Cust_Rcm_Operator_Lookup, FoBusinessUnit> | OneToOneLink<Cust_Rcm_Operator_Lookup, FoCompany> | OneToOneLink<Cust_Rcm_Operator_Lookup, FoCostCenter> | OneToOneLink<Cust_Rcm_Operator_Lookup, FoDepartment> | OneToOneLink<Cust_Rcm_Operator_Lookup, FoDivision> | OneToOneLink<Cust_Rcm_Operator_Lookup, PickListValueV2> | OneToOneLink<Cust_Rcm_Operator_Lookup, FoLocation> | OneToOneLink<Cust_Rcm_Operator_Lookup, FoPayGrade> | OneToOneLink<Cust_Rcm_Operator_Lookup, MdfEnumValue> | Link<Cust_Rcm_Operator_Lookup, WfRequest>> = [
    Cust_Rcm_Operator_Lookup.CREATED_BY,
    Cust_Rcm_Operator_Lookup.CREATED_DATE_TIME,
    Cust_Rcm_Operator_Lookup.CUST_RECRUITER,
    Cust_Rcm_Operator_Lookup.CUST_RECRUITING_TEAM_LEAD,
    Cust_Rcm_Operator_Lookup.CUST_REGION,
    Cust_Rcm_Operator_Lookup.CUST_SHARED_SERVICES,
    Cust_Rcm_Operator_Lookup.CUST_BUSINESS_UNIT,
    Cust_Rcm_Operator_Lookup.CUST_COMPANY,
    Cust_Rcm_Operator_Lookup.CUST_COST_CENTER,
    Cust_Rcm_Operator_Lookup.CUST_COUNTRY,
    Cust_Rcm_Operator_Lookup.CUST_DEPARTMENT,
    Cust_Rcm_Operator_Lookup.CUST_DIVISION,
    Cust_Rcm_Operator_Lookup.CUST_EMPLOYEE_CLASS,
    Cust_Rcm_Operator_Lookup.CUST_EMPLOYMENT_TYPE,
    Cust_Rcm_Operator_Lookup.CUST_JOB_LEVEL,
    Cust_Rcm_Operator_Lookup.CUST_LOCATION,
    Cust_Rcm_Operator_Lookup.CUST_PAY_GRADE,
    Cust_Rcm_Operator_Lookup.CUST_REGULAR_TEMPORARY,
    Cust_Rcm_Operator_Lookup.EFFECTIVE_START_DATE,
    Cust_Rcm_Operator_Lookup.EXTERNAL_CODE,
    Cust_Rcm_Operator_Lookup.EXTERNAL_NAME,
    Cust_Rcm_Operator_Lookup.LAST_MODIFIED_BY,
    Cust_Rcm_Operator_Lookup.LAST_MODIFIED_DATE_TIME,
    Cust_Rcm_Operator_Lookup.MDF_SYSTEM_EFFECTIVE_END_DATE,
    Cust_Rcm_Operator_Lookup.MDF_SYSTEM_RECORD_STATUS,
    Cust_Rcm_Operator_Lookup.CREATED_BY_NAV,
    Cust_Rcm_Operator_Lookup.CUST_RECRUITER_NAV,
    Cust_Rcm_Operator_Lookup.CUST_RECRUITING_TEAM_LEAD_NAV,
    Cust_Rcm_Operator_Lookup.CUST_SHARED_SERVICES_NAV,
    Cust_Rcm_Operator_Lookup.CUST_BUSINESS_UNIT_NAV,
    Cust_Rcm_Operator_Lookup.CUST_COMPANY_NAV,
    Cust_Rcm_Operator_Lookup.CUST_COST_CENTER_NAV,
    Cust_Rcm_Operator_Lookup.CUST_DEPARTMENT_NAV,
    Cust_Rcm_Operator_Lookup.CUST_DIVISION_NAV,
    Cust_Rcm_Operator_Lookup.CUST_EMPLOYEE_CLASS_NAV,
    Cust_Rcm_Operator_Lookup.CUST_EMPLOYMENT_TYPE_NAV,
    Cust_Rcm_Operator_Lookup.CUST_JOB_LEVEL_NAV,
    Cust_Rcm_Operator_Lookup.CUST_LOCATION_NAV,
    Cust_Rcm_Operator_Lookup.CUST_PAY_GRADE_NAV,
    Cust_Rcm_Operator_Lookup.CUST_REGULAR_TEMPORARY_NAV,
    Cust_Rcm_Operator_Lookup.LAST_MODIFIED_BY_NAV,
    Cust_Rcm_Operator_Lookup.MDF_SYSTEM_RECORD_STATUS_NAV,
    Cust_Rcm_Operator_Lookup.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Cust_Rcm_Operator_Lookup> = new AllFields('*', Cust_Rcm_Operator_Lookup);
  /**
   * All key fields of the Cust_Rcm_Operator_Lookup entity.
   */
  export const _keyFields: Array<Selectable<Cust_Rcm_Operator_Lookup>> = [Cust_Rcm_Operator_Lookup.EFFECTIVE_START_DATE, Cust_Rcm_Operator_Lookup.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property Cust_Rcm_Operator_Lookup.
   */
  export const _keys: { [keys: string]: Selectable<Cust_Rcm_Operator_Lookup> } = Cust_Rcm_Operator_Lookup._keyFields.reduce((acc: { [keys: string]: Selectable<Cust_Rcm_Operator_Lookup> }, field: Selectable<Cust_Rcm_Operator_Lookup>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpEmploymentRequestBuilder } from './EmpEmploymentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmpEmployment" of service "SFOData".
 */
export class EmpEmployment extends Entity implements EmpEmploymentType {
  /**
   * Technical entity name for EmpEmployment.
   */
  static _entityName = 'EmpEmployment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmpEmployment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Employment Assignment Type.
   * Maximum length: 128.
   * @nullable
   */
  assignmentClass?: string;
  /**
   * assignmentIdExternal.
   * @nullable
   */
  assignmentIdExternal?: string;
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
   * Termination Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * hiringNotCompleted.
   */
  hiringNotCompleted!: boolean;
  /**
   * Include All Records.
   * @nullable
   */
  includeAllRecords?: boolean;
  /**
   * isECRecord.
   * @nullable
   */
  isEcRecord?: boolean;
  /**
   * Employment Id.
   * @nullable
   */
  jobNumber?: BigNumber;
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
   * Original Start Date.
   * @nullable
   */
  originalStartDate?: Moment;
  /**
   * Payroll End Date.
   * @nullable
   */
  payrollEndDate?: Moment;
  /**
   * Person ID External.
   * Maximum length: 100.
   */
  personIdExternal!: string;
  /**
   * Seniority Start Date.
   * @nullable
   */
  seniorityDate?: Moment;
  /**
   * Hire Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * User ID.
   * Maximum length: 100.
   */
  userId!: string;
  /**
   * One-to-many navigation property to the [[EmpCompensation]] entity.
   */
  compInfoNav!: EmpCompensation[];
  /**
   * One-to-one navigation property to the [[EmpGlobalAssignment]] entity.
   */
  empGlobalAssignmentNav!: EmpGlobalAssignment;
  /**
   * One-to-many navigation property to the [[EmpJobRelationships]] entity.
   */
  empJobRelationshipNav!: EmpJobRelationships[];
  /**
   * One-to-many navigation property to the [[EmpPayCompNonRecurring]] entity.
   */
  empPayCompNonRecurringNav!: EmpPayCompNonRecurring[];
  /**
   * One-to-many navigation property to the [[EmpWorkPermit]] entity.
   */
  empWorkPermitNav!: EmpWorkPermit[];
  /**
   * One-to-many navigation property to the [[EmpJob]] entity.
   */
  jobInfoNav!: EmpJob[];
  /**
   * One-to-many navigation property to the [[PaymentInformationV3]] entity.
   */
  paymentInformationNav!: PaymentInformationV3[];
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userNav!: User;
  /**
   * One-to-one navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest;

  /**
   * Returns an entity builder to construct instances `EmpEmployment`.
   * @returns A builder that constructs instances of entity type `EmpEmployment`.
   */
  static builder(): EntityBuilderType<EmpEmployment, EmpEmploymentTypeForceMandatory> {
    return Entity.entityBuilder(EmpEmployment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmpEmployment` entity type.
   * @returns A `EmpEmployment` request builder.
   */
  static requestBuilder(): EmpEmploymentRequestBuilder {
    return new EmpEmploymentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpEmployment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmpEmployment`.
   */
  static customField(fieldName: string): CustomField<EmpEmployment> {
    return Entity.customFieldSelector(fieldName, EmpEmployment);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { EmpCompensation, EmpCompensationType } from './EmpCompensation';
import { EmpGlobalAssignment, EmpGlobalAssignmentType } from './EmpGlobalAssignment';
import { EmpJobRelationships, EmpJobRelationshipsType } from './EmpJobRelationships';
import { EmpPayCompNonRecurring, EmpPayCompNonRecurringType } from './EmpPayCompNonRecurring';
import { EmpWorkPermit, EmpWorkPermitType } from './EmpWorkPermit';
import { EmpJob, EmpJobType } from './EmpJob';
import { PaymentInformationV3, PaymentInformationV3Type } from './PaymentInformationV3';
import { PerPerson, PerPersonType } from './PerPerson';
import { User, UserType } from './User';
import { WfRequest, WfRequestType } from './WfRequest';

export interface EmpEmploymentType {
  assignmentClass?: string;
  assignmentIdExternal?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  endDate?: Moment;
  hiringNotCompleted: boolean;
  includeAllRecords?: boolean;
  isEcRecord?: boolean;
  jobNumber?: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  originalStartDate?: Moment;
  payrollEndDate?: Moment;
  personIdExternal: string;
  seniorityDate?: Moment;
  startDate?: Moment;
  userId: string;
  compInfoNav: EmpCompensationType[];
  empGlobalAssignmentNav: EmpGlobalAssignmentType;
  empJobRelationshipNav: EmpJobRelationshipsType[];
  empPayCompNonRecurringNav: EmpPayCompNonRecurringType[];
  empWorkPermitNav: EmpWorkPermitType[];
  jobInfoNav: EmpJobType[];
  paymentInformationNav: PaymentInformationV3Type[];
  personNav: PerPersonType;
  userNav: UserType;
  wfRequestNav: WfRequestType;
}

export interface EmpEmploymentTypeForceMandatory {
  assignmentClass: string;
  assignmentIdExternal: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  endDate: Moment;
  hiringNotCompleted: boolean;
  includeAllRecords: boolean;
  isEcRecord: boolean;
  jobNumber: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  originalStartDate: Moment;
  payrollEndDate: Moment;
  personIdExternal: string;
  seniorityDate: Moment;
  startDate: Moment;
  userId: string;
  compInfoNav: EmpCompensationType[];
  empGlobalAssignmentNav: EmpGlobalAssignmentType;
  empJobRelationshipNav: EmpJobRelationshipsType[];
  empPayCompNonRecurringNav: EmpPayCompNonRecurringType[];
  empWorkPermitNav: EmpWorkPermitType[];
  jobInfoNav: EmpJobType[];
  paymentInformationNav: PaymentInformationV3Type[];
  personNav: PerPersonType;
  userNav: UserType;
  wfRequestNav: WfRequestType;
}

export namespace EmpEmployment {
  /**
   * Static representation of the [[assignmentClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSIGNMENT_CLASS: StringField<EmpEmployment> = new StringField('assignmentClass', EmpEmployment, 'Edm.String');
  /**
   * Static representation of the [[assignmentIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSIGNMENT_ID_EXTERNAL: StringField<EmpEmployment> = new StringField('assignmentIdExternal', EmpEmployment, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmpEmployment> = new StringField('createdBy', EmpEmployment, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmpEmployment> = new DateField('createdDateTime', EmpEmployment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<EmpEmployment> = new DateField('createdOn', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<EmpEmployment> = new DateField('endDate', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[hiringNotCompleted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIRING_NOT_COMPLETED: BooleanField<EmpEmployment> = new BooleanField('hiringNotCompleted', EmpEmployment, 'Edm.Boolean');
  /**
   * Static representation of the [[includeAllRecords]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_ALL_RECORDS: BooleanField<EmpEmployment> = new BooleanField('includeAllRecords', EmpEmployment, 'Edm.Boolean');
  /**
   * Static representation of the [[isEcRecord]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_EC_RECORD: BooleanField<EmpEmployment> = new BooleanField('isECRecord', EmpEmployment, 'Edm.Boolean');
  /**
   * Static representation of the [[jobNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_NUMBER: BigNumberField<EmpEmployment> = new BigNumberField('jobNumber', EmpEmployment, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmpEmployment> = new StringField('lastModifiedBy', EmpEmployment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmpEmployment> = new DateField('lastModifiedDateTime', EmpEmployment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<EmpEmployment> = new DateField('lastModifiedOn', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[originalStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_START_DATE: DateField<EmpEmployment> = new DateField('originalStartDate', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[payrollEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYROLL_END_DATE: DateField<EmpEmployment> = new DateField('payrollEndDate', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<EmpEmployment> = new StringField('personIdExternal', EmpEmployment, 'Edm.String');
  /**
   * Static representation of the [[seniorityDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SENIORITY_DATE: DateField<EmpEmployment> = new DateField('seniorityDate', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<EmpEmployment> = new DateField('startDate', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EmpEmployment> = new StringField('userId', EmpEmployment, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[compInfoNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMP_INFO_NAV: Link<EmpEmployment, EmpCompensation> = new Link('compInfoNav', EmpEmployment, EmpCompensation);
  /**
   * Static representation of the one-to-one navigation property [[empGlobalAssignmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMP_GLOBAL_ASSIGNMENT_NAV: OneToOneLink<EmpEmployment, EmpGlobalAssignment> = new OneToOneLink('empGlobalAssignmentNav', EmpEmployment, EmpGlobalAssignment);
  /**
   * Static representation of the one-to-many navigation property [[empJobRelationshipNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMP_JOB_RELATIONSHIP_NAV: Link<EmpEmployment, EmpJobRelationships> = new Link('empJobRelationshipNav', EmpEmployment, EmpJobRelationships);
  /**
   * Static representation of the one-to-many navigation property [[empPayCompNonRecurringNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMP_PAY_COMP_NON_RECURRING_NAV: Link<EmpEmployment, EmpPayCompNonRecurring> = new Link('empPayCompNonRecurringNav', EmpEmployment, EmpPayCompNonRecurring);
  /**
   * Static representation of the one-to-many navigation property [[empWorkPermitNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMP_WORK_PERMIT_NAV: Link<EmpEmployment, EmpWorkPermit> = new Link('empWorkPermitNav', EmpEmployment, EmpWorkPermit);
  /**
   * Static representation of the one-to-many navigation property [[jobInfoNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_INFO_NAV: Link<EmpEmployment, EmpJob> = new Link('jobInfoNav', EmpEmployment, EmpJob);
  /**
   * Static representation of the one-to-many navigation property [[paymentInformationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_NAV: Link<EmpEmployment, PaymentInformationV3> = new Link('paymentInformationNav', EmpEmployment, PaymentInformationV3);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<EmpEmployment, PerPerson> = new OneToOneLink('personNav', EmpEmployment, PerPerson);
  /**
   * Static representation of the one-to-one navigation property [[userNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NAV: OneToOneLink<EmpEmployment, User> = new OneToOneLink('userNav', EmpEmployment, User);
  /**
   * Static representation of the one-to-one navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: OneToOneLink<EmpEmployment, WfRequest> = new OneToOneLink('wfRequestNav', EmpEmployment, WfRequest);
  /**
   * All fields of the EmpEmployment entity.
   */
  export const _allFields: Array<StringField<EmpEmployment> | DateField<EmpEmployment> | BooleanField<EmpEmployment> | BigNumberField<EmpEmployment> | Link<EmpEmployment, EmpCompensation> | OneToOneLink<EmpEmployment, EmpGlobalAssignment> | Link<EmpEmployment, EmpJobRelationships> | Link<EmpEmployment, EmpPayCompNonRecurring> | Link<EmpEmployment, EmpWorkPermit> | Link<EmpEmployment, EmpJob> | Link<EmpEmployment, PaymentInformationV3> | OneToOneLink<EmpEmployment, PerPerson> | OneToOneLink<EmpEmployment, User> | OneToOneLink<EmpEmployment, WfRequest>> = [
    EmpEmployment.ASSIGNMENT_CLASS,
    EmpEmployment.ASSIGNMENT_ID_EXTERNAL,
    EmpEmployment.CREATED_BY,
    EmpEmployment.CREATED_DATE_TIME,
    EmpEmployment.CREATED_ON,
    EmpEmployment.END_DATE,
    EmpEmployment.HIRING_NOT_COMPLETED,
    EmpEmployment.INCLUDE_ALL_RECORDS,
    EmpEmployment.IS_EC_RECORD,
    EmpEmployment.JOB_NUMBER,
    EmpEmployment.LAST_MODIFIED_BY,
    EmpEmployment.LAST_MODIFIED_DATE_TIME,
    EmpEmployment.LAST_MODIFIED_ON,
    EmpEmployment.ORIGINAL_START_DATE,
    EmpEmployment.PAYROLL_END_DATE,
    EmpEmployment.PERSON_ID_EXTERNAL,
    EmpEmployment.SENIORITY_DATE,
    EmpEmployment.START_DATE,
    EmpEmployment.USER_ID,
    EmpEmployment.COMP_INFO_NAV,
    EmpEmployment.EMP_GLOBAL_ASSIGNMENT_NAV,
    EmpEmployment.EMP_JOB_RELATIONSHIP_NAV,
    EmpEmployment.EMP_PAY_COMP_NON_RECURRING_NAV,
    EmpEmployment.EMP_WORK_PERMIT_NAV,
    EmpEmployment.JOB_INFO_NAV,
    EmpEmployment.PAYMENT_INFORMATION_NAV,
    EmpEmployment.PERSON_NAV,
    EmpEmployment.USER_NAV,
    EmpEmployment.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmpEmployment> = new AllFields('*', EmpEmployment);
  /**
   * All key fields of the EmpEmployment entity.
   */
  export const _keyFields: Array<Selectable<EmpEmployment>> = [EmpEmployment.PERSON_ID_EXTERNAL, EmpEmployment.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property EmpEmployment.
   */
  export const _keys: { [keys: string]: Selectable<EmpEmployment> } = EmpEmployment._keyFields.reduce((acc: { [keys: string]: Selectable<EmpEmployment> }, field: Selectable<EmpEmployment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

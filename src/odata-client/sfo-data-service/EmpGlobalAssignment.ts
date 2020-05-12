/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpGlobalAssignmentRequestBuilder } from './EmpGlobalAssignmentRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmpGlobalAssignment" of service "SFOData".
 */
export class EmpGlobalAssignment extends Entity implements EmpGlobalAssignmentType {
  /**
   * Technical entity name for EmpGlobalAssignment.
   */
  static _entityName = 'EmpGlobalAssignment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmpGlobalAssignment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * assignmentClass.
   * @nullable
   */
  assignmentClass?: string;
  /**
   * Assignment Type.
   * @nullable
   */
  assignmentType?: string;
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
   * Actual End Date.
   * @nullable
   */
  endDate?: Moment;
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
   * payrollEndDate.
   * @nullable
   */
  payrollEndDate?: Moment;
  /**
   * Person ID External.
   * Maximum length: 100.
   */
  personIdExternal!: string;
  /**
   * Planned End Date.
   * @nullable
   */
  plannedEndDate?: Moment;
  /**
   * Actual Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * User ID.
   * Maximum length: 100.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  assignmentTypeNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[EmpEmployment]] entity.
   */
  employmentNav!: EmpEmployment;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userNav!: User;

  /**
   * Returns an entity builder to construct instances `EmpGlobalAssignment`.
   * @returns A builder that constructs instances of entity type `EmpGlobalAssignment`.
   */
  static builder(): EntityBuilderType<EmpGlobalAssignment, EmpGlobalAssignmentTypeForceMandatory> {
    return Entity.entityBuilder(EmpGlobalAssignment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmpGlobalAssignment` entity type.
   * @returns A `EmpGlobalAssignment` request builder.
   */
  static requestBuilder(): EmpGlobalAssignmentRequestBuilder {
    return new EmpGlobalAssignmentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpGlobalAssignment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmpGlobalAssignment`.
   */
  static customField(fieldName: string): CustomField<EmpGlobalAssignment> {
    return Entity.customFieldSelector(fieldName, EmpGlobalAssignment);
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
import { EmpEmployment, EmpEmploymentType } from './EmpEmployment';
import { User, UserType } from './User';

export interface EmpGlobalAssignmentType {
  assignmentClass?: string;
  assignmentType?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  endDate?: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  payrollEndDate?: Moment;
  personIdExternal: string;
  plannedEndDate?: Moment;
  startDate?: Moment;
  userId: string;
  assignmentTypeNav: PicklistOptionType;
  employmentNav: EmpEmploymentType;
  userNav: UserType;
}

export interface EmpGlobalAssignmentTypeForceMandatory {
  assignmentClass: string;
  assignmentType: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  endDate: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  payrollEndDate: Moment;
  personIdExternal: string;
  plannedEndDate: Moment;
  startDate: Moment;
  userId: string;
  assignmentTypeNav: PicklistOptionType;
  employmentNav: EmpEmploymentType;
  userNav: UserType;
}

export namespace EmpGlobalAssignment {
  /**
   * Static representation of the [[assignmentClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSIGNMENT_CLASS: StringField<EmpGlobalAssignment> = new StringField('assignmentClass', EmpGlobalAssignment, 'Edm.String');
  /**
   * Static representation of the [[assignmentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSIGNMENT_TYPE: StringField<EmpGlobalAssignment> = new StringField('assignmentType', EmpGlobalAssignment, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmpGlobalAssignment> = new StringField('createdBy', EmpGlobalAssignment, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmpGlobalAssignment> = new DateField('createdDateTime', EmpGlobalAssignment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<EmpGlobalAssignment> = new DateField('createdOn', EmpGlobalAssignment, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<EmpGlobalAssignment> = new DateField('endDate', EmpGlobalAssignment, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmpGlobalAssignment> = new StringField('lastModifiedBy', EmpGlobalAssignment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmpGlobalAssignment> = new DateField('lastModifiedDateTime', EmpGlobalAssignment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<EmpGlobalAssignment> = new DateField('lastModifiedOn', EmpGlobalAssignment, 'Edm.DateTime');
  /**
   * Static representation of the [[payrollEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYROLL_END_DATE: DateField<EmpGlobalAssignment> = new DateField('payrollEndDate', EmpGlobalAssignment, 'Edm.DateTime');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<EmpGlobalAssignment> = new StringField('personIdExternal', EmpGlobalAssignment, 'Edm.String');
  /**
   * Static representation of the [[plannedEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANNED_END_DATE: DateField<EmpGlobalAssignment> = new DateField('plannedEndDate', EmpGlobalAssignment, 'Edm.DateTime');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<EmpGlobalAssignment> = new DateField('startDate', EmpGlobalAssignment, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EmpGlobalAssignment> = new StringField('userId', EmpGlobalAssignment, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[assignmentTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSIGNMENT_TYPE_NAV: OneToOneLink<EmpGlobalAssignment, PicklistOption> = new OneToOneLink('assignmentTypeNav', EmpGlobalAssignment, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYMENT_NAV: OneToOneLink<EmpGlobalAssignment, EmpEmployment> = new OneToOneLink('employmentNav', EmpGlobalAssignment, EmpEmployment);
  /**
   * Static representation of the one-to-one navigation property [[userNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NAV: OneToOneLink<EmpGlobalAssignment, User> = new OneToOneLink('userNav', EmpGlobalAssignment, User);
  /**
   * All fields of the EmpGlobalAssignment entity.
   */
  export const _allFields: Array<StringField<EmpGlobalAssignment> | DateField<EmpGlobalAssignment> | OneToOneLink<EmpGlobalAssignment, PicklistOption> | OneToOneLink<EmpGlobalAssignment, EmpEmployment> | OneToOneLink<EmpGlobalAssignment, User>> = [
    EmpGlobalAssignment.ASSIGNMENT_CLASS,
    EmpGlobalAssignment.ASSIGNMENT_TYPE,
    EmpGlobalAssignment.CREATED_BY,
    EmpGlobalAssignment.CREATED_DATE_TIME,
    EmpGlobalAssignment.CREATED_ON,
    EmpGlobalAssignment.END_DATE,
    EmpGlobalAssignment.LAST_MODIFIED_BY,
    EmpGlobalAssignment.LAST_MODIFIED_DATE_TIME,
    EmpGlobalAssignment.LAST_MODIFIED_ON,
    EmpGlobalAssignment.PAYROLL_END_DATE,
    EmpGlobalAssignment.PERSON_ID_EXTERNAL,
    EmpGlobalAssignment.PLANNED_END_DATE,
    EmpGlobalAssignment.START_DATE,
    EmpGlobalAssignment.USER_ID,
    EmpGlobalAssignment.ASSIGNMENT_TYPE_NAV,
    EmpGlobalAssignment.EMPLOYMENT_NAV,
    EmpGlobalAssignment.USER_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmpGlobalAssignment> = new AllFields('*', EmpGlobalAssignment);
  /**
   * All key fields of the EmpGlobalAssignment entity.
   */
  export const _keyFields: Array<Selectable<EmpGlobalAssignment>> = [EmpGlobalAssignment.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property EmpGlobalAssignment.
   */
  export const _keys: { [keys: string]: Selectable<EmpGlobalAssignment> } = EmpGlobalAssignment._keyFields.reduce((acc: { [keys: string]: Selectable<EmpGlobalAssignment> }, field: Selectable<EmpGlobalAssignment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobRequisitionLocaleRequestBuilder } from './JobRequisitionLocaleRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobRequisitionLocale" of service "SFOData".
 */
export class JobRequisitionLocale extends Entity implements JobRequisitionLocaleType {
  /**
   * Technical entity name for JobRequisitionLocale.
   */
  static _entityName = 'JobRequisitionLocale';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobRequisitionLocale.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * External Job Description Footer.
   */
  extJobDescFooter!: string;
  /**
   * External Job Description Header.
   */
  extJobDescHeader!: string;
  /**
   * External Job Description.
   */
  externalJobDescription!: string;
  /**
   * External Title.
   */
  externalTitle!: string;
  /**
   * Internal Job Description Footer.
   */
  intJobDescFooter!: string;
  /**
   * Internal Job Description Header.
   */
  intJobDescHeader!: string;
  /**
   * Job Description.
   */
  jobDescription!: string;
  /**
   * Job Requisition Id.
   */
  jobReqId!: BigNumber;
  /**
   * Job Requisition Local Id.
   */
  jobReqLocalId!: BigNumber;
  /**
   * Job Title.
   */
  jobTitle!: string;
  /**
   * Locale.
   */
  locale!: string;
  /**
   * Status.
   */
  status!: string;
  /**
   * Template Header and Footer.
   * @nullable
   */
  templateHeaderFooter?: string;
  /**
   * One-to-one navigation property to the [[JobRequisitionLocaleFieldControls]] entity.
   */
  jobReqLocalePermissionsNav!: JobRequisitionLocaleFieldControls;
  /**
   * One-to-one navigation property to the [[JobRequisition]] entity.
   */
  jobRequisition!: JobRequisition;

  /**
   * Returns an entity builder to construct instances `JobRequisitionLocale`.
   * @returns A builder that constructs instances of entity type `JobRequisitionLocale`.
   */
  static builder(): EntityBuilderType<JobRequisitionLocale, JobRequisitionLocaleTypeForceMandatory> {
    return Entity.entityBuilder(JobRequisitionLocale);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobRequisitionLocale` entity type.
   * @returns A `JobRequisitionLocale` request builder.
   */
  static requestBuilder(): JobRequisitionLocaleRequestBuilder {
    return new JobRequisitionLocaleRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionLocale`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobRequisitionLocale`.
   */
  static customField(fieldName: string): CustomField<JobRequisitionLocale> {
    return Entity.customFieldSelector(fieldName, JobRequisitionLocale);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { JobRequisitionLocaleFieldControls, JobRequisitionLocaleFieldControlsType } from './JobRequisitionLocaleFieldControls';
import { JobRequisition, JobRequisitionType } from './JobRequisition';

export interface JobRequisitionLocaleType {
  extJobDescFooter: string;
  extJobDescHeader: string;
  externalJobDescription: string;
  externalTitle: string;
  intJobDescFooter: string;
  intJobDescHeader: string;
  jobDescription: string;
  jobReqId: BigNumber;
  jobReqLocalId: BigNumber;
  jobTitle: string;
  locale: string;
  status: string;
  templateHeaderFooter?: string;
  jobReqLocalePermissionsNav: JobRequisitionLocaleFieldControlsType;
  jobRequisition: JobRequisitionType;
}

export interface JobRequisitionLocaleTypeForceMandatory {
  extJobDescFooter: string;
  extJobDescHeader: string;
  externalJobDescription: string;
  externalTitle: string;
  intJobDescFooter: string;
  intJobDescHeader: string;
  jobDescription: string;
  jobReqId: BigNumber;
  jobReqLocalId: BigNumber;
  jobTitle: string;
  locale: string;
  status: string;
  templateHeaderFooter: string;
  jobReqLocalePermissionsNav: JobRequisitionLocaleFieldControlsType;
  jobRequisition: JobRequisitionType;
}

export namespace JobRequisitionLocale {
  /**
   * Static representation of the [[extJobDescFooter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXT_JOB_DESC_FOOTER: StringField<JobRequisitionLocale> = new StringField('extJobDescFooter', JobRequisitionLocale, 'Edm.String');
  /**
   * Static representation of the [[extJobDescHeader]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXT_JOB_DESC_HEADER: StringField<JobRequisitionLocale> = new StringField('extJobDescHeader', JobRequisitionLocale, 'Edm.String');
  /**
   * Static representation of the [[externalJobDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_JOB_DESCRIPTION: StringField<JobRequisitionLocale> = new StringField('externalJobDescription', JobRequisitionLocale, 'Edm.String');
  /**
   * Static representation of the [[externalTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_TITLE: StringField<JobRequisitionLocale> = new StringField('externalTitle', JobRequisitionLocale, 'Edm.String');
  /**
   * Static representation of the [[intJobDescFooter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INT_JOB_DESC_FOOTER: StringField<JobRequisitionLocale> = new StringField('intJobDescFooter', JobRequisitionLocale, 'Edm.String');
  /**
   * Static representation of the [[intJobDescHeader]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INT_JOB_DESC_HEADER: StringField<JobRequisitionLocale> = new StringField('intJobDescHeader', JobRequisitionLocale, 'Edm.String');
  /**
   * Static representation of the [[jobDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_DESCRIPTION: StringField<JobRequisitionLocale> = new StringField('jobDescription', JobRequisitionLocale, 'Edm.String');
  /**
   * Static representation of the [[jobReqId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_ID: BigNumberField<JobRequisitionLocale> = new BigNumberField('jobReqId', JobRequisitionLocale, 'Edm.Int64');
  /**
   * Static representation of the [[jobReqLocalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_LOCAL_ID: BigNumberField<JobRequisitionLocale> = new BigNumberField('jobReqLocalId', JobRequisitionLocale, 'Edm.Int64');
  /**
   * Static representation of the [[jobTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_TITLE: StringField<JobRequisitionLocale> = new StringField('jobTitle', JobRequisitionLocale, 'Edm.String');
  /**
   * Static representation of the [[locale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALE: StringField<JobRequisitionLocale> = new StringField('locale', JobRequisitionLocale, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<JobRequisitionLocale> = new StringField('status', JobRequisitionLocale, 'Edm.String');
  /**
   * Static representation of the [[templateHeaderFooter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_HEADER_FOOTER: StringField<JobRequisitionLocale> = new StringField('templateHeaderFooter', JobRequisitionLocale, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[jobReqLocalePermissionsNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_LOCALE_PERMISSIONS_NAV: OneToOneLink<JobRequisitionLocale, JobRequisitionLocaleFieldControls> = new OneToOneLink('jobReqLocalePermissionsNav', JobRequisitionLocale, JobRequisitionLocaleFieldControls);
  /**
   * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQUISITION: OneToOneLink<JobRequisitionLocale, JobRequisition> = new OneToOneLink('jobRequisition', JobRequisitionLocale, JobRequisition);
  /**
   * All fields of the JobRequisitionLocale entity.
   */
  export const _allFields: Array<StringField<JobRequisitionLocale> | BigNumberField<JobRequisitionLocale> | OneToOneLink<JobRequisitionLocale, JobRequisitionLocaleFieldControls> | OneToOneLink<JobRequisitionLocale, JobRequisition>> = [
    JobRequisitionLocale.EXT_JOB_DESC_FOOTER,
    JobRequisitionLocale.EXT_JOB_DESC_HEADER,
    JobRequisitionLocale.EXTERNAL_JOB_DESCRIPTION,
    JobRequisitionLocale.EXTERNAL_TITLE,
    JobRequisitionLocale.INT_JOB_DESC_FOOTER,
    JobRequisitionLocale.INT_JOB_DESC_HEADER,
    JobRequisitionLocale.JOB_DESCRIPTION,
    JobRequisitionLocale.JOB_REQ_ID,
    JobRequisitionLocale.JOB_REQ_LOCAL_ID,
    JobRequisitionLocale.JOB_TITLE,
    JobRequisitionLocale.LOCALE,
    JobRequisitionLocale.STATUS,
    JobRequisitionLocale.TEMPLATE_HEADER_FOOTER,
    JobRequisitionLocale.JOB_REQ_LOCALE_PERMISSIONS_NAV,
    JobRequisitionLocale.JOB_REQUISITION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobRequisitionLocale> = new AllFields('*', JobRequisitionLocale);
  /**
   * All key fields of the JobRequisitionLocale entity.
   */
  export const _keyFields: Array<Selectable<JobRequisitionLocale>> = [JobRequisitionLocale.JOB_REQ_LOCAL_ID];
  /**
   * Mapping of all key field names to the respective static field property JobRequisitionLocale.
   */
  export const _keys: { [keys: string]: Selectable<JobRequisitionLocale> } = JobRequisitionLocale._keyFields.reduce((acc: { [keys: string]: Selectable<JobRequisitionLocale> }, field: Selectable<JobRequisitionLocale>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

import { JobOfferFieldControlsRequestBuilder } from './JobOfferFieldControlsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobOfferFieldControls" of service "SFOData".
 */
export declare class JobOfferFieldControls extends Entity implements JobOfferFieldControlsType {
    /**
     * Technical entity name for JobOfferFieldControls.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobOfferFieldControls.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * anonymizedDate.
     * @nullable
     */
    anonymizedDate?: number;
    /**
     * anonymizedFlag.
     * @nullable
     */
    anonymizedFlag?: number;
    /**
     * applicationId.
     * @nullable
     */
    applicationId?: number;
    /**
     * approvers.
     * @nullable
     */
    approvers?: number;
    /**
     * contactEmail.
     * @nullable
     */
    contactEmail?: number;
    /**
     * createdBy.
     * @nullable
     */
    createdBy?: number;
    /**
     * createdByNav.
     * @nullable
     */
    createdByNav?: number;
    /**
     * createdDate.
     * @nullable
     */
    createdDate?: number;
    /**
     * currency.
     * @nullable
     */
    currency?: number;
    /**
     * firstName.
     * @nullable
     */
    firstName?: number;
    /**
     * formDataId.
     * @nullable
     */
    formDataId?: number;
    /**
     * formTemplateId.
     * @nullable
     */
    formTemplateId?: number;
    /**
     * initialComment.
     * @nullable
     */
    initialComment?: number;
    /**
     * internalStatus.
     * @nullable
     */
    internalStatus?: number;
    /**
     * jobApplication.
     * @nullable
     */
    jobApplication?: number;
    /**
     * jobCode.
     * @nullable
     */
    jobCode?: number;
    /**
     * jobOfferPermissionsNav.
     * @nullable
     */
    jobOfferPermissionsNav?: number;
    /**
     * lastModifiedBy.
     * @nullable
     */
    lastModifiedBy?: number;
    /**
     * lastModifiedByNav.
     * @nullable
     */
    lastModifiedByNav?: number;
    /**
     * lastModifiedDate.
     * @nullable
     */
    lastModifiedDate?: number;
    /**
     * lastName.
     * @nullable
     */
    lastName?: number;
    /**
     * location_obj.
     * @nullable
     */
    locationObj?: number;
    /**
     * location_obj_code.
     * @nullable
     */
    locationObjCode?: number;
    /**
     * offerApprovalId.
     */
    offerApprovalId: number;
    /**
     * redefineTemplateApprovers.
     * @nullable
     */
    redefineTemplateApprovers?: number;
    /**
     * resume.
     * @nullable
     */
    resume?: number;
    /**
     * templateId.
     * @nullable
     */
    templateId?: number;
    /**
     * userIsCurrentApprover.
     * @nullable
     */
    userIsCurrentApprover?: number;
    /**
     * userIsOriginator.
     * @nullable
     */
    userIsOriginator?: number;
    /**
     * version.
     * @nullable
     */
    version?: number;
    /**
     * Returns an entity builder to construct instances `JobOfferFieldControls`.
     * @returns A builder that constructs instances of entity type `JobOfferFieldControls`.
     */
    static builder(): EntityBuilderType<JobOfferFieldControls, JobOfferFieldControlsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobOfferFieldControls` entity type.
     * @returns A `JobOfferFieldControls` request builder.
     */
    static requestBuilder(): JobOfferFieldControlsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobOfferFieldControls`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobOfferFieldControls`.
     */
    static customField(fieldName: string): CustomField<JobOfferFieldControls>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface JobOfferFieldControlsType {
    anonymizedDate?: number;
    anonymizedFlag?: number;
    applicationId?: number;
    approvers?: number;
    contactEmail?: number;
    createdBy?: number;
    createdByNav?: number;
    createdDate?: number;
    currency?: number;
    firstName?: number;
    formDataId?: number;
    formTemplateId?: number;
    initialComment?: number;
    internalStatus?: number;
    jobApplication?: number;
    jobCode?: number;
    jobOfferPermissionsNav?: number;
    lastModifiedBy?: number;
    lastModifiedByNav?: number;
    lastModifiedDate?: number;
    lastName?: number;
    locationObj?: number;
    locationObjCode?: number;
    offerApprovalId: number;
    redefineTemplateApprovers?: number;
    resume?: number;
    templateId?: number;
    userIsCurrentApprover?: number;
    userIsOriginator?: number;
    version?: number;
}
export interface JobOfferFieldControlsTypeForceMandatory {
    anonymizedDate: number;
    anonymizedFlag: number;
    applicationId: number;
    approvers: number;
    contactEmail: number;
    createdBy: number;
    createdByNav: number;
    createdDate: number;
    currency: number;
    firstName: number;
    formDataId: number;
    formTemplateId: number;
    initialComment: number;
    internalStatus: number;
    jobApplication: number;
    jobCode: number;
    jobOfferPermissionsNav: number;
    lastModifiedBy: number;
    lastModifiedByNav: number;
    lastModifiedDate: number;
    lastName: number;
    locationObj: number;
    locationObjCode: number;
    offerApprovalId: number;
    redefineTemplateApprovers: number;
    resume: number;
    templateId: number;
    userIsCurrentApprover: number;
    userIsOriginator: number;
    version: number;
}
export declare namespace JobOfferFieldControls {
    /**
     * Static representation of the [[anonymizedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ANONYMIZED_DATE: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[anonymizedFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ANONYMIZED_FLAG: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[approvers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVERS: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[contactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_EMAIL: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[createdByNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[formTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_TEMPLATE_ID: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[initialComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INITIAL_COMMENT: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[internalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_STATUS: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[jobApplication]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CODE: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[jobOfferPermissionsNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_OFFER_PERMISSIONS_NAV: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[lastModifiedByNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[locationObj]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_OBJ: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[locationObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_OBJ_CODE: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[offerApprovalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFER_APPROVAL_ID: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[redefineTemplateApprovers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REDEFINE_TEMPLATE_APPROVERS: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[resume]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESUME: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[templateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_ID: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[userIsCurrentApprover]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_IS_CURRENT_APPROVER: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[userIsOriginator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_IS_ORIGINATOR: NumberField<JobOfferFieldControls>;
    /**
     * Static representation of the [[version]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VERSION: NumberField<JobOfferFieldControls>;
    /**
     * All fields of the JobOfferFieldControls entity.
     */
    const _allFields: Array<NumberField<JobOfferFieldControls>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobOfferFieldControls>;
    /**
     * All key fields of the JobOfferFieldControls entity.
     */
    const _keyFields: Array<Selectable<JobOfferFieldControls>>;
    /**
     * Mapping of all key field names to the respective static field property JobOfferFieldControls.
     */
    const _keys: {
        [keys: string]: Selectable<JobOfferFieldControls>;
    };
}
//# sourceMappingURL=JobOfferFieldControls.d.ts.map
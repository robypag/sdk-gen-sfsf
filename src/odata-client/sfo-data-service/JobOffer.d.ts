import { JobOfferRequestBuilder } from './JobOfferRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobOffer" of service "SFOData".
 */
export declare class JobOffer extends Entity implements JobOfferType {
    /**
     * Technical entity name for JobOffer.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobOffer.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Anonymized Date.
     * @nullable
     */
    anonymizedDate?: Moment;
    /**
     * Anonymized Flag.
     * @nullable
     */
    anonymizedFlag?: string;
    /**
     * Application Id.
     */
    applicationId: BigNumber;
    /**
     * Contact Email.
     * @nullable
     */
    contactEmail?: string;
    /**
     * Created By.
     */
    createdBy: string;
    /**
     * Created Date.
     */
    createdDate: Moment;
    /**
     * Currency.
     * @nullable
     */
    currency?: string;
    /**
     * First Name.
     * @nullable
     */
    firstName?: string;
    /**
     * Form Data Id.
     * @nullable
     */
    formDataId?: BigNumber;
    /**
     * Form Template Id.
     * @nullable
     */
    formTemplateId?: BigNumber;
    /**
     * Initial Comment.
     * @nullable
     */
    initialComment?: string;
    /**
     * Internal Status.
     * @nullable
     */
    internalStatus?: string;
    /**
     * Job Code.
     * @nullable
     */
    jobCode?: string;
    /**
     * Last Modified By.
     */
    lastModifiedBy: string;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * Last Name.
     * @nullable
     */
    lastName?: string;
    /**
     * Location Code.
     * @nullable
     */
    locationObjCode?: string;
    /**
     * Offer Approval Id.
     */
    offerApprovalId: BigNumber;
    /**
     * redefineTemplateApprovers.
     * @nullable
     */
    redefineTemplateApprovers?: string;
    /**
     * Template Id.
     * @nullable
     */
    templateId?: BigNumber;
    /**
     * userIsCurrentApprover.
     * @nullable
     */
    userIsCurrentApprover?: boolean;
    /**
     * userIsOriginator.
     * @nullable
     */
    userIsOriginator?: boolean;
    /**
     * Version.
     * @nullable
     */
    version?: BigNumber;
    /**
     * One-to-many navigation property to the [[JobOfferApprover]] entity.
     */
    approvers: JobOfferApprover[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[JobApplication]] entity.
     */
    jobApplication: JobApplication;
    /**
     * One-to-one navigation property to the [[JobOfferFieldControls]] entity.
     */
    jobOfferPermissionsNav: JobOfferFieldControls;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-many navigation property to the [[FoLocation]] entity.
     */
    locationObj: FoLocation[];
    /**
     * One-to-one navigation property to the [[Attachment]] entity.
     */
    resume: Attachment;
    /**
     * Returns an entity builder to construct instances `JobOffer`.
     * @returns A builder that constructs instances of entity type `JobOffer`.
     */
    static builder(): EntityBuilderType<JobOffer, JobOfferTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobOffer` entity type.
     * @returns A `JobOffer` request builder.
     */
    static requestBuilder(): JobOfferRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobOffer`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobOffer`.
     */
    static customField(fieldName: string): CustomField<JobOffer>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JobOfferApprover, JobOfferApproverType } from './JobOfferApprover';
import { User, UserType } from './User';
import { JobApplication, JobApplicationType } from './JobApplication';
import { JobOfferFieldControls, JobOfferFieldControlsType } from './JobOfferFieldControls';
import { FoLocation, FoLocationType } from './FoLocation';
import { Attachment, AttachmentType } from './Attachment';
export interface JobOfferType {
    anonymizedDate?: Moment;
    anonymizedFlag?: string;
    applicationId: BigNumber;
    contactEmail?: string;
    createdBy: string;
    createdDate: Moment;
    currency?: string;
    firstName?: string;
    formDataId?: BigNumber;
    formTemplateId?: BigNumber;
    initialComment?: string;
    internalStatus?: string;
    jobCode?: string;
    lastModifiedBy: string;
    lastModifiedDate: Moment;
    lastName?: string;
    locationObjCode?: string;
    offerApprovalId: BigNumber;
    redefineTemplateApprovers?: string;
    templateId?: BigNumber;
    userIsCurrentApprover?: boolean;
    userIsOriginator?: boolean;
    version?: BigNumber;
    approvers: JobOfferApproverType[];
    createdByNav: UserType;
    jobApplication: JobApplicationType;
    jobOfferPermissionsNav: JobOfferFieldControlsType;
    lastModifiedByNav: UserType;
    locationObj: FoLocationType[];
    resume: AttachmentType;
}
export interface JobOfferTypeForceMandatory {
    anonymizedDate: Moment;
    anonymizedFlag: string;
    applicationId: BigNumber;
    contactEmail: string;
    createdBy: string;
    createdDate: Moment;
    currency: string;
    firstName: string;
    formDataId: BigNumber;
    formTemplateId: BigNumber;
    initialComment: string;
    internalStatus: string;
    jobCode: string;
    lastModifiedBy: string;
    lastModifiedDate: Moment;
    lastName: string;
    locationObjCode: string;
    offerApprovalId: BigNumber;
    redefineTemplateApprovers: string;
    templateId: BigNumber;
    userIsCurrentApprover: boolean;
    userIsOriginator: boolean;
    version: BigNumber;
    approvers: JobOfferApproverType[];
    createdByNav: UserType;
    jobApplication: JobApplicationType;
    jobOfferPermissionsNav: JobOfferFieldControlsType;
    lastModifiedByNav: UserType;
    locationObj: FoLocationType[];
    resume: AttachmentType;
}
export declare namespace JobOffer {
    /**
     * Static representation of the [[anonymizedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ANONYMIZED_DATE: DateField<JobOffer>;
    /**
     * Static representation of the [[anonymizedFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ANONYMIZED_FLAG: StringField<JobOffer>;
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: BigNumberField<JobOffer>;
    /**
     * Static representation of the [[contactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_EMAIL: StringField<JobOffer>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<JobOffer>;
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE: DateField<JobOffer>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<JobOffer>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: StringField<JobOffer>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<JobOffer>;
    /**
     * Static representation of the [[formTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_TEMPLATE_ID: BigNumberField<JobOffer>;
    /**
     * Static representation of the [[initialComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INITIAL_COMMENT: StringField<JobOffer>;
    /**
     * Static representation of the [[internalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_STATUS: StringField<JobOffer>;
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CODE: StringField<JobOffer>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<JobOffer>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<JobOffer>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: StringField<JobOffer>;
    /**
     * Static representation of the [[locationObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_OBJ_CODE: StringField<JobOffer>;
    /**
     * Static representation of the [[offerApprovalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFER_APPROVAL_ID: BigNumberField<JobOffer>;
    /**
     * Static representation of the [[redefineTemplateApprovers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REDEFINE_TEMPLATE_APPROVERS: StringField<JobOffer>;
    /**
     * Static representation of the [[templateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_ID: BigNumberField<JobOffer>;
    /**
     * Static representation of the [[userIsCurrentApprover]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_IS_CURRENT_APPROVER: BooleanField<JobOffer>;
    /**
     * Static representation of the [[userIsOriginator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_IS_ORIGINATOR: BooleanField<JobOffer>;
    /**
     * Static representation of the [[version]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VERSION: BigNumberField<JobOffer>;
    /**
     * Static representation of the one-to-many navigation property [[approvers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVERS: Link<JobOffer, JobOfferApprover>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<JobOffer, User>;
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION: OneToOneLink<JobOffer, JobApplication>;
    /**
     * Static representation of the one-to-one navigation property [[jobOfferPermissionsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_OFFER_PERMISSIONS_NAV: OneToOneLink<JobOffer, JobOfferFieldControls>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<JobOffer, User>;
    /**
     * Static representation of the one-to-many navigation property [[locationObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_OBJ: Link<JobOffer, FoLocation>;
    /**
     * Static representation of the one-to-one navigation property [[resume]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESUME: OneToOneLink<JobOffer, Attachment>;
    /**
     * All fields of the JobOffer entity.
     */
    const _allFields: Array<DateField<JobOffer> | StringField<JobOffer> | BigNumberField<JobOffer> | BooleanField<JobOffer> | Link<JobOffer, JobOfferApprover> | OneToOneLink<JobOffer, User> | OneToOneLink<JobOffer, JobApplication> | OneToOneLink<JobOffer, JobOfferFieldControls> | Link<JobOffer, FoLocation> | OneToOneLink<JobOffer, Attachment>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobOffer>;
    /**
     * All key fields of the JobOffer entity.
     */
    const _keyFields: Array<Selectable<JobOffer>>;
    /**
     * Mapping of all key field names to the respective static field property JobOffer.
     */
    const _keys: {
        [keys: string]: Selectable<JobOffer>;
    };
}
//# sourceMappingURL=JobOffer.d.ts.map
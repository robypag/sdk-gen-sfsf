import { WfRequestRequestBuilder } from './WfRequestRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "WfRequest" of service "SFOData".
 */
export declare class WfRequest extends Entity implements WfRequestType {
    /**
     * Technical entity name for WfRequest.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WfRequest.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Current Step Number.
     * @nullable
     */
    currentStepNum?: number;
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
     * Module.
     * Maximum length: 128.
     * @nullable
     */
    module?: string;
    /**
     * Parent WfRequest Id.
     * @nullable
     */
    parentWfRequestId?: BigNumber;
    /**
     * Reminder Sent Date.
     * @nullable
     */
    reminderSentDate?: Moment;
    /**
     * Status.
     * Maximum length: 30.
     * @nullable
     */
    status?: string;
    /**
     * Total Steps.
     * @nullable
     */
    totalSteps?: number;
    /**
     * URL.
     * @nullable
     */
    url?: string;
    /**
     * WfRequest Id.
     */
    wfRequestId: BigNumber;
    /**
     * One-to-one navigation property to the [[EmpWfRequest]] entity.
     */
    empWfRequestNav: EmpWfRequest;
    /**
     * One-to-one navigation property to the [[WfRequest]] entity.
     */
    parentWfRequestNav: WfRequest;
    /**
     * One-to-many navigation property to the [[WfRequestComments]] entity.
     */
    wfRequestCommentsNav: WfRequestComments[];
    /**
     * One-to-many navigation property to the [[WfRequestParticipator]] entity.
     */
    wfRequestParticipatorNav: WfRequestParticipator[];
    /**
     * One-to-many navigation property to the [[WfRequestStep]] entity.
     */
    wfRequestStepNav: WfRequestStep[];
    /**
     * One-to-one navigation property to the [[WfRequestUiData]] entity.
     */
    wfRequestUiNav: WfRequestUiData;
    /**
     * One-to-many navigation property to the [[WorkflowAllowedActionList]] entity.
     */
    workflowAllowedActionListNav: WorkflowAllowedActionList[];
    /**
     * Returns an entity builder to construct instances `WfRequest`.
     * @returns A builder that constructs instances of entity type `WfRequest`.
     */
    static builder(): EntityBuilderType<WfRequest, WfRequestTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `WfRequest` entity type.
     * @returns A `WfRequest` request builder.
     */
    static requestBuilder(): WfRequestRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WfRequest`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WfRequest`.
     */
    static customField(fieldName: string): CustomField<WfRequest>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { EmpWfRequest, EmpWfRequestType } from './EmpWfRequest';
import { WfRequestComments, WfRequestCommentsType } from './WfRequestComments';
import { WfRequestParticipator, WfRequestParticipatorType } from './WfRequestParticipator';
import { WfRequestStep, WfRequestStepType } from './WfRequestStep';
import { WfRequestUiData, WfRequestUiDataType } from './WfRequestUiData';
import { WorkflowAllowedActionList, WorkflowAllowedActionListType } from './WorkflowAllowedActionList';
export interface WfRequestType {
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    currentStepNum?: number;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    module?: string;
    parentWfRequestId?: BigNumber;
    reminderSentDate?: Moment;
    status?: string;
    totalSteps?: number;
    url?: string;
    wfRequestId: BigNumber;
    empWfRequestNav: EmpWfRequestType;
    parentWfRequestNav: WfRequestType;
    wfRequestCommentsNav: WfRequestCommentsType[];
    wfRequestParticipatorNav: WfRequestParticipatorType[];
    wfRequestStepNav: WfRequestStepType[];
    wfRequestUiNav: WfRequestUiDataType;
    workflowAllowedActionListNav: WorkflowAllowedActionListType[];
}
export interface WfRequestTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    currentStepNum: number;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    module: string;
    parentWfRequestId: BigNumber;
    reminderSentDate: Moment;
    status: string;
    totalSteps: number;
    url: string;
    wfRequestId: BigNumber;
    empWfRequestNav: EmpWfRequestType;
    parentWfRequestNav: WfRequestType;
    wfRequestCommentsNav: WfRequestCommentsType[];
    wfRequestParticipatorNav: WfRequestParticipatorType[];
    wfRequestStepNav: WfRequestStepType[];
    wfRequestUiNav: WfRequestUiDataType;
    workflowAllowedActionListNav: WorkflowAllowedActionListType[];
}
export declare namespace WfRequest {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<WfRequest>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<WfRequest>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<WfRequest>;
    /**
     * Static representation of the [[currentStepNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENT_STEP_NUM: NumberField<WfRequest>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<WfRequest>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<WfRequest>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<WfRequest>;
    /**
     * Static representation of the [[module]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODULE: StringField<WfRequest>;
    /**
     * Static representation of the [[parentWfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_WF_REQUEST_ID: BigNumberField<WfRequest>;
    /**
     * Static representation of the [[reminderSentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMINDER_SENT_DATE: DateField<WfRequest>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<WfRequest>;
    /**
     * Static representation of the [[totalSteps]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_STEPS: NumberField<WfRequest>;
    /**
     * Static representation of the [[url]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const URL: StringField<WfRequest>;
    /**
     * Static representation of the [[wfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_ID: BigNumberField<WfRequest>;
    /**
     * Static representation of the one-to-one navigation property [[empWfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMP_WF_REQUEST_NAV: OneToOneLink<WfRequest, EmpWfRequest>;
    /**
     * Static representation of the one-to-one navigation property [[parentWfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_WF_REQUEST_NAV: OneToOneLink<WfRequest, WfRequest>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestCommentsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_COMMENTS_NAV: Link<WfRequest, WfRequestComments>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestParticipatorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_PARTICIPATOR_NAV: Link<WfRequest, WfRequestParticipator>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestStepNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_STEP_NAV: Link<WfRequest, WfRequestStep>;
    /**
     * Static representation of the one-to-one navigation property [[wfRequestUiNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_UI_NAV: OneToOneLink<WfRequest, WfRequestUiData>;
    /**
     * Static representation of the one-to-many navigation property [[workflowAllowedActionListNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORKFLOW_ALLOWED_ACTION_LIST_NAV: Link<WfRequest, WorkflowAllowedActionList>;
    /**
     * All fields of the WfRequest entity.
     */
    const _allFields: Array<StringField<WfRequest> | DateField<WfRequest> | NumberField<WfRequest> | BigNumberField<WfRequest> | OneToOneLink<WfRequest, EmpWfRequest> | OneToOneLink<WfRequest, WfRequest> | Link<WfRequest, WfRequestComments> | Link<WfRequest, WfRequestParticipator> | Link<WfRequest, WfRequestStep> | OneToOneLink<WfRequest, WfRequestUiData> | Link<WfRequest, WorkflowAllowedActionList>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WfRequest>;
    /**
     * All key fields of the WfRequest entity.
     */
    const _keyFields: Array<Selectable<WfRequest>>;
    /**
     * Mapping of all key field names to the respective static field property WfRequest.
     */
    const _keys: {
        [keys: string]: Selectable<WfRequest>;
    };
}
//# sourceMappingURL=WfRequest.d.ts.map
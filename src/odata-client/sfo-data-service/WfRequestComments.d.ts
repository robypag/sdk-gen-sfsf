import { WfRequestCommentsRequestBuilder } from './WfRequestCommentsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "WfRequestComments" of service "SFOData".
 */
export declare class WfRequestComments extends Entity implements WfRequestCommentsType {
    /**
     * Technical entity name for WfRequestComments.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WfRequestComments.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Action Type.
     * Maximum length: 30.
     * @nullable
     */
    actionType?: string;
    /**
     * Comments.
     * Maximum length: 4000.
     * @nullable
     */
    comments?: string;
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
     * User Id.
     * Maximum length: 100.
     * @nullable
     */
    userId?: string;
    /**
     * Workflow Request Comment Id.
     */
    wfRequestCommentId: BigNumber;
    /**
     * Workflow Request Id.
     * @nullable
     */
    wfRequestId?: BigNumber;
    /**
     * Workflow Request Step Id.
     * @nullable
     */
    wfRequestStepId?: BigNumber;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userNav: User;
    /**
     * Returns an entity builder to construct instances `WfRequestComments`.
     * @returns A builder that constructs instances of entity type `WfRequestComments`.
     */
    static builder(): EntityBuilderType<WfRequestComments, WfRequestCommentsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `WfRequestComments` entity type.
     * @returns A `WfRequestComments` request builder.
     */
    static requestBuilder(): WfRequestCommentsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WfRequestComments`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WfRequestComments`.
     */
    static customField(fieldName: string): CustomField<WfRequestComments>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface WfRequestCommentsType {
    actionType?: string;
    comments?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    userId?: string;
    wfRequestCommentId: BigNumber;
    wfRequestId?: BigNumber;
    wfRequestStepId?: BigNumber;
    userNav: UserType;
}
export interface WfRequestCommentsTypeForceMandatory {
    actionType: string;
    comments: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    userId: string;
    wfRequestCommentId: BigNumber;
    wfRequestId: BigNumber;
    wfRequestStepId: BigNumber;
    userNav: UserType;
}
export declare namespace WfRequestComments {
    /**
     * Static representation of the [[actionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTION_TYPE: StringField<WfRequestComments>;
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTS: StringField<WfRequestComments>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<WfRequestComments>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<WfRequestComments>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<WfRequestComments>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<WfRequestComments>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<WfRequestComments>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<WfRequestComments>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<WfRequestComments>;
    /**
     * Static representation of the [[wfRequestCommentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_COMMENT_ID: BigNumberField<WfRequestComments>;
    /**
     * Static representation of the [[wfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_ID: BigNumberField<WfRequestComments>;
    /**
     * Static representation of the [[wfRequestStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_STEP_ID: BigNumberField<WfRequestComments>;
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAV: OneToOneLink<WfRequestComments, User>;
    /**
     * All fields of the WfRequestComments entity.
     */
    const _allFields: Array<StringField<WfRequestComments> | DateField<WfRequestComments> | BigNumberField<WfRequestComments> | OneToOneLink<WfRequestComments, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WfRequestComments>;
    /**
     * All key fields of the WfRequestComments entity.
     */
    const _keyFields: Array<Selectable<WfRequestComments>>;
    /**
     * Mapping of all key field names to the respective static field property WfRequestComments.
     */
    const _keys: {
        [keys: string]: Selectable<WfRequestComments>;
    };
}
//# sourceMappingURL=WfRequestComments.d.ts.map
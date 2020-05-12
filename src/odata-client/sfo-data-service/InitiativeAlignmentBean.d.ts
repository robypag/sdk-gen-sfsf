import { InitiativeAlignmentBeanRequestBuilder } from './InitiativeAlignmentBeanRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "InitiativeAlignmentBean" of service "SFOData".
 */
export declare class InitiativeAlignmentBean extends Entity implements InitiativeAlignmentBeanType {
    /**
     * Technical entity name for InitiativeAlignmentBean.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InitiativeAlignmentBean.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * createdBy.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * createdDate.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * externalCode.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * goalId.
     * @nullable
     */
    goalId?: BigNumber;
    /**
     * goalName.
     * Maximum length: 255.
     * @nullable
     */
    goalName?: string;
    /**
     * goalType.
     * Maximum length: 255.
     * @nullable
     */
    goalType?: string;
    /**
     * initiativeGroupBeanRowId.
     * @nullable
     */
    initiativeGroupBeanRowId?: BigNumber;
    /**
     * initiativeId.
     * @nullable
     */
    initiativeId?: BigNumber;
    /**
     * initiativeName.
     * Maximum length: 255.
     * @nullable
     */
    initiativeName?: string;
    /**
     * lastModifiedBy.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * lastModifiedDate.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `InitiativeAlignmentBean`.
     * @returns A builder that constructs instances of entity type `InitiativeAlignmentBean`.
     */
    static builder(): EntityBuilderType<InitiativeAlignmentBean, InitiativeAlignmentBeanTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `InitiativeAlignmentBean` entity type.
     * @returns A `InitiativeAlignmentBean` request builder.
     */
    static requestBuilder(): InitiativeAlignmentBeanRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InitiativeAlignmentBean`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InitiativeAlignmentBean`.
     */
    static customField(fieldName: string): CustomField<InitiativeAlignmentBean>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface InitiativeAlignmentBeanType {
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    goalId?: BigNumber;
    goalName?: string;
    goalType?: string;
    initiativeGroupBeanRowId?: BigNumber;
    initiativeId?: BigNumber;
    initiativeName?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface InitiativeAlignmentBeanTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    goalId: BigNumber;
    goalName: string;
    goalType: string;
    initiativeGroupBeanRowId: BigNumber;
    initiativeId: BigNumber;
    initiativeName: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace InitiativeAlignmentBean {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<InitiativeAlignmentBean>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<InitiativeAlignmentBean>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<InitiativeAlignmentBean>;
    /**
     * Static representation of the [[goalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_ID: BigNumberField<InitiativeAlignmentBean>;
    /**
     * Static representation of the [[goalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_NAME: StringField<InitiativeAlignmentBean>;
    /**
     * Static representation of the [[goalType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_TYPE: StringField<InitiativeAlignmentBean>;
    /**
     * Static representation of the [[initiativeGroupBeanRowId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INITIATIVE_GROUP_BEAN_ROW_ID: BigNumberField<InitiativeAlignmentBean>;
    /**
     * Static representation of the [[initiativeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INITIATIVE_ID: BigNumberField<InitiativeAlignmentBean>;
    /**
     * Static representation of the [[initiativeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INITIATIVE_NAME: StringField<InitiativeAlignmentBean>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<InitiativeAlignmentBean>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<InitiativeAlignmentBean>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<InitiativeAlignmentBean>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<InitiativeAlignmentBean, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<InitiativeAlignmentBean, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<InitiativeAlignmentBean, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<InitiativeAlignmentBean, WfRequest>;
    /**
     * All fields of the InitiativeAlignmentBean entity.
     */
    const _allFields: Array<StringField<InitiativeAlignmentBean> | DateField<InitiativeAlignmentBean> | BigNumberField<InitiativeAlignmentBean> | OneToOneLink<InitiativeAlignmentBean, User> | OneToOneLink<InitiativeAlignmentBean, MdfEnumValue> | Link<InitiativeAlignmentBean, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<InitiativeAlignmentBean>;
    /**
     * All key fields of the InitiativeAlignmentBean entity.
     */
    const _keyFields: Array<Selectable<InitiativeAlignmentBean>>;
    /**
     * Mapping of all key field names to the respective static field property InitiativeAlignmentBean.
     */
    const _keys: {
        [keys: string]: Selectable<InitiativeAlignmentBean>;
    };
}
//# sourceMappingURL=InitiativeAlignmentBean.d.ts.map
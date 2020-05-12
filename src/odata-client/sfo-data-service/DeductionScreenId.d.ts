import { DeductionScreenIdRequestBuilder } from './DeductionScreenIdRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DeductionScreenId" of service "SFOData".
 */
export declare class DeductionScreenId extends Entity implements DeductionScreenIdType {
    /**
     * Technical entity name for DeductionScreenId.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DeductionScreenId.
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
     * Created On.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * dummyFieldValue.
     * Maximum length: 255.
     * @nullable
     */
    dummyFieldValue?: string;
    /**
     * Code.
     * Maximum length: 128.
     */
    externalCode: string;
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
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * onetimeDeductionId.
     * Maximum length: 255.
     * @nullable
     */
    onetimeDeductionId?: string;
    /**
     * onetimeDeductionUserGoAdminId.
     * Maximum length: 255.
     * @nullable
     */
    onetimeDeductionUserGoAdminId?: string;
    /**
     * onetimeDeductionUserGoEmployeeEditId.
     * Maximum length: 255.
     * @nullable
     */
    onetimeDeductionUserGoEmployeeEditId?: string;
    /**
     * onetimeDeductionUserGoEmployeeId.
     * Maximum length: 255.
     * @nullable
     */
    onetimeDeductionUserGoEmployeeId?: string;
    /**
     * recurringDeductionId.
     * Maximum length: 255.
     * @nullable
     */
    recurringDeductionId?: string;
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
     * Returns an entity builder to construct instances `DeductionScreenId`.
     * @returns A builder that constructs instances of entity type `DeductionScreenId`.
     */
    static builder(): EntityBuilderType<DeductionScreenId, DeductionScreenIdTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DeductionScreenId` entity type.
     * @returns A `DeductionScreenId` request builder.
     */
    static requestBuilder(): DeductionScreenIdRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DeductionScreenId`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DeductionScreenId`.
     */
    static customField(fieldName: string): CustomField<DeductionScreenId>;
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
export interface DeductionScreenIdType {
    createdBy?: string;
    createdDateTime?: Moment;
    dummyFieldValue?: string;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    onetimeDeductionId?: string;
    onetimeDeductionUserGoAdminId?: string;
    onetimeDeductionUserGoEmployeeEditId?: string;
    onetimeDeductionUserGoEmployeeId?: string;
    recurringDeductionId?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface DeductionScreenIdTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    dummyFieldValue: string;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    onetimeDeductionId: string;
    onetimeDeductionUserGoAdminId: string;
    onetimeDeductionUserGoEmployeeEditId: string;
    onetimeDeductionUserGoEmployeeId: string;
    recurringDeductionId: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace DeductionScreenId {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<DeductionScreenId>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<DeductionScreenId>;
    /**
     * Static representation of the [[dummyFieldValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUMMY_FIELD_VALUE: StringField<DeductionScreenId>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<DeductionScreenId>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<DeductionScreenId>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<DeductionScreenId>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<DeductionScreenId>;
    /**
     * Static representation of the [[onetimeDeductionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONETIME_DEDUCTION_ID: StringField<DeductionScreenId>;
    /**
     * Static representation of the [[onetimeDeductionUserGoAdminId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONETIME_DEDUCTION_USER_GO_ADMIN_ID: StringField<DeductionScreenId>;
    /**
     * Static representation of the [[onetimeDeductionUserGoEmployeeEditId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONETIME_DEDUCTION_USER_GO_EMPLOYEE_EDIT_ID: StringField<DeductionScreenId>;
    /**
     * Static representation of the [[onetimeDeductionUserGoEmployeeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONETIME_DEDUCTION_USER_GO_EMPLOYEE_ID: StringField<DeductionScreenId>;
    /**
     * Static representation of the [[recurringDeductionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECURRING_DEDUCTION_ID: StringField<DeductionScreenId>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<DeductionScreenId, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<DeductionScreenId, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<DeductionScreenId, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<DeductionScreenId, WfRequest>;
    /**
     * All fields of the DeductionScreenId entity.
     */
    const _allFields: Array<StringField<DeductionScreenId> | DateField<DeductionScreenId> | OneToOneLink<DeductionScreenId, User> | OneToOneLink<DeductionScreenId, MdfEnumValue> | Link<DeductionScreenId, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DeductionScreenId>;
    /**
     * All key fields of the DeductionScreenId entity.
     */
    const _keyFields: Array<Selectable<DeductionScreenId>>;
    /**
     * Mapping of all key field names to the respective static field property DeductionScreenId.
     */
    const _keys: {
        [keys: string]: Selectable<DeductionScreenId>;
    };
}
//# sourceMappingURL=DeductionScreenId.d.ts.map
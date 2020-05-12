"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DeductionScreenIdRequestBuilder_1 = require("./DeductionScreenIdRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DeductionScreenId" of service "SFOData".
 */
var DeductionScreenId = /** @class */ (function (_super) {
    __extends(DeductionScreenId, _super);
    function DeductionScreenId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DeductionScreenId`.
     * @returns A builder that constructs instances of entity type `DeductionScreenId`.
     */
    DeductionScreenId.builder = function () {
        return core_1.Entity.entityBuilder(DeductionScreenId);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DeductionScreenId` entity type.
     * @returns A `DeductionScreenId` request builder.
     */
    DeductionScreenId.requestBuilder = function () {
        return new DeductionScreenIdRequestBuilder_1.DeductionScreenIdRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DeductionScreenId`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DeductionScreenId`.
     */
    DeductionScreenId.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DeductionScreenId);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DeductionScreenId.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DeductionScreenId.
     */
    DeductionScreenId._entityName = 'DeductionScreenId';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DeductionScreenId.
     */
    DeductionScreenId._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    DeductionScreenId._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DeductionScreenId;
}(core_1.Entity));
exports.DeductionScreenId = DeductionScreenId;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (DeductionScreenId) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionScreenId.CREATED_BY = new core_1.StringField('createdBy', DeductionScreenId, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionScreenId.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', DeductionScreenId, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[dummyFieldValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionScreenId.DUMMY_FIELD_VALUE = new core_1.StringField('dummyFieldValue', DeductionScreenId, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionScreenId.EXTERNAL_CODE = new core_1.StringField('externalCode', DeductionScreenId, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionScreenId.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', DeductionScreenId, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionScreenId.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', DeductionScreenId, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionScreenId.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', DeductionScreenId, 'Edm.String');
    /**
     * Static representation of the [[onetimeDeductionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionScreenId.ONETIME_DEDUCTION_ID = new core_1.StringField('onetimeDeductionId', DeductionScreenId, 'Edm.String');
    /**
     * Static representation of the [[onetimeDeductionUserGoAdminId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionScreenId.ONETIME_DEDUCTION_USER_GO_ADMIN_ID = new core_1.StringField('onetimeDeductionUserGoAdminId', DeductionScreenId, 'Edm.String');
    /**
     * Static representation of the [[onetimeDeductionUserGoEmployeeEditId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionScreenId.ONETIME_DEDUCTION_USER_GO_EMPLOYEE_EDIT_ID = new core_1.StringField('onetimeDeductionUserGoEmployeeEditId', DeductionScreenId, 'Edm.String');
    /**
     * Static representation of the [[onetimeDeductionUserGoEmployeeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionScreenId.ONETIME_DEDUCTION_USER_GO_EMPLOYEE_ID = new core_1.StringField('onetimeDeductionUserGoEmployeeId', DeductionScreenId, 'Edm.String');
    /**
     * Static representation of the [[recurringDeductionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionScreenId.RECURRING_DEDUCTION_ID = new core_1.StringField('recurringDeductionId', DeductionScreenId, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionScreenId.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', DeductionScreenId, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionScreenId.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', DeductionScreenId, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionScreenId.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', DeductionScreenId, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionScreenId.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', DeductionScreenId, WfRequest_1.WfRequest);
    /**
     * All fields of the DeductionScreenId entity.
     */
    DeductionScreenId._allFields = [
        DeductionScreenId.CREATED_BY,
        DeductionScreenId.CREATED_DATE_TIME,
        DeductionScreenId.DUMMY_FIELD_VALUE,
        DeductionScreenId.EXTERNAL_CODE,
        DeductionScreenId.LAST_MODIFIED_BY,
        DeductionScreenId.LAST_MODIFIED_DATE_TIME,
        DeductionScreenId.MDF_SYSTEM_RECORD_STATUS,
        DeductionScreenId.ONETIME_DEDUCTION_ID,
        DeductionScreenId.ONETIME_DEDUCTION_USER_GO_ADMIN_ID,
        DeductionScreenId.ONETIME_DEDUCTION_USER_GO_EMPLOYEE_EDIT_ID,
        DeductionScreenId.ONETIME_DEDUCTION_USER_GO_EMPLOYEE_ID,
        DeductionScreenId.RECURRING_DEDUCTION_ID,
        DeductionScreenId.CREATED_BY_NAV,
        DeductionScreenId.LAST_MODIFIED_BY_NAV,
        DeductionScreenId.MDF_SYSTEM_RECORD_STATUS_NAV,
        DeductionScreenId.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    DeductionScreenId.ALL_FIELDS = new core_1.AllFields('*', DeductionScreenId);
    /**
     * All key fields of the DeductionScreenId entity.
     */
    DeductionScreenId._keyFields = [DeductionScreenId.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property DeductionScreenId.
     */
    DeductionScreenId._keys = DeductionScreenId._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DeductionScreenId = exports.DeductionScreenId || (exports.DeductionScreenId = {}));
exports.DeductionScreenId = DeductionScreenId;
//# sourceMappingURL=DeductionScreenId.js.map
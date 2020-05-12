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
var SpotAwardRequestBuilder_1 = require("./SpotAwardRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SpotAward" of service "SFOData".
 */
var SpotAward = /** @class */ (function (_super) {
    __extends(SpotAward, _super);
    function SpotAward() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SpotAward`.
     * @returns A builder that constructs instances of entity type `SpotAward`.
     */
    SpotAward.builder = function () {
        return core_1.Entity.entityBuilder(SpotAward);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SpotAward` entity type.
     * @returns A `SpotAward` request builder.
     */
    SpotAward.requestBuilder = function () {
        return new SpotAwardRequestBuilder_1.SpotAwardRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAward`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAward`.
     */
    SpotAward.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SpotAward);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SpotAward.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SpotAward.
     */
    SpotAward._entityName = 'SpotAward';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAward.
     */
    SpotAward._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SpotAward._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SpotAward;
}(core_1.Entity));
exports.SpotAward = SpotAward;
var MdfEnumValue_1 = require("./MdfEnumValue");
var User_1 = require("./User");
var SpotAwardCategory_1 = require("./SpotAwardCategory");
var SpotAwardLevel_1 = require("./SpotAwardLevel");
var SpotAwardProgram_1 = require("./SpotAwardProgram");
var WfRequest_1 = require("./WfRequest");
(function (SpotAward) {
    /**
     * Static representation of the [[approvalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.APPROVAL_STATUS = new core_1.StringField('approvalStatus', SpotAward, 'Edm.String');
    /**
     * Static representation of the [[approvedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.APPROVED_DATE = new core_1.DateField('approvedDate', SpotAward, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[awardAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.AWARD_AMOUNT = new core_1.BigNumberField('awardAmount', SpotAward, 'Edm.Decimal');
    /**
     * Static representation of the [[budgetHolderId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.BUDGET_HOLDER_ID = new core_1.StringField('budgetHolderId', SpotAward, 'Edm.String');
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.CATEGORY = new core_1.StringField('category', SpotAward, 'Edm.String');
    /**
     * Static representation of the [[commentForApprovers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.COMMENT_FOR_APPROVERS = new core_1.StringField('commentForApprovers', SpotAward, 'Edm.String');
    /**
     * Static representation of the [[commentForReceiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.COMMENT_FOR_RECEIVER = new core_1.StringField('commentForReceiver', SpotAward, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.CREATED_BY = new core_1.StringField('createdBy', SpotAward, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', SpotAward, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.CURRENCY = new core_1.StringField('currency', SpotAward, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', SpotAward, 'Edm.Int64');
    /**
     * Static representation of the [[guidelineAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.GUIDELINE_AMOUNT = new core_1.BigNumberField('guidelineAmount', SpotAward, 'Edm.Decimal');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', SpotAward, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', SpotAward, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[level]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.LEVEL = new core_1.StringField('level', SpotAward, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', SpotAward, 'Edm.String');
    /**
     * Static representation of the [[nominatorId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.NOMINATOR_ID = new core_1.StringField('nominatorId', SpotAward, 'Edm.String');
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.RECORD_ID = new core_1.StringField('recordId', SpotAward, 'Edm.String');
    /**
     * Static representation of the [[spotAwardProgram]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.SPOT_AWARD_PROGRAM = new core_1.StringField('spotAwardProgram', SpotAward, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.USER_ID = new core_1.StringField('userId', SpotAward, 'Edm.String');
    /**
     * Static representation of the [[workflowRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.WORKFLOW_REQUEST_ID = new core_1.BigNumberField('workflowRequestId', SpotAward, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[approvalStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.APPROVAL_STATUS_NAV = new core_1.OneToOneLink('approvalStatusNav', SpotAward, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[budgetHolderIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.BUDGET_HOLDER_ID_NAV = new core_1.OneToOneLink('budgetHolderIdNav', SpotAward, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.CATEGORY_NAV = new core_1.OneToOneLink('categoryNav', SpotAward, SpotAwardCategory_1.SpotAwardCategory);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', SpotAward, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', SpotAward, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[levelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.LEVEL_NAV = new core_1.OneToOneLink('levelNav', SpotAward, SpotAwardLevel_1.SpotAwardLevel);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', SpotAward, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[nominatorIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.NOMINATOR_ID_NAV = new core_1.OneToOneLink('nominatorIdNav', SpotAward, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[spotAwardProgramNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.SPOT_AWARD_PROGRAM_NAV = new core_1.OneToOneLink('spotAwardProgramNav', SpotAward, SpotAwardProgram_1.SpotAwardProgram);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', SpotAward, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAward.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', SpotAward, WfRequest_1.WfRequest);
    /**
     * All fields of the SpotAward entity.
     */
    SpotAward._allFields = [
        SpotAward.APPROVAL_STATUS,
        SpotAward.APPROVED_DATE,
        SpotAward.AWARD_AMOUNT,
        SpotAward.BUDGET_HOLDER_ID,
        SpotAward.CATEGORY,
        SpotAward.COMMENT_FOR_APPROVERS,
        SpotAward.COMMENT_FOR_RECEIVER,
        SpotAward.CREATED_BY,
        SpotAward.CREATED_DATE_TIME,
        SpotAward.CURRENCY,
        SpotAward.EXTERNAL_CODE,
        SpotAward.GUIDELINE_AMOUNT,
        SpotAward.LAST_MODIFIED_BY,
        SpotAward.LAST_MODIFIED_DATE_TIME,
        SpotAward.LEVEL,
        SpotAward.MDF_SYSTEM_RECORD_STATUS,
        SpotAward.NOMINATOR_ID,
        SpotAward.RECORD_ID,
        SpotAward.SPOT_AWARD_PROGRAM,
        SpotAward.USER_ID,
        SpotAward.WORKFLOW_REQUEST_ID,
        SpotAward.APPROVAL_STATUS_NAV,
        SpotAward.BUDGET_HOLDER_ID_NAV,
        SpotAward.CATEGORY_NAV,
        SpotAward.CREATED_BY_NAV,
        SpotAward.LAST_MODIFIED_BY_NAV,
        SpotAward.LEVEL_NAV,
        SpotAward.MDF_SYSTEM_RECORD_STATUS_NAV,
        SpotAward.NOMINATOR_ID_NAV,
        SpotAward.SPOT_AWARD_PROGRAM_NAV,
        SpotAward.USER_ID_NAV,
        SpotAward.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    SpotAward.ALL_FIELDS = new core_1.AllFields('*', SpotAward);
    /**
     * All key fields of the SpotAward entity.
     */
    SpotAward._keyFields = [SpotAward.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property SpotAward.
     */
    SpotAward._keys = SpotAward._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SpotAward = exports.SpotAward || (exports.SpotAward = {}));
exports.SpotAward = SpotAward;
//# sourceMappingURL=SpotAward.js.map
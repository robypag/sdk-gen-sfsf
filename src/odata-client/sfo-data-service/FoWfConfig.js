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
var FoWfConfigRequestBuilder_1 = require("./FoWfConfigRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOWfConfig" of service "SFOData".
 */
var FoWfConfig = /** @class */ (function (_super) {
    __extends(FoWfConfig, _super);
    function FoWfConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoWfConfig`.
     * @returns A builder that constructs instances of entity type `FoWfConfig`.
     */
    FoWfConfig.builder = function () {
        return core_1.Entity.entityBuilder(FoWfConfig);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoWfConfig` entity type.
     * @returns A `FoWfConfig` request builder.
     */
    FoWfConfig.requestBuilder = function () {
        return new FoWfConfigRequestBuilder_1.FoWfConfigRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoWfConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoWfConfig`.
     */
    FoWfConfig.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoWfConfig);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoWfConfig.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoWfConfig.
     */
    FoWfConfig._entityName = 'FOWfConfig';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoWfConfig.
     */
    FoWfConfig._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoWfConfig._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoWfConfig;
}(core_1.Entity));
exports.FoWfConfig = FoWfConfig;
var FoTranslation_1 = require("./FoTranslation");
var FoWfConfigStepApprover_1 = require("./FoWfConfigStepApprover");
(function (FoWfConfig) {
    /**
     * Static representation of the [[actionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.ACTION_TYPE = new core_1.StringField('actionType', FoWfConfig, 'Edm.String');
    /**
     * Static representation of the [[approverRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.APPROVER_ROLE = new core_1.StringField('approverRole', FoWfConfig, 'Edm.String');
    /**
     * Static representation of the [[approverType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.APPROVER_TYPE = new core_1.StringField('approverType', FoWfConfig, 'Edm.String');
    /**
     * Static representation of the [[context]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.CONTEXT = new core_1.StringField('context', FoWfConfig, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.CREATED_BY = new core_1.StringField('createdBy', FoWfConfig, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoWfConfig, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.CREATED_ON = new core_1.DateField('createdOn', FoWfConfig, 'Edm.DateTime');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.DESCRIPTION = new core_1.StringField('description', FoWfConfig, 'Edm.String');
    /**
     * Static representation of the [[emailConfiguration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.EMAIL_CONFIGURATION = new core_1.BigNumberField('emailConfiguration', FoWfConfig, 'Edm.Decimal');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.EXTERNAL_CODE = new core_1.StringField('externalCode', FoWfConfig, 'Edm.String');
    /**
     * Static representation of the [[futureDatedAlternateWorkflow]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.FUTURE_DATED_ALTERNATE_WORKFLOW = new core_1.StringField('futureDatedAlternateWorkflow', FoWfConfig, 'Edm.String');
    /**
     * Static representation of the [[isDelegateSupported]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.IS_DELEGATE_SUPPORTED = new core_1.BooleanField('isDelegateSupported', FoWfConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoWfConfig, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoWfConfig, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoWfConfig, 'Edm.DateTime');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.NAME = new core_1.StringField('name', FoWfConfig, 'Edm.String');
    /**
     * Static representation of the [[relationshipToApprover]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.RELATIONSHIP_TO_APPROVER = new core_1.StringField('relationshipToApprover', FoWfConfig, 'Edm.String');
    /**
     * Static representation of the [[remindIndays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.REMIND_INDAYS = new core_1.BigNumberField('remindIndays', FoWfConfig, 'Edm.Int64');
    /**
     * Static representation of the [[respectRbp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.RESPECT_RBP = new core_1.BooleanField('respectRBP', FoWfConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[skipType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.SKIP_TYPE = new core_1.StringField('skipType', FoWfConfig, 'Edm.String');
    /**
     * Static representation of the [[stepNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.STEP_NUM = new core_1.BigNumberField('stepNum', FoWfConfig, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.DESCRIPTION_TRANSLATION_NAV = new core_1.OneToOneLink('descriptionTranslationNav', FoWfConfig, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-one navigation property [[futureDatedAlternateWorkflowNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.FUTURE_DATED_ALTERNATE_WORKFLOW_NAV = new core_1.OneToOneLink('futureDatedAlternateWorkflowNav', FoWfConfig, FoWfConfig);
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.NAME_TRANSLATION_NAV = new core_1.OneToOneLink('nameTranslationNav', FoWfConfig, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-many navigation property [[wfStepApproverNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfig.WF_STEP_APPROVER_NAV = new core_1.Link('wfStepApproverNav', FoWfConfig, FoWfConfigStepApprover_1.FoWfConfigStepApprover);
    /**
     * All fields of the FoWfConfig entity.
     */
    FoWfConfig._allFields = [
        FoWfConfig.ACTION_TYPE,
        FoWfConfig.APPROVER_ROLE,
        FoWfConfig.APPROVER_TYPE,
        FoWfConfig.CONTEXT,
        FoWfConfig.CREATED_BY,
        FoWfConfig.CREATED_DATE_TIME,
        FoWfConfig.CREATED_ON,
        FoWfConfig.DESCRIPTION,
        FoWfConfig.EMAIL_CONFIGURATION,
        FoWfConfig.EXTERNAL_CODE,
        FoWfConfig.FUTURE_DATED_ALTERNATE_WORKFLOW,
        FoWfConfig.IS_DELEGATE_SUPPORTED,
        FoWfConfig.LAST_MODIFIED_BY,
        FoWfConfig.LAST_MODIFIED_DATE_TIME,
        FoWfConfig.LAST_MODIFIED_ON,
        FoWfConfig.NAME,
        FoWfConfig.RELATIONSHIP_TO_APPROVER,
        FoWfConfig.REMIND_INDAYS,
        FoWfConfig.RESPECT_RBP,
        FoWfConfig.SKIP_TYPE,
        FoWfConfig.STEP_NUM,
        FoWfConfig.DESCRIPTION_TRANSLATION_NAV,
        FoWfConfig.FUTURE_DATED_ALTERNATE_WORKFLOW_NAV,
        FoWfConfig.NAME_TRANSLATION_NAV,
        FoWfConfig.WF_STEP_APPROVER_NAV
    ];
    /**
     * All fields selector.
     */
    FoWfConfig.ALL_FIELDS = new core_1.AllFields('*', FoWfConfig);
    /**
     * All key fields of the FoWfConfig entity.
     */
    FoWfConfig._keyFields = [FoWfConfig.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property FoWfConfig.
     */
    FoWfConfig._keys = FoWfConfig._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoWfConfig = exports.FoWfConfig || (exports.FoWfConfig = {}));
exports.FoWfConfig = FoWfConfig;
//# sourceMappingURL=FoWfConfig.js.map
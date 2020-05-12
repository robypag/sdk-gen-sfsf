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
var SpotAwardEligibilityRuleRequestBuilder_1 = require("./SpotAwardEligibilityRuleRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SpotAwardEligibilityRule" of service "SFOData".
 */
var SpotAwardEligibilityRule = /** @class */ (function (_super) {
    __extends(SpotAwardEligibilityRule, _super);
    function SpotAwardEligibilityRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SpotAwardEligibilityRule`.
     * @returns A builder that constructs instances of entity type `SpotAwardEligibilityRule`.
     */
    SpotAwardEligibilityRule.builder = function () {
        return core_1.Entity.entityBuilder(SpotAwardEligibilityRule);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardEligibilityRule` entity type.
     * @returns A `SpotAwardEligibilityRule` request builder.
     */
    SpotAwardEligibilityRule.requestBuilder = function () {
        return new SpotAwardEligibilityRuleRequestBuilder_1.SpotAwardEligibilityRuleRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardEligibilityRule`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardEligibilityRule`.
     */
    SpotAwardEligibilityRule.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SpotAwardEligibilityRule);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SpotAwardEligibilityRule.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SpotAwardEligibilityRule.
     */
    SpotAwardEligibilityRule._entityName = 'SpotAwardEligibilityRule';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardEligibilityRule.
     */
    SpotAwardEligibilityRule._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SpotAwardEligibilityRule._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SpotAwardEligibilityRule;
}(core_1.Entity));
exports.SpotAwardEligibilityRule = SpotAwardEligibilityRule;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (SpotAwardEligibilityRule) {
    /**
     * Static representation of the [[spotAwardProgramExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardEligibilityRule.SPOT_AWARD_PROGRAM_EXTERNAL_CODE = new core_1.StringField('SpotAwardProgram_externalCode', SpotAwardEligibilityRule, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardEligibilityRule.CREATED_BY = new core_1.StringField('createdBy', SpotAwardEligibilityRule, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardEligibilityRule.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', SpotAwardEligibilityRule, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardEligibilityRule.EXTERNAL_CODE = new core_1.StringField('externalCode', SpotAwardEligibilityRule, 'Edm.String');
    /**
     * Static representation of the [[groupId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardEligibilityRule.GROUP_ID = new core_1.BigNumberField('groupId', SpotAwardEligibilityRule, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardEligibilityRule.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', SpotAwardEligibilityRule, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardEligibilityRule.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', SpotAwardEligibilityRule, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardEligibilityRule.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', SpotAwardEligibilityRule, 'Edm.String');
    /**
     * Static representation of the [[rule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardEligibilityRule.RULE = new core_1.StringField('rule', SpotAwardEligibilityRule, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardEligibilityRule.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', SpotAwardEligibilityRule, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardEligibilityRule.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', SpotAwardEligibilityRule, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardEligibilityRule.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', SpotAwardEligibilityRule, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the SpotAwardEligibilityRule entity.
     */
    SpotAwardEligibilityRule._allFields = [
        SpotAwardEligibilityRule.SPOT_AWARD_PROGRAM_EXTERNAL_CODE,
        SpotAwardEligibilityRule.CREATED_BY,
        SpotAwardEligibilityRule.CREATED_DATE_TIME,
        SpotAwardEligibilityRule.EXTERNAL_CODE,
        SpotAwardEligibilityRule.GROUP_ID,
        SpotAwardEligibilityRule.LAST_MODIFIED_BY,
        SpotAwardEligibilityRule.LAST_MODIFIED_DATE_TIME,
        SpotAwardEligibilityRule.MDF_SYSTEM_RECORD_STATUS,
        SpotAwardEligibilityRule.RULE,
        SpotAwardEligibilityRule.CREATED_BY_NAV,
        SpotAwardEligibilityRule.LAST_MODIFIED_BY_NAV,
        SpotAwardEligibilityRule.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    SpotAwardEligibilityRule.ALL_FIELDS = new core_1.AllFields('*', SpotAwardEligibilityRule);
    /**
     * All key fields of the SpotAwardEligibilityRule entity.
     */
    SpotAwardEligibilityRule._keyFields = [SpotAwardEligibilityRule.SPOT_AWARD_PROGRAM_EXTERNAL_CODE, SpotAwardEligibilityRule.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property SpotAwardEligibilityRule.
     */
    SpotAwardEligibilityRule._keys = SpotAwardEligibilityRule._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SpotAwardEligibilityRule = exports.SpotAwardEligibilityRule || (exports.SpotAwardEligibilityRule = {}));
exports.SpotAwardEligibilityRule = SpotAwardEligibilityRule;
//# sourceMappingURL=SpotAwardEligibilityRule.js.map
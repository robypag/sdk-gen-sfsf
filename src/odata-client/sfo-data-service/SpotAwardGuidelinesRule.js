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
var SpotAwardGuidelinesRuleRequestBuilder_1 = require("./SpotAwardGuidelinesRuleRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SpotAwardGuidelinesRule" of service "SFOData".
 */
var SpotAwardGuidelinesRule = /** @class */ (function (_super) {
    __extends(SpotAwardGuidelinesRule, _super);
    function SpotAwardGuidelinesRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SpotAwardGuidelinesRule`.
     * @returns A builder that constructs instances of entity type `SpotAwardGuidelinesRule`.
     */
    SpotAwardGuidelinesRule.builder = function () {
        return core_1.Entity.entityBuilder(SpotAwardGuidelinesRule);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardGuidelinesRule` entity type.
     * @returns A `SpotAwardGuidelinesRule` request builder.
     */
    SpotAwardGuidelinesRule.requestBuilder = function () {
        return new SpotAwardGuidelinesRuleRequestBuilder_1.SpotAwardGuidelinesRuleRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardGuidelinesRule`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardGuidelinesRule`.
     */
    SpotAwardGuidelinesRule.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SpotAwardGuidelinesRule);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SpotAwardGuidelinesRule.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SpotAwardGuidelinesRule.
     */
    SpotAwardGuidelinesRule._entityName = 'SpotAwardGuidelinesRule';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardGuidelinesRule.
     */
    SpotAwardGuidelinesRule._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SpotAwardGuidelinesRule._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SpotAwardGuidelinesRule;
}(core_1.Entity));
exports.SpotAwardGuidelinesRule = SpotAwardGuidelinesRule;
var SpotAwardCategory_1 = require("./SpotAwardCategory");
var User_1 = require("./User");
var SpotAwardLevel_1 = require("./SpotAwardLevel");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (SpotAwardGuidelinesRule) {
    /**
     * Static representation of the [[spotAwardProgramExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.SPOT_AWARD_PROGRAM_EXTERNAL_CODE = new core_1.StringField('SpotAwardProgram_externalCode', SpotAwardGuidelinesRule, 'Edm.String');
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.CATEGORY = new core_1.StringField('category', SpotAwardGuidelinesRule, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.COUNTRY = new core_1.StringField('country', SpotAwardGuidelinesRule, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.CREATED_BY = new core_1.StringField('createdBy', SpotAwardGuidelinesRule, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', SpotAwardGuidelinesRule, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.CURRENCY = new core_1.StringField('currency', SpotAwardGuidelinesRule, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.EXTERNAL_CODE = new core_1.StringField('externalCode', SpotAwardGuidelinesRule, 'Edm.String');
    /**
     * Static representation of the [[guideLineRuleOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.GUIDE_LINE_RULE_ORDER = new core_1.BigNumberField('guideLineRuleOrder', SpotAwardGuidelinesRule, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', SpotAwardGuidelinesRule, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', SpotAwardGuidelinesRule, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[level]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.LEVEL = new core_1.StringField('level', SpotAwardGuidelinesRule, 'Edm.String');
    /**
     * Static representation of the [[maxRuleAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.MAX_RULE_AMOUNT = new core_1.BigNumberField('maxRuleAmount', SpotAwardGuidelinesRule, 'Edm.Decimal');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', SpotAwardGuidelinesRule, 'Edm.String');
    /**
     * Static representation of the [[minRuleAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.MIN_RULE_AMOUNT = new core_1.BigNumberField('minRuleAmount', SpotAwardGuidelinesRule, 'Edm.Decimal');
    /**
     * Static representation of the [[ruleAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.RULE_AMOUNT = new core_1.BigNumberField('ruleAmount', SpotAwardGuidelinesRule, 'Edm.Decimal');
    /**
     * Static representation of the [[ruleAmountIncrement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.RULE_AMOUNT_INCREMENT = new core_1.BigNumberField('ruleAmountIncrement', SpotAwardGuidelinesRule, 'Edm.Decimal');
    /**
     * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.CATEGORY_NAV = new core_1.OneToOneLink('categoryNav', SpotAwardGuidelinesRule, SpotAwardCategory_1.SpotAwardCategory);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', SpotAwardGuidelinesRule, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', SpotAwardGuidelinesRule, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[levelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.LEVEL_NAV = new core_1.OneToOneLink('levelNav', SpotAwardGuidelinesRule, SpotAwardLevel_1.SpotAwardLevel);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpotAwardGuidelinesRule.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', SpotAwardGuidelinesRule, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the SpotAwardGuidelinesRule entity.
     */
    SpotAwardGuidelinesRule._allFields = [
        SpotAwardGuidelinesRule.SPOT_AWARD_PROGRAM_EXTERNAL_CODE,
        SpotAwardGuidelinesRule.CATEGORY,
        SpotAwardGuidelinesRule.COUNTRY,
        SpotAwardGuidelinesRule.CREATED_BY,
        SpotAwardGuidelinesRule.CREATED_DATE_TIME,
        SpotAwardGuidelinesRule.CURRENCY,
        SpotAwardGuidelinesRule.EXTERNAL_CODE,
        SpotAwardGuidelinesRule.GUIDE_LINE_RULE_ORDER,
        SpotAwardGuidelinesRule.LAST_MODIFIED_BY,
        SpotAwardGuidelinesRule.LAST_MODIFIED_DATE_TIME,
        SpotAwardGuidelinesRule.LEVEL,
        SpotAwardGuidelinesRule.MAX_RULE_AMOUNT,
        SpotAwardGuidelinesRule.MDF_SYSTEM_RECORD_STATUS,
        SpotAwardGuidelinesRule.MIN_RULE_AMOUNT,
        SpotAwardGuidelinesRule.RULE_AMOUNT,
        SpotAwardGuidelinesRule.RULE_AMOUNT_INCREMENT,
        SpotAwardGuidelinesRule.CATEGORY_NAV,
        SpotAwardGuidelinesRule.CREATED_BY_NAV,
        SpotAwardGuidelinesRule.LAST_MODIFIED_BY_NAV,
        SpotAwardGuidelinesRule.LEVEL_NAV,
        SpotAwardGuidelinesRule.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    SpotAwardGuidelinesRule.ALL_FIELDS = new core_1.AllFields('*', SpotAwardGuidelinesRule);
    /**
     * All key fields of the SpotAwardGuidelinesRule entity.
     */
    SpotAwardGuidelinesRule._keyFields = [SpotAwardGuidelinesRule.SPOT_AWARD_PROGRAM_EXTERNAL_CODE, SpotAwardGuidelinesRule.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property SpotAwardGuidelinesRule.
     */
    SpotAwardGuidelinesRule._keys = SpotAwardGuidelinesRule._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SpotAwardGuidelinesRule = exports.SpotAwardGuidelinesRule || (exports.SpotAwardGuidelinesRule = {}));
exports.SpotAwardGuidelinesRule = SpotAwardGuidelinesRule;
//# sourceMappingURL=SpotAwardGuidelinesRule.js.map
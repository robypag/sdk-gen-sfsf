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
var RbpRuleRequestBuilder_1 = require("./RbpRuleRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "RBPRule" of service "SFOData".
 */
var RbpRule = /** @class */ (function (_super) {
    __extends(RbpRule, _super);
    function RbpRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `RbpRule`.
     * @returns A builder that constructs instances of entity type `RbpRule`.
     */
    RbpRule.builder = function () {
        return core_1.Entity.entityBuilder(RbpRule);
    };
    /**
     * Returns a request builder to construct requests for operations on the `RbpRule` entity type.
     * @returns A `RbpRule` request builder.
     */
    RbpRule.requestBuilder = function () {
        return new RbpRuleRequestBuilder_1.RbpRuleRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RbpRule`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RbpRule`.
     */
    RbpRule.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, RbpRule);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    RbpRule.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for RbpRule.
     */
    RbpRule._entityName = 'RBPRule';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RbpRule.
     */
    RbpRule._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    RbpRule._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return RbpRule;
}(core_1.Entity));
exports.RbpRule = RbpRule;
var DynamicGroup_1 = require("./DynamicGroup");
var RbpRole_1 = require("./RbpRole");
(function (RbpRule) {
    /**
     * Static representation of the [[accessGroupLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRule.ACCESS_GROUP_LEVEL = new core_1.NumberField('accessGroupLevel', RbpRule, 'Edm.Int32');
    /**
     * Static representation of the [[accessUserType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRule.ACCESS_USER_TYPE = new core_1.StringField('accessUserType', RbpRule, 'Edm.String');
    /**
     * Static representation of the [[excludeSelf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRule.EXCLUDE_SELF = new core_1.BooleanField('excludeSelf', RbpRule, 'Edm.Boolean');
    /**
     * Static representation of the [[includeSelf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRule.INCLUDE_SELF = new core_1.BooleanField('includeSelf', RbpRule, 'Edm.Boolean');
    /**
     * Static representation of the [[myFilter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRule.MY_FILTER = new core_1.StringField('myFilter', RbpRule, 'Edm.String');
    /**
     * Static representation of the [[relationRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRule.RELATION_ROLE = new core_1.StringField('relationRole', RbpRule, 'Edm.String');
    /**
     * Static representation of the [[ruleId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRule.RULE_ID = new core_1.BigNumberField('ruleId', RbpRule, 'Edm.Int64');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRule.STATUS = new core_1.NumberField('status', RbpRule, 'Edm.Int32');
    /**
     * Static representation of the [[targetGroupLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRule.TARGET_GROUP_LEVEL = new core_1.NumberField('targetGroupLevel', RbpRule, 'Edm.Int32');
    /**
     * Static representation of the [[targetUserType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRule.TARGET_USER_TYPE = new core_1.StringField('targetUserType', RbpRule, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[accessGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRule.ACCESS_GROUPS = new core_1.Link('accessGroups', RbpRule, DynamicGroup_1.DynamicGroup);
    /**
     * Static representation of the one-to-one navigation property [[roles]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRule.ROLES = new core_1.OneToOneLink('roles', RbpRule, RbpRole_1.RbpRole);
    /**
     * Static representation of the one-to-many navigation property [[targetGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRule.TARGET_GROUPS = new core_1.Link('targetGroups', RbpRule, DynamicGroup_1.DynamicGroup);
    /**
     * All fields of the RbpRule entity.
     */
    RbpRule._allFields = [
        RbpRule.ACCESS_GROUP_LEVEL,
        RbpRule.ACCESS_USER_TYPE,
        RbpRule.EXCLUDE_SELF,
        RbpRule.INCLUDE_SELF,
        RbpRule.MY_FILTER,
        RbpRule.RELATION_ROLE,
        RbpRule.RULE_ID,
        RbpRule.STATUS,
        RbpRule.TARGET_GROUP_LEVEL,
        RbpRule.TARGET_USER_TYPE,
        RbpRule.ACCESS_GROUPS,
        RbpRule.ROLES,
        RbpRule.TARGET_GROUPS
    ];
    /**
     * All fields selector.
     */
    RbpRule.ALL_FIELDS = new core_1.AllFields('*', RbpRule);
    /**
     * All key fields of the RbpRule entity.
     */
    RbpRule._keyFields = [RbpRule.RULE_ID];
    /**
     * Mapping of all key field names to the respective static field property RbpRule.
     */
    RbpRule._keys = RbpRule._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(RbpRule = exports.RbpRule || (exports.RbpRule = {}));
exports.RbpRule = RbpRule;
//# sourceMappingURL=RbpRule.js.map
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
var FoWfConfigStepApproverRequestBuilder_1 = require("./FoWfConfigStepApproverRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOWfConfigStepApprover" of service "SFOData".
 */
var FoWfConfigStepApprover = /** @class */ (function (_super) {
    __extends(FoWfConfigStepApprover, _super);
    function FoWfConfigStepApprover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoWfConfigStepApprover`.
     * @returns A builder that constructs instances of entity type `FoWfConfigStepApprover`.
     */
    FoWfConfigStepApprover.builder = function () {
        return core_1.Entity.entityBuilder(FoWfConfigStepApprover);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoWfConfigStepApprover` entity type.
     * @returns A `FoWfConfigStepApprover` request builder.
     */
    FoWfConfigStepApprover.requestBuilder = function () {
        return new FoWfConfigStepApproverRequestBuilder_1.FoWfConfigStepApproverRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoWfConfigStepApprover`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoWfConfigStepApprover`.
     */
    FoWfConfigStepApprover.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoWfConfigStepApprover);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoWfConfigStepApprover.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoWfConfigStepApprover.
     */
    FoWfConfigStepApprover._entityName = 'FOWfConfigStepApprover';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoWfConfigStepApprover.
     */
    FoWfConfigStepApprover._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoWfConfigStepApprover._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoWfConfigStepApprover;
}(core_1.Entity));
exports.FoWfConfigStepApprover = FoWfConfigStepApprover;
var FoDynamicRole_1 = require("./FoDynamicRole");
var DynamicGroup_1 = require("./DynamicGroup");
var Position_1 = require("./Position");
(function (FoWfConfigStepApprover) {
    /**
     * Static representation of the [[actionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.ACTION_TYPE = new core_1.StringField('actionType', FoWfConfigStepApprover, 'Edm.String');
    /**
     * Static representation of the [[approverPositionRelationship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.APPROVER_POSITION_RELATIONSHIP = new core_1.StringField('approverPositionRelationship', FoWfConfigStepApprover, 'Edm.String');
    /**
     * Static representation of the [[approverRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.APPROVER_ROLE = new core_1.StringField('approverRole', FoWfConfigStepApprover, 'Edm.String');
    /**
     * Static representation of the [[approverType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.APPROVER_TYPE = new core_1.StringField('approverType', FoWfConfigStepApprover, 'Edm.String');
    /**
     * Static representation of the [[context]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.CONTEXT = new core_1.StringField('context', FoWfConfigStepApprover, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.CREATED_BY = new core_1.StringField('createdBy', FoWfConfigStepApprover, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoWfConfigStepApprover, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[emailConfiguration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.EMAIL_CONFIGURATION = new core_1.StringField('emailConfiguration', FoWfConfigStepApprover, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.EXTERNAL_CODE = new core_1.StringField('externalCode', FoWfConfigStepApprover, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoWfConfigStepApprover, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoWfConfigStepApprover, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[relationshipToApprover]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.RELATIONSHIP_TO_APPROVER = new core_1.StringField('relationshipToApprover', FoWfConfigStepApprover, 'Edm.String');
    /**
     * Static representation of the [[relationshipToPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.RELATIONSHIP_TO_POSITION = new core_1.StringField('relationshipToPosition', FoWfConfigStepApprover, 'Edm.String');
    /**
     * Static representation of the [[respectRbp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.RESPECT_RBP = new core_1.BooleanField('respectRBP', FoWfConfigStepApprover, 'Edm.Boolean');
    /**
     * Static representation of the [[skipType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.SKIP_TYPE = new core_1.StringField('skipType', FoWfConfigStepApprover, 'Edm.String');
    /**
     * Static representation of the [[stepNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.STEP_NUM = new core_1.BigNumberField('stepNum', FoWfConfigStepApprover, 'Edm.Int64');
    /**
     * Static representation of the one-to-many navigation property [[approverDynamicRoleNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.APPROVER_DYNAMIC_ROLE_NAV = new core_1.Link('approverDynamicRoleNav', FoWfConfigStepApprover, FoDynamicRole_1.FoDynamicRole);
    /**
     * Static representation of the one-to-one navigation property [[approverGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.APPROVER_GROUP_NAV = new core_1.OneToOneLink('approverGroupNav', FoWfConfigStepApprover, DynamicGroup_1.DynamicGroup);
    /**
     * Static representation of the one-to-many navigation property [[approverPositionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoWfConfigStepApprover.APPROVER_POSITION_NAV = new core_1.Link('approverPositionNav', FoWfConfigStepApprover, Position_1.Position);
    /**
     * All fields of the FoWfConfigStepApprover entity.
     */
    FoWfConfigStepApprover._allFields = [
        FoWfConfigStepApprover.ACTION_TYPE,
        FoWfConfigStepApprover.APPROVER_POSITION_RELATIONSHIP,
        FoWfConfigStepApprover.APPROVER_ROLE,
        FoWfConfigStepApprover.APPROVER_TYPE,
        FoWfConfigStepApprover.CONTEXT,
        FoWfConfigStepApprover.CREATED_BY,
        FoWfConfigStepApprover.CREATED_DATE_TIME,
        FoWfConfigStepApprover.EMAIL_CONFIGURATION,
        FoWfConfigStepApprover.EXTERNAL_CODE,
        FoWfConfigStepApprover.LAST_MODIFIED_BY,
        FoWfConfigStepApprover.LAST_MODIFIED_DATE_TIME,
        FoWfConfigStepApprover.RELATIONSHIP_TO_APPROVER,
        FoWfConfigStepApprover.RELATIONSHIP_TO_POSITION,
        FoWfConfigStepApprover.RESPECT_RBP,
        FoWfConfigStepApprover.SKIP_TYPE,
        FoWfConfigStepApprover.STEP_NUM,
        FoWfConfigStepApprover.APPROVER_DYNAMIC_ROLE_NAV,
        FoWfConfigStepApprover.APPROVER_GROUP_NAV,
        FoWfConfigStepApprover.APPROVER_POSITION_NAV
    ];
    /**
     * All fields selector.
     */
    FoWfConfigStepApprover.ALL_FIELDS = new core_1.AllFields('*', FoWfConfigStepApprover);
    /**
     * All key fields of the FoWfConfigStepApprover entity.
     */
    FoWfConfigStepApprover._keyFields = [FoWfConfigStepApprover.EXTERNAL_CODE, FoWfConfigStepApprover.STEP_NUM];
    /**
     * Mapping of all key field names to the respective static field property FoWfConfigStepApprover.
     */
    FoWfConfigStepApprover._keys = FoWfConfigStepApprover._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoWfConfigStepApprover = exports.FoWfConfigStepApprover || (exports.FoWfConfigStepApprover = {}));
exports.FoWfConfigStepApprover = FoWfConfigStepApprover;
//# sourceMappingURL=FoWfConfigStepApprover.js.map
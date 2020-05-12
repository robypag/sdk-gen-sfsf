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
var JdTemplateFamilyMappingRequestBuilder_1 = require("./JdTemplateFamilyMappingRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JDTemplateFamilyMapping" of service "SFOData".
 */
var JdTemplateFamilyMapping = /** @class */ (function (_super) {
    __extends(JdTemplateFamilyMapping, _super);
    function JdTemplateFamilyMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JdTemplateFamilyMapping`.
     * @returns A builder that constructs instances of entity type `JdTemplateFamilyMapping`.
     */
    JdTemplateFamilyMapping.builder = function () {
        return core_1.Entity.entityBuilder(JdTemplateFamilyMapping);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JdTemplateFamilyMapping` entity type.
     * @returns A `JdTemplateFamilyMapping` request builder.
     */
    JdTemplateFamilyMapping.requestBuilder = function () {
        return new JdTemplateFamilyMappingRequestBuilder_1.JdTemplateFamilyMappingRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JdTemplateFamilyMapping`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JdTemplateFamilyMapping`.
     */
    JdTemplateFamilyMapping.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JdTemplateFamilyMapping);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JdTemplateFamilyMapping.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JdTemplateFamilyMapping.
     */
    JdTemplateFamilyMapping._entityName = 'JDTemplateFamilyMapping';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JdTemplateFamilyMapping.
     */
    JdTemplateFamilyMapping._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JdTemplateFamilyMapping._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JdTemplateFamilyMapping;
}(core_1.Entity));
exports.JdTemplateFamilyMapping = JdTemplateFamilyMapping;
var User_1 = require("./User");
var FamilyEntity_1 = require("./FamilyEntity");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (JdTemplateFamilyMapping) {
    /**
     * Static representation of the [[jobDescTemplateExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JdTemplateFamilyMapping.JOB_DESC_TEMPLATE_EXTERNAL_CODE = new core_1.StringField('JobDescTemplate_externalCode', JdTemplateFamilyMapping, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JdTemplateFamilyMapping.CREATED_BY = new core_1.StringField('createdBy', JdTemplateFamilyMapping, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JdTemplateFamilyMapping.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JdTemplateFamilyMapping, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JdTemplateFamilyMapping.EXTERNAL_CODE = new core_1.StringField('externalCode', JdTemplateFamilyMapping, 'Edm.String');
    /**
     * Static representation of the [[family]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JdTemplateFamilyMapping.FAMILY = new core_1.StringField('family', JdTemplateFamilyMapping, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JdTemplateFamilyMapping.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JdTemplateFamilyMapping, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JdTemplateFamilyMapping.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JdTemplateFamilyMapping, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JdTemplateFamilyMapping.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', JdTemplateFamilyMapping, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JdTemplateFamilyMapping.STATUS = new core_1.StringField('status', JdTemplateFamilyMapping, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JdTemplateFamilyMapping.SUB_MODULE = new core_1.StringField('subModule', JdTemplateFamilyMapping, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JdTemplateFamilyMapping.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JdTemplateFamilyMapping, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[familyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JdTemplateFamilyMapping.FAMILY_NAV = new core_1.OneToOneLink('familyNav', JdTemplateFamilyMapping, FamilyEntity_1.FamilyEntity);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JdTemplateFamilyMapping.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JdTemplateFamilyMapping, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JdTemplateFamilyMapping.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', JdTemplateFamilyMapping, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JdTemplateFamilyMapping.STATUS_NAV = new core_1.OneToOneLink('statusNav', JdTemplateFamilyMapping, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the JdTemplateFamilyMapping entity.
     */
    JdTemplateFamilyMapping._allFields = [
        JdTemplateFamilyMapping.JOB_DESC_TEMPLATE_EXTERNAL_CODE,
        JdTemplateFamilyMapping.CREATED_BY,
        JdTemplateFamilyMapping.CREATED_DATE_TIME,
        JdTemplateFamilyMapping.EXTERNAL_CODE,
        JdTemplateFamilyMapping.FAMILY,
        JdTemplateFamilyMapping.LAST_MODIFIED_BY,
        JdTemplateFamilyMapping.LAST_MODIFIED_DATE_TIME,
        JdTemplateFamilyMapping.MDF_SYSTEM_RECORD_STATUS,
        JdTemplateFamilyMapping.STATUS,
        JdTemplateFamilyMapping.SUB_MODULE,
        JdTemplateFamilyMapping.CREATED_BY_NAV,
        JdTemplateFamilyMapping.FAMILY_NAV,
        JdTemplateFamilyMapping.LAST_MODIFIED_BY_NAV,
        JdTemplateFamilyMapping.MDF_SYSTEM_RECORD_STATUS_NAV,
        JdTemplateFamilyMapping.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    JdTemplateFamilyMapping.ALL_FIELDS = new core_1.AllFields('*', JdTemplateFamilyMapping);
    /**
     * All key fields of the JdTemplateFamilyMapping entity.
     */
    JdTemplateFamilyMapping._keyFields = [JdTemplateFamilyMapping.JOB_DESC_TEMPLATE_EXTERNAL_CODE, JdTemplateFamilyMapping.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property JdTemplateFamilyMapping.
     */
    JdTemplateFamilyMapping._keys = JdTemplateFamilyMapping._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JdTemplateFamilyMapping = exports.JdTemplateFamilyMapping || (exports.JdTemplateFamilyMapping = {}));
exports.JdTemplateFamilyMapping = JdTemplateFamilyMapping;
//# sourceMappingURL=JdTemplateFamilyMapping.js.map
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
var NameElementGoRequestBuilder_1 = require("./NameElementGoRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "NameElementGO" of service "SFOData".
 */
var NameElementGo = /** @class */ (function (_super) {
    __extends(NameElementGo, _super);
    function NameElementGo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `NameElementGo`.
     * @returns A builder that constructs instances of entity type `NameElementGo`.
     */
    NameElementGo.builder = function () {
        return core_1.Entity.entityBuilder(NameElementGo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `NameElementGo` entity type.
     * @returns A `NameElementGo` request builder.
     */
    NameElementGo.requestBuilder = function () {
        return new NameElementGoRequestBuilder_1.NameElementGoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `NameElementGo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `NameElementGo`.
     */
    NameElementGo.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, NameElementGo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    NameElementGo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for NameElementGo.
     */
    NameElementGo._entityName = 'NameElementGO';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for NameElementGo.
     */
    NameElementGo._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    NameElementGo._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return NameElementGo;
}(core_1.Entity));
exports.NameElementGo = NameElementGo;
var MdfEnumValue_1 = require("./MdfEnumValue");
var User_1 = require("./User");
(function (NameElementGo) {
    /**
     * Static representation of the [[nameFormatGoExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameElementGo.NAME_FORMAT_GO_EXTERNAL_CODE = new core_1.StringField('NameFormatGO_externalCode', NameElementGo, 'Edm.String');
    /**
     * Static representation of the [[alternativeNameArtifactEnum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameElementGo.ALTERNATIVE_NAME_ARTIFACT_ENUM = new core_1.StringField('alternativeNameArtifactEnum', NameElementGo, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameElementGo.CREATED_BY = new core_1.StringField('createdBy', NameElementGo, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameElementGo.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', NameElementGo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameElementGo.EXTERNAL_CODE = new core_1.StringField('externalCode', NameElementGo, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameElementGo.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', NameElementGo, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameElementGo.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', NameElementGo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameElementGo.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', NameElementGo, 'Edm.String');
    /**
     * Static representation of the [[nameArtifactEnum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameElementGo.NAME_ARTIFACT_ENUM = new core_1.StringField('nameArtifactEnum', NameElementGo, 'Edm.String');
    /**
     * Static representation of the [[sampleData]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameElementGo.SAMPLE_DATA = new core_1.StringField('sampleData', NameElementGo, 'Edm.String');
    /**
     * Static representation of the [[separator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameElementGo.SEPARATOR = new core_1.StringField('separator', NameElementGo, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[alternativeNameArtifactEnumNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameElementGo.ALTERNATIVE_NAME_ARTIFACT_ENUM_NAV = new core_1.OneToOneLink('alternativeNameArtifactEnumNav', NameElementGo, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameElementGo.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', NameElementGo, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameElementGo.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', NameElementGo, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameElementGo.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', NameElementGo, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[nameArtifactEnumNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameElementGo.NAME_ARTIFACT_ENUM_NAV = new core_1.OneToOneLink('nameArtifactEnumNav', NameElementGo, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the NameElementGo entity.
     */
    NameElementGo._allFields = [
        NameElementGo.NAME_FORMAT_GO_EXTERNAL_CODE,
        NameElementGo.ALTERNATIVE_NAME_ARTIFACT_ENUM,
        NameElementGo.CREATED_BY,
        NameElementGo.CREATED_DATE_TIME,
        NameElementGo.EXTERNAL_CODE,
        NameElementGo.LAST_MODIFIED_BY,
        NameElementGo.LAST_MODIFIED_DATE_TIME,
        NameElementGo.MDF_SYSTEM_RECORD_STATUS,
        NameElementGo.NAME_ARTIFACT_ENUM,
        NameElementGo.SAMPLE_DATA,
        NameElementGo.SEPARATOR,
        NameElementGo.ALTERNATIVE_NAME_ARTIFACT_ENUM_NAV,
        NameElementGo.CREATED_BY_NAV,
        NameElementGo.LAST_MODIFIED_BY_NAV,
        NameElementGo.MDF_SYSTEM_RECORD_STATUS_NAV,
        NameElementGo.NAME_ARTIFACT_ENUM_NAV
    ];
    /**
     * All fields selector.
     */
    NameElementGo.ALL_FIELDS = new core_1.AllFields('*', NameElementGo);
    /**
     * All key fields of the NameElementGo entity.
     */
    NameElementGo._keyFields = [NameElementGo.NAME_FORMAT_GO_EXTERNAL_CODE, NameElementGo.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property NameElementGo.
     */
    NameElementGo._keys = NameElementGo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(NameElementGo = exports.NameElementGo || (exports.NameElementGo = {}));
exports.NameElementGo = NameElementGo;
//# sourceMappingURL=NameElementGo.js.map
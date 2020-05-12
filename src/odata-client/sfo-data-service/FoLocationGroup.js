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
var FoLocationGroupRequestBuilder_1 = require("./FoLocationGroupRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOLocationGroup" of service "SFOData".
 */
var FoLocationGroup = /** @class */ (function (_super) {
    __extends(FoLocationGroup, _super);
    function FoLocationGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoLocationGroup`.
     * @returns A builder that constructs instances of entity type `FoLocationGroup`.
     */
    FoLocationGroup.builder = function () {
        return core_1.Entity.entityBuilder(FoLocationGroup);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoLocationGroup` entity type.
     * @returns A `FoLocationGroup` request builder.
     */
    FoLocationGroup.requestBuilder = function () {
        return new FoLocationGroupRequestBuilder_1.FoLocationGroupRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLocationGroup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoLocationGroup`.
     */
    FoLocationGroup.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoLocationGroup);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoLocationGroup.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoLocationGroup.
     */
    FoLocationGroup._entityName = 'FOLocationGroup';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoLocationGroup.
     */
    FoLocationGroup._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoLocationGroup._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoLocationGroup;
}(core_1.Entity));
exports.FoLocationGroup = FoLocationGroup;
var FoTranslation_1 = require("./FoTranslation");
(function (FoLocationGroup) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocationGroup.CREATED_BY = new core_1.StringField('createdBy', FoLocationGroup, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocationGroup.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoLocationGroup, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocationGroup.CREATED_ON = new core_1.DateField('createdOn', FoLocationGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocationGroup.DESCRIPTION = new core_1.StringField('description', FoLocationGroup, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocationGroup.END_DATE = new core_1.DateField('endDate', FoLocationGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocationGroup.EXTERNAL_CODE = new core_1.StringField('externalCode', FoLocationGroup, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocationGroup.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoLocationGroup, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocationGroup.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoLocationGroup, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocationGroup.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoLocationGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocationGroup.NAME = new core_1.StringField('name', FoLocationGroup, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocationGroup.START_DATE = new core_1.DateField('startDate', FoLocationGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocationGroup.STATUS = new core_1.StringField('status', FoLocationGroup, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocationGroup.DESCRIPTION_TRANSLATION_NAV = new core_1.OneToOneLink('descriptionTranslationNav', FoLocationGroup, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoLocationGroup.NAME_TRANSLATION_NAV = new core_1.OneToOneLink('nameTranslationNav', FoLocationGroup, FoTranslation_1.FoTranslation);
    /**
     * All fields of the FoLocationGroup entity.
     */
    FoLocationGroup._allFields = [
        FoLocationGroup.CREATED_BY,
        FoLocationGroup.CREATED_DATE_TIME,
        FoLocationGroup.CREATED_ON,
        FoLocationGroup.DESCRIPTION,
        FoLocationGroup.END_DATE,
        FoLocationGroup.EXTERNAL_CODE,
        FoLocationGroup.LAST_MODIFIED_BY,
        FoLocationGroup.LAST_MODIFIED_DATE_TIME,
        FoLocationGroup.LAST_MODIFIED_ON,
        FoLocationGroup.NAME,
        FoLocationGroup.START_DATE,
        FoLocationGroup.STATUS,
        FoLocationGroup.DESCRIPTION_TRANSLATION_NAV,
        FoLocationGroup.NAME_TRANSLATION_NAV
    ];
    /**
     * All fields selector.
     */
    FoLocationGroup.ALL_FIELDS = new core_1.AllFields('*', FoLocationGroup);
    /**
     * All key fields of the FoLocationGroup entity.
     */
    FoLocationGroup._keyFields = [FoLocationGroup.EXTERNAL_CODE, FoLocationGroup.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoLocationGroup.
     */
    FoLocationGroup._keys = FoLocationGroup._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoLocationGroup = exports.FoLocationGroup || (exports.FoLocationGroup = {}));
exports.FoLocationGroup = FoLocationGroup;
//# sourceMappingURL=FoLocationGroup.js.map
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
var FoPayComponentGroupRequestBuilder_1 = require("./FoPayComponentGroupRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOPayComponentGroup" of service "SFOData".
 */
var FoPayComponentGroup = /** @class */ (function (_super) {
    __extends(FoPayComponentGroup, _super);
    function FoPayComponentGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoPayComponentGroup`.
     * @returns A builder that constructs instances of entity type `FoPayComponentGroup`.
     */
    FoPayComponentGroup.builder = function () {
        return core_1.Entity.entityBuilder(FoPayComponentGroup);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoPayComponentGroup` entity type.
     * @returns A `FoPayComponentGroup` request builder.
     */
    FoPayComponentGroup.requestBuilder = function () {
        return new FoPayComponentGroupRequestBuilder_1.FoPayComponentGroupRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoPayComponentGroup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoPayComponentGroup`.
     */
    FoPayComponentGroup.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoPayComponentGroup);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoPayComponentGroup.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoPayComponentGroup.
     */
    FoPayComponentGroup._entityName = 'FOPayComponentGroup';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoPayComponentGroup.
     */
    FoPayComponentGroup._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoPayComponentGroup._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoPayComponentGroup;
}(core_1.Entity));
exports.FoPayComponentGroup = FoPayComponentGroup;
var FoTranslation_1 = require("./FoTranslation");
var FoPayComponent_1 = require("./FoPayComponent");
(function (FoPayComponentGroup) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.CREATED_BY = new core_1.StringField('createdBy', FoPayComponentGroup, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoPayComponentGroup, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.CREATED_ON = new core_1.DateField('createdOn', FoPayComponentGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.CURRENCY = new core_1.StringField('currency', FoPayComponentGroup, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.DESCRIPTION = new core_1.StringField('description', FoPayComponentGroup, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.END_DATE = new core_1.DateField('endDate', FoPayComponentGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.EXTERNAL_CODE = new core_1.StringField('externalCode', FoPayComponentGroup, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoPayComponentGroup, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoPayComponentGroup, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoPayComponentGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.NAME = new core_1.StringField('name', FoPayComponentGroup, 'Edm.String');
    /**
     * Static representation of the [[payComponentFlx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.PAY_COMPONENT_FLX = new core_1.StringField('payComponentFlx', FoPayComponentGroup, 'Edm.String');
    /**
     * Static representation of the [[showOnCompUi]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.SHOW_ON_COMP_UI = new core_1.BooleanField('showOnCompUI', FoPayComponentGroup, 'Edm.Boolean');
    /**
     * Static representation of the [[sortOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.SORT_ORDER = new core_1.NumberField('sortOrder', FoPayComponentGroup, 'Edm.Double');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.START_DATE = new core_1.DateField('startDate', FoPayComponentGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.STATUS = new core_1.StringField('status', FoPayComponentGroup, 'Edm.String');
    /**
     * Static representation of the [[useForComparatioCalc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.USE_FOR_COMPARATIO_CALC = new core_1.BooleanField('useForComparatioCalc', FoPayComponentGroup, 'Edm.Boolean');
    /**
     * Static representation of the [[useForRangePenetration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.USE_FOR_RANGE_PENETRATION = new core_1.BooleanField('useForRangePenetration', FoPayComponentGroup, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.DESCRIPTION_TRANSLATION_NAV = new core_1.OneToOneLink('descriptionTranslationNav', FoPayComponentGroup, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.NAME_TRANSLATION_NAV = new core_1.OneToOneLink('nameTranslationNav', FoPayComponentGroup, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-many navigation property [[payComponentFlxNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoPayComponentGroup.PAY_COMPONENT_FLX_NAV = new core_1.Link('payComponentFlxNav', FoPayComponentGroup, FoPayComponent_1.FoPayComponent);
    /**
     * All fields of the FoPayComponentGroup entity.
     */
    FoPayComponentGroup._allFields = [
        FoPayComponentGroup.CREATED_BY,
        FoPayComponentGroup.CREATED_DATE_TIME,
        FoPayComponentGroup.CREATED_ON,
        FoPayComponentGroup.CURRENCY,
        FoPayComponentGroup.DESCRIPTION,
        FoPayComponentGroup.END_DATE,
        FoPayComponentGroup.EXTERNAL_CODE,
        FoPayComponentGroup.LAST_MODIFIED_BY,
        FoPayComponentGroup.LAST_MODIFIED_DATE_TIME,
        FoPayComponentGroup.LAST_MODIFIED_ON,
        FoPayComponentGroup.NAME,
        FoPayComponentGroup.PAY_COMPONENT_FLX,
        FoPayComponentGroup.SHOW_ON_COMP_UI,
        FoPayComponentGroup.SORT_ORDER,
        FoPayComponentGroup.START_DATE,
        FoPayComponentGroup.STATUS,
        FoPayComponentGroup.USE_FOR_COMPARATIO_CALC,
        FoPayComponentGroup.USE_FOR_RANGE_PENETRATION,
        FoPayComponentGroup.DESCRIPTION_TRANSLATION_NAV,
        FoPayComponentGroup.NAME_TRANSLATION_NAV,
        FoPayComponentGroup.PAY_COMPONENT_FLX_NAV
    ];
    /**
     * All fields selector.
     */
    FoPayComponentGroup.ALL_FIELDS = new core_1.AllFields('*', FoPayComponentGroup);
    /**
     * All key fields of the FoPayComponentGroup entity.
     */
    FoPayComponentGroup._keyFields = [FoPayComponentGroup.EXTERNAL_CODE, FoPayComponentGroup.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoPayComponentGroup.
     */
    FoPayComponentGroup._keys = FoPayComponentGroup._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoPayComponentGroup = exports.FoPayComponentGroup || (exports.FoPayComponentGroup = {}));
exports.FoPayComponentGroup = FoPayComponentGroup;
//# sourceMappingURL=FoPayComponentGroup.js.map
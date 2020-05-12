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
var RcmCompetencyRequestBuilder_1 = require("./RcmCompetencyRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "RcmCompetency" of service "SFOData".
 */
var RcmCompetency = /** @class */ (function (_super) {
    __extends(RcmCompetency, _super);
    function RcmCompetency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `RcmCompetency`.
     * @returns A builder that constructs instances of entity type `RcmCompetency`.
     */
    RcmCompetency.builder = function () {
        return core_1.Entity.entityBuilder(RcmCompetency);
    };
    /**
     * Returns a request builder to construct requests for operations on the `RcmCompetency` entity type.
     * @returns A `RcmCompetency` request builder.
     */
    RcmCompetency.requestBuilder = function () {
        return new RcmCompetencyRequestBuilder_1.RcmCompetencyRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RcmCompetency`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RcmCompetency`.
     */
    RcmCompetency.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, RcmCompetency);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    RcmCompetency.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for RcmCompetency.
     */
    RcmCompetency._entityName = 'RcmCompetency';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RcmCompetency.
     */
    RcmCompetency._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    RcmCompetency._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return RcmCompetency;
}(core_1.Entity));
exports.RcmCompetency = RcmCompetency;
(function (RcmCompetency) {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RcmCompetency.CATEGORY = new core_1.StringField('category', RcmCompetency, 'Edm.String');
    /**
     * Static representation of the [[commonCompetencyId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RcmCompetency.COMMON_COMPETENCY_ID = new core_1.BigNumberField('commonCompetencyId', RcmCompetency, 'Edm.Int64');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RcmCompetency.DESCRIPTION = new core_1.StringField('description', RcmCompetency, 'Edm.String');
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RcmCompetency.LOCALE = new core_1.StringField('locale', RcmCompetency, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RcmCompetency.NAME = new core_1.StringField('name', RcmCompetency, 'Edm.String');
    /**
     * Static representation of the [[rcmCompetencyId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RcmCompetency.RCM_COMPETENCY_ID = new core_1.BigNumberField('rcmCompetencyId', RcmCompetency, 'Edm.Int64');
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RcmCompetency.SOURCE = new core_1.StringField('source', RcmCompetency, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RcmCompetency.TYPE = new core_1.StringField('type', RcmCompetency, 'Edm.String');
    /**
     * All fields of the RcmCompetency entity.
     */
    RcmCompetency._allFields = [
        RcmCompetency.CATEGORY,
        RcmCompetency.COMMON_COMPETENCY_ID,
        RcmCompetency.DESCRIPTION,
        RcmCompetency.LOCALE,
        RcmCompetency.NAME,
        RcmCompetency.RCM_COMPETENCY_ID,
        RcmCompetency.SOURCE,
        RcmCompetency.TYPE
    ];
    /**
     * All fields selector.
     */
    RcmCompetency.ALL_FIELDS = new core_1.AllFields('*', RcmCompetency);
    /**
     * All key fields of the RcmCompetency entity.
     */
    RcmCompetency._keyFields = [RcmCompetency.RCM_COMPETENCY_ID];
    /**
     * Mapping of all key field names to the respective static field property RcmCompetency.
     */
    RcmCompetency._keys = RcmCompetency._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(RcmCompetency = exports.RcmCompetency || (exports.RcmCompetency = {}));
exports.RcmCompetency = RcmCompetency;
//# sourceMappingURL=RcmCompetency.js.map
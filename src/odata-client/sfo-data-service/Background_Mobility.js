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
var Background_MobilityRequestBuilder_1 = require("./Background_MobilityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_Mobility" of service "SFOData".
 */
var Background_Mobility = /** @class */ (function (_super) {
    __extends(Background_Mobility, _super);
    function Background_Mobility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_Mobility`.
     * @returns A builder that constructs instances of entity type `Background_Mobility`.
     */
    Background_Mobility.builder = function () {
        return core_1.Entity.entityBuilder(Background_Mobility);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_Mobility` entity type.
     * @returns A `Background_Mobility` request builder.
     */
    Background_Mobility.requestBuilder = function () {
        return new Background_MobilityRequestBuilder_1.Background_MobilityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Mobility`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Mobility`.
     */
    Background_Mobility.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_Mobility);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_Mobility.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_Mobility.
     */
    Background_Mobility._entityName = 'Background_Mobility';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Mobility.
     */
    Background_Mobility._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_Mobility._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_Mobility;
}(core_1.Entity));
exports.Background_Mobility = Background_Mobility;
var User_1 = require("./User");
var PicklistOption_1 = require("./PicklistOption");
(function (Background_Mobility) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Mobility.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_Mobility, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Mobility.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_Mobility, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Mobility.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_Mobility, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Mobility.LOCATION = new core_1.StringField('location', Background_Mobility, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Mobility.USER_ID = new core_1.StringField('userId', Background_Mobility, 'Edm.String');
    /**
     * Static representation of the [[willingness]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Mobility.WILLINGNESS = new core_1.StringField('willingness', Background_Mobility, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Mobility.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_Mobility, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[willingnessNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Mobility.WILLINGNESS_NAV = new core_1.OneToOneLink('willingnessNav', Background_Mobility, PicklistOption_1.PicklistOption);
    /**
     * All fields of the Background_Mobility entity.
     */
    Background_Mobility._allFields = [
        Background_Mobility.BACKGROUND_ELEMENT_ID,
        Background_Mobility.BG_ORDER_POS,
        Background_Mobility.LAST_MODIFIED_DATE,
        Background_Mobility.LOCATION,
        Background_Mobility.USER_ID,
        Background_Mobility.WILLINGNESS,
        Background_Mobility.USER_ID_NAV,
        Background_Mobility.WILLINGNESS_NAV
    ];
    /**
     * All fields selector.
     */
    Background_Mobility.ALL_FIELDS = new core_1.AllFields('*', Background_Mobility);
    /**
     * All key fields of the Background_Mobility entity.
     */
    Background_Mobility._keyFields = [Background_Mobility.BACKGROUND_ELEMENT_ID, Background_Mobility.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_Mobility.
     */
    Background_Mobility._keys = Background_Mobility._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_Mobility = exports.Background_Mobility || (exports.Background_Mobility = {}));
exports.Background_Mobility = Background_Mobility;
//# sourceMappingURL=Background_Mobility.js.map
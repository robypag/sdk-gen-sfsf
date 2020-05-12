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
var Background_PromotabilityRequestBuilder_1 = require("./Background_PromotabilityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_Promotability" of service "SFOData".
 */
var Background_Promotability = /** @class */ (function (_super) {
    __extends(Background_Promotability, _super);
    function Background_Promotability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_Promotability`.
     * @returns A builder that constructs instances of entity type `Background_Promotability`.
     */
    Background_Promotability.builder = function () {
        return core_1.Entity.entityBuilder(Background_Promotability);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_Promotability` entity type.
     * @returns A `Background_Promotability` request builder.
     */
    Background_Promotability.requestBuilder = function () {
        return new Background_PromotabilityRequestBuilder_1.Background_PromotabilityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Promotability`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Promotability`.
     */
    Background_Promotability.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_Promotability);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_Promotability.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_Promotability.
     */
    Background_Promotability._entityName = 'Background_Promotability';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Promotability.
     */
    Background_Promotability._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_Promotability._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_Promotability;
}(core_1.Entity));
exports.Background_Promotability = Background_Promotability;
var PicklistOption_1 = require("./PicklistOption");
var User_1 = require("./User");
(function (Background_Promotability) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Promotability.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_Promotability, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Promotability.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_Promotability, 'Edm.Int64');
    /**
     * Static representation of the [[function]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Promotability.FUNCTION = new core_1.StringField('function', Background_Promotability, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Promotability.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_Promotability, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[level]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Promotability.LEVEL = new core_1.StringField('level', Background_Promotability, 'Edm.String');
    /**
     * Static representation of the [[timeframe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Promotability.TIMEFRAME = new core_1.StringField('timeframe', Background_Promotability, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Promotability.USER_ID = new core_1.StringField('userId', Background_Promotability, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[functionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Promotability.FUNCTION_NAV = new core_1.OneToOneLink('functionNav', Background_Promotability, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[levelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Promotability.LEVEL_NAV = new core_1.OneToOneLink('levelNav', Background_Promotability, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[timeframeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Promotability.TIMEFRAME_NAV = new core_1.OneToOneLink('timeframeNav', Background_Promotability, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Promotability.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_Promotability, User_1.User);
    /**
     * All fields of the Background_Promotability entity.
     */
    Background_Promotability._allFields = [
        Background_Promotability.BACKGROUND_ELEMENT_ID,
        Background_Promotability.BG_ORDER_POS,
        Background_Promotability.FUNCTION,
        Background_Promotability.LAST_MODIFIED_DATE,
        Background_Promotability.LEVEL,
        Background_Promotability.TIMEFRAME,
        Background_Promotability.USER_ID,
        Background_Promotability.FUNCTION_NAV,
        Background_Promotability.LEVEL_NAV,
        Background_Promotability.TIMEFRAME_NAV,
        Background_Promotability.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_Promotability.ALL_FIELDS = new core_1.AllFields('*', Background_Promotability);
    /**
     * All key fields of the Background_Promotability entity.
     */
    Background_Promotability._keyFields = [Background_Promotability.BACKGROUND_ELEMENT_ID, Background_Promotability.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_Promotability.
     */
    Background_Promotability._keys = Background_Promotability._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_Promotability = exports.Background_Promotability || (exports.Background_Promotability = {}));
exports.Background_Promotability = Background_Promotability;
//# sourceMappingURL=Background_Promotability.js.map
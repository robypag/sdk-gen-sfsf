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
var Background_SpecialAssignRequestBuilder_1 = require("./Background_SpecialAssignRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_SpecialAssign" of service "SFOData".
 */
var Background_SpecialAssign = /** @class */ (function (_super) {
    __extends(Background_SpecialAssign, _super);
    function Background_SpecialAssign() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_SpecialAssign`.
     * @returns A builder that constructs instances of entity type `Background_SpecialAssign`.
     */
    Background_SpecialAssign.builder = function () {
        return core_1.Entity.entityBuilder(Background_SpecialAssign);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_SpecialAssign` entity type.
     * @returns A `Background_SpecialAssign` request builder.
     */
    Background_SpecialAssign.requestBuilder = function () {
        return new Background_SpecialAssignRequestBuilder_1.Background_SpecialAssignRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_SpecialAssign`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_SpecialAssign`.
     */
    Background_SpecialAssign.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_SpecialAssign);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_SpecialAssign.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_SpecialAssign.
     */
    Background_SpecialAssign._entityName = 'Background_SpecialAssign';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_SpecialAssign.
     */
    Background_SpecialAssign._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_SpecialAssign._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_SpecialAssign;
}(core_1.Entity));
exports.Background_SpecialAssign = Background_SpecialAssign;
var User_1 = require("./User");
(function (Background_SpecialAssign) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_SpecialAssign.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_SpecialAssign, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_SpecialAssign.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_SpecialAssign, 'Edm.Int64');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_SpecialAssign.DESCRIPTION = new core_1.StringField('description', Background_SpecialAssign, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_SpecialAssign.END_DATE = new core_1.DateField('endDate', Background_SpecialAssign, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_SpecialAssign.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_SpecialAssign, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_SpecialAssign.PROJECT = new core_1.StringField('project', Background_SpecialAssign, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_SpecialAssign.START_DATE = new core_1.DateField('startDate', Background_SpecialAssign, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_SpecialAssign.USER_ID = new core_1.StringField('userId', Background_SpecialAssign, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_SpecialAssign.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_SpecialAssign, User_1.User);
    /**
     * All fields of the Background_SpecialAssign entity.
     */
    Background_SpecialAssign._allFields = [
        Background_SpecialAssign.BACKGROUND_ELEMENT_ID,
        Background_SpecialAssign.BG_ORDER_POS,
        Background_SpecialAssign.DESCRIPTION,
        Background_SpecialAssign.END_DATE,
        Background_SpecialAssign.LAST_MODIFIED_DATE,
        Background_SpecialAssign.PROJECT,
        Background_SpecialAssign.START_DATE,
        Background_SpecialAssign.USER_ID,
        Background_SpecialAssign.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_SpecialAssign.ALL_FIELDS = new core_1.AllFields('*', Background_SpecialAssign);
    /**
     * All key fields of the Background_SpecialAssign entity.
     */
    Background_SpecialAssign._keyFields = [Background_SpecialAssign.BACKGROUND_ELEMENT_ID, Background_SpecialAssign.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_SpecialAssign.
     */
    Background_SpecialAssign._keys = Background_SpecialAssign._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_SpecialAssign = exports.Background_SpecialAssign || (exports.Background_SpecialAssign = {}));
exports.Background_SpecialAssign = Background_SpecialAssign;
//# sourceMappingURL=Background_SpecialAssign.js.map
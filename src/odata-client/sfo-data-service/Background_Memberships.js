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
var Background_MembershipsRequestBuilder_1 = require("./Background_MembershipsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_Memberships" of service "SFOData".
 */
var Background_Memberships = /** @class */ (function (_super) {
    __extends(Background_Memberships, _super);
    function Background_Memberships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_Memberships`.
     * @returns A builder that constructs instances of entity type `Background_Memberships`.
     */
    Background_Memberships.builder = function () {
        return core_1.Entity.entityBuilder(Background_Memberships);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_Memberships` entity type.
     * @returns A `Background_Memberships` request builder.
     */
    Background_Memberships.requestBuilder = function () {
        return new Background_MembershipsRequestBuilder_1.Background_MembershipsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Memberships`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Memberships`.
     */
    Background_Memberships.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_Memberships);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_Memberships.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_Memberships.
     */
    Background_Memberships._entityName = 'Background_Memberships';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Memberships.
     */
    Background_Memberships._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_Memberships._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_Memberships;
}(core_1.Entity));
exports.Background_Memberships = Background_Memberships;
var User_1 = require("./User");
(function (Background_Memberships) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Memberships.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_Memberships, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Memberships.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_Memberships, 'Edm.Int64');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Memberships.END_DATE = new core_1.DateField('endDate', Background_Memberships, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Memberships.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_Memberships, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[organization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Memberships.ORGANIZATION = new core_1.StringField('organization', Background_Memberships, 'Edm.String');
    /**
     * Static representation of the [[role]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Memberships.ROLE = new core_1.StringField('role', Background_Memberships, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Memberships.START_DATE = new core_1.DateField('startDate', Background_Memberships, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Memberships.USER_ID = new core_1.StringField('userId', Background_Memberships, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Memberships.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_Memberships, User_1.User);
    /**
     * All fields of the Background_Memberships entity.
     */
    Background_Memberships._allFields = [
        Background_Memberships.BACKGROUND_ELEMENT_ID,
        Background_Memberships.BG_ORDER_POS,
        Background_Memberships.END_DATE,
        Background_Memberships.LAST_MODIFIED_DATE,
        Background_Memberships.ORGANIZATION,
        Background_Memberships.ROLE,
        Background_Memberships.START_DATE,
        Background_Memberships.USER_ID,
        Background_Memberships.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_Memberships.ALL_FIELDS = new core_1.AllFields('*', Background_Memberships);
    /**
     * All key fields of the Background_Memberships entity.
     */
    Background_Memberships._keyFields = [Background_Memberships.BACKGROUND_ELEMENT_ID, Background_Memberships.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_Memberships.
     */
    Background_Memberships._keys = Background_Memberships._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_Memberships = exports.Background_Memberships || (exports.Background_Memberships = {}));
exports.Background_Memberships = Background_Memberships;
//# sourceMappingURL=Background_Memberships.js.map
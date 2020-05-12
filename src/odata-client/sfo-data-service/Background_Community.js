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
var Background_CommunityRequestBuilder_1 = require("./Background_CommunityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_Community" of service "SFOData".
 */
var Background_Community = /** @class */ (function (_super) {
    __extends(Background_Community, _super);
    function Background_Community() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_Community`.
     * @returns A builder that constructs instances of entity type `Background_Community`.
     */
    Background_Community.builder = function () {
        return core_1.Entity.entityBuilder(Background_Community);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_Community` entity type.
     * @returns A `Background_Community` request builder.
     */
    Background_Community.requestBuilder = function () {
        return new Background_CommunityRequestBuilder_1.Background_CommunityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Community`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Community`.
     */
    Background_Community.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_Community);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_Community.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_Community.
     */
    Background_Community._entityName = 'Background_Community';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Community.
     */
    Background_Community._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_Community._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_Community;
}(core_1.Entity));
exports.Background_Community = Background_Community;
var User_1 = require("./User");
(function (Background_Community) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Community.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_Community, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Community.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_Community, 'Edm.Int64');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Community.END_DATE = new core_1.DateField('endDate', Background_Community, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Community.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_Community, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Community.NAME = new core_1.StringField('name', Background_Community, 'Edm.String');
    /**
     * Static representation of the [[role]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Community.ROLE = new core_1.StringField('role', Background_Community, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Community.START_DATE = new core_1.DateField('startDate', Background_Community, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Community.USER_ID = new core_1.StringField('userId', Background_Community, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Community.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_Community, User_1.User);
    /**
     * All fields of the Background_Community entity.
     */
    Background_Community._allFields = [
        Background_Community.BACKGROUND_ELEMENT_ID,
        Background_Community.BG_ORDER_POS,
        Background_Community.END_DATE,
        Background_Community.LAST_MODIFIED_DATE,
        Background_Community.NAME,
        Background_Community.ROLE,
        Background_Community.START_DATE,
        Background_Community.USER_ID,
        Background_Community.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_Community.ALL_FIELDS = new core_1.AllFields('*', Background_Community);
    /**
     * All key fields of the Background_Community entity.
     */
    Background_Community._keyFields = [Background_Community.BACKGROUND_ELEMENT_ID, Background_Community.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_Community.
     */
    Background_Community._keys = Background_Community._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_Community = exports.Background_Community || (exports.Background_Community = {}));
exports.Background_Community = Background_Community;
//# sourceMappingURL=Background_Community.js.map
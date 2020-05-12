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
var Background_CertificatesRequestBuilder_1 = require("./Background_CertificatesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_Certificates" of service "SFOData".
 */
var Background_Certificates = /** @class */ (function (_super) {
    __extends(Background_Certificates, _super);
    function Background_Certificates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_Certificates`.
     * @returns A builder that constructs instances of entity type `Background_Certificates`.
     */
    Background_Certificates.builder = function () {
        return core_1.Entity.entityBuilder(Background_Certificates);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_Certificates` entity type.
     * @returns A `Background_Certificates` request builder.
     */
    Background_Certificates.requestBuilder = function () {
        return new Background_CertificatesRequestBuilder_1.Background_CertificatesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Certificates`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Certificates`.
     */
    Background_Certificates.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_Certificates);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_Certificates.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_Certificates.
     */
    Background_Certificates._entityName = 'Background_Certificates';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Certificates.
     */
    Background_Certificates._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_Certificates._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_Certificates;
}(core_1.Entity));
exports.Background_Certificates = Background_Certificates;
var User_1 = require("./User");
(function (Background_Certificates) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Certificates.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_Certificates, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Certificates.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_Certificates, 'Edm.Int64');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Certificates.DESCRIPTION = new core_1.StringField('description', Background_Certificates, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Certificates.END_DATE = new core_1.DateField('endDate', Background_Certificates, 'Edm.DateTime');
    /**
     * Static representation of the [[institution]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Certificates.INSTITUTION = new core_1.StringField('institution', Background_Certificates, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Certificates.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_Certificates, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Certificates.NAME = new core_1.StringField('name', Background_Certificates, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Certificates.START_DATE = new core_1.DateField('startDate', Background_Certificates, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Certificates.USER_ID = new core_1.StringField('userId', Background_Certificates, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Certificates.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_Certificates, User_1.User);
    /**
     * All fields of the Background_Certificates entity.
     */
    Background_Certificates._allFields = [
        Background_Certificates.BACKGROUND_ELEMENT_ID,
        Background_Certificates.BG_ORDER_POS,
        Background_Certificates.DESCRIPTION,
        Background_Certificates.END_DATE,
        Background_Certificates.INSTITUTION,
        Background_Certificates.LAST_MODIFIED_DATE,
        Background_Certificates.NAME,
        Background_Certificates.START_DATE,
        Background_Certificates.USER_ID,
        Background_Certificates.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_Certificates.ALL_FIELDS = new core_1.AllFields('*', Background_Certificates);
    /**
     * All key fields of the Background_Certificates entity.
     */
    Background_Certificates._keyFields = [Background_Certificates.BACKGROUND_ELEMENT_ID, Background_Certificates.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_Certificates.
     */
    Background_Certificates._keys = Background_Certificates._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_Certificates = exports.Background_Certificates || (exports.Background_Certificates = {}));
exports.Background_Certificates = Background_Certificates;
//# sourceMappingURL=Background_Certificates.js.map
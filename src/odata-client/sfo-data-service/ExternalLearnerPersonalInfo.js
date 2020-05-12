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
var ExternalLearnerPersonalInfoRequestBuilder_1 = require("./ExternalLearnerPersonalInfoRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ExternalLearnerPersonalInfo" of service "SFOData".
 */
var ExternalLearnerPersonalInfo = /** @class */ (function (_super) {
    __extends(ExternalLearnerPersonalInfo, _super);
    function ExternalLearnerPersonalInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ExternalLearnerPersonalInfo`.
     * @returns A builder that constructs instances of entity type `ExternalLearnerPersonalInfo`.
     */
    ExternalLearnerPersonalInfo.builder = function () {
        return core_1.Entity.entityBuilder(ExternalLearnerPersonalInfo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ExternalLearnerPersonalInfo` entity type.
     * @returns A `ExternalLearnerPersonalInfo` request builder.
     */
    ExternalLearnerPersonalInfo.requestBuilder = function () {
        return new ExternalLearnerPersonalInfoRequestBuilder_1.ExternalLearnerPersonalInfoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalLearnerPersonalInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExternalLearnerPersonalInfo`.
     */
    ExternalLearnerPersonalInfo.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ExternalLearnerPersonalInfo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ExternalLearnerPersonalInfo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ExternalLearnerPersonalInfo.
     */
    ExternalLearnerPersonalInfo._entityName = 'ExternalLearnerPersonalInfo';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExternalLearnerPersonalInfo.
     */
    ExternalLearnerPersonalInfo._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ExternalLearnerPersonalInfo._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ExternalLearnerPersonalInfo;
}(core_1.Entity));
exports.ExternalLearnerPersonalInfo = ExternalLearnerPersonalInfo;
(function (ExternalLearnerPersonalInfo) {
    /**
     * Static representation of the [[birthName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.BIRTH_NAME = new core_1.StringField('birthName', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[certificateEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.CERTIFICATE_END_DATE = new core_1.DateField('certificateEndDate', ExternalLearnerPersonalInfo, 'Edm.DateTime');
    /**
     * Static representation of the [[certificateStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.CERTIFICATE_START_DATE = new core_1.DateField('certificateStartDate', ExternalLearnerPersonalInfo, 'Edm.DateTime');
    /**
     * Static representation of the [[challengeStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.CHALLENGE_STATUS = new core_1.BooleanField('challengeStatus', ExternalLearnerPersonalInfo, 'Edm.Boolean');
    /**
     * Static representation of the [[countryOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.COUNTRY_OF_BIRTH = new core_1.StringField('countryOfBirth', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[customString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.CUSTOM_STRING_1 = new core_1.StringField('customString1', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[dateOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.DATE_OF_BIRTH = new core_1.DateField('dateOfBirth', ExternalLearnerPersonalInfo, 'Edm.DateTime');
    /**
     * Static representation of the [[dateOfDeath]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.DATE_OF_DEATH = new core_1.DateField('dateOfDeath', ExternalLearnerPersonalInfo, 'Edm.DateTime');
    /**
     * Static representation of the [[displayName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.DISPLAY_NAME = new core_1.StringField('displayName', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[displayNameAlt1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.DISPLAY_NAME_ALT_1 = new core_1.StringField('displayNameAlt1', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[displayNameAlt2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.DISPLAY_NAME_ALT_2 = new core_1.StringField('displayNameAlt2', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.FIRST_NAME = new core_1.StringField('firstName', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[firstNameAlt1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.FIRST_NAME_ALT_1 = new core_1.StringField('firstNameAlt1', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[firstNameAlt2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.FIRST_NAME_ALT_2 = new core_1.StringField('firstNameAlt2', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[formalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.FORMAL_NAME = new core_1.StringField('formalName', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[formalNameAlt1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.FORMAL_NAME_ALT_1 = new core_1.StringField('formalNameAlt1', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[formalNameAlt2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.FORMAL_NAME_ALT_2 = new core_1.StringField('formalNameAlt2', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[gender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.GENDER = new core_1.StringField('gender', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[initials]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.INITIALS = new core_1.StringField('initials', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[isOverridden]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.IS_OVERRIDDEN = new core_1.BooleanField('isOverridden', ExternalLearnerPersonalInfo, 'Edm.Boolean');
    /**
     * Static representation of the [[isDeleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.IS_DELETED = new core_1.BooleanField('is_deleted', ExternalLearnerPersonalInfo, 'Edm.Boolean');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.ITEM_ID = new core_1.BigNumberField('itemId', ExternalLearnerPersonalInfo, 'Edm.Decimal');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', ExternalLearnerPersonalInfo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.LAST_NAME = new core_1.StringField('lastName', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[lastNameAlt1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.LAST_NAME_ALT_1 = new core_1.StringField('lastNameAlt1', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[lastNameAlt2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.LAST_NAME_ALT_2 = new core_1.StringField('lastNameAlt2', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[maritalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.MARITAL_STATUS = new core_1.StringField('maritalStatus', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.MIDDLE_NAME = new core_1.StringField('middleName', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[middleNameAlt1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.MIDDLE_NAME_ALT_1 = new core_1.StringField('middleNameAlt1', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[middleNameAlt2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.MIDDLE_NAME_ALT_2 = new core_1.StringField('middleNameAlt2', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[namePrefix]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.NAME_PREFIX = new core_1.StringField('namePrefix', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[nationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.NATIONALITY = new core_1.StringField('nationality', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[nativePreferredLang]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.NATIVE_PREFERRED_LANG = new core_1.StringField('nativePreferredLang', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[preferredName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.PREFERRED_NAME = new core_1.StringField('preferredName', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[salutation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.SALUTATION = new core_1.StringField('salutation', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[secondLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.SECOND_LAST_NAME = new core_1.StringField('secondLastName', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[secondNationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.SECOND_NATIONALITY = new core_1.StringField('secondNationality', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[secondTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.SECOND_TITLE = new core_1.StringField('secondTitle', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[since]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.SINCE = new core_1.DateField('since', ExternalLearnerPersonalInfo, 'Edm.DateTime');
    /**
     * Static representation of the [[suffix]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.SUFFIX = new core_1.StringField('suffix', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[thirdNationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.THIRD_NATIONALITY = new core_1.StringField('thirdNationality', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPersonalInfo.TITLE = new core_1.StringField('title', ExternalLearnerPersonalInfo, 'Edm.String');
    /**
     * All fields of the ExternalLearnerPersonalInfo entity.
     */
    ExternalLearnerPersonalInfo._allFields = [
        ExternalLearnerPersonalInfo.BIRTH_NAME,
        ExternalLearnerPersonalInfo.CERTIFICATE_END_DATE,
        ExternalLearnerPersonalInfo.CERTIFICATE_START_DATE,
        ExternalLearnerPersonalInfo.CHALLENGE_STATUS,
        ExternalLearnerPersonalInfo.COUNTRY_OF_BIRTH,
        ExternalLearnerPersonalInfo.CUSTOM_STRING_1,
        ExternalLearnerPersonalInfo.DATE_OF_BIRTH,
        ExternalLearnerPersonalInfo.DATE_OF_DEATH,
        ExternalLearnerPersonalInfo.DISPLAY_NAME,
        ExternalLearnerPersonalInfo.DISPLAY_NAME_ALT_1,
        ExternalLearnerPersonalInfo.DISPLAY_NAME_ALT_2,
        ExternalLearnerPersonalInfo.FIRST_NAME,
        ExternalLearnerPersonalInfo.FIRST_NAME_ALT_1,
        ExternalLearnerPersonalInfo.FIRST_NAME_ALT_2,
        ExternalLearnerPersonalInfo.FORMAL_NAME,
        ExternalLearnerPersonalInfo.FORMAL_NAME_ALT_1,
        ExternalLearnerPersonalInfo.FORMAL_NAME_ALT_2,
        ExternalLearnerPersonalInfo.GENDER,
        ExternalLearnerPersonalInfo.INITIALS,
        ExternalLearnerPersonalInfo.IS_OVERRIDDEN,
        ExternalLearnerPersonalInfo.IS_DELETED,
        ExternalLearnerPersonalInfo.ITEM_ID,
        ExternalLearnerPersonalInfo.LAST_MODIFIED_DATE_TIME,
        ExternalLearnerPersonalInfo.LAST_NAME,
        ExternalLearnerPersonalInfo.LAST_NAME_ALT_1,
        ExternalLearnerPersonalInfo.LAST_NAME_ALT_2,
        ExternalLearnerPersonalInfo.MARITAL_STATUS,
        ExternalLearnerPersonalInfo.MIDDLE_NAME,
        ExternalLearnerPersonalInfo.MIDDLE_NAME_ALT_1,
        ExternalLearnerPersonalInfo.MIDDLE_NAME_ALT_2,
        ExternalLearnerPersonalInfo.NAME_PREFIX,
        ExternalLearnerPersonalInfo.NATIONALITY,
        ExternalLearnerPersonalInfo.NATIVE_PREFERRED_LANG,
        ExternalLearnerPersonalInfo.PREFERRED_NAME,
        ExternalLearnerPersonalInfo.SALUTATION,
        ExternalLearnerPersonalInfo.SECOND_LAST_NAME,
        ExternalLearnerPersonalInfo.SECOND_NATIONALITY,
        ExternalLearnerPersonalInfo.SECOND_TITLE,
        ExternalLearnerPersonalInfo.SINCE,
        ExternalLearnerPersonalInfo.SUFFIX,
        ExternalLearnerPersonalInfo.THIRD_NATIONALITY,
        ExternalLearnerPersonalInfo.TITLE
    ];
    /**
     * All fields selector.
     */
    ExternalLearnerPersonalInfo.ALL_FIELDS = new core_1.AllFields('*', ExternalLearnerPersonalInfo);
    /**
     * All key fields of the ExternalLearnerPersonalInfo entity.
     */
    ExternalLearnerPersonalInfo._keyFields = [ExternalLearnerPersonalInfo.ITEM_ID];
    /**
     * Mapping of all key field names to the respective static field property ExternalLearnerPersonalInfo.
     */
    ExternalLearnerPersonalInfo._keys = ExternalLearnerPersonalInfo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ExternalLearnerPersonalInfo = exports.ExternalLearnerPersonalInfo || (exports.ExternalLearnerPersonalInfo = {}));
exports.ExternalLearnerPersonalInfo = ExternalLearnerPersonalInfo;
//# sourceMappingURL=ExternalLearnerPersonalInfo.js.map
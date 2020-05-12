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
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Onb2RehireCheckParams_1 = require("./Onb2RehireCheckParams");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[Onb2OnboardeeDetails.build]] instead.
 */
function createOnb2OnboardeeDetails(json) {
    return Onb2OnboardeeDetails.build(json);
}
exports.createOnb2OnboardeeDetails = createOnb2OnboardeeDetails;
/**
 * Onb2OnboardeeDetailsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var Onb2OnboardeeDetailsField = /** @class */ (function (_super) {
    __extends(Onb2OnboardeeDetailsField, _super);
    function Onb2OnboardeeDetailsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[Onb2OnboardeeDetails.applicationId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.applicationId = new core_1.ComplexTypeStringPropertyField('applicationId', _this, 'Edm.String');
        /**
         * Representation of the [[Onb2OnboardeeDetails.email]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.email = new core_1.ComplexTypeStringPropertyField('email', _this, 'Edm.String');
        /**
         * Representation of the [[Onb2OnboardeeDetails.rehireCheckParams]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rehireCheckParams = new Onb2RehireCheckParams_1.Onb2RehireCheckParamsField('rehireCheckParams', _this);
        /**
         * Representation of the [[Onb2OnboardeeDetails.rehireUser]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rehireUser = new core_1.ComplexTypeStringPropertyField('rehireUser', _this, 'Edm.String');
        /**
         * Representation of the [[Onb2OnboardeeDetails.shouldCancelOnboarding]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shouldCancelOnboarding = new core_1.ComplexTypeBooleanPropertyField('shouldCancelOnboarding', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Onb2OnboardeeDetails.shouldCreateNewHire]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shouldCreateNewHire = new core_1.ComplexTypeBooleanPropertyField('shouldCreateNewHire', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Onb2OnboardeeDetails.userId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userId = new core_1.ComplexTypeStringPropertyField('userId', _this, 'Edm.String');
        /**
         * Representation of the [[Onb2OnboardeeDetails.userName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userName = new core_1.ComplexTypeStringPropertyField('userName', _this, 'Edm.String');
        return _this;
    }
    return Onb2OnboardeeDetailsField;
}(core_1.ComplexTypeField));
exports.Onb2OnboardeeDetailsField = Onb2OnboardeeDetailsField;
var Onb2OnboardeeDetails;
(function (Onb2OnboardeeDetails) {
    function build(json) {
        return core_1.createComplexType(json, {
            applicationId: function (applicationId) { return ({ applicationId: core_1.edmToTs(applicationId, 'Edm.String') }); },
            email: function (email) { return ({ email: core_1.edmToTs(email, 'Edm.String') }); },
            rehireCheckParams: function (rehireCheckParams) { return ({ rehireCheckParams: Onb2RehireCheckParams_1.Onb2RehireCheckParams.build(rehireCheckParams) }); },
            rehireUser: function (rehireUser) { return ({ rehireUser: core_1.edmToTs(rehireUser, 'Edm.String') }); },
            shouldCancelOnboarding: function (shouldCancelOnboarding) { return ({ shouldCancelOnboarding: core_1.edmToTs(shouldCancelOnboarding, 'Edm.Boolean') }); },
            shouldCreateNewHire: function (shouldCreateNewHire) { return ({ shouldCreateNewHire: core_1.edmToTs(shouldCreateNewHire, 'Edm.Boolean') }); },
            userId: function (userId) { return ({ userId: core_1.edmToTs(userId, 'Edm.String') }); },
            userName: function (userName) { return ({ userName: core_1.edmToTs(userName, 'Edm.String') }); }
        });
    }
    Onb2OnboardeeDetails.build = build;
})(Onb2OnboardeeDetails = exports.Onb2OnboardeeDetails || (exports.Onb2OnboardeeDetails = {}));
//# sourceMappingURL=Onb2OnboardeeDetails.js.map
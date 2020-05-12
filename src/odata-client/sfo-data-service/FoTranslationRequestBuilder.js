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
var core_1 = require("@sap-cloud-sdk/core");
var FoTranslation_1 = require("./FoTranslation");
/**
 * Request builder class for operations supported on the [[FoTranslation]] entity.
 */
var FoTranslationRequestBuilder = /** @class */ (function (_super) {
    __extends(FoTranslationRequestBuilder, _super);
    function FoTranslationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoTranslation` entity based on its keys.
     * @param externalCode Key property. See [[FoTranslation.externalCode]].
     * @returns A request builder for creating requests to retrieve one `FoTranslation` entity based on its keys.
     */
    FoTranslationRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(FoTranslation_1.FoTranslation, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `FoTranslation` entities.
     * @returns A request builder for creating requests to retrieve all `FoTranslation` entities.
     */
    FoTranslationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoTranslation_1.FoTranslation);
    };
    return FoTranslationRequestBuilder;
}(core_1.RequestBuilder));
exports.FoTranslationRequestBuilder = FoTranslationRequestBuilder;
//# sourceMappingURL=FoTranslationRequestBuilder.js.map
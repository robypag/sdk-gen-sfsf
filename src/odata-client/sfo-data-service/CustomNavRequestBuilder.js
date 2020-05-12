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
var CustomNav_1 = require("./CustomNav");
/**
 * Request builder class for operations supported on the [[CustomNav]] entity.
 */
var CustomNavRequestBuilder = /** @class */ (function (_super) {
    __extends(CustomNavRequestBuilder, _super);
    function CustomNavRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustomNav` entity based on its keys.
     * @param title Key property. See [[CustomNav.title]].
     * @returns A request builder for creating requests to retrieve one `CustomNav` entity based on its keys.
     */
    CustomNavRequestBuilder.prototype.getByKey = function (title) {
        return new core_1.GetByKeyRequestBuilder(CustomNav_1.CustomNav, { title: title });
    };
    /**
     * Returns a request builder for querying all `CustomNav` entities.
     * @returns A request builder for creating requests to retrieve all `CustomNav` entities.
     */
    CustomNavRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CustomNav_1.CustomNav);
    };
    CustomNavRequestBuilder.prototype.delete = function (titleOrEntity) {
        return new core_1.DeleteRequestBuilder(CustomNav_1.CustomNav, titleOrEntity instanceof CustomNav_1.CustomNav ? titleOrEntity : { title: titleOrEntity });
    };
    return CustomNavRequestBuilder;
}(core_1.RequestBuilder));
exports.CustomNavRequestBuilder = CustomNavRequestBuilder;
//# sourceMappingURL=CustomNavRequestBuilder.js.map
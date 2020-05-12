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
var core_1 = require("@sap-cloud-sdk/core");
var ExtPersonalInfo_1 = require("./ExtPersonalInfo");
/**
 * Request builder class for operations supported on the [[ExtPersonalInfo]] entity.
 */
var ExtPersonalInfoRequestBuilder = /** @class */ (function (_super) {
    __extends(ExtPersonalInfoRequestBuilder, _super);
    function ExtPersonalInfoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ExtPersonalInfo` entity based on its keys.
     * @param personalInfoId Key property. See [[ExtPersonalInfo.personalInfoId]].
     * @returns A request builder for creating requests to retrieve one `ExtPersonalInfo` entity based on its keys.
     */
    ExtPersonalInfoRequestBuilder.prototype.getByKey = function (personalInfoId) {
        return new core_1.GetByKeyRequestBuilder(ExtPersonalInfo_1.ExtPersonalInfo, { personalInfoId: personalInfoId });
    };
    /**
     * Returns a request builder for querying all `ExtPersonalInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ExtPersonalInfo` entities.
     */
    ExtPersonalInfoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ExtPersonalInfo_1.ExtPersonalInfo);
    };
    /**
     * Returns a request builder for creating a `ExtPersonalInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExtPersonalInfo`.
     */
    ExtPersonalInfoRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ExtPersonalInfo_1.ExtPersonalInfo, entity);
    };
    return ExtPersonalInfoRequestBuilder;
}(core_1.RequestBuilder));
exports.ExtPersonalInfoRequestBuilder = ExtPersonalInfoRequestBuilder;
//# sourceMappingURL=ExtPersonalInfoRequestBuilder.js.map
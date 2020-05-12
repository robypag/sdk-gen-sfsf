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
var FoCompany_1 = require("./FoCompany");
/**
 * Request builder class for operations supported on the [[FoCompany]] entity.
 */
var FoCompanyRequestBuilder = /** @class */ (function (_super) {
    __extends(FoCompanyRequestBuilder, _super);
    function FoCompanyRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoCompany` entity based on its keys.
     * @param externalCode Key property. See [[FoCompany.externalCode]].
     * @param startDate Key property. See [[FoCompany.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoCompany` entity based on its keys.
     */
    FoCompanyRequestBuilder.prototype.getByKey = function (externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoCompany_1.FoCompany, {
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoCompany` entities.
     * @returns A request builder for creating requests to retrieve all `FoCompany` entities.
     */
    FoCompanyRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoCompany_1.FoCompany);
    };
    /**
     * Returns a request builder for creating a `FoCompany` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FoCompany`.
     */
    FoCompanyRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(FoCompany_1.FoCompany, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FoCompany`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FoCompany`.
     */
    FoCompanyRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(FoCompany_1.FoCompany, entity);
    };
    FoCompanyRequestBuilder.prototype.delete = function (externalCodeOrEntity, startDate) {
        return new core_1.DeleteRequestBuilder(FoCompany_1.FoCompany, externalCodeOrEntity instanceof FoCompany_1.FoCompany ? externalCodeOrEntity : {
            externalCode: externalCodeOrEntity,
            startDate: startDate
        });
    };
    return FoCompanyRequestBuilder;
}(core_1.RequestBuilder));
exports.FoCompanyRequestBuilder = FoCompanyRequestBuilder;
//# sourceMappingURL=FoCompanyRequestBuilder.js.map
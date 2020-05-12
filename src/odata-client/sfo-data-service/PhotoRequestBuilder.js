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
var Photo_1 = require("./Photo");
/**
 * Request builder class for operations supported on the [[Photo]] entity.
 */
var PhotoRequestBuilder = /** @class */ (function (_super) {
    __extends(PhotoRequestBuilder, _super);
    function PhotoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Photo` entity based on its keys.
     * @param photoType Key property. See [[Photo.photoType]].
     * @param userId Key property. See [[Photo.userId]].
     * @returns A request builder for creating requests to retrieve one `Photo` entity based on its keys.
     */
    PhotoRequestBuilder.prototype.getByKey = function (photoType, userId) {
        return new core_1.GetByKeyRequestBuilder(Photo_1.Photo, {
            photoType: photoType,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Photo` entities.
     * @returns A request builder for creating requests to retrieve all `Photo` entities.
     */
    PhotoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Photo_1.Photo);
    };
    /**
     * Returns a request builder for creating a `Photo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Photo`.
     */
    PhotoRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Photo_1.Photo, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Photo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Photo`.
     */
    PhotoRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Photo_1.Photo, entity);
    };
    PhotoRequestBuilder.prototype.delete = function (photoTypeOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Photo_1.Photo, photoTypeOrEntity instanceof Photo_1.Photo ? photoTypeOrEntity : {
            photoType: photoTypeOrEntity,
            userId: userId
        });
    };
    return PhotoRequestBuilder;
}(core_1.RequestBuilder));
exports.PhotoRequestBuilder = PhotoRequestBuilder;
//# sourceMappingURL=PhotoRequestBuilder.js.map
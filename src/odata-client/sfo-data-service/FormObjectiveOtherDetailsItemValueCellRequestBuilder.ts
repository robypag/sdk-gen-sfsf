/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormObjectiveOtherDetailsItemValueCell } from './FormObjectiveOtherDetailsItemValueCell';

/**
 * Request builder class for operations supported on the [[FormObjectiveOtherDetailsItemValueCell]] entity.
 */
export class FormObjectiveOtherDetailsItemValueCellRequestBuilder extends RequestBuilder<FormObjectiveOtherDetailsItemValueCell> {
  /**
   * Returns a request builder for retrieving one `FormObjectiveOtherDetailsItemValueCell` entity based on its keys.
   * @param formContentId Key property. See [[FormObjectiveOtherDetailsItemValueCell.formContentId]].
   * @param formDataId Key property. See [[FormObjectiveOtherDetailsItemValueCell.formDataId]].
   * @param itemId Key property. See [[FormObjectiveOtherDetailsItemValueCell.itemId]].
   * @param sectionIndex Key property. See [[FormObjectiveOtherDetailsItemValueCell.sectionIndex]].
   * @param type Key property. See [[FormObjectiveOtherDetailsItemValueCell.type]].
   * @returns A request builder for creating requests to retrieve one `FormObjectiveOtherDetailsItemValueCell` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, sectionIndex: number, type: number): GetByKeyRequestBuilder<FormObjectiveOtherDetailsItemValueCell> {
    return new GetByKeyRequestBuilder(FormObjectiveOtherDetailsItemValueCell, {
      formContentId: formContentId,
      formDataId: formDataId,
      itemId: itemId,
      sectionIndex: sectionIndex,
      type: type
    });
  }

  /**
   * Returns a request builder for querying all `FormObjectiveOtherDetailsItemValueCell` entities.
   * @returns A request builder for creating requests to retrieve all `FormObjectiveOtherDetailsItemValueCell` entities.
   */
  getAll(): GetAllRequestBuilder<FormObjectiveOtherDetailsItemValueCell> {
    return new GetAllRequestBuilder(FormObjectiveOtherDetailsItemValueCell);
  }
}

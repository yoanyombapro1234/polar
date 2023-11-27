from typing import Annotated

from fastapi import APIRouter, Depends, Query
from pydantic import UUID4

from polar.account.service import account as account_service
from polar.auth.dependencies import UserRequiredAuth
from polar.authz.service import Authz
from polar.exceptions import ResourceNotFound
from polar.kit.pagination import ListResource, PaginationParamsQuery
from polar.kit.sorting import Sorting, SortingGetter
from polar.models.transaction import TransactionType
from polar.postgres import AsyncSession, get_db_session
from polar.tags.api import Tags

from .schemas import Transaction
from .service.transaction import SearchSortProperty
from .service.transaction import transaction as transaction_service

router = APIRouter(prefix="/transactions", tags=["transactions"])


SearchSorting = Annotated[
    list[Sorting[SearchSortProperty]],
    Depends(SortingGetter(SearchSortProperty, ["-created_at"])),
]


@router.get(
    "/search",
    response_model=ListResource[Transaction],
    tags=[Tags.PUBLIC],
)
async def search_transactions(
    pagination: PaginationParamsQuery,
    sorting: SearchSorting,
    auth: UserRequiredAuth,
    account_id: UUID4,
    type: TransactionType | None = Query(None),
    session: AsyncSession = Depends(get_db_session),
    authz: Authz = Depends(Authz.authz),
) -> ListResource[Transaction]:
    account = await account_service.get(session, account_id)
    if account is None:
        raise ResourceNotFound("Account not found")

    results, count = await transaction_service.search(
        session,
        auth.subject,
        account,
        authz,
        type=type,
        pagination=pagination,
        sorting=sorting,
    )

    return ListResource.from_paginated_results(
        [Transaction.from_orm(result) for result in results],
        count,
        pagination,
    )

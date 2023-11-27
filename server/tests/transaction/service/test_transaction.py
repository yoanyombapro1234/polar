import pytest

from polar.authz.service import Authz
from polar.exceptions import NotPermitted
from polar.kit.pagination import PaginationParams
from polar.models import Account, User, UserOrganization
from polar.postgres import AsyncSession
from polar.transaction.service.transaction import transaction as transaction_service

from ..conftest import create_transaction


@pytest.fixture
def authz(session: AsyncSession) -> Authz:
    return Authz(session)


@pytest.mark.asyncio
class TestSearch:
    async def test_account_not_permitted(
        self, session: AsyncSession, account: Account, user_second: User, authz: Authz
    ) -> None:
        with pytest.raises(NotPermitted):
            await transaction_service.search(
                session, user_second, account, authz, pagination=PaginationParams(1, 10)
            )

    async def test_valid(
        self,
        session: AsyncSession,
        account: Account,
        user: User,
        user_organization: UserOrganization,
        authz: Authz,
    ) -> None:
        await create_transaction(session)
        t2 = await create_transaction(session, account=account)
        t3 = await create_transaction(session, account=account)

        results, count = await transaction_service.search(
            session, user, account, authz, pagination=PaginationParams(1, 10)
        )

        assert count == 2
        assert len(results) == 2
        assert results[0].id == t2.id
        assert results[1].id == t3.id

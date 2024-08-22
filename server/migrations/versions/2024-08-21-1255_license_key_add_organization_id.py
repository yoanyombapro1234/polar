"""license key add organization_id

Revision ID: c626a362784d
Revises: 2316884d8266
Create Date: 2024-08-21 12:55:46.631450

"""

import sqlalchemy as sa
from alembic import op

# Polar Custom Imports

# revision identifiers, used by Alembic.
revision = "c626a362784d"
down_revision = "2316884d8266"
branch_labels: tuple[str] | None = None
depends_on: tuple[str] | None = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column(
        "license_keys", sa.Column("organization_id", sa.Uuid(), nullable=False)
    )
    op.create_index(
        op.f("ix_license_keys_organization_id"),
        "license_keys",
        ["organization_id"],
        unique=False,
    )
    op.create_foreign_key(
        op.f("license_keys_organization_id_fkey"),
        "license_keys",
        "organizations",
        ["organization_id"],
        ["id"],
        ondelete="cascade",
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(
        op.f("license_keys_organization_id_fkey"), "license_keys", type_="foreignkey"
    )
    op.drop_index(op.f("ix_license_keys_organization_id"), table_name="license_keys")
    op.drop_column("license_keys", "organization_id")
    # ### end Alembic commands ###